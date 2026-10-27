/* =========================================================
   HISTORIAL — entradas para que el botón «atrás» del celular
   cierre hojas y lecciones. Si el navegador (o un visor
   embebido) no permite tocar el historial, la app sigue
   funcionando igual, solo sin ese atajo.
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Historial = {
  /** Agrega una entrada marcada con `clave` (p. ej. "leccion" o "modal"). */
  agregar(clave) {
    try {
      if (!(history.state && history.state[clave])) history.pushState({ [clave]: true }, "");
    } catch (e) { /* historial no disponible */ }
  },
  /** Quita la entrada si la de arriba es la nuestra. */
  quitar(clave) {
    try {
      if (history.state && history.state[clave]) history.back();
    } catch (e) { /* historial no disponible */ }
  },
  /** Vuelve a poner la entrada (cuando «atrás» solo debe preguntar). */
  reponer(clave) {
    try { history.pushState({ [clave]: true }, ""); } catch (e) { /* historial no disponible */ }
  }
};
