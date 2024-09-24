export interface NotificationPreference {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  toggle: () => Promise<void>;
  schedule?: () => Promise<void>;
}

export interface NotificationHookResult {
  angelus: NotificationPreference;
  mass: NotificationPreference;
  novena: NotificationPreference;
  office: NotificationPreference;
}

export const STORAGE_KEYS = {
  ANGELUS_ENABLED: "angelusEnabled",
  DAILY_MASS_ENABLED: "dailyMassEnabled",
  NOVENA_ENABLED: "novenaEnabled",
  OFFICE_ENABLED: "officeEnabled",
  LAST_NOTIFICATION_REFRESH: "lastnotificationrefresh",
  SCHEDULED_NOTIFICATIONS: "scheduleNotifications",
};
