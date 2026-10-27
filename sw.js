/* =========================================================
   SERVICE WORKER — permite instalar la app y usarla sin internet.
   Estrategia: archivos propios → primero internet (siempre lo más
   nuevo) y, si no hay conexión, la copia guardada. Fuentes de
   Google → primero la caché.
   Si agregas archivos (p. ej. una unidad nueva), súmalos a ARCHIVOS
   y sube la VERSION.
   ========================================================= */
const VERSION = "naf-aprende-v3";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/base.css",
  "./css/layout.css",
  "./css/ruta.css",
  "./css/leccion.css",
  "./js/data/ruta.js",
  "./js/data/unidad1.js",
  "./js/data/unidad2.js",
  "./js/data/unidad3.js",
  "./js/data/unidad4.js",
  "./js/data/unidad5.js",
  "./js/data/unidad6.js",
  "./js/data/unidad7.js",
  "./js/data/unidad8.js",
  "./js/data/unidad9.js",
  "./js/data/unidad10.js",
  "./js/data/unidad11.js",
  "./js/data/unidad12.js",
  "./js/data/glosario.js",
  "./js/core/storage.js",
  "./js/core/sound.js",
  "./js/core/historial.js",
  "./js/ui/ejercicios.js",
  "./js/ui/leccion.js",
  "./js/ui/ruta.js",
  "./js/ui/vistas.js",
  "./js/app.js",
  "./img/icono-180.png",
  "./img/icono-192.png",
  "./img/icono-512.png",
  "./img/naf-simbolo.png",
  "./img/logo-naf.png",
  "./img/logo-certus.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const propio = new URL(e.request.url).origin === self.location.origin;

  e.respondWith(
    caches.open(VERSION).then(async (cache) => {
      const guardar = (resp) => {
        if (resp.ok || resp.type === "opaque") cache.put(e.request, resp.clone());
        return resp;
      };

      if (propio) {
        try {
          return guardar(await fetch(e.request));
        } catch (err) {
          return (await cache.match(e.request, { ignoreSearch: true })) ||
                 (await cache.match("./index.html")); // sin conexión: abre la app
        }
      }

      // Fuentes y otros recursos externos: caché primero
      const enCache = await cache.match(e.request);
      return enCache || fetch(e.request).then(guardar).catch(() => Response.error());
    })
  );
});
