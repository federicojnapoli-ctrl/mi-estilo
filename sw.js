/* Service Worker — Cápsula Outfits (PWA) */
/* Subí este número cada vez que cambie el código para forzar actualización. */
const CACHE = "capsula-v2";
const ASSETS = [
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const url = e.request.url;
  const req = e.request;

  // CSV de Google: siempre fresco, nunca cacheado.
  if (url.includes("docs.google.com")) {
    e.respondWith(fetch(req).catch(() => new Response("", { status: 503 })));
    return;
  }

  // index.html y navegación: NETWORK-FIRST (siempre intenta la última versión;
  // si no hay red, cae al cache). Esto evita quedarse con el HTML viejo.
  if (req.mode === "navigate" || url.endsWith("/") || url.endsWith("index.html")) {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
    );
    return;
  }

  // Resto de assets (íconos, manifest): cache-first.
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
