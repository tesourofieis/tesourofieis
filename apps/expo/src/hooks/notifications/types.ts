export interface NotificationPreference {
  enabled: boolean;
  loading: boolean;
  toggle: () => Promise<void>;
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
};