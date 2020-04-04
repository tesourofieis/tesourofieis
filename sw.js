importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.js"
);

let today = moment(new Date()).format("YYYY-MM-DD");
let tp1 = moment(new Date()).add(1, "days").format("YYYY-MM-DD");
let tp2 = moment(new Date()).add(2, "days").format("YYYY-MM-DD");
let tp3 = moment(new Date()).add(3, "days").format("YYYY-MM-DD");
let tp4 = moment(new Date()).add(4, "days").format("YYYY-MM-DD");
let tp5 = moment(new Date()).add(5, "days").format("YYYY-MM-DD");
let tp6 = moment(new Date()).add(6, "days").format("YYYY-MM-DD");
let tp7 = moment(new Date()).add(7, "days").format("YYYY-MM-DD");
let tp8 = moment(new Date()).add(8, "days").format("YYYY-MM-DD");
let tp9 = moment(new Date()).add(9, "days").format("YYYY-MM-DD");
let tp10 = moment(new Date()).add(10, "days").format("YYYY-MM-DD");
let tp11 = moment(new Date()).add(11, "days").format("YYYY-MM-DD");
let tp12 = moment(new Date()).add(12, "days").format("YYYY-MM-DD");
let tp13 = moment(new Date()).add(13, "days").format("YYYY-MM-DD");
let tp14 = moment(new Date()).add(14, "days").format("YYYY-MM-DD");
let tp15 = moment(new Date()).add(15, "days").format("YYYY-MM-DD");

const PRECACHE_URLS = [
  "./",
  "./app.js",
  "./img/gitter.png",
  "./index",
  "./missa",
  "./date/2020",
  `./date/${today}`,
  `./date/${tp1}`,
  `./date/${tp2}`,
  `./date/${tp3}`,
  `./date/${tp4}`,
  `./date/${tp5}`,
  `./date/${tp6}`,
  `./date/${tp7}`,
  `./date/${tp8}`,
  `./date/${tp9}`,
  `./date/${tp10}`,
  `./date/${tp11}`,
  `./date/${tp12}`,
  `./date/${tp13}`,
  `./date/${tp14}`,
  `./date/${tp15}`,
  "./oracaomanha",
  "./oracaonoite",
  "./requiem",
  "./baptismo",
  "./confirmacao",
  "./matrimonio",
  "./extremauncao",
  "./penitencia",
  "./oracaoantescomunhao",
  "./oracaodepoiscomunhao",
  "./oracoescomplementares",
  "./angelus",
  "./rosario",
  "./oficio",
  "./antifonas",
  "./adoracao",
  "./verdadesfe",
  "./ordinariomissa",
  "./oracoesleoninas",
  "./salterio",
  "./img/spinner.gif",
  "./assets/style.css",
  "./assets/script.js",
  "./assets/missa.css",
  "./assets/common.js",
  "./assets/readings.js",
  "./assets/ordoReadings.js",
  "./assets/conf-static.js",
  "https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/js/tempusdominus-bootstrap-4.js",
  "./img/favicon.svg",
  "./img/faviconWhite.svg ",
  "./img/antonio.gif",
  "./img/virgin.gif ",
  "./img/pale.gif",
  "./img/jose.jpeg",
  "./img/penitent.gif",
  "./img/moutains.gif",
  "./img/altar.gif",
  "./img/salmo.gif",
  "./img/murillo.jpeg",
  "./img/cruxifixao2.gif",
  "./img/bencaocampostrigo.gif",
  "./img/Jeronimos.gif",
  "./img/1.gif",
];

const PRECACHE = "precache-v0.1.1";
const RUNTIME = "runtime";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(PRECACHE).then((cache) => cache.addAll(PRECACHE_URLS))
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
          (cacheName) => !currentCaches.includes(cacheName)
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
