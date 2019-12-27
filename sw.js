importScripts(
  "https://unpkg.com/workbox-sw@0.0.2/build/importScripts/workbox-sw.dev.v0.0.2.js"
);
importScripts(
  "https://unpkg.com/workbox-runtime-caching@1.3.0/build/importScripts/workbox-runtime-caching.prod.v1.3.0.js"
);
importScripts(
  "https://unpkg.com/workbox-routing@1.3.0/build/importScripts/workbox-routing.prod.v1.3.0.js"
);

const missaRoute = new workbox.routing.RegExpRoute({
  regExp: new RegExp("missa/*"),
  handler: new workbox.runtimeCaching.CacheFirst()
});

const router = new workbox.routing.Router();
//router.addFetchListener();
router.registerRoutes({ routes: [missaRoute] });
router.setDefaultHandler({
  handler: new workbox.runtimeCaching.CacheFirst()
});

const cacheName = "site-static-v1";

const staticAssets = [
  "/",
  "/index",
  "/missa",
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
  "/rosario",
  "/oficio",
  "/antifonas",
  "/adoracao",
  "/ordinariomissa",
  "/oracoesleoninas",
  "/salterio"
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

  if (/.*(json)$/.test(req.url)) {
    event.respondWith(networkFirst(req));
  } else {
    event.respondWith(cacheFirst(req));
  }
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
