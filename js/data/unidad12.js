/* =========================================================
   UNIDAD 12 — Crece formal
   Beneficios de la formalidad, vender al Estado y a empresas,
   plan de cumplimiento y examen final del curso.
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u12l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Beneficios de ser formal",
      intro: "Cumplir con la SUNAT no es solo una obligación: también <b>abre puertas</b> para que tu negocio crezca.",
      puntos: [
        { icono: "🏦", titulo: "Acceso a crédito", texto: "Con comprobantes y declaraciones, puedes demostrar tus ingresos ante bancos y cajas, y obtener mejores préstamos." },
        { icono: "🤝", titulo: "Más clientes", texto: "Las empresas necesitan <b>factura</b> para sustentar sus gastos: si eres formal, puedes venderles." },
        { icono: "🏛️", titulo: "Vender al Estado", texto: "Para contratar con entidades públicas necesitas RUC activo y habido, entre otros requisitos." },
        { icono: "👷", titulo: "Protección", texto: "Tus trabajadores acceden a salud y pensión, y tú evitas multas, cierres y contingencias." },
        { icono: "🇵🇪", titulo: "Aportas al país", texto: "Tus tributos financian servicios públicos que todos usamos (Unidad 1)." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Por qué una empresa prefiere comprarle a un negocio formal?",
      options: [
        { text: "Porque necesita factura para sustentar su gasto y su crédito fiscal", icono: "📄" },
        { text: "Porque los negocios formales siempre son más baratos", icono: "💸" },
        { text: "Porque así no paga IGV", icono: "🚫" }
      ],
      answer: 0,
      explain: "Sin factura, la empresa no puede usar el IGV como crédito fiscal ni sustentar el gasto."
    },
    {
      type: "match",
      prompt: "Une cada acción formal con su beneficio",
      pairs: [
        ["Emitir facturas", "Venderle a empresas"],
        ["Declarar tus ventas", "Demostrar ingresos al banco"],
        ["Planilla en regla", "Trabajadores con salud y pensión"],
        ["RUC activo y habido", "Poder venderle al Estado"]
      ],
      explain: "Cada obligación cumplida se convierte en una oportunidad."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏾‍🎨", nombre: "Lucía", texto: "Quiero un préstamo para comprar una máquina, pero el banco me pide demostrar mis ingresos." },
      prompt: "¿Qué le ayuda a Lucía a demostrar sus ingresos?",
      options: [
        { text: "Sus comprobantes emitidos y sus declaraciones a la SUNAT", icono: "📊" },
        { text: "Contarle al banco cuánto cree que vende", icono: "🗣️" },
        { text: "Fotos de su tienda en redes sociales", icono: "📸" }
      ],
      answer: 0,
      explain: "La información tributaria es una prueba sólida de tus ingresos."
    },
    {
      type: "tf",
      statement: "Ser informal me protege de multas porque la SUNAT no sabe que existo.",
      answer: false,
      explain: "Falso. La informalidad expone a sanciones como cierres y comisos, y te cierra puertas a crédito y clientes."
    },
    {
      type: "tf",
      statement: "La formalidad permite que mis trabajadores accedan a salud y pensión.",
      answer: true,
      explain: "Correcto. Con planilla en regla, tienen EsSalud y ONP o AFP (Unidad 10)."
    },
    {
      type: "choice",
      prompt: "¿Qué herramienta de la formalidad te da liquidez con tus ventas al crédito?",
      options: [
        { text: "La factura negociable (factoring)", icono: "💸" },
        { text: "La boleta de venta", icono: "🧾" },
        { text: "El T-Registro", icono: "🗂️" }
      ],
      answer: 0,
      explain: "Puedes vender tus facturas por cobrar a una entidad financiera (Unidad 5)."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Ser formal me abre las puertas al ___ y a nuevos clientes.",
      options: ["crédito", "cierre", "comiso", "embargo"],
      answer: 0,
      explain: "La formalidad es un activo de tu negocio."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Ser", "formal", "ayuda", "a", "crecer", "mi", "negocio"],
      extra: ["impide", "nunca"],
      explain: "Ser formal ayuda a crecer mi negocio."
    }
  ]
};

NAF.CONTENIDO.u12l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Vende al Estado y a empresas",
      intro: "El Estado y las empresas grandes son clientes importantes. Para venderles, necesitas estar en regla.",
      puntos: [
        { icono: "📋", titulo: "Registro Nacional de Proveedores (RNP)", texto: "Para contratar con el Estado debes inscribirte en el <b>RNP</b>. Uno de los requisitos es tener RUC <b>activo y habido</b>." },
        { icono: "💻", titulo: "Procesos en línea", texto: "Las contrataciones públicas se publican en plataformas electrónicas del Estado, como el <b>SEACE</b>." },
        { icono: "🏭", titulo: "REMYPE", texto: "El Registro Nacional de la Micro y Pequeña Empresa te permite acceder a beneficios como el régimen laboral especial." },
        { icono: "🔎", titulo: "Las empresas también revisan", texto: "Antes de comprarte, verifican tu RUC (Consulta RUC) y la validez de tus facturas." }
      ]
    },
    {
      type: "choice",
      prompt: "¿En qué registro te inscribes para venderle al Estado?",
      options: [
        { text: "Registro Nacional de Proveedores (RNP)", icono: "📋" },
        { text: "T-Registro", icono: "🗂️" },
        { text: "Registro de Ventas", icono: "📤" }
      ],
      answer: 0,
      explain: "El RNP es el registro de proveedores del Estado."
    },
    {
      type: "tf",
      statement: "Para inscribirme en el RNP necesito tener RUC activo y habido.",
      answer: true,
      explain: "Correcto. Por eso es tan importante mantener tu RUC al día (Unidad 2)."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🔧", nombre: "Juan", texto: "Quiero venderle herramientas a la municipalidad de mi distrito, pero mi RUC figura como «no habido»." },
      prompt: "¿Qué debe hacer Juan primero?",
      options: [
        { text: "Regularizar su domicilio fiscal para volver a ser habido", icono: "🏠" },
        { text: "Postular igual y esperar que no lo noten", icono: "🙈" },
        { text: "Sacar un RUC nuevo", icono: "🆕" }
      ],
      answer: 0,
      explain: "Sin condición de habido no podrá cumplir los requisitos para contratar con el Estado."
    },
    {
      type: "match",
      prompt: "Une cada sigla con su significado",
      pairs: [
        ["RNP", "Registro de proveedores del Estado"],
        ["SEACE", "Plataforma de contrataciones públicas"],
        ["REMYPE", "Registro de micro y pequeñas empresas"]
      ],
      explain: "Herramientas para crecer vendiéndole al Estado."
    },
    {
      type: "choice",
      prompt: "Una empresa grande quiere comprarte por primera vez. ¿Qué suele verificar?",
      options: [
        { text: "Tu RUC en la Consulta RUC y la validez de tus facturas", icono: "🔎" },
        { text: "Tu Clave SOL", icono: "🔐" },
        { text: "Tus cuentas de redes sociales personales", icono: "📱" }
      ],
      answer: 0,
      explain: "Igual que tú verificas a tus proveedores (Unidades 2 y 5)."
    },
    {
      type: "tf",
      statement: "Solo las grandes empresas pueden venderle al Estado.",
      answer: false,
      explain: "Falso. Las MYPE también pueden ser proveedoras del Estado si cumplen los requisitos."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Las contrataciones públicas se publican en el ___.",
      options: ["SEACE", "T-Registro", "Registro de Compras", "buzón SOL"],
      answer: 0,
      explain: "El SEACE es el sistema electrónico de contrataciones del Estado."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Con", "RUC", "habido", "puedo", "venderle", "al", "Estado"],
      extra: ["nunca", "baja"],
      explain: "Con RUC habido puedo venderle al Estado."
    }
  ]
};

NAF.CONTENIDO.u12l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Tu plan de cumplimiento",
      intro: "Cumplir es más fácil con una <b>rutina</b>. Este es un plan básico para tu negocio:",
      puntos: [
        { icono: "☀️", titulo: "Cada día", texto: "Emite y entrega comprobantes por cada venta. Pide factura en tus compras del negocio." },
        { icono: "📬", titulo: "Cada semana", texto: "Revisa tu <b>buzón electrónico SOL</b> y separa el IGV que cobraste." },
        { icono: "📅", titulo: "Cada mes", texto: "Revisa tus registros de Ventas y Compras, declara y paga según el cronograma (y la PLAME si tienes trabajadores)." },
        { icono: "🗓️", titulo: "Cada año", texto: "Presenta la declaración anual (RMT o General), revisa si tu régimen sigue siendo el adecuado y actualiza tu RUC si algo cambió." },
        { icono: "🎓", titulo: "Siempre", texto: "Guarda tu Clave SOL en secreto, conserva tus documentos y, si tienes dudas, acude a un <b>NAF</b>." }
      ]
    },
    {
      type: "match",
      prompt: "Une cada tarea con su frecuencia",
      pairs: [
        ["Entregar comprobantes", "Cada día"],
        ["Revisar el buzón SOL", "Cada semana"],
        ["Declarar IGV y Renta", "Cada mes"],
        ["Declaración anual", "Cada año"]
      ],
      explain: "Una rutina simple evita olvidos y multas."
    },
    {
      type: "choice",
      prompt: "¿Qué tarea conviene hacer cada semana?",
      options: [
        { text: "Revisar el buzón electrónico SOL", icono: "📬" },
        { text: "Cambiar de régimen tributario", icono: "🧭" },
        { text: "Pedir la baja del RUC", icono: "🔴" }
      ],
      answer: 0,
      explain: "Así te enteras a tiempo de cualquier notificación."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🍳", nombre: "Rosa", texto: "Mi bodega creció: ahora vendo S/ 12 000 al mes y mis clientes empiezan a pedirme factura." },
      prompt: "¿Qué debería revisar Rosa en su plan anual?",
      options: [
        { text: "Cambiarse del NRUS a un régimen que le permita emitir facturas", icono: "🧭" },
        { text: "Seguir igual, el NRUS no tiene límites", icono: "🛒" },
        { text: "Dejar de entregar comprobantes", icono: "🙈" }
      ],
      answer: 0,
      explain: "Supera el límite del NRUS (S/ 8 000 al mes) y necesita emitir facturas: debe evaluar RER o RMT (Unidad 3)."
    },
    {
      type: "tf",
      statement: "Separar cada semana el IGV que cobré me ayuda a tener el dinero listo para pagar a fin de mes.",
      answer: true,
      explain: "Correcto. Ese dinero no es tuyo: es del Estado (Unidad 6)."
    },
    {
      type: "tf",
      statement: "Puedo compartir mi Clave SOL con cualquier persona que me ayude con el plan de cumplimiento.",
      answer: false,
      explain: "Falso. Tu Clave SOL es personal y confidencial (Unidad 1)."
    },
    {
      type: "choice",
      prompt: "¿Qué haces si cambias la dirección de tu negocio?",
      options: [
        { text: "Actualizo mi domicilio fiscal en el RUC", icono: "📍" },
        { text: "Espero a la declaración anual para avisar", icono: "⏳" },
        { text: "Nada, la SUNAT lo sabrá sola", icono: "🪄" }
      ],
      answer: 0,
      explain: "Comunícalo apenas ocurra (Unidad 2)."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Si tengo dudas sobre mis obligaciones, acudo a un ___.",
      options: ["NAF", "tramitador", "sorteo", "vecino"],
      answer: 0,
      explain: "En el NAF te orientan gratis."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Cumplir", "es", "más", "fácil", "con", "una", "rutina"],
      extra: ["difícil", "nunca"],
      explain: "Cumplir es más fácil con una rutina."
    }
  ]
};

NAF.CONTENIDO.u12l4 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Examen final del curso",
      intro: "¡Llegaste al final de la ruta! Este examen repasa <b>las 12 unidades</b>. Respira, confía en lo que aprendiste y adelante.",
      puntos: [
        { icono: "📝", titulo: "15 preguntas", texto: "Hay preguntas de todas las unidades: SUNAT, RUC, regímenes, comprobantes, IGV, Renta, declaraciones, libros, trabajadores y multas." },
        { icono: "❤️", titulo: "5 vidas", texto: "Como siempre, si te equivocas la pregunta vuelve al final." },
        { icono: "🎓", titulo: "Al terminar", texto: "Completarás el curso <b>NAF Aprende: Tributación básica</b>." }
      ]
    },
    {
      type: "choice",
      prompt: "Unidad 1 · ¿Qué tipo de tributo es el arbitrio municipal?",
      options: [{ text: "Tasa", icono: "🏷️" }, { text: "Impuesto", icono: "🧾" }, { text: "Contribución", icono: "🏗️" }],
      answer: 0,
      explain: "Los arbitrios se pagan por un servicio público específico: son tasas."
    },
    {
      type: "tf",
      statement: "Unidad 1 · El RUC de una persona natural con negocio empieza con 20.",
      answer: false,
      explain: "Falso. Persona natural: 10. Empresa (persona jurídica): 20."
    },
    {
      type: "match",
      prompt: "Unidad 2 · ¿Estado o condición del RUC?",
      pairs: [
        ["Activo", "Estado"],
        ["Baja de inscripción", "Estado"],
        ["Habido", "Condición"],
        ["No habido", "Condición"]
      ],
      explain: "El estado indica si operas; la condición, si la SUNAT te ubica en tu domicilio fiscal."
    },
    {
      type: "choice",
      prompt: "Unidad 3 · ¿Cuál es el límite anual de ingresos del RER?",
      options: [{ text: "S/ 525 000" }, { text: "S/ 96 000" }, { text: "1 700 UIT" }, { text: "Sin límite" }],
      answer: 0,
      explain: "NRUS: S/ 96 000 · RER: S/ 525 000 · RMT: 1 700 UIT · General: sin límite."
    },
    {
      type: "choice",
      escena: { personaje: "🧑🏻‍💼", nombre: "Carlos", texto: "Le devolví a un cliente parte del dinero de una factura por un descuento acordado después de la venta." },
      prompt: "Unidad 4 · ¿Qué documento emite Carlos?",
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
      prompt: "Unidad 5 · Completa la frase",
      sentence: "Verifico si una factura es real con la consulta de ___ de la SUNAT.",
      options: ["validez", "RUC", "deudas", "planillas"],
      answer: 0,
      explain: "La consulta de validez de comprobantes electrónicos es gratuita."
    },
    {
      type: "choice",
      prompt: "Unidad 6 · Ventas S/ 12 000 y compras S/ 7 000 (sin IGV, con facturas en regla). ¿Cuánto IGV pagas?",
      options: [{ text: "S/ 900" }, { text: "S/ 2 160" }, { text: "S/ 1 260" }, { text: "S/ 5 000" }],
      answer: 0,
      explain: "Débito 2 160 − crédito 1 260 = S/ 900."
    },
    {
      type: "tf",
      statement: "Unidad 6 · Una compra sustentada con boleta da derecho a crédito fiscal.",
      answer: false,
      explain: "Falso. Se necesita factura (u otro comprobante que lo permita) a nombre de tu RUC."
    },
    {
      type: "choice",
      prompt: "Unidad 7 · La ganancia de un negocio es renta de…",
      options: [{ text: "Tercera categoría" }, { text: "Primera categoría" }, { text: "Quinta categoría" }],
      answer: 0,
      explain: "Las rentas empresariales son de tercera categoría."
    },
    {
      type: "choice",
      prompt: "Unidad 7 · Impuesto anual S/ 10 000 y pagos a cuenta S/ 7 500. ¿Qué resulta?",
      options: [
        { text: "Saldo por pagar de S/ 2 500", icono: "💸" },
        { text: "Saldo a favor de S/ 2 500", icono: "💰" },
        { text: "Saldo por pagar de S/ 17 500", icono: "📈" }
      ],
      answer: 0,
      explain: "S/ 10 000 − S/ 7 500 = S/ 2 500 por pagar."
    },
    {
      type: "tf",
      statement: "Unidad 8 · Si estoy en el RMT y no vendí nada en el mes, igual debo presentar mi declaración.",
      answer: true,
      explain: "Correcto: declaración en cero."
    },
    {
      type: "choice",
      prompt: "Unidad 9 · ¿Qué libros lleva un negocio del RER?",
      options: [
        { text: "Registro de Compras y Registro de Ventas e Ingresos", icono: "📒" },
        { text: "Ninguno", icono: "🙅" },
        { text: "Contabilidad completa", icono: "📚" }
      ],
      answer: 0,
      explain: "Esos dos registros corresponden al RER."
    },
    {
      type: "choice",
      prompt: "Unidad 10 · Tu trabajador gana S/ 1 800. ¿Cuánto pagas a EsSalud?",
      options: [{ text: "S/ 162" }, { text: "S/ 234" }, { text: "S/ 180" }, { text: "S/ 0" }],
      answer: 0,
      explain: "9 % × S/ 1 800 = S/ 162, a cargo del empleador."
    },
    {
      type: "choice",
      prompt: "Unidad 11 · ¿Cuándo obtienes la mayor rebaja de una multa?",
      options: [
        { text: "Si subsanas antes de que la SUNAT te notifique y pagas", icono: "🏃" },
        { text: "Si esperas a la cobranza coactiva", icono: "🏦" },
        { text: "Si cambias de régimen", icono: "🧭" }
      ],
      answer: 0,
      explain: "Es la subsanación voluntaria del régimen de gradualidad."
    },
    {
      type: "order",
      prompt: "Unidad 12 · Forma la frase correcta",
      answer: ["Ser", "formal", "abre", "puertas", "para", "crecer"],
      extra: ["cierra", "nunca"],
      explain: "Ser formal abre puertas para crecer. ¡Felicitaciones!"
    }
  ]
};
