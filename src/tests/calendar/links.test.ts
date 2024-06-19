import { readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { getYear } from "date-fns";
import { describe, expect, test } from "vitest";
import { getCalendar } from "../../lib/getCalendar";

describe("link", () => {
  const currentYear = getYear(new Date());
  const calendar = getCalendar(currentYear);
  const allPages = getAllPagesContent("src/content/docs/missal");

  const links = Object.values(calendar)
    .map((day) => day.celebration[0].link)
    .concat(
      Object.values(calendar).map(
        (day) => day.tempora.length && day.tempora[0].link,
      ),
    );

  for (const link of links) {
    test(`should exist "${link}`, () => {
      const found = allPages.some((page) => page.includes(link));

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
