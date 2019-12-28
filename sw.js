const cacheName = "tesouro-v1";
let today = new Date().toISOString().slice(0, 10);

const staticAssets = [
  "/",
  "/index",
  "/missa",
  "/missa/data/2019",
  "/missa/data/2020",
  `/missa/data/${today}`,
  "/oracaomanha",
  "/oracaonoite",
  "/requiem",
  "/baptismo",
  "/confirmacao",
  "/matrimonio",
  "/extremauncao",
  "/penitencia",
  "/propriotempo",
  "/propriosantos",
  "/comumsantos",
  "/oracoesdiversas",
  "/oracaoantescomunhao",
  "/oracaodepoiscomunhao",
  "/oracoescomplementares",
  "/angelus",
  "/rosario",
  "/oficio",
  "/antifonas",
  "/adoracao",
  "/ordinariomissa",
  "/oracoesleoninas",
  "/salterio",
  "/assets/style.css",
  "/assets/script.js",
  "/assets/missa.css",
  "/assets/floating-labels.css"
];

self.addEventListener("install", async event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(req);
  return cachedResponse || networkFirst(req);
}

async function networkFirst(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cachedResponse = await cache.match(req);
    return cachedResponse;
  }
}
