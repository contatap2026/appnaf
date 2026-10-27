/* =========================================================
   UNIDAD 9 — Libros y registros
   Para qué sirven, qué lleva cada régimen, Registro de
   Ventas y Compras, libros electrónicos (SLE y SIRE).
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u9l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "¿Para qué sirven los libros?",
      intro: "Los <b>libros y registros contables</b> ordenan la información de tu negocio: qué vendiste, qué compraste y cuánto ganaste. La SUNAT los usa para verificar tus declaraciones.",
      puntos: [
        { icono: "🛒", titulo: "NRUS", texto: "No lleva libros contables." },
        { icono: "🏪", titulo: "RER", texto: "<b>Registro de Compras</b> y <b>Registro de Ventas e Ingresos</b>." },
        { icono: "🏭", titulo: "RMT y Régimen General", texto: "Con ingresos de hasta 300 UIT: Registro de Ventas, Registro de Compras y <b>Libro Diario de Formato Simplificado</b>. Con más ingresos, se exigen más libros, hasta llegar a la contabilidad completa." },
        { icono: "⏳", titulo: "Al día", texto: "Los libros tienen plazos máximos de atraso. Llevarlos atrasados o no llevarlos es una <b>infracción</b>." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué régimen NO está obligado a llevar libros contables?",
      options: [
        { text: "NRUS", icono: "🛒" },
        { text: "RER", icono: "🏪" },
        { text: "RMT", icono: "🏭" },
        { text: "Régimen General", icono: "🏢" }
      ],
      answer: 0,
      explain: "En el NRUS no se llevan libros; igual conviene guardar los comprobantes."
    },
    {
      type: "match",
      prompt: "Une cada régimen con los libros que lleva",
      pairs: [
        ["NRUS", "Ninguno"],
        ["RER", "Registro de Compras y de Ventas"],
        ["RMT hasta 300 UIT", "Compras, Ventas y Diario Simplificado"]
      ],
      explain: "A mayor tamaño del negocio, más libros."
    },
    {
      type: "tf",
      statement: "Llevar los libros contables con atraso puede ser sancionado por la SUNAT.",
      answer: true,
      explain: "Correcto. Cada libro tiene un plazo máximo de atraso."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🔧", nombre: "Juan", texto: "Mi ferretería está en el RER. ¿Qué libros llevo?" },
      prompt: "¿Qué le respondes a Juan?",
      options: [
        { text: "Registro de Compras y Registro de Ventas e Ingresos", icono: "📒" },
        { text: "Ninguno, el RER no lleva libros", icono: "🙅" },
        { text: "Contabilidad completa siempre", icono: "📚" }
      ],
      answer: 0,
      explain: "Esos dos registros son los que corresponden al RER."
    },
    {
      type: "choice",
      prompt: "¿Para qué sirven los libros contables?",
      options: [
        { text: "Para ordenar la información del negocio y sustentar tus declaraciones", icono: "📊" },
        { text: "Solo para decorar la oficina", icono: "🖼️" },
        { text: "Para reemplazar los comprobantes de pago", icono: "🧾" }
      ],
      answer: 0,
      explain: "Además, te ayudan a tomar mejores decisiones sobre tu negocio."
    },
    {
      type: "tf",
      statement: "Mientras más ingresos tiene un negocio en el Régimen General, más libros contables debe llevar.",
      answer: true,
      explain: "Correcto. Los grandes deben llevar contabilidad completa."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "En el RMT con ingresos de hasta 300 UIT llevo el Libro Diario de Formato ___.",
      options: ["Simplificado", "Secreto", "Anual", "Libre"],
      answer: 0,
      explain: "Junto con el Registro de Ventas y el Registro de Compras."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Mis", "libros", "deben", "estar", "al", "día"],
      extra: ["atrasados", "nunca"],
      explain: "Mis libros deben estar al día."
    }
  ]
};

NAF.CONTENIDO.u9l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Registro de Ventas y Compras",
      intro: "Son los dos registros más usados por los emprendedores. Están muy ligados al <b>IGV</b>.",
      puntos: [
        { icono: "📤", titulo: "Registro de Ventas e Ingresos", texto: "Anotas los comprobantes que <b>emites</b>: fecha, tipo, serie y número, cliente, valor de venta, IGV y total. De aquí sale tu débito fiscal." },
        { icono: "📥", titulo: "Registro de Compras", texto: "Anotas los comprobantes que <b>recibes</b> de tus proveedores. Es requisito para usar el crédito fiscal." },
        { icono: "📅", titulo: "Por periodo", texto: "Se organizan mes a mes, igual que tu declaración." },
        { icono: "🗄️", titulo: "Consérvalos", texto: "Guarda libros y comprobantes mientras la SUNAT pueda revisarlos (en general, el plazo de prescripción: cuatro años o más)." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué anotas en el Registro de Ventas?",
      options: [
        { text: "Los comprobantes que emites a tus clientes", icono: "📤" },
        { text: "Los comprobantes que te dan tus proveedores", icono: "📥" },
        { text: "Las asistencias de tus trabajadores", icono: "🕘" }
      ],
      answer: 0,
      explain: "Las compras van en el Registro de Compras."
    },
    {
      type: "match",
      prompt: "Une cada registro con lo que contiene",
      pairs: [
        ["Registro de Ventas", "Comprobantes que emito"],
        ["Registro de Compras", "Comprobantes que recibo"]
      ],
      explain: "Ventas → débito fiscal. Compras → crédito fiscal."
    },
    {
      type: "tf",
      statement: "Para usar el crédito fiscal, la factura de compra debe estar anotada en el Registro de Compras.",
      answer: true,
      explain: "Correcto. Es uno de los requisitos que viste en la Unidad 6."
    },
    {
      type: "choice",
      prompt: "¿Qué dato NO va en el Registro de Ventas?",
      options: [
        { text: "La Clave SOL del cliente", icono: "🔐" },
        { text: "La serie y número del comprobante", icono: "🔢" },
        { text: "El IGV de la venta", icono: "➗" },
        { text: "La fecha de emisión", icono: "📅" }
      ],
      answer: 0,
      explain: "La Clave SOL es personal y nunca se registra ni se pide."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Este mes emití 40 facturas y recibí 15 facturas de proveedores." },
      prompt: "¿Cómo las registra Ana?",
      options: [
        { text: "40 en el Registro de Ventas y 15 en el Registro de Compras", icono: "📒" },
        { text: "Las 55 en el Registro de Ventas", icono: "📤" },
        { text: "No registra nada si son electrónicas", icono: "🙈" }
      ],
      answer: 0,
      explain: "Lo que emite va a Ventas; lo que recibe, a Compras."
    },
    {
      type: "tf",
      statement: "Puedo botar mis libros y comprobantes apenas termina el año.",
      answer: false,
      explain: "Falso. Debes conservarlos mientras la SUNAT pueda revisarlos (plazo de prescripción)."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Del Registro de Ventas sale mi débito ___.",
      options: ["fiscal", "bancario", "laboral", "municipal"],
      answer: 0,
      explain: "El IGV de tus ventas."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Anoto", "mis", "compras", "en", "el", "Registro", "de", "Compras"],
      extra: ["Ventas", "nunca"],
      explain: "Anoto mis compras en el Registro de Compras."
    }
  ]
};

NAF.CONTENIDO.u9l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Libros electrónicos",
      intro: "Hoy muchos libros se llevan de forma <b>electrónica</b>. Se generan en los sistemas de la SUNAT o con un programa propio.",
      puntos: [
        { icono: "💾", titulo: "SLE", texto: "El <b>Sistema de Libros Electrónicos</b> permite generar y enviar tus libros a la SUNAT (por ejemplo, con el PLE o el SLE-Portal)." },
        { icono: "🤖", titulo: "SIRE", texto: "El <b>Sistema Integrado de Registros Electrónicos</b>: la SUNAT te <b>propone</b> tu Registro de Ventas y de Compras con base en tus comprobantes electrónicos. Tú lo revisas, completas y aceptas." },
        { icono: "📓", titulo: "Libros físicos", texto: "Si llevas libros en papel, deben estar <b>legalizados</b> (por un notario o juez de paz) antes de usarlos." },
        { icono: "✅", titulo: "Ventajas", texto: "Menos papel, sin legalización y con información que la SUNAT ya conoce." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué hace el SIRE?",
      options: [
        { text: "Te propone tu Registro de Ventas y de Compras a partir de tus comprobantes electrónicos", icono: "🤖" },
        { text: "Emite boletas en tu nombre sin que lo sepas", icono: "🧾" },
        { text: "Paga tus impuestos automáticamente", icono: "💳" }
      ],
      answer: 0,
      explain: "Tú revisas la propuesta, la completas y la aceptas."
    },
    {
      type: "tf",
      statement: "Los libros en papel deben legalizarse antes de usarse.",
      answer: true,
      explain: "Correcto. La legalización la hace un notario o, donde no haya, un juez de paz."
    },
    {
      type: "tf",
      statement: "Si el SIRE me propone mi Registro de Compras, debo aceptarlo sin revisarlo.",
      answer: false,
      explain: "Falso. Siempre revísalo: puedes completar, incluir o excluir comprobantes antes de aceptarlo."
    },
    {
      type: "match",
      prompt: "Une cada sigla con su significado",
      pairs: [
        ["SLE", "Sistema de Libros Electrónicos"],
        ["SIRE", "Sistema Integrado de Registros Electrónicos"],
        ["PLE", "Programa de Libros Electrónicos"]
      ],
      explain: "Herramientas de la SUNAT para tus libros."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍💻", nombre: "Diego", texto: "Compré un libro de actas en la librería para usarlo como Registro de Ventas, pero no lo legalicé." },
      prompt: "¿Qué problema tiene Diego?",
      options: [
        { text: "Un libro físico debe legalizarse antes de usarse", icono: "📓" },
        { text: "Ninguno, cualquier cuaderno sirve", icono: "👍" },
        { text: "Debe pintarlo de color azul", icono: "🎨" }
      ],
      answer: 0,
      explain: "Debe legalizarlo o, si corresponde, llevar sus registros de forma electrónica."
    },
    {
      type: "choice",
      prompt: "¿Cuál es una ventaja de los libros electrónicos?",
      options: [
        { text: "No necesitan legalización y usan información que la SUNAT ya tiene", icono: "✅" },
        { text: "No hay que revisarlos nunca", icono: "🙈" },
        { text: "Eliminan el pago del IGV", icono: "🚫" }
      ],
      answer: 0,
      explain: "Ahorras tiempo y papel, pero la responsabilidad de revisarlos sigue siendo tuya."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "En el SIRE, la SUNAT me ___ mis registros y yo los reviso.",
      options: ["propone", "prohíbe", "esconde", "cobra"],
      answer: 0,
      explain: "Es una propuesta basada en tus comprobantes electrónicos."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Reviso", "la", "propuesta", "antes", "de", "aceptarla"],
      extra: ["nunca", "ignoro"],
      explain: "Reviso la propuesta antes de aceptarla."
    }
  ]
};

NAF.CONTENIDO.u9l4 = {
  ejercicios: [
    {
      type: "match",
      prompt: "Une cada régimen con sus libros",
      pairs: [
        ["NRUS", "No lleva libros"],
        ["RER", "Registros de Compras y Ventas"],
        ["Régimen General con muchos ingresos", "Contabilidad completa"]
      ],
      explain: "Los libros dependen del régimen y de tus ingresos."
    },
    {
      type: "choice",
      prompt: "Recibes una factura de tu proveedor de insumos. ¿Dónde la anotas?",
      options: [
        { text: "En el Registro de Compras", icono: "📥" },
        { text: "En el Registro de Ventas", icono: "📤" },
        { text: "En ningún lado", icono: "🙈" }
      ],
      answer: 0,
      explain: "Así podrás usar su IGV como crédito fiscal."
    },
    {
      type: "tf",
      statement: "Llevar libros atrasados es una infracción tributaria.",
      answer: true,
      explain: "Correcto. Respeta los plazos máximos de atraso."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏾‍🎨", nombre: "Lucía", texto: "Estoy en el NRUS. ¿Tengo que comprar libros contables?" },
      prompt: "¿Qué le respondes a Lucía?",
      options: [
        { text: "No, el NRUS no lleva libros, pero guarda tus comprobantes", icono: "🛒" },
        { text: "Sí, necesita contabilidad completa", icono: "📚" },
        { text: "Sí, debe legalizar cinco libros", icono: "📓" }
      ],
      answer: 0,
      explain: "Si más adelante cambia al RER o al RMT, deberá empezar a llevar registros."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Los libros en papel deben ___ antes de usarse.",
      options: ["legalizarse", "plastificarse", "venderse", "romperse"],
      answer: 0,
      explain: "Ante notario o juez de paz."
    },
    {
      type: "choice",
      prompt: "¿Cuál es la relación entre el Registro de Ventas y el IGV?",
      options: [
        { text: "Del Registro de Ventas sale el débito fiscal", icono: "📤" },
        { text: "Del Registro de Ventas sale el crédito fiscal", icono: "📥" },
        { text: "No tienen relación", icono: "🤷" }
      ],
      answer: 0,
      explain: "Ventas → débito fiscal; Compras → crédito fiscal."
    },
    {
      type: "tf",
      statement: "Puedo aceptar la propuesta del SIRE sin revisarla porque la SUNAT nunca se equivoca.",
      answer: false,
      explain: "Falso. La responsabilidad de tus registros es tuya: revisa siempre."
    },
    {
      type: "choice",
      prompt: "¿Hasta cuándo conservas tus libros y comprobantes?",
      options: [
        { text: "Mientras la SUNAT pueda revisarlos (plazo de prescripción)", icono: "🗄️" },
        { text: "Hasta fin de mes", icono: "📅" },
        { text: "No es necesario conservarlos", icono: "🗑️" }
      ],
      answer: 0,
      explain: "En general, cuatro años o más."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Un", "negocio", "ordenado", "lleva", "sus", "libros", "al", "día"],
      extra: ["nunca", "atrasados"],
      explain: "Un negocio ordenado lleva sus libros al día."
    },
    {
      type: "tf",
      statement: "Los libros electrónicos no necesitan legalización.",
      answer: true,
      explain: "Correcto. Es una de sus ventajas."
    }
  ]
};
