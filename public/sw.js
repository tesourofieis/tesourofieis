const CACHE_NAME = "precache-v0.5.1";

const API_BASE_URL = "api/missal/dia";

async function generateMonthlyApiUrls() {
  const apiUrls = [];
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setDate(endDate.getDate() + 30);

  while (currentDate <= endDate) {
    const apiUrl = `https://tesourofieis.com/${API_BASE_URL}/${
      currentDate.toISOString().split("T")[0]
    }.json`;
    apiUrls.push(apiUrl);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const cache = await caches.open(CACHE_NAME);
  return await cache.addAll(apiUrls);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["./"]);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => {
        return self.clients.matchAll({ type: "window" });
      })
      .then((clients) => {
        return Promise.all(
          clients.map((client) => {
            if ("navigate" in client) {
              return client.navigate(client.url);
            }
          }),
        );
      })
      .then(() => {
        return generateMonthlyApiUrls();
      })
      .then(() => {
        return self.clients.claim();
      }),
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.action === "skipWaiting") {
    self.skipWaiting();
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ action: "reloadPage" });
      });
    });
  } else if (event.data && event.data.action === "reloadPage") {
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ action: "reloadPage" });
      });
    });
  }
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Serving from cache:", event.request.url);
        return response;
      }

      console.log("Fetching from network:", event.request.url);
      return fetch(event.request);
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
  }, 3600000);
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
