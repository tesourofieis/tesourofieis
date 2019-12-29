importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.CacheFirst()
);

workbox.googleAnalytics.initialize();

workbox.precaching.precacheAndRoute([
  {
    url:
      "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.js",
    revision: "1"
  },
  {
    url:
      "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
    revision: "2"
  },
  {
    url:
      "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/js/tempusdominus-bootstrap-4.min.js",
    revision: "3"
  },
  {
    url:
      "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/css/tempusdominus-bootstrap-4.min.css",
    revision: "4"
  },
  {
    url:
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    revision: "5"
  },
  {
    url: "https://fonts.googleapis.com/css?family=Cardo&display=swap",
    revision: "6"
  },
  {
    url:
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
    revision: "7"
  },
  {
    url: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
    revision: "8"
  },
  {
    url:
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    revision: "9"
  },
  {
    url:
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    revision: "10"
  },
  {
    url:
      "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/js/tempusdominus-bootstrap-4.js",
    revision: "11"
  }
]);

let today = new Date().toISOString().slice(0, 10);

workbox.precaching.precacheAndRoute([
  "./",
  "./index",
  "./missa",
  "./data/2019",
  "./data/2020",
  `./data/${today}`,
  "./missa/data/2019",
  "./missa/data/2020",
  `./missa/data/${today}`,
  "./oracaomanha",
  "./oracaonoite",
  "./requiem",
  "./baptismo",
  "./confirmacao",
  "./matrimonio",
  "./extremauncao",
  "./penitencia",
  "./propriotempo",
  "./propriosantos",
  "./comumsantos",
  "./oracoesdiversas",
  "./oracaoantescomunhao",
  "./oracaodepoiscomunhao",
  "./oracoescomplementares",
  "./angelus",
  "./rosario",
  "./oficio",
  "./antifonas",
  "./adoracao",
  "./ordinariomissa",
  "./oracoesleoninas",
  "./salterio",
  "./assets/style.css",
  "./assets/script.js",
  "./assets/missa.css",
  "./assets/floating-labels.css",
  "./",
  "./app.js",
  "./assets/",
  "./assets/common.js",
  "./assets/readings.js",
  "./assets/conf-static.js"
]);

const cacheName = "tesouro-v1";

const staticAssets = [
  //   "./",
  //   "./index",
  //   "./missa",
  //   "./missa/data/2019",
  //   "./missa/data/2020",
  //   `./missa/data/${today}`,
  //   "./oracaomanha",
  //   "./oracaonoite",
  //   "./requiem",
  //   "./baptismo",
  //   "./confirmacao",
  //   "./matrimonio",
  //   "./extremauncao",
  //   "./penitencia",
  //   "./propriotempo",
  //   "./propriosantos",
  //   "./comumsantos",
  //   "./oracoesdiversas",
  //   "./oracaoantescomunhao",
  //   "./oracaodepoiscomunhao",
  //   "./oracoescomplementares",
  //   "./angelus",
  //   "./rosario",
  //   "./oficio",
  //   "./antifonas",
  //   "./adoracao",
  //   "./ordinariomissa",
  //   "./oracoesleoninas",
  //   "./salterio",
  "./assets/style.css",
  "./assets/script.js",
  "./assets/missa.css",
  "./assets/floating-labels.css",
  "./",
  "./app.js",
  "./assets/",
  "./assets/common.js",
  "./assets/readings.js",
  "./assets/conf-static.js",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
  "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
  "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/css/tempusdominus-bootstrap-4.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/js/tempusdominus-bootstrap-4.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
  "https://fonts.googleapis.com/css?family=Cardo&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/js/tempusdominus-bootstrap-4.js",
  "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.js"
  //   "./app.js"
];

self.addEventListener("install", event => {
  const cache = caches.open(cacheName);
  cache.addAll(staticAssets);
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
  return cachedResponse || fetch(req);
}
