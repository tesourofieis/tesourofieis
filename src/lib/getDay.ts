import { getYear } from "date-fns";
import { Calendar } from "./calendar.ts";
import { format_propers } from "./utils.ts";

function getDay(date: string) {
  const calendar = new Calendar(getYear(date));

  const day = calendar.get(date);

  const proper = day?.getProper(calendar);

  const format = format_propers(proper);

  return format;
}

export { getDay };
