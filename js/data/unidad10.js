/* =========================================================
   UNIDAD 10 — Tus trabajadores
   Planilla electrónica (T-Registro y PLAME), EsSalud,
   ONP/AFP y prestadores de servicios de cuarta categoría.
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u10l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Planilla electrónica",
      intro: "Cuando contratas a un trabajador dependiente, debes registrarlo en la <b>Planilla Electrónica</b>. Tiene dos partes:",
      puntos: [
        { icono: "🗂️", titulo: "T-Registro", texto: "Registro de tus trabajadores: datos personales, tipo de contrato, régimen de salud y de pensiones. Se registra el <b>alta desde el inicio</b> de la relación laboral, y luego la baja cuando termina." },
        { icono: "📆", titulo: "PLAME", texto: "<b>Planilla Mensual de Pagos</b>: cada mes declaras sueldos, aportes y retenciones con el <b>Formulario Virtual 601</b>, según el cronograma." },
        { icono: "🧾", titulo: "Boleta de pago", texto: "Entrega a cada trabajador su boleta de pago, con el detalle de su sueldo y descuentos." },
        { icono: "⚖️", titulo: "SUNAT y SUNAFIL", texto: "La SUNAT recibe la planilla y los aportes; la <b>SUNAFIL</b> fiscaliza el cumplimiento de las normas laborales." }
      ]
    },
    {
      type: "match",
      prompt: "Une cada parte de la planilla con su función",
      pairs: [
        ["T-Registro", "Registro de los trabajadores"],
        ["PLAME", "Declaración mensual de pagos"],
        ["Boleta de pago", "Detalle del sueldo para el trabajador"]
      ],
      explain: "T-Registro + PLAME = Planilla Electrónica."
    },
    {
      type: "choice",
      prompt: "¿Con qué formulario declaras la PLAME?",
      options: [{ text: "Formulario Virtual 601" }, { text: "Formulario Virtual 621" }, { text: "Formulario Virtual 710" }, { text: "Formulario 1611" }],
      answer: 0,
      explain: "601 es la PLAME. 621 es el IGV-Renta mensual y 710 la renta anual."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🍳", nombre: "Luis", texto: "Contraté a un ayudante de cocina que empieza el lunes." },
      prompt: "¿Cuándo debe registrarlo Luis en el T-Registro?",
      options: [
        { text: "Desde el inicio de la relación laboral", icono: "🗂️" },
        { text: "Cuando cumpla un año trabajando", icono: "🎂" },
        { text: "Solo si el trabajador lo pide", icono: "🙋" }
      ],
      answer: 0,
      explain: "El alta en el T-Registro se hace desde el ingreso del trabajador."
    },
    {
      type: "tf",
      statement: "La SUNAFIL es la entidad que fiscaliza el cumplimiento de las normas laborales.",
      answer: true,
      explain: "Correcto. La SUNAT administra los aportes y la planilla; la SUNAFIL inspecciona lo laboral."
    },
    {
      type: "tf",
      statement: "Si mi trabajador es mi sobrino, no necesito registrarlo en la planilla.",
      answer: false,
      explain: "Falso. Si existe una relación laboral (horario, sueldo, subordinación), debe estar en planilla, sea o no familiar."
    },
    {
      type: "choice",
      prompt: "¿Qué debes entregar a tu trabajador cada vez que le pagas?",
      options: [
        { text: "Su boleta de pago", icono: "🧾" },
        { text: "Una factura", icono: "📄" },
        { text: "Un recibo por honorarios", icono: "👩‍💻" }
      ],
      answer: 0,
      explain: "La boleta de pago detalla remuneración, aportes y descuentos."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "La PLAME se declara cada ___ según el cronograma.",
      options: ["mes", "año", "década", "semana"],
      answer: 0,
      explain: "PLAME = Planilla Mensual de Pagos."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Registro", "a", "mi", "trabajador", "desde", "el", "primer", "día"],
      extra: ["nunca", "año"],
      explain: "Registro a mi trabajador desde el primer día."
    }
  ]
};

NAF.CONTENIDO.u10l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "EsSalud y pensiones",
      intro: "Por cada trabajador hay aportes de <b>salud</b> y de <b>pensiones</b>. Algunos los paga el empleador y otros se descuentan al trabajador.",
      puntos: [
        { icono: "🩺", titulo: "EsSalud: 9 %", texto: "Lo paga el <b>empleador</b>, sobre la remuneración del trabajador. Es una contribución que recauda la SUNAT." },
        { icono: "👵", titulo: "Pensiones: ONP o AFP", texto: "El trabajador elige. <b>ONP: 13 %</b>. <b>AFP: 10 %</b> más comisión y seguro. Se <b>descuenta al trabajador</b> y el empleador lo paga." },
        { icono: "🏦", titulo: "¿Dónde se paga?", texto: "EsSalud y ONP se declaran en la PLAME y se pagan a la SUNAT. Los aportes a la AFP se pagan a la AFP (por AFPnet)." },
        { icono: "🏭", titulo: "Microempresas en el REMYPE", texto: "Bajo el régimen laboral especial, los trabajadores de una microempresa pueden afiliarse al SIS en lugar de EsSalud." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Quién paga el aporte a EsSalud?",
      options: [
        { text: "El empleador", icono: "🏢" },
        { text: "El trabajador", icono: "👷" },
        { text: "La SUNAT", icono: "🏛️" }
      ],
      answer: 0,
      explain: "EsSalud (9 %) es un costo del empleador; no se descuenta al trabajador."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Mi asistente gana S/ 2 000 al mes." },
      prompt: "¿Cuánto paga Ana a EsSalud por su asistente?",
      options: [{ text: "S/ 180" }, { text: "S/ 260" }, { text: "S/ 200" }, { text: "S/ 360" }],
      answer: 0,
      explain: "9 % × S/ 2 000 = S/ 180."
    },
    {
      type: "choice",
      prompt: "El asistente de Ana está en la ONP. ¿Cuánto se le descuenta de su sueldo de S/ 2 000?",
      options: [{ text: "S/ 260" }, { text: "S/ 180" }, { text: "S/ 200" }, { text: "Nada" }],
      answer: 0,
      explain: "13 % × S/ 2 000 = S/ 260. Recibe S/ 1 740 (si no tiene otros descuentos)."
    },
    {
      type: "match",
      prompt: "Une cada aporte con quién lo asume",
      pairs: [
        ["EsSalud 9 %", "Empleador"],
        ["ONP 13 %", "Trabajador (se le descuenta)"],
        ["AFP 10 % + comisión", "Trabajador (se le descuenta)"]
      ],
      explain: "Las pensiones se descuentan al trabajador; la salud la paga el empleador."
    },
    {
      type: "tf",
      statement: "El trabajador puede elegir entre la ONP y una AFP.",
      answer: true,
      explain: "Correcto. Es su decisión."
    },
    {
      type: "tf",
      statement: "Los aportes a una AFP se pagan a la SUNAT junto con la PLAME.",
      answer: false,
      explain: "Falso. EsSalud y ONP van a la SUNAT; los aportes a la AFP se pagan a la AFP (AFPnet)."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "El empleador ___ el aporte de pensiones del sueldo del trabajador y luego lo paga.",
      options: ["retiene", "regala", "duplica", "olvida"],
      answer: 0,
      explain: "El empleador actúa como agente de retención."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["EsSalud", "es", "el", "9", "%", "y", "lo", "paga", "el", "empleador"],
      extra: ["trabajador", "13"],
      explain: "EsSalud es el 9 % y lo paga el empleador."
    }
  ]
};

NAF.CONTENIDO.u10l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Prestadores de servicios",
      intro: "No todos los que trabajan para tu negocio son trabajadores en planilla. Un <b>prestador de servicios independiente</b> te emite recibo por honorarios.",
      puntos: [
        { icono: "🤝", titulo: "Independiente", texto: "Presta un servicio puntual, con autonomía: un contador externo, un diseñador, un técnico que arregla tu máquina." },
        { icono: "✂️", titulo: "Retención del 8 %", texto: "Si eres agente de retención y el recibo supera S/ 1 500, le retienes el 8 % y lo pagas a la SUNAT (Unidad 4)." },
        { icono: "📆", titulo: "Se declara en la PLAME", texto: "Los recibos por honorarios y las retenciones de cuarta categoría también se declaran en la PLAME." },
        { icono: "🚩", titulo: "¡Ojo con disfrazar!", texto: "Si la persona tiene horario, recibe órdenes y trabaja de forma permanente, es un <b>trabajador dependiente</b> aunque emita recibos. La SUNAFIL puede exigir que esté en planilla." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Quién es un prestador de servicios independiente?",
      options: [
        { text: "Un contador externo que te hace la contabilidad por encargo", icono: "🧮" },
        { text: "Tu cajero, con horario fijo y que recibe tus órdenes", icono: "🕘" },
        { text: "Tu vendedor de tienda a tiempo completo", icono: "🏪" }
      ],
      answer: 0,
      explain: "El independiente trabaja con autonomía y emite recibo por honorarios."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍💻", nombre: "Diego", texto: "Contraté a un técnico para reparar mis computadoras. Me emitió un recibo por S/ 2 500." },
      prompt: "Si la empresa de Diego es agente de retención, ¿cuánto le retiene?",
      options: [{ text: "S/ 200" }, { text: "S/ 450" }, { text: "S/ 325" }, { text: "Nada" }],
      answer: 0,
      explain: "Supera S/ 1 500: 8 % × S/ 2 500 = S/ 200."
    },
    {
      type: "tf",
      statement: "Si alguien trabaja para mí con horario fijo, recibe mis órdenes y trabaja todos los días, puede ser considerado trabajador dependiente aunque emita recibos por honorarios.",
      answer: true,
      explain: "Correcto. Lo que importa es la realidad de la relación, no el documento."
    },
    {
      type: "match",
      prompt: "¿Planilla o recibo por honorarios?",
      pairs: [
        ["Cajera con horario fijo", "Planilla"],
        ["Diseñador que hace un logo", "Recibo por honorarios"],
        ["Cocinero de tiempo completo", "Planilla"],
        ["Abogado que revisa un contrato", "Recibo por honorarios"]
      ],
      explain: "Subordinación y horario → planilla. Servicio puntual y autónomo → recibo por honorarios."
    },
    {
      type: "tf",
      statement: "A un prestador de servicios independiente le debo pagar EsSalud.",
      answer: false,
      explain: "Falso. EsSalud se paga por los trabajadores en planilla, no por los independientes."
    },
    {
      type: "choice",
      prompt: "¿Dónde declaras las retenciones de cuarta categoría que hiciste?",
      options: [
        { text: "En la PLAME (Formulario Virtual 601)", icono: "📆" },
        { text: "En la declaración anual 710", icono: "🗓️" },
        { text: "No se declaran", icono: "🙈" }
      ],
      answer: 0,
      explain: "La PLAME incluye a los prestadores de servicios de cuarta categoría."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "La ___ puede exigir que un trabajador disfrazado de independiente esté en planilla.",
      options: ["SUNAFIL", "SUNARP", "RENIEC", "municipalidad"],
      answer: 0,
      explain: "La SUNAFIL fiscaliza las relaciones laborales."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Con", "horario", "y", "órdenes", "va", "en", "planilla"],
      extra: ["recibo", "nunca"],
      explain: "Con horario y órdenes, va en planilla."
    }
  ]
};

NAF.CONTENIDO.u10l4 = {
  ejercicios: [
    {
      type: "match",
      prompt: "Une cada término con su significado",
      pairs: [
        ["T-Registro", "Registro de trabajadores"],
        ["PLAME", "Planilla mensual de pagos"],
        ["EsSalud", "9 % a cargo del empleador"],
        ["ONP", "13 % descontado al trabajador"]
      ],
      explain: "Repaso de la planilla y los aportes."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🍳", nombre: "Rosa", texto: "Contraté a una ayudante en mi bodega por S/ 1 500 al mes. Ella eligió la ONP." },
      prompt: "¿Cuánto paga Rosa a EsSalud y cuánto se descuenta a su ayudante para la ONP?",
      options: [
        { text: "EsSalud S/ 135 · ONP S/ 195" },
        { text: "EsSalud S/ 195 · ONP S/ 135" },
        { text: "EsSalud S/ 150 · ONP S/ 150" },
        { text: "No paga nada" }
      ],
      answer: 0,
      explain: "9 % × 1 500 = S/ 135 (empleador). 13 % × 1 500 = S/ 195 (se descuenta a la trabajadora)."
    },
    {
      type: "tf",
      statement: "Los aportes a EsSalud se descuentan del sueldo del trabajador.",
      answer: false,
      explain: "Falso. EsSalud lo paga el empleador."
    },
    {
      type: "choice",
      prompt: "¿Qué formulario usas para declarar la planilla del mes?",
      options: [{ text: "601 (PLAME)" }, { text: "621" }, { text: "710" }, { text: "709" }],
      answer: 0,
      explain: "Formulario Virtual 601 - PLAME."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Al trabajador le entrego su ___ de pago cada vez que le pago.",
      options: ["boleta", "factura", "guía", "nota"],
      answer: 0,
      explain: "La boleta de pago detalla su remuneración y descuentos."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estos debería estar en planilla?",
      options: [
        { text: "Un vendedor que trabaja de lunes a sábado con horario fijo", icono: "🏪" },
        { text: "Un fotógrafo contratado para una sola sesión", icono: "📸" },
        { text: "Un abogado que revisó un contrato una vez", icono: "⚖️" }
      ],
      answer: 0,
      explain: "Horario fijo, subordinación y permanencia indican una relación laboral."
    },
    {
      type: "tf",
      statement: "Si un prestador me emite un recibo por honorarios de S/ 1 200, no le retengo el 8 %.",
      answer: true,
      explain: "Correcto. La retención aplica cuando el recibo supera S/ 1 500."
    },
    {
      type: "choice",
      prompt: "¿A dónde se pagan los aportes de un trabajador afiliado a una AFP?",
      options: [
        { text: "A la AFP, por AFPnet", icono: "🏦" },
        { text: "A la SUNAT con el 621", icono: "🏛️" },
        { text: "A la municipalidad", icono: "🏙️" }
      ],
      answer: 0,
      explain: "EsSalud y ONP van a la SUNAT; la AFP se paga directamente a la AFP."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Mis", "trabajadores", "están", "en", "la", "planilla", "electrónica"],
      extra: ["ocultos", "nunca"],
      explain: "Mis trabajadores están en la planilla electrónica."
    },
    {
      type: "tf",
      statement: "La SUNAT recauda los aportes a EsSalud.",
      answer: true,
      explain: "Correcto. Es una contribución que administra la SUNAT (Unidad 1)."
    }
  ]
};
