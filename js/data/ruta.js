/* =========================================================
   RUTA DE APRENDIZAJE — NAF Aprende (curso básico: 9 unidades)
   Define TODAS las unidades del curso. Solo las unidades con
   `disponible: true` tienen contenido (ver js/data/unidadN.js).
   ========================================================= */
window.NAF = window.NAF || {};

/** ¿La lección existe en la ruta actual? (se quitaron unidades: sus avances viejos no se cuentan) */
NAF.esLeccionVigente = (id) => NAF.RUTA.some((u) => u.lecciones.some((l) => l.id === id));

NAF.RUTA = [
  {
    id: "u1",
    numero: 1,
    titulo: "Primeros pasos con la SUNAT",
    descripcion: "Qué es la SUNAT, qué son los tributos, el RUC y la Clave SOL.",
    icono: "landmark",
    color: "#58cc02",
    colorOscuro: "#46a302",
    disponible: true,
    lecciones: [
      { id: "u1l1", titulo: "¿Qué es la SUNAT y el NAF?", icono: "landmark" },
      { id: "u1l2", titulo: "Los tributos", icono: "coins" },
      { id: "u1l3", titulo: "El RUC: tu identidad tributaria", icono: "id-card" },
      { id: "u1l4", titulo: "Clave SOL y operaciones en línea", icono: "lock-keyhole" },
      { id: "u1l5", titulo: "Desafío de la unidad", icono: "trophy", desafio: true }
    ]
  },
  {
    id: "u2",
    numero: 2,
    titulo: "Tu RUC al día",
    descripcion: "Estados del RUC, condición del domicilio fiscal y actualización de datos.",
    icono: "clipboard-list",
    color: "#1cb0f6",
    colorOscuro: "#1899d6",
    disponible: true,
    lecciones: [
      { id: "u2l1", titulo: "Estados: activo, suspensión y baja", icono: "activity" },
      { id: "u2l2", titulo: "Habido y no habido", icono: "house" },
      { id: "u2l3", titulo: "Actualiza tus datos", icono: "pencil-line" },
      { id: "u2l4", titulo: "Ficha RUC y consulta RUC", icono: "search" },
      { id: "u2l5", titulo: "Desafío de la unidad", icono: "trophy", desafio: true }
    ]
  },
  {
    id: "u3",
    numero: 3,
    titulo: "Elige tu régimen tributario",
    descripcion: "NRUS, RER, Régimen MYPE Tributario y Régimen General: ¿cuál te conviene?",
    icono: "scale",
    color: "#ce82ff",
    colorOscuro: "#a568cc",
    disponible: true,
    lecciones: [
      { id: "u3l1", titulo: "Nuevo RUS (NRUS)", icono: "shopping-cart" },
      { id: "u3l2", titulo: "Régimen Especial (RER)", icono: "store" },
      { id: "u3l3", titulo: "Régimen MYPE Tributario", icono: "factory" },
      { id: "u3l4", titulo: "Régimen General", icono: "building-2" },
      { id: "u3l5", titulo: "Compara y decide", icono: "scale" },
      { id: "u3l6", titulo: "Desafío de la unidad", icono: "trophy", desafio: true }
    ]
  },
  {
    id: "u4",
    numero: 4,
    titulo: "Comprobantes de pago",
    descripcion: "Boleta, factura, ticket, notas de crédito/débito, guía de remisión y recibo por honorarios.",
    icono: "receipt",
    color: "#ff9600",
    colorOscuro: "#cc7800",
    disponible: true,
    lecciones: [
      { id: "u4l1", titulo: "Boleta vs. factura", icono: "receipt" },
      { id: "u4l2", titulo: "Tickets y otros comprobantes", icono: "ticket" },
      { id: "u4l3", titulo: "Notas de crédito y débito", icono: "repeat" },
      { id: "u4l4", titulo: "Guía de remisión", icono: "truck" },
      { id: "u4l5", titulo: "Recibo por honorarios", icono: "briefcase" },
      { id: "u4l6", titulo: "Desafío de la unidad", icono: "trophy", desafio: true }
    ]
  },
  {
    id: "u5",
    numero: 5,
    titulo: "Facturación electrónica",
    descripcion: "Emite comprobantes electrónicos desde SUNAT y verifica su validez.",
    icono: "laptop",
    color: "#ff4b4b",
    colorOscuro: "#d33131",
    disponible: true,
    lecciones: [
      { id: "u5l1", titulo: "¿Qué es un comprobante electrónico?", icono: "smartphone" },
      { id: "u5l2", titulo: "Emite tu boleta electrónica", icono: "file-text" },
      { id: "u5l3", titulo: "Emite tu factura electrónica", icono: "file-check-2" },
      { id: "u5l4", titulo: "Consulta de validez", icono: "circle-check" },
      { id: "u5l5", titulo: "Desafío de la unidad", icono: "trophy", desafio: true }
    ]
  },
  {
    id: "u6",
    numero: 6,
    titulo: "El IGV sin miedo",
    descripcion: "Tasa del 18 %, débito y crédito fiscal, y cómo se calcula el IGV a pagar.",
    icono: "percent",
    color: "#2b70c9",
    colorOscuro: "#1f5aa6",
    disponible: true,
    lecciones: [
      { id: "u6l1", titulo: "¿Qué grava el IGV?", icono: "shopping-bag" },
      { id: "u6l2", titulo: "Débito fiscal", icono: "upload" },
      { id: "u6l3", titulo: "Crédito fiscal", icono: "download" },
      { id: "u6l4", titulo: "Calcula tu IGV del mes", icono: "calculator" },
      { id: "u6l5", titulo: "Desafío de la unidad", icono: "trophy", desafio: true }
    ]
  },
  {
    id: "u7",
    numero: 7,
    titulo: "Impuesto a la Renta",
    descripcion: "Categorías de renta, pagos a cuenta y declaración anual.",
    icono: "trending-up",
    color: "#00b8a9",
    colorOscuro: "#00968a",
    disponible: true,
    lecciones: [
      { id: "u7l1", titulo: "Las cinco categorías", icono: "folders" },
      { id: "u7l2", titulo: "Renta empresarial", icono: "store" },
      { id: "u7l3", titulo: "Pagos a cuenta", icono: "calendar-days" },
      { id: "u7l4", titulo: "Declaración anual", icono: "calendar-range" },
      { id: "u7l5", titulo: "Desafío de la unidad", icono: "trophy", desafio: true }
    ]
  },
  {
    id: "u8",
    numero: 8,
    titulo: "Declara y paga",
    descripcion: "Cronograma de vencimientos, formularios, NPS y fraccionamiento.",
    icono: "credit-card",
    color: "#e86aa6",
    colorOscuro: "#c4548a",
    disponible: true,
    lecciones: [
      { id: "u8l1", titulo: "El cronograma y tu último dígito", icono: "calendar" },
      { id: "u8l2", titulo: "Declara Fácil y formularios", icono: "monitor" },
      { id: "u8l3", titulo: "Paga con NPS", icono: "landmark" },
      { id: "u8l4", titulo: "¿No llegas? Fraccionamiento", icono: "puzzle" },
      { id: "u8l5", titulo: "Desafío de la unidad", icono: "trophy", desafio: true }
    ]
  },
  {
    id: "u12",
    numero: 9,
    titulo: "Crece formal",
    descripcion: "Beneficios de la formalidad: crédito, contratos con el Estado y nuevos clientes.",
    icono: "rocket",
    color: "#14a44d",
    colorOscuro: "#0f803b",
    disponible: true,
    lecciones: [
      { id: "u12l1", titulo: "Beneficios de ser formal", icono: "sprout" },
      { id: "u12l2", titulo: "Vende al Estado y a empresas", icono: "handshake" },
      { id: "u12l3", titulo: "Tu plan de cumplimiento", icono: "map" },
      { id: "u12l4", titulo: "Examen final del curso", icono: "graduation-cap", desafio: true }
    ]
  }
];
