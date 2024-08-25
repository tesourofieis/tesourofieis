import { useCallback, useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import { addDays } from "date-fns";

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

const DAILY_MASS_TIME = { hour: 8, minute: 0 };

export const useNotifications = () => {
  const [angelusEnabled, setAngelusEnabled] = useState(false);
  const [dailyMassEnabled, setDailyMassEnabled] = useState(false);

  const cleanupNotifications = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();

    for (const notification of scheduledNotifications) {
      const trigger = notification.trigger;
      const isAngelus = ANGELUS_TIMES.some(
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
      await cleanupNotifications();

      const scheduledNotifications =
        await Notifications.getAllScheduledNotificationsAsync();

      const hasAngelus = scheduledNotifications.some((notification) =>
        ANGELUS_TIMES.some((time) => time.hour === notification.trigger.hour),
      );
      setAngelusEnabled(hasAngelus);

      const hasDailyMass = scheduledNotifications.some(
        (notification) => DAILY_MASS_TIME.hour === notification.trigger.hour,
      );
      setDailyMassEnabled(hasDailyMass);
    };

    void checkExistingNotifications();
  }, [cleanupNotifications]);

  const scheduleAngelus = useCallback(async () => {
    for (const time of ANGELUS_TIMES) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Tesouro dos Fiéis",
          body: "Angelus 🙏",
          data: { url: "/modal?devocionario/dia/angelus" },
        },
        trigger: {
          hour: time.hour,
          minute: time.minute,
          repeats: true,
        },
      });
    }
    setAngelusEnabled(true);
  }, []);

  const cancelAngelus = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (
        ANGELUS_TIMES.some((time) => time.hour === notification.trigger.hour)
      ) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier,
        );
      }
    }
    setAngelusEnabled(false);
  }, []);

  const prepareDailyMassNotification = useCallback((date: Date) => {
    const calendar = getCalendarDay(yyyyMMDD(date));
    if (calendar) {
      const day = calendar.celebration[0] ?? calendar.tempora[0];

      const titleParts = [];
      const subTitleParts = [];
      let link = "";

      if (day) {
        titleParts.push(day.title || "Feria");
        link = day.link || "";
      }

      if (calendar.commemoration.length) {
        subTitleParts.push(`Com. ${calendar.commemoration[0]?.title}`);
      }

      if (calendar.local.length) {
        const localInfo = calendar.local[0];
        subTitleParts.push(
          `Local: ${localInfo?.local?.toLocaleUpperCase().split("-").join(", ")}`,
        );
      }

      if (calendar.outro.length) {
        subTitleParts.push(`Outro: ${calendar.outro[0]?.title}`);
      }

      const color =
        calendar.celebration[0]?.colors[0] ?? calendar.tempora[0]?.colors[0];

      const notificationTitle = "Missa do Dia";
      const mass = titleParts.join(" - ");
      const other = subTitleParts.join(" - ");

      return {
        title: notificationTitle,
        body: other,
        data: { url: link },
        color: getColor(color),
        subtitle: mass,
      };
    }
  }, []);

  const scheduleMassForWeek = useCallback(async () => {
    await cleanupNotifications(); // Clean up old notifications if necessary

    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const daysUntilNextSunday = 7 - currentDay;

    for (let i = 0; i <= daysUntilNextSunday; i++) {
      const date = addDays(today, i);
      const notificationContent = prepareDailyMassNotification(date);

      await Notifications.scheduleNotificationAsync({
        content: notificationContent ?? "",
        trigger: {
          hour: DAILY_MASS_TIME.hour,
          minute: DAILY_MASS_TIME.minute,
          weekday: ((currentDay + i) % 7) + 1, // Adjust to match the correct weekday (1 = Sunday, 7 = Saturday)
          repeats: true,
        },
      });
    }
    setDailyMassEnabled(true);
  }, [prepareDailyMassNotification, cleanupNotifications]);

  useEffect(() => {
    // Reschedule notifications every time the app runs
    void scheduleMassForWeek();
  }, [scheduleMassForWeek]);

  const toggleDailyMass = useCallback(async () => {
    if (dailyMassEnabled) {
      await cleanupNotifications();
      setDailyMassEnabled(false);
    } else {
      await scheduleMassForWeek();
    }
  }, [dailyMassEnabled, cleanupNotifications, scheduleMassForWeek]);

  const toggleAngelus = useCallback(async () => {
    if (angelusEnabled) {
      await cancelAngelus();
    } else {
      await scheduleAngelus();
    }
  }, [angelusEnabled, cancelAngelus, scheduleAngelus]);

  return {
    angelusEnabled,
    dailyMassEnabled,
    toggleAngelus,
    toggleDailyMass,
  };
};
