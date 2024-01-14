import { CUSTOM_PREFACES, PROPERS_DIR } from "./constants.ts";
import path from "path";
import fs from "fs";
import { Observance } from "./observance.ts";
import { Proper } from "./proper.ts";
import { Day } from "./day.ts";

type Pattern = string | RegExp;

function match(
  observances: string | Observance | Array<string | Observance>,
  patterns: Array<Pattern> | Pattern,
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
      const patternRegex =
        typeof pattern === "string" ? new RegExp(pattern) : pattern;

      if (patternRegex.test(observanceId)) {
        return observance as Observance;
      }
    }
  }

  return;
}

function yyyyMMDD(date: Date) {
  return date.toISOString().split("T")[0];
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

interface ProperDay {
  info: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    tempora: string;
    rank: number;
    colors: string[];
    supplements: unknown[];
    date: string;
  };
  latin_section: Section[];
  vernacular_section: Section[];
}

interface Section {
  id: string;
  body: string[];
}

function format_propers(propers: Proper[], day?: Day): ProperDay {
  console.log("propers1", propers);

  const [propers_vernacular, propers_latin] = propers;
  const title = propers_vernacular.title;
  const tempora_name = day ? day.getTemporaName() : null;

  const info = {
    id: propers_vernacular.id,
    title: title,
    description: propers_vernacular.description,
    tags: propers_vernacular.tags,
    tempora: tempora_name !== title ? tempora_name : null,
    rank: propers_vernacular.rank,
    colors: propers_vernacular.colors,
    supplements: propers_vernacular.supplements,
    date: day ? day.date : null,
  };

  return {
    info: info,
    latin_section: format_proper_section(propers_latin),
    vernacular_section: format_proper_section(propers_vernacular),
  };
}

function format_proper_section(propers: Proper) {
  const pl: Section[] = [];

  for (const item of propers.serialize()) {
    pl.push({
      id: item.id,
      body: item.body,
    });
  }

  return pl;
}

export {
  match,
  getCustomPreface,
  getPregeneratedProper,
  yyyyMMDD,
  format_propers,
};