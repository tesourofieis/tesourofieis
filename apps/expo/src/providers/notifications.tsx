import AsyncStorage from "@react-native-async-storage/async-storage";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { addDays, differenceInDays } from "date-fns";
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

function prepareMassNotification() {
  const { day } = useCalendar();
  const mass = day?.mass;
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
  list: Notifications.NotificationRequest[];
  notificationPrefs: NotificationPreferences;
  setNotificationPref: (
    key: keyof NotificationPreferences,
    enabled: boolean,
  ) => Promise<void>;
};

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export function NotificationsProvider({ children }: React.PropsWithChildren) {
  const [list, setList] = useState<
    Notifications.NotificationRequest[] | undefined
  >();
  const [notificationPrefs, setNotificationPrefs] =
    useState<NotificationPreferences>(() => {
      const defaultPrefs: NotificationPreferences = {
        ANGELUS: { enabled: false },
        MASS: { enabled: false },
        NOVENA: { enabled: false },
        OFFICE: { enabled: false },
      };

      return defaultPrefs;
    });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const loadPrefs = async () => {
      for (const key of Object.keys(notificationPrefs) as Array<
        keyof NotificationPreferences
      >) {
        const storedValue = await AsyncStorage.getItem(key);
        if (storedValue !== null) {
          setNotificationPrefs((prev) => ({
            ...prev,
            [key]: { enabled: storedValue === "true" },
          }));
        }
      }
    };

    loadPrefs();
  }, []);

  const scheduleNotification = useCallback(
    async (
      notification: Notifications.NotificationRequestInput,
      identifier: string,
    ) => {
      const isNotificationScheduled = list?.some(
        (notif) => notif.identifier === identifier,
      );

      if (!isNotificationScheduled) {
        await Notifications.scheduleNotificationAsync({
          ...notification,
          identifier,
        });
        setList((prevList) => [
          ...(prevList?.filter((notif) => notif.identifier !== identifier) ||
            []),
          { ...notification, identifier } as Notifications.NotificationRequest,
        ]);
      }
    },
    [list],
  );

  const scheduleAngelus = useCallback(async () => {
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
  }, [scheduleNotification]);

  const scheduleMass = useCallback(async () => {
    const today = new Date();
    const currentDay = today.getDay();
    for (let i = 0; i < 7; i++) {
      const date = addDays(today, i);
      const notificationContent = prepareMassNotification();
      const identifier = `mass-${yyyyMMDD(date)}`;
      await scheduleNotification(
        {
          content: notificationContent,
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
  }, [scheduleNotification]);

  const scheduleNovena = useCallback(async () => {
    const today = new Date();
    const { novenas } = useCalendar();
    if (novenas) {
      for (const novena of novenas) {
        const novenaDate = new Date(novena.date);
        if (novenaDate > today) {
          const dayDifference = differenceInDays(novenaDate, today);
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
  }, [scheduleNotification]);

  const scheduleOffice = useCallback(async () => {
    for (const office of NOTIFICATIONS.OFFICE.times) {
      const identifier = `office-${office.name}`;
      await scheduleNotification(
        {
          content: {
            title: `${NOTIFICATIONS.OFFICE.title} ${office.name}`,
            body: "Pequeno Ofício de Nossa Senhora",
            data: { url: office.link },
            color: "#4CAF50",
          },
          trigger: { hour: office.hour, minute: 0, repeats: true },
        },
        identifier,
      );
    }
  }, [scheduleNotification]);

  const cancelNotificationsForKey = useCallback(
    async (key: keyof NotificationPreferences) => {
      const scheduledNotifications =
        await Notifications.getAllScheduledNotificationsAsync();
      for (const notification of scheduledNotifications) {
        if (notification.content.title.startsWith(NOTIFICATIONS[key].title)) {
          await Notifications.cancelScheduledNotificationAsync(
            notification.identifier,
          );
        }
      }
      setList((prevList) =>
        prevList?.filter(
          (notif) => !notif.content.title.startsWith(NOTIFICATIONS[key].title),
        ),
      );
    },
    [],
  );

  const setNotificationPref = useCallback(
    async (key: keyof NotificationPreferences, enabled: boolean) => {
      await AsyncStorage.setItem(key, enabled.toString());
      setNotificationPrefs((prev) => ({
        ...prev,
        [key]: { enabled },
      }));

      if (!enabled) {
        await cancelNotificationsForKey(key);
      }
    },
    [cancelNotificationsForKey],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const syncNotifications = async () => {
      const scheduledNotifications =
        await Notifications.getAllScheduledNotificationsAsync();

      setList(scheduledNotifications);

      for (const [key, pref] of Object.entries(notificationPrefs) as [
        keyof NotificationPreferences,
        NotificationPreference,
      ][]) {
        if (pref.enabled) {
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
          await cancelNotificationsForKey(key);
        }
      }
    };

    syncNotifications();
  }, [notificationPrefs]);

  return (
    <NotificationsContext.Provider
      value={{ notificationPrefs, setNotificationPref, list }}
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
