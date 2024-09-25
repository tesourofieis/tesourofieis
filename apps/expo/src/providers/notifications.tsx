import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCalendarDay, getNovenas } from "@tesourofieis/cal/getCalendar";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { addDays, differenceInDays } from "date-fns";
import * as Notifications from "expo-notifications";
import type { NotificationRequest } from "expo-notifications";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

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
    prepareNotification: (date: Date) => {
      const calendar = getCalendarDay(yyyyMMDD(date));
      const mass = calendar?.mass;
      if (!mass || mass.length === 0) return null;

      const titleParts = mass[0].name;
      const subTitleParts = mass
        .slice(1)
        .map((m) => m.name)
        .join(" | ");
      return {
        title: `${NOTIFICATIONS.MASS.title} ${titleParts}`,
        subtitle: subTitleParts,
        data: { url: mass[0].link },
        color: getColor(mass[0].color),
      };
    },
  },
  NOVENA: {
    title: "🙏 Novena",
    times: { hour: 20, minute: 0 },
    link: "devocionario/novenas",
  },
  OFFICE: {
    title: "🕰️ Hora do Ofício",
    times: [
      { name: "Matinas", hour: 0, link: "/devocionario/oficio/matinas" },
      { name: "Laudes", hour: 3, link: "/devocionario/oficio/laudes" },
      { name: "Prima", hour: 6, link: "/devocionario/oficio/prima" },
      { name: "Terça", hour: 9, link: "/devocionario/oficio/terca" },
      { name: "Sexta", hour: 12, link: "/devocionario/oficio/sexta" },
      { name: "Noa", hour: 15, link: "/devocionario/oficio/noa" },
      { name: "Vésperas", hour: 18, link: "/devocionario/oficio/vesperas" },
      { name: "Completas", hour: 21, link: "/devocionario/oficio/completas" },
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

function prepareMassNotification(date: Date) {
  const calendar = getCalendarDay(yyyyMMDD(date));
  const mass = calendar?.mass;
  const titleParts = mass[0].name;
  const subTitleParts = mass.filter((_m, i) => i !== 0);
  const other = subTitleParts.map((i) => i.name).join(" | ");
  return {
    title: `${NOTIFICATIONS.MASS.title} ${titleParts ?? other}`,
    subtitle: titleParts ? other : "",
    body: titleParts ? other : "",
    data: { url: mass[0].link },
    color: getColor(mass[0].color),
  };
}

type NotificationPreference = {
  enabled: boolean;
  loading: boolean;
};

type NotificationsContextType = {
  notifications: Record<string, NotificationRequest>;
  scheduleNotification: (notification: NotificationRequest) => Promise<void>;
  cancelAllNotifications: () => Promise<void>;
  toggleNotification: (key: keyof typeof NOTIFICATIONS) => Promise<void>;
  notificationPrefs: Record<keyof typeof NOTIFICATIONS, NotificationPreference>;
};

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export function NotificationsProvider({ children }: React.PropsWithChildren) {
  const [notifications, setNotifications] = useState<
    Record<string, NotificationRequest>
  >({});
  const [notificationPrefs, setNotificationPrefs] = useState<
    Record<keyof typeof NOTIFICATIONS, NotificationPreference>
  >(
    Object.keys(NOTIFICATIONS).reduce(
      (acc, key) => ({
        ...acc,
        [key]: { enabled: false, loading: false },
      }),
      {} as Record<keyof typeof NOTIFICATIONS, NotificationPreference>
    )
  );

  const loadNotifications = useCallback(async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    const notificationsMap = scheduledNotifications.reduce(
      (acc, notification) => ({
        ...acc,
        [notification.identifier]: notification,
      }),
      {} as Record<string, NotificationRequest>
    );
    setNotifications(notificationsMap);
  }, []);

  const scheduleNotification = useCallback(
    async (notification: NotificationRequest) => {
      const { identifier, content, trigger } = notification;
      const scheduledNotification =
        await Notifications.scheduleNotificationAsync({
          content,
          trigger: trigger as Notifications.NotificationTriggerInput,
        });
      setNotifications((prev) => ({
        ...prev,
        [identifier]: scheduledNotification,
      }));
    },
    []
  );

  const cancelAllNotifications = useCallback(async () => {
    const enabledKeys = Object.keys(NOTIFICATIONS).filter(
      (key) => notificationPrefs[key]?.enabled
    );

    console.error(enabledKeys);

    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (const notification of scheduledNotifications) {
      if (!enabledKeys.includes(notification.content.title.split(" ")[0])) {
        await Notifications.cancelScheduledNotificationAsync(
          notification.identifier
        );
      }
    }
  }, []);

  const scheduleAngelus = useCallback(async () => {
    for (const time of NOTIFICATIONS.ANGELUS.times) {
      await scheduleNotification({
        content: {
          title: NOTIFICATIONS.ANGELUS.title,
          data: { url: "devocionario/dia/angelus" },
          color: "#2196f3",
        },
        trigger: { hour: time.hour, minute: time.minute, repeats: true },
      });
    }
  }, [scheduleNotification]);

  const scheduleMass = useCallback(async () => {
    const today = new Date();
    const currentDay = today.getDay();
    for (let i = 0; i < 7; i++) {
      const date = addDays(today, i);
      const notificationContent = prepareMassNotification(date);
      await scheduleNotification({
        content: notificationContent,
        trigger: {
          hour: NOTIFICATIONS.MASS.times.hour,
          minute: NOTIFICATIONS.MASS.times.minute,
          weekday: ((currentDay + i) % 7) + 1,
          repeats: true,
        },
      });
    }
  }, [scheduleNotification]);

  const scheduleNovena = useCallback(async () => {
    const today = new Date();
    const novenas = getNovenas(yyyyMMDD(today));
    if (novenas) {
      for (const novena of novenas) {
        const novenaDate = new Date(novena.date);
        if (novenaDate > today) {
          const dayDifference = differenceInDays(novenaDate, today);
          const currentNovenaDay = 9 - dayDifference;
          for (let i = currentNovenaDay; i <= 9; i++) {
            await scheduleNotification({
              content: {
                title: NOTIFICATIONS.NOVENA.title,
                body: `Dia ${i} da novena de ${novena.name}`,
                data: { url: "devocionario/novenas" },
              },
              trigger: {
                date: new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + (i - currentNovenaDay),
                  NOTIFICATIONS.NOVENA.times.hour,
                  NOTIFICATIONS.NOVENA.times.minute
                ),
              },
            });
          }
        }
      }
    }
  }, [scheduleNotification]);

  const scheduleOffice = useCallback(async () => {
    for (const office of NOTIFICATIONS.OFFICE.times) {
      await scheduleNotification({
        content: {
          title: `${NOTIFICATIONS.OFFICE.title} ${office.name}`,
          body: "Pequeno Ofício de Nossa Senhora",
          data: { url: office.link },
          color: "#4CAF50",
        },
        trigger: { hour: office.hour, minute: 0, repeats: true },
      });
    }
  }, [scheduleNotification]);

  const toggleNotification = useCallback(
    async (key: keyof typeof NOTIFICATIONS) => {
      setNotificationPrefs((prev) => ({
        ...prev,
        [key]: { ...prev[key], loading: true },
      }));

      try {
        const newEnabled = !((await AsyncStorage.getItem(key)) === "true");
        await AsyncStorage.setItem(key, newEnabled.toString());

        if (newEnabled) {
          switch (key) {
            case "ANGELUS":
              await scheduleAngelus();
              break;
            case "MASS":
              await scheduleMass();
              break;
            case "NOVENA":
              await scheduleNovena();
              break;
            case "OFFICE":
              await scheduleOffice();
              break;
          }
        } else {
          await cancelAllNotifications();
        }

        setNotificationPrefs((prev) => ({
          ...prev,
          [key]: { enabled: newEnabled, loading: false },
        }));
      } catch (error) {
        console.error(`Error toggling ${key} notifications:`, error);
        setNotificationPrefs((prev) => ({
          ...prev,
          [key]: { ...prev[key], loading: false },
        }));
      }
    },
    [
      cancelAllNotifications,
      scheduleAngelus,
      scheduleMass,
      scheduleNovena,
      scheduleOffice,
    ]
  );

  useEffect(() => {
    const initializeNotifications = async () => {
      await cancelAllNotifications();
      await loadNotifications();
      const prefs = await Promise.all(
        Object.keys(NOTIFICATIONS).map(async (key) => {
          const enabledStr = await AsyncStorage.getItem(key);
          return [key, { enabled: enabledStr !== "false", loading: false }];
        })
      );
      const prefsMap = Object.fromEntries(prefs);
      setNotificationPrefs(
        prefsMap as Record<keyof typeof NOTIFICATIONS, NotificationPreference>
      );
    };

    initializeNotifications();
  }, [cancelAllNotifications, loadNotifications]);

  const contextValue = useMemo(
    () => ({
      notifications,
      scheduleNotification,
      cancelAllNotifications,
      toggleNotification,
      notificationPrefs,
    }),
    [
      notifications,
      scheduleNotification,
      cancelAllNotifications,
      toggleNotification,
      notificationPrefs,
    ]
  );

  return (
    <NotificationsContext.Provider value={contextValue}>
      {children}
    </NotificationsContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return context;
};
