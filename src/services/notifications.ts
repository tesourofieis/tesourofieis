import type * as ExpoNotifications from "expo-notifications";

type NotificationListenerSubscription = { remove(): void };

type NotificationPermissionsResponse = {
  status: ExpoNotifications.PermissionStatus;
};

/** The subset of the expo-notifications API this app consumes. */
type NotificationsContract = {
  DEFAULT_ACTION_IDENTIFIER: typeof ExpoNotifications.DEFAULT_ACTION_IDENTIFIER;
  PermissionStatus: typeof ExpoNotifications.PermissionStatus;
  SchedulableTriggerInputTypes: typeof ExpoNotifications.SchedulableTriggerInputTypes;
  setNotificationHandler(
    handler: Parameters<typeof ExpoNotifications.setNotificationHandler>[0],
  ): void;
  getPermissionsAsync(): Promise<NotificationPermissionsResponse>;
  requestPermissionsAsync(): Promise<NotificationPermissionsResponse>;
  scheduleNotificationAsync(
    ...args: Parameters<typeof ExpoNotifications.scheduleNotificationAsync>
  ): Promise<string>;
  cancelAllScheduledNotificationsAsync(): Promise<void>;
  getAllScheduledNotificationsAsync(): Promise<ExpoNotifications.NotificationRequest[]>;
  getLastNotificationResponse(): ExpoNotifications.NotificationResponse | null;
  clearLastNotificationResponse(): void;
  addNotificationResponseReceivedListener(
    listener: Parameters<typeof ExpoNotifications.addNotificationResponseReceivedListener>[0],
  ): NotificationListenerSubscription;
};

// The fallback shim decodes its plain-string members into the real enum
// shapes at this boundary; each assertion is single and targeted.
const fallbackNotifications: NotificationsContract = {
  DEFAULT_ACTION_IDENTIFIER: "expo.modules.notifications.actions.DEFAULT",
  PermissionStatus: {
    GRANTED: "granted",
    DENIED: "denied",
    UNDETERMINED: "undetermined",
  } as typeof ExpoNotifications.PermissionStatus,
  SchedulableTriggerInputTypes: {
    DAILY: "daily",
    DATE: "date",
  } as typeof ExpoNotifications.SchedulableTriggerInputTypes,
  setNotificationHandler: () => {},
  getPermissionsAsync: async () => ({
    status: "undetermined" as ExpoNotifications.PermissionStatus,
  }),
  requestPermissionsAsync: async () => ({
    status: "denied" as ExpoNotifications.PermissionStatus,
  }),
  scheduleNotificationAsync: async () => "",
  cancelAllScheduledNotificationsAsync: async () => {},
  getAllScheduledNotificationsAsync: async () => [],
  getLastNotificationResponse: () => null,
  clearLastNotificationResponse: () => {},
  addNotificationResponseReceivedListener: () => ({
    remove: () => {},
  }),
};

let notificationsModule: NotificationsContract = fallbackNotifications;
let nativeNotificationsAvailable = false;

try {
  // oxlint-disable-next-line typescript/no-require-imports -- optional native module, must not throw at import time
  notificationsModule = require("expo-notifications") as NotificationsContract;
  nativeNotificationsAvailable = true;
} catch (error) {
  console.warn("expo-notifications native module unavailable; notifications disabled.", error);
}

export const Notifications = notificationsModule;
export { nativeNotificationsAvailable };
