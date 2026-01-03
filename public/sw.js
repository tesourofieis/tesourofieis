/**
 * Handle push messages (for future server-sent notifications)
 */
self.addEventListener("push", (event) => {
  console.log(
    "📧 Push message received:",
    event.data ? event.data.text() : "No data",
  );

  if (!event.data) {
    return;
  }

  try {
    // Try to parse as JSON first
    let data;
    const textData = event.data.text();

    try {
      data = JSON.parse(textData);
    } catch (jsonError) {
      // If JSON parsing fails, create a simple notification with the text
      data = {
        title: "Tesouro dos Fiéis",
        body: textData || "Nova notificação",
        url: "/",
      };
    }

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

    event.waitUntil(
      self.registration.showNotification(
        data.title || "Tesouro dos Fiéis",
        options,
      ),
    );
  } catch (error) {
    console.error("Error handling push message:", error);
  }
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
