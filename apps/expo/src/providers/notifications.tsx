import AsyncStorage from "@react-native-async-storage/async-storage";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { addDays, subDays } from "date-fns";
import * as Application from "expo-application";
import * as IntentLauncher from "expo-intent-launcher";
import * as Linking from "expo-linking";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert, Platform } from "react-native";
import { useCalendar } from "./calendar";

// Storage keys for permission state
const STORAGE_KEYS = {
  PERMISSION_REQUESTED: "notification_permission_requested",
  PERMISSION_SOFT_REJECTED: "notification_permission_soft_rejected",
  LAST_PROMPT_DATE: "notification_last_prompt_date",
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

interface NotificationPreference {
  enabled: boolean;
}

interface NotificationPreferences {
  ANGELUS: NotificationPreference;
  MASS: NotificationPreference;
  NOVENA: NotificationPreference;
  OFFICE: NotificationPreference;
}

type NotificationsContextType = {
  notificationPrefs: NotificationPreferences;
  setNotificationPref: (
    key: keyof NotificationPreferences,
    enabled: boolean,
  ) => Promise<void>;
  list: Notifications.NotificationRequest[];
  permissionStatus: Notifications.PermissionStatus;
  requestPermission: () => Promise<boolean>;
  openSettings: () => Promise<void>;
  isSoftRejected: boolean;
};

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export function NotificationsProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const [list, setList] = useState<Notifications.NotificationRequest[]>([]);
  const [permissionStatus, setPermissionStatus] =
    useState<Notifications.PermissionStatus>(
      Notifications.PermissionStatus.UNDETERMINED,
    );
  const [notificationPrefs, setNotificationPrefs] =
    useState<NotificationPreferences>({
      ANGELUS: { enabled: true },
      MASS: { enabled: true },
      NOVENA: { enabled: true },
      OFFICE: { enabled: false },
    });
  const [isSoftRejected, setIsSoftRejected] = useState(false);

  const { calendar, novenas } = useCalendar();

  // Open device settings
  const openSettings = useCallback(async () => {
    try {
      if (Platform.OS === "ios") {
        const supported = await Linking.canOpenURL("app-settings:");
        if (supported) {
          await Linking.openSettings();
        } else {
          throw new Error("Não foi possíbel abrir as configurações!");
        }
      } else {
        // For Android, use the correct package name
        const packageName = Application.applicationId; // This gets the actual package name (e.g., com.yourapp)
        await IntentLauncher.startActivityAsync(
          IntentLauncher.ActivityAction.APPLICATION_DETAILS_SETTINGS,
          { data: `package:${packageName}` },
        );
      }
    } catch (error) {
      console.error("Failed to open settings:", error);
      Alert.alert(
        "Erro",
        "Não foi possível abrir as configurações. Por favor, abra manualmente configurações do sistema.",
      );
    }
  }, []);

  // Check current permission status
  const checkPermissionStatus = useCallback(async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setPermissionStatus(status);
    return status;
  }, []);

  // Check soft rejection status
  const checkSoftRejectionStatus = useCallback(async () => {
    const softRejected = await AsyncStorage.getItem(
      STORAGE_KEYS.PERMISSION_SOFT_REJECTED,
    );
    setIsSoftRejected(softRejected === "true");
    return softRejected === "true";
  }, []);

  // Request permission with system dialog
  const requestPermission = useCallback(async () => {
    const { status: currentStatus } = await Notifications.getPermissionsAsync();

    console.log("currentStatus", currentStatus);

    // If already granted, nothing to do
    if (currentStatus === "granted") {
      setPermissionStatus(Notifications.PermissionStatus.GRANTED);
      // Clear soft rejection state if permission was granted
      await AsyncStorage.removeItem(STORAGE_KEYS.PERMISSION_SOFT_REJECTED);
      setIsSoftRejected(false);
      return true;
    }

    // If blocked/denied and previously requested, we can't request again
    // User needs to change in settings
    if (currentStatus === Notifications.PermissionStatus.DENIED) {
      const permissionRequested = await AsyncStorage.getItem(
        STORAGE_KEYS.PERMISSION_REQUESTED,
      );
      console.log("permissionRequested", permissionRequested);
      if (permissionRequested === "true") {
        setPermissionStatus(currentStatus);
        Alert.alert(
          "Notificações desativadas",
          "Para receber lembretes de oração, por favor active as notificações nas configurações do sistema.",
          [
            { text: "Mais tarde", style: "cancel" },
            { text: "Abrir Configurações", onPress: openSettings },
          ],
        );
        return false;
      }
    }

    // Show explanation dialog first with spiritual context
    const shouldProceed = await new Promise<boolean>((resolve) => {
      Alert.alert(
        "Notificações do Tesouro dos Fiéis",
        "Pode configurar as notificações para o Angelus, a Missa do Dia, as Novenas ou o Pequeno Oficio",
        [
          { text: "Agora não", style: "cancel", onPress: () => resolve(false) },
          { text: "Permitir", onPress: () => resolve(true) },
        ],
      );
    });

    if (!shouldProceed) {
      // Store soft rejection state
      await AsyncStorage.setItem(STORAGE_KEYS.PERMISSION_SOFT_REJECTED, "true");
      await AsyncStorage.setItem(
        STORAGE_KEYS.LAST_PROMPT_DATE,
        new Date().toISOString(),
      );
      setIsSoftRejected(true);
      return false;
    }

    // Request system permission
    const { status } = await Notifications.requestPermissionsAsync();
    setPermissionStatus(status);

    // Mark that we've requested permission
    await AsyncStorage.setItem(STORAGE_KEYS.PERMISSION_REQUESTED, "true");

    // Clear soft rejection if permission was granted
    if (status === "granted") {
      await AsyncStorage.removeItem(STORAGE_KEYS.PERMISSION_SOFT_REJECTED);
      setIsSoftRejected(false);
      await syncNotifications();
    } else {
      // If denied at system level after our custom dialog, don't treat as soft rejection
      await AsyncStorage.removeItem(STORAGE_KEYS.PERMISSION_SOFT_REJECTED);
      setIsSoftRejected(false);
    }

    return status === "granted";
  }, [openSettings]);

  // Check if we should re-prompt for soft rejection
  const checkSoftRejection = useCallback(async () => {
    const softRejected = await AsyncStorage.getItem(
      STORAGE_KEYS.PERMISSION_SOFT_REJECTED,
    );
    const lastPromptDate = await AsyncStorage.getItem(
      STORAGE_KEYS.LAST_PROMPT_DATE,
    );

    if (softRejected === "true" && permissionStatus !== "granted") {
      // Only prompt again if it's been at least 3 days since the last prompt
      const shouldPromptAgain =
        !lastPromptDate ||
        new Date().getTime() - new Date(lastPromptDate).getTime() >
          3 * 24 * 60 * 60 * 1000;

      if (shouldPromptAgain) {
        // Save the current date as the last prompt date
        await AsyncStorage.setItem(
          STORAGE_KEYS.LAST_PROMPT_DATE,
          new Date().toISOString(),
        );
        return await requestPermission();
      }
    }

    return false;
  }, [permissionStatus, requestPermission]);

  // Handle first-time app launch
  const handleFirstLaunch = useCallback(async () => {
    // Check if we've requested permission before
    const permissionRequested = await AsyncStorage.getItem(
      STORAGE_KEYS.PERMISSION_REQUESTED,
    );
    const softRejected = await AsyncStorage.getItem(
      STORAGE_KEYS.PERMISSION_SOFT_REJECTED,
    );

    // Check current status
    const currentStatus = await checkPermissionStatus();
    await checkSoftRejectionStatus();

    // If already granted, we're good
    if (currentStatus === "granted") {
      return true;
    }

    // If never requested before, request permission
    if (permissionRequested !== "true") {
      return await requestPermission();
    }

    // If soft rejected previously, check if we should ask again
    if (softRejected === "true") {
      return await checkSoftRejection();
    }
  }, [
    checkPermissionStatus,
    checkSoftRejectionStatus,
    requestPermission,
    checkSoftRejection,
  ]);

  // Load saved preferences and initialize permission
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const init = async () => {
      // Load saved preferences
      const loadedPrefs: NotificationPreferences = { ...notificationPrefs };
      for (const key of Object.keys(notificationPrefs) as Array<
        keyof NotificationPreferences
      >) {
        const storedValue = await AsyncStorage.getItem(key);
        if (storedValue !== null) {
          loadedPrefs[key] = { enabled: storedValue === "true" };
        }
      }
      setNotificationPrefs(loadedPrefs);

      // Handle first launch and permissions
      await handleFirstLaunch();
    };

    init();
  }, [handleFirstLaunch]);

  // Check permissions on app startup
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const checkPermissionsOnStartup = async () => {
      await checkPermissionStatus();
      await checkSoftRejectionStatus();

      // If we don't have permission, check if we should re-prompt
      if (permissionStatus !== "granted") {
        await checkSoftRejection();
      }
    };

    checkPermissionsOnStartup();
  }, [checkPermissionStatus, checkSoftRejectionStatus, checkSoftRejection]);

  const scheduleNotification = useCallback(
    async (
      notification: Notifications.NotificationRequestInput,
      identifier: string,
    ) => {
      if (permissionStatus !== "granted") return;
      await Notifications.scheduleNotificationAsync({
        ...notification,
        identifier,
      });
    },
    [permissionStatus],
  );

  const cancelAllNotifications = useCallback(async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }, []);

  const scheduleNotifications = useCallback(async () => {
    // Schedule Angelus
    if (notificationPrefs.ANGELUS.enabled) {
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
          identifier,
        );
      }
    }

    // Schedule Mass
    if (notificationPrefs.MASS.enabled) {
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
                  NOTIFICATIONS.MASS.times.minute,
                ),
              },
            },
            identifier,
          );
        }
      }
    }

    // Schedule Novena
    if (notificationPrefs.NOVENA.enabled && novenas) {
      const today = new Date();
      for (const novena of novenas) {
        const novenaDate = subDays(new Date(novena.date), 1);
        if (novenaDate > today) {
          const dayDifference = Math.ceil(
            (novenaDate.getTime() - today.getTime()) / (1000 * 3600 * 24),
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
                    NOTIFICATIONS.NOVENA.times.minute,
                  ),
                },
              },
              identifier,
            );
          }
        }
      }
    }

    // Schedule Office
    if (notificationPrefs.OFFICE.enabled) {
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
          identifier,
        );
      }
    }
  }, [notificationPrefs, calendar, novenas, scheduleNotification]);

  const syncNotifications = useCallback(async () => {
    if (permissionStatus !== "granted") {
      setList([]);
      return;
    }
    await cancelAllNotifications();
    await scheduleNotifications();
    const notifications =
      await Notifications.getAllScheduledNotificationsAsync();
    setList(notifications);
  }, [permissionStatus, cancelAllNotifications, scheduleNotifications]);

  // Sync notifications whenever permission or preferences change
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    syncNotifications();
  }, [syncNotifications, permissionStatus, notificationPrefs]);

  // Handle notification taps
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data?.url;
        if (url) {
          router.navigate(url);
        }
      },
    );

    return () => subscription.remove();
  }, [router]);

  const setNotificationPref = useCallback(
    async (key: keyof NotificationPreferences, enabled: boolean) => {
      if (enabled && permissionStatus !== "granted") {
        const granted = await requestPermission();
        // If permission was denied, don't enable the preference
        if (!granted) return;
      }
      await AsyncStorage.setItem(key, enabled.toString());
      setNotificationPrefs((prev) => ({
        ...prev,
        [key]: { enabled },
      }));
    },
    [permissionStatus, requestPermission],
  );

  return (
    <NotificationsContext.Provider
      value={{
        notificationPrefs,
        setNotificationPref,
        list,
        permissionStatus,
        requestPermission,
        openSettings,
        isSoftRejected,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider",
    );
  }
  return context;
};
