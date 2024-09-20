import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { useCallback, useState } from "react";
import { type NotificationPreference, STORAGE_KEYS } from "./types";

const OFFICE_HOURS = [
  { name: "Matinas", hour: 0, link: "/devocionario/oficio/matinas" },
  { name: "Laudes", hour: 3, link: "/devocionario/oficio/laudes" },
  { name: "Prima", hour: 6, link: "/devocionario/oficio/prima" },
  { name: "Terça", hour: 9, link: "/devocionario/oficio/terca" },
  { name: "Sexta", hour: 12, link: "/devocionario/oficio/sexta" },
  { name: "Noa", hour: 15, link: "/devocionario/oficio/noa" },
  { name: "Vésperas", hour: 18, link: "/devocionario/oficio/vesperas" },
  { name: "Completas", hour: 21, link: "/devocionario/oficio/completas" },
];

export const useOffice = (): NotificationPreference => {
  const [enabled, setEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const scheduleOffice = async () => {
    for (const office of OFFICE_HOURS) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `🕰️ Hora do Ofício: ${office.name}`,
          body: "Pequeno Ofício de Nossa Senhora",
          data: { url: office.link },
          color: "#4CAF50",
        },
        trigger: {
          hour: office.hour,
          minute: 0,
          repeats: true,
        },
      });
    }
  };

  const cancelOffice = async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      console.log(notification);
      if (notification.content.title?.startsWith("🕰️ Hora do Ofício:")) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier,
        );
      }
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const toggle = useCallback(async () => {
    setLoading(true);
    try {
      const newEnabled = !enabled;
      setEnabled(newEnabled);
      await AsyncStorage.setItem(
        STORAGE_KEYS.OFFICE_ENABLED,
        newEnabled.toString(),
      );
      if (newEnabled) {
        await scheduleOffice();
      } else {
        await cancelOffice();
      }
    } catch (error) {
      console.error("Error toggling Office notifications:", error);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  return { enabled, loading, toggle };
};
