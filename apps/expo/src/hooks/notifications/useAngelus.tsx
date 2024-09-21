import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { useCallback, useState } from "react";
import { type NotificationPreference, STORAGE_KEYS } from "./types";

const ANGELUS = [
  { hour: 6, minute: 0 },
  { hour: 12, minute: 0 },
  { hour: 18, minute: 0 },
];

export const useAngelus = (): NotificationPreference => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const scheduleAngelus = async () => {
    for (const time of ANGELUS) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "🔔 Hora do Angelus",
          data: { url: "devocionario/dia/angelus" },
          color: "#2196f3",
        },
        trigger: {
          hour: time.hour,
          minute: time.minute,
          repeats: true,
        },
      });
    }
  };

  const cancelAngelus = async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        ANGELUS.some((time) => time.hour === (notification.trigger as any).hour)
      ) {
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
        STORAGE_KEYS.ANGELUS_ENABLED,
        newEnabled.toString(),
      );
      if (newEnabled) {
        await scheduleAngelus();
      } else {
        await cancelAngelus();
      }
    } catch (error) {
      console.error("Error toggling Angelus notifications:", error);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  return { enabled, loading, toggle };
};
