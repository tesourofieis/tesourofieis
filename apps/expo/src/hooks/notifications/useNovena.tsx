import AsyncStorage from "@react-native-async-storage/async-storage";
import { getNovenas } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { differenceInDays } from "date-fns";
import * as Notifications from "expo-notifications";
import { useCallback, useState } from "react";
import { type NotificationPreference, STORAGE_KEYS } from "./types";

const NOVENA = { hour: 20, minute: 0 };
const TITLE = "🙏 Novena";

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
        if (novenaDate > today) {
          const dayDifference = differenceInDays(novenaDate, today);

          // Calculate the current day of the novena
          const currentNovenaDay = 9 - dayDifference;

          // Schedule notifications for remaining days, starting from today
          for (let i = currentNovenaDay; i <= 9; i++) {
            await Notifications.scheduleNotificationAsync({
              content: {
                title: TITLE,
                body: `Dia ${i} da novena de ${novena.name}`,
                data: { url: "devocionario/novenas" },
              },
              trigger: {
                date: new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + (i - currentNovenaDay),
                  NOVENA.hour,
                  NOVENA.minute,
                ),
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
      if (notification.content.title?.startsWith(TITLE)) {
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
