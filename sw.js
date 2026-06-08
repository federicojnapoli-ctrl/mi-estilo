/* Service Worker — Cápsula Outfits (PWA) */
const CACHE = "capsula-v1";
const ASSETS = [
  "./",
  "./index.html",
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
  // El CSV de Google siempre se busca fresco (network-first), nunca cacheado.
  if (url.includes("docs.google.com")) {
    e.respondWith(fetch(e.request).catch(() => new Response("", { status: 503 })));
    return;
  }
  // Assets de la app: cache-first.
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
