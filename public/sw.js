const CACHE_NAME = "precache-v0.5.8";

const API_BASE_URL = "api/missal/dia";

self.addEventListener("install", (event) => {
  event.waitUntil(scheduleAngelusNotifications());
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("sync", (event) => {
  if (event.tag === "angelus-notifications") {
    event.waitUntil(
      scheduleAngelusNotifications().catch((error) => {
        console.error("Error scheduling Angelus notifications:", error);
      }),
    );
  }
});

function scheduleAngelusNotifications() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentSecond = now.getSeconds();
  const date = `${currentHour}:${currentMinute}:${currentSecond}`;

  switch (date) {
    case "6:0:0":
    case "12:0:0":
    case "18:0:0":
    case "0:22:0":
      self.registration.showNotification("Hora do Angelus", {
        tag: "alert",
        body: `Toque das Avé Marias - hora ${currentHour}`,
        icon: "/favicon72.png",
        requireInteraction: true,
        timestamp: new Date().toLocaleString("pt", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        actions: [
          {
            action: "open",
            title: "Abrir",
          },
          {
            action: "close",
            title: "Fechar",
          },
        ],
        vibrate: [200, 100, 200],
        renotify: true,
      });
  }
}

self.addEventListener("notificationclick", (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();

  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow)
          return clients.openWindow("devocionario/dia/angelus");
      }),
  );
});

scheduleAngelusNotifications();
