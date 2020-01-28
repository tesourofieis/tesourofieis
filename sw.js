importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js",
  "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.js"
);

workbox.googleAnalytics.initialize();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

const updateChannel = new BroadcastChannel("precache");
updateChannel.addEventListener("message", event => {
  if (confirm(`New content is available!. Click OK to refresh`)) {
    window.location.reload();
  }
});

let today = moment(new Date()).format("YYYY-MM-DD");
let tp1 = moment(new Date())
  .add(1, "days")
  .format("YYYY-MM-DD");
let tp2 = moment(new Date())
  .add(2, "days")
  .format("YYYY-MM-DD");
let tp3 = moment(new Date())
  .add(3, "days")
  .format("YYYY-MM-DD");
let tp4 = moment(new Date())
  .add(4, "days")
  .format("YYYY-MM-DD");
let tp5 = moment(new Date())
  .add(5, "days")
  .format("YYYY-MM-DD");
let tp6 = moment(new Date())
  .add(6, "days")
  .format("YYYY-MM-DD");
let tp7 = moment(new Date())
  .add(7, "days")
  .format("YYYY-MM-DD");
let tp8 = moment(new Date())
  .add(8, "days")
  .format("YYYY-MM-DD");
let tp9 = moment(new Date())
  .add(9, "days")
  .format("YYYY-MM-DD");
let tp10 = moment(new Date())
  .add(10, "days")
  .format("YYYY-MM-DD");
let tp11 = moment(new Date())
  .add(11, "days")
  .format("YYYY-MM-DD");
let tp12 = moment(new Date())
  .add(12, "days")
  .format("YYYY-MM-DD");
let tp13 = moment(new Date())
  .add(13, "days")
  .format("YYYY-MM-DD");
let tp14 = moment(new Date())
  .add(14, "days")
  .format("YYYY-MM-DD");
let tp15 = moment(new Date())
  .add(15, "days")
  .format("YYYY-MM-DD");

workbox.precaching.precacheAndRoute([
  "./",
  "./app.js",
  "./img/gitter.png",
  "./index",
  "./missa",
  "./date/2019.json",
  "./date/2020.json",
  `./date/${today}.json`,
  `./date/${tp1}.json`,
  `./date/${tp2}.json`,
  `./date/${tp3}.json`,
  `./date/${tp4}.json`,
  `./date/${tp5}.json`,
  `./date/${tp6}.json`,
  `./date/${tp7}.json`,
  `./date/${tp8}.json`,
  `./date/${tp9}.json`,
  `./date/${tp10}.json`,
  `./date/${tp11}.json`,
  `./date/${tp12}.json`,
  `./date/${tp13}.json`,
  `./date/${tp14}.json`,
  `./date/${tp15}.json`,
  "./oracaomanha",
  "./oracaonoite",
  "./requiem",
  "./baptismo",
  "./confirmacao",
  "./matrimonio",
  "./extremauncao",
  "./penitencia",
  // "./propriotempo",
  // "./propriosantos",
  // "./comumsantos",
  // "./oracoesdiversas",
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
  "./assets/conf-static.js"
]
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  // /\/date\/.(?:json)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images'
  })
);

workbox.routing.registerRoute(
  /.*\.json/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'json'
  })
);
