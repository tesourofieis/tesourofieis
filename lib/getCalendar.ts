import type { CalendarEdition, Mass } from "./domain";
import { Effect, Layer } from "effect";
import { Calendar } from "./calendar";
import { getCalendarDefinition } from "./calendars";
import { MassesLive } from "./observanceManager";
import { ObservabilityLive } from "./observability";
import { shiftLocalDate } from "./utils";

const calendarLayer = Layer.mergeAll(MassesLive, ObservabilityLive);

const calendarByYear = new Map<string, Calendar>();

/** The app's default calendar: Rubrics 1960 (1962 typical edition). */
const DEFAULT_EDITION: CalendarEdition = "62";

function getOrCreateCalendar(year: number, edition: CalendarEdition): Calendar {
  const key = `${year}:${edition}`;
  const existing = calendarByYear.get(key);
  if (existing) {
    return existing;
  }

  const calendar = new Calendar(year, getCalendarDefinition(edition));
  // Throws UnsupportedYearError for years outside the model (fail fast).
  Effect.runSync(calendar.build().pipe(Effect.provide(calendarLayer)));
  calendarByYear.set(key, calendar);
  return calendar;
}

function yearFromDateString(date: string): number {
  return Number.parseInt(date.slice(0, 4), 10);
}

function getCalendar(year: number, edition: CalendarEdition = DEFAULT_EDITION) {
  return getOrCreateCalendar(year, edition).getAllDays();
}

function getCalendarDay(date: string, edition: CalendarEdition = DEFAULT_EDITION) {
  return getOrCreateCalendar(yearFromDateString(date), edition).get(date);
}

function getNovenas(date: string, edition: CalendarEdition = DEFAULT_EDITION) {
  const allDays = getOrCreateCalendar(yearFromDateString(date), edition).getAllDays();
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

function getSeason(date: string, edition: CalendarEdition = DEFAULT_EDITION) {
  return getOrCreateCalendar(yearFromDateString(date), edition).get(date)?.season;
}

function __clearCalendarCacheForBenchmarks() {
  calendarByYear.clear();
}

export { __clearCalendarCacheForBenchmarks, getCalendar, getCalendarDay, getNovenas, getSeason };
