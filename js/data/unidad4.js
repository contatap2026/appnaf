/* =========================================================
   UNIDAD 4 — Comprobantes de pago
   Boleta, factura, ticket, liquidación de compra, notas de
   crédito/débito, guía de remisión y recibo por honorarios.
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u4l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Boleta vs. factura",
      intro: "Un <b>comprobante de pago</b> es el documento que prueba una venta o un servicio. Los dos más usados son la boleta y la factura.",
      puntos: [
        { icono: "🧾", titulo: "Boleta de venta", texto: "Para <b>consumidores finales</b>: personas que compran para su propio uso. No da derecho a crédito fiscal (no permite descontar el IGV)." },
        { icono: "📄", titulo: "Factura", texto: "Para compradores con <b>RUC</b> que la necesitan para su negocio: sustentar gastos y usar el <b>crédito fiscal</b> del IGV. Muestra el IGV por separado." },
        { icono: "🪪", titulo: "Boletas de más de S/ 700", texto: "Debes consignar el nombre y el DNI del comprador." },
        { icono: "✋", titulo: "Entrégalo siempre", texto: "Debes entregar comprobante aunque el cliente no lo pida. No hacerlo es una infracción que puede generar multa o incluso el <b>cierre del local</b>." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es un comprobante de pago?",
      options: [
        { text: "El documento que prueba una venta o la prestación de un servicio", icono: "🧾" },
        { text: "Un permiso municipal para abrir un local", icono: "🏙️" },
        { text: "El contrato de un trabajador", icono: "📝" }
      ],
      answer: 0,
      explain: "Boletas, facturas, tickets y recibos por honorarios son comprobantes de pago."
    },
    {
      type: "choice",
      escena: { personaje: "🧑🏻‍💼", nombre: "Carlos", texto: "Tengo una empresa y compro útiles de oficina. Quiero usar el IGV de esta compra como crédito fiscal." },
      prompt: "¿Qué comprobante debe pedir Carlos?",
      options: [
        { text: "Factura", icono: "📄" },
        { text: "Boleta de venta", icono: "🧾" },
        { text: "Ninguno, basta con el voucher de la tarjeta", icono: "💳" }
      ],
      answer: 0,
      explain: "Para usar el crédito fiscal del IGV necesita una factura a nombre de su empresa (con su RUC)."
    },
    {
      type: "tf",
      statement: "La boleta de venta da derecho a usar el IGV como crédito fiscal.",
      answer: false,
      explain: "Falso. La boleta es para consumidores finales y no da derecho a crédito fiscal."
    },
    {
      type: "match",
      prompt: "Une cada comprobante con su comprador típico",
      pairs: [
        ["Boleta", "Consumidor final"],
        ["Factura", "Negocio con RUC"]
      ],
      explain: "La factura se usa entre negocios; la boleta, con consumidores finales."
    },
    {
      type: "choice",
      prompt: "Vendes un televisor a S/ 1 200 con boleta. ¿Qué datos del comprador debes consignar?",
      options: [
        { text: "Su nombre y su DNI", icono: "🪪" },
        { text: "Ninguno, las boletas nunca llevan datos", icono: "🙈" },
        { text: "Su Clave SOL", icono: "🔐" }
      ],
      answer: 0,
      explain: "En boletas por montos mayores a S/ 700 se identifica al comprador con nombre y DNI."
    },
    {
      type: "tf",
      statement: "Si el cliente no me pide comprobante, igual debo entregárselo.",
      answer: true,
      explain: "Correcto. Entregar comprobante es tu obligación, te lo pidan o no."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "No entregar comprobantes puede llevar a una multa o al ___ del local.",
      options: ["cierre", "premio", "alquiler", "sorteo"],
      answer: 0,
      explain: "Es una de las infracciones más comunes y puede sancionarse con el cierre temporal del establecimiento."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Siempre", "entrego", "comprobante", "de", "pago"],
      extra: ["nunca", "a veces"],
      explain: "Siempre entrego comprobante de pago."
    }
  ]
};

NAF.CONTENIDO.u4l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Tickets y otros comprobantes",
      intro: "Además de boletas y facturas, existen otros comprobantes para situaciones especiales.",
      puntos: [
        { icono: "🎟️", titulo: "Ticket", texto: "Lo emiten máquinas registradoras o sistemas autorizados. Puede reemplazar a la boleta; si consigna el <b>RUC del comprador</b> y el IGV por separado, sirve como factura." },
        { icono: "🌽", titulo: "Liquidación de compra", texto: "La emite el <b>comprador</b> cuando adquiere productos primarios (por ejemplo, a agricultores o pescadores artesanales) a personas que no tienen RUC." },
        { icono: "🪙", titulo: "Ventas de hasta S/ 5", texto: "No estás obligado a entregar comprobante, salvo que el cliente lo pida. Pero al final del día emites una boleta por el total de esas ventas y guardas una copia." },
        { icono: "🔢", titulo: "Serie y número", texto: "Todo comprobante tiene una serie y un número correlativo. En los electrónicos, las facturas empiezan con <b>F</b> y las boletas con <b>B</b>." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Quién emite la liquidación de compra?",
      options: [
        { text: "El comprador, al adquirir productos primarios a personas sin RUC", icono: "🌽" },
        { text: "El vendedor, a cualquier cliente", icono: "🏪" },
        { text: "La SUNAT, cada fin de mes", icono: "🏛️" }
      ],
      answer: 0,
      explain: "Es un caso especial: aquí el comprador emite el comprobante porque el productor no tiene RUC."
    },
    {
      type: "tf",
      statement: "Un ticket que consigna el RUC del comprador y el IGV por separado puede servir como factura.",
      answer: true,
      explain: "Correcto. En ese caso permite sustentar gasto y crédito fiscal."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🍳", nombre: "Rosa", texto: "En mi bodega vendo muchos caramelos y panes de menos de S/ 5 que nadie me pide con boleta." },
      prompt: "¿Qué debe hacer Rosa con esas ventas pequeñas?",
      options: [
        { text: "Al final del día, emitir una boleta por el total de esas ventas", icono: "🧾" },
        { text: "Nada, esas ventas no cuentan", icono: "🙈" },
        { text: "Emitir una factura a su propio nombre", icono: "📄" }
      ],
      answer: 0,
      explain: "Las ventas de hasta S/ 5 no requieren comprobante en el momento (si no lo piden), pero se resumen en una boleta al cierre del día."
    },
    {
      type: "match",
      prompt: "Une cada comprobante con su uso",
      pairs: [
        ["Ticket", "Máquina registradora o sistema autorizado"],
        ["Liquidación de compra", "Compra a productor sin RUC"],
        ["Factura", "Venta a negocio con RUC"],
        ["Boleta", "Venta a consumidor final"]
      ],
      explain: "Cada comprobante tiene su momento."
    },
    {
      type: "choice",
      prompt: "Una factura electrónica tiene la serie…",
      options: [{ text: "F001" }, { text: "B001" }, { text: "E001" }, { text: "Z999" }],
      answer: 0,
      explain: "Las facturas electrónicas empiezan con F; las boletas electrónicas, con B."
    },
    {
      type: "tf",
      statement: "Si un cliente me compra algo de S/ 3 y me pide boleta, puedo negarme porque es menos de S/ 5.",
      answer: false,
      explain: "Falso. Si el cliente lo pide, debes entregarle el comprobante."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Todo comprobante tiene una serie y un número ___.",
      options: ["correlativo", "secreto", "al azar", "repetido"],
      answer: 0,
      explain: "La numeración correlativa permite controlar todos los comprobantes emitidos."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Las", "boletas", "electrónicas", "empiezan", "con", "B"],
      extra: ["F", "nunca"],
      explain: "Las boletas electrónicas empiezan con B."
    }
  ]
};

NAF.CONTENIDO.u4l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Notas de crédito y débito",
      intro: "¿Te equivocaste en una factura o hubo un cambio después de la venta? Para eso existen las notas. <b>Nunca se borra un comprobante: se corrige con una nota.</b>",
      puntos: [
        { icono: "⬇️", titulo: "Nota de crédito", texto: "<b>Reduce o anula</b> el monto: devoluciones, descuentos, bonificaciones, anulaciones o errores." },
        { icono: "⬆️", titulo: "Nota de débito", texto: "<b>Aumenta</b> el monto: intereses por mora, penalidades u otros cargos adicionales." },
        { icono: "🔗", titulo: "Siempre referida a un comprobante", texto: "Se emite al <b>mismo cliente</b> e indica el comprobante original que modifica (serie y número)." }
      ]
    },
    {
      type: "choice",
      prompt: "Un cliente devuelve parte de la mercadería que te compró con factura. ¿Qué emites?",
      options: [
        { text: "Nota de crédito", icono: "⬇️" },
        { text: "Nota de débito", icono: "⬆️" },
        { text: "Una nueva factura por la devolución", icono: "📄" }
      ],
      answer: 0,
      explain: "Una devolución reduce el monto de la venta: corresponde nota de crédito."
    },
    {
      type: "choice",
      prompt: "Tu cliente pagó tarde y le cobras intereses por mora. ¿Qué emites?",
      options: [
        { text: "Nota de débito", icono: "⬆️" },
        { text: "Nota de crédito", icono: "⬇️" },
        { text: "Una boleta a tu nombre", icono: "🧾" }
      ],
      answer: 0,
      explain: "Los intereses aumentan el monto original: corresponde nota de débito."
    },
    {
      type: "match",
      prompt: "Une cada situación con la nota que corresponde",
      pairs: [
        ["Descuento posterior a la venta", "Nota de crédito"],
        ["Intereses por mora", "Nota de débito"]
      ],
      explain: "Crédito baja; débito sube."
    },
    {
      type: "tf",
      statement: "Si me equivoco en una factura, puedo romperla o borrarla y emitir otra con el mismo número.",
      answer: false,
      explain: "Falso. Los errores se corrigen con una nota de crédito que hace referencia al comprobante original."
    },
    {
      type: "tf",
      statement: "Una nota de crédito debe indicar la serie y el número del comprobante que modifica.",
      answer: true,
      explain: "Correcto. Así queda claro qué operación se está corrigiendo."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Le facturé S/ 1 000 a un cliente, pero el precio acordado era S/ 800." },
      prompt: "¿Cómo corrige Ana el error?",
      options: [
        { text: "Emite una nota de crédito por la diferencia", icono: "⬇️" },
        { text: "Emite una nota de débito por S/ 200", icono: "⬆️" },
        { text: "No hace nada; el cliente paga S/ 800 y listo", icono: "🤷" }
      ],
      answer: 0,
      explain: "El monto correcto es menor, así que reduce la factura con una nota de crédito."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "La nota de ___ aumenta el monto del comprobante original.",
      options: ["débito", "crédito", "remisión", "venta"],
      answer: 0,
      explain: "Débito = aumenta. Crédito = disminuye o anula."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Los", "errores", "se", "corrigen", "con", "notas"],
      extra: ["borrando", "tachando"],
      explain: "Los errores se corrigen con notas."
    }
  ]
};

NAF.CONTENIDO.u4l4 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Guía de remisión",
      intro: "La <b>guía de remisión</b> no es un comprobante de pago: es el documento que <b>sustenta el traslado de bienes</b> de un lugar a otro.",
      puntos: [
        { icono: "📦", titulo: "Guía remitente", texto: "La emite el <b>dueño de los bienes</b> (quien los envía): por venta, compra, consignación o traslado entre sus propios locales." },
        { icono: "🚚", titulo: "Guía transportista", texto: "La emite la <b>empresa de transporte</b> cuando presta el servicio de llevar la mercadería." },
        { icono: "🛣️", titulo: "Acompaña a los bienes", texto: "Debe estar disponible durante todo el traslado. Si te intervienen sin guía, puedes ser sancionado." },
        { icono: "💻", titulo: "Hoy es electrónica", texto: "La guía de remisión se emite principalmente de forma electrónica (GRE) desde los sistemas de la SUNAT." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Para qué sirve la guía de remisión?",
      options: [
        { text: "Para sustentar el traslado de bienes", icono: "🚚" },
        { text: "Para cobrar una venta", icono: "💰" },
        { text: "Para pagar el IGV", icono: "🏦" }
      ],
      answer: 0,
      explain: "Sustenta que los bienes que se trasladan tienen un origen y destino justificados."
    },
    {
      type: "tf",
      statement: "La guía de remisión es un comprobante de pago, igual que la factura.",
      answer: false,
      explain: "Falso. La guía de remisión sustenta traslados; no es un comprobante de pago."
    },
    {
      type: "match",
      prompt: "Une cada guía con quién la emite",
      pairs: [
        ["Guía remitente", "Dueño de los bienes"],
        ["Guía transportista", "Empresa de transporte"]
      ],
      explain: "Pueden emitirse ambas en un mismo traslado si interviene una empresa de transporte."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍💻", nombre: "Diego", texto: "Voy a llevar repuestos de mi almacén a mi tienda en mi propia camioneta. No es una venta." },
      prompt: "¿Necesita Diego guía de remisión?",
      options: [
        { text: "Sí, una guía remitente por traslado entre sus locales", icono: "📦" },
        { text: "No, porque no está vendiendo nada", icono: "🙅" },
        { text: "Solo si lleva más de 100 productos", icono: "🔢" }
      ],
      answer: 0,
      explain: "El traslado entre establecimientos de la misma empresa también debe sustentarse con guía de remisión."
    },
    {
      type: "tf",
      statement: "La guía de remisión debe estar disponible durante todo el traslado de los bienes.",
      answer: true,
      explain: "Correcto. Si te intervienen en el camino, debes poder mostrarla."
    },
    {
      type: "choice",
      prompt: "¿Qué motivos de traslado requieren guía de remisión?",
      options: [
        { text: "Venta, compra, consignación y traslado entre locales propios", icono: "✅" },
        { text: "Solo la venta", icono: "🛒" },
        { text: "Solo cuando el cliente la pide", icono: "🙋" },
        { text: "Ninguno, la guía es opcional", icono: "🚫" }
      ],
      answer: 0,
      explain: "Venta, compra, consignación y traslado entre locales propios son motivos de traslado que se sustentan con guía."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Hoy la guía de remisión se emite principalmente de forma ___.",
      options: ["electrónica", "verbal", "manuscrita en servilleta", "anual"],
      answer: 0,
      explain: "Es la Guía de Remisión Electrónica (GRE)."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["La", "guía", "acompaña", "a", "los", "bienes"],
      extra: ["paga", "impuestos"],
      explain: "La guía acompaña a los bienes."
    }
  ]
};

NAF.CONTENIDO.u4l5 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Recibo por honorarios",
      intro: "Si trabajas de forma <b>independiente</b> (profesional u oficio) y cobras por tus servicios, emites un <b>recibo por honorarios</b>.",
      puntos: [
        { icono: "👩‍💻", titulo: "¿Quiénes lo emiten?", texto: "Trabajadores independientes que generan <b>rentas de cuarta categoría</b>: diseñadores, contadores, gasfiteros, profesores particulares, etc." },
        { icono: "💻", titulo: "Electrónico", texto: "Se emite en línea con tu Clave SOL: es el <b>recibo por honorarios electrónico</b>." },
        { icono: "✂️", titulo: "Retención del 8 %", texto: "Si lo emites a una empresa (agente de retención) por más de <b>S/ 1 500</b>, te retienen el 8 % como adelanto de tu Impuesto a la Renta." },
        { icono: "🛑", titulo: "Suspensión de retenciones", texto: "Si estimas que tus ingresos del año no superarán el límite fijado por la SUNAT, puedes pedir la suspensión de retenciones." },
        { icono: "🚫", titulo: "Sin IGV", texto: "El recibo por honorarios de un independiente <b>no lleva IGV</b>." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Quién emite un recibo por honorarios?",
      options: [
        { text: "Un trabajador independiente que presta servicios", icono: "👩‍💻" },
        { text: "Una bodega que vende productos", icono: "🏪" },
        { text: "Un trabajador en planilla", icono: "👷" }
      ],
      answer: 0,
      explain: "El recibo por honorarios es para servicios prestados de forma independiente (cuarta categoría)."
    },
    {
      type: "tf",
      statement: "El recibo por honorarios de un trabajador independiente incluye IGV.",
      answer: false,
      explain: "Falso. Los servicios de cuarta categoría no están gravados con IGV."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍🎨", nombre: "Valeria", texto: "Soy diseñadora gráfica. Una empresa me contrató un logo por S/ 2 000 y le emitiré mi recibo por honorarios." },
      prompt: "¿Cuánto le retendrá la empresa a Valeria?",
      options: [{ text: "S/ 160 (8 %)" }, { text: "S/ 360 (18 %)" }, { text: "Nada" }, { text: "S/ 30 (1,5 %)" }],
      answer: 0,
      explain: "Es más de S/ 1 500 y la empresa es agente de retención: 8 % × S/ 2 000 = S/ 160. Recibirá S/ 1 840."
    },
    {
      type: "choice",
      prompt: "Emites un recibo por honorarios de S/ 1 000 a una empresa. ¿Te retienen el 8 %?",
      options: [
        { text: "No, porque no supera S/ 1 500", icono: "✅" },
        { text: "Sí, siempre se retiene", icono: "✂️" },
        { text: "Sí, pero el 18 %", icono: "📊" }
      ],
      answer: 0,
      explain: "La retención del 8 % aplica cuando el recibo supera S/ 1 500."
    },
    {
      type: "match",
      prompt: "Une cada concepto",
      pairs: [
        ["Recibo por honorarios", "Servicios independientes"],
        ["Retención", "8 % si supera S/ 1 500"],
        ["Cuarta categoría", "Renta del trabajo independiente"],
        ["Suspensión de retenciones", "Si tus ingresos no superan el límite"]
      ],
      explain: "Conceptos clave del trabajador independiente."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "El recibo por honorarios electrónico se emite con mi ___.",
      options: ["Clave SOL", "DNI físico", "libreta militar", "pasaporte"],
      answer: 0,
      explain: "Se emite desde SUNAT Operaciones en Línea."
    },
    {
      type: "tf",
      statement: "La retención del 8 % es un adelanto de mi Impuesto a la Renta.",
      answer: true,
      explain: "Correcto. Lo retenido se descuenta al calcular tu impuesto anual."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Como", "independiente", "emito", "recibos", "por", "honorarios"],
      extra: ["facturas", "nunca"],
      explain: "Como independiente, emito recibos por honorarios."
    }
  ]
};

NAF.CONTENIDO.u4l6 = {
  ejercicios: [
    {
      type: "match",
      prompt: "Une cada documento con su función",
      pairs: [
        ["Factura", "Permite crédito fiscal"],
        ["Nota de crédito", "Reduce o anula"],
        ["Guía de remisión", "Sustenta el traslado"],
        ["Recibo por honorarios", "Servicio independiente"]
      ],
      explain: "Cada documento cumple un rol distinto."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🍳", nombre: "Luis", texto: "Una empresa almuerza en mi restaurante y me pide comprobante para usar el IGV." },
      prompt: "¿Qué comprobante debe entregar Luis?",
      options: [
        { text: "Factura a nombre de la empresa", icono: "📄" },
        { text: "Boleta de venta", icono: "🧾" },
        { text: "Recibo por honorarios", icono: "👩‍💻" }
      ],
      answer: 0,
      explain: "Para usar el crédito fiscal, la empresa necesita factura con su RUC."
    },
    {
      type: "tf",
      statement: "En el NRUS puedo entregar facturas si el cliente insiste.",
      answer: false,
      explain: "Falso. En el NRUS solo se emiten boletas y tickets (lo viste en la Unidad 3)."
    },
    {
      type: "choice",
      prompt: "Le otorgaste un descuento a un cliente después de facturar. ¿Qué emites?",
      options: [
        { text: "Nota de crédito", icono: "⬇️" },
        { text: "Nota de débito", icono: "⬆️" },
        { text: "Guía de remisión", icono: "🚚" }
      ],
      answer: 0,
      explain: "Un descuento posterior reduce el monto: nota de crédito."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "En una boleta de más de S/ 700 debo consignar el nombre y el ___ del comprador.",
      options: ["DNI", "sueldo", "correo", "RUC del vendedor"],
      answer: 0,
      explain: "Nombre y DNI del adquirente."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estos NO es un comprobante de pago?",
      options: [
        { text: "Guía de remisión", icono: "🚚" },
        { text: "Factura", icono: "📄" },
        { text: "Boleta de venta", icono: "🧾" },
        { text: "Recibo por honorarios", icono: "👩‍💻" }
      ],
      answer: 0,
      explain: "La guía de remisión sustenta traslados de bienes; no es comprobante de pago."
    },
    {
      type: "tf",
      statement: "Si emito un recibo por honorarios de S/ 3 000 a una empresa, me retienen S/ 240.",
      answer: true,
      explain: "Correcto: 8 % × S/ 3 000 = S/ 240."
    },
    {
      type: "choice",
      prompt: "¿Qué letra inicia la serie de una boleta electrónica?",
      options: [{ text: "B" }, { text: "F" }, { text: "E" }, { text: "R" }],
      answer: 0,
      explain: "Boleta electrónica: serie B. Factura electrónica: serie F."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Sin", "comprobante", "no", "hay", "venta", "formal"],
      extra: ["siempre", "multa"],
      explain: "Sin comprobante no hay venta formal."
    },
    {
      type: "tf",
      statement: "No entregar comprobantes de pago es una infracción que puede sancionarse con el cierre del local.",
      answer: true,
      explain: "Correcto. Es una de las infracciones que más fiscaliza la SUNAT."
    }
  ]
};
