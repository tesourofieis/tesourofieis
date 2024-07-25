self.addEventListener("push", function (event) {
  console.log("PUSH", event);
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: "/favicon72.png",
      badge: "/og.png",
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});
