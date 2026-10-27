/* =========================================================
   UNIDAD 1 — Primeros pasos con la SUNAT
   Contenido de las lecciones. Tipos de ejercicio soportados:
     teoria  → tarjeta de explicación (no se califica)
     choice  → opción múltiple (opcional: escena con personaje)
     tf      → verdadero / falso
     fill    → completar el espacio en blanco
     match   → emparejar conceptos
     order   → ordenar palabras para formar una frase
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u1l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "¿Qué es la SUNAT?",
      intro: "La <b>SUNAT</b> es la Superintendencia Nacional de Aduanas y de Administración Tributaria del Perú.",
      puntos: [
        { icono: "🪙", titulo: "Administra tributos", texto: "Recauda los tributos internos del Gobierno Nacional, como el IGV y el Impuesto a la Renta." },
        { icono: "🛃", titulo: "Controla las aduanas", texto: "Supervisa lo que entra y sale del país (importaciones y exportaciones)." },
        { icono: "🤝", titulo: "Orienta y fiscaliza", texto: "Te orienta para cumplir y verifica que todos cumplan." },
        { icono: "🎓", titulo: "¿Y el NAF?", texto: "Los Núcleos de Apoyo Contable y Fiscal son espacios en universidades e institutos donde estudiantes capacitados por la SUNAT brindan orientación tributaria <b>gratuita</b>." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué significa SUNAT?",
      options: [
        { text: "Superintendencia Nacional de Aduanas y de Administración Tributaria" },
        { text: "Sistema Único Nacional de Atención Tributaria" },
        { text: "Servicio Unificado Nacional de Aduanas y Tesorería" },
        { text: "Superintendencia Nacional de Asuntos Técnicos" }
      ],
      answer: 0,
      explain: "SUNAT = Superintendencia Nacional de Aduanas y de Administración Tributaria."
    },
    {
      type: "choice",
      prompt: "¿Cuál es una función principal de la SUNAT?",
      options: [
        { text: "Administrar y recaudar tributos", icono: "🪙" },
        { text: "Emitir billetes y monedas", icono: "💵" },
        { text: "Aprobar las leyes del país", icono: "⚖️" },
        { text: "Inscribir propiedades en Registros Públicos", icono: "🏠" }
      ],
      answer: 0,
      explain: "La SUNAT administra y recauda tributos. Los billetes los emite el BCRP, las leyes las aprueba el Congreso y los Registros Públicos están a cargo de SUNARP."
    },
    {
      type: "tf",
      statement: "El NAF brinda orientación tributaria gratuita a emprendedores y ciudadanos.",
      answer: true,
      explain: "¡Así es! En el NAF, estudiantes capacitados te orientan sin costo sobre tus obligaciones tributarias básicas."
    },
    {
      type: "match",
      prompt: "Une cada entidad con lo que hace",
      pairs: [
        ["SUNAT", "Administra los tributos"],
        ["BCRP", "Emite la moneda"],
        ["SUNARP", "Registros Públicos"],
        ["Congreso", "Aprueba las leyes"]
      ],
      explain: "Cada entidad del Estado tiene un rol distinto."
    },
    {
      type: "choice",
      prompt: "¿Para qué sirven los tributos que pagamos?",
      options: [
        { text: "Para financiar servicios públicos: salud, educación, seguridad, vías", icono: "🏥" },
        { text: "Para pagar el sueldo de los trabajadores de mi negocio", icono: "👷" },
        { text: "Para ahorrar dinero a mi nombre en el banco", icono: "🏦" }
      ],
      answer: 0,
      explain: "Los tributos financian los servicios y obras públicas que usamos todos."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["La", "SUNAT", "administra", "los", "tributos"],
      extra: ["emite", "leyes"],
      explain: "La SUNAT administra los tributos."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🍳", nombre: "Rosa", texto: "Quiero abrir mi bodega, pero no sé qué obligaciones tributarias tengo. ¿A dónde voy?" },
      prompt: "¿Dónde puede Rosa recibir orientación gratuita?",
      options: [
        { text: "En el NAF de una universidad o instituto", icono: "🎓" },
        { text: "Solo pagando a un tramitador", icono: "💸" },
        { text: "En el Banco Central de Reserva", icono: "🏦" }
      ],
      answer: 0,
      explain: "El NAF orienta gratis. También puede consultar los canales oficiales de la SUNAT."
    },
    {
      type: "tf",
      statement: "La SUNAT también se encarga del control aduanero (lo que entra y sale del país).",
      answer: true,
      explain: "Correcto: por eso se llama Superintendencia Nacional de <b>Aduanas</b> y de Administración Tributaria."
    }
  ]
};

NAF.CONTENIDO.u1l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Los tributos",
      intro: "Un <b>tributo</b> es un pago, generalmente en dinero, que el Estado exige <b>por ley</b>. Hay tres tipos:",
      puntos: [
        { icono: "🧾", titulo: "Impuesto", texto: "No te da un beneficio directo a cambio. Ej.: IGV, Impuesto a la Renta." },
        { icono: "🏗️", titulo: "Contribución", texto: "Se paga por beneficios de obras o actividades del Estado. Ej.: aportes a EsSalud y a la ONP." },
        { icono: "🏷️", titulo: "Tasa", texto: "Se paga por un servicio público específico que recibes. Ej.: arbitrios, derechos de trámite, licencias." }
      ]
    },
    {
      type: "choice",
      prompt: "El IGV es un…",
      options: [
        { text: "Impuesto", icono: "🧾" },
        { text: "Contribución", icono: "🏗️" },
        { text: "Tasa", icono: "🏷️" }
      ],
      answer: 0,
      explain: "El IGV (Impuesto General a las Ventas) es un impuesto: no genera un servicio directo a quien lo paga."
    },
    {
      type: "match",
      prompt: "Une cada concepto con su significado",
      pairs: [
        ["Tributo", "Lo exige el Estado por ley"],
        ["Impuesto", "Sin beneficio directo"],
        ["Contribución", "Por obras o actividades estatales"],
        ["Tasa", "Por un servicio específico"]
      ],
      explain: "Tributo es el género; impuesto, contribución y tasa son sus especies."
    },
    {
      type: "tf",
      statement: "Pagar arbitrios a la municipalidad es pagar una tasa.",
      answer: true,
      explain: "Sí: los arbitrios (limpieza, parques, serenazgo) son tasas por servicios públicos."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estos pagos es una tasa?",
      options: [
        { text: "Derecho de trámite de la licencia de funcionamiento", icono: "📄" },
        { text: "Impuesto General a las Ventas", icono: "🛍️" },
        { text: "Impuesto a la Renta", icono: "📈" },
        { text: "Aporte a EsSalud", icono: "🩺" }
      ],
      answer: 0,
      explain: "Los derechos de trámite y las licencias son tasas: pagas por un servicio concreto."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Los tributos solo pueden crearse por ___.",
      options: ["ley", "costumbre", "contrato", "acuerdo verbal"],
      answer: 0,
      explain: "Es el principio de legalidad (reserva de ley): sin ley no hay tributo."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🔧", nombre: "Juan", texto: "Contraté a mi primer trabajador y cada mes pago a EsSalud el 9 % de su sueldo." },
      prompt: "¿Qué tipo de tributo es el aporte a EsSalud?",
      options: [
        { text: "Contribución", icono: "🏗️" },
        { text: "Impuesto", icono: "🧾" },
        { text: "Tasa", icono: "🏷️" }
      ],
      answer: 0,
      explain: "Los aportes a EsSalud son contribuciones. La SUNAT es quien los recauda."
    },
    {
      type: "tf",
      statement: "Cuando pago un impuesto, el Estado me debe dar un servicio directo a cambio.",
      answer: false,
      explain: "Falso. El impuesto no genera una contraprestación directa; financia servicios para todos."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["El", "IGV", "y", "la", "Renta", "son", "impuestos"],
      extra: ["tasas", "no"],
      explain: "El IGV y la Renta son impuestos."
    }
  ]
};

NAF.CONTENIDO.u1l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "El RUC",
      intro: "El <b>RUC</b> (Registro Único de Contribuyentes) es tu número de identificación ante la SUNAT.",
      puntos: [
        { icono: "🔢", titulo: "11 dígitos", texto: "Personas naturales con negocio: empieza con <b>10</b> e incluye tu DNI. Empresas (personas jurídicas): empieza con <b>20</b>." },
        { icono: "🆓", titulo: "Es gratuito", texto: "Inscribirte no cuesta nada. Si tienes DNI, puedes hacerlo por internet desde la web de la SUNAT." },
        { icono: "🚀", titulo: "¿Quién se inscribe?", texto: "Quien va a iniciar actividades que generan tributos: un negocio, servicios independientes, etc." },
        { icono: "📍", titulo: "Mantenlo actualizado", texto: "Tu domicilio fiscal y tu actividad económica deben estar siempre al día." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué significa RUC?",
      options: [
        { text: "Registro Único de Contribuyentes" },
        { text: "Registro Unificado de Comerciantes" },
        { text: "Recibo Único de Cobranza" },
        { text: "Registro Universal de Ciudadanos" }
      ],
      answer: 0,
      explain: "RUC = Registro Único de Contribuyentes."
    },
    {
      type: "choice",
      prompt: "¿Cuántos dígitos tiene un número de RUC?",
      options: [{ text: "8" }, { text: "11" }, { text: "9" }, { text: "12" }],
      answer: 1,
      explain: "El RUC tiene 11 dígitos. El DNI tiene 8."
    },
    {
      type: "tf",
      statement: "Inscribirse en el RUC tiene un costo.",
      answer: false,
      explain: "Falso. La inscripción en el RUC es totalmente gratuita."
    },
    {
      type: "choice",
      prompt: "Un RUC que empieza con «20» corresponde a…",
      options: [
        { text: "Una empresa (persona jurídica)", icono: "🏢" },
        { text: "Una persona natural con negocio", icono: "🧑🏽" },
        { text: "Un trabajador en planilla", icono: "👷" }
      ],
      answer: 0,
      explain: "Los RUC que empiezan con 20 son de personas jurídicas (por ejemplo, una S.A.C. o una E.I.R.L.)."
    },
    {
      type: "choice",
      escena: { personaje: "🧑🏻‍💼", nombre: "Carlos", texto: "Mi DNI es 45781236. Me inscribí como persona natural con negocio." },
      prompt: "¿Cuál podría ser el RUC de Carlos?",
      options: [
        { text: "10457812361" },
        { text: "20457812361" },
        { text: "45781236" },
        { text: "1045781236" }
      ],
      answer: 0,
      explain: "Persona natural: 10 + DNI (45781236) + un dígito verificador = 11 dígitos."
    },
    {
      type: "match",
      prompt: "Une cada término con su descripción",
      pairs: [
        ["RUC", "Te identifica ante la SUNAT"],
        ["DNI", "Te identifica como persona"],
        ["Domicilio fiscal", "Dirección para notificaciones"],
        ["Actividad económica", "Lo que hace tu negocio"]
      ],
      explain: "Todos estos datos forman parte de tu ficha RUC."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Si voy a iniciar un negocio, primero debo ___ en el RUC.",
      options: ["inscribirme", "darme de baja", "pagar una multa", "esperar un año"],
      answer: 0,
      explain: "Antes de empezar a operar, inscríbete en el RUC."
    },
    {
      type: "tf",
      statement: "Si cambio la dirección de mi negocio, debo actualizar mi domicilio fiscal en el RUC.",
      answer: true,
      explain: "¡Correcto! La SUNAT te notifica en tu domicilio fiscal, por eso debe estar actualizado."
    }
  ]
};

NAF.CONTENIDO.u1l4 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Clave SOL",
      intro: "La <b>Clave SOL</b> (Clave de Operaciones en Línea) es tu usuario y contraseña para entrar a <b>SUNAT Operaciones en Línea</b>.",
      puntos: [
        { icono: "💻", titulo: "¿Qué puedes hacer?", texto: "Emitir comprobantes electrónicos, declarar y pagar, consultar tu información y actualizar tus datos." },
        { icono: "🔑", titulo: "¿Cómo la obtienes?", texto: "Al inscribirte en el RUC o después, por internet con tu DNI o en un Centro de Servicios al Contribuyente." },
        { icono: "🤫", titulo: "Es personal", texto: "Equivale a tu firma. No la compartas: todo lo que se haga con ella es tu responsabilidad." },
        { icono: "📬", titulo: "Buzón electrónico", texto: "Dentro de SOL está tu buzón: allí la SUNAT te notifica. ¡Revísalo seguido!" }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es la Clave SOL?",
      options: [
        { text: "Usuario y contraseña para hacer trámites en línea con la SUNAT", icono: "🔐" },
        { text: "Un impuesto que se paga por internet", icono: "🪙" },
        { text: "El número que aparece en mi DNI", icono: "🪪" }
      ],
      answer: 0,
      explain: "La Clave SOL es tu llave de acceso a SUNAT Operaciones en Línea."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estas acciones puedes hacer con tu Clave SOL?",
      options: [
        { text: "Emitir comprobantes electrónicos", icono: "🧾" },
        { text: "Sacar tu DNI", icono: "🪪" },
        { text: "Pagar el recibo de luz", icono: "💡" },
        { text: "Registrar tu marca", icono: "™️" }
      ],
      answer: 0,
      explain: "Con la Clave SOL emites boletas y facturas electrónicas, declaras, pagas y más."
    },
    {
      type: "tf",
      statement: "Puedo compartir mi Clave SOL con cualquier persona que me ayude con el negocio.",
      answer: false,
      explain: "Falso. Tu Clave SOL es personal y confidencial; lo que se haga con ella es tu responsabilidad."
    },
    {
      type: "choice",
      escena: { personaje: "📧", nombre: "Correo sospechoso", texto: "«SUNAT: actualiza tu Clave SOL en este enlace o serás multado hoy» → bit.ly/sunat-xyz" },
      prompt: "¿Qué deberías hacer?",
      options: [
        { text: "No hacer clic y verificar solo en los canales oficiales de la SUNAT", icono: "🛡️" },
        { text: "Entrar rápido al enlace para evitar la multa", icono: "🏃" },
        { text: "Responder el correo con mi usuario y contraseña", icono: "✉️" }
      ],
      answer: 0,
      explain: "La SUNAT nunca te pedirá tu Clave SOL por correo, mensaje o llamada. Desconfía de los enlaces extraños."
    },
    {
      type: "match",
      prompt: "Une cada término con su descripción",
      pairs: [
        ["Clave SOL", "Usuario y contraseña"],
        ["SOL", "Operaciones en Línea"],
        ["Buzón electrónico", "Recibes notificaciones"],
        ["Comprobante electrónico", "Se emite por internet"]
      ],
      explain: "Estos términos los usarás mucho en tu vida de emprendedor."
    },
    {
      type: "tf",
      statement: "El Buzón Electrónico de SUNAT Operaciones en Línea es un medio por el que la SUNAT te notifica.",
      answer: true,
      explain: "Correcto. Revisa tu buzón con frecuencia para no perderte ninguna notificación."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Mi", "Clave", "SOL", "es", "personal", "y", "confidencial"],
      extra: ["pública", "compartida"],
      explain: "Mi Clave SOL es personal y confidencial."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Revisa tu ___ electrónico con frecuencia.",
      options: ["buzón", "DNI", "recibo", "libro"],
      answer: 0,
      explain: "El buzón electrónico es donde llegan las notificaciones de la SUNAT."
    }
  ]
};

NAF.CONTENIDO.u1l5 = {
  ejercicios: [
    {
      type: "choice",
      prompt: "¿Qué entidad administra el IGV y el Impuesto a la Renta?",
      options: [
        { text: "SUNAT", icono: "🏛️" },
        { text: "Municipalidad", icono: "🏙️" },
        { text: "SUNARP", icono: "📚" },
        { text: "BCRP", icono: "🏦" }
      ],
      answer: 0,
      explain: "La SUNAT administra los tributos internos del Gobierno Nacional, como el IGV y la Renta."
    },
    {
      type: "match",
      prompt: "Une cada pago con su tipo de tributo",
      pairs: [
        ["IGV", "Impuesto"],
        ["Aporte a EsSalud", "Contribución"],
        ["Arbitrios", "Tasa"]
      ],
      explain: "Impuesto, contribución y tasa: los tres tipos de tributo."
    },
    {
      type: "tf",
      statement: "El RUC de una persona natural con negocio empieza con 10.",
      answer: true,
      explain: "Correcto. Las personas jurídicas (empresas) tienen RUC que empieza con 20."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏾‍🎨", nombre: "Lucía", texto: "Voy a vender mis artesanías por redes sociales. ¿Qué hago primero?" },
      prompt: "¿Cuál es el primer paso para que Lucía se formalice ante la SUNAT?",
      options: [
        { text: "Inscribirse en el RUC (gratis)", icono: "🪪" },
        { text: "Pagar una multa preventiva", icono: "💸" },
        { text: "Esperar a vender mucho para recién inscribirse", icono: "⏳" }
      ],
      answer: 0,
      explain: "El primer paso es inscribirse en el RUC. Luego obtendrá su Clave SOL para operar en línea."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "La Clave SOL me permite hacer trámites ___ con la SUNAT.",
      options: ["en línea", "en el banco", "solo presenciales", "por teléfono"],
      answer: 0,
      explain: "SOL significa Operaciones en Línea."
    },
    {
      type: "tf",
      statement: "La SUNAT puede pedirme mi Clave SOL por WhatsApp para verificar mi identidad.",
      answer: false,
      explain: "Falso. La SUNAT nunca pide tu Clave SOL por mensajes, correos o llamadas."
    },
    {
      type: "choice",
      prompt: "¿Cuántos dígitos tiene el RUC y cuántos el DNI?",
      options: [
        { text: "RUC: 11 · DNI: 8" },
        { text: "RUC: 8 · DNI: 11" },
        { text: "RUC: 10 · DNI: 8" },
        { text: "Ambos tienen 11" }
      ],
      answer: 0,
      explain: "RUC: 11 dígitos. DNI: 8 dígitos."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Los", "tributos", "financian", "los", "servicios", "públicos"],
      extra: ["privados", "bancos"],
      explain: "Los tributos financian los servicios públicos."
    },
    {
      type: "choice",
      prompt: "¿Dónde te notifica la SUNAT de forma electrónica?",
      options: [
        { text: "En el Buzón Electrónico de SOL", icono: "📬" },
        { text: "En tus redes sociales", icono: "📱" },
        { text: "En la puerta de tu casa con un cartel", icono: "🚪" }
      ],
      answer: 0,
      explain: "El buzón electrónico, dentro de SUNAT Operaciones en Línea."
    },
    {
      type: "tf",
      statement: "Los tributos solo pueden crearse mediante una ley.",
      answer: true,
      explain: "Correcto: es el principio de legalidad."
    }
  ]
};
