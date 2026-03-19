import { Calendar } from "./calendar";
import type { Mass } from "./observanceManager";
import { shiftLocalDate } from "./utils";

const calendarByYear = new Map<number, Calendar>();

function getOrCreateCalendar(year: number): Calendar {
  const existing = calendarByYear.get(year);
  if (existing) {
    return existing;
  }

  const calendar = new Calendar(year);
  calendarByYear.set(year, calendar);
  return calendar;
}

function yearFromDateString(date: string): number {
  return Number.parseInt(date.slice(0, 4), 10);
}

function getCalendar(year: number) {
  return getOrCreateCalendar(year).getAllDays();
}

function getCalendarDay(date: string) {
  return getOrCreateCalendar(yearFromDateString(date)).get(date);
}

function getNovenas(date: string) {
  const allDays = getOrCreateCalendar(yearFromDateString(date)).getAllDays();
  const endDate = shiftLocalDate(date, 9);
  const novenaObservances: Mass[] = [];

  for (const day of allDays) {
    if (day.date < date || day.date > endDate) {
      continue;
    }

    for (const mass of day.mass) {
      if (mass.novena) {
        novenaObservances.push(mass);
      }
    }
  }

  return novenaObservances;
}

function getSeason(date: string) {
  return getOrCreateCalendar(yearFromDateString(date)).get(date)?.season;
}

function __clearCalendarCacheForBenchmarks() {
  calendarByYear.clear();
}

export {
  __clearCalendarCacheForBenchmarks,
  getCalendar,
  getCalendarDay,
  getNovenas,
  getSeason,
};
