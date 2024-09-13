import AsyncStorage from "@react-native-async-storage/async-storage";
import { addDays } from "date-fns";
import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useRef, useState } from "react";

import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
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

const ANGELUS_TIMES = [
  { hour: 6, minute: 0 },
  { hour: 12, minute: 0 },
  { hour: 18, minute: 0 },
];

const DAILY_MASS_TIME = { hour: 7, minute: 0 };

const STORAGE_KEYS = {
  ANGELUS_ENABLED: "angelusEnabled",
  DAILY_MASS_ENABLED: "dailyMassEnabled",
};

export const useNotifications = () => {
  const [angelusEnabled, setAngelusEnabled] = useState(true);
  const [dailyMassEnabled, setDailyMassEnabled] = useState(true);
  const [angelusLoading, setAngelusLoading] = useState(false);
  const [dailyMassLoading, setDailyMassLoading] = useState(false);

  const angelusOperationInProgress = useRef(false);
  const dailyMassOperationInProgress = useRef(false);
  const isInitialMount = useRef(true);

  const loadPreferences = useCallback(async () => {
    try {
      const [angelusEnabledStr, dailyMassEnabledStr] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.ANGELUS_ENABLED),
        AsyncStorage.getItem(STORAGE_KEYS.DAILY_MASS_ENABLED),
      ]);

      setAngelusEnabled(angelusEnabledStr === "true");
      setDailyMassEnabled(dailyMassEnabledStr === "true");
    } catch (error) {
      console.error("Error loading preferences:", error);
    }
  }, []);

  const savePreferences = useCallback(async () => {
    try {
      await Promise.all([
        AsyncStorage.setItem(
          STORAGE_KEYS.ANGELUS_ENABLED,
          angelusEnabled.toString(),
        ),
        AsyncStorage.setItem(
          STORAGE_KEYS.DAILY_MASS_ENABLED,
          dailyMassEnabled.toString(),
        ),
      ]);
    } catch (error) {
      console.error("Error saving preferences:", error);
    }
  }, [angelusEnabled, dailyMassEnabled]);

  useEffect(() => {
    loadPreferences();
  }, [loadPreferences]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!isInitialMount.current) {
      savePreferences();
    } else {
      isInitialMount.current = false;
    }
  }, [angelusEnabled, dailyMassEnabled, savePreferences]);

  const cleanupNotifications = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();

    for (const notification of scheduledNotifications) {
      const trigger = notification.trigger;
      const isAngelus = ANGELUS_TIMES.some(
        // @ts-ignore
        (time) => time.hour === trigger.hour && time.minute === trigger.minute,
      );

      if (!isAngelus) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier,
        );
      }
    }
  }, []);

  useEffect(() => {
    const checkExistingNotifications = async () => {
      if (!isInitialMount.current) return;

      setAngelusLoading(true);
      setDailyMassLoading(true);

      try {
        await cleanupNotifications();

        const scheduledNotifications =
          await Notifications.getAllScheduledNotificationsAsync();

        const hasAngelus = scheduledNotifications.some((notification) =>
          // @ts-ignore
          ANGELUS_TIMES.some((time) => time.hour === notification.trigger.hour),
        );
        setAngelusEnabled(hasAngelus);

        const hasDailyMass = scheduledNotifications.some(
          // @ts-ignore
          (notification) => DAILY_MASS_TIME.hour === notification.trigger.hour,
        );
        setDailyMassEnabled(hasDailyMass);
      } catch (error) {
        console.error("Error checking existing notifications:", error);
      } finally {
        setAngelusLoading(false);
        setDailyMassLoading(false);
        isInitialMount.current = false;
      }
    };

    void checkExistingNotifications();
  }, [cleanupNotifications]);

  const scheduleAngelus = useCallback(async () => {
    for (const time of ANGELUS_TIMES) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "🔔 Hora do Angelus",
          data: { url: "devocionario/dia/angelus" },
          color: "#2196f3",
          sound: "angelus.wav",
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
        // @ts-ignore
        ANGELUS_TIMES.some((time) => time.hour === notification.trigger.hour)
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

  const scheduleMassForWeek = useCallback(async () => {
    await cleanupNotifications();

    const today = new Date();
    const currentDay = today.getDay();
    const daysUntilNextSunday = 7 - currentDay;

    for (let i = 0; i <= daysUntilNextSunday; i++) {
      const date = addDays(today, i);
      const notificationContent = prepareDailyMassNotification(date);

      await Notifications.scheduleNotificationAsync({
        content: notificationContent,
        trigger: {
          hour: DAILY_MASS_TIME.hour,
          minute: DAILY_MASS_TIME.minute,
          weekday: ((currentDay + i) % 7) + 1,
          repeats: true,
        },
      });
    }
  }, [cleanupNotifications, prepareDailyMassNotification]);

  const toggleAngelus = useCallback(async () => {
    if (angelusOperationInProgress.current) return;

    angelusOperationInProgress.current = true;
    setAngelusLoading(true);

    try {
      if (angelusEnabled) {
        await cancelAngelus();
      } else {
        await scheduleAngelus();
      }
      setAngelusEnabled(!angelusEnabled);
    } catch (error) {
      console.error("Error toggling Angelus notifications:", error);
    } finally {
      setAngelusLoading(false);
      angelusOperationInProgress.current = false;
    }
  }, [angelusEnabled, cancelAngelus, scheduleAngelus]);

  const toggleDailyMass = useCallback(async () => {
    if (dailyMassOperationInProgress.current) return;

    dailyMassOperationInProgress.current = true;
    setDailyMassLoading(true);

    try {
      if (dailyMassEnabled) {
        await cleanupNotifications();
      } else {
        await scheduleMassForWeek();
      }
      setDailyMassEnabled(!dailyMassEnabled);
    } catch (error) {
      console.error("Error toggling Daily Mass notifications:", error);
    } finally {
      setDailyMassLoading(false);
      dailyMassOperationInProgress.current = false;
    }
  }, [dailyMassEnabled, cleanupNotifications, scheduleMassForWeek]);

  return {
    angelusEnabled,
    dailyMassEnabled,
    angelusLoading,
    dailyMassLoading,
    toggleAngelus,
    toggleDailyMass,
  };
};
