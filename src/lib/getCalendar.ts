import { Calendar } from "./src/calendar.ts";

function getCalendar(year: number) {
  const calendar = new Calendar(year);

  return calendar;
}

function getCalendarDay(year: number, date: string) {
  const calendar = new Calendar(year).get(date);

  return calendar;
}

export { getCalendar, getCalendarDay };
