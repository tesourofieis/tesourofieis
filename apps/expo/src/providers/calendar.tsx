import type { Day, LiturgicalSeason } from "@tesourofieis/cal/calendar";
import {
  getCalendar,
  getCalendarDay,
  getSeason,
} from "@tesourofieis/cal/getCalendar";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import {
  addDays,
  getMonth,
  getYear,
  isWithinInterval,
  parseISO,
} from "date-fns";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ActivityIndicator, View } from "react-native";

const CalendarContext = createContext<{
  calendar: Day[];
  day: Day;
  mass: Mass[];
  novenas?: Mass[];
  date: Date;
  season: LiturgicalSeason;
}>(undefined);

export function CalendarProvider({ children }: PropsWithChildren) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = getYear(date);
  const currentMonth = getMonth(date);

  const calendar = useMemo(
    () => [
      ...getCalendar(currentYear),
      ...(currentMonth === 11 ? getCalendar(currentYear + 1) : []),
    ],
    [currentYear, currentMonth],
  );

  const dateKey = yyyyMMDD(date);
  const day = useMemo(() => getCalendarDay(dateKey), [dateKey]);
  const mass = day?.mass || [];

  const novenas = useMemo(() => {
    const endDate = addDays(date, 9);
    const novenaObservances: Mass[] = [];
    for (const calDay of calendar) {
      const dayDate = parseISO(calDay.date);
      if (isWithinInterval(dayDate, { start: date, end: endDate })) {
        const dayNovenas = calDay.mass
          .filter((mass) => mass.novena)
          .map((i) => ({ ...i, date: yyyyMMDD(dayDate) }));
        novenaObservances.push(...dayNovenas);
      }
    }
    return novenaObservances;
  }, [calendar, date]);

  const season = useMemo(() => getSeason(dateKey), [dateKey]);

  if (!calendar || !day) {
    return (
      <View className="flex-auto justify-center items-center bg-sepia-200 dark:bg-sepia-900">
        <ActivityIndicator className="text-red-500" />
      </View>
    );
  }

  return (
    <CalendarContext.Provider
      value={{ mass, day, calendar, novenas, date, season }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};
