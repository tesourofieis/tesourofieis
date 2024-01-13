import { Calendar } from "./src/calendar.ts";

function getcalendar(year: number) {
  const calendar = new Calendar(year);

  return calendar;
}

export { getcalendar };
