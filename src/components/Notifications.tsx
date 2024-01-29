import React, { useEffect } from "react";

export default function Notifications() {
  const requestPermission = () => {
    if (!("Notification" in window)) {
      throw new Error("Notification not supported");
    }
    const permission = window.Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Permission not granted for Notification");
    }
  };

  return (
    <div>
      <button onClick={() => requestPermission()}>Receber notificações</button>
    </div>
  );
}
