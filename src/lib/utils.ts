import type { UTCDate } from "@date-fns/utc";
import { format } from "date-fns";
import { CUSTOM_PREFACES } from "./constants.ts";
import type { Day } from "./day.ts";
import type { Observance } from "./observance.ts";
import type { Proper } from "./proper.ts";

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

function yyyyMMDD(date: Date | UTCDate) {
  return format(date, "yyyy-MM-dd");
}

function getCustomPreface(
  celebration: Observance,
  tempora?: Observance,
): string | null {
  for (const { id, preface } of CUSTOM_PREFACES) {
    if (
      new RegExp(id).test(celebration.id) ||
      (tempora && celebration.rank > 1 && new RegExp(id).test(tempora.id))
    ) {
      return preface;
    }
  }
  return null;
}

export interface ProperDay {
  info: {
    id: string;
    title: string;
    tempora: string;
    rank: number;
    colors: string[];
    date: string;
    day: Day;
  };
  sections: Section[];
}

interface Section {
  id: string;
  body: {
    latin: string[];
    vernacular: string[];
  };
  subSections?: Section[];
}

function formatPropers(propers: Proper[][], day: Day): ProperDay[] {
  return propers?.map((proper) => {
    if (proper) {
      const [properVernacular, properLatin] = proper;

      const title = properVernacular.title;
      const temporaName = day.getTemporaName();

      const info = {
        id: properVernacular.id,
        title: title || "Feria",
        tempora: temporaName !== title ? temporaName : null,
        rank: properVernacular.rank,
        colors: properVernacular.colors,
        date: day.date,
        day: day,
      };

      return {
        info: info,
        sections: formatProperSection(properLatin, properVernacular),
      };
    }
  });
}

function formatProperSection(propersLatin: Proper, propersVernacular: Proper) {
  const pl = [];
  const latinPropers = propersLatin.serialize();
  const vernacularPropers = propersVernacular.serialize();

  for (const vernacular of vernacularPropers) {
    const latinProp = latinPropers.find(
      (latin) => latin?.id === vernacular?.id,
    );

    pl.push({
      id: latinProp?.id,
      body: {
        latin: latinProp?.body,
        vernacular: vernacular?.body,
      },
      subSections: latinProp?.subSections?.map((latin) => ({
        id: latin?.id,
        body: {
          latin: latin?.body,
          vernacular:
            vernacular.subSections.find(
              (vernacular) => vernacular.id === latin.id,
            )?.body ?? "",
        },
      })),
    });
  }

  return pl;
}

export { match, getCustomPreface, yyyyMMDD, formatPropers };
