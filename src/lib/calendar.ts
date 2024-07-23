import { Day, Observance } from "./day.ts";
import { yyyyMMDD } from "./utils.ts";

import {
  ADVENT,
  EMBER_DAYS_SEPTEMBER,
  FROM_PRE_LENT_TO_POST_PENTECOST,
  LOCAL,
  NATIVITY_OCTAVE_SUNDAY,
  OUTRO,
  POST_EPIPHANY,
  SANCTI,
  SANCTI_10_DUr,
  TEMPORA_NAT2_0,
  WEEK_24_AFTER_PENTECOST,
} from "./constants.ts";
import { rules } from "./rules.ts";

import { UTCDate } from "@date-fns/utc";
import {
  addDays,
  format,
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
    this.insertBlock(this.calcHolyFamily(this.year), POST_EPIPHANY);
    this.insertBlock(
      this.calcSeptuagesima(this.year),
      FROM_PRE_LENT_TO_POST_PENTECOST,
    );
    this.insertBlock(
      this.calcSaturdayBefore24SundayAfterPentecost(this.year),
      POST_EPIPHANY,
      true,
      false,
      this.calcFirstAdventSunday(this.year),
    );
    this.insertBlock(
      this.calc24SundayAfterPentecost(this.year),
      WEEK_24_AFTER_PENTECOST,
    );
    this.insertBlock(
      this.calcFirstAdventSunday(this.year),
      ADVENT,
      false,
      false,
      new UTCDate(this.year, 11, 23),
    );
    this.insertBlock(
      this.calcEmberWednesdaySeptember(this.year),
      EMBER_DAYS_SEPTEMBER,
    );

    // # Inserting single days
    const holyNameDate = this.calcHolyName(this.year);

    this.container.get(yyyyMMDD(holyNameDate)).celebration = [
      new Observance(TEMPORA_NAT2_0, yyyyMMDD(holyNameDate)),
    ];

    const christKingDate = this.calcChristKing(this.year);
    if (this.container.get(yyyyMMDD(christKingDate))) {
      this.container.get(yyyyMMDD(christKingDate)).celebration = [
        new Observance(SANCTI_10_DUr, yyyyMMDD(christKingDate)),
      ];
    }

    const christmasOctaveSunday = this.calcSundayChristmasOctave(this.year);
    if (christmasOctaveSunday) {
      this.insertBlock(christmasOctaveSunday, NATIVITY_OCTAVE_SUNDAY);
    }
  }

  private insertBlock(
    date: Date,
    block: string[],
    reverse = false,
    overwrite = true,
    stopDate?: Date,
  ) {
    if (reverse) {
      // TODO: use toReversed in order not to mutate the original
      // or slice
      block = block.slice().reverse();
    }

    for (const [ii, observanceIds] of block.entries()) {
      const currentDate = addDays(new UTCDate(date), reverse ? -ii : ii);

      if (!observanceIds) {
        continue;
      }

      const dateKey = yyyyMMDD(currentDate);

      if (this.container.get(dateKey)?.celebration.length && !overwrite) {
        break;
      }

      if (isSameDay(stopDate, subDays(currentDate, 1))) {
        break;
      }

      if (this.container.get(dateKey)) {
        this.container.get(dateKey).tempora = [
          new Observance(observanceIds, dateKey),
        ];
        this.container.get(dateKey).celebration = [
          ...this.container.get(dateKey).tempora,
        ];
      }
    }
  }

  private fillInSanctiDays() {
    for (const [date] of this.container.entries()) {
      const dateId = format(date, "MM-dd");
      const days = SANCTI.filter((ii) => ii.startsWith(`santos:${dateId}`)).map(
        (ii) => new Observance(ii, date),
      );

      this.container.get(date)?.celebration.push(...days);

      const local = LOCAL.filter((ii) => ii.startsWith(`santos:${dateId}`)).map(
        (ii) => new Observance(ii, date),
      );

      if (local.length) {
        this.container.get(date)?.local.push(...local);
      }

      const outro = OUTRO.filter((ii) => ii.startsWith(`santos:${dateId}`)).map(
        (ii) => new Observance(ii, date),
      );

      if (outro.length) {
        this.container.get(date)?.outro.push(...outro);
      }
    }
  }

  // Apply `kalendar.rules.*` to the initially instantiated Calendar to fix the situations
  // where more than one Observance falls in the same day.
  private resolveConcurrency() {
    const shiftedAll: { [date: string]: Observance[] } = {};

    for (const [date] of this.container.entries()) {
      const [celebration, commemoration, shifted] = this.applyRules(
        date,
        shiftedAll[date] || [],
      );

      this.container.get(date).celebration = celebration as Observance[];
      this.container.get(date).commemoration = commemoration as Observance[];

      if (shifted) {
        // @ts-ignore
        for (const [k, v] of shifted) {
          if (!shiftedAll[k]) {
            shiftedAll[k] = [];
          }
          shiftedAll[k].push(...(Array.isArray(v) ? v : [v]));
        }
      }
    }
  }

  private applyRules(date: string, shifted: Observance[]) {
    for (const rule of rules) {
      const results = rule(
        this,
        date,
        this.container.get(date)?.tempora,
        this.container.get(date).celebration.concat(shifted),
      );

      if (results) {
        return results;
      }
    }

    return [this.container.get(date).celebration, [], []];
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

  private calcHolyFamily(year: number): Date {
    // Feast of the Holy Family - First Sunday after Epiphany (06 January).
    const d = new UTCDate(year, 0, 6); // Months are zero-indexed in JavaScript

    return nextSunday(d);
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

  get(date: string) {
    return this.container.get(date);
  }

  findDay(observanceId: string) {
    for (const [date_, day] of this.container) {
      if (day.all.some((observance) => observance.id === observanceId)) {
        return [date_, day];
      }
    }
  }

  private items() {
    return this.container.entries();
  }

  serialize(): { [date: string]: Day } {
    const serialized = {};
    for (const [date_, day] of this.items()) {
      serialized[date_] = day.serialize();
    }
    return serialized;
  }
}

export { Calendar };
