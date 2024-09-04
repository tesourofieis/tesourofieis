import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "date-fns";
import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useRef, useState } from "react";

const ANGELUS_TIMES = [
  { hour: 6, minute: 0 },
  { hour: 12, minute: 0 },
  { hour: 18, minute: 0 },
];

const STORAGE_KEY = "angelus_enabled";

export const useAngelusNotifications = () => {
  const [enabled, setEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const operationInProgress = useRef(false);

  const checkNotificationPermissions = useCallback(async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      const { status: newStatus } =
        await Notifications.requestPermissionsAsync();
      setPermissionGranted(newStatus === "granted");
    } else {
      setPermissionGranted(true);
    }
  }, []);

  const loadPreferences = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      setEnabled(value === "true");
    } catch (error) {
      console.error("Error loading Angelus preferences:", error);
    }
  }, []);

  const savePreferences = useCallback(async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, enabled.toString());
    } catch (error) {
      console.error("Error saving Angelus preferences:", error);
    }
  }, [enabled]);

  useEffect(() => {
    void checkNotificationPermissions();
    void loadPreferences();
  }, [checkNotificationPermissions, loadPreferences]);

  const scheduleAngelus = useCallback(async () => {
    for (const time of ANGELUS_TIMES) {
      const now = new Date();
      const scheduledTime = set(now, {
        hours: time.hour,
        minutes: time.minute,
        seconds: 0,
      });
      if (scheduledTime <= now) {
        scheduledTime.setDate(scheduledTime.getDate() + 1);
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "🔔 Hora do Angelus",
          data: { url: "devocionario/dia/angelus" },
          color: "#2196f3",
          sound: "angelus.wav",
        },
        trigger: scheduledTime,
      });
    }
  }, []);

  const cancelAngelus = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (
        ANGELUS_TIMES.some(
          (time) =>
            // @ts-ignore
            time.hour === notification.trigger.hour &&
            // @ts-ignore
            time.minute === notification.trigger.minute,
        )
      ) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier,
        );
      }
    }
  }, []);

  const toggleAngelus = useCallback(async () => {
    if (operationInProgress.current || !permissionGranted) return;

    operationInProgress.current = true;
    setLoading(true);

    try {
      if (enabled) {
        await cancelAngelus();
        setEnabled(false);
        await savePreferences();
      } else {
        await scheduleAngelus();
        setEnabled(true);
        await savePreferences();
      }
    } catch (error) {
      console.error("Error toggling Angelus notifications:", error);
    } finally {
      setLoading(false);
      operationInProgress.current = false;
    }
  }, [
    enabled,
    cancelAngelus,
    scheduleAngelus,
    permissionGranted,
    savePreferences,
  ]);

  return {
    enabled,
    loading,
    toggleAngelus,
    permissionGranted,
  };
};
