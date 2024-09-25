import type { Day } from "@tesourofieis/cal/calendar";
import { getCalendar, getCalendarDay } from "@tesourofieis/cal/getCalendar";
import type { Mass } from "@tesourofieis/cal/observanceManager";
import { yyyyMMDD } from "@tesourofieis/cal/utils";
import { getYear } from "date-fns";
import { useContext, createContext, type PropsWithChildren } from "react";

const CalendarContext = createContext<{
  calendar: Day[];
  day: Day;
  mass: Mass[];
}>(undefined);

export function CalendarProvider({ children }: PropsWithChildren) {
  const date = new Date();

  const calendar = getCalendar(getYear(date));
  const day = getCalendarDay(yyyyMMDD(date));
  const mass = day.mass;

  return (
    <CalendarContext.Provider value={{ mass, day, calendar }}>
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
