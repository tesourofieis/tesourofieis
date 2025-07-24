import { yyyyMMDD } from "@tesourofieis/cal/utils";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { addDays, subDays } from "date-fns";
import * as Application from "expo-application";
import * as IntentLauncher from "expo-intent-launcher";
import * as Linking from "expo-linking";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert, Platform } from "react-native";
import { useCalendar } from "./calendar";
import { burgundy } from "tailwind.config";
import { FontSize } from "~/app/(tabs)/configurar";

export type Settings = {
  fontSize: "small" | "normal" | "big";
  angelusEnabled: boolean;
  massEnabled: boolean;
  novenaEnabled: boolean;
  officeEnabled: boolean;
  permissionRequested: boolean;
  permissionSoftRejected: boolean;
};

const NOTIFICATIONS = {
  ANGELUS: {
    title: "🔔 Hora do Angelus",
    times: [
      { hour: 6, minute: 0 },
      { hour: 12, minute: 0 },
      { hour: 18, minute: 0 },
    ],
    color: "#2196f3",
    link: "devocionario/dia/angelus",
  },
  MASS: {
    title: "📅 Missa",
    times: { hour: 7, minute: 0 },
  },
  NOVENA: {
    title: "🙏 Novena",
    times: { hour: 20, minute: 0 },
    link: "devocionario/novenas",
  },
  OFFICE: {
    title: "🕰 Hora do Ofício",
    times: [
      { name: "Matinas", hour: 0, link: "devocionario/oficio/matinas" },
      { name: "Laudes", hour: 3, link: "devocionario/oficio/laudes" },
      { name: "Prima", hour: 6, link: "devocionario/oficio/prima" },
      { name: "Terça", hour: 9, link: "devocionario/oficio/terca" },
      { name: "Sexta", hour: 12, link: "devocionario/oficio/sexta" },
      { name: "Noa", hour: 15, link: "devocionario/oficio/noa" },
      { name: "Vésperas", hour: 18, link: "devocionario/oficio/vesperas" },
      { name: "Completas", hour: 21, link: "devocionario/oficio/completas" },
    ],
    color: "#4CAF50",
  },
};

function getColor(color?: string) {
  switch (color) {
    case "w":
      return "#FFFFFFFF"; // white
    case "r":
      return burgundy[500]; // red
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

// Map UI keys to "actual" settings keys for easier updates
const prefKeyMap = {
  ANGELUS: "angelusEnabled",
  MASS: "massEnabled",
  NOVENA: "novenaEnabled",
  OFFICE: "officeEnabled",
} as const;

// Define a key for your settings in AsyncStorage
const SETTINGS_STORAGE_KEY = "app_settings";

// Default settings object - ensure this matches your Settings type
const DEFAULT_SETTINGS: Settings = {
  fontSize: "normal",
  angelusEnabled: true,
  massEnabled: true,
  novenaEnabled: true,
  officeEnabled: false,
  permissionRequested: false,
  permissionSoftRejected: false,
};

// --- Define the Context's Shape ---
type SettingsContextType = {
  settings: Settings; // No longer nullable if you provide defaults
  isLoading: boolean;
  setNotificationPref: (
    key: keyof typeof prefKeyMap,
    enabled: boolean
  ) => Promise<void>;
  list: Notifications.NotificationRequest[];
  permissionStatus: Notifications.PermissionStatus;
  requestPermission: () => Promise<boolean>;
  setFontSize: (fontSize: FontSize) => Promise<void>;
  openSettings: () => Promise<void>;
  isSoftRejected: boolean;
};

// --- Create the Context ---
const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

// --- Create the Provider Component ---
export function SettingsProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const { calendar, novenas } = useCalendar();

  // --- State Management ---
  // Initialize with DEFAULT_SETTINGS to ensure 'settings' is never null in consuming components
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<Notifications.NotificationRequest[]>([]);
  const [permissionStatus, setPermissionStatus] =
    useState<Notifications.PermissionStatus>(
      Notifications.PermissionStatus.UNDETERMINED
    );

  // --- AsyncStorage Functions (moved from services/settings.ts) ---

  const getSettingsFromStorage = useCallback(async (): Promise<Settings> => {
    console.log("Attempting to retrieve settings from AsyncStorage...");
    try {
      const jsonValue = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);
      if (jsonValue != null) {
        const parsedSettings: Settings = JSON.parse(jsonValue);
        console.log("Settings retrieved from AsyncStorage:", parsedSettings);
        // Merge with defaults to ensure all keys exist in case of schema evolution
        return { ...DEFAULT_SETTINGS, ...parsedSettings };
      } else {
        console.log("No settings found in AsyncStorage, using default.");
        // Store defaults if not found for future consistency
        await AsyncStorage.setItem(
          SETTINGS_STORAGE_KEY,
          JSON.stringify(DEFAULT_SETTINGS)
        );
        return DEFAULT_SETTINGS;
      }
    } catch (e: any) {
      console.error("Error retrieving settings from AsyncStorage:", e);
      // Fallback to default in case of any read error
      return DEFAULT_SETTINGS;
    }
  }, []); // No dependencies, as DEFAULT_SETTINGS is a constant

  const updateSettingsInStorage = useCallback(
    async (newValues: Partial<Settings>): Promise<Settings> => {
      console.debug("updateSettingsInStorage called with:", newValues);
      try {
        // Get current settings (already managed by useState)
        const currentSettings = settings;

        // Merge new values with current settings
        const updatedSettings: Settings = {
          ...currentSettings,
          ...newValues,
        };

        // Save the merged settings back to AsyncStorage
        await AsyncStorage.setItem(
          SETTINGS_STORAGE_KEY,
          JSON.stringify(updatedSettings)
        );
        console.log(
          "Settings successfully updated and saved:",
          updatedSettings
        );
        return updatedSettings;
      } catch (e: any) {
        console.error("Error updating settings in AsyncStorage:", e);
        throw new Error(`Failed to update settings: ${e.message}`);
      }
    },
    [settings] // Dependency: `settings` state for merging
  );

  // --- Core Functions (remaining as is, using `updateSettingsInStorage`) ---
  const updateSetting = useCallback(
    async (newValues: Partial<Settings>) => {
      console.debug("updateSetting (internal)", newValues);
      const updated = await updateSettingsInStorage(newValues);
      setSettings(updated); // Update React state after successful storage update
    },
    [updateSettingsInStorage]
  );

  const checkPermissionStatus = useCallback(async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setPermissionStatus(status);
    return status;
  }, []);

  const openSettings = useCallback(async () => {
    try {
      if (Platform.OS === "ios") {
        await Linking.openSettings();
      } else {
        const packageName = Application.applicationId;
        await IntentLauncher.startActivityAsync(
          IntentLauncher.ActivityAction.APPLICATION_DETAILS_SETTINGS,
          { data: `package:${packageName}` }
        );
      }
    } catch (error) {
      console.error("Failed to open settings:", error);
      Alert.alert(
        "Erro",
        "Não foi possível abrir as configurações. Por favor, abra manualmente configurações do sistema."
      );
    }
  }, []);

  const scheduleNotification = useCallback(
    async (
      notification: Notifications.NotificationRequestInput,
      identifier: string
    ) => {
      if (permissionStatus !== "granted") return;
      await Notifications.scheduleNotificationAsync({
        ...notification,
        identifier,
      });
    },
    [permissionStatus]
  );

  const syncNotifications = useCallback(async () => {
    // Only proceed if settings are loaded and permissions are granted
    if (permissionStatus !== "granted" || !settings) {
      console.log(
        "Cancelling all scheduled notifications due to permissions or settings state."
      );
      await Notifications.cancelAllScheduledNotificationsAsync();
      setList([]); // Clear current list of notifications
      return;
    }

    console.log(
      "Syncing notifications based on current settings and permissions."
    );
    await Notifications.cancelAllScheduledNotificationsAsync(); // Clear existing to prevent duplicates

    // Schedule Angelus
    if (settings.angelusEnabled) {
      for (const time of NOTIFICATIONS.ANGELUS.times) {
        const identifier = `angelus-${time.hour}-${time.minute}`;
        await scheduleNotification(
          {
            content: {
              title: NOTIFICATIONS.ANGELUS.title,
              data: { url: NOTIFICATIONS.ANGELUS.link },
              color: NOTIFICATIONS.ANGELUS.color,
            },
            trigger: {
              type: Notifications.SchedulableTriggerInputTypes.DAILY,
              hour: time.hour,
              minute: time.minute,
            },
          },
          identifier
        );
      }
    }
    // Schedule Mass
    if (settings.massEnabled) {
      const today = new Date();
      for (let i = 0; i < 30; i++) {
        const date = addDays(today, i);
        const dayMass = calendar.find((d) => d.date === yyyyMMDD(date))?.mass;
        if (dayMass?.length) {
          const identifier = `mass-${yyyyMMDD(date)}`;
          await scheduleNotification(
            {
              content: {
                title: NOTIFICATIONS.MASS.title,
                body: dayMass.map((i) => i.name).join("\n"),
                data: { url: dayMass[0].link },
                color: getColor(dayMass[0].color),
              },
              trigger: {
                type: Notifications.SchedulableTriggerInputTypes.DATE,
                date: new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  NOTIFICATIONS.MASS.times.hour,
                  NOTIFICATIONS.MASS.times.minute
                ),
              },
            },
            identifier
          );
        }
      }
    }

    // Schedule Novena
    if (settings.novenaEnabled && novenas) {
      const today = new Date();
      for (const novena of novenas) {
        const novenaDate = subDays(new Date(novena.date), 1);
        if (novenaDate > today) {
          const dayDifference = Math.ceil(
            (novenaDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
          );
          const currentNovenaDay = Math.max(1, 9 - dayDifference);
          for (let i = currentNovenaDay; i <= 9; i++) {
            const identifier = `novena-${novena.name}-${i}`;
            await scheduleNotification(
              {
                content: {
                  title: NOTIFICATIONS.NOVENA.title,
                  body: `Dia ${i} da novena de ${novena.name}`,
                  data: { url: "devocionario/novenas" },
                },
                trigger: {
                  type: Notifications.SchedulableTriggerInputTypes.DATE,
                  date: new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() + (i - currentNovenaDay),
                    NOTIFICATIONS.NOVENA.times.hour,
                    NOTIFICATIONS.NOVENA.times.minute
                  ),
                },
              },
              identifier
            );
          }
        }
      }
    }
    // Schedule Office
    if (settings.officeEnabled) {
      for (const office of NOTIFICATIONS.OFFICE.times) {
        const identifier = `office-${office.name}`;
        await scheduleNotification(
          {
            content: {
              title: `${NOTIFICATIONS.OFFICE.title} ${office.name}`,
              body: "Pequeno Ofício de Nossa Senhora",
              data: { url: office.link },
              color: NOTIFICATIONS.OFFICE.color,
            },
            trigger: {
              type: Notifications.SchedulableTriggerInputTypes.DAILY,
              hour: office.hour,
              minute: 0,
            },
          },
          identifier
        );
      }
    }

    const scheduled = await Notifications.getAllScheduledNotificationsAsync();
    setList(scheduled);
  }, [permissionStatus, settings, calendar, novenas, scheduleNotification]);

  const requestPermission = useCallback(async () => {
    if (!settings) return false; // Should not happen with default initialization

    const { status: currentStatus } = await Notifications.getPermissionsAsync();
    if (currentStatus === "granted") {
      setPermissionStatus(Notifications.PermissionStatus.GRANTED);
      await updateSetting({ permissionSoftRejected: false });
      return true;
    }

    if (
      currentStatus === Notifications.PermissionStatus.DENIED &&
      settings.permissionRequested === true
    ) {
      Alert.alert(
        "Notificações desativadas",
        "Para receber lembretes de oração, por favor active as notificações nas configurações do sistema.",
        [
          { text: "Mais tarde", style: "cancel" },
          { text: "Abrir Configurações", onPress: openSettings },
        ]
      );
      return false;
    }

    const shouldProceed = await new Promise<boolean>((resolve) => {
      Alert.alert(
        "Notificações do Tesouro dos Fiéis",
        "Pode configurar as notificações para o Angelus, a Missa do Dia, as Novenas ou o Pequeno Oficio",
        [
          { text: "Agora não", style: "cancel", onPress: () => resolve(false) },
          { text: "Permitir", onPress: () => resolve(true) },
        ]
      );
    });

    if (!shouldProceed) {
      await updateSetting({
        permissionSoftRejected: true,
      });
      return false;
    }

    const { status } = await Notifications.requestPermissionsAsync();
    setPermissionStatus(status);
    await updateSetting({
      permissionRequested: true,
      permissionSoftRejected: false,
    });

    if (status === "granted") {
      // Immediately sync notifications after permission is granted
      await syncNotifications();
    }

    return status === "granted";
  }, [openSettings, settings, updateSetting, syncNotifications]);

  // Initial load from AsyncStorage
  useEffect(() => {
    const init = async () => {
      try {
        const loadedSettings = await getSettingsFromStorage();
        setSettings(loadedSettings); // Set state with loaded settings
        await checkPermissionStatus();
      } catch (error) {
        console.error("Failed to initialize settings:", error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, [getSettingsFromStorage, checkPermissionStatus]); // Dependencies

  // Re-sync notifications if permissions or settings change
  useEffect(() => {
    // Only call syncNotifications if not in loading state and settings are loaded
    if (!isLoading) {
      syncNotifications();
    }
  }, [syncNotifications, isLoading]); // Dependency: isLoading, as syncNotifications depends on 'settings' being ready

  // Handle notification taps
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data?.url;
        if (url) {
          // @ts-ignore
          router.navigate(url as string);
        }
      }
    );
    return () => subscription.remove();
  }, [router]);

  const setNotificationPref = useCallback(
    async (key: keyof typeof prefKeyMap, enabled: boolean) => {
      if (enabled && permissionStatus !== "granted") {
        const granted = await requestPermission();
        if (!granted) return;
      }
      const dbKey = prefKeyMap[key];
      await updateSetting({ [dbKey]: enabled });
    },
    [permissionStatus, requestPermission, updateSetting]
  );

  const setFontSize = useCallback(
    async (fontSize: FontSize) => {
      console.debug("setFontSize", fontSize);
      await updateSetting({ fontSize: fontSize });
    },
    [updateSetting]
  );

  return (
    <SettingsContext.Provider
      value={{
        settings,
        isLoading,
        setNotificationPref,
        setFontSize,
        list,
        permissionStatus,
        requestPermission,
        openSettings,
        isSoftRejected: settings.permissionSoftRejected === true,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

// --- Custom Hook ---
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
