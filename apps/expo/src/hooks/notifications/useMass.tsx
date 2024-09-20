import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { addDays } from "date-fns";
import * as Notifications from "expo-notifications";
import { useCallback, useState } from "react";
import { type NotificationPreference, STORAGE_KEYS } from "../useNotifications";

function getColor(color?: string) {
  switch (color) {
    case "w":
      return "#FFFFFFFF"; // white
    case "r":
      return "#FFFF0000"; // red
    case "g":
      return "#FF00FF00"; // green
    case "v":
      return "#FFEE82EE"; // violet
    case "b":
      return "#FF000000"; // black
    default:
      return "#FF808080"; // gray
  }
}

function prepareMassNotification(date: Date) {
  const calendar = getCalendarDay(yyyyMMDD(date));
  const mass = calendar?.mass;

  const titleParts = mass[0].name;
  const subTitleParts = mass.filter((_m, i) => i !== 0);

  const other = subTitleParts.map((i) => i.name).join(" | ");

  return {
    title: `📅 ${titleParts ?? other}`,
    subtitle: titleParts ? other : "",
    body: titleParts ? other : "",
    data: { url: mass[0].link },
    color: getColor(mass[0].color),
  };
}

const MASS = { hour: 7, minute: 0 };

export const useMass = (): NotificationPreference => {
  const [enabled, setEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const scheduleMassForWeek = async () => {
    const today = new Date();
    const currentDay = today.getDay();

    const notificationPromises = [];

    for (let i = 0; i < 7; i++) {
      const date = addDays(today, i);
      const notificationContent = prepareMassNotification(date);
      notificationPromises.push(
        Notifications.scheduleNotificationAsync({
          content: notificationContent,
          trigger: {
            hour: MASS.hour,
            minute: MASS.minute,
            weekday: ((currentDay + i) % 7) + 1,
            repeats: true,
          },
        }),
      );
    }

    await Promise.all(notificationPromises);
  };

  const cancelMass = async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        (notification.trigger as any).hour === MASS.hour &&
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        (notification.trigger as any).minute === MASS.minute
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
        STORAGE_KEYS.DAILY_MASS_ENABLED,
        newEnabled.toString(),
      );
      if (newEnabled) {
        await scheduleMassForWeek();
      } else {
        await cancelMass();
      }
    } catch (error) {
      console.error("Error toggling Mass notifications:", error);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  return { enabled, loading, toggle };
};
