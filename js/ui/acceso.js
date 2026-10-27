/* =========================================================
   ACCESO — pantalla de registro / inicio de sesión.
   Modos: registro | entrar | recuperar | nueva-clave
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Acceso = (function () {
  const $ = (id) => document.getElementById(id);
  let modo = "registro";

  const TIPOS = [
    { valor: "estudiante", texto: "Estudiante", icono: "🎓" },
    { valor: "emprendedor", texto: "Emprendedor(a)", icono: "🏪" },
    { valor: "docente", texto: "Docente", icono: "🧑‍🏫" },
    { valor: "otro", texto: "Otro", icono: "🙋" }
  ];

  const campoClave = (id, etiqueta, autocompletar) => `
    <label class="campo" for="${id}">
      <span>${etiqueta}</span>
      <span class="campo-clave">
        <input id="${id}" type="password" minlength="6" required autocomplete="${autocompletar}" placeholder="Mínimo 6 caracteres">
        <button type="button" class="ver-clave" data-ver="${id}" aria-label="Mostrar contraseña">👁️</button>
      </span>
    </label>`;

  const campoCorreo = `
    <label class="campo" for="acceso-email">
      <span>Correo electrónico</span>
      <input id="acceso-email" type="email" required autocomplete="email" inputmode="email" placeholder="nombre@gmail.com">
    </label>`;

  const FORMULARIOS = {
    registro: () => `
      <form id="acceso-form" novalidate>
        <label class="campo" for="acceso-nombre">
          <span>Nombre y apellido</span>
          <input id="acceso-nombre" type="text" required autocomplete="name" placeholder="Ej.: Rosa Quispe" maxlength="80">
        </label>
        <fieldset class="campo">
          <legend>¿Quién eres?</legend>
          <div class="opciones-tipo">
            ${TIPOS.map((t, i) => `
              <label class="tipo">
                <input type="radio" name="tipo" value="${t.valor}" ${i === 0 ? "checked" : ""}>
                <span>${t.icono} ${t.texto}</span>
              </label>`).join("")}
          </div>
        </fieldset>
        ${campoCorreo}
        ${campoClave("acceso-clave", "Crea una contraseña", "new-password")}
        <label class="consentimiento" for="acceso-acepto">
          <input id="acceso-acepto" type="checkbox" required>
          <span>Acepto que el NAF · CERTUS use mis datos solo para guardar mi avance y mejorar el curso (Ley N.° 29733).</span>
        </label>
        <button class="btn btn-bloque" id="acceso-enviar" type="submit">Crear cuenta y empezar</button>
      </form>`,

    entrar: () => `
      <form id="acceso-form" novalidate>
        ${campoCorreo}
        ${campoClave("acceso-clave", "Contraseña", "current-password")}
        <button class="btn btn-bloque" id="acceso-enviar" type="submit">Entrar</button>
        <button class="enlace" type="button" data-modo="recuperar">¿Olvidaste tu contraseña?</button>
      </form>`,

    recuperar: () => `
      <form id="acceso-form" novalidate>
        <p class="acceso-ayuda">Te enviaremos un enlace a tu correo para crear una contraseña nueva.</p>
        ${campoCorreo}
        <button class="btn btn-bloque" id="acceso-enviar" type="submit">Enviar enlace</button>
        <button class="enlace" type="button" data-modo="entrar">Volver a iniciar sesión</button>
      </form>`,

    "nueva-clave": () => `
      <form id="acceso-form" novalidate>
        <p class="acceso-ayuda">Escribe tu nueva contraseña.</p>
        ${campoClave("acceso-clave", "Nueva contraseña", "new-password")}
        <button class="btn btn-bloque" id="acceso-enviar" type="submit">Guardar contraseña</button>
      </form>`
  };

  function mensaje(texto, tipo = "error") {
    const m = $("acceso-mensaje");
    m.textContent = texto;
    m.className = `acceso-mensaje ${tipo}`;
    m.hidden = !texto;
  }

  function pintar() {
    const conPestanas = modo === "registro" || modo === "entrar";
    $("acceso-pestanas").hidden = !conPestanas;
    document.querySelectorAll("[data-pestana]").forEach((b) => {
      const activa = b.dataset.pestana === modo;
      b.classList.toggle("activa", activa);
      b.setAttribute("aria-selected", activa);
    });
    $("acceso-cuerpo").innerHTML = FORMULARIOS[modo]();
    mensaje("");
    if (!navigator.onLine && modo !== "nueva-clave") {
      mensaje("Necesitas internet para crear tu cuenta o iniciar sesión. Conéctate y vuelve a intentarlo.", "aviso");
    }
    $("acceso-form").addEventListener("submit", enviar);
  }

  /** Validación propia: mensajes claros en español, sin los globos del navegador. */
  function validar() {
    const v = (id) => ($(id) ? $(id).value.trim() : "");
    if (modo === "registro" && v("acceso-nombre").length < 3) return "Escribe tu nombre y apellido.";
    if (modo !== "nueva-clave" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("acceso-email"))) return "Escribe un correo válido, por ejemplo nombre@gmail.com.";
    if (modo !== "recuperar" && v("acceso-clave").length < 6) return "La contraseña debe tener al menos 6 caracteres.";
    if (modo === "registro" && !$("acceso-acepto").checked) return "Para crear tu cuenta, marca que aceptas el uso de tus datos.";
    return "";
  }

  async function enviar(e) {
    e.preventDefault();
    const problema = validar();
    if (problema) return mensaje(problema);

    const boton = $("acceso-enviar");
    const textoOriginal = boton.textContent;
    boton.disabled = true;
    boton.textContent = { registro: "Creando tu cuenta…", entrar: "Entrando…", recuperar: "Enviando…", "nueva-clave": "Guardando…" }[modo];
    mensaje("");

    const email = $("acceso-email") ? $("acceso-email").value.trim().toLowerCase() : "";
    const clave = $("acceso-clave") ? $("acceso-clave").value : "";
    try {
      if (modo === "registro") {
        const r = await NAF.Nube.registrar({
          nombre: $("acceso-nombre").value.trim(),
          tipo: (document.querySelector('input[name="tipo"]:checked') || {}).value || "otro",
          email, clave,
          aceptaDatos: true
        });
        if (r.confirmarCorreo) {
          modo = "entrar";
          pintar();
          $("acceso-email").value = email;
          return mensaje(`¡Listo! Te enviamos un correo a ${email}. Abre el enlace para confirmar tu cuenta y luego inicia sesión aquí.`, "ok");
        }
        return cerrar(true);
      }
      if (modo === "entrar") { await NAF.Nube.entrar({ email, clave }); return cerrar(); }
      if (modo === "recuperar") {
        await NAF.Nube.recuperar(email);
        return mensaje(`Te enviamos un enlace a ${email}. Ábrelo desde este celular para crear tu nueva contraseña.`, "ok");
      }
      if (modo === "nueva-clave") { await NAF.Nube.nuevaClave(clave); return cerrar(); }
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
      NAF.Vistas.modal(`
        <div class="final" style="padding:8px 0 0">
          <div class="mascota">🦙</div>
          <h2 style="font-size:22px;font-weight:900">¡Te damos la bienvenida, ${p.nombre.split(" ")[0]}!</h2>
          <p style="color:var(--texto-suave)">Tu cuenta está lista. Tu avance se guardará en la nube y lo verás en cualquier celular donde entres.</p>
          <div class="final-acciones"><button class="btn btn-bloque" data-cerrar>Empezar la ruta</button></div>
        </div>`);
    }
  }

  function mostrar(nuevoModo = "registro") {
    modo = nuevoModo;
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
