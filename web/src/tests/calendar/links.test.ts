import { readdirSync, statSync } from "node:fs";
import { basename, resolve } from "node:path";
import { getYear } from "date-fns";
import { describe, expect, test } from "vitest";
import { getCalendar } from "../../lib/getCalendar";

describe("link", () => {
  const currentYear = getYear(new Date());
  const calendar = getCalendar(currentYear);
  const allPages = getAllPagesContent("src/content/docs/missal");

  const links = Object.values(calendar)
    .filter((i) => i.celebration.length)
    .map((day) => day.celebration[0].link)
    .concat(
      Object.values(calendar)
        .filter((i) => i.tempora.length)
        .map((day) => day.tempora[0].link),
    )
    .concat(
      Object.values(calendar)
        .filter((i) => i.local.length)
        .map((day) => day.local[0].link),
    )
    .concat(
      Object.values(calendar)
        .filter((i) => i.commemoration.length)
        .map((day) => day.commemoration[0].link),
    );

  for (const link of links) {
    const linkFileName = basename(link);
    test(`should exist "${link} / ${linkFileName}"`, () => {
      const found = allPages.some(
        (page) => basename(page) === `${linkFileName}.mdx`,
      );

      expect(found).toBe(true);
    });
  }
});

function getAllPagesContent(dir: string) {
  let results = [];

  for (const file of readdirSync(dir)) {
    const filePath = resolve(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getAllPagesContent(filePath));
    } else {
      results.push(filePath);
    }
  }

  return results;
}
