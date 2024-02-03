if ("function" === typeof importScripts) {
  importScripts(
    "https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js",
  );
  importScripts(
    "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js",
  );

  const { initializeApp } = firebase;

  const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.FIREBASE_APP_ID,
    measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);

  const { getMessaging } = firebase.messaging;

  const messaging = getMessaging(app);

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
