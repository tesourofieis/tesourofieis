importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js",
);

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener("push", () => {
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
