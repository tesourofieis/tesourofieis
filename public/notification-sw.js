/**
 * Notification Service Worker for Tesouro dos Fiéis
 * Handles background notifications and integrates with Workbox
 */

// This will be populated by Workbox during build
const NOTIFICATION_CACHE = "tesouro-notifications-v1";

/**
 * Install event - set up notification handling
 */
self.addEventListener("install", (_event) => {
  console.log("📦 Notification Service Worker installing...");
  self.skipWaiting();
});

/**
 * Activate event - claim clients
 */
self.addEventListener("activate", (event) => {
  console.log("🚀 Notification Service Worker activating...");
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter(
              (cacheName) => cacheName.startsWith("tesouro-") && cacheName !== NOTIFICATION_CACHE,
            )
            .map((cacheName) => caches.delete(cacheName)),
        );
      }),
    ]),
  );
});

/**
 * Background sync for scheduled notifications
 */
self.addEventListener("sync", (event) => {
  console.log("🔄 Background sync triggered:", event.tag);

  if (event.tag === "notification-sync") {
    event.waitUntil(
      // Check for pending notifications and show them
      checkAndShowPendingNotifications(),
    );
  }
});

/**
 * Handle notification clicks
 */
self.addEventListener("notificationclick", (event) => {
  console.log("🔔 Notification clicked:", event.notification.data);

  event.notification.close();

  const urlToOpen = event.notification.data?.url || "/";

  event.waitUntil(
    clients
      .matchAll({
        type: "window",
        includeUncontrolled: true,
      })
      .then((clientList) => {
        // Try to find existing window
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && "focus" in client) {
            // Send message to existing window
            client.postMessage({
              type: "NOTIFICATION_CLICK",
              url: urlToOpen,
              data: event.notification.data,
            });
            return client.focus();
          }
        }

        // Open new window if none exists
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      }),
  );
});

/**
 * Handle notification close
 */
self.addEventListener("notificationclose", (event) => {
  console.log("❌ Notification closed:", event.notification.data);

  // Track notification dismissal analytics if needed
  // Could send to analytics service here
});

/**
 * Handle push messages (for future server-sent notifications)
 */
self.addEventListener("push", (event) => {
  console.log("📧 Push message received:", event.data ? event.data.text() : "No data");

  if (!event.data) {
    return;
  }

  try {
    const data = event.data.json();

    const options = {
      body: data.body || "Nova mensagem do Tesouro dos Fiéis",
      icon: "/favicon.png",
      badge: "/favicon.png",
      image: data.image,
      data: {
        url: data.url || "/",
        timestamp: Date.now(),
        ...data.data,
      },
      tag: data.tag || `tesouro-${Date.now()}`,
      requireInteraction: data.requireInteraction || false,
      actions: data.actions || [],
      vibrate: [200, 100, 200],
      timestamp: Date.now(),
    };

    event.waitUntil(self.registration.showNotification(data.title || "Tesouro dos Fiéis", options));
  } catch (error) {
    console.error("Error handling push message:", error);
  }
});

/**
 * Custom message handling from main app
 */
self.addEventListener("message", (event) => {
  console.log("💬 Message received from app:", event.data);

  if (event.data && event.data.type) {
    switch (event.data.type) {
      case "SCHEDULE_NOTIFICATION":
        handleScheduleNotification(event.data.payload);
        break;

      case "CANCEL_NOTIFICATION":
        handleCancelNotification(event.data.payload);
        break;

      case "GET_SCHEDULED_NOTIFICATIONS":
        event.ports[0].postMessage({
          type: "SCHEDULED_NOTIFICATIONS",
          notifications: getScheduledNotifications(),
        });
        break;

      default:
        console.log("Unknown message type:", event.data.type);
    }
  }
});

/**
 * Schedule a notification using IndexedDB for persistence
 */
async function handleScheduleNotification(notification) {
  try {
    const db = await openNotificationDB();
    const transaction = db.transaction(["notifications"], "readwrite");
    const store = transaction.objectStore("notifications");

    await store.put({
      id: notification.id,
      title: notification.title,
      body: notification.body,
      triggerAt: notification.triggerAt,
      url: notification.url,
      icon: notification.icon || "/favicon.png",
      data: notification.data || {},
    });

    console.log("📅 Notification scheduled:", notification.id);
  } catch (error) {
    console.error("Error scheduling notification:", error);
  }
}

/**
 * Cancel a scheduled notification
 */
async function handleCancelNotification(notificationId) {
  try {
    const db = await openNotificationDB();
    const transaction = db.transaction(["notifications"], "readwrite");
    const store = transaction.objectStore("notifications");

    await store.delete(notificationId);
    console.log("🗑️ Notification cancelled:", notificationId);
  } catch (error) {
    console.error("Error cancelling notification:", error);
  }
}

/**
 * Get scheduled notifications
 */
async function getScheduledNotifications() {
  try {
    const db = await openNotificationDB();
    const transaction = db.transaction(["notifications"], "readonly");
    const store = transaction.objectStore("notifications");

    return await store.getAll();
  } catch (error) {
    console.error("Error getting scheduled notifications:", error);
    return [];
  }
}

/**
 * Check and show pending notifications
 */
async function checkAndShowPendingNotifications() {
  try {
    const notifications = await getScheduledNotifications();
    const now = new Date();

    for (const notification of notifications) {
      const triggerTime = new Date(notification.triggerAt);

      if (triggerTime <= now) {
        // Show the notification
        await self.registration.showNotification(notification.title, {
          body: notification.body,
          icon: notification.icon,
          badge: "/favicon.png",
          data: {
            url: notification.url,
            ...notification.data,
          },
          tag: `scheduled-${notification.id}`,
        });

        // Remove from scheduled notifications
        await handleCancelNotification(notification.id);
      }
    }
  } catch (error) {
    console.error("Error checking pending notifications:", error);
  }
}

/**
 * Open IndexedDB for notification storage
 */
function openNotificationDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("TesouroNotifications", 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains("notifications")) {
        const store = db.createObjectStore("notifications", { keyPath: "id" });
        store.createIndex("triggerAt", "triggerAt", { unique: false });
      }
    };
  });
}

/**
 * Set up periodic background sync for notification checking
 */
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "notification-check") {
    console.log("🔄 Periodic sync: checking notifications");
    event.waitUntil(checkAndShowPendingNotifications());
  }
});

console.log("🎯 Tesouro dos Fiéis Notification Service Worker loaded");
