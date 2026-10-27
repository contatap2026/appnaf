/* =========================================================
   MOTOR DE LECCIÓN — controla el flujo de una lección:
   cola de ejercicios, vidas, comprobación, feedback y resultado.
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Leccion = (function () {
  const VIDAS_INICIALES = 5;
  const XP_LECCION = 10;
  const XP_DESAFIO = 20;
  const XP_BONO_PERFECTA = 5;

  const $ = (id) => document.getElementById(id);
  const dom = {};

  let s = null;          // estado de la lección en curso
  let alFinalizar = null;

  const FRASES_OK = ["¡Excelente!", "¡Muy bien!", "¡Correcto!", "¡Así se hace!", "¡Genial!", "¡Impecable!"];
  const FRASES_ERROR = ["Respuesta correcta:", "Casi… la respuesta es:", "Ojo, era:"];
  const azar = (arr) => arr[Math.floor(Math.random() * arr.length)];

  function init() {
    Object.assign(dom, {
      raiz: $("leccion"),
      cuerpo: $("ejercicio"),
      pie: $("leccion-pie"),
      barra: $("leccion-barra"),
      vidas: $("leccion-vidas"),
      boton: $("btn-accion"),
      feedback: $("feedback"),
      fbIcono: $("feedback-icono"),
      fbTitulo: $("feedback-titulo"),
      fbTexto: $("feedback-texto")
    });

    dom.boton.addEventListener("click", accionPrincipal);
    $("leccion-salir").addEventListener("click", confirmarSalida);

    document.addEventListener("keydown", (e) => {
      if (!s || dom.raiz.hidden || !document.getElementById("modal").hidden) return;
      if (e.key === "Enter") { e.preventDefault(); if (!dom.boton.disabled) accionPrincipal(); return; }
      if (s.fase === "respondiendo" && s.actual && s.actual.tecla) s.actual.tecla(e.key);
    });
  }

  /** Abre una lección. `callback` se ejecuta al volver a la ruta. */
  function abrir(leccion, unidad, callback) {
    const contenido = NAF.CONTENIDO[leccion.id];
    if (!contenido) return;
    alFinalizar = callback;

    const ejercicios = contenido.ejercicios.slice();
    s = {
      leccion, unidad,
      cola: ejercicios,
      total: ejercicios.length,
      completados: 0,
      vidas: VIDAS_INICIALES,
      aciertos: 0,
      errores: 0,
      inicio: Date.now(),
      fase: "respondiendo",
      actual: null
    };

    // Una entrada en el historial para que el botón «atrás» del celular pregunte antes de salir
    NAF.Historial.agregar("leccion");
    dom.raiz.hidden = false;
    dom.pie.hidden = false;
    document.body.style.overflow = "hidden";
    actualizarCabecera();
    siguiente();
  }

  function actualizarCabecera() {
    dom.barra.style.width = `${(s.completados / s.total) * 100}%`;
    dom.vidas.textContent = s.vidas;
  }

  function siguiente() {
    if (s.cola.length === 0) return terminar();
    s.fase = "respondiendo";
    s.ej = s.cola.shift();
    s.actual = NAF.Ejercicios.render(s.ej, dom.cuerpo, {
      alCambiar: refrescarBoton,
      alTerminar: () => comprobar()
    });
    dom.cuerpo.scrollTop = 0;
    limpiarFeedback();

    if (!s.actual.calificable) {
      dom.boton.textContent = "Continuar";
      dom.boton.disabled = false;
      s.fase = "teoria";
    } else if (s.actual.autoCompleta) {
      dom.boton.textContent = "Comprobar";
      dom.boton.disabled = true;
    } else {
      dom.boton.textContent = "Comprobar";
      refrescarBoton();
    }
  }

  function refrescarBoton() {
    if (s.fase === "respondiendo") dom.boton.disabled = !s.actual.listo();
  }

  function accionPrincipal() {
    if (!s) return;
    if (s.fase === "teoria") { s.completados++; actualizarCabecera(); return siguiente(); }
    if (s.fase === "respondiendo") return comprobar();
    if (s.fase === "revisado") return siguiente();
    if (s.fase === "sin-vidas") return sinVidas();
  }

  function comprobar() {
    if (s.fase !== "respondiendo") return;
    const { correcto, solucion } = s.actual.comprobar();
    s.fase = "revisado";

    // Emparejar: los errores parciales cuentan para la precisión.
    const erroresParciales = s.actual.errores || 0;
    s.errores += erroresParciales;

    if (correcto) {
      s.aciertos++;
      s.completados++;
      if (!s.actual.autoCompleta) NAF.Sonido.correcto();
      mostrarFeedback(true, azar(FRASES_OK), s.ej.explain);
    } else {
      s.errores++;
      s.vidas--;
      s.cola.push(s.ej); // vuelve al final, como en Duolingo
      NAF.Sonido.incorrecto();
      if (navigator.vibrate) navigator.vibrate(180); // vibración en celulares Android
      dom.vidas.parentElement.classList.remove("pierde");
      void dom.vidas.offsetWidth;
      dom.vidas.parentElement.classList.add("pierde");
      mostrarFeedback(false, azar(FRASES_ERROR), `<b>${solucion}</b>${s.ej.explain ? "<br>" + s.ej.explain : ""}`);
    }
    actualizarCabecera();
    dom.boton.textContent = "Continuar";
    dom.boton.disabled = false;
    dom.boton.focus();

    if (s.vidas <= 0) s.fase = "sin-vidas";
  }

  function mostrarFeedback(ok, titulo, texto) {
    dom.pie.classList.add(ok ? "correcto" : "incorrecto");
    dom.fbIcono.textContent = ok ? "✅" : "❌";
    dom.fbTitulo.textContent = titulo;
    dom.fbTexto.innerHTML = NAF.Ejercicios.sinCortes(texto || "");
    dom.feedback.hidden = false;
  }

  function limpiarFeedback() {
    dom.pie.classList.remove("correcto", "incorrecto");
    dom.feedback.hidden = true;
  }

  /* ---------- Pantallas finales ---------- */
  function terminar() {
    s.fase = "fin";
    const calificados = s.aciertos + s.errores;
    const precision = calificados ? Math.round((s.aciertos / calificados) * 100) : 100;
    const perfecta = s.errores === 0;
    const base = s.leccion.desafio ? XP_DESAFIO : XP_LECCION;
    const xp = base + (perfecta ? XP_BONO_PERFECTA : 0);
    const seg = Math.round((Date.now() - s.inicio) / 1000);
    const tiempo = `${Math.floor(seg / 60)}:${String(seg % 60).padStart(2, "0")}`;

    const { rachaSubio } = NAF.Progreso.registrarLeccion(s.leccion.id, { xp, precision, perfecta });
    NAF.Sonido.completado();
    lanzarConfeti();

    const ultima = NAF.RUTA[NAF.RUTA.length - 1].lecciones.slice(-1)[0];
    const finCurso = s.leccion.id === ultima.id;
    const racha = rachaSubio ? ` · 🔥 ¡Tu racha sube a ${NAF.Progreso.racha} día${NAF.Progreso.racha > 1 ? "s" : ""}!` : "";

    dom.pie.hidden = true;
    dom.barra.style.width = "100%";
    dom.cuerpo.innerHTML = `
      <div class="final">
        <div class="mascota">${finCurso ? "🎓" : s.leccion.desafio ? "🏆" : "🦙"}</div>
        <h1>${finCurso ? "¡Curso completado!" : s.leccion.desafio ? "¡Unidad superada!" : perfecta ? "¡Lección perfecta!" : "¡Lección completada!"}</h1>
        <p>${finCurso
          ? "Terminaste <b>NAF Aprende: Tributación básica</b>. Ya conoces lo esencial para cumplir con la SUNAT y hacer crecer tu negocio formal. ¡Compártelo y acude a un NAF cuando lo necesites!"
          : s.leccion.titulo}${racha}</p>
        ${finCurso ? `<div class="marcas marcas-centro">
          <span class="placa"><img src="img/logo-naf.png" alt="NAF · Núcleo de Apoyo Fiscal" width="420" height="134"></span>
          <span class="placa"><img src="img/logo-certus.png" alt="CERTUS" width="360" height="100"></span>
        </div>` : ""}
        <div class="resultados">
          <div class="resultado"><small>XP total</small><b>⚡ ${xp}</b></div>
          <div class="resultado verde"><small>${perfecta ? "Perfecta" : "Precisión"}</small><b>🎯 ${precision}%</b></div>
          <div class="resultado azul"><small>Tiempo</small><b>⏱️ ${tiempo}</b></div>
        </div>
        <div class="final-acciones">
          <button class="btn btn-bloque" id="btn-final-continuar">Continuar</button>
        </div>
      </div>`;
    const btn = $("btn-final-continuar");
    btn.focus();
    btn.addEventListener("click", cerrar);
  }

  function sinVidas() {
    s.fase = "fin";
    dom.pie.hidden = true;
    dom.cuerpo.innerHTML = `
      <div class="final sin-vidas">
        <div class="mascota">💔</div>
        <h1>Te quedaste sin vidas</h1>
        <p>No te preocupes: equivocarse es parte de aprender. Revisa la guía de la unidad y vuelve a intentarlo.</p>
        <div class="final-acciones">
          <button class="btn btn-bloque" id="btn-reintentar">Intentar de nuevo</button>
          <button class="btn btn-blanco btn-bloque" id="btn-salir-final">Volver a la ruta</button>
        </div>
      </div>`;
    const { leccion, unidad } = s;
    $("btn-reintentar").addEventListener("click", () => abrir(leccion, unidad, alFinalizar));
    $("btn-salir-final").addEventListener("click", cerrar);
  }

  function confirmarSalida() {
    if (!s || s.fase === "fin") return cerrar();
    NAF.Vistas.modal(`
      <div class="final" style="padding:8px 0 0">
        <div class="mascota">🥺</div>
        <h2 style="font-size:22px;font-weight:900">¡Espera! ¿Ya te vas?</h2>
        <p style="color:var(--texto-suave)">Si sales ahora perderás el progreso de esta lección.</p>
        <div class="final-acciones">
          <button class="btn btn-azul btn-bloque" data-cerrar>Seguir aprendiendo</button>
          <button class="btn btn-blanco btn-bloque" id="btn-confirmar-salir" style="color:var(--rojo)">Salir</button>
        </div>
      </div>`);
    $("btn-confirmar-salir").addEventListener("click", () => { NAF.Vistas.cerrarModal(); cerrar(); });
  }

  function cerrar() {
    s = null;
    dom.raiz.hidden = true;
    document.body.style.overflow = "";
    NAF.Historial.quitar("leccion");
    if (alFinalizar) alFinalizar();
  }

  function lanzarConfeti() {
    const colores = ["#58cc02", "#1cb0f6", "#ff9600", "#ffc800", "#ce82ff", "#ff4b4b"];
    const capa = document.createElement("div");
    capa.className = "confeti";
    for (let i = 0; i < 80; i++) {
      const p = document.createElement("i");
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colores[i % colores.length];
      p.style.animationDuration = 1.8 + Math.random() * 1.8 + "s";
      p.style.animationDelay = Math.random() * 0.5 + "s";
      capa.append(p);
    }
    document.body.append(capa);
    setTimeout(() => capa.remove(), 4500);
  }

  return { init, abrir, confirmarSalida, abierta: () => Boolean(s) && !dom.raiz.hidden };
})();
