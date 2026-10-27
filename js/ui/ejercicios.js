/* =========================================================
   EJERCICIOS — un renderizador por tipo de ejercicio.
   Cada renderizador recibe (ejercicio, contenedor, eventos) y
   devuelve una interfaz común:
     {
       listo()      → ¿ya hay una respuesta para comprobar?
       comprobar()  → { correcto, solucion }   (marca la UI)
       tecla(k)     → atajo de teclado opcional
       autoCompleta → true si el ejercicio se resuelve solo (emparejar)
       calificable  → false para la teoría
     }
   eventos: { alCambiar(), alTerminar() }
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Ejercicios = (function () {
  const h = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  const mezclar = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const limpiar = (html) => html.replace(/<[^>]+>/g, "");

  const etiqueta = (texto, icono = "✨") => `<div class="ej-etiqueta">${icono} ${texto}</div>`;

  /* ---------- TEORÍA ---------- */
  function teoria(ej, cont) {
    cont.append(h(`
      <div class="leccion-contenido">
        ${etiqueta("Nuevo concepto", "💡")}
        <h1 class="ej-pregunta">${ej.titulo}</h1>
        <div class="teoria-cabecera">
          <div class="mascota">🦙</div>
          <div class="burbuja">${ej.intro}</div>
        </div>
        <div class="teoria-puntos">
          ${ej.puntos.map((p) => `
            <div class="tarjeta teoria-punto">
              <div class="emoji">${p.icono}</div>
              <div><h4>${p.titulo}</h4><p>${p.texto}</p></div>
            </div>`).join("")}
        </div>
      </div>`));
    return { calificable: false, listo: () => true, comprobar: () => ({ correcto: true }) };
  }

  /* ---------- OPCIÓN MÚLTIPLE (con escena opcional) ---------- */
  function choice(ej, cont, { alCambiar }) {
    const orden = mezclar(ej.options.map((o, i) => ({ ...o, i })));
    let elegido = null;

    const escena = ej.escena ? `
      <div class="escena">
        <div class="escena-personaje">${ej.escena.personaje}</div>
        <div class="burbuja"><small>${ej.escena.nombre}</small>${ej.escena.texto}</div>
      </div>` : "";

    const el = h(`
      <div class="leccion-contenido">
        ${etiqueta(ej.escena ? "Caso práctico" : "Elige la respuesta correcta", ej.escena ? "🎭" : "✨")}
        ${escena}
        <h1 class="ej-pregunta">${ej.prompt}</h1>
        <div class="opciones">
          ${orden.map((o, k) => `
            <button class="opcion" data-i="${o.i}">
              <span class="tecla">${k + 1}</span>
              ${o.icono ? `<span class="emoji">${o.icono}</span>` : ""}
              <span>${o.text}</span>
            </button>`).join("")}
        </div>
      </div>`);
    cont.append(el);

    const botones = [...el.querySelectorAll(".opcion")];
    const elegir = (btn) => {
      botones.forEach((b) => b.classList.remove("seleccionada"));
      btn.classList.add("seleccionada");
      elegido = Number(btn.dataset.i);
      NAF.Sonido.tap();
      alCambiar();
    };
    botones.forEach((b) => b.addEventListener("click", () => elegir(b)));

    return {
      calificable: true,
      listo: () => elegido !== null,
      tecla(k) { const n = Number(k); if (n >= 1 && n <= botones.length) elegir(botones[n - 1]); },
      comprobar() {
        const correcto = elegido === ej.answer;
        botones.forEach((b) => {
          b.disabled = true;
          const i = Number(b.dataset.i);
          if (i === ej.answer) b.classList.add("correcta");
          else if (i === elegido) b.classList.add("incorrecta");
          b.classList.remove("seleccionada");
        });
        return { correcto, solucion: ej.options[ej.answer].text };
      }
    };
  }

  /* ---------- VERDADERO / FALSO ---------- */
  function tf(ej, cont, { alCambiar }) {
    let elegido = null;
    const el = h(`
      <div class="leccion-contenido">
        ${etiqueta("¿Verdadero o falso?", "⚖️")}
        <div class="tarjeta afirmacion">${ej.statement}</div>
        <div class="opciones dos-col">
          <button class="opcion tf" data-v="true"><span class="emoji">👍</span>Verdadero</button>
          <button class="opcion tf" data-v="false"><span class="emoji">👎</span>Falso</button>
        </div>
      </div>`);
    cont.append(el);

    const botones = [...el.querySelectorAll(".opcion")];
    const elegir = (btn) => {
      botones.forEach((b) => b.classList.remove("seleccionada"));
      btn.classList.add("seleccionada");
      elegido = btn.dataset.v === "true";
      NAF.Sonido.tap();
      alCambiar();
    };
    botones.forEach((b) => b.addEventListener("click", () => elegir(b)));

    return {
      calificable: true,
      listo: () => elegido !== null,
      tecla(k) { if (k === "1" || k.toLowerCase() === "v") elegir(botones[0]); if (k === "2" || k.toLowerCase() === "f") elegir(botones[1]); },
      comprobar() {
        const correcto = elegido === ej.answer;
        botones.forEach((b) => {
          b.disabled = true;
          const v = b.dataset.v === "true";
          b.classList.remove("seleccionada");
          if (v === ej.answer) b.classList.add("correcta");
          else if (v === elegido) b.classList.add("incorrecta");
        });
        return { correcto, solucion: ej.answer ? "Verdadero" : "Falso" };
      }
    };
  }

  /* ---------- COMPLETAR EL ESPACIO ---------- */
  function fill(ej, cont, { alCambiar }) {
    const orden = mezclar(ej.options.map((text, i) => ({ text, i })));
    let elegido = null;
    const [antes, despues] = ej.sentence.split("___");

    const el = h(`
      <div class="leccion-contenido">
        ${etiqueta(ej.prompt, "✏️")}
        <div class="tarjeta oracion">${antes}<span class="hueco">&nbsp;</span>${despues}</div>
        <div class="opciones chips">
          ${orden.map((o) => `<button class="opcion" data-i="${o.i}">${o.text}</button>`).join("")}
        </div>
      </div>`);
    cont.append(el);

    const hueco = el.querySelector(".hueco");
    const botones = [...el.querySelectorAll(".opcion")];
    const elegir = (btn) => {
      botones.forEach((b) => b.classList.remove("seleccionada"));
      btn.classList.add("seleccionada");
      elegido = Number(btn.dataset.i);
      hueco.textContent = ej.options[elegido];
      hueco.classList.add("lleno");
      NAF.Sonido.tap();
      alCambiar();
    };
    botones.forEach((b) => b.addEventListener("click", () => elegir(b)));

    return {
      calificable: true,
      listo: () => elegido !== null,
      tecla(k) { const n = Number(k); if (n >= 1 && n <= botones.length) elegir(botones[n - 1]); },
      comprobar() {
        const correcto = elegido === ej.answer;
        botones.forEach((b) => {
          b.disabled = true;
          b.classList.remove("seleccionada");
          const i = Number(b.dataset.i);
          if (i === ej.answer) b.classList.add("correcta");
          else if (i === elegido) b.classList.add("incorrecta");
        });
        return { correcto, solucion: limpiar(ej.sentence.replace("___", ej.options[ej.answer])) };
      }
    };
  }

  /* ---------- EMPAREJAR ---------- */
  function match(ej, cont, { alTerminar }) {
    const izq = mezclar(ej.pairs.map((p, i) => ({ text: p[0], i })));
    const der = mezclar(ej.pairs.map((p, i) => ({ text: p[1], i })));
    let seleccion = { izq: null, der: null };
    let hechos = 0;
    let errores = 0;

    const col = (items, lado) => items.map((o) =>
      `<button class="opcion" data-i="${o.i}" data-lado="${lado}">${o.text}</button>`).join("");

    const el = h(`
      <div class="leccion-contenido">
        ${etiqueta("Emparejar", "🔗")}
        <h1 class="ej-pregunta">${ej.prompt}</h1>
        <div class="emparejar">
          <div class="columna">${col(izq, "izq")}</div>
          <div class="columna">${col(der, "der")}</div>
        </div>
      </div>`);
    cont.append(el);

    el.querySelectorAll(".opcion").forEach((btn) => btn.addEventListener("click", () => {
      const lado = btn.dataset.lado;
      el.querySelectorAll(`[data-lado="${lado}"]`).forEach((b) => b.classList.remove("seleccionada"));
      btn.classList.add("seleccionada");
      seleccion[lado] = btn;
      NAF.Sonido.tap();

      if (seleccion.izq && seleccion.der) {
        const a = seleccion.izq, b = seleccion.der;
        seleccion = { izq: null, der: null };
        // Se compara por texto: si dos tarjetas dicen lo mismo (p. ej. «Planilla»), cualquiera vale.
        if (ej.pairs[a.dataset.i][1] === ej.pairs[b.dataset.i][1]) {
          [a, b].forEach((x) => { x.classList.remove("seleccionada"); x.classList.add("correcta"); x.disabled = true; });
          setTimeout(() => [a, b].forEach((x) => { x.classList.remove("correcta"); x.classList.add("hecha"); }), 350);
          NAF.Sonido.correcto();
          if (++hechos === ej.pairs.length) setTimeout(() => alTerminar(), 450);
        } else {
          errores++;
          [a, b].forEach((x) => { x.classList.remove("seleccionada"); x.classList.add("incorrecta"); });
          setTimeout(() => [a, b].forEach((x) => x.classList.remove("incorrecta")), 450);
          NAF.Sonido.incorrecto();
        }
      }
    }));

    return {
      calificable: true,
      autoCompleta: true,
      get errores() { return errores; },
      listo: () => hechos === ej.pairs.length,
      // Emparejar no quita vidas: los errores solo afectan la precisión.
      comprobar: () => ({ correcto: true })
    };
  }

  /* ---------- ORDENAR PALABRAS ---------- */
  function order(ej, cont, { alCambiar }) {
    const fichas = mezclar([...ej.answer, ...(ej.extra || [])].map((text, id) => ({ text, id })));
    const elegidas = []; // ids en el orden elegido

    const el = h(`
      <div class="leccion-contenido">
        ${etiqueta("Ordena las palabras", "🧩")}
        <h1 class="ej-pregunta">${ej.prompt}</h1>
        <div class="linea-respuesta"></div>
        <div class="banco">
          ${fichas.map((f) => `<button class="ficha" data-id="${f.id}">${f.text}</button>`).join("")}
        </div>
      </div>`);
    cont.append(el);

    const linea = el.querySelector(".linea-respuesta");
    const banco = el.querySelector(".banco");
    let bloqueado = false;

    const pintar = () => {
      linea.innerHTML = "";
      elegidas.forEach((id) => {
        const f = fichas.find((x) => x.id === id);
        const b = h(`<button class="ficha">${f.text}</button>`);
        b.addEventListener("click", () => {
          if (bloqueado) return;
          elegidas.splice(elegidas.indexOf(id), 1);
          NAF.Sonido.tap();
          pintar();
        });
        linea.append(b);
      });
      banco.querySelectorAll(".ficha").forEach((b) => b.classList.toggle("usada", elegidas.includes(Number(b.dataset.id))));
      alCambiar();
    };

    banco.querySelectorAll(".ficha").forEach((b) => b.addEventListener("click", () => {
      if (bloqueado) return;
      elegidas.push(Number(b.dataset.id));
      NAF.Sonido.tap();
      pintar();
    }));

    const frase = () => elegidas.map((id) => fichas.find((x) => x.id === id).text).join(" ");

    return {
      calificable: true,
      listo: () => elegidas.length > 0,
      comprobar() {
        bloqueado = true;
        el.querySelectorAll(".ficha").forEach((b) => (b.disabled = true));
        const solucion = ej.answer.join(" ");
        return { correcto: frase() === solucion, solucion: solucion + "." };
      }
    };
  }

  const TIPOS = { teoria, choice, tf, fill, match, order };

  /** Evita que montos como «S/ 8 000» o «18 %» se partan en dos líneas. */
  const sinCortes = (texto) => texto
    .replace(/S\/ (\d{1,3}(?: \d{3})*(?:,\d+)?)/g, (m) => m.replace(/ /g, " "))
    .replace(/(\d) %/g, "$1 %");

  const formatear = (ej) => JSON.parse(JSON.stringify(ej), (k, v) => (typeof v === "string" ? sinCortes(v) : v));

  return {
    sinCortes,
    render(ej, contenedor, eventos) {
      contenedor.innerHTML = "";
      const fn = TIPOS[ej.type];
      if (!fn) throw new Error(`Tipo de ejercicio desconocido: ${ej.type}`);
      return fn(formatear(ej), contenedor, eventos);
    }
  };
})();
