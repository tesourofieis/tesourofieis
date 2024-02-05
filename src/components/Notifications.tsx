import { Icon } from "@iconify-icon/react";
import { useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState(Notification.permission);

  const requestPermission = async () => {
    const permission = await window.Notification.requestPermission();
    setNotifications(permission);
  };

  if (notifications !== "granted") {
    return (
      <button
        type="button"
        className="flex cursor-pointer items-center bg-transparent gap-2"
        onClick={() => requestPermission()}
      >
        <Icon icon="heroicons:bell" className="w-5 h-5" />
      </button>
    );
  }
  return (
    <div className="flex gap-2 items-center">
      Reset
      <Icon icon="heroicons:bell-slash" className="w-5 h-5" />
      in the browser settings
    </div>
  );
}
