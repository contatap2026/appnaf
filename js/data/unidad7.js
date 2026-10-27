/* =========================================================
   UNIDAD 7 — Impuesto a la Renta
   Las cinco categorías, renta empresarial, pagos a cuenta
   y declaración anual.
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u7l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Las cinco categorías",
      intro: "El <b>Impuesto a la Renta</b> grava lo que ganas. Según de dónde venga tu ingreso, la ley lo clasifica en <b>cinco categorías</b>:",
      puntos: [
        { icono: "1️⃣", titulo: "Primera: alquileres", texto: "Lo que ganas por alquilar un bien, como un departamento o un local." },
        { icono: "2️⃣", titulo: "Segunda: ganancias de capital", texto: "Por ejemplo, la ganancia al vender acciones u otros valores." },
        { icono: "3️⃣", titulo: "Tercera: negocios", texto: "Las rentas empresariales: comercio, industria, servicios de una empresa o negocio. <b>¡Aquí está tu emprendimiento!</b>" },
        { icono: "4️⃣", titulo: "Cuarta: trabajo independiente", texto: "Lo que cobras con recibos por honorarios." },
        { icono: "5️⃣", titulo: "Quinta: trabajo dependiente", texto: "Tu sueldo en planilla. El empleador te retiene el impuesto cada mes." }
      ]
    },
    {
      type: "match",
      prompt: "Une cada categoría con su origen",
      pairs: [
        ["Primera", "Alquileres"],
        ["Segunda", "Venta de acciones"],
        ["Tercera", "Negocios"],
        ["Cuarta", "Trabajo independiente"],
        ["Quinta", "Trabajo en planilla"]
      ],
      explain: "Primera y segunda son rentas de capital; cuarta y quinta, rentas del trabajo; tercera, rentas empresariales."
    },
    {
      type: "choice",
      prompt: "La ganancia de tu bodega es renta de…",
      options: [
        { text: "Tercera categoría", icono: "3️⃣" },
        { text: "Quinta categoría", icono: "5️⃣" },
        { text: "Primera categoría", icono: "1️⃣" }
      ],
      answer: 0,
      explain: "Los negocios generan rentas de tercera categoría, también llamadas rentas empresariales."
    },
    {
      type: "choice",
      escena: { personaje: "👵🏽", nombre: "Doña Elena", texto: "Alquilo el primer piso de mi casa a una farmacia." },
      prompt: "¿Qué renta obtiene doña Elena?",
      options: [
        { text: "Primera categoría", icono: "🏠" },
        { text: "Tercera categoría", icono: "🏪" },
        { text: "Cuarta categoría", icono: "👩‍💻" }
      ],
      answer: 0,
      explain: "El alquiler de un inmueble genera renta de primera categoría."
    },
    {
      type: "tf",
      statement: "Si trabajo en planilla, mi empleador me retiene el Impuesto a la Renta de quinta categoría cada mes.",
      answer: true,
      explain: "Correcto. El empleador actúa como agente de retención."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍🎨", nombre: "Valeria", texto: "Diseño logos para empresas y emito recibos por honorarios." },
      prompt: "¿Qué renta obtiene Valeria?",
      options: [
        { text: "Cuarta categoría", icono: "4️⃣" },
        { text: "Quinta categoría", icono: "5️⃣" },
        { text: "Segunda categoría", icono: "2️⃣" }
      ],
      answer: 0,
      explain: "El trabajo independiente con recibos por honorarios es renta de cuarta categoría (Unidad 4)."
    },
    {
      type: "tf",
      statement: "Una misma persona puede tener rentas de varias categorías a la vez.",
      answer: true,
      explain: "Sí. Por ejemplo, alguien en planilla (quinta) que además alquila un cuarto (primera)."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Las rentas de cuarta y quinta categoría son rentas del ___.",
      options: ["trabajo", "capital", "azar", "Estado"],
      answer: 0,
      explain: "Cuarta: trabajo independiente. Quinta: trabajo dependiente."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Mi", "negocio", "genera", "renta", "de", "tercera", "categoría"],
      extra: ["quinta", "primera"],
      explain: "Mi negocio genera renta de tercera categoría."
    }
  ]
};

NAF.CONTENIDO.u7l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Renta empresarial",
      intro: "En el RMT y el Régimen General, el impuesto se calcula sobre tu <b>renta neta</b>: lo que realmente ganó tu negocio.",
      puntos: [
        { icono: "➖", titulo: "La fórmula", texto: "<b>Renta neta = ingresos − costos y gastos deducibles</b>." },
        { icono: "🎯", titulo: "Principio de causalidad", texto: "Un gasto es deducible si es <b>necesario para generar ingresos</b> o mantener tu negocio: alquiler del local, sueldos, insumos, luz del local." },
        { icono: "📄", titulo: "Con sustento", texto: "Los gastos deben estar respaldados con comprobantes válidos (y bancarizados si corresponde)." },
        { icono: "🚫", titulo: "No deducibles", texto: "Gastos personales o familiares, multas de la SUNAT y gastos sin comprobante." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Cómo se calcula la renta neta de un negocio?",
      options: [
        { text: "Ingresos − costos y gastos deducibles" },
        { text: "Ingresos + gastos" },
        { text: "Solo los ingresos del mes" },
        { text: "El 18 % de las ventas" }
      ],
      answer: 0,
      explain: "La renta neta es la ganancia del negocio."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estos gastos es deducible para una panadería?",
      options: [
        { text: "La compra de harina con factura", icono: "🌾" },
        { text: "Las vacaciones familiares del dueño", icono: "🏖️" },
        { text: "Una multa de la SUNAT", icono: "⚠️" }
      ],
      answer: 0,
      explain: "La harina es necesaria para producir; las vacaciones son personales y las multas no son deducibles."
    },
    {
      type: "tf",
      statement: "Las multas que me pone la SUNAT se pueden deducir como gasto del negocio.",
      answer: false,
      explain: "Falso. Las multas y sanciones no son deducibles."
    },
    {
      type: "match",
      prompt: "¿Deducible o no deducible?",
      pairs: [
        ["Alquiler del local", "Deducible"],
        ["Ropa para mis hijos", "No deducible: gasto personal"],
        ["Compra sin comprobante", "No deducible: sin sustento"]
      ],
      explain: "Pregúntate: ¿es necesario para el negocio y tiene sustento?"
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🔬", nombre: "Sofía", texto: "En el año mi laboratorio tuvo ingresos de S/ 200 000 y gastos deducibles de S/ 150 000." },
      prompt: "¿Cuál es su renta neta?",
      options: [{ text: "S/ 50 000" }, { text: "S/ 350 000" }, { text: "S/ 200 000" }, { text: "S/ 36 000" }],
      answer: 0,
      explain: "S/ 200 000 − S/ 150 000 = S/ 50 000."
    },
    {
      type: "choice",
      prompt: "Si Sofía está en el Régimen General, ¿cuál es su impuesto anual sobre S/ 50 000 de renta neta?",
      options: [{ text: "S/ 14 750" }, { text: "S/ 9 000" }, { text: "S/ 5 000" }, { text: "S/ 750" }],
      answer: 0,
      explain: "29,5 % × S/ 50 000 = S/ 14 750."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Un gasto es deducible si es ___ para generar ingresos.",
      options: ["necesario", "caro", "familiar", "secreto"],
      answer: 0,
      explain: "Es el principio de causalidad."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Solo", "deduzco", "gastos", "del", "negocio", "con", "comprobante"],
      extra: ["personales", "sin"],
      explain: "Solo deduzco gastos del negocio con comprobante."
    }
  ]
};

NAF.CONTENIDO.u7l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Pagos a cuenta",
      intro: "En el RMT y el Régimen General no esperas a fin de año para pagar todo: cada mes haces un <b>pago a cuenta</b>, un adelanto del impuesto anual.",
      puntos: [
        { icono: "🏭", titulo: "RMT", texto: "Si tus ingresos del año no superan 300 UIT: <b>1 %</b> de tus ingresos netos del mes." },
        { icono: "🏢", titulo: "Régimen General", texto: "Un <b>coeficiente</b> (según tu impuesto del año anterior) o el <b>1,5 %</b> de tus ingresos netos del mes." },
        { icono: "🧾", titulo: "Se declaran con el IGV", texto: "Los pagos a cuenta se declaran y pagan mensualmente, junto con el IGV." },
        { icono: "🏪", titulo: "¿Y el RER?", texto: "En el RER el 1,5 % mensual no es un adelanto: es el pago <b>definitivo</b>." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es un pago a cuenta?",
      options: [
        { text: "Un adelanto mensual del Impuesto a la Renta anual", icono: "📆" },
        { text: "Una multa por pagar tarde", icono: "⚠️" },
        { text: "El pago de la cuota del NRUS", icono: "🛒" }
      ],
      answer: 0,
      explain: "Lo que pagas a cuenta se descuenta del impuesto anual."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Mi catering está en el RMT. Este mes tuve S/ 25 000 de ingresos netos y en el año no pasaré de 300 UIT." },
      prompt: "¿Cuál es su pago a cuenta del mes?",
      options: [{ text: "S/ 250" }, { text: "S/ 375" }, { text: "S/ 4 500" }, { text: "S/ 2 500" }],
      answer: 0,
      explain: "1 % × S/ 25 000 = S/ 250."
    },
    {
      type: "choice",
      prompt: "Una empresa del Régimen General usa el 1,5 % y tuvo S/ 40 000 de ingresos netos en el mes. ¿Cuánto paga a cuenta?",
      options: [{ text: "S/ 600" }, { text: "S/ 400" }, { text: "S/ 11 800" }, { text: "S/ 7 200" }],
      answer: 0,
      explain: "1,5 % × S/ 40 000 = S/ 600."
    },
    {
      type: "tf",
      statement: "En el RER, el 1,5 % mensual es un pago a cuenta que luego se regulariza en la declaración anual.",
      answer: false,
      explain: "Falso. En el RER ese pago es definitivo y no hay declaración anual (Unidad 3)."
    },
    {
      type: "match",
      prompt: "Une cada régimen con su pago mensual de renta",
      pairs: [
        ["RMT (hasta 300 UIT)", "1 % a cuenta"],
        ["Régimen General", "Coeficiente o 1,5 % a cuenta"],
        ["RER", "1,5 % definitivo"],
        ["NRUS", "Cuota fija"]
      ],
      explain: "Cada régimen paga la renta mensual de forma distinta."
    },
    {
      type: "tf",
      statement: "Los pagos a cuenta se declaran cada mes junto con el IGV.",
      answer: true,
      explain: "Correcto. Ambos van en la declaración mensual."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Los pagos a cuenta se ___ del impuesto anual.",
      options: ["descuentan", "duplican", "olvidan", "suman"],
      answer: 0,
      explain: "Al final del año, restas lo que ya adelantaste."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Cada", "mes", "adelanto", "mi", "impuesto", "a", "la", "renta"],
      extra: ["nunca", "IGV"],
      explain: "Cada mes adelanto mi impuesto a la renta."
    }
  ]
};

NAF.CONTENIDO.u7l4 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Declaración anual",
      intro: "Al terminar el año, en el RMT y el Régimen General presentas la <b>declaración anual</b> del Impuesto a la Renta.",
      puntos: [
        { icono: "🗓️", titulo: "¿Cuándo?", texto: "Entre marzo y abril del año siguiente, según el cronograma que publica la SUNAT." },
        { icono: "🖥️", titulo: "¿Con qué?", texto: "Los negocios usan el <b>Formulario Virtual 710</b>. Las personas naturales por sus rentas de trabajo y capital usan el <b>709</b>." },
        { icono: "🧮", titulo: "El cálculo", texto: "Impuesto del año − pagos a cuenta = <b>saldo por pagar</b> o <b>saldo a favor</b>." },
        { icono: "💰", titulo: "Si tienes saldo a favor", texto: "Puedes pedir la <b>devolución</b> o aplicarlo contra tus pagos a cuenta siguientes." },
        { icono: "🧾", titulo: "Tip para personas", texto: "Si eres trabajador, pide boletas o recibos electrónicos con tu DNI en ciertos gastos (alquiler, médicos, restaurantes): pueden darte una deducción adicional." }
      ]
    },
    {
      type: "choice",
      prompt: "¿En qué meses se presenta generalmente la declaración anual?",
      options: [
        { text: "Marzo y abril del año siguiente", icono: "🗓️" },
        { text: "Diciembre del mismo año", icono: "🎄" },
        { text: "Cuando el contribuyente quiera", icono: "🤷" }
      ],
      answer: 0,
      explain: "La SUNAT publica cada año un cronograma, normalmente entre marzo y abril."
    },
    {
      type: "choice",
      prompt: "¿Qué formulario usa un negocio para su declaración anual?",
      options: [{ text: "Formulario Virtual 710" }, { text: "Formulario 621" }, { text: "Formulario Virtual 709" }, { text: "Boleta de venta" }],
      answer: 0,
      explain: "710 para rentas de tercera categoría; 709 para personas naturales (trabajo y capital)."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🔬", nombre: "Sofía", texto: "Mi impuesto anual es S/ 14 750 y durante el año pagué S/ 3 000 a cuenta." },
      prompt: "¿Cuánto le falta pagar a Sofía?",
      options: [{ text: "S/ 11 750" }, { text: "S/ 17 750" }, { text: "S/ 14 750" }, { text: "S/ 0" }],
      answer: 0,
      explain: "S/ 14 750 − S/ 3 000 = S/ 11 750 de saldo por pagar."
    },
    {
      type: "choice",
      prompt: "Tu impuesto anual es S/ 2 000 y pagaste S/ 2 600 a cuenta. ¿Qué tienes?",
      options: [
        { text: "Un saldo a favor de S/ 600", icono: "💰" },
        { text: "Una deuda de S/ 600", icono: "💸" },
        { text: "Una multa", icono: "⚠️" }
      ],
      answer: 0,
      explain: "Pagaste de más: puedes pedir la devolución o aplicarlo a tus próximos pagos a cuenta."
    },
    {
      type: "tf",
      statement: "En el RMT y el Régimen General debo presentar la declaración anual del Impuesto a la Renta.",
      answer: true,
      explain: "Correcto. En el NRUS y el RER no se presenta."
    },
    {
      type: "match",
      prompt: "Une cada resultado con lo que puedes hacer",
      pairs: [
        ["Saldo por pagar", "Pagarlo al presentar la declaración"],
        ["Saldo a favor", "Pedir devolución o aplicarlo"]
      ],
      explain: "La declaración anual cierra las cuentas del año."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Impuesto del año menos pagos a ___ = saldo por pagar o a favor.",
      options: ["cuenta", "plazos", "proveedores", "trabajadores"],
      answer: 0,
      explain: "Restas lo que adelantaste mes a mes."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Presento", "mi", "declaración", "anual", "a", "tiempo"],
      extra: ["tarde", "nunca"],
      explain: "Presento mi declaración anual a tiempo."
    }
  ]
};

NAF.CONTENIDO.u7l5 = {
  ejercicios: [
    {
      type: "match",
      prompt: "Une cada persona con su categoría de renta",
      pairs: [
        ["Dueña de una bodega", "Tercera"],
        ["Contador con recibos por honorarios", "Cuarta"],
        ["Cajero en planilla", "Quinta"],
        ["Señor que alquila su cochera", "Primera"]
      ],
      explain: "Identificar tu categoría es el primer paso."
    },
    {
      type: "choice",
      prompt: "Ingresos de S/ 120 000 y gastos deducibles de S/ 90 000. ¿Cuál es la renta neta?",
      options: [{ text: "S/ 30 000" }, { text: "S/ 210 000" }, { text: "S/ 90 000" }, { text: "S/ 21 600" }],
      answer: 0,
      explain: "S/ 120 000 − S/ 90 000 = S/ 30 000."
    },
    {
      type: "tf",
      statement: "El almuerzo familiar del domingo es un gasto deducible de mi negocio.",
      answer: false,
      explain: "Falso. Es un gasto personal, no necesario para generar ingresos."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍💻", nombre: "Diego", texto: "Mi empresa está en el RMT. Este mes facturé S/ 30 000 sin IGV y no pasaré de 300 UIT en el año." },
      prompt: "¿Cuánto paga Diego a cuenta de renta este mes?",
      options: [{ text: "S/ 300" }, { text: "S/ 450" }, { text: "S/ 5 400" }, { text: "S/ 3 000" }],
      answer: 0,
      explain: "1 % × S/ 30 000 = S/ 300."
    },
    {
      type: "choice",
      prompt: "¿En qué régimen el 1,5 % mensual es el pago definitivo de la renta?",
      options: [
        { text: "RER", icono: "🏪" },
        { text: "Régimen General", icono: "🏢" },
        { text: "RMT", icono: "🏭" }
      ],
      answer: 0,
      explain: "En el RER no hay regularización anual."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Los negocios presentan su declaración anual con el Formulario Virtual ___.",
      options: ["710", "621", "709", "100"],
      answer: 0,
      explain: "710 para rentas de tercera categoría."
    },
    {
      type: "tf",
      statement: "Si mis pagos a cuenta superan mi impuesto anual, tengo un saldo a favor.",
      answer: true,
      explain: "Correcto. Puedes pedir la devolución o aplicarlo a pagos futuros."
    },
    {
      type: "choice",
      prompt: "Impuesto anual S/ 8 850 y pagos a cuenta S/ 6 000. ¿Qué resulta?",
      options: [
        { text: "Saldo por pagar de S/ 2 850", icono: "💸" },
        { text: "Saldo a favor de S/ 2 850", icono: "💰" },
        { text: "Saldo por pagar de S/ 14 850", icono: "📈" }
      ],
      answer: 0,
      explain: "S/ 8 850 − S/ 6 000 = S/ 2 850 por pagar."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["La", "renta", "neta", "es", "la", "ganancia", "del", "negocio"],
      extra: ["venta", "deuda"],
      explain: "La renta neta es la ganancia del negocio."
    },
    {
      type: "tf",
      statement: "Una multa de la SUNAT reduce mi renta neta porque es un gasto.",
      answer: false,
      explain: "Falso. Las multas no son deducibles."
    }
  ]
};
