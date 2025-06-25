import { addDays, isWithinInterval } from "date-fns";
import { Calendar } from "./calendar";
import type { Mass } from "./observanceManager";
import { parseLocalDate } from "./utils";

function getCalendar(year: number) {
  const calendar = new Calendar(year);

  return calendar.getAllDays();
}

function getCalendarDay(date: string) {
  const calendar = new Calendar(parseLocalDate(date).getFullYear()).get(date);

  return calendar;
}

function getNovenas(date: string) {
  const calendar = new Calendar(parseLocalDate(date).getFullYear());

  const allDays = calendar.getAllDays();

  const endDate = addDays(date, 9);
  const novenaObservances: Mass[] = [];

  for (const day of allDays) {
    const dayDate = parseLocalDate(day.date);
    if (isWithinInterval(dayDate, { start: date, end: endDate })) {
      const novenas = day.mass.filter((mass) => mass.novena);
      novenaObservances.push(...novenas);
    }
  }

  return novenaObservances;
}

function getSeason(date: string) {
  const calendar = new Calendar(parseLocalDate(date).getFullYear());

  return calendar.getSeasonName(date);
}

export { getCalendar, getCalendarDay, getNovenas, getSeason };
