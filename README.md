# NAF Aprende 🦙

App educativa tipo Duolingo para que estudiantes y emprendedores aprendan lo básico del
cumplimiento tributario ante la SUNAT. Proyecto del NAF (Núcleo de Apoyo Contable y Fiscal).

HTML + CSS + JavaScript puro, sin dependencias ni compilación.

## Cómo abrirla

Sirve la carpeta con cualquier servidor estático, por ejemplo:

```bash
python -m http.server 8765
```

y abre <http://localhost:8765>. (Abrir `index.html` con doble clic también funciona en la mayoría de navegadores.)

## Estructura

```
index.html            Estructura de la app (ruta, lección, modal)
manifest.webmanifest  Datos para instalarla como app (nombre, ícono, colores)
sw.js                 Service worker: instalación y uso sin internet
img/                  Íconos de la app (192, 512, maskable y 180 para iPhone)
supabase/             esquema.sql (tablas y seguridad) y restablecer-clave.sql
herramientas/         Script para armar la versión de un solo archivo
dist/                 Versión de un solo archivo generada (no se edita a mano)
css/
  base.css            Variables de diseño, botones, tarjetas, modal, animaciones
  layout.css          Sidebar, topbar, panel derecho, glosario, progreso, responsive
  ruta.css            Mapa de unidades, nodos, popovers y guía de unidad
  leccion.css         Pantalla de ejercicios, feedback y resultados
js/
  data/ruta.js        Toda la ruta: 12 unidades y sus lecciones
  data/unidad1.js     Contenido de la Unidad 1 (5 lecciones, 46 ejercicios)
  data/unidad2.js     Contenido de la Unidad 2 (5 lecciones, 46 ejercicios)
  data/unidad3.js     Contenido de la Unidad 3 (6 lecciones, 55 ejercicios)
  data/unidad4.js     Contenido de la Unidad 4 (6 lecciones, 55 ejercicios)
  data/unidad5.js     Contenido de la Unidad 5 (5 lecciones, 46 ejercicios)
  data/unidad6.js     Contenido de la Unidad 6 (5 lecciones, 46 ejercicios)
  data/unidad7.js     Contenido de la Unidad 7 (5 lecciones, 46 ejercicios)
  data/unidad8.js     Contenido de la Unidad 8 (5 lecciones, 46 ejercicios)
  data/unidad9.js     Contenido de la Unidad 9 (4 lecciones, 37 ejercicios)
  data/unidad10.js    Contenido de la Unidad 10 (4 lecciones, 37 ejercicios)
  data/unidad11.js    Contenido de la Unidad 11 (4 lecciones, 37 ejercicios)
  data/unidad12.js    Contenido de la Unidad 12 (4 lecciones + examen final, 43 ejercicios)
  data/glosario.js    Términos del glosario
  config.js           Claves de Supabase (vacías = sin cuentas)
  core/storage.js     Progreso en localStorage (XP, racha, lecciones)
  core/nube.js        Cuentas y sincronización del avance con Supabase
  core/sound.js       Efectos de sonido con Web Audio
  ui/ejercicios.js    Un renderizador por tipo de ejercicio
  ui/leccion.js       Motor de lección: vidas, comprobar, feedback, resultado
  ui/ruta.js          Dibuja el mapa y la guía de cada unidad
  ui/vistas.js        Glosario, progreso, panel derecho y modal
  ui/acceso.js        Pantalla de registro e inicio de sesión
  app.js              Arranque y navegación (#ruta, #glosario, #progreso)
```

## La ruta

| # | Unidad | Estado |
|---|--------|--------|
| 1 | Primeros pasos con la SUNAT (SUNAT y NAF, tributos, RUC, Clave SOL) | ✅ Disponible |
| 2 | Tu RUC al día (estados, habido/no habido, actualización, Ficha y Consulta RUC) | ✅ Disponible |
| 3 | Elige tu régimen tributario (NRUS, RER, RMT, General, compara y decide) | ✅ Disponible |
| 4 | Comprobantes de pago (boleta, factura, ticket, notas, guía de remisión, recibo por honorarios) | ✅ Disponible |
| 5 | Facturación electrónica (SEE-SOL, boleta y factura electrónica, consulta de validez) | ✅ Disponible |
| 6 | El IGV sin miedo (tasa, débito y crédito fiscal, cálculo mensual) | ✅ Disponible |
| 7 | Impuesto a la Renta (categorías, renta empresarial, pagos a cuenta, declaración anual) | ✅ Disponible |
| 8 | Declara y paga (cronograma, Declara Fácil 621, NPS, fraccionamiento) | ✅ Disponible |
| 9 | Libros y registros (por régimen, Registro de Ventas y Compras, SLE y SIRE) | ✅ Disponible |
| 10 | Tus trabajadores (planilla electrónica, EsSalud, ONP/AFP, prestadores de servicios) | ✅ Disponible |
| 11 | Infracciones y multas (infracciones comunes, sanciones, UIT, gradualidad) | ✅ Disponible |
| 12 | Crece formal (beneficios, vender al Estado, plan de cumplimiento, examen final) | ✅ Disponible |

## App para celular

NAF Aprende está pensada **primero para celular** y se comporta como una app:

- Encabezado fijo con racha y XP, barra de navegación inferior y cabeceras de unidad fijas al hacer scroll.
- Al abrir la ruta te lleva directo a la lección que te toca.
- Guías y confirmaciones aparecen como «hojas» que suben desde abajo.
- El botón **atrás** del celular cierra las hojas y, dentro de una lección, pregunta antes de salir.
- Respeta la muesca y la barra de gestos (safe areas), vibra al fallar (Android) y no hace zoom por doble toque.
- **Instalable (PWA):** en Android aparece el aviso «Instalar NAF Aprende»; en iPhone se usa
  Safari → Compartir → «Agregar a pantalla de inicio». Una vez abierta, **funciona sin internet**.

**Publicada en:** https://contatap2026.github.io/appnaf/ (GitHub Pages, rama `gh-pages`).

Para publicar cambios, sube `main` y copia lo mismo a `gh-pages` (usa Git Bash, no UCRT64):

```bash
git push origin main main:gh-pages
```

GitHub tarda uno o dos minutos en actualizar la página.
Si agregas archivos nuevos, súmalos a la lista `ARCHIVOS` de `sw.js` y sube su `VERSION`.

## Cuentas y avance en la nube (Supabase)

La primera vez, cada persona **crea su cuenta con nombre, usuario y contraseña** (por ejemplo, *Rosa Cruz* y *rosacruz*),
sin correo. Su avance se guarda en Supabase y puede seguir donde se quedó en cualquier celular.

- Supabase exige un correo, así que la app arma uno interno que nunca se usa para enviar nada:
  usuario «rosacruz» → `rosacruz@contatap2026.github.io` (dominio en `js/config.js`, `DOMINIO_USUARIOS`).
  No cambies ese dominio cuando ya haya cuentas: dejarían de poder entrar.
- El avance se guarda primero en el celular y se sube solo. Sin internet, queda pendiente y se sube al volver la conexión.
- Cada persona solo puede ver y editar sus propios datos (reglas RLS en `supabase/esquema.sql`).
- Si `js/config.js` no tiene claves, la app funciona sin registro y con el avance solo en el celular.
- La versión artefacto no usa cuentas: el visor de Claude no permite conectarse a Supabase.

**Configurar (una sola vez):**

1. Crea un proyecto gratis en [supabase.com](https://supabase.com).
2. **SQL Editor** → pega todo `supabase/esquema.sql` → **Run** (vuelve a correrlo si lo actualizas).
3. **Authentication → Sign In / Providers → Email**: **desactiva «Confirm email»** y guarda.
   Es obligatorio: las cuentas no tienen correo real, así que nadie podría confirmarlo.
4. **Project Settings → API Keys**: copia la *Project URL* y la *Publishable key* en `js/config.js`.
   Nunca uses la clave secreta (`sb_secret_…` / `service_role`) en la app.

**Ver el avance de los participantes:** Supabase → *Table Editor* → vista `resumen_estudiantes`
(nombre, usuario, XP, lecciones y racha).

**Contraseña olvidada:** no hay recuperación por correo. El docente abre `supabase/restablecer-clave.sql`,
cambia el usuario y la contraseña nueva, y lo ejecuta en el *SQL Editor*.

## Versión de un solo archivo (artefacto)

`herramientas/construir_artefacto.py` empaqueta toda la app (CSS y JS incluidos) en un único
`dist/naf-aprende.html`, útil para publicarla como artefacto de Claude o enviarla como archivo.
Esa versión no se instala ni funciona sin internet (no lleva service worker); para eso está la versión normal.

```bash
python herramientas/construir_artefacto.py
```

## Agregar o ampliar unidades

1. Crea `js/data/unidadN.js` con `NAF.CONTENIDO.uNl1 = { ejercicios: [...] }` por cada lección
   (copia el formato de `unidad1.js`).
2. Inclúyelo en `index.html` después de la última unidad.
3. En `js/data/ruta.js` cambia `disponible: false` a `true` en esa unidad.
4. Agrega sus términos a `js/data/glosario.js`.
5. Agrega el archivo nuevo a `ARCHIVOS` en `sw.js` (para que funcione sin internet).

Tipos de ejercicio: `teoria`, `choice` (con `escena` opcional), `tf`, `fill`, `match`, `order`.

## Mecánicas

- 5 vidas por lección; cada error quita una y la pregunta vuelve al final.
- Emparejar no quita vidas, pero los errores cuentan para la precisión.
- 10 XP por lección (20 en desafíos) + 5 XP de bono si es perfecta.
- Racha diaria, meta diaria de 20 XP y gráfico semanal.
- Atajos: teclas `1`–`4` para elegir, `Enter` para comprobar/continuar.
- En emparejar, las tarjetas con el mismo texto son intercambiables (p. ej. dos «Planilla»).
- Los montos («S/ 8 000») y porcentajes («18 %») nunca se parten en dos líneas.
- Al aprobar el examen final (Unidad 12) aparece la pantalla de «¡Curso completado!».

## Datos a revisar cada año

El contenido usa cifras que pueden cambiar. Antes de usar el curso con el público, un docente
del NAF debería confirmar, entre otras:

| Dato | Valor usado | Archivo |
|------|-------------|---------|
| UIT (para cálculos de multas) | S/ 5 350 (2025) | `unidad11.js` |
| Límites NRUS / RER / RMT | S/ 96 000 · S/ 525 000 · 1 700 UIT | `unidad3.js` |
| Cuotas NRUS | S/ 20 y S/ 50 | `unidad3.js` |
| Tasas de renta | RER 1,5 % · RMT 10 % / 29,5 % · General 29,5 % | `unidad3.js`, `unidad7.js` |
| Identificación en boletas | Más de S/ 700 | `unidad4.js`, `unidad5.js` |
| Retención de cuarta categoría | 8 % si el recibo supera S/ 1 500 | `unidad4.js`, `unidad10.js` |
| Bancarización | S/ 2 000 o US$ 500 | `unidad6.js` |
| Aportes laborales | EsSalud 9 % · ONP 13 % · AFP 10 % + comisión | `unidad10.js` |
| Multas y gradualidad | 1 UIT / 50 % UIT · mínima 5 % UIT · rebaja hasta 90 % | `unidad11.js` |

> Material educativo y referencial. Verifica siempre la información vigente en los canales oficiales de la SUNAT.
