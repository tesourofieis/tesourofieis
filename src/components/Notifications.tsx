import { Icon } from "@iconify-icon/react";
import { getToken } from "firebase/messaging";

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { useEffect, useState } from "react";

const VAPID_KEY = import.meta.env.PUBLIC_VAPID_KEY;

const firebaseConfig = {
  projectId: "tesourofieis",
  appId: "1:724364776145:web:37fd967251db6282e96bf0",
  storageBucket: "tesourofieis.appspot.com",
  apiKey: "AIzaSyBwz0aMw5I2bXHnhzG-ZCdNV44DWRxjUFM",
  authDomain: "tesourofieis.firebaseapp.com",
  messagingSenderId: "724364776145",
  measurementId: "G-9CEYEY7DQ8",
};

export default function Notifications() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if the user is already subscribed when the component mounts
    checkSubscriptionStatus();
  }, []);

  const checkSubscriptionStatus = async () => {
    if ("Notification" in window && Notification.permission === "granted") {
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      const token = await getToken(messaging, {
        vapidKey: VAPID_KEY,
      });
      if (token) {
        setIsSubscribed(true);
      }
    }
  };
  const requestPermission = async () => {
    if (!("Notification" in window)) {
      throw new Error("Notification not supported");
    }
    const permission = await window.Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Permission not granted for Notification");
    }

    if (permission === "granted") {
      console.log("PERMISSION GRANTED");
      try {
        const app = initializeApp(firebaseConfig);
        const messaging = getMessaging(app);
        const token = await getToken(messaging, {
          vapidKey: VAPID_KEY,
        });
        if (token) {
          console.log("Token generated:", token);
          await fetch("/api/subscriptions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: { token, topic: "angelus" },
            }),
          });

          setIsSubscribed(true);
        } else {
          console.log("No registration token available.");
        }
      } catch (err) {
        console.error("Error getting token:", err);
      }
    }
  };

  if (window && "Notification" in window && !isSubscribed) {
    return (
      <button
        type="button"
        aria-label="add-notifications"
        className="flex cursor-pointer items-center bg-transparent gap-2"
        onClick={requestPermission}
      >
        <Icon icon="heroicons:bell" className="w-5 h-5" />
        Subscrever notificações
      </button>
    );
  }
}
