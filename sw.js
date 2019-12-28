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
  const cache = await caches.open("v1");
  await cache.addAll(staticAssets);
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return (
        resp ||
        fetch(event.request).then(response => {
          const cache = await caches.open("v1");
          cache.put(event.request, response.clone());
          return response;
        })
      );
    })
  );
});
