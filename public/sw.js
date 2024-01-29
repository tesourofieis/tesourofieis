const CACHE_NAME = "precache-v0.4.9";

const API_BASE_URL = "api/missal/dia";

async function generateMonthlyApiUrls() {
  const apiUrls = [];
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setDate(endDate.getDate() + 30);

  while (currentDate <= endDate) {
    const apiUrl = `http://localhost:4321//${API_BASE_URL}/${currentDate.toISOString().split("T")[0]}.json`;
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
    generateMonthlyApiUrls().then(() => {
      return self.clients.claim();
    }),
  );
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

function scheduleDailyNotifications(title, options, hours, redirectUrl) {
  setInterval(() => {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour === hours) {
      // Add a unique identifier for each notification
      const notificationId = `notification-${hours}`;

      // Add the notificationId to the options
      options.data = { notificationId };

      // Show the notification
      self.registration.showNotification(title, options);
    }
  }, 3600000); // Check every hour
}

self.addEventListener("notificationclick", (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();

  // Extract the notificationId from the data
  const { notificationId } = event.notification.data;

  // Define the redirect URL based on the notificationId
  let redirectUrl;
  switch (notificationId) {
    case "notification-6":
    case "notification-12":
    case "notification-18":
      redirectUrl = "/devocionario/angelus";
      break;
    case "notification-8":
      redirectUrl = "/missal/dia";
      break;
    // Add more cases as needed
  }

  // Open the specified URL
  if (redirectUrl) {
    clients.openWindow(redirectUrl);
  }
});

// Schedule notifications for 6 AM, 12 PM, 6 PM, and 8 AM
scheduleDailyNotifications(
  "Angelus Notification",
  { body: "Toque das Ave Marias" },
  6,
  "/devocionario/dia/angelus",
);
scheduleDailyNotifications(
  "Angelus Notification",
  { body: "Toque das Ave Marias" },
  12,
  "/devocionario/dia/angelus",
);
scheduleDailyNotifications(
  "Angelus Notification",
  { body: "Toque das Ave Marias" },
  18,
  "/devocionario/dia/angelus",
);
scheduleDailyNotifications(
  "Mass Notification",
  { body: "Missa do dia" },
  8,
  "/missal/dia",
);
