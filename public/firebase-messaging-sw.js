// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js",
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

firebase.initializeApp({
  apiKey: "AIzaSyBwz0aMw5I2bXHnhzG-ZCdNV44DWRxjUFM",
  authDomain: "tesourofieis.firebaseapp.com",
  databaseURL: "https://diario-de-noticias-22368.firebaseio.com",
  projectId: "tesourofieis",
  storageBucket: "tesourofieis.appspot.com",
  messagingSenderId: "724364776145",
  appId: "1:724364776145:web:37fd967251db6282e96bf0",
  measurementId: "G-CYLKZM1NJQ",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );

  const now = new Date();
  const currentHour = now.getHours();

  switch (currentHour) {
    case 6:
    case 12:
    case 18:
      return self.registration.showNotification("Hora do Angelus", {
        body: `Toque das Avés Marias - Hora ${currentHour}`,
        icon: "./murillo.jpeg",
        badge: "./maskable_icon_x512.png",
      });
    default:
      break;
  }
});

// self.addEventListener("install", () => {
//   self.skipWaiting();
// });
//
// self.addEventListener("activate", (e) => {
//   e.waitUntil(clients.claim());
// });
//
// self.addEventListener("push", () => {
//   const now = new Date();
//   const currentHour = now.getHours();
//
//   switch (currentHour) {
//     case 6:
//     case 12:
//     case 18:
//       return self.registration.showNotification("Hora do Angelus", {
//         body: `Toque das Avés Marias - Hora ${currentHour}`,
//         icon: "./murillo.jpeg",
//         badge: "./maskable_icon_x512.png",
//       });
//     default:
//       break;
//   }
// });

self.addEventListener("notificationclick", (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("devocionario/dia/angelus");
      }
    }),
  );
});
