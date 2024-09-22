import AsyncStorage from "@react-native-async-storage/async-storage";
import { getNovenas } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { differenceInDays } from "date-fns";
import * as Notifications from "expo-notifications";
import { useCallback, useState } from "react";
import { type NotificationPreference, STORAGE_KEYS } from "./types";

const NOVENA = { hour: 20, minute: 0 };

export const useNovena = (): NotificationPreference => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const schedule = async () => {
    const today = new Date();

    // clear old notifications
    await cancelNovenas();

    const novenas = getNovenas(yyyyMMDD(today));
    if (novenas) {
      for (const novena of novenas) {
        const novenaDate = new Date(novena.date);
        if (novenaDate >= today) {
          const dayDifference = differenceInDays(novenaDate, today);
          const novenaDay = 9 - dayDifference;

          if (novenaDay > 0 && novenaDay <= 9) {
            await Notifications.scheduleNotificationAsync({
              content: {
                title: "🙏 Novena",
                body: `Dia ${novenaDay} da novena de ${novena.name}`,
                data: { url: "devocionario/novenas" },
              },
              trigger: {
                date: novenaDate,
                hour: NOVENA.hour,
                minute: NOVENA.minute,
              },
            });
          }
        }
      }
    }
  };

  const cancelNovenas = async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (notification.content.title?.startsWith("🙏 Novena")) {
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
        STORAGE_KEYS.NOVENA_ENABLED,
        newEnabled.toString(),
      );
      if (newEnabled) {
        await schedule();
      } else {
        await cancelNovenas();
      }
    } catch (error) {
      console.error("Error toggling Novena notifications:", error);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  return { enabled, setEnabled, loading, toggle, schedule };
};
