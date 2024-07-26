import { Icon } from "@iconify-icon/react";
import { getToken } from "firebase/messaging";

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

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
          vapidKey:
            "BLXxCylmD8kSOPTts6asb4h9HfO_noXt4dPUh8j_mSV327h3YEIroI-PdUzKnh35cEe7DFYYHoA3UG_3mvMVG9M",
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
        } else {
          console.log("No registration token available.");
        }
      } catch (err) {
        console.error("Error getting token:", err);
      }
    }
  };

  if (window && "Notification" in window) {
    const permissionStatus = Notification.permission;

    return (
      <button
        type="button"
        aria-label="add-notifications"
        className="flex cursor-pointer items-center bg-transparent gap-2"
        disabled={permissionStatus === "granted"}
        onClick={() => requestPermission()}
      >
        <Icon icon="heroicons:bell" className="w-5 h-5" />
      </button>
    );
  }
}
