import type { Day } from "@tesourofieis/cal/calendar";
import { getCalendar, getCalendarDay } from "@tesourofieis/cal/getCalendar";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { addDays, getYear, isWithinInterval, parseISO } from "date-fns";
import { type PropsWithChildren, createContext, useContext } from "react";

const CalendarContext =
  createContext<
    (year?: number) => {
      calendar: Day[];
      day: Day;
      mass: Mass[];
      nextMasses: Day[];
      novenas?: Mass[];
    }
  >(undefined);

export function CalendarProvider({ children }: PropsWithChildren) {
  const getCalendarData = (year?: number) => {
    const today = new Date();
    const calendar = getCalendar(year ?? getYear(today));
    const day = getCalendarDay(yyyyMMDD(today));
    const mass = day?.mass || [];

    function getNovenas() {
      const endDate = addDays(today, 9);
      const novenaObservances: Mass[] = [];

      for (const day of calendar) {
        const dayDate = parseISO(day.date);
        if (isWithinInterval(dayDate, { start: today, end: endDate })) {
          const novenas = day.mass
            .filter((mass) => mass.novena)
            .map((i) => ({ ...i, date: yyyyMMDD(dayDate) }));
          novenaObservances.push(...novenas);
        }
      }
      return novenaObservances;
    }

    function getNextMasses(days = 15) {
      const currentDayIndex = 0;
      const nextMasses: Day[] = [];
      Array.from({ length: days }, (_, i) => currentDayIndex + i).map(
        (index) => {
          const checkDate = addDays(today, index);
          const day = getCalendarDay(yyyyMMDD(checkDate));
          nextMasses.push(day);
        },
      );
      return nextMasses;
    }

    if (!calendar || !day) {
      return null;
    }

    return {
      calendar,
      day,
      mass,
      nextMasses: getNextMasses(),
      novenas: getNovenas(),
    };
  };

  return (
    <CalendarContext.Provider value={getCalendarData}>
      {children}
    </CalendarContext.Provider>
  );
}

export const useCalendar = (year?: number) => {
  const getCalendarData = useContext(CalendarContext);
  if (getCalendarData === undefined) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }

  const calendarData = getCalendarData(year);
  if (!calendarData) {
    throw new Error("Failed to get calendar data");
  }

  return calendarData;
};
