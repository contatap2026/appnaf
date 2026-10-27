/* =========================================================
   UNIDAD 5 — Facturación electrónica
   Comprobante electrónico, emisión de boletas y facturas
   (SEE-SOL / App) y consulta de validez.
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u5l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "¿Qué es un comprobante electrónico?",
      intro: "Un <b>comprobante de pago electrónico</b> es una boleta, factura, nota u otro comprobante que se emite por medios digitales y que la SUNAT puede verificar.",
      puntos: [
        { icono: "📄", titulo: "Tiene el mismo valor", texto: "Vale igual que un comprobante en papel. Es un archivo digital (XML) con tu firma electrónica." },
        { icono: "🖨️", titulo: "Representación impresa", texto: "Es la versión para leer o imprimir (por ejemplo, un PDF con código QR) que le entregas a tu cliente." },
        { icono: "📢", titulo: "¿Es obligatorio?", texto: "La SUNAT designa a quienes deben emitir electrónicamente; hoy la gran mayoría de contribuyentes ya está obligada." },
        { icono: "🛠️", titulo: "¿Desde dónde lo emito?", texto: "Gratis desde <b>SUNAT Operaciones en Línea (SEE-SOL)</b> o desde la <b>app de la SUNAT</b> en tu celular. Negocios más grandes usan sistemas propios o proveedores autorizados." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es un comprobante de pago electrónico?",
      options: [
        { text: "Un comprobante emitido por medios digitales que la SUNAT puede verificar", icono: "💻" },
        { text: "Una foto de una boleta en papel enviada por WhatsApp", icono: "📸" },
        { text: "Un correo con el monto de la venta", icono: "✉️" }
      ],
      answer: 0,
      explain: "Se genera con un sistema autorizado; una foto o un correo con el monto no lo convierten en comprobante electrónico."
    },
    {
      type: "tf",
      statement: "Un comprobante electrónico tiene el mismo valor que uno emitido en papel.",
      answer: true,
      explain: "Correcto. Tiene plena validez tributaria."
    },
    {
      type: "choice",
      prompt: "¿Qué es la representación impresa?",
      options: [
        { text: "La versión legible o imprimible del comprobante electrónico (por ejemplo, un PDF)", icono: "🖨️" },
        { text: "Un comprobante en papel de talonario", icono: "📒" },
        { text: "Una copia que se envía al banco", icono: "🏦" }
      ],
      answer: 0,
      explain: "El comprobante en sí es el archivo electrónico; la representación impresa es la forma de mostrarlo."
    },
    {
      type: "match",
      prompt: "Une cada término con su descripción",
      pairs: [
        ["XML", "El archivo electrónico del comprobante"],
        ["Representación impresa", "PDF o versión para imprimir"],
        ["SEE-SOL", "Emisión gratuita desde SUNAT en línea"],
        ["Código QR", "Permite verificar el comprobante"]
      ],
      explain: "Términos que verás al emitir comprobantes electrónicos."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏾‍🎨", nombre: "Lucía", texto: "Estoy empezando, no tengo dinero para comprar un sistema de facturación." },
      prompt: "¿Cómo puede Lucía emitir comprobantes electrónicos sin costo?",
      options: [
        { text: "Desde SUNAT Operaciones en Línea o la app de la SUNAT, con su Clave SOL", icono: "📲" },
        { text: "Comprando un talonario en una imprenta cualquiera", icono: "📒" },
        { text: "No puede; emitir electrónicamente siempre cuesta", icono: "💸" }
      ],
      answer: 0,
      explain: "SEE-SOL y la app de la SUNAT son gratuitos para los contribuyentes."
    },
    {
      type: "tf",
      statement: "Para emitir comprobantes electrónicos desde SUNAT Operaciones en Línea necesito mi Clave SOL.",
      answer: true,
      explain: "Correcto. Con tu Clave SOL ingresas y emites tus comprobantes."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "La SUNAT ___ a los contribuyentes que deben emitir comprobantes electrónicos.",
      options: ["designa", "sortea", "multa", "olvida"],
      answer: 0,
      explain: "La obligación nace por designación de la SUNAT (o al inscribirte, según la norma vigente)."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["El", "comprobante", "electrónico", "es", "un", "archivo", "XML"],
      extra: ["una", "foto"],
      explain: "El comprobante electrónico es un archivo XML."
    }
  ]
};

NAF.CONTENIDO.u5l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Emite tu boleta electrónica",
      intro: "Emitir una boleta electrónica desde SUNAT Operaciones en Línea toma pocos minutos.",
      puntos: [
        { icono: "1️⃣", titulo: "Ingresa", texto: "Entra a SUNAT Operaciones en Línea con tu RUC, usuario y Clave SOL." },
        { icono: "2️⃣", titulo: "Elige la opción", texto: "Ve a Comprobantes de pago → SEE-SOL → Boleta de venta electrónica → Emitir boleta." },
        { icono: "3️⃣", titulo: "Completa los datos", texto: "Datos del cliente (obligatorio el DNI y nombre si pasa de S/ 700), descripción, cantidad y precio." },
        { icono: "4️⃣", titulo: "Revisa y emite", texto: "Mira la vista previa. Si todo está bien, confirma la emisión." },
        { icono: "5️⃣", titulo: "Entrégala", texto: "Descarga el PDF, imprímelo o envíalo al correo de tu cliente." }
      ]
    },
    {
      type: "match",
      prompt: "Ordena los pasos: une cada paso con su acción",
      pairs: [
        ["Paso 1", "Ingresar con Clave SOL"],
        ["Paso 2", "Elegir «Emitir boleta»"],
        ["Paso 3", "Completar cliente y productos"],
        ["Paso 4", "Revisar la vista previa y emitir"]
      ],
      explain: "Y al final, entregas la boleta a tu cliente (PDF, impresa o por correo)."
    },
    {
      type: "choice",
      prompt: "¿Con qué letra empieza la serie de una boleta electrónica?",
      options: [{ text: "B" }, { text: "F" }, { text: "G" }, { text: "N" }],
      answer: 0,
      explain: "Boleta electrónica: serie B (por ejemplo, B001). Lo viste en la Unidad 4."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏽‍🍳", nombre: "Rosa", texto: "Una clienta me compró una refrigeradora de S/ 1 500 y quiere su boleta electrónica." },
      prompt: "¿Qué datos de la clienta debe incluir Rosa?",
      options: [
        { text: "Su nombre y DNI, porque pasa de S/ 700", icono: "🪪" },
        { text: "Su RUC obligatoriamente", icono: "🔢" },
        { text: "Ninguno", icono: "🙈" }
      ],
      answer: 0,
      explain: "En boletas mayores a S/ 700 se identifica al comprador con nombre y DNI."
    },
    {
      type: "tf",
      statement: "Antes de emitir, es buena práctica revisar la vista previa de la boleta.",
      answer: true,
      explain: "Correcto. Una vez emitida, los errores se corrigen con nota de crédito, no borrando la boleta."
    },
    {
      type: "choice",
      prompt: "¿Cómo puedes entregar la boleta electrónica a tu cliente?",
      options: [
        { text: "Impresa, en PDF o por correo electrónico", icono: "📧" },
        { text: "Solo dictándole el número por teléfono", icono: "☎️" },
        { text: "No se entrega; queda solo en la SUNAT", icono: "🗄️" }
      ],
      answer: 0,
      explain: "Puedes entregar la representación impresa o enviarla por medios electrónicos."
    },
    {
      type: "tf",
      statement: "Si me equivoco en el precio de una boleta electrónica ya emitida, puedo editarla en el sistema y cambiar el monto.",
      answer: false,
      explain: "Falso. Los comprobantes emitidos no se editan: se corrigen con una nota de crédito electrónica."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "La boleta electrónica se emite en SEE-___ con mi Clave SOL.",
      options: ["SOL", "RUC", "IGV", "DNI"],
      answer: 0,
      explain: "SEE-SOL: Sistema de Emisión Electrónica desde SUNAT Operaciones en Línea."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Reviso", "la", "vista", "previa", "antes", "de", "emitir"],
      extra: ["después", "nunca"],
      explain: "Reviso la vista previa antes de emitir."
    }
  ]
};

NAF.CONTENIDO.u5l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Emite tu factura electrónica",
      intro: "La factura electrónica sigue pasos parecidos a la boleta, pero con algunos datos clave.",
      puntos: [
        { icono: "🔢", titulo: "RUC del cliente", texto: "La factura siempre va a nombre de un cliente <b>con RUC</b>: el sistema muestra su razón social." },
        { icono: "➗", titulo: "IGV por separado", texto: "Se detalla el valor de venta, el <b>IGV (18 %)</b> y el importe total." },
        { icono: "📨", titulo: "Envía el XML y el PDF", texto: "Tu cliente necesita el archivo para sustentar su gasto y crédito fiscal." },
        { icono: "✅", titulo: "Validación", texto: "Las facturas se validan ante la SUNAT (o un operador autorizado, OSE). Si emites por SEE-SOL, la validación es inmediata." },
        { icono: "💸", titulo: "Factura negociable", texto: "Una factura electrónica por cobrar puede venderse a una entidad financiera para obtener liquidez (factoring)." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué dato es indispensable para emitir una factura electrónica?",
      options: [
        { text: "El RUC del cliente", icono: "🔢" },
        { text: "La Clave SOL del cliente", icono: "🔐" },
        { text: "El DNI del vendedor", icono: "🪪" }
      ],
      answer: 0,
      explain: "La factura siempre se emite a un cliente con RUC."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🔧", nombre: "Juan", texto: "Vendí herramientas por S/ 1 000 más IGV a una constructora." },
      prompt: "¿Cuál es el importe total de la factura?",
      options: [{ text: "S/ 1 180" }, { text: "S/ 1 000" }, { text: "S/ 1 018" }, { text: "S/ 820" }],
      answer: 0,
      explain: "Valor de venta S/ 1 000 + IGV 18 % (S/ 180) = S/ 1 180."
    },
    {
      type: "tf",
      statement: "En la factura electrónica, el IGV aparece detallado por separado.",
      answer: true,
      explain: "Correcto. Así el cliente puede usarlo como crédito fiscal."
    },
    {
      type: "match",
      prompt: "Une cada parte de la factura con su significado",
      pairs: [
        ["Valor de venta", "Precio sin IGV"],
        ["IGV", "18 % del valor de venta"],
        ["Importe total", "Valor de venta más IGV"],
        ["Serie F001", "Identifica una factura electrónica"]
      ],
      explain: "Saber leer una factura te ayuda a emitirla bien."
    },
    {
      type: "choice",
      prompt: "¿Qué es la factura negociable?",
      options: [
        { text: "Una factura por cobrar que puedes vender a una financiera para obtener dinero antes", icono: "💸" },
        { text: "Una factura cuyo precio se negocia con la SUNAT", icono: "🏛️" },
        { text: "Una factura sin IGV", icono: "🚫" }
      ],
      answer: 0,
      explain: "Es una ventaja de la facturación electrónica: te permite conseguir liquidez (factoring)."
    },
    {
      type: "tf",
      statement: "Si emito una factura desde SEE-SOL, la SUNAT la valida de inmediato.",
      answer: true,
      explain: "Correcto. Al emitirse desde los sistemas de la SUNAT, la validación es inmediata."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Envío a mi cliente el archivo ___ y el PDF de la factura.",
      options: ["XML", "MP3", "ZIP de fotos", "Excel"],
      answer: 0,
      explain: "El XML es el comprobante electrónico; el PDF, su representación impresa."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["La", "factura", "va", "a", "nombre", "de", "un", "RUC"],
      extra: ["DNI", "nunca"],
      explain: "La factura va a nombre de un RUC."
    }
  ]
};

NAF.CONTENIDO.u5l4 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Consulta de validez",
      intro: "¿Te entregaron una factura y quieres saber si es real? La SUNAT te permite comprobarlo <b>gratis</b>.",
      puntos: [
        { icono: "🔍", titulo: "Consulta de validez del CPE", texto: "En la web de la SUNAT ingresas el RUC del emisor, el tipo de comprobante, la serie, el número, la fecha y el monto." },
        { icono: "📱", titulo: "Código QR", texto: "La representación impresa trae un código QR con los datos del comprobante." },
        { icono: "🚩", titulo: "Si no es válido…", texto: "No lo uses para sustentar gastos ni crédito fiscal. Pide al proveedor que emita uno correcto." },
        { icono: "🗄️", titulo: "Guarda tus comprobantes", texto: "Conserva los comprobantes electrónicos que emites y recibes: la SUNAT puede pedirlos." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Para qué sirve la consulta de validez de comprobantes electrónicos?",
      options: [
        { text: "Para verificar que un comprobante fue emitido e informado correctamente", icono: "✅" },
        { text: "Para pagar el IGV", icono: "🏦" },
        { text: "Para cambiar el monto de una factura", icono: "✏️" }
      ],
      answer: 0,
      explain: "Te ayuda a confirmar que el comprobante que recibiste es válido."
    },
    {
      type: "match",
      prompt: "¿Qué datos pide la consulta de validez?",
      pairs: [
        ["RUC del emisor", "Quién lo emitió"],
        ["Serie y número", "Qué comprobante es"],
        ["Fecha de emisión", "Cuándo se emitió"],
        ["Importe total", "Cuánto se pagó"]
      ],
      explain: "Con esos datos, la SUNAT te dice si el comprobante es válido."
    },
    {
      type: "tf",
      statement: "La consulta de validez de comprobantes electrónicos tiene un costo.",
      answer: false,
      explain: "Falso. Es un servicio gratuito de la SUNAT."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Consulté una factura de un proveedor y la SUNAT dice que no existe." },
      prompt: "¿Qué debería hacer Ana?",
      options: [
        { text: "No usarla para crédito fiscal y pedir al proveedor un comprobante válido", icono: "🚩" },
        { text: "Usarla igual, nadie se dará cuenta", icono: "🙈" },
        { text: "Corregirla ella misma en un editor de PDF", icono: "✏️" }
      ],
      answer: 0,
      explain: "Un comprobante no válido no sustenta gastos ni crédito fiscal."
    },
    {
      type: "tf",
      statement: "Debo conservar los comprobantes electrónicos que emito y recibo.",
      answer: true,
      explain: "Correcto. La SUNAT puede solicitarlos en una fiscalización."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "La representación impresa incluye un código ___ para verificar el comprobante.",
      options: ["QR", "postal", "secreto", "Morse"],
      answer: 0,
      explain: "El código QR resume los datos del comprobante."
    },
    {
      type: "choice",
      prompt: "¿Qué combinación es una buena práctica con un proveedor nuevo?",
      options: [
        { text: "Consultar su RUC (activo y habido) y validar sus comprobantes", icono: "🛡️" },
        { text: "Pagar en efectivo sin pedir comprobante", icono: "💵" },
        { text: "Aceptar fotos de facturas como sustento", icono: "📸" }
      ],
      answer: 0,
      explain: "Une lo aprendido en la Unidad 2 (Consulta RUC) con la consulta de validez."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Valido", "las", "facturas", "que", "recibo"],
      extra: ["edito", "nunca"],
      explain: "Valido las facturas que recibo."
    }
  ]
};

NAF.CONTENIDO.u5l5 = {
  ejercicios: [
    {
      type: "choice",
      prompt: "¿Desde dónde puedes emitir comprobantes electrónicos gratis?",
      options: [
        { text: "SUNAT Operaciones en Línea (SEE-SOL) y la app de la SUNAT", icono: "📲" },
        { text: "Solo desde una imprenta autorizada", icono: "🖨️" },
        { text: "Desde cualquier editor de texto", icono: "📝" }
      ],
      answer: 0,
      explain: "Ambos son gratuitos y solo necesitas tu Clave SOL."
    },
    {
      type: "match",
      prompt: "Une cada término con su descripción",
      pairs: [
        ["XML", "El comprobante electrónico"],
        ["PDF con QR", "Representación impresa"],
        ["Nota de crédito electrónica", "Corrige un error"],
        ["Factura negociable", "Liquidez por facturas por cobrar"]
      ],
      explain: "Repaso de la facturación electrónica."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍🎨", nombre: "Valeria", texto: "Mi taller de arte está en el RMT. Vendí un mural a una empresa por S/ 2 000 más IGV." },
      prompt: "¿Cuál es el total de la factura de Valeria?",
      options: [{ text: "S/ 2 360" }, { text: "S/ 2 000" }, { text: "S/ 2 180" }, { text: "S/ 1 640" }],
      answer: 0,
      explain: "S/ 2 000 + 18 % de IGV (S/ 360) = S/ 2 360."
    },
    {
      type: "tf",
      statement: "Puedo editar una factura electrónica ya emitida si me equivoqué en el monto.",
      answer: false,
      explain: "Falso. Se corrige con una nota de crédito o débito electrónica."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "La serie de una factura electrónica empieza con la letra ___.",
      options: ["F", "B", "R", "S"],
      answer: 0,
      explain: "F para facturas, B para boletas."
    },
    {
      type: "choice",
      prompt: "Recibes una factura dudosa. ¿Qué haces primero?",
      options: [
        { text: "Verificarla en la consulta de validez de la SUNAT", icono: "🔍" },
        { text: "Registrarla igual en tus compras", icono: "📒" },
        { text: "Romperla", icono: "🗑️" }
      ],
      answer: 0,
      explain: "La consulta de validez es gratuita y rápida."
    },
    {
      type: "tf",
      statement: "En una boleta electrónica de S/ 900 debo consignar el nombre y DNI del cliente.",
      answer: true,
      explain: "Correcto: supera S/ 700."
    },
    {
      type: "choice",
      prompt: "¿Qué necesita tu cliente empresa para sustentar su crédito fiscal?",
      options: [
        { text: "La factura electrónica válida (XML) a nombre de su RUC", icono: "📄" },
        { text: "Una boleta con su DNI", icono: "🧾" },
        { text: "Un mensaje de WhatsApp con el monto", icono: "💬" }
      ],
      answer: 0,
      explain: "La factura electrónica válida a su nombre es el sustento."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Emito", "mis", "comprobantes", "con", "mi", "Clave", "SOL"],
      extra: ["ajena", "prestada"],
      explain: "Emito mis comprobantes con mi Clave SOL."
    },
    {
      type: "tf",
      statement: "La representación impresa de un comprobante electrónico puede entregarse en PDF.",
      answer: true,
      explain: "Correcto. También puede imprimirse o enviarse por correo."
    }
  ]
};
