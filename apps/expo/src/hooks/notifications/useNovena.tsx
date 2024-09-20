import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { addDays, subDays } from "date-fns";
import * as Notifications from "expo-notifications";
import { useCallback, useState } from "react";
import { type NotificationPreference, STORAGE_KEYS } from "../useNotifications";

const NOVENA = { hour: 20, minute: 0 };

export const useNovena = (): NotificationPreference => {
  const [enabled, setEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const scheduleNovena = async (mass: Mass, date: Date) => {
    const novenaStartDate = subDays(date, 8);

    for (let i = 0; i < 9; i++) {
      const notificationDate = addDays(novenaStartDate, i);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `🙏 Novena: ${mass.name}`,
          body: `Dia ${i + 1} da Novena`,
          data: { url: "devocionario/novenas" },
        },
        trigger: {
          date: notificationDate,
          hour: NOVENA.hour,
          minute: NOVENA.minute,
        },
      });
    }
  };

  const scheduleNovenasForWeek = async () => {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = addDays(today, i);
      const calendar = getCalendarDay(yyyyMMDD(date));
      const novenaObservance = calendar.mass.find((m) => m.novena);

      if (novenaObservance) {
        await scheduleNovena(novenaObservance, date);
      }
    }
  };

  const cancelNovenas = async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (notification.content.title?.startsWith("🙏 Novena:")) {
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
        await scheduleNovenasForWeek();
      } else {
        await cancelNovenas();
      }
    } catch (error) {
      console.error("Error toggling Novena notifications:", error);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  return { enabled, loading, toggle };
};
