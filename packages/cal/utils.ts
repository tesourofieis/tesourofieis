import { format, parse } from "date-fns";

function yyyyMMDD(date: Date) {
  return format(date, "yyyy-MM-dd");
}

function parseLocalDate(dateString: string): Date {
  return parse(dateString, "yyyy-MM-dd", new Date());
}

export { yyyyMMDD, parseLocalDate };
