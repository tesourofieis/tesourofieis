import { useState, useEffect, useCallback } from "react";
import * as Notifications from "expo-notifications";
import { getCalendarDay } from "@/lib/getCalendar";
import { yyyyMMDD } from "@/lib/utils";

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

const DAILY_MASS_TIME = { hour: 1, minute: 10 };

export const useNotifications = () => {
  const [angelusEnabled, setAngelusEnabled] = useState(false);
  const [dailyMassEnabled, setDailyMassEnabled] = useState(false);

  useEffect(() => {
    const checkExistingNotifications = async () => {
      const scheduledNotifications =
        await Notifications.getAllScheduledNotificationsAsync();

      const hasAngelus = scheduledNotifications.some((notification) =>
        ANGELUS_TIMES.some(
          (time) => time.hour === (notification.trigger as any).hour
        )
      );
      setAngelusEnabled(hasAngelus);

      const hasDailyMass = scheduledNotifications.some(
        (notification) =>
          DAILY_MASS_TIME.hour === (notification.trigger as any).hour
      );
      setDailyMassEnabled(hasDailyMass);
    };

    checkExistingNotifications();
  }, []);

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
        ANGELUS_TIMES.some(
          (time) => time.hour === (notification.trigger as any).hour
        )
      ) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier
        );
      }
    }
    setAngelusEnabled(false);
  }, []);

  const scheduleDailyMass = useCallback(async () => {
    const calendar = getCalendarDay(yyyyMMDD(new Date()));
    const day = calendar?.celebration?.[0] || calendar?.tempora?.[0];

    let titleParts = [];
    let subTitleParts = [];
    let link = "";

    if (day) {
      titleParts.push(day.title || "Feria");
      link = day.link || "";
    }

    if (calendar?.commemoration?.length) {
      subTitleParts.push(`Com. ${calendar.commemoration[0].title}`);
    }

    if (calendar?.local?.length) {
      const localInfo = calendar.local[0];
      subTitleParts.push(
        `Local: ${localInfo.local?.toLocaleUpperCase().split("-").join(", ")}`
      );
    }

    if (calendar?.outro?.length) {
      subTitleParts.push(`Outro: ${calendar.outro[0].title}`);
    }

    const color =
      calendar?.celebration?.[0].colors[0] || calendar?.tempora?.[0].colors[0];

    const notificationTitle = "Missa do Dia";
    const mass = titleParts.join(" - ");
    const other = subTitleParts.join(" - ");

    await Notifications.scheduleNotificationAsync({
      content: {
        title: notificationTitle,
        body: other,
        data: { url: link },
        color: getColor(color),
        subtitle: mass,
      },
      trigger: {
        hour: DAILY_MASS_TIME.hour,
        minute: DAILY_MASS_TIME.minute,
        repeats: true,
      },
    });

    setDailyMassEnabled(true);
  }, []);

  const cancelDailyMass = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (DAILY_MASS_TIME.hour === (notification.trigger as any).hour) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier
        );
      }
    }
    setDailyMassEnabled(false);
  }, []);

  const toggleAngelus = useCallback(async () => {
    if (angelusEnabled) {
      await cancelAngelus();
    } else {
      await scheduleAngelus();
    }
  }, [angelusEnabled, cancelAngelus, scheduleAngelus]);

  const toggleDailyMass = useCallback(async () => {
    if (dailyMassEnabled) {
      await cancelDailyMass();
    } else {
      await scheduleDailyMass();
    }
  }, [dailyMassEnabled, cancelDailyMass, scheduleDailyMass]);

  return {
    angelusEnabled,
    dailyMassEnabled,
    toggleAngelus,
    toggleDailyMass,
  };
};
