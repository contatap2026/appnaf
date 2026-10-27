/* =========================================================
   PROGRESO — guarda el avance del usuario en localStorage
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Progreso = (function () {
  const CLAVE = "naf-aprende-progreso-v1";

  const inicial = () => ({
    xp: 0,
    completadas: {},        // { idLeccion: { veces, mejorPrecision, perfecta } }
    racha: 0,
    ultimoDia: null,        // "YYYY-MM-DD"
    xpPorDia: {},           // { "YYYY-MM-DD": xp }
    sonido: true
  });

  let estado = cargar();

  function cargar() {
    try {
      const raw = localStorage.getItem(CLAVE);
      return raw ? Object.assign(inicial(), JSON.parse(raw)) : inicial();
    } catch (e) {
      return inicial();
    }
  }

  function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) { /* modo privado */ }
  }

  function hoy(offset = 0) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; // fecha local, no UTC
  }

  /** La racha se pierde si el último día de práctica no fue hoy ni ayer. */
  function rachaVigente() {
    if (!estado.ultimoDia) return 0;
    return estado.ultimoDia === hoy() || estado.ultimoDia === hoy(-1) ? estado.racha : 0;
  }

  function registrarLeccion(idLeccion, { xp, precision, perfecta }) {
    const previo = estado.completadas[idLeccion] || { veces: 0, mejorPrecision: 0, perfecta: false };
    estado.completadas[idLeccion] = {
      veces: previo.veces + 1,
      mejorPrecision: Math.max(previo.mejorPrecision, precision),
      perfecta: previo.perfecta || perfecta
    };

    estado.xp += xp;
    estado.xpPorDia[hoy()] = (estado.xpPorDia[hoy()] || 0) + xp;

    const rachaAntes = rachaVigente();
    if (estado.ultimoDia !== hoy()) {
      estado.racha = rachaAntes + 1;
      estado.ultimoDia = hoy();
    }
    guardar();
    return { rachaSubio: estado.racha > rachaAntes };
  }

  return {
    get xp() { return estado.xp; },
    get racha() { return rachaVigente(); },
    get sonido() { return estado.sonido; },
    set sonido(v) { estado.sonido = v; guardar(); },
    estaCompletada: (id) => Boolean(estado.completadas[id]),
    datosLeccion: (id) => estado.completadas[id] || null,
    totalCompletadas: () => Object.keys(estado.completadas).length,
    xpDeDia: (fecha) => estado.xpPorDia[fecha] || 0,
    hoy,
    registrarLeccion,
    reiniciar() { estado = inicial(); guardar(); }
  };
})();
