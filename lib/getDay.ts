import { getYear } from "date-fns";
import { Calendar } from "./src/calendar.ts";
import { format_propers } from "./src/utils.ts";

function getDay(date: string) {
  const calendar = new Calendar(getYear(date));

  const day = calendar.get(date);

  const proper = day?.getProper();

  const format = format_propers(proper);

  return format;
}

export { getDay };