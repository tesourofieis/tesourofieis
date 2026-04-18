import type * as ExpoNotifications from "expo-notifications";

type NotificationListenerSubscription = { remove(): void };

type NotificationPermissionsResponse = {
  status: ExpoNotifications.PermissionStatus;
};

const fallbackNotifications = {
  PermissionStatus: {
    GRANTED: "granted",
    DENIED: "denied",
    UNDETERMINED: "undetermined",
  },
  SchedulableTriggerInputTypes: {
    DAILY: "daily",
    DATE: "date",
  },
  setNotificationHandler: () => {},
  getPermissionsAsync: async (): Promise<NotificationPermissionsResponse> => ({
    status: "undetermined" as ExpoNotifications.PermissionStatus,
  }),
  requestPermissionsAsync: async (): Promise<NotificationPermissionsResponse> => ({
    status: "denied" as ExpoNotifications.PermissionStatus,
  }),
  scheduleNotificationAsync: async () => "",
  cancelAllScheduledNotificationsAsync: async () => {},
  getAllScheduledNotificationsAsync: async () => [] as ExpoNotifications.NotificationRequest[],
  addNotificationResponseReceivedListener: (): NotificationListenerSubscription => ({
    remove: () => {},
  }),
};

let notificationsModule = fallbackNotifications as unknown as typeof ExpoNotifications;
let nativeNotificationsAvailable = false;

try {
  notificationsModule = require("expo-notifications") as typeof ExpoNotifications;
  nativeNotificationsAvailable = true;
} catch (error) {
  console.warn("expo-notifications native module unavailable; notifications disabled.", error);
}

export const Notifications = notificationsModule;
export { nativeNotificationsAvailable };
