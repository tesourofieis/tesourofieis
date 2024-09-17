import AsyncStorage from "@react-native-async-storage/async-storage";
import { addDays, subDays } from "date-fns";
import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useState } from "react";

import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { yyyyMMDD } from "@tesourofieis/cal/utils";

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

const ANGELUS = [
  { hour: 6, minute: 0 },
  { hour: 12, minute: 0 },
  { hour: 18, minute: 0 },
];

const MASS = { hour: 7, minute: 0 };

const NOVENA = { hour: 20, minute: 0 };

const STORAGE_KEYS = {
  ANGELUS_ENABLED: "angelusEnabled",
  DAILY_MASS_ENABLED: "dailyMassEnabled",
  NOVENA_ENABLED: "novenaEnabled",
};

export const useNotifications = () => {
  const [angelusEnabled, setAngelusEnabled] = useState(true);
  const [dailyMassEnabled, setDailyMassEnabled] = useState(true);
  const [novenaEnabled, setNovenaEnabled] = useState(true);
  const [angelusLoading, setAngelusLoading] = useState(false);
  const [dailyMassLoading, setDailyMassLoading] = useState(false);
  const [novenaLoading, setNovenaLoading] = useState(false);

  const loadPreferences = useCallback(async () => {
    try {
      const [angelusEnabledStr, dailyMassEnabledStr] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.ANGELUS_ENABLED),
        AsyncStorage.getItem(STORAGE_KEYS.DAILY_MASS_ENABLED),
      ]);

      setAngelusEnabled(angelusEnabledStr !== "false");
      setDailyMassEnabled(dailyMassEnabledStr !== "false");
    } catch (error) {
      console.error("Error loading preferences:", error);
    }
  }, []);

  const scheduleAngelus = useCallback(async () => {
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
  }, []);

  const cancelAngelus = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (
        ANGELUS.some(
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          (time) => time.hour === (notification.trigger as any).hour,
        )
      ) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier,
        );
      }
    }
  }, []);

  const prepareDailyMassNotification = useCallback((date: Date) => {
    const calendar = getCalendarDay(yyyyMMDD(date));
    const mass = calendar.mass;

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
  }, []);

  const cleanupNotifications = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();

    for (const notification of scheduledNotifications) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const trigger = notification.trigger as any;
      const isAngelus = ANGELUS.some(
        (time) => time.hour === trigger.hour && time.minute === trigger.minute,
      );

      if (!isAngelus) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier,
        );
      }
    }
  }, []);

  const scheduleMassForWeek = useCallback(async () => {
    await cleanupNotifications();

    const today = new Date();
    const currentDay = today.getDay();

    const notificationPromises = [];

    for (let i = 0; i < 7; i++) {
      const date = addDays(today, i);
      const notificationContent = prepareDailyMassNotification(date);
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
  }, [cleanupNotifications, prepareDailyMassNotification]);

  const scheduleNovena = useCallback(async (mass: Mass, date: Date) => {
    const novenaStartDate = subDays(date, 8);

    for (let i = 0; i < 9; i++) {
      const notificationDate = addDays(novenaStartDate, i);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `🙏 Novena: ${mass.name}`,
          body: `Dia ${i + 1} da Novena`,
          data: { url: "devocionario/novenas" },
          color: getColor(mass.color),
        },
        trigger: {
          date: notificationDate,
          hour: NOVENA.hour, // You can adjust this time as needed
          minute: NOVENA.minute,
        },
      });
    }
  }, []);

  const cleanupNovenas = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (notification.content.title?.startsWith("🙏 Novena:")) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier,
        );
      }
    }
  }, []);

  const scheduleNovenasForWeek = useCallback(async () => {
    await cleanupNovenas();

    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = addDays(today, i);
      const calendar = getCalendarDay(yyyyMMDD(date));
      const novenaObservance = calendar.mass.find((m) => m.novena);

      if (novenaObservance) {
        await scheduleNovena(novenaObservance, date);
      }
    }
  }, [cleanupNovenas, scheduleNovena]);

  const refreshNotifications = useCallback(async () => {
    if (dailyMassEnabled) {
      setDailyMassLoading(true);
      try {
        await cleanupNotifications();
        await scheduleMassForWeek();
      } catch (error) {
        console.error("Error refreshing Daily Mass notifications:", error);
      } finally {
        setDailyMassLoading(false);
      }
    }

    if (angelusEnabled) {
      setAngelusLoading(true);
      try {
        await cancelAngelus();
        await scheduleAngelus();
      } catch (error) {
        console.error("Error refreshing Angelus notifications:", error);
      } finally {
        setAngelusLoading(false);
      }
    }

    if (novenaEnabled) {
      setNovenaLoading(true);
      try {
        await scheduleNovenasForWeek();
      } catch (error) {
        console.error("Error refreshing Novena notifications:", error);
      } finally {
        setNovenaLoading(false);
      }
    }
  }, [
    dailyMassEnabled,
    angelusEnabled,
    novenaEnabled,
    cleanupNotifications,
    scheduleMassForWeek,
    cancelAngelus,
    scheduleAngelus,
    scheduleNovenasForWeek,
  ]);

  useEffect(() => {
    const initializeNotifications = async () => {
      await loadPreferences();
      await refreshNotifications();
    };

    initializeNotifications();
  }, [loadPreferences, refreshNotifications]);

  const toggleAngelus = useCallback(async () => {
    setAngelusLoading(true);
    try {
      const newEnabled = !angelusEnabled;
      setAngelusEnabled(newEnabled);
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
      setAngelusLoading(false);
    }
  }, [angelusEnabled, scheduleAngelus, cancelAngelus]);

  const toggleDailyMass = useCallback(async () => {
    setDailyMassLoading(true);
    try {
      const newEnabled = !dailyMassEnabled;
      setDailyMassEnabled(newEnabled);
      await AsyncStorage.setItem(
        STORAGE_KEYS.DAILY_MASS_ENABLED,
        newEnabled.toString(),
      );
      if (newEnabled) {
        await scheduleMassForWeek();
      } else {
        await cleanupNotifications();
      }
    } catch (error) {
      console.error("Error toggling Daily Mass notifications:", error);
    } finally {
      setDailyMassLoading(false);
    }
  }, [dailyMassEnabled, scheduleMassForWeek, cleanupNotifications]);

  const toggleNovena = useCallback(async () => {
    setNovenaLoading(true);
    try {
      const newEnabled = !novenaEnabled;
      setNovenaEnabled(newEnabled);
      await AsyncStorage.setItem(
        STORAGE_KEYS.NOVENA_ENABLED,
        newEnabled.toString(),
      );
      if (newEnabled) {
        await scheduleNovenasForWeek();
      } else {
        await cleanupNovenas();
      }
    } catch (error) {
      console.error("Error toggling Novena notifications:", error);
    } finally {
      setNovenaLoading(false);
    }
  }, [novenaEnabled, scheduleNovenasForWeek, cleanupNovenas]);

  return {
    angelusEnabled,
    dailyMassEnabled,
    novenaEnabled,
    angelusLoading,
    dailyMassLoading,
    novenaLoading,
    toggleAngelus,
    toggleDailyMass,
    toggleNovena,
  };
};
