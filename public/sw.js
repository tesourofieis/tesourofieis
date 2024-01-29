const PRECACHE_URLS = ["./"];

const PRECACHE = "precache-v0.4.9";
const RUNTIME = "runtime";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(PRECACHE).then((cache) => cache.addAll(PRECACHE_URLS)),
  );
});

self.addEventListener("message", function (event) {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", (event) => {
  console.log("The service worker is serving the asset.");

  const currentCaches = [PRECACHE, RUNTIME];

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName),
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});
