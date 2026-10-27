/* =========================================================
   UNIDAD 8 — Declara y paga
   Cronograma de vencimientos, Declara Fácil y formularios,
   pago con NPS y fraccionamiento.
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u8l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "El cronograma y tu último dígito",
      intro: "Cada año la SUNAT publica un <b>cronograma de vencimientos</b>. Te dice hasta qué día puedes declarar y pagar las obligaciones de cada mes.",
      puntos: [
        { icono: "🔢", titulo: "Según tu último dígito", texto: "Tu fecha depende del <b>último dígito de tu RUC</b> (0 al 9). Así no todos declaran el mismo día." },
        { icono: "📅", titulo: "Se declara el mes siguiente", texto: "Lo de enero (el <b>periodo</b> enero) se declara y paga en febrero, en la fecha que te toca." },
        { icono: "0️⃣", titulo: "Aunque no vendas", texto: "Si estás en RER, RMT o Régimen General, debes presentar tu declaración mensual <b>aunque no hayas tenido ventas</b> (declaración en cero)." },
        { icono: "⏰", titulo: "Si te pasas de la fecha", texto: "Declarar tarde es una infracción con multa, y pagar tarde genera <b>intereses moratorios</b> cada día." }
      ]
    },
    {
      type: "choice",
      prompt: "¿De qué depende tu fecha de vencimiento mensual?",
      options: [
        { text: "Del último dígito de tu RUC", icono: "🔢" },
        { text: "De tu fecha de cumpleaños", icono: "🎂" },
        { text: "Del día en que abriste tu negocio", icono: "🏪" }
      ],
      answer: 0,
      explain: "El cronograma asigna una fecha a cada último dígito del RUC."
    },
    {
      type: "choice",
      escena: { personaje: "🧑🏻‍💼", nombre: "Carlos", texto: "Mi RUC es 10457812361." },
      prompt: "¿Qué dígito debe buscar Carlos en el cronograma?",
      options: [{ text: "1" }, { text: "10" }, { text: "4" }, { text: "6" }],
      answer: 0,
      explain: "Se usa el último dígito del RUC: 1."
    },
    {
      type: "tf",
      statement: "Las ventas de marzo se declaran en el mes de abril.",
      answer: true,
      explain: "Correcto. El periodo marzo se declara al mes siguiente, según el cronograma."
    },
    {
      type: "tf",
      statement: "Si estoy en el RMT y este mes no vendí nada, no necesito presentar declaración.",
      answer: false,
      explain: "Falso. Debes presentar la declaración en cero; no hacerlo es una infracción."
    },
    {
      type: "match",
      prompt: "Une cada término con su significado",
      pairs: [
        ["Periodo", "Mes que declaras"],
        ["Vencimiento", "Fecha límite para declarar y pagar"],
        ["Cronograma", "Calendario anual de la SUNAT"],
        ["Declaración en cero", "Declarar aunque no hubo ventas"]
      ],
      explain: "Vocabulario básico para cumplir a tiempo."
    },
    {
      type: "choice",
      prompt: "¿Qué pasa si pagas tus impuestos después del vencimiento?",
      options: [
        { text: "Se generan intereses moratorios", icono: "📈" },
        { text: "Te hacen un descuento", icono: "🎁" },
        { text: "Nada, no hay consecuencias", icono: "🤷" }
      ],
      answer: 0,
      explain: "La deuda pagada fuera de plazo genera intereses moratorios diarios."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Reviso el ___ de la SUNAT para no pasarme de la fecha.",
      options: ["cronograma", "horóscopo", "periódico", "menú"],
      answer: 0,
      explain: "El cronograma de obligaciones mensuales se publica cada año."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Declaro", "según", "el", "último", "dígito", "de", "mi", "RUC"],
      extra: ["primer", "DNI"],
      explain: "Declaro según el último dígito de mi RUC."
    }
  ]
};

NAF.CONTENIDO.u8l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Declara Fácil y formularios",
      intro: "La declaración mensual se presenta por internet con tu Clave SOL. Las herramientas dependen de tu régimen.",
      puntos: [
        { icono: "🖥️", titulo: "Formulario Virtual 621", texto: "Con <b>Declara Fácil 621</b> declaras el IGV y la Renta del mes (RER, RMT y Régimen General). Muchas veces la información de tus comprobantes electrónicos ya aparece precargada." },
        { icono: "🛒", titulo: "NRUS", texto: "Pagas tu cuota mensual con la guía de pago del NRUS (Formulario 1611) o por internet." },
        { icono: "📩", titulo: "Constancia", texto: "Al terminar, recibes una <b>constancia de presentación</b>. Guárdala." },
        { icono: "✏️", titulo: "¿Te equivocaste?", texto: "Antes del vencimiento presentas una declaración <b>sustitutoria</b>; después del vencimiento, una <b>rectificatoria</b>." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Con qué formulario declaras el IGV y la Renta mensual si estás en el RMT?",
      options: [{ text: "Formulario Virtual 621" }, { text: "Formulario Virtual 710" }, { text: "Formulario 1611" }, { text: "Formulario 709" }],
      answer: 0,
      explain: "621 para el IGV-Renta mensual. 710 es la declaración anual de negocios y 1611 es para el NRUS."
    },
    {
      type: "match",
      prompt: "Une cada formulario con su uso",
      pairs: [
        ["621", "IGV y Renta mensual"],
        ["710", "Renta anual de negocios"],
        ["1611", "Cuota del NRUS"]
      ],
      explain: "Cada formulario tiene su momento."
    },
    {
      type: "tf",
      statement: "Para presentar Declara Fácil necesito mi Clave SOL.",
      answer: true,
      explain: "Correcto. Se presenta en SUNAT Operaciones en Línea."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Presenté mi declaración del mes y luego vi que olvidé una factura. El vencimiento todavía no llega." },
      prompt: "¿Qué debe presentar Ana?",
      options: [
        { text: "Una declaración sustitutoria", icono: "🔄" },
        { text: "Una declaración rectificatoria", icono: "✏️" },
        { text: "Nada, se corrige sola", icono: "🪄" }
      ],
      answer: 0,
      explain: "Antes del vencimiento se presenta una sustitutoria; después, una rectificatoria."
    },
    {
      type: "tf",
      statement: "Si corrijo mi declaración después del vencimiento, presento una declaración rectificatoria.",
      answer: true,
      explain: "Correcto."
    },
    {
      type: "choice",
      prompt: "¿Qué documento prueba que presentaste tu declaración?",
      options: [
        { text: "La constancia de presentación", icono: "📩" },
        { text: "Una foto de la pantalla del celular", icono: "📸" },
        { text: "El recibo de luz", icono: "💡" }
      ],
      answer: 0,
      explain: "La SUNAT emite una constancia; guárdala en tus archivos."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "En Declara Fácil, mis comprobantes electrónicos pueden aparecer ___.",
      options: ["precargados", "borrados", "duplicados", "en papel"],
      answer: 0,
      explain: "La información precargada facilita la declaración, pero igual debes revisarla."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Guardo", "la", "constancia", "de", "presentación"],
      extra: ["boto", "nunca"],
      explain: "Guardo la constancia de presentación."
    }
  ]
};

NAF.CONTENIDO.u8l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Paga con NPS",
      intro: "Declarar y pagar son dos cosas distintas: después de declarar, <b>debes pagar</b> lo que resultó.",
      puntos: [
        { icono: "💳", titulo: "Al declarar", texto: "Puedes pagar en el mismo momento con tarjeta o con cargo en tu cuenta bancaria." },
        { icono: "🔢", titulo: "Número de Pago SUNAT (NPS)", texto: "Generas un código en SUNAT Operaciones en Línea o en la app, y con él pagas en el banco, en agentes o en la banca por internet." },
        { icono: "⏳", titulo: "Tiene vigencia", texto: "El NPS vence: si no lo usas a tiempo, generas uno nuevo." },
        { icono: "🧾", titulo: "Guarda tu voucher", texto: "Conserva la constancia del pago y verifica que el monto y el periodo sean correctos." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es el NPS?",
      options: [
        { text: "Un número para pagar tus tributos en bancos o por internet", icono: "🔢" },
        { text: "Un tipo de comprobante de pago", icono: "🧾" },
        { text: "Un régimen tributario", icono: "🧭" }
      ],
      answer: 0,
      explain: "NPS = Número de Pago SUNAT."
    },
    {
      type: "tf",
      statement: "Presentar la declaración es lo mismo que pagar el impuesto.",
      answer: false,
      explain: "Falso. Puedes declarar y no pagar; en ese caso queda una deuda que genera intereses."
    },
    {
      type: "choice",
      prompt: "¿Dónde puedes pagar con un NPS?",
      options: [
        { text: "En bancos, agentes y banca por internet", icono: "🏦" },
        { text: "Solo en las oficinas de la municipalidad", icono: "🏙️" },
        { text: "Pagándole en efectivo a un trabajador de la SUNAT", icono: "💵" }
      ],
      answer: 0,
      explain: "El NPS se paga por los canales del sistema financiero. Nunca le entregues dinero en efectivo a nadie a nombre de la SUNAT."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍💻", nombre: "Diego", texto: "Generé mi NPS hace días y cuando quise pagar en la app del banco me dice que no es válido." },
      prompt: "¿Qué debe hacer Diego?",
      options: [
        { text: "Generar un NPS nuevo, porque el anterior venció", icono: "🔄" },
        { text: "No pagar, porque el sistema falló", icono: "🙈" },
        { text: "Cambiar de régimen", icono: "🧭" }
      ],
      answer: 0,
      explain: "El NPS tiene vigencia; si venció, se genera otro."
    },
    {
      type: "match",
      prompt: "Une cada acción con su resultado",
      pairs: [
        ["Declarar", "Informas cuánto debes"],
        ["Pagar", "Cancelas la deuda"],
        ["Pagar tarde", "Se generan intereses"]
      ],
      explain: "Cumplir es declarar y pagar a tiempo."
    },
    {
      type: "tf",
      statement: "Debo guardar la constancia de mis pagos a la SUNAT.",
      answer: true,
      explain: "Correcto. Te sirve como prueba si hay alguna diferencia."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "NPS significa Número de ___ SUNAT.",
      options: ["Pago", "Persona", "Planilla", "Préstamo"],
      answer: 0,
      explain: "Número de Pago SUNAT."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Primero", "declaro", "y", "luego", "pago"],
      extra: ["nunca", "olvido"],
      explain: "Primero declaro y luego pago."
    }
  ]
};

NAF.CONTENIDO.u8l4 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "¿No llegas? Fraccionamiento",
      intro: "Si tienes una deuda tributaria que no puedes pagar de golpe, puedes solicitar un <b>fraccionamiento</b>: pagarla en cuotas mensuales.",
      puntos: [
        { icono: "🧩", titulo: "Aplazamiento y/o fraccionamiento", texto: "Está previsto en el Código Tributario. Se solicita por SUNAT Operaciones en Línea con tu Clave SOL, cumpliendo los requisitos." },
        { icono: "📈", titulo: "Tiene intereses", texto: "Las cuotas incluyen un interés. Aun así, es mejor que dejar crecer la deuda." },
        { icono: "⚠️", titulo: "No te atrases", texto: "Si dejas de pagar dos cuotas consecutivas (o la última), pierdes el fraccionamiento y toda la deuda se vuelve exigible." },
        { icono: "🏦", titulo: "Si no haces nada", texto: "La SUNAT puede iniciar la <b>cobranza coactiva</b>: por ejemplo, embargar tus cuentas bancarias." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es el fraccionamiento?",
      options: [
        { text: "Pagar una deuda tributaria en cuotas mensuales", icono: "🧩" },
        { text: "Dividir tu negocio en dos RUC", icono: "✂️" },
        { text: "Que la SUNAT perdone tu deuda", icono: "🙏" }
      ],
      answer: 0,
      explain: "La deuda no desaparece: se paga en partes, con intereses."
    },
    {
      type: "tf",
      statement: "El fraccionamiento hace que la deuda desaparezca.",
      answer: false,
      explain: "Falso. Solo te permite pagarla en cuotas."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🍳", nombre: "Luis", texto: "Tuve un mal año en el restaurante y debo S/ 6 000 de IGV. No puedo pagarlo todo junto." },
      prompt: "¿Qué le recomendarías a Luis?",
      options: [
        { text: "Solicitar un fraccionamiento con su Clave SOL", icono: "🧩" },
        { text: "Ignorar la deuda hasta que la SUNAT se olvide", icono: "🙈" },
        { text: "Cerrar su RUC para que la deuda se borre", icono: "🔴" }
      ],
      answer: 0,
      explain: "El fraccionamiento le permite ordenarse. Ignorar la deuda puede terminar en cobranza coactiva."
    },
    {
      type: "match",
      prompt: "Une cada situación con su consecuencia",
      pairs: [
        ["Pago mis cuotas a tiempo", "Mantengo el fraccionamiento"],
        ["Dejo de pagar dos cuotas seguidas", "Pierdo el fraccionamiento"],
        ["No pago ni pido ayuda", "Cobranza coactiva"]
      ],
      explain: "La puntualidad en las cuotas es clave."
    },
    {
      type: "choice",
      prompt: "¿Qué puede hacer la SUNAT en una cobranza coactiva?",
      options: [
        { text: "Embargar tus cuentas bancarias", icono: "🏦" },
        { text: "Regalarte un fraccionamiento automático", icono: "🎁" },
        { text: "Cambiarte de régimen", icono: "🧭" }
      ],
      answer: 0,
      explain: "La cobranza coactiva permite medidas como el embargo para cobrar la deuda."
    },
    {
      type: "tf",
      statement: "Las cuotas de un fraccionamiento incluyen intereses.",
      answer: true,
      explain: "Correcto. Por eso conviene pagar a tiempo siempre que se pueda."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Si no pago dos cuotas ___, pierdo el fraccionamiento.",
      options: ["consecutivas", "pequeñas", "anuales", "electrónicas"],
      answer: 0,
      explain: "También se pierde si no pagas la última cuota."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Si", "no", "llego", "pido", "un", "fraccionamiento"],
      extra: ["escondo", "deuda"],
      explain: "Si no llego, pido un fraccionamiento."
    }
  ]
};

NAF.CONTENIDO.u8l5 = {
  ejercicios: [
    {
      type: "choice",
      prompt: "Tu RUC termina en 7. ¿Qué haces cada mes?",
      options: [
        { text: "Busco la fecha del dígito 7 en el cronograma y declaro y pago a más tardar ese día", icono: "📅" },
        { text: "Declaro el día 7 de cada mes", icono: "7️⃣" },
        { text: "Declaro una vez al año", icono: "🗓️" }
      ],
      answer: 0,
      explain: "El último dígito te indica tu fecha en el cronograma; no es el día del mes."
    },
    {
      type: "match",
      prompt: "Une cada término con su significado",
      pairs: [
        ["NPS", "Número para pagar"],
        ["621", "Declaración mensual"],
        ["Rectificatoria", "Corrección después del vencimiento"],
        ["Fraccionamiento", "Pago en cuotas"]
      ],
      explain: "Repaso de la unidad."
    },
    {
      type: "tf",
      statement: "Si no tuve ventas en el mes y estoy en el Régimen General, igual debo declarar.",
      answer: true,
      explain: "Correcto: declaración en cero."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🍳", nombre: "Rosa", texto: "Estoy en el NRUS. ¿Uso el formulario 621?" },
      prompt: "¿Qué le respondes a Rosa?",
      options: [
        { text: "No, en el NRUS pagas tu cuota con la guía del NRUS (1611) o por internet", icono: "🛒" },
        { text: "Sí, igual que todos los regímenes", icono: "🖥️" },
        { text: "No declara nada nunca", icono: "🙅" }
      ],
      answer: 0,
      explain: "El 621 es para RER, RMT y Régimen General."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Pagar después del vencimiento genera intereses ___.",
      options: ["moratorios", "bancarios", "de regalo", "negativos"],
      answer: 0,
      explain: "Los intereses moratorios se calculan por cada día de atraso."
    },
    {
      type: "choice",
      prompt: "Las ventas del periodo octubre se declaran en…",
      options: [{ text: "Noviembre" }, { text: "Octubre" }, { text: "Diciembre" }, { text: "Enero del año siguiente" }],
      answer: 0,
      explain: "Se declara al mes siguiente, según el cronograma."
    },
    {
      type: "tf",
      statement: "Si la SUNAT inicia una cobranza coactiva, puede embargar mis cuentas.",
      answer: true,
      explain: "Correcto. Por eso es mejor pagar a tiempo o fraccionar."
    },
    {
      type: "choice",
      prompt: "Tu NPS venció antes de que pagaras. ¿Qué haces?",
      options: [
        { text: "Genero un nuevo NPS", icono: "🔄" },
        { text: "Doy por pagado el impuesto", icono: "✅" },
        { text: "Pago en efectivo a un tercero", icono: "💵" }
      ],
      answer: 0,
      explain: "Solo tienes que generar uno nuevo."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Declaro", "y", "pago", "antes", "del", "vencimiento"],
      extra: ["después", "nunca"],
      explain: "Declaro y pago antes del vencimiento."
    },
    {
      type: "tf",
      statement: "Corregir una declaración antes del vencimiento se hace con una declaración sustitutoria.",
      answer: true,
      explain: "Correcto. Después del vencimiento, sería rectificatoria."
    }
  ]
};
