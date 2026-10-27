/* =========================================================
   UNIDAD 3 — Elige tu régimen tributario
   NRUS, RER, Régimen MYPE Tributario y Régimen General.
   Los montos y tasas son los vigentes según la normativa
   SUNAT conocida; revisarlos si la ley cambia.
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u3l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Nuevo RUS (NRUS)",
      intro: "El <b>Nuevo Régimen Único Simplificado</b> es el régimen más sencillo. Está pensado para pequeños negocios de <b>personas naturales</b>, como bodegas o puestos de mercado.",
      puntos: [
        { icono: "🧑🏽", titulo: "¿Quiénes?", texto: "Solo personas naturales (y sucesiones indivisas). Las empresas no pueden acogerse." },
        { icono: "📏", titulo: "Límite", texto: "Ingresos y compras de hasta <b>S/ 96 000 al año</b> (o S/ 8 000 en un mes)." },
        { icono: "🪙", titulo: "Una cuota fija", texto: "Categoría 1: hasta S/ 5 000 al mes → <b>S/ 20</b>. Categoría 2: hasta S/ 8 000 al mes → <b>S/ 50</b>. Esa cuota reemplaza al IGV y al Impuesto a la Renta." },
        { icono: "🧾", titulo: "Solo boletas y tickets", texto: "En el NRUS <b>no puedes emitir facturas</b>. Tampoco llevas libros contables." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Quiénes pueden acogerse al NRUS?",
      options: [
        { text: "Personas naturales con un pequeño negocio", icono: "🧑🏽" },
        { text: "Cualquier empresa S.A.C.", icono: "🏢" },
        { text: "Solo grandes importadores", icono: "🚢" }
      ],
      answer: 0,
      explain: "El NRUS es solo para personas naturales y sucesiones indivisas, no para empresas."
    },
    {
      type: "choice",
      prompt: "¿Cuál es el límite anual de ingresos (y de compras) en el NRUS?",
      options: [{ text: "S/ 96 000" }, { text: "S/ 525 000" }, { text: "S/ 30 000" }, { text: "Sin límite" }],
      answer: 0,
      explain: "S/ 96 000 al año o S/ 8 000 en un mes. S/ 525 000 es el límite del RER."
    },
    {
      type: "match",
      prompt: "Une cada categoría del NRUS con su cuota mensual",
      pairs: [
        ["Categoría 1 (hasta S/ 5 000)", "S/ 20"],
        ["Categoría 2 (hasta S/ 8 000)", "S/ 50"]
      ],
      explain: "La categoría depende de tus ingresos o compras del mes."
    },
    {
      type: "tf",
      statement: "En el NRUS puedo emitir facturas a mis clientes.",
      answer: false,
      explain: "Falso. En el NRUS solo se emiten boletas de venta y tickets. Si tus clientes te piden factura, debes cambiarte de régimen."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🍳", nombre: "Rosa", texto: "Mi bodega vende unos S/ 4 000 al mes y compro unos S/ 3 500 en mercadería." },
      prompt: "Si Rosa está en el NRUS, ¿cuánto paga al mes?",
      options: [
        { text: "S/ 20 (Categoría 1)", icono: "🪙" },
        { text: "S/ 50 (Categoría 2)", icono: "💰" },
        { text: "18 % de sus ventas", icono: "📊" }
      ],
      answer: 0,
      explain: "Sus ingresos y compras no pasan de S/ 5 000 en el mes: es Categoría 1, cuota de S/ 20."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "En el NRUS, una sola ___ mensual reemplaza al IGV y al Impuesto a la Renta.",
      options: ["cuota", "factura", "multa", "planilla"],
      answer: 0,
      explain: "Por eso es el régimen más simple: pagas una cuota fija según tu categoría."
    },
    {
      type: "tf",
      statement: "En el NRUS no estoy obligado a llevar libros contables.",
      answer: true,
      explain: "Correcto. Es una de sus ventajas, aunque igual conviene guardar tus comprobantes."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["En", "el", "NRUS", "emito", "boletas", "y", "tickets"],
      extra: ["facturas", "libros"],
      explain: "En el NRUS emito boletas y tickets."
    }
  ]
};

NAF.CONTENIDO.u3l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Régimen Especial (RER)",
      intro: "El <b>Régimen Especial del Impuesto a la Renta</b> es para negocios pequeños que necesitan emitir <b>facturas</b>.",
      puntos: [
        { icono: "🏪", titulo: "¿Quiénes?", texto: "Personas naturales <b>y</b> empresas (personas jurídicas)." },
        { icono: "📏", titulo: "Límite", texto: "Ingresos netos y compras de hasta <b>S/ 525 000 al año</b>. También hay límites de activos y de trabajadores." },
        { icono: "📊", titulo: "¿Cuánto pagas?", texto: "Renta: <b>1,5 %</b> de tus ingresos netos de cada mes. Además pagas el <b>IGV</b> mensual." },
        { icono: "📒", titulo: "Libros", texto: "Llevas el <b>Registro de Compras</b> y el <b>Registro de Ventas e Ingresos</b>." },
        { icono: "🗓️", titulo: "Sin declaración anual", texto: "Tus pagos mensuales de renta son definitivos: no presentas declaración anual del Impuesto a la Renta." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Cuánto pagas de Impuesto a la Renta en el RER?",
      options: [
        { text: "1,5 % de tus ingresos netos mensuales", icono: "📊" },
        { text: "Una cuota fija de S/ 20", icono: "🪙" },
        { text: "29,5 % de tus ingresos", icono: "📈" }
      ],
      answer: 0,
      explain: "En el RER la renta es el 1,5 % de los ingresos netos de cada mes."
    },
    {
      type: "tf",
      statement: "En el RER puedo emitir facturas.",
      answer: true,
      explain: "Correcto. A diferencia del NRUS, en el RER puedes emitir facturas, boletas y otros comprobantes."
    },
    {
      type: "choice",
      prompt: "¿Cuál es el límite anual de ingresos netos en el RER?",
      options: [{ text: "S/ 525 000" }, { text: "S/ 96 000" }, { text: "1 700 UIT" }, { text: "Sin límite" }],
      answer: 0,
      explain: "S/ 525 000 al año. 1 700 UIT es el límite del Régimen MYPE Tributario."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🔧", nombre: "Juan", texto: "Tengo una ferretería en el RER. Este mes vendí S/ 20 000 (sin IGV)." },
      prompt: "¿Cuánto paga Juan de Impuesto a la Renta este mes?",
      options: [{ text: "S/ 300" }, { text: "S/ 3 600" }, { text: "S/ 50" }, { text: "S/ 200" }],
      answer: 0,
      explain: "1,5 % × S/ 20 000 = S/ 300. Aparte, declara y paga el IGV del mes."
    },
    {
      type: "match",
      prompt: "Une cada característica del RER",
      pairs: [
        ["Renta mensual", "1,5 % de ingresos netos"],
        ["Límite anual", "S/ 525 000"],
        ["Libros", "Registro de Compras y Ventas"],
        ["Comprobantes", "Facturas y boletas"]
      ],
      explain: "Así funciona el Régimen Especial."
    },
    {
      type: "tf",
      statement: "En el RER no pago IGV porque ya pago el 1,5 % de renta.",
      answer: false,
      explain: "Falso. En el RER pagas las dos cosas: el 1,5 % de renta y el IGV del mes."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "En el RER no presento declaración ___ del Impuesto a la Renta.",
      options: ["anual", "mensual", "de IGV", "de compras"],
      answer: 0,
      explain: "Los pagos mensuales del RER son definitivos; sí presentas declaraciones mensuales."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["El", "RER", "permite", "personas", "naturales", "y", "empresas"],
      extra: ["solo", "prohíbe"],
      explain: "El RER permite personas naturales y empresas."
    }
  ]
};

NAF.CONTENIDO.u3l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Régimen MYPE Tributario (RMT)",
      intro: "El <b>RMT</b> está pensado para micro y pequeñas empresas que crecen. El impuesto se calcula sobre tu <b>ganancia</b> (renta neta), no solo sobre tus ventas.",
      puntos: [
        { icono: "🏭", titulo: "¿Quiénes?", texto: "Personas naturales y empresas con ingresos netos de hasta <b>1 700 UIT</b> al año." },
        { icono: "📆", titulo: "Pagos a cuenta mensuales", texto: "Si tus ingresos del año no superan 300 UIT, pagas el <b>1 %</b> de tus ingresos netos del mes." },
        { icono: "🗓️", titulo: "Declaración anual", texto: "Al cierre del año calculas el impuesto sobre tu ganancia: <b>10 %</b> hasta 15 UIT y <b>29,5 %</b> por el exceso. Lo pagado a cuenta se descuenta." },
        { icono: "➕", titulo: "Además, IGV", texto: "Como en el RER y el Régimen General, declaras y pagas el IGV cada mes." },
        { icono: "📐", titulo: "¿Qué es la UIT?", texto: "La <b>Unidad Impositiva Tributaria</b> es un valor de referencia en soles que el Estado actualiza cada año." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Cuál es el límite de ingresos netos anuales del RMT?",
      options: [{ text: "1 700 UIT" }, { text: "S/ 96 000" }, { text: "S/ 525 000" }, { text: "Sin límite" }],
      answer: 0,
      explain: "El RMT admite ingresos netos de hasta 1 700 UIT al año."
    },
    {
      type: "choice",
      prompt: "¿Qué es la UIT?",
      options: [
        { text: "Un valor de referencia en soles que se actualiza cada año", icono: "📐" },
        { text: "Un impuesto a las importaciones", icono: "🚢" },
        { text: "Un tipo de comprobante de pago", icono: "🧾" }
      ],
      answer: 0,
      explain: "La UIT se usa para fijar límites, multas y tramos de impuestos."
    },
    {
      type: "tf",
      statement: "En el RMT, si mis ingresos anuales no superan 300 UIT, mi pago a cuenta mensual es el 1 % de mis ingresos netos.",
      answer: true,
      explain: "Correcto. Si los superas, se usa un coeficiente o el 1,5 %."
    },
    {
      type: "match",
      prompt: "Une cada tramo de ganancia anual con su tasa en el RMT",
      pairs: [
        ["Hasta 15 UIT", "10 %"],
        ["Más de 15 UIT", "29,5 %"]
      ],
      explain: "Las ganancias más pequeñas pagan una tasa menor."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Mi empresa de catering está en el RMT. Este mes facturé S/ 30 000 sin IGV, y en el año no pasaré de 300 UIT." },
      prompt: "¿Cuánto es su pago a cuenta de renta del mes?",
      options: [{ text: "S/ 300" }, { text: "S/ 450" }, { text: "S/ 5 400" }, { text: "S/ 50" }],
      answer: 0,
      explain: "1 % × S/ 30 000 = S/ 300. A fin de año, en la declaración anual, se descuenta lo ya pagado."
    },
    {
      type: "tf",
      statement: "En el RMT presento una declaración anual del Impuesto a la Renta.",
      answer: true,
      explain: "Sí. Los pagos mensuales son «a cuenta»: el impuesto final se calcula sobre la ganancia del año."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "En el RMT, el impuesto anual se calcula sobre la ___ del negocio.",
      options: ["ganancia", "deuda", "planilla", "cuota fija"],
      answer: 0,
      explain: "Ganancia o renta neta: ingresos menos gastos que la ley permite deducir."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Los", "pagos", "a", "cuenta", "se", "descuentan", "al", "final"],
      extra: ["nunca", "duplican"],
      explain: "Los pagos a cuenta se descuentan al final."
    }
  ]
};

NAF.CONTENIDO.u3l4 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Régimen General",
      intro: "El <b>Régimen General</b> no tiene límites: cualquier negocio puede estar aquí, desde una persona natural hasta una gran empresa.",
      puntos: [
        { icono: "🏢", titulo: "Sin límites", texto: "No hay tope de ingresos, compras, activos ni trabajadores." },
        { icono: "📈", titulo: "Renta anual", texto: "Pagas <b>29,5 %</b> sobre tu ganancia (renta neta) del año." },
        { icono: "📆", titulo: "Pagos a cuenta", texto: "Cada mes adelantas renta: un coeficiente o el <b>1,5 %</b> de tus ingresos netos." },
        { icono: "📚", titulo: "Contabilidad", texto: "Llevas libros según tu nivel de ingresos; a más ingresos, contabilidad más completa." },
        { icono: "➕", titulo: "Además, IGV", texto: "Declaras y pagas el IGV mensual (18 %)." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Cuál es el límite de ingresos en el Régimen General?",
      options: [{ text: "No tiene límite" }, { text: "S/ 525 000" }, { text: "1 700 UIT" }, { text: "S/ 96 000" }],
      answer: 0,
      explain: "El Régimen General no tiene topes: es el régimen «para todos»."
    },
    {
      type: "choice",
      prompt: "¿Qué tasa de Impuesto a la Renta anual se paga en el Régimen General?",
      options: [{ text: "29,5 % de la ganancia" }, { text: "1,5 % de las ventas" }, { text: "Cuota fija de S/ 50" }, { text: "10 % de las ventas" }],
      answer: 0,
      explain: "29,5 % sobre la renta neta (ganancia) del ejercicio."
    },
    {
      type: "tf",
      statement: "En el Régimen General hago pagos a cuenta mensuales y una declaración anual.",
      answer: true,
      explain: "Correcto. Los pagos a cuenta se descuentan del impuesto anual."
    },
    {
      type: "choice",
      escena: { personaje: "🧑🏻‍💼", nombre: "Carlos", texto: "Mi empresa distribuidora va a vender más de 1 700 UIT este año." },
      prompt: "¿En qué régimen debe estar la empresa de Carlos?",
      options: [
        { text: "Régimen General", icono: "🏢" },
        { text: "Régimen MYPE Tributario", icono: "🏭" },
        { text: "Nuevo RUS", icono: "🛒" }
      ],
      answer: 0,
      explain: "Al superar 1 700 UIT ya no cabe en el RMT; corresponde el Régimen General."
    },
    {
      type: "match",
      prompt: "Une cada concepto del Régimen General",
      pairs: [
        ["Tasa anual", "29,5 % de la ganancia"],
        ["Pago a cuenta", "Coeficiente o 1,5 %"],
        ["IGV", "18 % mensual"],
        ["Límite", "No tiene"]
      ],
      explain: "Así funciona el Régimen General."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "En el Régimen General, a más ingresos, la ___ debe ser más completa.",
      options: ["contabilidad", "cuota", "boleta", "multa"],
      answer: 0,
      explain: "Los libros obligatorios dependen del nivel de ingresos."
    },
    {
      type: "tf",
      statement: "Una persona natural con negocio no puede estar en el Régimen General.",
      answer: false,
      explain: "Falso. Personas naturales y empresas pueden estar en el Régimen General."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["El", "Régimen", "General", "no", "tiene", "límites"],
      extra: ["cuotas", "fijas"],
      explain: "El Régimen General no tiene límites."
    }
  ]
};

NAF.CONTENIDO.u3l5 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Compara y decide",
      intro: "Elegir bien tu régimen es una de las decisiones más importantes al formalizarte. Hazte estas preguntas:",
      puntos: [
        { icono: "🧾", titulo: "¿Mis clientes me piden factura?", texto: "Si sí, el NRUS no te sirve: elige RER, RMT o Régimen General." },
        { icono: "💵", titulo: "¿Cuánto voy a vender al año?", texto: "NRUS: hasta S/ 96 000 · RER: hasta S/ 525 000 · RMT: hasta 1 700 UIT · General: sin límite." },
        { icono: "🏢", titulo: "¿Soy persona natural o empresa?", texto: "Una empresa no puede estar en el NRUS." },
        { icono: "📊", titulo: "¿Tengo muchos gastos?", texto: "En el RMT y el General pagas sobre tu <b>ganancia</b>; en el RER, sobre tus <b>ventas</b>." },
        { icono: "🎓", titulo: "¿Tienes dudas?", texto: "Acude a un <b>NAF</b>: te ayudan a elegir sin costo." }
      ]
    },
    {
      type: "match",
      prompt: "Une cada régimen con su límite de ingresos anuales",
      pairs: [
        ["NRUS", "S/ 96 000"],
        ["RER", "S/ 525 000"],
        ["RMT", "1 700 UIT"],
        ["Régimen General", "Sin límite"]
      ],
      explain: "Los límites de ingresos son la primera pista para elegir tu régimen."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏾‍🎨", nombre: "Lucía", texto: "Vendo artesanías por redes: unos S/ 3 000 al mes. Mis clientes son personas, nadie me pide factura." },
      prompt: "¿Qué régimen le conviene más a Lucía?",
      options: [
        { text: "Nuevo RUS (NRUS)", icono: "🛒" },
        { text: "Régimen General", icono: "🏢" },
        { text: "Régimen MYPE Tributario", icono: "🏭" }
      ],
      answer: 0,
      explain: "Es persona natural, vende poco y no necesita facturas: el NRUS es el más simple para ella."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍💻", nombre: "Diego", texto: "Tengo una pequeña empresa que vende repuestos a talleres. Todos me piden factura. Vendo unos S/ 300 000 al año." },
      prompt: "¿Qué regímenes podría elegir Diego?",
      options: [
        { text: "RER, RMT o Régimen General", icono: "✅" },
        { text: "Solo el NRUS", icono: "🛒" },
        { text: "Ninguno, debe esperar a crecer", icono: "⏳" }
      ],
      answer: 0,
      explain: "Es empresa y emite facturas: el NRUS no aplica. Por sus ventas, puede estar en RER, RMT o General."
    },
    {
      type: "tf",
      statement: "Todos los regímenes, excepto el NRUS, permiten emitir facturas.",
      answer: true,
      explain: "Correcto. RER, RMT y Régimen General permiten emitir facturas."
    },
    {
      type: "choice",
      prompt: "¿En qué regímenes se paga el IGV mensual aparte del Impuesto a la Renta?",
      options: [
        { text: "RER, RMT y Régimen General" },
        { text: "Solo en el NRUS" },
        { text: "En ninguno" }
      ],
      answer: 0,
      explain: "En el NRUS la cuota única ya incluye el IGV; en los demás, se declara y paga aparte."
    },
    {
      type: "match",
      prompt: "¿Sobre qué se calcula la renta?",
      pairs: [
        ["NRUS", "Cuota fija por categoría"],
        ["RER", "Ventas del mes"],
        ["RMT y General", "Ganancia del año"]
      ],
      explain: "Si tienes muchos gastos, pagar sobre la ganancia puede convenirte."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Si mis clientes me piden ___, el NRUS no me sirve.",
      options: ["factura", "boleta", "ticket", "descuento"],
      answer: 0,
      explain: "En el NRUS no se emiten facturas."
    },
    {
      type: "tf",
      statement: "Si estoy en el NRUS y mis clientes empiezan a pedirme factura, puedo pasarme a otro régimen.",
      answer: true,
      explain: "Correcto. Desde el NRUS puedes cambiarte a otro régimen; consulta en el NAF o en la SUNAT cómo y cuándo hacerlo."
    }
  ]
};

NAF.CONTENIDO.u3l6 = {
  ejercicios: [
    {
      type: "choice",
      prompt: "¿Cuál es el único régimen donde NO puedes emitir facturas?",
      options: [
        { text: "Nuevo RUS (NRUS)", icono: "🛒" },
        { text: "Régimen Especial (RER)", icono: "🏪" },
        { text: "Régimen MYPE Tributario", icono: "🏭" },
        { text: "Régimen General", icono: "🏢" }
      ],
      answer: 0,
      explain: "En el NRUS solo emites boletas de venta y tickets."
    },
    {
      type: "match",
      prompt: "Une cada régimen con cómo paga la renta",
      pairs: [
        ["NRUS", "S/ 20 o S/ 50 al mes"],
        ["RER", "1,5 % mensual de ingresos"],
        ["RMT", "10 % y 29,5 % anual"],
        ["Régimen General", "29,5 % anual"]
      ],
      explain: "Cada régimen tiene su forma de pagar el Impuesto a la Renta."
    },
    {
      type: "tf",
      statement: "Una empresa (persona jurídica) puede acogerse al NRUS.",
      answer: false,
      explain: "Falso. El NRUS es solo para personas naturales y sucesiones indivisas."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🍳", nombre: "Luis", texto: "Mi restaurante está en el RER y este mes vendí S/ 40 000 sin IGV." },
      prompt: "¿Cuánto paga Luis de renta este mes?",
      options: [{ text: "S/ 600" }, { text: "S/ 400" }, { text: "S/ 7 200" }, { text: "S/ 50" }],
      answer: 0,
      explain: "1,5 % × S/ 40 000 = S/ 600. Aparte, el IGV del mes."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "La ___ es un valor de referencia que se actualiza cada año.",
      options: ["UIT", "RUC", "boleta", "Clave SOL"],
      answer: 0,
      explain: "La Unidad Impositiva Tributaria."
    },
    {
      type: "choice",
      prompt: "¿En cuál de estos regímenes NO presentas declaración anual de renta?",
      options: [
        { text: "RER", icono: "🏪" },
        { text: "RMT", icono: "🏭" },
        { text: "Régimen General", icono: "🏢" }
      ],
      answer: 0,
      explain: "En el RER los pagos mensuales son definitivos. En el RMT y el General, sí hay declaración anual."
    },
    {
      type: "tf",
      statement: "En el NRUS, la cuota mensual reemplaza al IGV y al Impuesto a la Renta.",
      answer: true,
      explain: "Correcto. Por eso es el régimen más sencillo."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🔬", nombre: "Sofía", texto: "Mi laboratorio crece rápido: este año venderé unos S/ 800 000 y tengo muchos gastos." },
      prompt: "¿Qué régimen le conviene evaluar a Sofía?",
      options: [
        { text: "RMT o Régimen General", icono: "📊" },
        { text: "RER", icono: "🏪" },
        { text: "NRUS", icono: "🛒" }
      ],
      answer: 0,
      explain: "Supera el límite del RER (S/ 525 000) y tiene muchos gastos: en el RMT o el General paga sobre su ganancia."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Elijo", "mi", "régimen", "según", "mis", "ingresos"],
      extra: ["nunca", "suerte"],
      explain: "Elijo mi régimen según mis ingresos."
    },
    {
      type: "tf",
      statement: "En el RER, el RMT y el Régimen General también se declara y paga el IGV mensual.",
      answer: true,
      explain: "Correcto. Solo en el NRUS el IGV está incluido en la cuota."
    }
  ]
};
