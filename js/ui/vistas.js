/* =========================================================
   VISTAS — glosario, progreso, panel derecho y modal
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Vistas = (function () {
  const META_DIARIA = 20; // XP
  const MARCAS = `
    <span class="placa"><img src="img/logo-naf.png" alt="NAF · Núcleo de Apoyo Fiscal" width="420" height="134"></span>
    <span class="placa"><img src="img/logo-certus.png" alt="CERTUS" width="360" height="100"></span>`;
  const $ = (id) => document.getElementById(id);

  /* ---------- Modal genérico ---------- */
  function modal(html) {
    $("modal-contenido").innerHTML = html;
    // Fuera de una lección, el botón «atrás» del celular cierra la hoja
    if ($("modal").hidden && !NAF.Leccion.abierta()) NAF.Historial.agregar("modal");
    $("modal").hidden = false;
  }
  function cerrarModal(desdeHistorial = false) {
    if ($("modal").hidden) return;
    $("modal").hidden = true;
    if (!desdeHistorial) NAF.Historial.quitar("modal");
  }

  /* ---------- Barra superior (móvil/tablet) ---------- */
  function topbar() {
    $("top-racha").textContent = NAF.Progreso.racha;
    $("top-xp").textContent = NAF.Progreso.xp;
    const p = NAF.Nube.perfil;
    $("saludo").hidden = !p;
    if (p) $("saludo").textContent = `¡Hola, ${p.nombre.split(" ")[0]}! 👋`;
  }

  /* ---------- Cuenta (en «Mi progreso») ---------- */
  const TEXTO_ESTADO = {
    sincronizado: "☁️ Avance guardado en la nube",
    subiendo: "⏳ Guardando en la nube…",
    pendiente: "⏳ Se guardará en la nube al tener internet",
    local: "📱 Avance guardado solo en este celular"
  };

  function tarjetaCuenta() {
    if (!NAF.Nube.configurada) return "";
    const p = NAF.Nube.perfil;
    if (!p) return "";
    const escapar = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    return `
      <div class="tarjeta cuenta">
        <div class="cuenta-avatar" aria-hidden="true">${escapar(p.nombre.trim().charAt(0).toUpperCase())}</div>
        <div class="cuenta-datos">
          <b>${escapar(p.nombre)}</b>
          <small>Usuario: ${escapar(p.usuario || "")}</small>
          <span class="estado-nube ${NAF.Nube.estado}" id="estado-nube">${TEXTO_ESTADO[NAF.Nube.estado]}</span>
        </div>
      </div>`;
  }

  /* ---------- Panel derecho ---------- */
  function panelDerecho() {
    const xpHoy = NAF.Progreso.xpDeDia(NAF.Progreso.hoy());
    const disponibles = NAF.RUTA.filter((u) => u.disponible).length;
    $("panel-derecho").innerHTML = `
      <div class="panel-stats">
        <img class="stat-simbolo" src="img/naf-simbolo.png" alt="NAF" width="28" height="28">
        <div class="stat" title="Racha"><span>🔥</span> <b>${NAF.Progreso.racha}</b></div>
        <div class="stat stat-xp" title="XP total"><span>⚡</span> <b>${NAF.Progreso.xp}</b></div>
      </div>

      <div class="tarjeta panel-tarjeta">
        <h3>🎯 Meta diaria</h3>
        <div class="meta-fila">
          <div class="barra"><div class="barra-relleno dorada" style="width:${Math.min(100, (xpHoy / META_DIARIA) * 100)}%"></div></div>
          <small>${Math.min(xpHoy, META_DIARIA)} / ${META_DIARIA} XP</small>
        </div>
      </div>

      <div class="tarjeta panel-tarjeta">
        <h3>🎓 ¿Qué es el NAF?</h3>
        <p>Los Núcleos de Apoyo Contable y Fiscal son espacios en universidades e institutos donde estudiantes capacitados por la SUNAT orientan gratis a emprendedores y ciudadanos.</p>
      </div>

      <div class="tarjeta panel-tarjeta">
        <h3>🗺️ Tu ruta</h3>
        <p>${NAF.RUTA.length} unidades: del RUC y la Clave SOL hasta el IGV, la Renta, las declaraciones y la formalización. ${disponibles === NAF.RUTA.length ? "¡Todas disponibles!" : `${disponibles} disponible${disponibles > 1 ? "s" : ""} por ahora.`}</p>
      </div>

      <div class="tarjeta panel-tarjeta">
        <h3>🤝 Un proyecto de</h3>
        <div class="marcas">${MARCAS}</div>
      </div>

      <p style="color:var(--texto-suave);font-size:12px;line-height:1.5;padding:0 4px">
        Material educativo y referencial. Para tu caso particular, consulta los canales oficiales de la SUNAT o acude a un NAF.
      </p>`;
  }

  /* ---------- Glosario ---------- */
  function glosario(filtro = "") {
    const f = filtro.trim().toLowerCase();
    const lista = NAF.GLOSARIO.filter((g) =>
      !f || g.termino.toLowerCase().includes(f) || g.definicion.toLowerCase().includes(f))
      .sort((a, b) => a.unidad - b.unidad);

    $("glosario-lista").innerHTML = lista.length
      ? lista.map((g) => `
          <article class="tarjeta termino">
            <h3>${g.termino} <span class="chip">Unidad ${g.unidad}</span></h3>
            <p>${g.definicion}</p>
          </article>`).join("")
      : `<p class="vacio">🔍 No encontramos «${filtro}». Prueba con otro término.</p>`;
  }

  /* ---------- Progreso ---------- */
  function progreso() {
    const lecciones = NAF.RUTA.flatMap((u) => u.lecciones);
    const completadas = NAF.Progreso.totalCompletadas();
    const unidadesOk = NAF.RUTA.filter((u) => u.lecciones.every((l) => NAF.Progreso.estaCompletada(l.id))).length;

    // Últimos 7 días de XP
    const dias = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];
    const semana = Array.from({ length: 7 }, (_, k) => {
      const offset = k - 6;
      const d = new Date(); d.setDate(d.getDate() + offset);
      return { etiqueta: dias[d.getDay()], xp: NAF.Progreso.xpDeDia(NAF.Progreso.hoy(offset)), hoy: offset === 0 };
    });
    const max = Math.max(META_DIARIA, ...semana.map((d) => d.xp));

    $("progreso-contenido").innerHTML = `
      ${tarjetaCuenta()}
      <div class="stats-grid">
        <div class="tarjeta stat-caja"><span class="emoji">🔥</span><div><b>${NAF.Progreso.racha}</b><small>Días de racha</small></div></div>
        <div class="tarjeta stat-caja"><span class="emoji">⚡</span><div><b>${NAF.Progreso.xp}</b><small>XP total</small></div></div>
        <div class="tarjeta stat-caja"><span class="emoji">✅</span><div><b>${completadas} / ${lecciones.length}</b><small>Lecciones</small></div></div>
        <div class="tarjeta stat-caja"><span class="emoji">🏆</span><div><b>${unidadesOk} / ${NAF.RUTA.length}</b><small>Unidades</small></div></div>
      </div>

      <h2 class="seccion-titulo">XP de la semana</h2>
      <div class="tarjeta semana">
        ${semana.map((d) => `
          <div class="semana-dia${d.hoy ? " hoy" : ""}" title="${d.xp} XP">
            <div class="semana-barra${d.xp ? " con-xp" : ""}" style="height:${(d.xp / max) * 100}%"></div>
            <small>${d.etiqueta}</small>
          </div>`).join("")}
      </div>

      <h2 class="seccion-titulo">Avance por unidad</h2>
      <div class="tarjeta" style="padding:4px 20px">
        ${NAF.RUTA.map((u) => {
          const ok = u.lecciones.filter((l) => NAF.Progreso.estaCompletada(l.id)).length;
          return `
            <div class="unidad-progreso">
              <div class="icono">${u.icono}</div>
              <div class="info">
                <b>${u.numero}. ${u.titulo}</b>
                <div class="barra"><div class="barra-relleno" style="width:${(ok / u.lecciones.length) * 100}%;background:${u.color}"></div></div>
              </div>
              <small>${u.disponible ? `${ok}/${u.lecciones.length}` : "🚧"}</small>
            </div>`;
        }).join("")}
      </div>

      <h2 class="seccion-titulo">Ajustes</h2>
      <div class="tarjeta" style="padding:4px 20px">
        <div class="ajuste">
          <span>🔊 Efectos de sonido</span>
          <button class="switch" id="ajuste-sonido" role="switch" aria-checked="${NAF.Progreso.sonido}" aria-label="Efectos de sonido"></button>
        </div>
        <div class="ajuste" style="border-top:2px solid var(--borde)">
          <span>🗑️ Reiniciar mi progreso</span>
          <button class="btn btn-blanco" id="ajuste-reiniciar" style="min-height:40px;color:var(--rojo)">Reiniciar</button>
        </div>
        ${NAF.Nube.conectado || NAF.Nube.perfil ? `
        <div class="ajuste" style="border-top:2px solid var(--borde)">
          <span>🚪 Cerrar sesión</span>
          <button class="btn btn-blanco" id="ajuste-salir" style="min-height:40px">Salir</button>
        </div>` : ""}
      </div>

      <div class="creditos">
        <small>NAF Aprende es un proyecto de</small>
        <div class="marcas">${MARCAS}</div>
      </div>`;

    $("ajuste-sonido").addEventListener("click", (e) => {
      NAF.Progreso.sonido = !NAF.Progreso.sonido;
      e.currentTarget.setAttribute("aria-checked", NAF.Progreso.sonido);
      NAF.Sonido.tap();
    });
    const salir = $("ajuste-salir");
    if (salir) salir.addEventListener("click", () => {
      modal(`
        <div class="final" style="padding:8px 0 0">
          <div class="mascota">👋</div>
          <h2 style="font-size:22px;font-weight:900">¿Cerrar sesión?</h2>
          <p style="color:var(--texto-suave)">Tu avance queda guardado en tu cuenta. Podrás seguir donde te quedaste al volver a entrar.</p>
          <div class="final-acciones">
            <button class="btn btn-azul btn-bloque" id="confirmar-salir-cuenta">Cerrar sesión</button>
            <button class="btn btn-blanco btn-bloque" data-cerrar>Cancelar</button>
          </div>
        </div>`);
      $("confirmar-salir-cuenta").addEventListener("click", async (e) => {
        e.target.disabled = true;
        e.target.textContent = "Cerrando sesión…";
        await NAF.Nube.salir();
        cerrarModal();
        NAF.App.refrescar();
        NAF.Acceso.mostrar("entrar");
      });
    });

    $("ajuste-reiniciar").addEventListener("click", () => {
      modal(`
        <div class="final" style="padding:8px 0 0">
          <div class="mascota">🗑️</div>
          <h2 style="font-size:22px;font-weight:900">¿Reiniciar todo tu progreso?</h2>
          <p style="color:var(--texto-suave)">Se borrarán tus XP, tu racha y las lecciones completadas en este dispositivo.</p>
          <div class="final-acciones">
            <button class="btn btn-rojo btn-bloque" id="confirmar-reinicio">Sí, reiniciar</button>
            <button class="btn btn-blanco btn-bloque" data-cerrar>Cancelar</button>
          </div>
        </div>`);
      $("confirmar-reinicio").addEventListener("click", () => {
        NAF.Progreso.reiniciar();
        cerrarModal();
        NAF.App.refrescar();
      });
    });
  }

  // Actualiza el aviso de la nube sin redibujar toda la vista
  NAF.Nube.alCambiarEstado((estado) => {
    const el = $("estado-nube");
    if (el) { el.className = `estado-nube ${estado}`; el.textContent = TEXTO_ESTADO[estado]; }
  });

  return { modal, cerrarModal, topbar, panelDerecho, glosario, progreso };
})();
