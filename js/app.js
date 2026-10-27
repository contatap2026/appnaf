/* =========================================================
   APP — punto de entrada: navegación entre vistas y arranque
   ========================================================= */
window.NAF = window.NAF || {};

NAF.App = (function () {
  const VISTAS = ["ruta", "glosario", "progreso"];
  const CLAVE_BANNER = "naf-aprende-banner-instalar-cerrado";

  function vistaActual() {
    const v = location.hash.replace("#", "");
    return VISTAS.includes(v) ? v : "ruta";
  }

  function mostrarVista({ suave = false } = {}) {
    const v = vistaActual();
    VISTAS.forEach((nombre) => { document.getElementById(`vista-${nombre}`).hidden = nombre !== v; });
    document.querySelectorAll("[data-vista]").forEach((a) => a.classList.toggle("activo", a.dataset.vista === v));

    if (v === "ruta") NAF.Ruta.render();
    if (v === "glosario") NAF.Vistas.glosario(document.getElementById("glosario-buscar").value);
    if (v === "progreso") NAF.Vistas.progreso();

    // En la ruta, como en Duolingo, te lleva directo a la lección que toca
    const actual = v === "ruta" && document.querySelector(".nodo.actual");
    if (actual) actual.scrollIntoView({ block: "center", behavior: suave ? "smooth" : "auto" });
    else window.scrollTo(0, 0);
  }

  /** Vuelve a dibujar todo lo que depende del progreso. */
  function refrescar(opciones) {
    NAF.Vistas.topbar();
    NAF.Vistas.panelDerecho();
    mostrarVista(opciones);
  }

  /* ---------- Botón «atrás» del celular ---------- */
  function alVolverAtras() {
    const modalAbierto = !document.getElementById("modal").hidden;
    if (NAF.Leccion.abierta()) {
      // Dentro de una lección, «atrás» no te saca de golpe: pregunta primero
      NAF.Historial.reponer("leccion");
      if (modalAbierto) NAF.Vistas.cerrarModal(true);
      else NAF.Leccion.confirmarSalida();
      return;
    }
    if (modalAbierto) NAF.Vistas.cerrarModal(true);
  }

  /* ---------- Instalación como app (PWA) ---------- */
  function configurarInstalacion() {
    // NAF_EMBEBIDO: versión de un solo archivo (artefacto), donde no hay service worker
    if (!window.NAF_EMBEBIDO && "serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("sw.js").catch(() => { /* sin modo offline */ });
    }

    const banner = document.getElementById("banner-instalar");
    let eventoInstalar = null;
    let cerrado = false;
    try { cerrado = localStorage.getItem(CLAVE_BANNER) === "1"; } catch (e) { /* modo privado */ }

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      eventoInstalar = e;
      if (!cerrado) banner.hidden = false;
    });
    window.addEventListener("appinstalled", () => { banner.hidden = true; });

    document.getElementById("btn-instalar").addEventListener("click", async () => {
      if (!eventoInstalar) return;
      eventoInstalar.prompt();
      await eventoInstalar.userChoice;
      eventoInstalar = null;
      banner.hidden = true;
    });
    document.getElementById("banner-cerrar").addEventListener("click", () => {
      banner.hidden = true;
      try { localStorage.setItem(CLAVE_BANNER, "1"); } catch (e) { /* modo privado */ }
    });
  }

  function init() {
    NAF.Leccion.init();

    window.addEventListener("hashchange", () => mostrarVista());
    window.addEventListener("popstate", alVolverAtras);
    document.getElementById("glosario-buscar").addEventListener("input", (e) => NAF.Vistas.glosario(e.target.value));

    // Cerrar modal: fondo, botón ✕, cualquier [data-cerrar] o tecla Escape
    document.getElementById("modal").addEventListener("click", (e) => {
      if (e.target.closest("[data-cerrar]")) NAF.Vistas.cerrarModal();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") NAF.Vistas.cerrarModal(); });

    configurarInstalacion();
    refrescar();
  }

  document.addEventListener("DOMContentLoaded", init);

  return { refrescar };
})();
