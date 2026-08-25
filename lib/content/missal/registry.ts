import type { MissalPage } from "../schema";
import { canuto0119 } from "./santos/01-19o";
import { goncalo0119Portugal } from "./santos/01-19-portugal";

/**
 * Registry of missal pages that have migrated to the single-source
 * content model. Slugs are registry keys AND route segments - the same
 * string observance links point at.
 *
 * Static file-routes under src/app/missal keep taking precedence over
 * the catch-all renderer while a page's old .tsx still exists, so
 * migration is per-page and reversible.
 */
const PAGES: Record<string, MissalPage> = {
  "santos/01-19o": canuto0119,
  "santos/01-19-portugal": goncalo0119Portugal,
};

export function getMissalPage(slug: string): MissalPage | undefined {
  return PAGES[slug];
}

export function missalSlugs(): string[] {
  return Object.keys(PAGES);
}
