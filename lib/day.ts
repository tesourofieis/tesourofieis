import type { LiturgicalSeason, Mass } from "./domain";

/**
 * Represents a single calendar day in the liturgical calendar.
 */
export class Day {
  mass: Mass[] = [];
  alternatives: Mass[] = []; // outro, local, edition-specific masses - don't participate in concurrency

  constructor(
    public date: string,
    public season: LiturgicalSeason,
  ) {}

  get all() {
    return [...this.mass, ...this.alternatives];
  }
}
