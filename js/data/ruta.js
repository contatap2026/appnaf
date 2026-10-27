/* =========================================================
   RUTA DE APRENDIZAJE — NAF Aprende
   Define TODAS las unidades del curso. Solo las unidades con
   `disponible: true` tienen contenido (ver js/data/unidadN.js).
   ========================================================= */
window.NAF = window.NAF || {};

NAF.RUTA = [
  {
    id: "u1",
    numero: 1,
    titulo: "Primeros pasos con la SUNAT",
    descripcion: "Qué es la SUNAT, qué son los tributos, el RUC y la Clave SOL.",
    icono: "🏛️",
    color: "#58cc02",
    colorOscuro: "#46a302",
    disponible: true,
    lecciones: [
      { id: "u1l1", titulo: "¿Qué es la SUNAT y el NAF?", icono: "🏛️" },
      { id: "u1l2", titulo: "Los tributos", icono: "🪙" },
      { id: "u1l3", titulo: "El RUC: tu identidad tributaria", icono: "🪪" },
      { id: "u1l4", titulo: "Clave SOL y operaciones en línea", icono: "🔐" },
      { id: "u1l5", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u2",
    numero: 2,
    titulo: "Tu RUC al día",
    descripcion: "Estados del RUC, condición del domicilio fiscal y actualización de datos.",
    icono: "📋",
    color: "#1cb0f6",
    colorOscuro: "#1899d6",
    disponible: true,
    lecciones: [
      { id: "u2l1", titulo: "Estados: activo, suspensión y baja", icono: "🚦" },
      { id: "u2l2", titulo: "Habido y no habido", icono: "🏠" },
      { id: "u2l3", titulo: "Actualiza tus datos", icono: "✏️" },
      { id: "u2l4", titulo: "Ficha RUC y consulta RUC", icono: "🔎" },
      { id: "u2l5", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u3",
    numero: 3,
    titulo: "Elige tu régimen tributario",
    descripcion: "NRUS, RER, Régimen MYPE Tributario y Régimen General: ¿cuál te conviene?",
    icono: "🧭",
    color: "#ce82ff",
    colorOscuro: "#a568cc",
    disponible: true,
    lecciones: [
      { id: "u3l1", titulo: "Nuevo RUS (NRUS)", icono: "🛒" },
      { id: "u3l2", titulo: "Régimen Especial (RER)", icono: "🏪" },
      { id: "u3l3", titulo: "Régimen MYPE Tributario", icono: "🏭" },
      { id: "u3l4", titulo: "Régimen General", icono: "🏢" },
      { id: "u3l5", titulo: "Compara y decide", icono: "⚖️" },
      { id: "u3l6", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u4",
    numero: 4,
    titulo: "Comprobantes de pago",
    descripcion: "Boleta, factura, ticket, notas de crédito/débito, guía de remisión y recibo por honorarios.",
    icono: "🧾",
    color: "#ff9600",
    colorOscuro: "#cc7800",
    disponible: true,
    lecciones: [
      { id: "u4l1", titulo: "Boleta vs. factura", icono: "🧾" },
      { id: "u4l2", titulo: "Tickets y otros comprobantes", icono: "🎟️" },
      { id: "u4l3", titulo: "Notas de crédito y débito", icono: "🔁" },
      { id: "u4l4", titulo: "Guía de remisión", icono: "🚚" },
      { id: "u4l5", titulo: "Recibo por honorarios", icono: "👩‍💻" },
      { id: "u4l6", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u5",
    numero: 5,
    titulo: "Facturación electrónica",
    descripcion: "Emite comprobantes electrónicos desde SUNAT y verifica su validez.",
    icono: "💻",
    color: "#ff4b4b",
    colorOscuro: "#d33131",
    disponible: true,
    lecciones: [
      { id: "u5l1", titulo: "¿Qué es un comprobante electrónico?", icono: "📲" },
      { id: "u5l2", titulo: "Emite tu boleta electrónica", icono: "🧾" },
      { id: "u5l3", titulo: "Emite tu factura electrónica", icono: "📄" },
      { id: "u5l4", titulo: "Consulta de validez", icono: "✅" },
      { id: "u5l5", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u6",
    numero: 6,
    titulo: "El IGV sin miedo",
    descripcion: "Tasa del 18 %, débito y crédito fiscal, y cómo se calcula el IGV a pagar.",
    icono: "➗",
    color: "#2b70c9",
    colorOscuro: "#1f5aa6",
    disponible: true,
    lecciones: [
      { id: "u6l1", titulo: "¿Qué grava el IGV?", icono: "🛍️" },
      { id: "u6l2", titulo: "Débito fiscal", icono: "📤" },
      { id: "u6l3", titulo: "Crédito fiscal", icono: "📥" },
      { id: "u6l4", titulo: "Calcula tu IGV del mes", icono: "🧮" },
      { id: "u6l5", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u7",
    numero: 7,
    titulo: "Impuesto a la Renta",
    descripcion: "Categorías de renta, pagos a cuenta y declaración anual.",
    icono: "📈",
    color: "#00b8a9",
    colorOscuro: "#00968a",
    disponible: true,
    lecciones: [
      { id: "u7l1", titulo: "Las cinco categorías", icono: "🖐️" },
      { id: "u7l2", titulo: "Renta empresarial", icono: "🏪" },
      { id: "u7l3", titulo: "Pagos a cuenta", icono: "📆" },
      { id: "u7l4", titulo: "Declaración anual", icono: "🗓️" },
      { id: "u7l5", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u8",
    numero: 8,
    titulo: "Declara y paga",
    descripcion: "Cronograma de vencimientos, formularios, NPS y fraccionamiento.",
    icono: "💳",
    color: "#e86aa6",
    colorOscuro: "#c4548a",
    disponible: true,
    lecciones: [
      { id: "u8l1", titulo: "El cronograma y tu último dígito", icono: "📅" },
      { id: "u8l2", titulo: "Declara Fácil y formularios", icono: "🖥️" },
      { id: "u8l3", titulo: "Paga con NPS", icono: "🏦" },
      { id: "u8l4", titulo: "¿No llegas? Fraccionamiento", icono: "🧩" },
      { id: "u8l5", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u9",
    numero: 9,
    titulo: "Libros y registros",
    descripcion: "Registro de Ventas y Compras, libros electrónicos y qué lleva cada régimen.",
    icono: "📚",
    color: "#8a6d3b",
    colorOscuro: "#6e572f",
    disponible: true,
    lecciones: [
      { id: "u9l1", titulo: "¿Para qué sirven los libros?", icono: "📒" },
      { id: "u9l2", titulo: "Registro de Ventas y Compras", icono: "📊" },
      { id: "u9l3", titulo: "Libros electrónicos", icono: "💾" },
      { id: "u9l4", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u10",
    numero: 10,
    titulo: "Tus trabajadores",
    descripcion: "Planilla electrónica, EsSalud, ONP/AFP y retenciones de cuarta categoría.",
    icono: "👷",
    color: "#7a5af8",
    colorOscuro: "#5f43d1",
    disponible: true,
    lecciones: [
      { id: "u10l1", titulo: "Planilla electrónica", icono: "🗂️" },
      { id: "u10l2", titulo: "EsSalud y pensiones", icono: "🩺" },
      { id: "u10l3", titulo: "Prestadores de servicios", icono: "🤝" },
      { id: "u10l4", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u11",
    numero: 11,
    titulo: "Infracciones y multas",
    descripcion: "Qué es una infracción, la UIT, el régimen de gradualidad y cómo evitarlas.",
    icono: "⚠️",
    color: "#f5a524",
    colorOscuro: "#c98410",
    disponible: true,
    lecciones: [
      { id: "u11l1", titulo: "Infracciones más comunes", icono: "🚫" },
      { id: "u11l2", titulo: "La UIT y las multas", icono: "💰" },
      { id: "u11l3", titulo: "Régimen de gradualidad", icono: "📉" },
      { id: "u11l4", titulo: "Desafío de la unidad", icono: "🏆", desafio: true }
    ]
  },
  {
    id: "u12",
    numero: 12,
    titulo: "Crece formal",
    descripcion: "Beneficios de la formalidad: crédito, contratos con el Estado y nuevos clientes.",
    icono: "🚀",
    color: "#14a44d",
    colorOscuro: "#0f803b",
    disponible: true,
    lecciones: [
      { id: "u12l1", titulo: "Beneficios de ser formal", icono: "🌱" },
      { id: "u12l2", titulo: "Vende al Estado y a empresas", icono: "🤝" },
      { id: "u12l3", titulo: "Tu plan de cumplimiento", icono: "🗺️" },
      { id: "u12l4", titulo: "Examen final del curso", icono: "🎓", desafio: true }
    ]
  }
];
