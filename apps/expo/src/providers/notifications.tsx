import AsyncStorage from "@react-native-async-storage/async-storage";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { addDays } from "date-fns";
import * as Notifications from "expo-notifications";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCalendar } from "./calendar";

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
};

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export function NotificationsProvider({ children }: React.PropsWithChildren) {
  const [list, setList] = useState<Notifications.NotificationRequest[]>();
  const [notificationPrefs, setNotificationPrefs] =
    useState<NotificationPreferences>({
      ANGELUS: { enabled: false },
      MASS: { enabled: false },
      NOVENA: { enabled: false },
      OFFICE: { enabled: false },
    });

  const { calendar, novenas } = useCalendar();

  const scheduleNotification = useCallback(
    async (
      notification: Notifications.NotificationRequestInput,
      identifier: string,
    ) => {
      await Notifications.scheduleNotificationAsync({
        ...notification,
        identifier,
      });
    },
    [],
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
            trigger: { hour: time.hour, minute: time.minute, repeats: true },
          },
          identifier,
        );
      }
    }

    // Schedule Mass
    if (notificationPrefs.MASS.enabled) {
      const today = new Date();
      const currentDay = today.getDay();
      for (let i = 0; i < 7; i++) {
        const date = addDays(today, i);
        const dayMass = calendar.find((d) => d.date === yyyyMMDD(date))
          ?.mass[0];
        if (dayMass) {
          const identifier = `mass-${yyyyMMDD(date)}`;
          await scheduleNotification(
            {
              content: {
                title: `${NOTIFICATIONS.MASS.title} ${dayMass.name}`,
                body: dayMass.name,
                data: { url: dayMass.link },
                color: getColor(dayMass.color),
              },
              trigger: {
                hour: NOTIFICATIONS.MASS.times.hour,
                minute: NOTIFICATIONS.MASS.times.minute,
                weekday: ((currentDay + i) % 7) + 1,
                repeats: true,
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
        const novenaDate = new Date(novena.date);
        if (novenaDate > today) {
          const dayDifference = Math.ceil(
            (novenaDate.getTime() - today.getTime()) / (1000 * 3600 * 24),
          );
          const currentNovenaDay = 9 - dayDifference;
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
            trigger: { hour: office.hour, minute: 0, repeats: true },
          },
          identifier,
        );
      }
    }
  }, [notificationPrefs, calendar, novenas, scheduleNotification]);

  const syncNotifications = useCallback(async () => {
    await cancelAllNotifications();
    await scheduleNotifications();
    const notifications =
      await Notifications.getAllScheduledNotificationsAsync();
    setList(notifications);
  }, [cancelAllNotifications, scheduleNotifications]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const loadPrefs = async () => {
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
    };

    loadPrefs();
  }, []);

  useEffect(() => {
    syncNotifications();
  }, [syncNotifications]);

  const setNotificationPref = useCallback(
    async (key: keyof NotificationPreferences, enabled: boolean) => {
      await AsyncStorage.setItem(key, enabled.toString());
      setNotificationPrefs((prev) => ({
        ...prev,
        [key]: { enabled },
      }));
    },
    [],
  );

  return (
    <NotificationsContext.Provider
      value={{
        notificationPrefs,
        setNotificationPref,
        list,
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
