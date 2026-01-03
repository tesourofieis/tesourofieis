import AsyncStorage from "@react-native-async-storage/async-storage";
import { yyyyMMDD } from "~/lib/utils";
import { burgundy } from "config";
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
import {
  webNotificationService,
  type WebNotificationSchedule,
} from "~/services/webNotifications";

export type Settings = {
  angelusEnabled: boolean;
  massEnabled: boolean;
  novenaEnabled: boolean;
  officeEnabled: boolean;
  indulgencesEnabled: boolean;
  permissionRequested: boolean;
  permissionSoftRejected: boolean;
};

// WebNotificationSchedule type now imported from services

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
    title: "⏰ Hora do Ofício",
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
  INDULGENCES: {
    title: "✨ Indulgência Plenária",
    color: "#FFD700",
    dates: [
      {
        month: 0,
        day: 1,
        hour: 8,
        minute: 0,
        prayer: "Veni Creator",
        body: "Recite publicamente o Veni Creator para o ano novo. (Condições habituais)",
        link: "canticos/sacros/venicreator",
      },
      {
        month: 7,
        day: 2,
        hour: 8,
        minute: 0,
        prayer: "Perdão de Assis",
        body: "Indulgência da Porciúncula: Visite uma igreja paroquial e reze o Pai Nosso e o Credo.",
        link: "",
      },
      {
        month: 10,
        day: 1,
        hour: 8,
        minute: 0,
        prayer: "Todos os Santos",
        body: "Solenidade de Todos os Santos. (Condições habituais)",
        link: "",
      },
      {
        month: 10,
        day: 2,
        hour: 8,
        minute: 0,
        prayer: "Fiéis Defuntos",
        body: "Visite um cemitério e reze pelos defuntos (aplicável apenas às almas).",
        link: "",
      },
      {
        month: 11,
        day: 8,
        hour: 8,
        minute: 0,
        prayer: "Imaculada Conceição",
        body: "Solenidade da Imaculada Conceição de Nossa Senhora.",
        link: "",
      },
      {
        month: 11,
        day: 25,
        hour: 8,
        minute: 0,
        prayer: "Natal do Senhor",
        body: "Solenidade do Natal do Senhor. (Condições habituais)",
        link: "",
      },
      {
        month: 11,
        day: 31,
        hour: 20,
        minute: 0,
        prayer: "Te Deum",
        body: "Recite publicamente o Te Deum em ação de graças pelo ano findo.",
        link: "canticos/sacros/tedeum",
      },
    ],
  },
};

function getColor(color?: string) {
  switch (color) {
    case "w":
      return "#FFFFFFFF";
    case "r":
      return burgundy[500];
    case "g":
      return "#FF00FF00";
    case "v":
      return "#FFEE82EE";
    case "b":
      return "#FF000000";
    default:
      return "#FF808080";
  }
}

const prefKeyMap = {
  ANGELUS: "angelusEnabled",
  MASS: "massEnabled",
  NOVENA: "novenaEnabled",
  OFFICE: "officeEnabled",
  INDULGENCES: "indulgencesEnabled",
} as const;

const SETTINGS_STORAGE_KEY = "app_settings";

const DEFAULT_SETTINGS: Settings = {
  angelusEnabled: true,
  massEnabled: true,
  novenaEnabled: true,
  officeEnabled: false,
  indulgencesEnabled: true,
  permissionRequested: false,
  permissionSoftRejected: false,
};

type SettingsContextType = {
  settings: Settings;
  isLoading: boolean;
  setNotificationPref: (
    key: keyof typeof prefKeyMap,
    enabled: boolean,
  ) => Promise<void>;
  list: Notifications.NotificationRequest[];
  permissionStatus: Notifications.PermissionStatus;
  requestPermission: () => Promise<boolean>;
  openSettings: () => Promise<void>;
  isSoftRejected: boolean;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export function SettingsProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const { calendar, novenas } = useCalendar();
  const isWeb = Platform.OS === "web";

  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(!isWeb);
  const [list, setList] = useState<Notifications.NotificationRequest[]>([]);
  const [permissionStatus, setPermissionStatus] =
    useState<Notifications.PermissionStatus>(
      Notifications.PermissionStatus.UNDETERMINED,
    );

  const getSettingsFromStorage = useCallback(async (): Promise<Settings> => {
    if (isWeb) return DEFAULT_SETTINGS;
    try {
      const jsonValue = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);
      if (jsonValue != null) {
        const parsedSettings: Settings = JSON.parse(jsonValue);
        return { ...DEFAULT_SETTINGS, ...parsedSettings };
      } else {
        await AsyncStorage.setItem(
          SETTINGS_STORAGE_KEY,
          JSON.stringify(DEFAULT_SETTINGS),
        );
        return DEFAULT_SETTINGS;
      }
    } catch (e: any) {
      console.error("Error retrieving settings from AsyncStorage:", e);
      return DEFAULT_SETTINGS;
    }
  }, [isWeb]);

  const updateSettingsInStorage = useCallback(
    async (newValues: Partial<Settings>): Promise<Settings> => {
      if (isWeb) return { ...settings, ...newValues };
      try {
        const updatedSettings: Settings = { ...settings, ...newValues };
        await AsyncStorage.setItem(
          SETTINGS_STORAGE_KEY,
          JSON.stringify(updatedSettings),
        );
        return updatedSettings;
      } catch (e: any) {
        console.error("Error updating settings in AsyncStorage:", e);
        throw new Error(`Failed to update settings: ${e.message}`);
      }
    },
    [settings, isWeb],
  );

  const updateSetting = useCallback(
    async (newValues: Partial<Settings>) => {
      const updated = await updateSettingsInStorage(newValues);
      setSettings(updated);
    },
    [updateSettingsInStorage],
  );

  const checkPermissionStatus = useCallback(async () => {
    if (isWeb) {
      const webPermission = webNotificationService.getPermissionStatus();
      const status =
        webPermission.status === "granted"
          ? Notifications.PermissionStatus.GRANTED
          : webPermission.status === "denied"
            ? Notifications.PermissionStatus.DENIED
            : Notifications.PermissionStatus.UNDETERMINED;
      setPermissionStatus(status);
      return status;
    }

    const { status } = await Notifications.getPermissionsAsync();
    setPermissionStatus(status);
    return status;
  }, [isWeb]);

  const openSettings = useCallback(async () => {
    if (isWeb) return;
    try {
      if (Platform.OS === "ios") {
        await Linking.openSettings();
      } else {
        const packageName = Application.applicationId;
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
  }, [isWeb]);

  const scheduleNotification = useCallback(
    async (
      notification: Notifications.NotificationRequestInput,
      identifier: string,
    ) => {
      if (permissionStatus !== "granted") return;

      if (isWeb) {
        // Handle web notifications
        const trigger = notification.trigger as any;
        if (trigger?.type === "daily") {
          // Convert daily trigger to specific time
          const now = new Date();
          const triggerTime = new Date();
          triggerTime.setHours(trigger.hour || 0, trigger.minute || 0, 0, 0);

          // If time has passed today, schedule for tomorrow
          if (triggerTime <= now) {
            triggerTime.setDate(triggerTime.getDate() + 1);
          }

          webNotificationService.scheduleNotification({
            id: identifier,
            title: notification.content.title || "Tesouro dos Fiéis",
            body: notification.content.body || undefined,
            triggerAt: triggerTime,
            url: notification.content.data?.url as string,
            icon: "/favicon.png",
          });

          console.log(
            `📅 Web notification scheduled: ${notification.content.title} at ${triggerTime.toLocaleString("pt-PT")}`,
          );
        }
        return;
      }

      // Mobile notifications
      await Notifications.scheduleNotificationAsync({
        ...notification,
        identifier,
      });
    },
    [permissionStatus, isWeb],
  );

  const syncNotifications = useCallback(async () => {
    // Handle both web and mobile notifications

    if (permissionStatus !== "granted" || !settings) {
      if (isWeb) {
        webNotificationService.cancelAllScheduledNotifications();
      } else {
        await Notifications.cancelAllScheduledNotificationsAsync();
      }
      setList([]);
      return;
    }

    // Clear existing notifications
    if (isWeb) {
      webNotificationService.cancelAllScheduledNotifications();
    } else {
      await Notifications.cancelAllScheduledNotificationsAsync();
    }

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
          identifier,
        );
      }
    }

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
                data: { url: dayMass[0]?.link || "" },
                color: getColor(dayMass[0]?.color),
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

    if (settings.novenaEnabled) {
      const today = new Date();
      const currentYear = today.getFullYear();
      const startDate = new Date(currentYear, 11, 17);
      const endDate = new Date(currentYear, 11, 23, 23);

      const daysUntilStart = Math.ceil(
        (startDate.getTime() - today.getTime()) / (1000 * 3600 * 24),
      );

      const isWithinSchedulingWindow = daysUntilStart <= 30 && today <= endDate;

      if (isWithinSchedulingWindow) {
        for (let day = 1; day <= 7; day++) {
          const notificationDate = new Date(currentYear, 11, 16 + day);

          if (notificationDate > today) {
            const identifier = `our-lady-of-o-${day}`;
            await scheduleNotification(
              {
                content: {
                  title: "Nossa Senhora do Ó",
                  body: `Antífona do dia ${16 + day} de dezembro`,
                  data: { url: "devocionario/antifonasdoo" },
                },
                trigger: {
                  type: Notifications.SchedulableTriggerInputTypes.DATE,
                  date: new Date(
                    notificationDate.getFullYear(),
                    notificationDate.getMonth(),
                    notificationDate.getDate(),
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

    if (settings.novenaEnabled && novenas) {
      const today = new Date();
      for (const novena of novenas) {
        if (!novena.date) continue;
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
          identifier,
        );
      }
    }

    if (settings.indulgencesEnabled) {
      const today = new Date();
      const currentYear = today.getFullYear();

      for (const indulgence of NOTIFICATIONS.INDULGENCES.dates) {
        const notificationDate = new Date(
          currentYear,
          indulgence.month,
          indulgence.day,
          indulgence.hour,
          indulgence.minute,
        );
        if (notificationDate > today) {
          const identifier = `indulgence-${indulgence.month}-${indulgence.day}`;
          await scheduleNotification(
            {
              content: {
                title: NOTIFICATIONS.INDULGENCES.title,
                body: indulgence.body,
                data: { url: indulgence.link },
                color: NOTIFICATIONS.INDULGENCES.color,
              },
              trigger: {
                type: Notifications.SchedulableTriggerInputTypes.DATE,
                date: notificationDate,
              },
            },
            identifier,
          );
        }
      }

      for (let i = 0; i < 30; i++) {
        const checkDate = addDays(today, i);
        const dayData = calendar.find((d) => d.date === yyyyMMDD(checkDate));
        const id = dayData?.mass?.[0]?.id || "";

        let movable = null;
        if (id.includes("TEMPORA_QUAD6_4"))
          movable = {
            p: "Tantum Ergo",
            b: "Recite o Tantum Ergo na reposição do Santíssimo.",
            l: "canticos/sacros/tantumergo",
          };
        else if (id.includes("TEMPORA_QUAD6_5"))
          movable = {
            p: "Adoração da Cruz",
            b: "Adore a Cruz na ação litúrgica solene.",
            l: "missal/quaresmoa/quad6-5",
          };
        else if (id.includes("TEMPORA_PASC7_0"))
          movable = {
            p: "Veni Creator",
            b: "Recite o Veni Creator publicamente hoje.",
            l: "canticos/sacros/venicreator",
          };
        else if (id.includes("TEMPORA_PENT01_4"))
          movable = {
            p: "Tantum Ergo",
            b: "Recite o Tantum Ergo na procissão.",
            l: "canticos/sacros/tantumergo",
          };
        else if (id.includes("TEMPORA_PENT02_5"))
          movable = {
            p: "Acto de Reparação",
            b: "Recite o Ato de Reparação (Iesu Dulcissime).",
            l: "devocionario/oracoes/actoreparacao",
          };
        else if (id.includes("SANCTI_10_DUR"))
          movable = {
            p: "Acto de Consagração",
            b: "Recite o Acto de Consagração do Gênero Humano.",
            l: "devocionario/oracoes/consagracaosagradocoracaojesus",
          };

        if (movable) {
          await scheduleNotification(
            {
              content: {
                title: `✨ Indulgência: ${movable.p}`,
                body: `${movable.b} (Condições habituais)`,
                color: NOTIFICATIONS.INDULGENCES.color,
                data: { url: movable.l },
              },
              trigger: {
                type: Notifications.SchedulableTriggerInputTypes.DATE,
                date: new Date(
                  checkDate.getFullYear(),
                  checkDate.getMonth(),
                  checkDate.getDate(),
                  8,
                  0,
                ),
              },
            },
            `ind-movable-${yyyyMMDD(checkDate)}`,
          );
        }
      }
    }

    const scheduled = await Notifications.getAllScheduledNotificationsAsync();
    setList(scheduled);
  }, [
    isWeb,
    permissionStatus,
    settings,
    calendar,
    novenas,
    scheduleNotification,
  ]);

  const requestPermission = useCallback(async () => {
    if (!settings) return false;

    // Handle web notification permission
    if (isWeb) {
      if (!webNotificationService.isSupported()) {
        console.log("❌ Web notifications not supported in this browser");
        return false;
      }

      const currentStatus = webNotificationService.getPermissionStatus();
      if (currentStatus.status === "granted") {
        setPermissionStatus(Notifications.PermissionStatus.GRANTED);
        await updateSetting({ permissionSoftRejected: false });
        return true;
      }

      console.log("🔔 Requesting web notification permission...");
      const webPermission = await webNotificationService.requestPermission();

      const status =
        webPermission.status === "granted"
          ? Notifications.PermissionStatus.GRANTED
          : webPermission.status === "denied"
            ? Notifications.PermissionStatus.DENIED
            : Notifications.PermissionStatus.UNDETERMINED;

      setPermissionStatus(status);
      await updateSetting({
        permissionRequested: true,
        permissionSoftRejected: webPermission.status !== "granted",
      });

      if (webPermission.status === "granted") {
        console.log("✅ Web notifications enabled!");
      } else {
        console.log("❌ Web notifications denied by user");
      }

      return webPermission.status === "granted";
    }

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
        ],
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
        ],
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
      await syncNotifications();
    }

    return status === "granted";
  }, [isWeb, openSettings, settings, updateSetting, syncNotifications]);

  useEffect(() => {
    if (isWeb) return;

    const init = async () => {
      try {
        const loadedSettings = await getSettingsFromStorage();
        setSettings(loadedSettings);
        await checkPermissionStatus();
      } catch (error) {
        console.error("Failed to initialize settings:", error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, [isWeb, getSettingsFromStorage, checkPermissionStatus]);

  useEffect(() => {
    if (isWeb || isLoading) return;
    syncNotifications();
  }, [isWeb, syncNotifications, isLoading]);

  useEffect(() => {
    if (isWeb) return;

    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data?.url;
        if (url) {
          router.navigate(url as string);
        }
      },
    );
    return () => subscription.remove();
  }, [isWeb, router]);

  const setNotificationPref = useCallback(
    async (key: keyof typeof prefKeyMap, enabled: boolean) => {
      if (enabled && permissionStatus !== "granted") {
        const granted = await requestPermission();
        if (!granted) return;
      }

      const dbKey = prefKeyMap[key];
      await updateSetting({ [dbKey]: enabled });
    },
    [permissionStatus, requestPermission, updateSetting],
  );

  return (
    <SettingsContext.Provider
      value={{
        settings,
        isLoading,
        setNotificationPref,
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

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
