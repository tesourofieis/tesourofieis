import { getYear } from "date-fns";
import { Calendar } from "./calendar.ts";
import { formatPropers } from "./utils.ts";

function getDay(date: string) {
  const calendar = new Calendar(getYear(date));

  const day = calendar.get(date);

  const proper = day?.getProper(calendar);

  const format = formatPropers(proper, day);

  return format;
}

export { getDay };
