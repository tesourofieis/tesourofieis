import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

/**
 * Link integrity: every observance `link` must resolve to a real route
 * file under src/app/missal - the client renders these as direct links
 * and an unmatched slug is a runtime 404.
 *
 * The reverse direction is informational only: pages reached from index
 * listings or cross-references legitimately have no observance link.
 */

const APP = join(import.meta.dir, "../..", "src/app");
const OBSERVANCE_DIRS = [
  join(import.meta.dir, "../observances"),
  join(import.meta.dir, "../calendars/overrides.ts"),
];

function collectSlugs(dir: string, into: Set<string>): void {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      collectSlugs(full, into);
      continue;
    }
    if (!entry.endsWith(".tsx")) continue;
    if (entry.startsWith("_") || entry.includes("+")) continue;
    const slug = relative(APP, full).replace(/\.tsx$/, "");
    if (slug) into.add(slug);
    into.add(slug);
  }
}

const slugs = new Set<string>();
collectSlugs(join(APP, "missal"), slugs);

function collectLinks(): { link: string; source: string }[] {
  const out: { link: string; source: string }[] = [];
  for (const target of OBSERVANCE_DIRS) {
    const files = statSync(target).isDirectory()
      ? walk(target)
      : [target];
    for (const f of files) {
      const src = readFileSync(f, "utf8");
      for (const m of src.matchAll(/link: "([^"]+)"/g)) {
        const link = m[1];
        if (link) out.push({ link, source: f });
      }
    }
  }
  return out;
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry.endsWith(".ts")) out.push(full);
  }
  return out;
}

describe("observance link integrity", () => {
  test("every observance link resolves to a missal route", () => {
    const broken = collectLinks().filter(({ link }) => !slugs.has(link));
    if (broken.length) {
      console.error(
        broken.map((b) => `  ${b.link}  (${b.source})`).join("\n"),
      );
    }
    expect(broken).toEqual([]);
  });

  test("orphan pages (informational)", () => {
    const linked = new Set(collectLinks().map((l) => l.link));
    const orphans = [...slugs].filter((s) => !linked.has(s)).sort();
    // Reached via index listings and cross-references; listed so drift
    // stays visible without blocking.
    console.error(`${orphans.length} missal pages have no observance link`);
  });
});
