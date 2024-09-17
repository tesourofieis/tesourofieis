import { addDays, getYear, isWithinInterval, parseISO } from "date-fns";
import { Calendar } from "./calendar";
import type { Mass } from "./observanceManager";

function getCalendar(year: number) {
  const calendar = new Calendar(year);

  return calendar.getAllDays();
}

function getCalendarDay(date: string) {
  const calendar = new Calendar(getYear(date)).get(date);

  return calendar;
}

function getNovenas(date: string) {
  const calendar = new Calendar(getYear(date));

  const allDays = calendar.getAllDays();

  const endDate = addDays(date, 9);
  const novenaObservances: Mass[] = [];

  for (const day of allDays) {
    const dayDate = parseISO(day.date);
    if (isWithinInterval(dayDate, { start: date, end: endDate })) {
      const novenas = day.mass.filter((mass) => mass.novena);
      novenaObservances.push(...novenas);
    }
  }

  return novenaObservances;
}

export { getCalendar, getCalendarDay, getNovenas };
