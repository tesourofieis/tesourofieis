import { getYear } from "date-fns";
import { Calendar } from "./calendar.ts";

function getCalendar(year: number) {
  const calendar = new Calendar(year);

  return calendar.serialize();
}

function getCalendarDay(date: string) {
  const calendar = new Calendar(getYear(date)).get(date);
  console.log({ calendar });

  return calendar;
}

export { getCalendar, getCalendarDay };
