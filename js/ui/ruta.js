/* =========================================================
   RUTA — dibuja el mapa de unidades y nodos de lección
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Ruta = (function () {
  // Desplazamiento horizontal (px) de cada nodo para formar el camino serpenteante.
  const ZIGZAG = [0, 44, 70, 44, 0, -44, -70, -44];

  /** Todas las lecciones en orden, con referencia a su unidad. */
  const todas = () => NAF.RUTA.flatMap((u) => u.lecciones.map((l) => ({ l, u })));

  /** Una lección se desbloquea si su unidad está disponible y la anterior está completa. */
  function estado(leccion, unidad) {
    if (NAF.Progreso.estaCompletada(leccion.id)) return "completado";
    if (!unidad.disponible) return "bloqueado";
    const lista = todas();
    const i = lista.findIndex((x) => x.l.id === leccion.id);
    const anterior = lista[i - 1];
    return !anterior || NAF.Progreso.estaCompletada(anterior.l.id) ? "actual" : "bloqueado";
  }

  function render() {
    // En celulares angostos el zigzag es más corto, para que la etiqueta «Continuar» no se salga
    const escala = Math.min(1, Math.max(0.55, (document.documentElement.clientWidth - 220) / 200));
    const cont = document.getElementById("ruta");
    cont.innerHTML = "";

    NAF.RUTA.forEach((unidad, ui) => {
      const sec = document.createElement("section");
      sec.className = "unidad" + (unidad.disponible ? "" : " bloqueada");
      sec.innerHTML = `
        <header class="unidad-cabecera" ${unidad.disponible ? `style="--c:${unidad.color};--c-osc:${unidad.colorOscuro}"` : ""}>
          <div>
            <small>Unidad ${unidad.numero}${unidad.disponible ? "" : " · Próximamente"}</small>
            <h2>${unidad.titulo}</h2>
            <p>${unidad.descripcion}</p>
          </div>
          <button class="btn-guia" aria-label="Guía de la unidad">${NAF.icono("book-open-text")} <span>Guía</span></button>
        </header>
        <div class="camino"></div>`;

      sec.querySelector(".btn-guia").addEventListener("click", () => guia(unidad));
      const camino = sec.querySelector(".camino");

      unidad.lecciones.forEach((leccion, li) => {
        const est = estado(leccion, unidad);
        const env = document.createElement("div");
        env.className = "nodo-envoltura";
        env.style.transform = `translateX(${Math.round(ZIGZAG[li % ZIGZAG.length] * escala) * (ui % 2 ? -1 : 1)}px)`;

        const desafio = leccion.desafio ? " desafio" : "";
        env.innerHTML = `
          ${est === "actual" ? `<div class="etiqueta-empezar">${NAF.Progreso.totalCompletadas() ? "Continuar" : "¡Empezar!"}</div>` : ""}
          ${est === "actual" ? `<div class="nodo-anillo${desafio}"></div>` : ""}
          <button class="nodo ${est}${desafio}" ${est === "actual" ? `style="--c:${unidad.color};--c-osc:${unidad.colorOscuro}"` : ""}
                  aria-label="${leccion.titulo} (${est})">
            <span class="nodo-emoji">${NAF.icono(est === "bloqueado" ? (leccion.desafio ? "trophy" : "lock") : leccion.icono)}</span>
          </button>`;

        env.querySelector(".nodo").addEventListener("click", (e) => {
          e.stopPropagation();
          popover(env, leccion, unidad, est, li);
        });
        camino.append(env);
      });

      // Ícono grande de la unidad, decorativo, al costado del camino
      const mascota = document.createElement("div");
      mascota.className = "mascota-ruta";
      mascota.style.color = unidad.disponible ? unidad.color : "var(--bloqueado-oscuro)";
      mascota.innerHTML = NAF.icono(unidad.icono);
      mascota.style.top = "110px";
      mascota.style[ui % 2 ? "left" : "right"] = "8%";
      camino.append(mascota);

      if (!unidad.disponible && ui === NAF.RUTA.findIndex((u) => !u.disponible)) {
        camino.insertAdjacentHTML("beforeend", `<p class="proximamente-nota">${NAF.icono("construction")} Las siguientes unidades están en construcción</p>`);
      }

      cont.append(sec);
    });
  }

  function cerrarPopovers() {
    document.querySelectorAll(".popover").forEach((p) => p.remove());
  }

  function popover(env, leccion, unidad, est, indice) {
    const yaAbierto = env.querySelector(".popover");
    cerrarPopovers();
    if (yaAbierto) return;

    const pop = document.createElement("div");
    pop.addEventListener("click", (e) => e.stopPropagation());
    const xp = leccion.desafio ? 20 : 10;
    const posicion = `Lección ${indice + 1} de ${unidad.lecciones.length}`;

    if (!unidad.disponible) {
      pop.className = "popover bloqueado";
      pop.innerHTML = `<h3>${leccion.titulo}</h3><p>${NAF.icono("construction")} Esta unidad estará disponible pronto.</p>
        <button class="btn" disabled>Próximamente</button>`;
    } else if (est === "bloqueado") {
      pop.className = "popover bloqueado";
      pop.innerHTML = `<h3>${leccion.titulo}</h3><p>Completa las lecciones anteriores para desbloquear esta.</p>
        <button class="btn" disabled>${NAF.icono("lock")} Bloqueada</button>`;
    } else {
      pop.className = "popover";
      pop.style.cssText = `--c:${unidad.color};--c-osc:${unidad.colorOscuro};--c-texto:${unidad.color}`;
      const datos = NAF.Progreso.datosLeccion(leccion.id);
      const detalle = datos ? `${posicion} · Mejor precisión: ${datos.mejorPrecision}%` : posicion;
      pop.innerHTML = `<h3>${leccion.titulo}</h3><p>${detalle}</p>
        <button class="btn">${est === "completado" ? "Repasar" : "Empezar"} +${xp} XP</button>`;
      pop.querySelector(".btn").addEventListener("click", () => {
        cerrarPopovers();
        NAF.Leccion.abrir(leccion, unidad, () => NAF.App.refrescar({ suave: true }));
      });
    }
    env.append(pop);
    ajustarAPantalla(pop);
    pop.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  /** En celulares angostos el nodo está desplazado: corre el popover para que no se salga de la pantalla. */
  function ajustarAPantalla(pop) {
    const margen = 12;
    const ancho = document.documentElement.clientWidth;
    const r = pop.getBoundingClientRect();
    let dx = 0;
    if (r.left < margen) dx = margen - r.left;
    else if (r.right > ancho - margen) dx = ancho - margen - r.right;
    if (!dx) return;
    pop.style.marginLeft = `${-r.width / 2 + dx}px`;
    pop.style.setProperty("--flecha", `calc(50% - ${dx}px)`); // la flecha sigue apuntando al nodo
  }

  /** Guía de la unidad: resume la teoría de cada lección (o el temario si aún no está disponible). */
  function guia(unidad) {
    let cuerpo;
    if (unidad.disponible) {
      cuerpo = unidad.lecciones.map((l) => {
        const t = (NAF.CONTENIDO[l.id]?.ejercicios || []).find((e) => e.type === "teoria");
        if (!t) return "";
        return `
          <div class="guia-seccion">
            <h3>${NAF.icono(l.icono)} ${t.titulo}</h3>
            <div class="guia-punto"><div class="emoji">${NAF.simboloNAF()}</div><p>${t.intro}</p></div>
            ${t.puntos.map((p) => `<div class="guia-punto"><div class="emoji">${NAF.iconoPunto(p.icono)}</div><p><b>${p.titulo}.</b> ${p.texto}</p></div>`).join("")}
          </div>`;
      }).join("");
    } else {
      cuerpo = `
        <div class="guia-seccion">
          <h3>Temas que aprenderás</h3>
          <ul class="guia-lista">${unidad.lecciones.map((l) => `<li><span>${NAF.icono(l.icono)}</span>${l.titulo}</li>`).join("")}</ul>
        </div>
        <p class="proximamente-nota">${NAF.icono("construction")} Unidad en construcción</p>`;
    }

    NAF.Vistas.modal(NAF.Ejercicios.sinCortes(`
      <div class="guia-encabezado">
        <div class="emoji" style="color:${unidad.color}">${NAF.icono(unidad.icono)}</div>
        <span class="chip">Unidad ${unidad.numero}</span>
        <h2>${unidad.titulo}</h2>
        <p>${unidad.descripcion}</p>
      </div>
      ${cuerpo}`));
  }

  document.addEventListener("click", cerrarPopovers);

  return { render, estado, guia };
})();
