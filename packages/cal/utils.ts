import type { UTCDate } from "@date-fns/utc";
import { format } from "date-fns";
import type { Observance } from "./day";

type Pattern = string | RegExp;

function match(
  observances: string | Observance | (string | Observance)[],
  patterns: string | Pattern | (string | Pattern)[],
): Observance | undefined {
  if (!Array.isArray(observances)) {
    observances = [observances];
  }

  if (!Array.isArray(patterns)) {
    patterns = [patterns];
  }

  for (const observance of observances) {
    const observanceId =
      typeof observance === "string" ? observance : observance.id;

    for (const pattern of patterns) {
      if (
        typeof pattern === "string" &&
        new RegExp(pattern).test(observanceId)
      ) {
        return observance as Observance;
      }
      if (pattern instanceof RegExp && pattern.test(observanceId)) {
        return observance as Observance;
      }
    }
  }
}

function yyyyMMDD(date?: Date | UTCDate) {
  return format(date || new Date(), "yyyy-MM-dd");
}

export { match, yyyyMMDD };
