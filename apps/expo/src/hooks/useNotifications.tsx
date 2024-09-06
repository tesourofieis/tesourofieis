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

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const DAILY_MASS_TIME = { hour: 7, minute: 0 };

export const useNotifications = () => {
  const [angelusEnabled, setAngelusEnabled] = useState(false);
  const [dailyMassEnabled, setDailyMassEnabled] = useState(false);
  const [angelusLoading, setAngelusLoading] = useState(false);
  const [dailyMassLoading, setDailyMassLoading] = useState(false);

  const angelusOperationInProgress = useRef(false);
  const dailyMassOperationInProgress = useRef(false);
  const isInitialMount = useRef(true);

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
    const day = calendar?.celebration[0] ?? calendar?.tempora[0];

    const titleParts = [];
    const subTitleParts = [];
    let link = "";

    titleParts.push(day?.title || "Feria");
    link = day?.link || "";

    if (calendar?.commemoration.length) {
      subTitleParts.push(`Comemoração: ${calendar?.commemoration[0]?.title}`);
    }

    if (calendar?.local.length) {
      const localInfo = calendar?.local[0];
      subTitleParts.push(
        `Local: ${localInfo?.local?.toLocaleUpperCase().split("-").join(", ")}`,
      );
    }

    if (calendar?.outro.length) {
      subTitleParts.push(`Outro: ${calendar?.outro[0]?.title}`);
    }

    const color =
      calendar?.celebration[0]?.colors[0] ??
      calendar?.tempora[0]?.colors[0] ??
      calendar?.commemoration[0]?.colors[0];

    const mass = titleParts.join(" | ");
    const other = subTitleParts.join(" | ");

    return {
      title: "📅 Missa",
      subtitle: mass ?? other,
      body: other,
      data: { url: link },
      color: getColor(color),
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

  const toggleDailyMass = useCallback(async () => {
    if (dailyMassOperationInProgress.current) return;

    dailyMassOperationInProgress.current = true;
    setDailyMassLoading(true);

    try {
      if (dailyMassEnabled) {
        await cleanupNotifications();
        setDailyMassEnabled(false);
      } else {
        await scheduleMassForWeek();
        setDailyMassEnabled(true);
      }
    } catch (error) {
      console.error("Error toggling Daily Mass notifications:", error);
    } finally {
      setDailyMassLoading(false);
      dailyMassOperationInProgress.current = false;
    }
  }, [dailyMassEnabled, cleanupNotifications, scheduleMassForWeek]);

  const toggleAngelus = useCallback(async () => {
    if (angelusOperationInProgress.current) return;

    angelusOperationInProgress.current = true;
    setAngelusLoading(true);

    try {
      if (angelusEnabled) {
        await cancelAngelus();
        setAngelusEnabled(false);
      } else {
        await scheduleAngelus();
        setAngelusEnabled(true);
      }
    } catch (error) {
      console.error("Error toggling Angelus notifications:", error);
    } finally {
      setAngelusLoading(false);
      angelusOperationInProgress.current = false;
    }
  }, [angelusEnabled, cancelAngelus, scheduleAngelus]);

  return {
    angelusEnabled,
    dailyMassEnabled,
    angelusLoading,
    dailyMassLoading,
    toggleAngelus,
    toggleDailyMass,
  };
};
