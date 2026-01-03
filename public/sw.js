/**
 * Service Worker for Tesouro dos Fiéis
 * Handles background notifications when the app is not active
 */

const CACHE_NAME = "tesouro-fieis-v1";
const NOTIFICATION_TAG = "tesouro-notification";

// Install event
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
  event.waitUntil(clients.claim());
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  console.log("Notification clicked:", event.notification);

  event.notification.close();

  const urlToOpen = event.notification.data?.url || "/";

  event.waitUntil(
    clients
      .matchAll({
        type: "window",
        includeUncontrolled: true,
      })
      .then((clientList) => {
        // Check if there's already a window/tab open with the target URL
        for (const client of clientList) {
          if (client.url.includes(location.origin) && "focus" in client) {
            // If we find an existing window, focus it and navigate if needed
            if (urlToOpen !== "/") {
              client.postMessage({
                type: "NOTIFICATION_CLICK",
                url: urlToOpen,
              });
            }
            return client.focus();
          }
        }

        // If no window is open, open a new one
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      }),
  );
});

// Handle notification close
self.addEventListener("notificationclose", (event) => {
  console.log("Notification closed:", event.notification);
  // Could track analytics here
});

// Handle push events (if we ever add push server support)
self.addEventListener("push", (event) => {
  console.log("Push received:", event);

  if (!event.data) {
    return;
  }

  const data = event.data.json();

  const options = {
    body: data.body || "Nova notificação do Tesouro dos Fiéis",
    icon: "/favicon.png",
    badge: "/favicon.png",
    data: {
      url: data.url || "/",
    },
    tag: NOTIFICATION_TAG,
    requireInteraction: false,
    actions: data.actions || [],
  };

  event.waitUntil(
    self.registration.showNotification(
      data.title || "Tesouro dos Fiéis",
      options,
    ),
  );
});
