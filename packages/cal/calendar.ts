import { yyyyMMDD } from "./utils";

import { UTCDate } from "@date-fns/utc";
import {
  addDays,
  getDate,
  getDay,
  getMonth,
  getYear,
  isSameDay,
  isSunday,
  nextSunday,
  nextWednesday,
  previousSaturday,
  previousSunday,
  subDays,
} from "date-fns";
import { type Mass, massManager } from "./observanceManager";
import { type RuleResult, Rules } from "./rules";

export class Day {
  date: string;
  mass: Mass[] = [];

  constructor(date: string) {
    this.date = date;
  }

  get all() {
    return this.mass;
  }

  getTemporaName() {
    return this.mass[0]?.name;
  }
}

class Calendar {
  private container: Map<string, Day>;
  public year: number;

  constructor(year: number) {
    this.year = year;
    this.container = new Map();
    this.buildEmptyCalendar(year);
    this.create();
  }

  private buildEmptyCalendar(year: number): void {
    let date = new UTCDate(year, 0, 1);

    while (date.getFullYear() === year) {
      this.container.set(yyyyMMDD(date), new Day(yyyyMMDD(date)));
      date = addDays(date, 1);
    }
  }

  private create() {
    this.fillInTemporaDays();
    this.fillInSanctiDays();
    this.resolveConcurrency();
  }

  private fillInTemporaDays() {
    // """
    // Days depending on variable date, such as Easter or Advent
    // """
    // # Inserting blocks
    this.insertBlock(
      this.calcHolyFamily(),
      massManager.getByTypeId("post-epiphany"),
    );
    this.insertBlock(
      this.calcSeptuagesima(this.year),
      massManager.getByTypeId("pre-lent-to-pentcost"),
    );
    this.insertBlock(
      this.calcSaturdayBefore24SundayAfterPentecost(this.year),
      massManager.getByTypeId("post-epiphany"),
      true,
      false,
      this.calcFirstAdventSunday(this.year),
    );
    this.insertBlock(
      this.calc24SundayAfterPentecost(this.year),

      massManager.getByTypeId("week-24-after-pentcost"),
    );
    this.insertBlock(
      this.calcFirstAdventSunday(this.year),
      massManager.getByTypeId("advent"),
      false,
      false,
      new UTCDate(this.year, 11, 23),
    );
    this.insertBlock(
      this.calcEmberWednesdaySeptember(this.year),
      massManager.getByTypeId("ember-september"),
    );

    // # Inserting single days
    const holyNameDate = this.calcHolyName(this.year);

    const holyName = this.container.get(yyyyMMDD(holyNameDate));
    if (holyName) {
      holyName.mass.push(
        massManager.createMassWithDate(
          massManager.getById("TEMPORA_NAT2_0"),
          yyyyMMDD(holyNameDate),
        ),
      );
    }

    const christKingDate = this.calcChristKing(this.year);

    const christKing = this.container.get(yyyyMMDD(christKingDate));
    if (christKing) {
      christKing.mass.push(
        massManager.createMassWithDate(
          massManager.getById("SANCTI_10_DUr"),
          yyyyMMDD(christKingDate),
        ),
      );
    }

    const christmasOctaveSunday = this.calcSundayChristmasOctave(this.year);
    if (christmasOctaveSunday && massManager.getById("TEMPORA_NAT1_0")) {
      this.insertBlock(christmasOctaveSunday, [
        massManager.getById("TEMPORA_NAT1_0")!,
      ]);
    }
  }

  private insertBlock(
    date: Date,
    block: Mass[],
    reverse = false,
    overwrite = true,
    stopDate?: Date,
  ) {
    if (reverse) {
      // TODO: use toReversed in order not to mutate the original
      // or slice
      block = block.slice().reverse();
    }

    for (const [ii, observance] of block.entries()) {
      const currentDate = addDays(new UTCDate(date), reverse ? -ii : ii);

      if (!observance) {
        continue;
      }

      const dateKey = yyyyMMDD(currentDate);

      if (this.container.get(dateKey)?.mass.length && !overwrite) {
        break;
      }

      if (stopDate && isSameDay(stopDate, subDays(currentDate, 1))) {
        break;
      }

      const findDate = this.container.get(dateKey);
      if (findDate && observance) {
        findDate.mass.push(massManager.createMassWithDate(observance, dateKey));
      }
    }
  }

  private fillInSanctiDays() {
    for (const [date] of this.container) {
      const m = getMonth(date);
      const d = getDate(date);
      const days = massManager
        .getByFlexibility("santos")
        .filter((ii) => ii.month === m + 1 && ii.day === d)
        .map((ii) => massManager.createMassWithDate(ii, date));

      this.container.get(date)?.mass.push(...days);
    }
  }

  // Apply `kalendar.rules.*` to the initially instantiated Calendar to fix the situations
  // where more than one Observance falls in the same day.
  private resolveConcurrency() {
    for (const [date, day] of this.container.entries()) {
      const rules = new Rules(day.mass, date, this);
      const result = this.applyRules(rules);

      if (result?.observances) {
        const temporaObservances = result.observances.filter(i => i.flexibility === "tempora");

        if (temporaObservances.length > 1) {
          result.observances = [
            ...result.observances.filter(i => i.flexibility !== "tempora"),
            temporaObservances[1]
          ];
        }
      }

      if (result?.toShift?.date) {
        const shiftedDay =
          this.container.get(result.toShift.date) ||
          new Day(result.toShift.date);

        shiftedDay.mass = this.removeDuplicates([
          ...shiftedDay.mass,
          ...result.toShift.observances,
        ]);

        this.container.set(result.toShift.date, shiftedDay);
      }

      if (result?.observances?.length) {
        day.mass = this.removeDuplicates(result.observances);
      }
      this.container.set(date, day);
    }
  }

  private applyRules(rules: Rules): RuleResult {
    let currentObservances = rules.observances;

    const result = rules.applyRules();

    if (result) {
      if (result.toShift?.observances.length) {
        // Remove shifted observances from current observances
        currentObservances = currentObservances.filter(
          (obs) => !result.toShift!.observances.some(
            (shiftedObs) => shiftedObs.id === obs.id
          )
        );
        return {
          observances: result.observances || currentObservances,
          toShift: result.toShift
        };
      }
      return result;
    }

    // If no rule was applied, return the original observances
    return { observances: currentObservances };
  }

  private removeDuplicates(masses: Mass[]): Mass[] {
    masses.sort((a, b) => a.rank - b.rank);
    const seen = new Set<string>();
    return masses.filter((mass) => {
      const id = mass.id; // Assuming each Mass has a unique `id`
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }

  private calcEasterSunday(year: number): Date {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    const easter = new UTCDate(year, month - 1, day);

    return easter;
  }

  private calcHolyFamily(): Date {
    return nextSunday(new UTCDate(this.year, 0, 6));
  }

  private calcSeptuagesima(year: number): Date {
    // """ Septuagesima Sunday.
    //
    // Beginning of the pre-Lenten season (Shrovetide).
    // It's 63 days before Ressurection, ninth Sunday before Easter, the third before Ash Wednesday.
    // First day of the Ressurection Sunday - related block.
    // """
    const easter = this.calcEasterSunday(year);
    return subDays(easter, 63);
  }

  private calcFirstAdventSunday(year: number): Date {
    // """
    // First Sunday of Advent - November 27 if it's Sunday, otherwise closest Sunday.
    // """
    const christmasDay = new UTCDate(year, 11, 25);
    const weekday = getDay(christmasDay);

    switch (weekday) {
      case 0: // Sunday
        return new UTCDate(getYear(christmasDay), 10, 27);
      case 1: // Monday
        return new UTCDate(getYear(christmasDay), 11, 3);
      case 2: // Tuesday
        return new UTCDate(getYear(christmasDay), 11, 2);
      case 3: // Wednesday
        return new UTCDate(getYear(christmasDay), 11, 1);
      case 4: // Thursday
        return new UTCDate(getYear(christmasDay), 10, 30);
      case 5: // Friday
        return new UTCDate(getYear(christmasDay), 10, 29);
      default: // Saturday
        return new UTCDate(getYear(christmasDay), 10, 28);
    }
  }

  private calc24SundayAfterPentecost(year: number): Date {
    // """ 24th Sunday after Pentecost.
    //
    // Last Sunday before First Sunday of Advent.
    // It will be always TEMPORA_PENT24_0, which will be placed either:
    // * instead of TEMPORA_PENT23_0
    //   if the number of TEMPORA_PENT*_0 Sundays in given year == 23)
    // * directly after a week starting with TEMPORA_PENT23_0
    //   if the number of TEMPORA_PENT*_0 Sundays in given year == 24)
    // * directly after a week starting with TEMPORA_EPI6_0 (moved from post-epiphania period)
    //   if the number of TEMPORA_PENT*_0 Sundays in given year > 24)
    // """
    return previousSunday(new UTCDate(this.calcFirstAdventSunday(year)));
  }

  private calcSaturdayBefore24SundayAfterPentecost(year: number): Date {
    // """ Last Saturday before 24th Sunday after Pentecost.
    //
    // This is the end of potentially "empty" period that might appear
    // between 23rd and 24th Sunday after Pentecost if Easter is early.
    // In such case one or more Sundays after Epiphany (TEMPORA_EPI*_0) are moved here to "fill the gap"

    return previousSaturday(new UTCDate(this.calc24SundayAfterPentecost(year)));
  }

  private calcEmberWednesdaySeptember(year: number): Date {
    // """ Wednesday of the Ember Days of September.
    //
    // Ember Wednesday in September is a Wednesday after third Sunday
    // of September according to John XXIII's motu proprio
    // "Rubricarum instructum" of June 25 1960.
    // """
    let d = new UTCDate(year, 8, 1);
    while (getMonth(d) === 8) {
      if (isSunday(d) && getDate(d) >= 15 && getDate(d) <= 21) {
        break;
      }
      d = addDays(d, 1);
    }
    return nextWednesday(d);
  }

  private calcHolyName(year: number) {
    // """ The Feast of the Holy Name of Jesus.
    //
    // Kept on the First Sunday of the year; but if this Sunday falls on
    // 1st, 6th or 7th January, the feast is kept on 2nd January.
    // """
    let d = new UTCDate(year, 0, 1);

    while (getDate(d) <= 7) {
      if (isSunday(d)) {
        if (getDate(d) === 1 || getDate(d) === 6 || getDate(d) === 7) {
          return new UTCDate(year, 0, 2);
        }

        return d;
      }

      d = addDays(d, 1);
    }

    console.error("Unexpected condition: Holy Name date not found.");
  }

  private calcChristKing(year: number): Date {
    // The Feast of Christ the King, last Sunday of October.
    const d = new UTCDate(year, 10, 1);

    return previousSunday(d);
  }

  private calcSundayChristmasOctave(year: number): Date | null {
    // """
    // Sunday within the Octave of Christmas, falls between Dec 26 and Dec 31
    // """
    let d = new UTCDate(year, 11, 27); // December 27
    while (d.getFullYear() === year) {
      if (isSunday(d)) {
        return d;
      }
      d = addDays(d, 1);
    }
    return null;
  }

  public get(date: string) {
    return this.container.get(date);
  }

  public findDay(observanceId?: string): [string, Day] | undefined {
    if (!observanceId) return;
    for (const [date, day] of this.container) {
      if (day.all.some((observance) => observance.id === observanceId)) {
        return [date, day];
      }
    }
    return undefined;
  }

  public getAllDays(): Day[] {
    return Array.from(this.container.values());
  }

  public getDay(date: string): Day | undefined {
    return this.container.get(date);
  }

  public getDaysInMonth(month: number): Day[] {
    const startDate = new UTCDate(this.year, month - 1, 1);
    const endDate = new UTCDate(this.year, month, 0);
    const days: Day[] = [];

    for (let d = startDate; d <= endDate; d = addDays(d, 1)) {
      const day = this.getDay(yyyyMMDD(d));
      if (day) days.push(day);
    }

    return days;
  }

  // Method to allow adding or updating masses for a specific day
  public updateDay(date: string, masses: Mass[]): void {
    const day = this.getDay(date);
    if (day) {
      day.mass = masses;
    } else {
      console.warn(`Day ${date} not found in calendar`);
    }
  }
}

export { Calendar };
