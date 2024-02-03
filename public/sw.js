const CACHE_NAME = "precache-v0.5.8";

const API_BASE_URL = "api/missal/dia";

self.addEventListener("install", (event) => {
  event.waitUntil(scheduleDailyNotifications());
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
  if (event.tag === "daily-notifications") {
    event.waitUntil(scheduleDailyNotifications());
  }
});

function showNotification(title, options) {
  options.icon = "/favicon72.png";
  options.timestamp = new Date().toLocaleString("pt");
  options.requireInteraction = true;
  self.registration.showNotification(title, options);
}

function scheduleDailyNotifications() {
  const now = new Date();
  const currentHour = now.getHours();

  let nextNotificationTime;

  if (currentHour < 6) {
    nextNotificationTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      6,
      0,
      0,
      0,
    );
  } else if (currentHour < 12) {
    nextNotificationTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      12,
      0,
      0,
      0,
    );
  } else if (currentHour < 18) {
    nextNotificationTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      18,
      0,
      0,
      0,
    );
  } else {
    nextNotificationTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      6,
      0,
      0,
      0,
    );
  }

  const timeUntilNextNotification = nextNotificationTime - now;

  setTimeout(() => {
    showNotification("Hora do Angelus", { body: "Toque das Ave Marias" });
    scheduleDailyNotifications(); // Schedule the next notification for the same day
  }, timeUntilNextNotification);
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

// Schedule the first set of notifications
scheduleDailyNotifications();
