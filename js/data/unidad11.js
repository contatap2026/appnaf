/* =========================================================
   UNIDAD 11 — Infracciones y multas
   Infracciones más comunes, tipos de sanción, la UIT en
   las multas y el régimen de gradualidad.
   ========================================================= */
window.NAF = window.NAF || {};
NAF.CONTENIDO = NAF.CONTENIDO || {};

NAF.CONTENIDO.u11l1 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Infracciones más comunes",
      intro: "Una <b>infracción tributaria</b> es no cumplir una obligación tributaria que la ley establece. El Código Tributario las agrupa así:",
      puntos: [
        { icono: "🪪", titulo: "RUC", texto: "No inscribirte, o no actualizar tus datos (por ejemplo, tu domicilio fiscal)." },
        { icono: "🧾", titulo: "Comprobantes", texto: "No emitir o no entregar comprobantes; trasladar bienes sin guía de remisión." },
        { icono: "📚", titulo: "Libros", texto: "No llevarlos o llevarlos con atraso." },
        { icono: "🖥️", titulo: "Declaraciones", texto: "No presentarlas a tiempo." },
        { icono: "🚪", titulo: "Control y otras", texto: "No atender a la SUNAT cuando te fiscaliza, declarar cifras falsas o no pagar las retenciones que hiciste." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es una infracción tributaria?",
      options: [
        { text: "No cumplir una obligación tributaria establecida en la ley", icono: "⚠️" },
        { text: "Pagar los impuestos antes de tiempo", icono: "⏩" },
        { text: "Pedir orientación en el NAF", icono: "🎓" }
      ],
      answer: 0,
      explain: "Toda acción u omisión que vulnere las normas tributarias, si está tipificada en la ley."
    },
    {
      type: "match",
      prompt: "Une cada obligación con su infracción",
      pairs: [
        ["RUC", "No actualizar el domicilio fiscal"],
        ["Comprobantes", "No entregar boleta"],
        ["Libros", "Llevarlos atrasados"],
        ["Declaraciones", "Presentarlas fuera de plazo"]
      ],
      explain: "Casi todo lo que viste en el curso tiene una infracción asociada si no se cumple."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏻‍🍳", nombre: "Luis", texto: "Un cliente pagó su almuerzo y se fue sin boleta porque no la pidió." },
      prompt: "¿Cometió Luis una infracción?",
      options: [
        { text: "Sí, debe entregar el comprobante aunque no se lo pidan", icono: "🧾" },
        { text: "No, si el cliente no lo pide no hay obligación", icono: "🤷" },
        { text: "Solo si el almuerzo costó más de S/ 1 000", icono: "💰" }
      ],
      answer: 0,
      explain: "No otorgar comprobante es una de las infracciones más fiscalizadas (Unidad 4)."
    },
    {
      type: "tf",
      statement: "Trasladar mercadería sin guía de remisión puede ser una infracción.",
      answer: true,
      explain: "Correcto. La guía sustenta el traslado (Unidad 4)."
    },
    {
      type: "tf",
      statement: "Si la SUNAT me cita para una fiscalización, puedo ignorarla sin consecuencias.",
      answer: false,
      explain: "Falso. No permitir el control o no comparecer ante la SUNAT también es infracción."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estas NO es una infracción?",
      options: [
        { text: "Declarar y pagar el último día del cronograma", icono: "✅" },
        { text: "No presentar la declaración mensual", icono: "🖥️" },
        { text: "No comunicar el cambio de domicilio fiscal", icono: "📍" }
      ],
      answer: 0,
      explain: "Cumplir el último día sigue siendo cumplir a tiempo."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Las infracciones tributarias están establecidas en el Código ___.",
      options: ["Tributario", "Penal", "Civil", "de Tránsito"],
      answer: 0,
      explain: "El Código Tributario define las infracciones y sus sanciones."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Cumplir", "a", "tiempo", "evita", "infracciones"],
      extra: ["genera", "multas"],
      explain: "Cumplir a tiempo evita infracciones."
    }
  ]
};

NAF.CONTENIDO.u11l2 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "La UIT y las multas",
      intro: "Las sanciones tributarias pueden ser de varios tipos. La más común es la <b>multa</b>, que muchas veces se calcula en <b>UIT</b>.",
      puntos: [
        { icono: "💰", titulo: "Tipos de sanción", texto: "<b>Multa</b>, <b>cierre temporal</b> del local, <b>comiso</b> de bienes e <b>internamiento temporal</b> de vehículos." },
        { icono: "📐", titulo: "Multas en UIT", texto: "Ejemplo: no presentar una declaración a tiempo se sanciona con <b>1 UIT</b> en el Régimen General y el RMT, y con <b>50 % de la UIT</b> en el RER y para personas naturales." },
        { icono: "🔻", titulo: "Multa mínima", texto: "Ninguna multa puede ser menor al <b>5 % de la UIT</b>." },
        { icono: "📈", titulo: "Intereses", texto: "Las multas generan intereses moratorios hasta que se pagan." },
        { icono: "🧮", titulo: "Valor de la UIT", texto: "Cambia cada año. Para los ejercicios usaremos la de 2025: <b>S/ 5 350</b>. Revisa el valor vigente." }
      ]
    },
    {
      type: "match",
      prompt: "Une cada sanción con su significado",
      pairs: [
        ["Multa", "Pago de dinero"],
        ["Cierre temporal", "El local no puede atender unos días"],
        ["Comiso", "Retención de bienes"],
        ["Internamiento", "Retención del vehículo"]
      ],
      explain: "La multa es la sanción más común, pero no la única."
    },
    {
      type: "choice",
      prompt: "Con una UIT de S/ 5 350, ¿cuánto es una multa de 1 UIT?",
      options: [{ text: "S/ 5 350" }, { text: "S/ 2 675" }, { text: "S/ 535" }, { text: "S/ 10 700" }],
      answer: 0,
      explain: "1 UIT = S/ 5 350 (valor 2025)."
    },
    {
      type: "choice",
      prompt: "Con una UIT de S/ 5 350, ¿cuánto es una multa de 50 % de la UIT?",
      options: [{ text: "S/ 2 675" }, { text: "S/ 5 350" }, { text: "S/ 267,50" }, { text: "S/ 1 337,50" }],
      answer: 0,
      explain: "50 % × S/ 5 350 = S/ 2 675."
    },
    {
      type: "tf",
      statement: "Ninguna multa tributaria puede ser menor al 5 % de la UIT.",
      answer: true,
      explain: "Correcto. Es la multa mínima que establece el Código Tributario."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍💻", nombre: "Diego", texto: "Mi empresa está en el RMT y olvidé presentar la declaración mensual de agosto." },
      prompt: "¿Cuál es la multa base por no declarar a tiempo?",
      options: [
        { text: "1 UIT", icono: "📐" },
        { text: "50 % de la UIT", icono: "➗" },
        { text: "No hay multa", icono: "🙅" }
      ],
      answer: 0,
      explain: "En el Régimen General y el RMT (Tabla I) es 1 UIT. Ojo: con la gradualidad puede rebajarse mucho (siguiente lección)."
    },
    {
      type: "tf",
      statement: "Las multas no generan intereses aunque las pague tarde.",
      answer: false,
      explain: "Falso. Las multas generan intereses moratorios hasta que se pagan."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "El valor de la UIT ___ cada año.",
      options: ["cambia", "desaparece", "se duplica siempre", "nunca cambia"],
      answer: 0,
      explain: "El Estado la fija cada año."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Las", "multas", "se", "calculan", "en", "UIT"],
      extra: ["dólares", "nunca"],
      explain: "Las multas se calculan en UIT."
    }
  ]
};

NAF.CONTENIDO.u11l3 = {
  ejercicios: [
    {
      type: "teoria",
      titulo: "Régimen de gradualidad",
      intro: "¿Cometiste una infracción? No todo está perdido. El <b>régimen de gradualidad</b> rebaja las multas si <b>corriges tu error</b> (subsanas).",
      puntos: [
        { icono: "🏃", titulo: "Subsanación voluntaria", texto: "Corriges <b>antes</b> de que la SUNAT te notifique. Es cuando obtienes la mayor rebaja: por ejemplo, por declarar tarde puede llegar al <b>90 %</b> si además pagas la multa." },
        { icono: "📬", titulo: "Subsanación inducida", texto: "Corriges <b>después</b> de que la SUNAT te notificó, dentro del plazo que te da. La rebaja es menor." },
        { icono: "💵", titulo: "Pagar ayuda", texto: "En muchos casos, la rebaja es mayor si además <b>pagas la multa</b> (con sus intereses)." },
        { icono: "📝", titulo: "¿No estás de acuerdo?", texto: "Puedes presentar un <b>reclamo</b> contra la multa, en general dentro de 20 días hábiles de notificada." }
      ]
    },
    {
      type: "choice",
      prompt: "¿Qué es el régimen de gradualidad?",
      options: [
        { text: "Un sistema que rebaja las multas si corriges la infracción", icono: "📉" },
        { text: "Un aumento de las multas cada mes", icono: "📈" },
        { text: "Un nuevo régimen tributario como el RMT", icono: "🧭" }
      ],
      answer: 0,
      explain: "Premia al contribuyente que corrige su error."
    },
    {
      type: "match",
      prompt: "Une cada tipo de subsanación con su momento",
      pairs: [
        ["Voluntaria", "Antes de que la SUNAT te notifique"],
        ["Inducida", "Después de la notificación, dentro del plazo"]
      ],
      explain: "Mientras antes corrijas, mayor la rebaja."
    },
    {
      type: "choice",
      escena: { personaje: "👨🏽‍💻", nombre: "Diego", texto: "Me di cuenta de que no presenté la declaración de agosto. La SUNAT todavía no me ha notificado nada." },
      prompt: "¿Qué le conviene hacer a Diego?",
      options: [
        { text: "Presentar la declaración y pagar la multa rebajada cuanto antes", icono: "🏃" },
        { text: "Esperar a que la SUNAT le notifique", icono: "⏳" },
        { text: "Cambiar de RUC", icono: "🆕" }
      ],
      answer: 0,
      explain: "Subsanar voluntariamente y pagar le da la mayor rebaja (hasta 90 % en este caso)."
    },
    {
      type: "choice",
      prompt: "Una multa de 1 UIT (S/ 5 350) con una rebaja del 90 %. ¿Cuánto pagas (sin intereses)?",
      options: [{ text: "S/ 535" }, { text: "S/ 4 815" }, { text: "S/ 2 675" }, { text: "S/ 0" }],
      answer: 0,
      explain: "10 % de S/ 5 350 = S/ 535."
    },
    {
      type: "tf",
      statement: "La rebaja suele ser mayor si subsano antes de que la SUNAT me notifique.",
      answer: true,
      explain: "Correcto. Es la subsanación voluntaria."
    },
    {
      type: "tf",
      statement: "Si no estoy de acuerdo con una multa, no tengo ninguna forma de reclamar.",
      answer: false,
      explain: "Falso. Puedes presentar un reclamo, en general dentro de 20 días hábiles de notificada la multa."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Corregir una infracción se llama ___.",
      options: ["subsanar", "prescribir", "fraccionar", "exportar"],
      answer: 0,
      explain: "Subsanar = corregir la infracción (por ejemplo, presentar la declaración omitida)."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["Si", "me", "equivoco", "subsano", "cuanto", "antes"],
      extra: ["espero", "nunca"],
      explain: "Si me equivoco, subsano cuanto antes."
    }
  ]
};

NAF.CONTENIDO.u11l4 = {
  ejercicios: [
    {
      type: "match",
      prompt: "Une cada infracción con su grupo",
      pairs: [
        ["No inscribirse en el RUC", "RUC"],
        ["No entregar boleta", "Comprobantes"],
        ["Libros con atraso", "Libros"],
        ["Declarar fuera de plazo", "Declaraciones"]
      ],
      explain: "Repaso de los grupos de infracciones."
    },
    {
      type: "choice",
      prompt: "¿Cuál NO es un tipo de sanción tributaria?",
      options: [
        { text: "Prisión por olvidar una declaración", icono: "🚫" },
        { text: "Multa", icono: "💰" },
        { text: "Cierre temporal del local", icono: "🔒" },
        { text: "Comiso de bienes", icono: "📦" }
      ],
      answer: 0,
      explain: "Las sanciones administrativas son multa, cierre, comiso e internamiento. Los delitos tributarios (como la defraudación) son otra cosa."
    },
    {
      type: "tf",
      statement: "En el RER y para personas naturales, la multa por no declarar a tiempo es 50 % de la UIT.",
      answer: true,
      explain: "Correcto (Tabla II). En el Régimen General y el RMT es 1 UIT (Tabla I)."
    },
    {
      type: "choice",
      prompt: "Con una UIT de S/ 5 350, ¿cuál es la multa mínima (5 % de la UIT)?",
      options: [{ text: "S/ 267,50" }, { text: "S/ 535" }, { text: "S/ 53,50" }, { text: "S/ 2 675" }],
      answer: 0,
      explain: "5 % × S/ 5 350 = S/ 267,50."
    },
    {
      type: "choice",
      escena: { personaje: "👩🏻‍💼", nombre: "Ana", texto: "Hoy me llegó al buzón SOL una notificación por no haber declarado un mes." },
      prompt: "¿Qué tipo de subsanación le queda a Ana?",
      options: [
        { text: "Inducida: corregir dentro del plazo que le da la SUNAT", icono: "📬" },
        { text: "Voluntaria, porque aún no pagó", icono: "🏃" },
        { text: "Ninguna, ya no puede hacer nada", icono: "🙅" }
      ],
      answer: 0,
      explain: "Ya fue notificada: si corrige dentro del plazo, aún obtiene una rebaja, aunque menor."
    },
    {
      type: "fill",
      prompt: "Completa la frase",
      sentence: "Revisar mi ___ electrónico me ayuda a enterarme a tiempo de las notificaciones.",
      options: ["buzón", "libro", "cronograma", "recibo"],
      answer: 0,
      explain: "Las notificaciones de la SUNAT llegan al buzón electrónico (Unidad 1)."
    },
    {
      type: "tf",
      statement: "Las multas se pagan sin intereses aunque pasen meses.",
      answer: false,
      explain: "Falso. Generan intereses moratorios."
    },
    {
      type: "choice",
      prompt: "¿Cuál es la mejor forma de evitar multas?",
      options: [
        { text: "Cumplir a tiempo: RUC al día, comprobantes, libros y declaraciones", icono: "✅" },
        { text: "Cambiar de domicilio fiscal cada mes", icono: "🏃" },
        { text: "No abrir el buzón electrónico", icono: "🙈" }
      ],
      answer: 0,
      explain: "Y si tienes dudas, acude a un NAF."
    },
    {
      type: "order",
      prompt: "Forma la frase correcta",
      answer: ["La", "gradualidad", "rebaja", "las", "multas"],
      extra: ["aumenta", "nunca"],
      explain: "La gradualidad rebaja las multas."
    },
    {
      type: "tf",
      statement: "Puedo reclamar una multa si no estoy de acuerdo con ella.",
      answer: true,
      explain: "Correcto. Es tu derecho; respeta el plazo para hacerlo."
    }
  ]
};
