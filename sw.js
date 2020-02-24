importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.js"
);

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

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
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
  "https://api.iconify.design/fa.js?icons=calendar-o,print",
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
  "./img/1.gif"
];

const PRECACHE = "precache-v0.0.3";
const RUNTIME = "runtime";

// The install handler takes care of precaching the resources we always need.
// self.addEventListener("install", event => {
//   console.log("The service worker is being installed.");

//   event.waitUntil(
//     caches
//       .open(PRECACHE)
//       .then(cache => cache.addAll(PRECACHE_URLS))
//       .then(() => console.log("Assets added to cache"))
//       .then(self.skipWaiting())
//   );
// });

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(PRECACHE).then(cache => cache.addAll(PRECACHE_URLS))
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", event => {
  console.log("The service worker is serving the asset.");

  const currentCaches = [PRECACHE, RUNTIME];

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName)
        );
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", function(event) {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
