import { Calendar } from "./src/calendar.ts";

function getCalendar(year: number) {
  const calendar = new Calendar(year);

  return calendar.serialize();
}

export { getCalendar };
