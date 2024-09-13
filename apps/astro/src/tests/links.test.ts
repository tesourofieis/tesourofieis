// @ts-nocheck
import { readdirSync, statSync } from "node:fs";
import { basename, resolve } from "node:path";
import { getYear } from "date-fns";
import { describe, expect, test } from "vitest";

import { getCalendar } from "@tesourofieis/cal/getCalendar";

describe("link", () => {
  const currentYear = getYear(new Date());
  const calendar = getCalendar(currentYear);
  const allPages = getAllPagesContent("src/content/docs/missal");

  const links = calendar.flatMap((i) => i.mass.map((day) => day.link));

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
