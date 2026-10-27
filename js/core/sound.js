/* =========================================================
   SONIDOS — generados con Web Audio (sin archivos externos)
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Sonido = (function () {
  let ctx = null;

  function tono(frecuencia, inicio, duracion, tipo = "sine", volumen = 0.15) {
    if (!NAF.Progreso.sonido) return;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = ctx.currentTime + inicio;
      osc.type = tipo;
      osc.frequency.setValueAtTime(frecuencia, t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(volumen, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duracion);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + duracion + 0.05);
    } catch (e) { /* audio no disponible */ }
  }

  return {
    correcto() { tono(660, 0, 0.12); tono(990, 0.1, 0.2); },
    incorrecto() { tono(220, 0, 0.18, "square", 0.06); tono(180, 0.12, 0.25, "square", 0.06); },
    tap() { tono(520, 0, 0.05, "triangle", 0.05); },
    completado() { [523, 659, 784, 1047].forEach((f, i) => tono(f, i * 0.12, 0.3)); }
  };
})();
