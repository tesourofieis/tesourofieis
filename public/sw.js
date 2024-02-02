const CACHE_NAME = "precache-v0.5.5";

const API_BASE_URL = "api/missal/dia";

self.addEventListener("install", () => {
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

function scheduleDailyNotifications(title, options, hours) {
  setInterval(() => {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour === hours) {
      const notificationId = hours;

      options.data = { notificationId };
      options.icon = "/favicon72.png";

      // Show the notification
      self.registration.showNotification(title, options);
    }
  }, 60_000);
}

self.addEventListener("notificationclick", (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();

  const { notificationId } = event.notification.data;

  console.log("notificationId", event.notification.data);

  switch (notificationId) {
    case 6:
    case 12:
    case 18:
      event.waitUntil(
        clients
          .matchAll({
            type: "window",
          })
          .then((clientList) => {
            for (const client of clientList) {
              if (client.url === "/" && "focus" in client)
                return client.focus();
            }
            if (clients.openWindow)
              return clients.openWindow("devocionario/dia/angelus");
          }),
      );
      break;
  }
});

scheduleDailyNotifications(
  "Hora do Angelus",
  { body: "Toque das Ave Marias" },
  6,
);
scheduleDailyNotifications(
  "Hora do Angelus",
  { body: "Toque das Ave Marias" },
  12,
);
scheduleDailyNotifications(
  "Hora do Angelus",
  { body: "Toque das Ave Marias" },
  18,
);
