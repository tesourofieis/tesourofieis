self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener("push", () => {
  const now = new Date();
  const currentHour = now.getHours();

  self.registration.showNotification("Hora do Angelus", {
    body: currentHour,
    icon: "/favicon72.png",
    requireInteraction: true,
    vibrate: [200, 100, 200],
    renotify: true,
  });
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
