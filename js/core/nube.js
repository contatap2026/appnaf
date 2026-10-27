/* =========================================================
   NUBE — cuentas y avance guardado en Supabase.
   - El avance se sigue guardando primero en el celular
     (NAF.Progreso) y desde ahí se sube a Supabase.
   - Sin internet, la app sigue funcionando: los cambios quedan
     pendientes y se suben al volver la conexión.
   - Si NAF.CONFIG no tiene claves (o es la versión artefacto),
     todo esto se desactiva y la app funciona solo en local.
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Nube = (function () {
  const LIBRERIA = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js";
  const CLAVE_PERFIL = "naf-aprende-perfil";
  const CLAVE_PENDIENTE = "naf-aprende-subida-pendiente";
  const ESPERA_SUBIDA = 1500; // ms: agrupa varios cambios seguidos en una sola subida

  const cfg = NAF.CONFIG || {};
  const DOMINIO = cfg.DOMINIO_USUARIOS || "usuarios.naf-aprende";
  const configurada = Boolean(cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY) && !window.NAF_EMBEBIDO;

  let cliente = null;
  let usuario = null;
  let perfil = leer(CLAVE_PERFIL);
  let temporizador = null;
  let estado = "local"; // local | sincronizado | pendiente | subiendo
  const oyentes = [];

  /* ---------- Utilidades ---------- */
  function leer(clave) {
    try { return JSON.parse(localStorage.getItem(clave)); } catch (e) { return null; }
  }
  function escribir(clave, valor) {
    try {
      if (valor === null) localStorage.removeItem(clave);
      else localStorage.setItem(clave, JSON.stringify(valor));
    } catch (e) { /* modo privado */ }
  }
  function cambiarEstado(nuevo) {
    estado = nuevo;
    escribir(CLAVE_PENDIENTE, nuevo === "pendiente" ? true : null);
    oyentes.forEach((fn) => fn(estado));
  }

  /** «Rosa Cruz» → «rosa.cruz»: sin tildes, en minúsculas, espacios como puntos. */
  function normalizarUsuario(texto) {
    return String(texto || "")
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase().trim()
      .replace(/ñ/g, "n")
      .replace(/[^a-z0-9]+/g, ".")
      .replace(/^\.+|\.+$/g, "")
      .slice(0, 40);
  }
  const correoInterno = (usuario) => `${normalizarUsuario(usuario)}@${DOMINIO}`;

  /** Mensajes de Supabase → español claro. */
  function traducir(error) {
    const m = (error && (error.message || String(error))) || "";
    if (/Invalid login credentials/i.test(m)) return "Usuario o contraseña incorrectos.";
    if (/Email not confirmed/i.test(m) || /not authorized/i.test(m)) {
      return "Las cuentas aún no están habilitadas. Avisa a tu docente del NAF (en Supabase debe desactivar «Confirm email»).";
    }
    if (/already registered|already been registered|already exists/i.test(m)) return "Ese usuario ya existe. Elige otro (por ejemplo, agrega tu segundo apellido) o usa «Ya tengo cuenta».";
    if (/Password should be at least/i.test(m)) return "La contraseña debe tener al menos 6 caracteres.";
    if (/weak|pwned|leaked/i.test(m)) return "Esa contraseña es muy fácil de adivinar. Usa otra con letras y números.";
    if (/rate limit|too many/i.test(m)) return "Demasiados intentos seguidos. Espera unos minutos y vuelve a intentarlo.";
    if (/email/i.test(m) && /invalid/i.test(m)) return "No se pudo usar ese usuario. Prueba solo con letras y números, por ejemplo Rosa Cruz.";
    if (/signups? not allowed|disabled/i.test(m)) return "El registro está cerrado por ahora. Avisa a tu docente del NAF.";
    if (/fetch|network|Load failed/i.test(m)) return "No hay conexión a internet. Conéctate y vuelve a intentarlo.";
    return "No se pudo completar: " + m;
  }

  function cargarLibreria() {
    if (window.supabase && window.supabase.createClient) return Promise.resolve(true);
    return new Promise((resolver) => {
      const s = document.createElement("script");
      s.src = LIBRERIA;
      s.onload = () => resolver(true);
      s.onerror = () => resolver(false);
      document.head.append(s);
    });
  }

  /* ---------- Fusión: une el avance del celular con el de la nube ---------- */
  function fusionar(local, remoto, idUsuario) {
    if (!remoto || !remoto.completadas) return local;
    // Avance de otra cuenta que quedó en el celular: no se mezcla
    if (local.dueno && local.dueno !== idUsuario) return remoto;

    const r = Object.assign({}, remoto, { completadas: { ...remoto.completadas }, xpPorDia: { ...remoto.xpPorDia } });
    for (const [id, d] of Object.entries(local.completadas || {})) {
      const o = r.completadas[id];
      r.completadas[id] = o
        ? { veces: Math.max(o.veces, d.veces), mejorPrecision: Math.max(o.mejorPrecision, d.mejorPrecision), perfecta: o.perfecta || d.perfecta }
        : d;
    }
    for (const [dia, xp] of Object.entries(local.xpPorDia || {})) r.xpPorDia[dia] = Math.max(xp, r.xpPorDia[dia] || 0);
    // El XP total es la suma del XP de cada día (así se suman los avances hechos en distintos celulares)
    const sumaDias = Object.values(r.xpPorDia).reduce((a, b) => a + b, 0);
    r.xp = Math.max(local.xp || 0, remoto.xp || 0, sumaDias);
    const masReciente = (local.ultimoDia || "") >= (remoto.ultimoDia || "") ? local : remoto;
    r.racha = masReciente.racha;
    r.ultimoDia = masReciente.ultimoDia;
    r.sonido = (local.actualizado || 0) >= (remoto.actualizado || 0) ? local.sonido : remoto.sonido;
    return r;
  }

  /* ---------- Subida del avance ---------- */
  async function subir() {
    clearTimeout(temporizador);
    temporizador = null;
    if (!usuario || !cliente) return;
    if (!navigator.onLine) return cambiarEstado("pendiente");

    cambiarEstado("subiendo");
    const datos = Object.assign(NAF.Progreso.exportar(), { dueno: usuario.id });
    const { error } = await cliente.from("progreso").upsert({
      usuario_id: usuario.id,
      datos,
      xp: datos.xp,
      lecciones: Object.keys(datos.completadas).length,
      racha: NAF.Progreso.racha,
      actualizado: new Date().toISOString()
    });
    cambiarEstado(error ? "pendiente" : "sincronizado");
  }

  function programarSubida() {
    if (!usuario) return;
    cambiarEstado("pendiente");
    clearTimeout(temporizador);
    temporizador = setTimeout(subir, ESPERA_SUBIDA);
  }

  /* ---------- Al tener sesión: perfil + avance ---------- */
  async function alEntrar(sesion) {
    usuario = sesion.user;

    const [{ data: p }, { data: g }] = await Promise.all([
      cliente.from("perfiles").select("nombre, tipo").eq("id", usuario.id).maybeSingle(),
      cliente.from("progreso").select("datos").eq("usuario_id", usuario.id).maybeSingle()
    ]);
    const meta = usuario.user_metadata || {};
    perfil = {
      nombre: (p && p.nombre) || meta.nombre || usuario.email.split("@")[0],
      tipo: (p && p.tipo) || meta.tipo || "otro",
      usuario: usuario.email.split("@")[0]
    };
    escribir(CLAVE_PERFIL, perfil);

    const local = NAF.Progreso.exportar();
    const unido = fusionar(local, g && g.datos, usuario.id);
    NAF.Progreso.importar(Object.assign(unido, { dueno: usuario.id }));
    await subir();
  }

  /* ---------- API pública ---------- */
  async function iniciar() {
    if (!configurada) return "local";

    NAF.Progreso.alCambiar(programarSubida);
    window.addEventListener("online", () => { if (estado === "pendiente") subir(); });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden" && temporizador) subir(); // sube antes de cerrar la app
    });

    const ok = await cargarLibreria();
    if (!ok) {
      // Sin internet y sin la librería guardada: si ya tenía cuenta, sigue en el celular
      return perfil ? "sin-conexion" : "necesita-internet";
    }

    cliente = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: "naf-aprende-sesion" }
    });

    const { data } = await cliente.auth.getSession();
    if (!data.session) return perfil && !navigator.onLine ? "sin-conexion" : "registro";

    try {
      await alEntrar(data.session);
    } catch (e) {
      // Sin conexión con sesión guardada: sigue en local y sube después
      usuario = data.session.user;
      cambiarEstado("pendiente");
    }
    if (leer(CLAVE_PENDIENTE)) subir();
    return "conectado";
  }

  /** Crea la cuenta con usuario y contraseña. El nombre visible es el usuario tal como lo escribió. */
  async function registrar({ usuario, clave }) {
    const { data, error } = await cliente.auth.signUp({
      email: correoInterno(usuario),
      password: clave,
      options: { data: { nombre: usuario, tipo: "otro", acepta_datos: true } }
    });
    if (error) throw new Error(traducir(error));
    // Supabase no da error si la cuenta ya existe (por privacidad): viene sin identidades
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      throw new Error(traducir({ message: "already registered" }));
    }
    // Sin sesión = Supabase sigue pidiendo confirmar el correo (que no existe)
    if (!data.session) throw new Error(traducir({ message: "Email not confirmed" }));
    await alEntrar(data.session);
  }

  async function entrar({ usuario, clave }) {
    const { data, error } = await cliente.auth.signInWithPassword({ email: correoInterno(usuario), password: clave });
    if (error) throw new Error(traducir(error));
    await alEntrar(data.session);
  }

  async function salir() {
    if (temporizador) await subir();
    if (cliente) await cliente.auth.signOut().catch(() => {});
    usuario = null;
    perfil = null;
    escribir(CLAVE_PERFIL, null);
    cambiarEstado("local");
    NAF.Progreso.reiniciar({ avisar: false }); // el siguiente usuario del celular empieza limpio
  }

  return {
    get configurada() { return configurada; },
    get perfil() { return perfil; },
    get estado() { return estado; },
    get conectado() { return Boolean(usuario); },
    alCambiarEstado(fn) { oyentes.push(fn); },
    iniciar, registrar, entrar, salir, normalizarUsuario,
    fusionar // expuesto para pruebas
  };
})();
