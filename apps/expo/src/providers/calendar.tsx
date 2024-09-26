import type { Day } from "@tesourofieis/cal/calendar";
import { getCalendar, getCalendarDay } from "@tesourofieis/cal/getCalendar";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { addDays, getYear, isWithinInterval, parseISO } from "date-fns";
import { type PropsWithChildren, createContext, useContext } from "react";

const CalendarContext = createContext<{
  calendar: Day[];
  day: Day;
  mass: Mass[];
  novenas?: Mass[];
}>(undefined);

export function CalendarProvider({ children }: PropsWithChildren) {
  const date = new Date();

  const calendar = getCalendar(getYear(date));
  const day = getCalendarDay(yyyyMMDD(date));
  const mass = day.mass;

  function getNovenas() {
    const endDate = addDays(date, 9);
    const novenaObservances: Mass[] = [];

    for (const day of calendar) {
      const dayDate = parseISO(day.date);
      if (isWithinInterval(dayDate, { start: date, end: endDate })) {
        const novenas = day.mass.filter((mass) => mass.novena);
        novenaObservances.push(...novenas);
      }
    }

    return novenaObservances;
  }

  return (
    <CalendarContext.Provider
      value={{ mass, day, calendar, novenas: getNovenas() }}
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
