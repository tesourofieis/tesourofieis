import type { CalendarEdition, Mass } from "./domain";
import type { Day } from "./day";
import { sharedCalendarStore } from "./calendarStore";

/** The app's default calendar: Rubrics 1960 (1962 typical edition). */
const DEFAULT_EDITION: CalendarEdition = "62";

function getCalendar(year: number, edition: CalendarEdition = DEFAULT_EDITION): Day[] {
  return sharedCalendarStore.getDays(year, edition);
}

function getCalendarDay(date: string, edition: CalendarEdition = DEFAULT_EDITION) {
  return sharedCalendarStore.getDay(date, edition);
}

function getNovenas(date: string, edition: CalendarEdition = DEFAULT_EDITION): Mass[] {
  return sharedCalendarStore.getNovenas(date, edition);
}

function getSeason(date: string, edition: CalendarEdition = DEFAULT_EDITION) {
  return sharedCalendarStore.getSeason(date, edition);
}

export { getCalendar, getCalendarDay, getNovenas, getSeason };
