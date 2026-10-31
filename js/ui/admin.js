/* =========================================================
   PANEL NAF — vista para administradores: participantes
   registrados, su avance y descarga del reporte (Excel / CSV).
   Los datos solo llegan si Supabase confirma que la cuenta es
   administradora (función reporte_participantes).
   ========================================================= */
window.NAF = window.NAF || {};

NAF.Admin = (function () {
  const SHEETJS = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
  const $ = (id) => document.getElementById(id);
  const DIA = 24 * 60 * 60 * 1000;

  let filas = [];          // datos crudos de Supabase
  let filtro = "";
  let orden = "avance";

  const totalLecciones = () => NAF.RUTA.reduce((n, u) => n + u.lecciones.length, 0);
  const escapar = (t) => String(t == null ? "" : t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /** Agrega a cada fila los cálculos de avance (por unidad, %, última actividad). */
  function enriquecer(f) {
    const hechas = f.completadas || {};
    const porUnidad = NAF.RUTA.map((u) => u.lecciones.filter((l) => hechas[l.id]).length);
    const lecciones = Object.keys(hechas).length;
    return Object.assign({}, f, {
      lecciones,
      porUnidad,
      unidadesCompletas: porUnidad.filter((n, i) => n === NAF.RUTA[i].lecciones.length).length,
      avance: Math.round((lecciones / totalLecciones()) * 100),
      ultima: f.actualizado ? new Date(f.actualizado) : null,
      registro: f.creado ? new Date(f.creado) : null
    });
  }

  const fecha = (d, conHora = true) => d
    ? d.toLocaleString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric", ...(conHora ? { hour: "2-digit", minute: "2-digit" } : {}) })
    : "—";

  function haceCuanto(d) {
    if (!d) return "sin actividad";
    const dias = Math.floor((Date.now() - d.getTime()) / DIA);
    if (dias <= 0) return "hoy";
    if (dias === 1) return "ayer";
    if (dias < 30) return `hace ${dias} días`;
    return fecha(d, false);
  }

  function visibles() {
    const f = NAF.Nube.normalizarUsuario(filtro);
    const lista = filas.filter((x) => !f || NAF.Nube.normalizarUsuario(x.nombre).includes(f) || x.usuario.includes(f));
    const cmp = {
      avance: (a, b) => b.lecciones - a.lecciones || b.xp - a.xp,
      xp: (a, b) => b.xp - a.xp,
      reciente: (a, b) => (b.ultima || 0) - (a.ultima || 0),
      nombre: (a, b) => a.nombre.localeCompare(b.nombre, "es")
    }[orden];
    return lista.slice().sort(cmp);
  }

  /* ---------- Dibujo ---------- */
  function resumen() {
    const n = filas.length;
    const activos = filas.filter((f) => f.ultima && Date.now() - f.ultima.getTime() < 7 * DIA).length;
    const promedio = n ? Math.round(filas.reduce((s, f) => s + f.avance, 0) / n) : 0;
    const terminaron = filas.filter((f) => f.lecciones >= totalLecciones()).length;
    return `
      <div class="stats-grid">
        <div class="tarjeta stat-caja"><span class="emoji">👥</span><div><b>${n}</b><small>Registrados</small></div></div>
        <div class="tarjeta stat-caja"><span class="emoji">🟢</span><div><b>${activos}</b><small>Activos (7 días)</small></div></div>
        <div class="tarjeta stat-caja"><span class="emoji">📈</span><div><b>${promedio}%</b><small>Avance promedio</small></div></div>
        <div class="tarjeta stat-caja"><span class="emoji">🎓</span><div><b>${terminaron}</b><small>Terminaron el curso</small></div></div>
      </div>`;
  }

  function tarjeta(f) {
    return `
      <article class="tarjeta participante">
        <div class="participante-cabecera">
          <div class="cuenta-avatar" aria-hidden="true">${escapar(f.nombre.trim().charAt(0).toUpperCase())}</div>
          <div class="participante-nombre">
            <b>${escapar(f.nombre)}${f.es_admin ? ' <span class="chip">Admin</span>' : ""}</b>
            <small>@${escapar(f.usuario)} · registrado el ${fecha(f.registro, false)}</small>
          </div>
        </div>
        <div class="participante-avance">
          <div class="barra"><div class="barra-relleno" style="width:${f.avance}%"></div></div>
          <small>${f.lecciones}/${totalLecciones()} lecciones · ${f.avance}%</small>
        </div>
        <div class="participante-datos">
          <span>⚡ ${f.xp} XP</span>
          <span>🏆 ${f.unidadesCompletas}/${NAF.RUTA.length} unidades</span>
          <span>🕒 ${haceCuanto(f.ultima)}</span>
        </div>
      </article>`;
  }

  function pintarLista() {
    const lista = visibles();
    $("admin-lista").innerHTML = lista.length
      ? lista.map(tarjeta).join("")
      : `<p class="vacio">${filas.length ? `🔍 Nadie coincide con «${escapar(filtro)}».` : "Todavía no hay participantes registrados."}</p>`;
    $("admin-cuenta").textContent = `${lista.length} de ${filas.length} participantes`;
  }

  function pintar() {
    $("admin-contenido").innerHTML = `
      ${resumen()}
      <div class="admin-descargas">
        <button class="btn btn-bloque" id="admin-excel" type="button">⬇️ Descargar Excel</button>
        <button class="btn btn-blanco" id="admin-csv" type="button">CSV</button>
      </div>
      <div class="admin-filtros">
        <input id="admin-buscar" class="input-buscar" type="search" placeholder="Buscar por nombre o usuario…" value="${escapar(filtro)}">
        <label class="admin-orden" for="admin-orden">
          <span>Ordenar</span>
          <select id="admin-orden">
            <option value="avance">Más avance</option>
            <option value="xp">Más XP</option>
            <option value="reciente">Actividad reciente</option>
            <option value="nombre">Nombre (A-Z)</option>
          </select>
        </label>
      </div>
      <p class="admin-cuenta" id="admin-cuenta"></p>
      <div class="admin-lista" id="admin-lista"></div>`;
    $("admin-orden").value = orden;
    $("admin-buscar").addEventListener("input", (e) => { filtro = e.target.value; pintarLista(); });
    $("admin-orden").addEventListener("change", (e) => { orden = e.target.value; pintarLista(); });
    $("admin-excel").addEventListener("click", descargarExcel);
    $("admin-csv").addEventListener("click", descargarCsv);
    pintarLista();
  }

  async function render() {
    $("admin-contenido").innerHTML = `<p class="vacio">⏳ Cargando participantes…</p>`;
    try {
      filas = (await NAF.Nube.reporte()).map(enriquecer);
      pintar();
    } catch (err) {
      $("admin-contenido").innerHTML = `
        <div class="tarjeta admin-error">
          <p>${escapar(err.message)}</p>
          <button class="btn btn-azul" type="button" id="admin-reintentar">Intentar de nuevo</button>
        </div>`;
      $("admin-reintentar").addEventListener("click", render);
      if (!NAF.Nube.esAdmin) NAF.App.refrescar();
    }
  }

  /* ---------- Reporte descargable ---------- */
  function tabla() {
    const cab = ["N.°", "Nombre", "Usuario", "Lecciones completadas", "Total de lecciones", "% de avance",
      "Unidades completas", "XP", "Racha (días)", "Registrado", "Última actividad",
      ...NAF.RUTA.map((u) => `U${u.numero}. ${u.titulo}`)];
    const cuerpo = visibles().map((f, i) => [
      i + 1, f.nombre, f.usuario, f.lecciones, totalLecciones(), f.avance / 100,
      f.unidadesCompletas, f.xp, f.racha, fecha(f.registro), fecha(f.ultima),
      ...f.porUnidad.map((n, k) => `${n}/${NAF.RUTA[k].lecciones.length}`)
    ]);
    return [cab, ...cuerpo];
  }

  const nombreArchivo = (ext) => `naf-aprende-reporte-${NAF.Progreso.hoy()}.${ext}`;

  function guardarArchivo(blob, nombre) {
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement("a"), { href: url, download: nombre });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  function descargarCsv() {
    const csv = tabla().map((fila, r) => fila.map((v, c) => {
      const t = r > 0 && c === 5 ? `${Math.round(v * 100)}%` : String(v); // columna «% de avance»
      return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
    }).join(",")).join("\r\n");
    guardarArchivo(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }), nombreArchivo("csv"));
  }

  function cargarSheetJS() {
    if (window.XLSX) return Promise.resolve();
    return new Promise((ok, mal) => {
      const s = Object.assign(document.createElement("script"), { src: SHEETJS, onload: ok, onerror: mal });
      document.head.append(s);
    });
  }

  async function descargarExcel(e) {
    const boton = e.currentTarget;
    boton.disabled = true;
    boton.textContent = "Preparando Excel…";
    try {
      await cargarSheetJS();
      const datos = tabla();
      const hoja = XLSX.utils.aoa_to_sheet(datos);
      hoja["!cols"] = datos[0].map((t, i) => ({ wch: i === 1 ? 28 : Math.min(Math.max(String(t).length, 10), 34) }));
      hoja["!autofilter"] = { ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: datos.length - 1, c: datos[0].length - 1 } }) };
      for (let r = 1; r < datos.length; r++) {      // columna «% de avance» con formato de porcentaje
        const celda = hoja[XLSX.utils.encode_cell({ r, c: 5 })];
        if (celda) celda.z = "0%";
      }
      const n = filas.length;
      const resumenHoja = XLSX.utils.aoa_to_sheet([
        ["NAF Aprende — Reporte de participantes"],
        ["Núcleo de Apoyo Fiscal · CERTUS"],
        ["Generado", fecha(new Date())],
        [],
        ["Registrados", n],
        ["Activos en los últimos 7 días", filas.filter((f) => f.ultima && Date.now() - f.ultima.getTime() < 7 * DIA).length],
        ["Avance promedio", n ? Math.round(filas.reduce((s, f) => s + f.avance, 0) / n) / 100 : 0],
        ["Terminaron el curso", filas.filter((f) => f.lecciones >= totalLecciones()).length]
      ]);
      if (resumenHoja.B7) resumenHoja.B7.z = "0%";
      resumenHoja["!cols"] = [{ wch: 32 }, { wch: 22 }];
      const libro = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(libro, hoja, "Participantes");
      XLSX.utils.book_append_sheet(libro, resumenHoja, "Resumen");
      const binario = XLSX.write(libro, { bookType: "xlsx", type: "array" });
      guardarArchivo(new Blob([binario], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), nombreArchivo("xlsx"));
    } catch (err) {
      NAF.Vistas.modal(`<p style="padding-top:12px">No se pudo preparar el Excel (¿hay internet?). Prueba con el botón CSV, que también se abre en Excel.</p>`);
    } finally {
      boton.disabled = false;
      boton.textContent = "⬇️ Descargar Excel";
    }
  }

  return { render };
})();
