import { CUSTOM_PREFACES, PROPERS_DIR } from "./constants.ts";
import path from "path";
import fs from "fs";
import { Observance } from "./observance.ts";
import { Proper } from "./proper.ts";
import { Day } from "./day.ts";
import type { Calendar } from "./calendar.ts";
import type { UTCDate } from "@date-fns/utc";
import { format } from "date-fns";

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

function getPregeneratedProper(lang: string, properId: string) {
  const filePath = path.join(PROPERS_DIR, lang, `${properId}.json`);

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
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
}

function format_propers(propers: Proper[][], day: Day): ProperDay[] {
  return propers.map((proper) => {
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
      sections: format_proper_section(properLatin, properVernacular),
    };
  });
}

function format_proper_section(
  propers_latin: Proper,
  propers_vernacular: Proper,
) {
  const pl = [];
  const latinPropers = propers_latin.serialize();
  const vernacularPropers = propers_vernacular.serialize();

  for (const vernacular of vernacularPropers) {
    const latinProp = latinPropers.find(
      (latin) => latin?.id === vernacular?.id,
    );
    const latinBody = latinProp?.body;
    const vernacularBody = vernacular?.body;

    pl.push({
      id: vernacular?.id,
      body: {
        latin: latinBody,
        vernacular: vernacularBody,
      },
    });
  }

  return pl;
}

function printAll(calendar: Calendar) {
  return calendar.serialize();
}

export {
  match,
  getCustomPreface,
  getPregeneratedProper,
  yyyyMMDD,
  format_propers,
  printAll,
};
