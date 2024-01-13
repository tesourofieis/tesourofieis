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

function getPregeneratedProper(lang: string, properId: string): any | null {
  const filePath = path.join(PROPERS_DIR, lang, `${properId}.json`);

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
  }

  return null;
}

function format_propers(propers: [Proper, Proper][], day?: Day) {
  const retvals = [];

  for (const [propers_vernacular, propers_latin] of propers) {
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

    retvals.push({
      info: info,
      sections: format_proper_sections(propers_vernacular, propers_latin), // Replace with the actual function
    });
  }

  return retvals[0];
}

function format_proper_sections(
  propers_vernacular: Proper,
  propers_latin: Proper,
) {
  const pv = propers_vernacular.serialize();
  const pl: { [key: string]: any } = {};

  for (const item of propers_latin.serialize()) {
    pl[item.id] = item.body;
  }

  const result = [];

  for (const section of pv) {
    try {
      //@ts-ignore
      section.body = [section.body, pl[section.id]];
      result.push(section);
    } catch (error) {
      console.warn(
        `Section '${section.id}' not found in latin proper '${propers_latin.id}'.`,
      );
    }
  }

  return result;
}

export {
  match,
  getCustomPreface,
  getPregeneratedProper,
  yyyyMMDD,
  format_propers,
};
