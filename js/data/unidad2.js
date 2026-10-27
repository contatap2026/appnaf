/* =========================================================
   UNIDAD 2 — Tu RUC al día
   Estados del RUC, condición del domicilio fiscal,
   actualización de datos, Ficha RUC y Consulta RUC.
   (Mismos tipos de ejercicio que la Unidad 1.)
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u2l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Los estados del RUC",
      intro: "Tu RUC tiene un <b>estado</b> que indica si tu negocio está operando. Son tres:",
      puntos: [
        { icono: "🟢", titulo: "Activo", texto: "Tu negocio está funcionando con normalidad. Es el estado al inscribirte." },
        { icono: "🟡", titulo: "Suspensión temporal de actividades", texto: "Dejaste de operar por un tiempo, pero piensas volver. Se comunica a la SUNAT y luego se pide el <b>reinicio de actividades</b>." },
        { icono: "🔴", titulo: "Baja de inscripción", texto: "Cerraste tu negocio en forma definitiva. Puede pedirla el contribuyente o hacerla la SUNAT de oficio." },
        { icono: "📣", titulo: "¡Comunícalo!", texto: "Si dejas de operar o cierras, avisa a la SUNAT. Si no lo haces, tus obligaciones (como declarar) siguen vigentes." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Cuál es el estado del RUC cuando tu negocio funciona con normalidad?",
      options: [
        { text: "Activo", icono: "🟢" },
        { text: "Suspensión temporal", icono: "🟡" },
        { text: "Baja de inscripción", icono: "🔴" }
      ],
      answer: 0,
      explain: "Al inscribirte, tu RUC queda en estado Activo."
    },
    {
      type: "match",
      prompt: "Une cada estado con su situación",
      pairs: [
        ["Activo", "Opero con normalidad"],
        ["Suspensión temporal", "Paro un tiempo y vuelvo"],
        ["Baja de inscripción", "Cierro para siempre"]
      ],
      explain: "Activo, suspensión temporal y baja: los tres estados del RUC."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍🌾", nombre: "Marta", texto: "Vendo helados en la playa, pero en invierno cierro mi puesto unos meses y en verano vuelvo." },
      prompt: "¿Qué le conviene comunicar a Marta cuando cierra en invierno?",
      options: [
        { text: "Suspensión temporal de actividades", icono: "🟡" },
        { text: "Baja de inscripción del RUC", icono: "🔴" },
        { text: "Nada, simplemente deja de declarar", icono: "🙈" }
      ],
      answer: 0,
      explain: "Como piensa volver, corresponde la suspensión temporal. En verano pedirá el reinicio de actividades."
    },
    {
      type: "tf",
      statement: "Si dejo de vender pero no aviso a la SUNAT, mis obligaciones tributarias desaparecen automáticamente.",
      answer: false,
      explain: "Falso. Mientras tu RUC siga activo, mantienes tus obligaciones, como presentar declaraciones."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Después de una suspensión temporal, para volver a operar pido el ___ de actividades.",
      options: ["reinicio", "cierre", "fraccionamiento", "embargo"],
      answer: 0,
      explain: "El reinicio de actividades devuelve tu RUC al estado Activo."
    },
    {
      type: "choice",
      prompt: "¿Qué estado corresponde si cierras tu negocio definitivamente?",
      options: [
        { text: "Baja de inscripción", icono: "🔴" },
        { text: "Suspensión temporal", icono: "🟡" },
        { text: "No habido", icono: "🏚️" }
      ],
      answer: 0,
      explain: "La baja es el cierre definitivo. Ojo: «no habido» no es un estado, es una condición del domicilio (lo verás en la siguiente lección)."
    },
    {
      type: "tf",
      statement: "La SUNAT puede dar de baja un RUC de oficio, es decir, sin que el contribuyente lo pida.",
      answer: true,
      explain: "Correcto. Por ejemplo, cuando detecta que no hay actividad económica. Igual, lo ideal es que tú lo comuniques."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Si", "cierro", "mi", "negocio", "pido", "la", "baja"],
      extra: ["suspensión", "nunca"],
      explain: "Si cierro mi negocio, pido la baja."
    }
  ]
};

NAF.CONTENIDO.u2l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Habido y no habido",
      intro: "Además del estado, tu RUC muestra la <b>condición de tu domicilio fiscal</b>: si la SUNAT puede ubicarte ahí o no.",
      puntos: [
        { icono: "🏠", titulo: "Habido", texto: "La SUNAT te ubica sin problemas en tu domicilio fiscal. ¡Es la condición ideal!" },
        { icono: "📭", titulo: "No hallado", texto: "La SUNAT intentó notificarte y no pudo: dirección inexistente, nadie atendió o se negaron a recibir." },
        { icono: "🏚️", titulo: "No habido", texto: "Si eres «no hallado» y no lo corriges, puedes pasar a <b>no habido</b>. Esto trae restricciones, por ejemplo para acceder a fraccionamientos." },
        { icono: "🔧", titulo: "¿Cómo recuperar la condición de habido?", texto: "Confirma o actualiza tu domicilio fiscal ante la SUNAT (en línea con Clave SOL o en un Centro de Servicios). La SUNAT lo verificará." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué indica la condición «habido»?",
      options: [
        { text: "Que la SUNAT te puede ubicar en tu domicilio fiscal", icono: "🏠" },
        { text: "Que tienes deudas pendientes", icono: "💸" },
        { text: "Que tu negocio está cerrado", icono: "🔒" }
      ],
      answer: 0,
      explain: "Habido = la SUNAT te encuentra en tu domicilio fiscal."
    },
    {
      type: "tf",
      statement: "«No habido» es lo mismo que «baja de inscripción».",
      answer: false,
      explain: "Falso. La baja es un estado del RUC (cierre); no habido es una condición del domicilio fiscal (no te ubican)."
    },
    {
      type: "match",
      prompt: "Une cada condición con su significado",
      pairs: [
        ["Habido", "Te ubican sin problemas"],
        ["No hallado", "Falló la notificación"],
        ["No habido", "No te ubican y no lo corregiste"]
      ],
      explain: "Habido, no hallado y no habido son condiciones del domicilio fiscal."
    },
    {
      type: "choice",
      escena: { personaje: "🧔🏽", nombre: "Pedro", texto: "Me mudé hace un año y nunca cambié mi dirección en la SUNAT. Ahora mi RUC dice «no habido»." },
      prompt: "¿Qué debe hacer Pedro?",
      options: [
        { text: "Actualizar o confirmar su domicilio fiscal ante la SUNAT", icono: "📍" },
        { text: "Sacar un nuevo RUC con otro número", icono: "🆕" },
        { text: "Esperar, se corrige solo con el tiempo", icono: "⏳" }
      ],
      answer: 0,
      explain: "Debe declarar su domicilio fiscal correcto. Tras la verificación de la SUNAT, recuperará la condición de habido."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estas situaciones puede hacer que seas «no hallado»?",
      options: [
        { text: "La dirección declarada no existe", icono: "❓" },
        { text: "Pagaste tus impuestos a tiempo", icono: "✅" },
        { text: "Emitiste una boleta electrónica", icono: "🧾" }
      ],
      answer: 0,
      explain: "Una dirección inexistente, la ausencia de personas o la negativa a recibir la notificación pueden generar la condición de no hallado."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Ser no habido trae ___ para mi negocio.",
      options: ["restricciones", "descuentos", "premios", "créditos"],
      answer: 0,
      explain: "Ser no habido limita tu acceso a algunos beneficios y trámites, y genera desconfianza en tus clientes."
    },
    {
      type: "tf",
      statement: "La condición del domicilio fiscal (habido o no habido) aparece en la Consulta RUC que cualquiera puede ver.",
      answer: true,
      explain: "Correcto. Tus clientes y proveedores pueden ver si eres habido. ¡Cuida tu imagen!"
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Mantén", "tu", "domicilio", "fiscal", "actualizado"],
      extra: ["oculto", "antiguo"],
      explain: "Mantén tu domicilio fiscal actualizado."
    }
  ]
};

NAF.CONTENIDO.u2l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Actualiza tus datos",
      intro: "Tu RUC es como tu «carta de presentación». Cada vez que algo cambie en tu negocio, <b>comunícalo a la SUNAT</b>.",
      puntos: [
        { icono: "📍", titulo: "Domicilio fiscal", texto: "Si te mudas, actualízalo. Es donde la SUNAT te notifica." },
        { icono: "🏪", titulo: "Establecimientos anexos", texto: "Locales distintos a tu domicilio fiscal: otra tienda, un almacén, un taller. También se declaran." },
        { icono: "🔄", titulo: "Actividad económica", texto: "Si cambias de rubro (por ejemplo, de bodega a restaurante), actualízala." },
        { icono: "📱", titulo: "Teléfono y correo", texto: "Mantén tus datos de contacto al día para recibir alertas." },
        { icono: "⚠️", titulo: "Ojo", texto: "No comunicar los cambios a tiempo es una <b>infracción</b> que puede generar una multa. Muchos cambios se hacen en línea con tu Clave SOL." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es un establecimiento anexo?",
      options: [
        { text: "Un local distinto a tu domicilio fiscal donde realizas actividades", icono: "🏪" },
        { text: "Un documento que acompaña a la factura", icono: "📎" },
        { text: "El domicilio de tu contador", icono: "🧮" }
      ],
      answer: 0,
      explain: "Tiendas, almacenes, talleres u oficinas adicionales son establecimientos anexos y se declaran en el RUC."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍🍳", nombre: "Luis", texto: "Tenía una bodega, pero ahora la convertí en un restaurante de menús." },
      prompt: "¿Qué dato de su RUC debe actualizar Luis?",
      options: [
        { text: "Su actividad económica", icono: "🔄" },
        { text: "Su número de DNI", icono: "🪪" },
        { text: "Ninguno, el RUC no cambia nunca", icono: "🚫" }
      ],
      answer: 0,
      explain: "Al cambiar de rubro, debe actualizar su actividad económica."
    },
    {
      type: "tf",
      statement: "No comunicar a la SUNAT los cambios en mis datos del RUC puede ser una infracción.",
      answer: true,
      explain: "Correcto. Comunicar los cambios a tiempo te evita multas."
    },
    {
      type: "match",
      prompt: "Une cada cambio con el dato que actualizas",
      pairs: [
        ["Me mudé de casa-taller", "Domicilio fiscal"],
        ["Abrí un almacén", "Establecimiento anexo"],
        ["Cambié de rubro", "Actividad económica"],
        ["Tengo nuevo celular", "Datos de contacto"]
      ],
      explain: "Cada cambio en tu negocio tiene su dato en el RUC."
    },
    {
      type: "choice",
      prompt: "¿Cómo puedes actualizar muchos de tus datos del RUC?",
      options: [
        { text: "En línea, con tu Clave SOL", icono: "💻" },
        { text: "Enviando un mensaje por redes sociales a la SUNAT", icono: "📱" },
        { text: "Contándole a tu contador y nada más", icono: "🗣️" }
      ],
      answer: 0,
      explain: "SUNAT Operaciones en Línea te permite actualizar varios datos. Otros trámites se hacen en un Centro de Servicios."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Cuando cambio algo en mi negocio, lo debo ___ a la SUNAT.",
      options: ["comunicar", "ocultar", "vender", "posponer"],
      answer: 0,
      explain: "Comunicar los cambios mantiene tu RUC al día."
    },
    {
      type: "tf",
      statement: "Si abro una segunda tienda, no necesito informarlo porque ya tengo un domicilio fiscal.",
      answer: false,
      explain: "Falso. La segunda tienda es un establecimiento anexo y debe declararse en el RUC."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Mi", "RUC", "debe", "estar", "siempre", "al", "día"],
      extra: ["nunca", "vencido"],
      explain: "Mi RUC debe estar siempre al día."
    }
  ]
};

NAF.CONTENIDO.u2l4 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Ficha RUC y Consulta RUC",
      intro: "Hay dos herramientas para revisar información del RUC: una para ti y otra pública para cualquiera.",
      puntos: [
        { icono: "📄", titulo: "Ficha RUC", texto: "Documento con <b>todos tus datos registrados</b>: domicilio, actividades, locales, tributos afectos y más. Lo obtienes con tu Clave SOL." },
        { icono: "🔎", titulo: "Consulta RUC", texto: "Servicio <b>gratuito y público</b> en la web de la SUNAT. Con un número de RUC (o nombre) ves razón social, estado, condición y domicilio fiscal." },
        { icono: "🛡️", titulo: "¿Para qué te sirve?", texto: "Antes de comprarle a un proveedor nuevo, verifica que su RUC esté <b>activo</b> y <b>habido</b>." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es la Ficha RUC?",
      options: [
        { text: "Un documento con todos los datos que registraste en tu RUC", icono: "📄" },
        { text: "Un comprobante de pago para tus clientes", icono: "🧾" },
        { text: "Una multa por no actualizar datos", icono: "⚠️" }
      ],
      answer: 0,
      explain: "La Ficha RUC resume tu información registrada ante la SUNAT."
    },
    {
      type: "tf",
      statement: "La Consulta RUC es gratuita y cualquier persona puede usarla.",
      answer: true,
      explain: "Correcto. Es un servicio público en la web de la SUNAT."
    },
    {
      type: "choice",
      prompt: "¿Qué información puedes ver en la Consulta RUC de un proveedor?",
      options: [
        { text: "Su estado, condición y domicilio fiscal", icono: "🔎" },
        { text: "Su Clave SOL", icono: "🔐" },
        { text: "Sus cuentas bancarias y ahorros", icono: "🏦" }
      ],
      answer: 0,
      explain: "La Consulta RUC muestra datos públicos como razón social, estado, condición y domicilio fiscal. Nunca datos privados."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Un proveedor nuevo me ofrece mercadería barata y me dará factura. Su RUC aparece en estado «Baja de inscripción»." },
      prompt: "¿Qué debería pensar Ana?",
      options: [
        { text: "Hay que tener cuidado: un RUC de baja no debería estar operando", icono: "🚩" },
        { text: "Todo bien, el estado del RUC no importa", icono: "👍" },
        { text: "Es mejor, así no paga impuestos", icono: "🤑" }
      ],
      answer: 0,
      explain: "Verifica siempre a tus proveedores: lo recomendable es que su RUC esté activo y habido."
    },
    {
      type: "match",
      prompt: "Une cada herramienta con su característica",
      pairs: [
        ["Ficha RUC", "Tus datos completos"],
        ["Consulta RUC", "Pública y gratuita"],
        ["Clave SOL", "Acceso personal"]
      ],
      explain: "Con tu Clave SOL obtienes tu Ficha RUC; la Consulta RUC la puede usar cualquiera."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Antes de comprarle a un proveedor nuevo, verifico su ___ en la web de la SUNAT.",
      options: ["RUC", "Clave SOL", "sueldo", "contraseña"],
      answer: 0,
      explain: "Con la Consulta RUC verificas estado y condición del proveedor."
    },
    {
      type: "tf",
      statement: "Lo ideal es que mis proveedores tengan RUC activo y condición de habido.",
      answer: true,
      explain: "¡Exacto! Así trabajas con negocios formales y ubicables."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Verifico", "el", "RUC", "de", "mis", "proveedores"],
      extra: ["nunca", "ocultos"],
      explain: "Verifico el RUC de mis proveedores."
    }
  ]
};

NAF.CONTENIDO.u2l5 = {
  ejercicios: [
    {
      type: "choice",
      prompt: "¿Cuáles son los estados del RUC?",
      options: [
        { text: "Activo, suspensión temporal y baja de inscripción" },
        { text: "Habido, no hallado y no habido" },
        { text: "Nuevo, usado y vencido" }
      ],
      answer: 0,
      explain: "Habido, no hallado y no habido son condiciones del domicilio, no estados."
    },
    {
      type: "match",
      prompt: "¿Estado o condición?",
      pairs: [
        ["Activo", "Estado del RUC"],
        ["No habido", "Condición del domicilio"],
        ["Ficha RUC", "Tus datos registrados"],
        ["Establecimiento anexo", "Otro local del negocio"]
      ],
      explain: "Diferenciar estado y condición es clave para leer un RUC."
    },
    {
      type: "choice",
      escena: { personaje: "🧑🏾‍🔧", nombre: "Jorge", texto: "Voy a cerrar mi taller tres meses por remodelación y luego vuelvo a abrir." },
      prompt: "¿Qué debe comunicar Jorge?",
      options: [
        { text: "Suspensión temporal de actividades", icono: "🟡" },
        { text: "Baja de inscripción", icono: "🔴" },
        { text: "Cambio de actividad económica", icono: "🔄" }
      ],
      answer: 0,
      explain: "Es un cierre temporal: suspensión. Al volver, pedirá el reinicio de actividades."
    },
    {
      type: "tf",
      statement: "Si la SUNAT no me encuentra en mi domicilio fiscal, podría quedar como no hallado y luego no habido.",
      answer: true,
      explain: "Correcto. Por eso tu domicilio fiscal debe ser real y estar actualizado."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Para dejar de ser no habido debo confirmar o actualizar mi ___ fiscal.",
      options: ["domicilio", "comprobante", "régimen", "libro"],
      answer: 0,
      explain: "Al declarar un domicilio fiscal correcto, la SUNAT lo verifica y recuperas la condición de habido."
    },
    {
      type: "choice",
      prompt: "Abriste un almacén aparte de tu tienda. ¿Qué haces?",
      options: [
        { text: "Lo declaro como establecimiento anexo", icono: "🏪" },
        { text: "Saco otro RUC para el almacén", icono: "🆕" },
        { text: "No hago nada, es solo un almacén", icono: "🤷" }
      ],
      answer: 0,
      explain: "Todo local adicional se declara como establecimiento anexo en el mismo RUC."
    },
    {
      type: "tf",
      statement: "La Consulta RUC muestra la Clave SOL del contribuyente.",
      answer: false,
      explain: "Falso. La Clave SOL es privada. La Consulta RUC solo muestra datos públicos."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Un", "RUC", "activo", "y", "habido", "da", "confianza"],
      extra: ["miedo", "baja"],
      explain: "Un RUC activo y habido da confianza."
    },
    {
      type: "choice",
      prompt: "¿Qué pasa si no comunicas un cambio de domicilio fiscal?",
      options: [
        { text: "Puedes cometer una infracción y quedar como no hallado o no habido", icono: "⚠️" },
        { text: "La SUNAT lo actualiza sola sin avisarte", icono: "🪄" },
        { text: "Nada, es un dato sin importancia", icono: "🤷" }
      ],
      answer: 0,
      explain: "Comunicar los cambios a tiempo evita multas y problemas de notificación."
    },
    {
      type: "tf",
      statement: "Pedir la baja de inscripción es lo correcto cuando cierro mi negocio para siempre.",
      answer: true,
      explain: "Correcto. Así dejas en orden tu situación ante la SUNAT."
    }
  ]
};
