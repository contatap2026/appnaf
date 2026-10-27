/* =========================================================
   ACCESO — pantalla de registro / inicio de sesión.
   Registro: nombre, usuario y contraseña. Entrar: usuario y contraseña (sin correo).
   Modos: registro | entrar | olvido
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Acceso = (function () {
  const $ = (id) => document.getElementById(id);
  let modo = "registro";

  const campoNombre = `
    <label class="campo" for="acceso-nombre">
      <span>Nombre y apellido</span>
      <input id="acceso-nombre" type="text" required autocomplete="name" autocapitalize="words" maxlength="80" placeholder="Ej.: Rosa Cruz">
    </label>`;

  const campoUsuario = (autocompletar, ayuda = "") => `
    <label class="campo" for="acceso-usuario">
      <span>Usuario</span>
      <input id="acceso-usuario" type="text" required autocomplete="${autocompletar}" autocapitalize="none"
             spellcheck="false" maxlength="40" placeholder="Ej.: rosacruz">
      ${ayuda ? `<small class="campo-ayuda">${ayuda}</small>` : ""}
    </label>`;

  const campoClave = (etiqueta, autocompletar) => `
    <label class="campo" for="acceso-clave">
      <span>${etiqueta}</span>
      <span class="campo-clave">
        <input id="acceso-clave" type="password" minlength="6" required autocomplete="${autocompletar}" placeholder="Mínimo 6 caracteres">
        <button type="button" class="ver-clave" data-ver="acceso-clave" aria-label="Mostrar contraseña">👁️</button>
      </span>
    </label>`;

  const FORMULARIOS = {
    registro: () => `
      <form id="acceso-form" novalidate>
        ${campoNombre}
        ${campoUsuario("username", "Con este usuario entrarás a la app. Solo letras y números.")}
        ${campoClave("Crea una contraseña", "new-password")}
        <p class="acceso-ayuda">Anota tu usuario y contraseña: los usarás para entrar desde cualquier celular. Tu avance se guarda solo para el curso del NAF · CERTUS.</p>
        <button class="btn btn-bloque" id="acceso-enviar" type="submit">Crear cuenta y empezar</button>
      </form>`,

    entrar: () => `
      <form id="acceso-form" novalidate>
        ${campoUsuario("username")}
        ${campoClave("Contraseña", "current-password")}
        <button class="btn btn-bloque" id="acceso-enviar" type="submit">Entrar</button>
        <button class="enlace" type="button" data-modo="olvido">¿Olvidaste tu contraseña?</button>
      </form>`,

    olvido: () => `
      <div id="acceso-form-info">
        <p class="acceso-ayuda">Como la cuenta no usa correo, tu docente del NAF puede crearte una contraseña nueva. Dile cuál es tu <b>usuario</b>.</p>
        <button class="enlace" type="button" data-modo="entrar">Volver a iniciar sesión</button>
      </div>`
  };

  function mensaje(texto, tipo = "error") {
    const m = $("acceso-mensaje");
    m.textContent = texto;
    m.className = `acceso-mensaje ${tipo}`;
    m.hidden = !texto;
  }

  function pintar() {
    $("acceso-pestanas").hidden = modo === "olvido";
    document.querySelectorAll("[data-pestana]").forEach((b) => {
      const activa = b.dataset.pestana === modo;
      b.classList.toggle("activa", activa);
      b.setAttribute("aria-selected", activa);
    });
    $("acceso-cuerpo").innerHTML = FORMULARIOS[modo]();
    mensaje("");
    if (modo === "olvido") return;
    if (!navigator.onLine) mensaje("Necesitas internet para crear tu cuenta o iniciar sesión. Conéctate y vuelve a intentarlo.", "aviso");
    $("acceso-form").addEventListener("submit", enviar);
  }

  /** Validación propia: mensajes claros en español, sin los globos del navegador. */
  function validar() {
    if (modo === "registro" && $("acceso-nombre").value.trim().length < 3) return "Escribe tu nombre y apellido, por ejemplo Rosa Cruz.";
    const usuario = $("acceso-usuario").value.trim();
    if (NAF.Nube.normalizarUsuario(usuario).length < 3) return "Escribe tu usuario (al menos 3 letras o números), por ejemplo rosacruz.";
    if ($("acceso-clave").value.length < 6) return "La contraseña debe tener al menos 6 caracteres.";
    return "";
  }

  async function enviar(e) {
    e.preventDefault();
    const problema = validar();
    if (problema) return mensaje(problema);

    const boton = $("acceso-enviar");
    const textoOriginal = boton.textContent;
    boton.disabled = true;
    boton.textContent = modo === "registro" ? "Creando tu cuenta…" : "Entrando…";
    mensaje("");

    const usuario = $("acceso-usuario").value.trim().replace(/\s+/g, " ");
    const clave = $("acceso-clave").value;
    try {
      if (modo === "registro") {
        await NAF.Nube.registrar({ nombre: $("acceso-nombre").value.trim().replace(/\s+/g, " "), usuario, clave });
        return cerrar(true);
      }
      await NAF.Nube.entrar({ usuario, clave });
      return cerrar();
    } catch (err) {
      mensaje(err.message);
    } finally {
      if (document.body.contains(boton)) { boton.disabled = false; boton.textContent = textoOriginal; }
    }
  }

  function cerrar(esNuevo = false) {
    $("acceso").hidden = true;
    document.body.style.overflow = "";
    NAF.App.refrescar();
    const p = NAF.Nube.perfil;
    if (esNuevo && p) {
      const nombre = p.nombre.split(" ")[0].replace(/[&<>"]/g, "");
      NAF.Vistas.modal(`
        <div class="final" style="padding:8px 0 0">
          <div class="mascota">🦙</div>
          <h2 style="font-size:22px;font-weight:900">¡Te damos la bienvenida, ${nombre}!</h2>
          <p style="color:var(--texto-suave)">Tu cuenta está lista. Entra con tu usuario y contraseña desde cualquier celular y seguirás donde te quedaste.</p>
          <div class="final-acciones"><button class="btn btn-bloque" data-cerrar>Empezar la ruta</button></div>
        </div>`);
    }
  }

  function mostrar(nuevoModo = "registro") {
    modo = FORMULARIOS[nuevoModo] ? nuevoModo : "registro";
    $("acceso").hidden = false;
    document.body.style.overflow = "hidden";
    pintar();
  }

  function init() {
    document.querySelectorAll("[data-pestana]").forEach((b) => b.addEventListener("click", () => { modo = b.dataset.pestana; pintar(); }));
    $("acceso").addEventListener("click", (e) => {
      const ver = e.target.closest("[data-ver]");
      if (ver) {
        const input = $(ver.dataset.ver);
        input.type = input.type === "password" ? "text" : "password";
        ver.setAttribute("aria-label", input.type === "password" ? "Mostrar contraseña" : "Ocultar contraseña");
      }
      const cambio = e.target.closest("[data-modo]");
      if (cambio) { modo = cambio.dataset.modo; pintar(); }
    });
    window.addEventListener("online", () => { if (!$("acceso").hidden) mensaje(""); });
  }

  return { init, mostrar };
})();
