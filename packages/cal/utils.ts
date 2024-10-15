import { format } from "date-fns";
import type { Mass } from "./observanceManager";

type Pattern = string | RegExp;

function match(
  observances: string | Mass | (string | Mass)[],
  patterns: string | Pattern | (string | Pattern)[],
): Mass | undefined {
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
        return observance as Mass;
      }
      if (pattern instanceof RegExp && pattern.test(observanceId)) {
        return observance as Mass;
      }
    }
  }
}

function yyyyMMDD(date?: Date) {
  return format(date || new Date(), "yyyy-MM-dd");
}

export { match, yyyyMMDD };
