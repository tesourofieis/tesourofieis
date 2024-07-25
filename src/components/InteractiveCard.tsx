import { getCalendarDay } from "../lib/getCalendar";
import { yyyyMMDD } from "../lib/utils";

import { requestPermission } from "@tauri-apps/plugin-notification";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import LinkCard from "./LinkCard";
import Loading from "./Loading";
import Office from "./Office";

export default function InteractiveCard() {
  const [date, setDate] = useState(new Date());
  const [pushSubscription, setPushSubscription] = useState(null);
  const day = getCalendarDay(yyyyMMDD(new Date()));

  useEffect(() => {
    async function setupPushNotifications() {
      try {
        console.log("Starting push notification setup");

        const registration =
          await navigator.serviceWorker.register("/service-worker.js");
        console.log("Service Worker registered:", registration);
        console.log("About to subscribe to push notifications");
        console.log("VAPID Key:", import.meta.env.PUBLIC_VAPID_KEY);

        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            import.meta.env.PUBLIC_VAPID_KEY,
          ),
        });
        console.log("Push subscription successful:", subscription);

        // Rest of your code...
      } catch (error) {
        console.error("Detailed error in push notification setup:", error);
        if (error.name === "NotAllowedError") {
          console.log("Push permission denied");
        } else if (error.name === "InvalidStateError") {
          console.log("Push is already subscribed or in progress");
        }
        // Log any other specific error types you encounter
      }
    }

    setupPushNotifications();
  }, []);

  useEffect(() => {
    // Update date state immediately
    setDate(new Date());
    // Calculate time until next hour
    const now = new Date();
    const msUntilNextHour =
      (60 - now.getMinutes()) * 60 * 1000 -
      now.getSeconds() * 1000 -
      now.getMilliseconds();

    // Timeout to set the interval at the start of the next hour
    const timeoutId = setTimeout(() => {
      setDate(new Date());
      const intervalId = setInterval(
        () => {
          setDate(new Date());
        },
        1000 * 60 * 60,
      ); // Update every hour

      return () => clearInterval(intervalId);
    }, msUntilNextHour);

    return () => clearTimeout(timeoutId);
  }, []);

  function getPrayer(date: Date) {
    const hour = date.getHours();
    const isMorning = hour >= 5 && hour < 10;
    const isNight = hour >= 20 || (hour >= 0 && hour <= 3);
    const isAngelus = hour === 6 || hour === 12 || hour === 18;
    return { isMorning, isNight, isAngelus };
  }

  const currentPrayer = getPrayer(date);

  if (!day) {
    return (
      <div className="shadow border rounded border-sepia-500 dark:border-sepia-700 hover:bg-sepia-100 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-600 gap-5 grid min-h-[140px] w-full place-items-center overflow-x-scroll p-6 lg:overflow-visible">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col shadow border rounded border-sepia-500 dark:border-sepia-700 hover:bg-sepia-100 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-600 no-underline p-4 gap-5">
      <div className="flex justify-between not-content">
        <h2>Dia e Hora</h2>
      </div>
      <span className="font-bold">
        {format(new Date(), "EEEE, MMMM dd", {
          locale: pt,
        })}
      </span>
      <Office />
      {currentPrayer.isAngelus && (
        <LinkCard
          link="/devocionario/dia/angelus"
          title="Angelus"
          description="Hora do Angelus"
        />
      )}
      {currentPrayer.isMorning && (
        <LinkCard
          link="/devocionario/dia/oracaomanha"
          title="Oração da Manhã"
        />
      )}
      {currentPrayer.isNight && (
        <LinkCard
          link="/devocionario/dia/oracaonoite"
          title="Oração da Noite"
        />
      )}

      <h6>Calendário Litúrgico</h6>
      <Calendar />
    </div>
  );
}

// Helper function to convert base64 to Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
