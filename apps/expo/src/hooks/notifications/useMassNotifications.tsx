import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCalendarDay } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { addDays, set } from "date-fns";
import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useRef, useState } from "react";

const DAILY_MASS_TIME = { hour: 7, minute: 0 };
const STORAGE_KEY = "daily_mass_enabled";

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

export const useMassNotifications = () => {
  const [enabled, setEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const operationInProgress = useRef(false);

  const checkNotificationPermissions = useCallback(async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      const { status: newStatus } =
        await Notifications.requestPermissionsAsync();
      if (newStatus !== "granted") {
        alert(
          "Notification permissions are required for daily mass notifications.",
        );
        setPermissionGranted(false);
        return;
      }
    }
    setPermissionGranted(true);
  }, []);

  const loadPreferences = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      setEnabled(value === "true");
    } catch (error) {
      console.error("Error loading Daily Mass preferences:", error);
    }
  }, []);

  const savePreferences = useCallback(async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, enabled.toString());
    } catch (error) {
      console.error("Error saving Daily Mass preferences:", error);
    }
  }, [enabled]);

  useEffect(() => {
    void checkNotificationPermissions();
    void loadPreferences();
  }, [checkNotificationPermissions, loadPreferences]);

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
      calendar?.celebration[0]?.colors[0] ?? calendar?.tempora[0]?.colors[0];

    const mass = titleParts.join(" | ");
    const other = subTitleParts.join(" | ");

    return {
      title: "📅 Missa",
      subtitle: mass,
      body: other,
      data: { url: link },
      color: getColor(color),
    };
  }, []);

  const scheduleMassForWeek = useCallback(async () => {
    await cancelDailyMass(); // Cancel existing notifications before scheduling new ones
    const today = new Date();
    const daysToSchedule = 7;

    for (let i = 0; i < daysToSchedule; i++) {
      const date = addDays(today, i);
      const notificationContent = prepareDailyMassNotification(date);

      const scheduledTime = set(date, {
        hours: DAILY_MASS_TIME.hour,
        minutes: DAILY_MASS_TIME.minute,
        seconds: 0,
      });

      await Notifications.scheduleNotificationAsync({
        content: notificationContent,
        trigger: scheduledTime,
      });
    }
  }, [prepareDailyMassNotification]);

  const cancelDailyMass = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (
        // @ts-ignore
        notification.trigger.hour === DAILY_MASS_TIME.hour &&
        // @ts-ignore
        notification.trigger.minute === DAILY_MASS_TIME.minute
      ) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier,
        );
      }
    }
  }, []);

  const toggleDailyMass = useCallback(async () => {
    if (operationInProgress.current || !permissionGranted) return;

    operationInProgress.current = true;
    setLoading(true);

    try {
      if (enabled) {
        await cancelDailyMass();
        setEnabled(false);
        await savePreferences();
      } else {
        await scheduleMassForWeek();
        setEnabled(true);
        await savePreferences();
      }
    } catch (error) {
      console.error("Error toggling Daily Mass notifications:", error);
    } finally {
      setLoading(false);
      operationInProgress.current = false;
    }
  }, [
    enabled,
    cancelDailyMass,
    scheduleMassForWeek,
    permissionGranted,
    savePreferences,
  ]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (enabled) {
      void scheduleMassForWeek();
    }
  }, []);

  return {
    enabled,
    loading,
    toggleDailyMass,
    permissionGranted,
  };
};
