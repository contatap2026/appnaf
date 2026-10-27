/* =========================================================
   UNIDAD 6 — El IGV sin miedo
   Qué grava el IGV, débito fiscal, crédito fiscal y cálculo
   del IGV a pagar del mes.
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u6l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "¿Qué grava el IGV?",
      intro: "El <b>Impuesto General a las Ventas</b> es un impuesto al consumo. Lo paga el consumidor final dentro del precio, y los negocios lo <b>cobran y lo entregan</b> a la SUNAT.",
      puntos: [
        { icono: "🛍️", titulo: "¿Qué operaciones grava?", texto: "Venta de bienes en el país, servicios prestados o utilizados en el país, contratos de construcción, primera venta de inmuebles por el constructor e importaciones." },
        { icono: "➗", titulo: "Tasa: 18 %", texto: "Está compuesta por <b>16 % de IGV</b> + <b>2 % de Impuesto de Promoción Municipal (IPM)</b>." },
        { icono: "🥔", titulo: "Hay excepciones", texto: "Algunos bienes y servicios están exonerados o inafectos, como ciertos productos agrícolas frescos. Las exportaciones tampoco pagan IGV." },
        { icono: "🛒", titulo: "¿Y en el NRUS?", texto: "En el NRUS no declaras IGV aparte: está incluido en tu cuota. En RER, RMT y Régimen General sí lo declaras cada mes." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Cuál es la tasa total del IGV?",
      options: [{ text: "18 %" }, { text: "16 %" }, { text: "10 %" }, { text: "29,5 %" }],
      answer: 0,
      explain: "18 % en total: 16 % de IGV + 2 % de IPM."
    },
    {
      type: "match",
      prompt: "Une cada parte de la tasa del 18 %",
      pairs: [
        ["16 %", "Impuesto General a las Ventas"],
        ["2 %", "Impuesto de Promoción Municipal"]
      ],
      explain: "Juntos suman el 18 % que ves en tus comprobantes."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estas operaciones está gravada con IGV?",
      options: [
        { text: "Vender zapatillas en una tienda de Lima", icono: "👟" },
        { text: "Exportar café a Alemania", icono: "☕" },
        { text: "Recibir tu sueldo de planilla", icono: "💵" }
      ],
      answer: 0,
      explain: "La venta de bienes en el país está gravada. Las exportaciones no pagan IGV y el sueldo no es una venta."
    },
    {
      type: "tf",
      statement: "Quien realmente soporta el IGV es el consumidor final, porque está incluido en el precio.",
      answer: true,
      explain: "Correcto. El negocio actúa como recaudador: cobra el IGV en sus ventas y lo entrega a la SUNAT."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🍳", nombre: "Rosa", texto: "Estoy en el NRUS. ¿Tengo que declarar el IGV cada mes?" },
      prompt: "¿Qué le responderías a Rosa?",
      options: [
        { text: "No por separado: el IGV está incluido en tu cuota del NRUS", icono: "🛒" },
        { text: "Sí, debes pagar el 18 % de tus ventas además de la cuota", icono: "➗" },
        { text: "Solo si vende más de S/ 100 al día", icono: "🔢" }
      ],
      answer: 0,
      explain: "La cuota del NRUS reemplaza al IGV y al Impuesto a la Renta (Unidad 3)."
    },
    {
      type: "tf",
      statement: "Las exportaciones están gravadas con IGV.",
      answer: false,
      explain: "Falso. Las exportaciones no pagan IGV, para que los productos peruanos compitan mejor en el exterior."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "El IGV es un impuesto al ___.",
      options: ["consumo", "patrimonio", "sueldo", "ahorro"],
      answer: 0,
      explain: "Grava el consumo de bienes y servicios."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["El", "IGV", "es", "16", "%", "más", "2", "%", "de", "IPM"],
      extra: ["18", "menos"],
      explain: "El IGV es 16 % más 2 % de IPM."
    }
  ]
};

NAF.CONTENIDO.u6l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Débito fiscal",
      intro: "El <b>débito fiscal</b> es el IGV que <b>cobras en tus ventas</b>. Ese dinero no es tuyo: lo cobras para entregarlo a la SUNAT.",
      puntos: [
        { icono: "📤", titulo: "¿Cómo se calcula?", texto: "Valor de venta × 18 %. Ejemplo: vendes S/ 1 000 sin IGV → débito fiscal S/ 180." },
        { icono: "🏷️", titulo: "Si el precio ya incluye IGV", texto: "Divide entre <b>1,18</b> para obtener el valor de venta. Ejemplo: S/ 118 ÷ 1,18 = S/ 100 de valor y S/ 18 de IGV." },
        { icono: "🧾", titulo: "Va en tus comprobantes", texto: "Sale de tus facturas, boletas y tickets de venta del mes, que anotas en tu Registro de Ventas." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es el débito fiscal?",
      options: [
        { text: "El IGV que cobras en tus ventas", icono: "📤" },
        { text: "El IGV que pagas en tus compras", icono: "📥" },
        { text: "Una deuda con el banco", icono: "🏦" }
      ],
      answer: 0,
      explain: "Débito fiscal = IGV de las ventas."
    },
    {
      type: "choice",
      prompt: "Vendes mercadería por S/ 5 000 (sin IGV). ¿Cuál es tu débito fiscal?",
      options: [{ text: "S/ 900" }, { text: "S/ 800" }, { text: "S/ 5 900" }, { text: "S/ 100" }],
      answer: 0,
      explain: "18 % × S/ 5 000 = S/ 900."
    },
    {
      type: "choice",
      prompt: "Un producto cuesta S/ 590 con IGV incluido. ¿Cuál es su valor de venta?",
      options: [{ text: "S/ 500" }, { text: "S/ 483,80" }, { text: "S/ 590" }, { text: "S/ 472" }],
      answer: 0,
      explain: "S/ 590 ÷ 1,18 = S/ 500. El IGV es S/ 90."
    },
    {
      type: "tf",
      statement: "El IGV que cobro en mis ventas es dinero de mi negocio que puedo gastar libremente.",
      answer: false,
      explain: "Falso. Lo cobras por cuenta del Estado y debes entregarlo a la SUNAT. ¡Sepáralo!"
    },
    {
      type: "match",
      prompt: "Une cada precio con IGV con su IGV",
      pairs: [
        ["S/ 118", "S/ 18"],
        ["S/ 236", "S/ 36"],
        ["S/ 1 180", "S/ 180"]
      ],
      explain: "Precio con IGV ÷ 1,18 = valor de venta; la diferencia es el IGV."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🔧", nombre: "Juan", texto: "Este mes facturé en mi ferretería S/ 20 000 sin IGV." },
      prompt: "¿Cuál es el débito fiscal de Juan?",
      options: [{ text: "S/ 3 600" }, { text: "S/ 3 200" }, { text: "S/ 300" }, { text: "S/ 23 600" }],
      answer: 0,
      explain: "18 % × S/ 20 000 = S/ 3 600."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Para sacar el valor de venta de un precio con IGV, lo divido entre ___.",
      options: ["1,18", "18", "0,18", "100"],
      answer: 0,
      explain: "Precio con IGV ÷ 1,18 = valor de venta."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["El", "débito", "fiscal", "es", "el", "IGV", "de", "mis", "ventas"],
      extra: ["compras", "sueldos"],
      explain: "El débito fiscal es el IGV de mis ventas."
    }
  ]
};

NAF.CONTENIDO.u6l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Crédito fiscal",
      intro: "El <b>crédito fiscal</b> es el IGV que <b>pagaste en tus compras</b> para el negocio. Puedes descontarlo del IGV de tus ventas.",
      puntos: [
        { icono: "📄", titulo: "Con comprobante válido", texto: "Debe estar en una <b>factura</b> (u otro comprobante que lo permita) a nombre de tu RUC, con el IGV por separado." },
        { icono: "🏪", titulo: "Relacionado con tu negocio", texto: "La compra debe ser necesaria para tu actividad. El televisor para tu casa no cuenta." },
        { icono: "📒", titulo: "Anotado en el Registro de Compras", texto: "La factura debe registrarse en tu Registro de Compras." },
        { icono: "🏦", titulo: "Bancarización", texto: "Si pagas S/ 2 000 o más (o US$ 500), usa un medio de pago bancario (transferencia, depósito, tarjeta). Si pagas en efectivo, puedes perder el crédito fiscal." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es el crédito fiscal?",
      options: [
        { text: "El IGV pagado en compras del negocio que puedes descontar", icono: "📥" },
        { text: "Un préstamo que da la SUNAT", icono: "💳" },
        { text: "El IGV que cobras a tus clientes", icono: "📤" }
      ],
      answer: 0,
      explain: "Crédito fiscal = IGV de las compras, que se resta del débito fiscal."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Compré insumos para mi catering y me dieron boleta con mi DNI." },
      prompt: "¿Puede Ana usar el IGV de esa compra como crédito fiscal?",
      options: [
        { text: "No, necesitaba una factura a nombre de su RUC", icono: "📄" },
        { text: "Sí, cualquier comprobante sirve", icono: "🧾" },
        { text: "Sí, si guarda la boleta en un cajón", icono: "🗄️" }
      ],
      answer: 0,
      explain: "La boleta no da derecho a crédito fiscal (Unidad 4)."
    },
    {
      type: "tf",
      statement: "El IGV de un televisor que compré para mi casa puede ser crédito fiscal de mi negocio.",
      answer: false,
      explain: "Falso. Solo cuentan las compras relacionadas con tu actividad."
    },
    {
      type: "match",
      prompt: "Une cada requisito del crédito fiscal",
      pairs: [
        ["Comprobante", "Factura a nombre de tu RUC"],
        ["Destino", "Compra para el negocio"],
        ["Registro", "Anotado en el Registro de Compras"],
        ["Pago de S/ 2 000 o más", "Usar medio de pago bancario"]
      ],
      explain: "Cumple todos los requisitos para no perder tu crédito fiscal."
    },
    {
      type: "choice",
      prompt: "Compras mercadería por S/ 3 000 (sin IGV) con factura. ¿Cuál es tu crédito fiscal?",
      options: [{ text: "S/ 540" }, { text: "S/ 480" }, { text: "S/ 3 540" }, { text: "S/ 45" }],
      answer: 0,
      explain: "18 % × S/ 3 000 = S/ 540."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍💻", nombre: "Diego", texto: "Le compré repuestos a un proveedor por S/ 5 900 y le pagué todo en efectivo." },
      prompt: "¿Qué riesgo corre Diego?",
      options: [
        { text: "Perder el crédito fiscal por no usar un medio de pago bancario", icono: "🏦" },
        { text: "Ninguno, el efectivo siempre es mejor", icono: "💵" },
        { text: "Que la factura se convierta en boleta", icono: "🔄" }
      ],
      answer: 0,
      explain: "Por montos de S/ 2 000 o más se debe usar medios de pago (bancarización) para no perder el crédito fiscal."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Las facturas de compras se anotan en el Registro de ___.",
      options: ["Compras", "Ventas", "Planillas", "Visitas"],
      answer: 0,
      explain: "Las compras van al Registro de Compras; las ventas, al Registro de Ventas."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Pido", "factura", "para", "usar", "el", "crédito", "fiscal"],
      extra: ["boleta", "perder"],
      explain: "Pido factura para usar el crédito fiscal."
    }
  ]
};

NAF.CONTENIDO.u6l4 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Calcula tu IGV del mes",
      intro: "La fórmula es sencilla: <b>IGV a pagar = débito fiscal − crédito fiscal</b>.",
      puntos: [
        { icono: "🧮", titulo: "Ejemplo", texto: "Ventas S/ 10 000 → débito S/ 1 800. Compras S/ 6 000 → crédito S/ 1 080. <b>IGV a pagar: S/ 720.</b>" },
        { icono: "🔁", titulo: "Saldo a favor", texto: "Si el crédito es mayor que el débito, no pagas IGV ese mes: la diferencia es un <b>saldo a favor</b> que usas los meses siguientes." },
        { icono: "📅", titulo: "Cada mes", texto: "Se declara y paga mensualmente, según el cronograma por el último dígito de tu RUC (lo verás en la Unidad 8)." },
        { icono: "⏳", titulo: "IGV Justo", texto: "Las MYPE con ventas anuales de hasta 1 700 UIT pueden acogerse al IGV Justo y postergar el pago del IGV hasta tres meses." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Cómo se calcula el IGV a pagar del mes?",
      options: [
        { text: "Débito fiscal − crédito fiscal" },
        { text: "Débito fiscal + crédito fiscal" },
        { text: "18 % de las compras" },
        { text: "Ventas − compras" }
      ],
      answer: 0,
      explain: "IGV de las ventas menos IGV de las compras."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🍳", nombre: "Luis", texto: "Este mes: ventas S/ 15 000 y compras S/ 9 000, ambos sin IGV y con facturas en regla." },
      prompt: "¿Cuánto IGV paga Luis?",
      options: [{ text: "S/ 1 080" }, { text: "S/ 2 700" }, { text: "S/ 1 620" }, { text: "S/ 6 000" }],
      answer: 0,
      explain: "Débito: 18 % × 15 000 = 2 700. Crédito: 18 % × 9 000 = 1 620. IGV a pagar: 2 700 − 1 620 = S/ 1 080."
    },
    {
      type: "match",
      prompt: "Completa el cálculo de este mes: ventas S/ 8 000 y compras S/ 5 000 (sin IGV)",
      pairs: [
        ["Débito fiscal", "S/ 1 440"],
        ["Crédito fiscal", "S/ 900"],
        ["IGV a pagar", "S/ 540"]
      ],
      explain: "1 440 − 900 = 540."
    },
    {
      type: "choice",
      prompt: "Un mes tu débito fiscal es S/ 900 y tu crédito fiscal S/ 1 200. ¿Qué pasa?",
      options: [
        { text: "No pagas IGV y tienes S/ 300 de saldo a favor", icono: "🔁" },
        { text: "La SUNAT te devuelve S/ 300 en efectivo de inmediato", icono: "💵" },
        { text: "Pagas S/ 2 100", icono: "💸" }
      ],
      answer: 0,
      explain: "El saldo a favor se aplica contra el IGV de los meses siguientes."
    },
    {
      type: "tf",
      statement: "Si mi crédito fiscal es mayor que mi débito fiscal, ese mes no pago IGV.",
      answer: true,
      explain: "Correcto. La diferencia queda como saldo a favor."
    },
    {
      type: "tf",
      statement: "El IGV se declara una sola vez al año.",
      answer: false,
      explain: "Falso. El IGV se declara y paga cada mes."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Con el IGV ___, una MYPE puede postergar el pago del IGV hasta tres meses.",
      options: ["Justo", "Doble", "Anual", "Cero"],
      answer: 0,
      explain: "El IGV Justo es un beneficio para micro y pequeñas empresas."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["IGV", "a", "pagar", "es", "débito", "menos", "crédito"],
      extra: ["más", "ventas"],
      explain: "IGV a pagar es débito menos crédito."
    }
  ]
};

NAF.CONTENIDO.u6l5 = {
  ejercicios: [
    {
      type: "match",
      prompt: "Une cada concepto con su definición",
      pairs: [
        ["Débito fiscal", "IGV de las ventas"],
        ["Crédito fiscal", "IGV de las compras"],
        ["Saldo a favor", "Crédito mayor que débito"],
        ["IPM", "2 % del 18 %"]
      ],
      explain: "Los conceptos clave del IGV."
    },
    {
      type: "choice",
      prompt: "Un producto se vende a S/ 354 con IGV. ¿Cuánto es el IGV?",
      options: [{ text: "S/ 54" }, { text: "S/ 63,72" }, { text: "S/ 300" }, { text: "S/ 35,40" }],
      answer: 0,
      explain: "S/ 354 ÷ 1,18 = S/ 300 de valor de venta; IGV = S/ 54."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🔬", nombre: "Sofía", texto: "Mi laboratorio vendió S/ 40 000 y compró S/ 25 000 este mes, todo sin IGV y con facturas válidas." },
      prompt: "¿Cuánto IGV paga Sofía?",
      options: [{ text: "S/ 2 700" }, { text: "S/ 7 200" }, { text: "S/ 4 500" }, { text: "S/ 15 000" }],
      answer: 0,
      explain: "Débito 7 200 − crédito 4 500 = S/ 2 700."
    },
    {
      type: "tf",
      statement: "Una compra pagada con boleta de venta me da derecho a crédito fiscal.",
      answer: false,
      explain: "Falso. Necesitas factura (u otro comprobante que lo permita) a nombre de tu RUC."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estas operaciones NO paga IGV?",
      options: [
        { text: "Exportar textiles a Estados Unidos", icono: "🚢" },
        { text: "Vender ropa en Gamarra", icono: "👕" },
        { text: "Prestar un servicio de reparación en Arequipa", icono: "🔧" }
      ],
      answer: 0,
      explain: "Las exportaciones no están gravadas con IGV."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Si pago S/ 2 000 o más, uso un medio de pago ___ para no perder el crédito fiscal.",
      options: ["bancario", "en efectivo", "en especie", "verbal"],
      answer: 0,
      explain: "Es la bancarización: transferencias, depósitos, tarjetas, etc."
    },
    {
      type: "tf",
      statement: "El IGV que cobro a mis clientes debo separarlo, porque le pertenece al Estado.",
      answer: true,
      explain: "Correcto. Separarlo te evita problemas al momento de pagar."
    },
    {
      type: "choice",
      prompt: "¿En qué régimen NO declaras el IGV por separado?",
      options: [
        { text: "NRUS", icono: "🛒" },
        { text: "RER", icono: "🏪" },
        { text: "RMT", icono: "🏭" },
        { text: "Régimen General", icono: "🏢" }
      ],
      answer: 0,
      explain: "En el NRUS el IGV está incluido en la cuota."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Separo", "el", "IGV", "que", "cobro", "cada", "mes"],
      extra: ["gasto", "nunca"],
      explain: "Separo el IGV que cobro cada mes."
    },
    {
      type: "choice",
      prompt: "Débito fiscal S/ 2 000, crédito fiscal S/ 1 400 y saldo a favor del mes anterior S/ 200. ¿Cuánto pagas?",
      options: [{ text: "S/ 400" }, { text: "S/ 600" }, { text: "S/ 800" }, { text: "S/ 0" }],
      answer: 0,
      explain: "2 000 − 1 400 = 600; menos el saldo a favor de 200 = S/ 400."
    }
  ]
};
