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
    description: string;
    tempora: string;
    rank: number;
    colors: string[];
    date: string;
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

function format_propers(propers: Proper[], day?: Day): ProperDay {
  const [propers_vernacular, propers_latin] = propers;
  const title = propers_vernacular.title;
  const tempora_name = day ? day.getTemporaName() : null;

  const info = {
    id: propers_vernacular.id,
    title: title,
    description: propers_vernacular.description,
    tempora: tempora_name !== title ? tempora_name : null,
    rank: propers_vernacular.rank,
    colors: propers_vernacular.colors,
    date: day ? day.date : null,
  };

  return {
    info: info,
    sections: format_proper_section(propers_latin, propers_vernacular),
  };
}

function format_proper_section(
  propers_latin: Proper,
  propers_vernacular: Proper,
) {
  const pl = [];

  const latin = propers_latin.serialize();

  for (const vernacular of propers_vernacular.serialize()) {
    pl.push({
      id: vernacular.id,
      body: {
        latin: latin.find((i) => i.id === vernacular.id)?.body,
        vernacular: vernacular.body,
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
