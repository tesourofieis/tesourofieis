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
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
  "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
  "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/css/tempusdominus-bootstrap-4.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/js/tempusdominus-bootstrap-4.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
  "https://fonts.googleapis.com/css?family=Cardo&display=swap",
  "/assets/style.css",
  "/assets/script.js",
  "/assets/missa.css",
  "/assets/floating-labels.css",
  "/app.js"
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
        fetch(event.request).then(async response => {
          const cache = await caches.open("v1");
          cache.put(event.request, response.clone());
          return response;
        })
      );
    })
  );
});
