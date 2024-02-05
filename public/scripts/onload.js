if ("function" === typeof importScripts) {
  importScripts(
    "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js",
  );
  const { getMessaging } = firebase.messaging;

  const messaging = getMessaging(firebaseApp);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        getToken(messaging, {
          vapidKey: import.meta.env.FIREBASE_VAPID_KEY,
          serviceWorkerRegistration: registration,
        }).then((currentToken) => {
          console.log(currentToken);
        });
      });
  }
}
