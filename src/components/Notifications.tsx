import { Icon } from "@iconify-icon/react";

export default function Notifications() {
  const requestPermission = async () => {
    if (!("Notification" in window)) {
      throw new Error("Notification not supported");
    }
    const permission = await window.Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Permission not granted for Notification");
    }
  };

  if (window && "Notification" in window) {
    const permissionStatus = Notification.permission;

    if (permissionStatus !== "granted") {
      return (
        <button
          type="button"
          className="flex cursor-pointer items-center bg-transparent gap-2"
          onClick={() => requestPermission()}
        >
          <Icon icon="heroicons:bell" className="w-5 h-5" /> Receber
          notificações
        </button>
      );
    }
  }
}
