import {
  addDays,
  isSameDay,
  isSunday,
  nextSunday,
  nextWednesday,
  previousSaturday,
  previousSunday,
  subDays,
  isSaturday,
  isLeapYear,
  isAfter,
  isBefore,
} from "date-fns";
import { parseLocalDate, yyyyMMDD } from "./utils";
import { type Mass, massManager } from "./observanceManager";

export enum LiturgicalSeason {
  ADVENT = "Advento",
  CHRISTMAS = "Natal",
  EPIPHANY = "Epifania",
  SEPTUAGESIMA = "Septuagésima",
  LENT = "Quaresma",
  PASSIONTIDE = "Paixão",
  HOLY_WEEK = "Semana Santa",
  EASTER = "Páscoa",
  PENTECOST = "Pentecostes",
}

/**
 * Represents a single calendar day in the liturgical calendar.
 * - `date` is stored as yyyy-MM-dd (string) for use as map keys.
 * - `mass` contains zero or more Mass observances for that day.
 * - `season` is the liturgical season the day belongs to.
 */
export class Day {
  mass: Mass[] = [];
  season: LiturgicalSeason = "" as LiturgicalSeason;

  constructor(public date: string) {}

  get all() {
    return this.mass;
  }
}

interface KeyDates {
  christmas: Date;
  epiphany: Date;
  easterSunday: Date;
  ashWednesday: Date;
  septuagesima: Date;
  passionSunday: Date;
  palmSunday: Date;
  pentecostSunday: Date;
  adventStart: Date;
  yearEnd: Date;
  yearStart: Date;
}

/**
 * LiturgicalYearCalculator
 *
 * Encapsulates all computations for movable feasts and key liturgical anchor dates.
 * The methods here return Date objects in local timezone. This class is intentionally
 * stateful (constructed with a year) to group the calculations for that year.
 */
class LiturgicalYearCalculator {
  constructor(private year: number) {}

  /**
   * Calculate the canonical key dates of the liturgical year.
   * These are used later to partition seasons, insert tempora blocks, etc.
   */
  calculateKeyDates(): KeyDates {
    const christmas = new Date(this.year, 11, 25);
    const epiphany = new Date(this.year, 0, 6);
    const easterSunday = this.calculateEaster();
    // Ash Wednesday is 46 days before Easter Sunday (40 days of Lent + 6 Sundays).
    const ashWednesday = subDays(easterSunday, 46);
    // Septuagesima about 17 days before Ash Wednesday in the traditional calendar.
    const septuagesima = subDays(ashWednesday, 17);
    const passionSunday = subDays(easterSunday, 14);
    const palmSunday = subDays(easterSunday, 7);
    const pentecostSunday = addDays(easterSunday, 49);
    const adventStart = this.calculateAdventStart();
    const yearEnd = new Date(this.year, 11, 31);
    const yearStart = new Date(this.year, 0, 1);

    return {
      christmas,
      epiphany,
      easterSunday,
      ashWednesday,
      septuagesima,
      passionSunday,
      palmSunday,
      pentecostSunday,
      adventStart,
      yearEnd,
      yearStart,
    };
  }

  /**
   * calculateEaster
   *
   * Implements the "Anonymous Gregorian algorithm" (Gauss-like) to compute Easter Sunday.
   * Returns a Date for the Sunday of Easter in this.year.
   *
   * Note: This is a purely algorithmic computation independent of date-fns.
   * It returns the local Date for year, month-1, day.
   */
  private calculateEaster(): Date {
    const year = this.year;
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

    return new Date(year, month - 1, day);
  }

  /**
   * calculateAdventStart
   *
   * The first Sunday of Advent is determined relative to 25 December.
   * This function uses a fixed lookup table mapping the weekday of Christmas
   * to the calendar date of the first Advent Sunday.
   *
   * NOTE: This preserves the original mapping from your code; changing it
   * should be done only when sure of the liturgical rules desired.
   */
  private calculateAdventStart(): Date {
    const christmasDay = new Date(this.year, 11, 25);
    const weekday = christmasDay.getDay(); // 0 = Sunday ... 6 = Saturday

    // map index (weekday of 25 Dec) -> candidate first-advent date
    const adventDates = [
      new Date(this.year, 10, 27), // if 25 Dec is Sunday
      new Date(this.year, 11, 3),
      new Date(this.year, 11, 2),
      new Date(this.year, 11, 1),
      new Date(this.year, 10, 30),
      new Date(this.year, 10, 29),
      new Date(this.year, 10, 28),
    ];

    return adventDates[weekday];
  }

  /**
   * holyFamily
   * Return the Sunday after Epiphany (6 January) — this is commonly used for
   * the "Holy Family" observance in many calendars.
   */
  holyFamily(): Date {
    return nextSunday(new Date(this.year, 0, 6));
  }

  /**
   * sundayBefore24AfterPentecost
   *
   * Given adventStart, returns the Sunday immediately before the 24th Sunday after Pentecost,
   * which for your original logic was computed by previousSunday(adventStart).
   */
  sundayBefore24AfterPentecost(adventStart: Date): Date {
    return previousSunday(adventStart);
  }

  /**
   * saturdayBefore24AfterPentecost
   *
   * Convenience wrapper returning the Saturday preceding the Sunday returned above.
   */
  saturdayBefore24AfterPentecost(adventStart: Date): Date {
    return previousSaturday(this.sundayBefore24AfterPentecost(adventStart));
  }

  /**
   * emberWednesdaySeptember
   *
   * Finds the Ember Wednesday in September by:
   *  - finding the Sunday between 15 and 21 September (inclusive),
   *  - then returning the next Wednesday after that Sunday.
   *
   * This reproduces the Ember day selection logic from the original code.
   */
  emberWednesdaySeptember(): Date {
    let date = new Date(this.year, 8, 15);
    // advance until first Sunday in the window (or break if month advances unexpectedly)
    while (!isSunday(date) || date.getDate() > 21) {
      date = addDays(date, 1);
      if (date.getMonth() > 8) break;
    }
    return nextWednesday(date);
  }

  /**
   * holyName
   *
   * Determines the date used for the "Holy Name" observance.
   * The original code has special rules:
   *  - scan from Jan 1 to Jan 7; if a Sunday is found and its date is 1, 6 or 7,
   *    return Jan 2; otherwise return that Sunday; if no Sunday in 1..7, return Jan 2.
   *
   * The function preserves that behaviour and documents it explicitly.
   */
  holyName(): Date {
    let date = new Date(this.year, 0, 1);

    while (date.getDate() <= 7) {
      if (isSunday(date)) {
        const day = date.getDate();
        // if the Sunday is one of these special days, canonical rule: use Jan 2 instead
        return day === 1 || day === 6 || day === 7
          ? new Date(this.year, 0, 2)
          : date;
      }
      date = addDays(date, 1);
    }

    // fallback: Jan 2
    return new Date(this.year, 0, 2);
  }

  /**
   * christKing
   *
   * Returns the Sunday before 1 November (the traditional position of Christ the King).
   */
  christKing(): Date {
    return previousSunday(new Date(this.year, 10, 1));
  }

  /**
   * sundayInChristmasOctave
   *
   * Returns a Sunday that falls within the Octave of Christmas (26..31 Dec), if any.
   * If none of those days is a Sunday, returns null.
   */
  sundayInChristmasOctave(): Date | null {
    for (let day = 26; day <= 31; day++) {
      const date = new Date(this.year, 11, day);
      if (isSunday(date)) return date;
    }
    return null;
  }
}

/**
 * SeasonManager
 *
 * Responsible for computing season boundaries and answering "which season is this date in".
 * The season map is computed once from KeyDates and then used repeatedly.
 */
class SeasonManager {
  private boundaries: Map<LiturgicalSeason, [Date, Date]>;

  constructor(private keyDates: KeyDates) {
    this.boundaries = this.calculateBoundaries();
  }

  /**
   * calculateBoundaries
   *
   * Returns a map of season -> [startDate, endDate] inclusive.
   * Each entry is computed from the KeyDates. The mapping mirrors the original logic.
   */
  private calculateBoundaries(): Map<LiturgicalSeason, [Date, Date]> {
    const {
      christmas,
      epiphany,
      easterSunday,
      ashWednesday,
      septuagesima,
      passionSunday,
      palmSunday,
      pentecostSunday,
      adventStart,
      yearEnd,
      yearStart,
    } = this.keyDates;

    const boundaries = new Map<LiturgicalSeason, [Date, Date]>();

    boundaries.set(LiturgicalSeason.ADVENT, [
      adventStart,
      subDays(christmas, 1),
    ]);
    boundaries.set(LiturgicalSeason.CHRISTMAS, [christmas, yearEnd]);
    boundaries.set(LiturgicalSeason.EPIPHANY, [
      epiphany,
      subDays(septuagesima, 1),
    ]);
    boundaries.set(LiturgicalSeason.SEPTUAGESIMA, [
      septuagesima,
      subDays(ashWednesday, 1),
    ]);
    boundaries.set(LiturgicalSeason.LENT, [
      ashWednesday,
      subDays(passionSunday, 1),
    ]);
    boundaries.set(LiturgicalSeason.PASSIONTIDE, [
      passionSunday,
      subDays(palmSunday, 1),
    ]);
    boundaries.set(LiturgicalSeason.HOLY_WEEK, [
      palmSunday,
      subDays(easterSunday, 1),
    ]);
    boundaries.set(LiturgicalSeason.EASTER, [
      easterSunday,
      subDays(pentecostSunday, 1),
    ]);
    boundaries.set(LiturgicalSeason.PENTECOST, [
      pentecostSunday,
      subDays(adventStart, 1),
    ]);

    return boundaries;
  }

  /**
   * getSeasonForDate
   *
   * Returns the LiturgicalSeason for a given Date.
   * Special handling:
   *  - 25 Dec .. 31 Dec => CHRISTMAS
   *  - 1 Jan .. 5 Jan   => CHRISTMAS
   * Otherwise, check each boundary computed earlier.
   *
   * If no season matches (should not normally happen), returns PENTECOST as a graceful fallback.
   */
  getSeasonForDate(date: Date): LiturgicalSeason {
    const month = date.getMonth();
    const dayOfMonth = date.getDate();

    // special-case Christmas octave spanning the year boundary
    if (month === 11 && dayOfMonth >= 25 && dayOfMonth <= 31) {
      return LiturgicalSeason.CHRISTMAS;
    }

    if (month === 0 && dayOfMonth <= 5) {
      return LiturgicalSeason.CHRISTMAS;
    }

    for (const [season, [start, end]] of this.boundaries.entries()) {
      if (date >= start && date <= end) {
        return season;
      }
    }

    // fallback if something unexpected occurs
    return LiturgicalSeason.PENTECOST;
  }
}

/**
 * MassInserter
 *
 * Inserts groups of Mass observances into the calendar container.
 * - container: Map<string (yyyy-MM-dd), Day>
 * - calculator: LiturgicalYearCalculator for date helpers
 * - keyDates: previously computed KeyDates
 *
 * The insertBlock method supports:
 *  - block: array of Mass or id strings,
 *  - reverse: if true, indexes run backwards from the start date,
 *  - overwrite: whether existing masses should be overwritten,
 *  - stopDate: stops insertion if the insertion would cross the stopDate boundary.
 */
class MassInserter {
  constructor(
    private container: Map<string, Day>,
    private calculator: LiturgicalYearCalculator,
    private keyDates: KeyDates,
  ) {}

  /**
   * insertTemporaDays
   *
   * Insert the main "tempora" blocks and other fixed observances used by the app.
   * This function preserves the same insertion sequence as your original code.
   */
  insertTemporaDays(): void {
    this.insertBlock(
      this.calculator.holyFamily(),
      massManager.getByTypeId("post-epiphany"),
    );
    this.insertBlock(
      this.keyDates.septuagesima,
      massManager.getByTypeId("pre-lent-to-pentcost"),
    );
    this.insertBlock(
      this.calculator.saturdayBefore24AfterPentecost(this.keyDates.adventStart),
      massManager.getByTypeId("pentepi"),
      true,
      false,
      this.keyDates.adventStart,
    );
    this.insertBlock(
      this.calculator.sundayBefore24AfterPentecost(this.keyDates.adventStart),
      massManager.getByTypeId("week-24-after-pentcost"),
    );
    this.insertBlock(
      this.keyDates.adventStart,
      massManager.getByTypeId("advent"),
      false,
      false,
      new Date(this.keyDates.adventStart.getFullYear(), 11, 23),
    );

    const w = this.calculator.emberWednesdaySeptember();
    this.insertBlock(w, ["TEMPORA_PENT_3"]);
    this.insertBlock(addDays(w, 2), ["TEMPORA_PENT_5"]);
    this.insertBlock(addDays(w, 3), ["TEMPORA_PENT_6"]);

    this.insertBlock(this.calculator.holyName(), ["TEMPORA_NAT2_0"]);
    this.insertBlock(this.calculator.christKing(), ["SANCTI_10_DUR"]);

    const christmasOctaveSunday = this.calculator.sundayInChristmasOctave();
    if (christmasOctaveSunday) {
      this.insertBlock(christmasOctaveSunday, ["TEMPORA_NAT1_0"]);
    }
  }

  /**
   * insertSanctiDays
   *
   * Iterate every day in the container and append the sancti (saint feast) masses
   * that match that month/day. Each retrieved sancti mass is cloned with the date.
   */
  insertSanctiDays(): void {
    for (const [date, day] of this.container) {
      const dateObj = parseLocalDate(date);
      const m = dateObj.getMonth();
      const d = dateObj.getDate();

      const masses = massManager
        .getSanctiByMonthDay(m + 1, d)
        .map((mass) => massManager.createMassWithDate(mass, date));

      day.mass.push(...masses);
    }
  }

  /**
   * insertBlock
   *
   * Core insertion routine used by insertTemporaDays.
   *
   * - Resolves string ids to Mass objects via massManager.getById
   * - Optionally inserts in reverse order
   * - Honors `overwrite` (if false and day already has masses, insertion stops)
   * - Honors `stopDate`: if the insertion would reach stopDate - 1, it stops
   *
   * Note: The original code used `ii` for index; renamed to `index` for clarity.
   */
  private insertBlock(
    date: Date,
    block: (Mass | string)[],
    reverse = false,
    overwrite = true,
    stopDate?: Date,
  ): void {
    const resolvedBlock: Mass[] = block
      .map((entry) =>
        typeof entry === "string" ? massManager.getById(entry) : entry,
      )
      .filter((m): m is Mass => Boolean(m));

    const processBlock = reverse
      ? resolvedBlock.slice().reverse()
      : resolvedBlock;

    for (const [index, observance] of processBlock.entries()) {
      if (!observance) continue;

      // compute the date offset depending on reverse flag
      const currentDate = addDays(new Date(date), reverse ? -index : index);
      const dateKey = yyyyMMDD(currentDate);
      const day = this.container.get(dateKey);

      if (!day) continue;

      // If the target day already has masses and overwrite is false, stop inserting further entries.
      if (day.mass.length && !overwrite) break;

      // If stopDate is set and the insertion would cross the day immediately after stopDate, break.
      if (stopDate && isSameDay(stopDate, subDays(currentDate, 1))) break;

      day.mass.push(massManager.createMassWithDate(observance, dateKey));
    }
  }
}

export interface RuleResult {
  observances?: Mass[];
  toShift?: {
    date?: string;
    observances: Mass[];
  };
}

interface ConcurrencyRule {
  applies(observances: Mass[], date: string, calendar: Calendar): boolean;
  resolve(observances: Mass[], date: string, calendar: Calendar): RuleResult;
}

/**
 * NativityMultipleMassesRule
 *
 * Special handling for multiple nativity-class masses falling on the same day.
 * If several class 1 sancti match the nativity pattern, return them all.
 */
class NativityMultipleMassesRule implements ConcurrencyRule {
  applies(observances: Mass[]): boolean {
    return Boolean(
      massManager.match(
        observances,
        massManager
          .getSanctiClass1()
          .filter((i) => i.id.startsWith("SANCTI_12_25")),
      ),
    );
  }

  resolve(): RuleResult {
    const nativityMasses = massManager
      .getSanctiClass1()
      .filter((i) => i.month === 12 && i.day === 25);
    return { observances: nativityMasses };
  }
}

/**
 * SevenSorrowsRule
 *
 * If the Seven Sorrows observance is present, it generally takes precedence,
 * but if a sancti feast is also present, keep both in a specific order.
 */
class SevenSorrowsRule implements ConcurrencyRule {
  applies(observances: Mass[]): boolean {
    return Boolean(
      massManager.match(observances, massManager.getById("TEMPORA_QUAD5_5")),
    );
  }

  resolve(observances: Mass[]): RuleResult {
    const sevenSorrow = massManager.getById("SANCTI_09_15");
    const sancti = massManager.match(observances, massManager.getSancti());

    if (sancti) {
      return { observances: [sevenSorrow, sancti] };
    }

    return { observances: [sevenSorrow] };
  }
}

/**
 * AllSoulsRule
 *
 * Handles All Souls day behavior. If it falls on a Sunday, the tempora (Sunday observance)
 * may need to be included; otherwise return the All Souls commemorations found.
 */
class AllSoulsRule implements ConcurrencyRule {
  applies(observances: Mass[]): boolean {
    return Boolean(
      massManager.match(observances, massManager.getById("SANCTI_11_02")),
    );
  }

  resolve(observances: Mass[], date: string): RuleResult {
    const allSouls = observances
      .filter((ld) => ld.id.startsWith("SANCTI_11_02"))
      .reverse();

    if (isSunday(parseLocalDate(date))) {
      const sunday = massManager.match(
        observances,
        massManager.getTemporaSunday(),
      );

      if (sunday) {
        return {
          observances: [sunday],
          toShift: {
            date: yyyyMMDD(addDays(parseLocalDate(date), 1)),
            observances: allSouls,
          },
        };
      }
    }
    return { observances: allSouls };
  }
}

/**
 * NativityVigilRule
 *
 * If the Nativity Vigil (24 Dec) falls on a Sunday, it should be used alone.
 */
class NativityVigilRule implements ConcurrencyRule {
  applies(observances: Mass[], date: string): boolean {
    const nativityVigil = massManager.match(
      observances,
      massManager.getById("SANCTI_12_24"),
    );
    return Boolean(nativityVigil && isSunday(parseLocalDate(date)));
  }

  resolve(observances: Mass[]): RuleResult {
    const nativityVigil = massManager.match(
      observances,
      massManager.getById("SANCTI_12_24"),
    );
    return { observances: [nativityVigil!] };
  }
}

/**
 * NativityOctaveFeriaRule
 *
 * If the octave day (1 Jan) is present and it's a Sunday, prefer the octave day's observance.
 */
class NativityOctaveFeriaRule implements ConcurrencyRule {
  applies(observances: Mass[], date: string): boolean {
    const nativity = massManager.match(
      observances,
      massManager.getById("SANCTI_01_01"),
    );
    return Boolean(nativity && isSunday(parseLocalDate(date)));
  }

  resolve(observances: Mass[]): RuleResult {
    const nativity = massManager.match(
      observances,
      massManager.getById("SANCTI_01_01"),
    );
    return { observances: [nativity!] };
  }
}

/**
 * StMatthiasRule
 *
 * Handles St. Matthias on leap years and shifting logic if it conflicts with tempora.
 */
class StMatthiasRule implements ConcurrencyRule {
  applies(observances: Mass[], date: string): boolean {
    const parsed = parseLocalDate(date);
    return Boolean(
      massManager.match(observances, massManager.getById("SANCTI_02_24")) &&
        isLeapYear(parsed) &&
        parsed.getDate() === 24,
    );
  }

  resolve(observances: Mass[], date: string): RuleResult {
    const temp = massManager.match(observances, massManager.getTempora());

    if (temp) {
      // If tempora present, keep tempora and shift St. Matthias to the next day.
      return {
        observances: [temp],
        toShift: {
          observances: [massManager.getById("SANCTI_02_24")],
          date: yyyyMMDD(addDays(parseLocalDate(date), 1)),
        },
      };
    }

    return { observances };
  }
}

/**
 * Feb27Rule
 *
 * If St. Gregory or similar observance on Feb 27 appears in a leap year,
 * shift it to Feb 28 (next day).
 */
class Feb27Rule implements ConcurrencyRule {
  applies(observances: Mass[], date: string): boolean {
    const parsed = parseLocalDate(date);
    return Boolean(
      massManager.match(observances, massManager.getById("SANCTI_02_27")) &&
        parsed.getDate() === 27 &&
        isLeapYear(parsed),
    );
  }

  resolve(observances: Mass[], date: string): RuleResult {
    const shiftedDate = yyyyMMDD(addDays(parseLocalDate(date), 1));
    return {
      observances: observances.filter((mass) => mass.id !== "SANCTI_02_27"),
      toShift: {
        observances: [massManager.getById("SANCTI_02_27")],
        date: shiftedDate,
      },
    };
  }
}

/**
 * BmvSaturdayRule
 *
 * Special Saturday handling for the Blessed Virgin (BMV): when the day is a Saturday
 * and no high-rank observance is present (or only rank 4), compute an appropriate
 * proper office from the period and prefer that, preserving local (santos) elements.
 */
class BmvSaturdayRule implements ConcurrencyRule {
  applies(observances: Mass[], date: string): boolean {
    if (!isSaturday(parseLocalDate(date))) return false;

    // collect the set of ranks present. If none, or only rank 4, this rule applies.
    const ranks = new Set(observances.map((i) => i.rank));
    return ranks.size === 0 || (ranks.size === 1 && ranks.has(4));
  }

  resolve(observances: Mass[], date: string, calendar: Calendar): RuleResult {
    const bmvOffice = this.calculateProperForPeriod(
      observances,
      date,
      calendar,
    );

    if (bmvOffice) {
      // create the proper office mass with the same date and append local sancti (flexibility === 'santos')
      return {
        observances: [
          massManager.createMassWithDate(bmvOffice, date),
          ...observances.filter((i) => i.flexibility === "santos"),
        ],
      };
    }

    return { observances };
  }

  /**
   * calculateProperForPeriod
   *
   * Determines which "COMMUNE_C_10*" Mass to use based on the current period (Advent, Christmas, Easter, etc.).
   * Uses `calendar.findDay` to locate specific holy-week markers when needed.
   */
  private calculateProperForPeriod(
    observances: Mass[],
    date: string,
    calendar: Calendar,
  ): Mass | undefined {
    const parsed = parseLocalDate(date);
    const tempora = observances.filter((i) => i.flexibility === "tempora");

    // If we're in Advent tempora -> use COMMUNE_C_10A
    if (
      tempora &&
      massManager.match(tempora, massManager.getByTypeId("advent"))
    ) {
      return massManager.getById("COMMUNE_C_10A");
    }

    // If date is after Christmas or before 2 Jan -> COMMUNE_C_10B (Christmas proper)
    if (
      isAfter(parsed, new Date(parsed.getFullYear(), 11, 25)) ||
      isBefore(parsed, new Date(parsed.getFullYear(), 1, 2))
    ) {
      return massManager.getById("COMMUNE_C_10B");
    }

    // if before Wednesday in Holy Week -> COMMUNE_C_10C
    const wednesdayInHolyWeek = calendar.findDay(
      massManager.getById("TEMPORA_QUAD6_3")?.id,
    );

    if (
      isAfter(parsed, new Date(parsed.getFullYear(), 1, 2)) &&
      wednesdayInHolyWeek &&
      isBefore(parsed, parseLocalDate(wednesdayInHolyWeek[0]))
    ) {
      return massManager.getById("COMMUNE_C_10C");
    }

    // If Easter tempora -> COMMUNE_C_10PASC
    if (tempora && massManager.match(tempora, massManager.getEaster())) {
      return massManager.getById("COMMUNE_C_10PASC");
    }

    // default proper for general time (temporalia)
    return massManager.getById("COMMUNE_C_10T");
  }
}

/**
 * AdventEmberDayRule
 *
 * Handles situations where an Advent or Ember observance falls on a weekday (not Sunday).
 * Prefers sancti if present, otherwise returns the advent/ember observance depending on rank.
 */
class AdventEmberDayRule implements ConcurrencyRule {
  applies(observances: Mass[], date: string): boolean {
    const advOrEmber = massManager.match(
      observances,
      massManager.getEmberDays().concat(massManager.getAdvent()),
    );
    // Only apply if it's not Sunday.
    return Boolean(!isSunday(parseLocalDate(date)) && advOrEmber);
  }

  resolve(observances: Mass[]): RuleResult {
    const advOrEmber = massManager.match(
      observances,
      massManager.getEmberDays().concat(massManager.getAdvent()),
    );
    const sancti = massManager.match(observances, massManager.getSancti());

    if (!sancti) {
      return { observances: [advOrEmber!] };
    }

    // If equal rank, return sancti then advOrEmber
    if (advOrEmber!.rank === sancti.rank) {
      return { observances: [sancti, advOrEmber!] };
    }

    // If advOrEmber has higher precedence (lower rank number), return it first.
    if (advOrEmber!.rank < sancti.rank) {
      return { observances: [advOrEmber!, sancti] };
    }

    return { observances };
  }
}

/**
 * FirstClassConflictRule
 *
 * When multiple first-class feasts occur on the same day, keep one and shift the other(s)
 * forward until a free date is found (first date without rank 1 or rank 2).
 */
class FirstClassConflictRule implements ConcurrencyRule {
  applies(observances: Mass[], date: string): boolean {
    const parsed = parseLocalDate(date);
    const sancti = massManager.match(observances, massManager.getSancti());
    const tempora = massManager.match(observances, massManager.getTempora());

    // Special-case: if 8 Dec is a Sunday with a particular tempora, do not apply this rule.
    if (
      sancti &&
      tempora &&
      parsed.getDate() === 8 &&
      parsed.getMonth() === 11 &&
      isSunday(parsed)
    ) {
      return false;
    }

    const firstClassFeasts = observances.filter((ld) => ld.rank === 1);
    return firstClassFeasts.length > 1;
  }

  resolve(observances: Mass[], date: string, calendar: Calendar): RuleResult {
    const firstClassFeasts = observances.filter((ld) => ld.rank === 1);
    // choose first celebration to keep and shift the second
    const [celebration, shiftDay] = firstClassFeasts;
    const targetDate = this.findNextAvailableDate(date, calendar);

    return {
      observances: [celebration],
      toShift: { observances: [shiftDay], date: targetDate },
    };
  }

  /**
   * findNextAvailableDate
   *
   * Walk forward day-by-day inside the same year until a date without rank 1 or 2 is found.
   * Returns the date as yyyy-MM-dd string. If the loop reaches next year, behavior is to return that date.
   */
  private findNextAvailableDate(date: string, calendar: Calendar): string {
    let targetDate = parseLocalDate(date);
    while (targetDate.getFullYear() === parseLocalDate(date).getFullYear()) {
      targetDate = addDays(targetDate, 1);
      const allRanks = new Set(
        calendar.get(yyyyMMDD(targetDate))?.all.map((ld) => ld.rank),
      );
      if (!allRanks.has(1) && !allRanks.has(2)) {
        return yyyyMMDD(targetDate);
      }
    }
    return yyyyMMDD(targetDate);
  }
}

/**
 * SecondClassConflictRule
 *
 * If a second-class feast conflicts with any first-class feast(s), shift the second-class feast forward.
 */
class SecondClassConflictRule implements ConcurrencyRule {
  applies(observances: Mass[]): boolean {
    const firstClassFeasts = observances.filter((ld) => ld.rank === 1);
    const secondClassFeasts = massManager.match(
      observances,
      massManager.getSanctiClass2(),
    );
    // apply only if there are first-class feasts and a second-class feast
    return Boolean(firstClassFeasts.length && secondClassFeasts?.rank === 2);
  }

  resolve(observances: Mass[], date: string, calendar: Calendar): RuleResult {
    const firstClassFeasts = observances.filter((ld) => ld.rank === 1);
    const secondClassFeasts = massManager.match(
      observances,
      massManager.getSanctiClass2(),
    );
    const targetDate = this.findNextAvailableDate(date, calendar);

    return {
      observances: firstClassFeasts,
      toShift: {
        observances: [secondClassFeasts!],
        date: targetDate,
      },
    };
  }

  private findNextAvailableDate(date: string, calendar: Calendar): string {
    let targetDate = parseLocalDate(date);
    while (targetDate.getFullYear() === parseLocalDate(date).getFullYear()) {
      targetDate = addDays(targetDate, 1);
      const allRanks = new Set(
        calendar.get(yyyyMMDD(targetDate))?.all.map((ld) => ld.rank),
      );
      if (!allRanks.has(1)) {
        return yyyyMMDD(targetDate);
      }
    }
    return yyyyMMDD(targetDate);
  }
}

/**
 * GeneralRankRule
 *
 * Default rule that sorts observances by (rank, flexibility).
 * This is the final fallback to deterministic ordering.
 */
class GeneralRankRule implements ConcurrencyRule {
  applies(observances: Mass[]): boolean {
    return observances.length >= 1;
  }

  resolve(observances: Mass[]): RuleResult {
    if (observances.length === 1) {
      return { observances };
    }

    const sorted = [...observances].sort(
      (a, b) => a.rank - b.rank || a.flexibility.localeCompare(b.flexibility),
    );
    return { observances: sorted };
  }
}

/**
 * ConcurrencyResolver
 *
 * Holds the list of concurrency rules (in the required precedence order).
 * The first rule that `applies` will be used to `resolve`.
 */
class ConcurrencyResolver {
  private rules: ConcurrencyRule[];

  constructor() {
    this.rules = [
      new NativityMultipleMassesRule(),
      new AllSoulsRule(),
      new NativityVigilRule(),
      new NativityOctaveFeriaRule(),
      new StMatthiasRule(),
      new Feb27Rule(),
      new SevenSorrowsRule(),
      new AdventEmberDayRule(),
      new FirstClassConflictRule(),
      new SecondClassConflictRule(),
      new BmvSaturdayRule(),
      new GeneralRankRule(),
    ];
  }

  resolve(
    observances: Mass[],
    date: string,
    calendar: Calendar,
  ): RuleResult | undefined {
    for (const rule of this.rules) {
      if (rule.applies(observances, date, calendar)) {
        const result = rule.resolve(observances, date, calendar);
        if (result) {
          return result;
        }
      }
    }
    return { observances };
  }
}

/**
 * Calendar
 *
 * Main class that builds the year-long in-memory liturgical calendar:
 *  - builds an empty container (one Day per date)
 *  - inserts tempora and sancti masses
 *  - resolves concurrency rules and shifts
 *  - computes seasons for each day
 *
 * Public interface is unchanged from your original version.
 */
export class Calendar {
  private container: Map<string, Day>;
  private keyDates: KeyDates;
  private calculator: LiturgicalYearCalculator;
  private seasonManager: SeasonManager;
  private concurrencyResolver: ConcurrencyResolver;

  constructor(public year: number) {
    this.container = new Map();
    this.calculator = new LiturgicalYearCalculator(year);
    this.keyDates = this.calculator.calculateKeyDates();
    this.seasonManager = new SeasonManager(this.keyDates);
    this.concurrencyResolver = new ConcurrencyResolver();
    this.build();
  }

  /** build: orchestrates the calendar creation steps in a predictable order. */
  private build(): void {
    this.buildEmptyCalendar();
    this.fillInMasses();
    this.resolveConcurrency();
    this.applySeasons();
  }

  /**
   * buildEmptyCalendar
   * Create a Map entry for every day of the year keyed by yyyy-MM-dd strings.
   */
  private buildEmptyCalendar(): void {
    for (
      let date = new Date(this.year, 0, 1);
      date.getFullYear() === this.year;
      date = addDays(date, 1)
    ) {
      const dateString = yyyyMMDD(date);
      this.container.set(dateString, new Day(dateString));
    }
  }

  /** fillInMasses: delegates insertion of tempora and sancti masses to MassInserter. */
  private fillInMasses(): void {
    const inserter = new MassInserter(
      this.container,
      this.calculator,
      this.keyDates,
    );
    inserter.insertTemporaDays();
    inserter.insertSanctiDays();
  }

  /** applySeasons: compute the liturgical season for every day already in the container. */
  private applySeasons(): void {
    for (const [dateString, day] of this.container) {
      const date = parseLocalDate(dateString);
      day.season = this.seasonManager.getSeasonForDate(date);
    }
  }

  /**
   * resolveConcurrency
   *
   * For every day:
   *  - apply concurrency rules (may return observances and toShift)
   *  - handle special logic for multiple tempora (choose best by rank/week)
   *  - convert empty days to a "Feria" derived from an appropriate previous day
   *  - apply shifts returned by rules (toShift)
   *  - replace the day's mass with deduplicated results
   */
  private resolveConcurrency(): void {
    for (const [date, day] of this.container) {
      const result = this.applyRulesToDay(day.mass, date);

      if (result?.observances) {
        const temporaObservances = result.observances.filter(
          (obs) => obs.flexibility === "tempora",
        );

        // If multiple tempora present, choose the best one (lowest rank, then earliest week).
        if (temporaObservances.length > 1) {
          const bestTempora = temporaObservances.sort(
            (a, b) =>
              a.rank - b.rank || (a.week && b.week ? a.week - b.week : 0),
          )[0];

          result.observances = [
            ...result.observances.filter(
              (obs) => obs.flexibility !== "tempora",
            ),
            bestTempora,
          ];
        }
      }

      // If no valid observance id remains, treat the day as empty and try to create a feria.
      if (!result.observances?.some((obs) => obs.id)) {
        this.handleEmptyDay(date);
        continue;
      }

      // If the rule requested shifting observances to another date, apply that.
      if (result?.toShift?.date) {
        this.handleShiftedDay(result.toShift);
      }

      if (result?.observances?.length) {
        day.mass = this.removeDuplicates(result.observances);
      }
    }
  }

  /**
   * applyRulesToDay
   *
   * Wraps the concurrencyResolver and normalizes the returned result.
   * If the resolver returns a `toShift` list, we remove those shifted observances
   * from the current day's returned observances (so they don't duplicate).
   */
  private applyRulesToDay(observances: Mass[], date: string): RuleResult {
    const result = this.concurrencyResolver.resolve(observances, date, this);

    if (!result) {
      return { observances };
    }

    if (result.toShift?.observances.length) {
      const currentObservances = observances.filter(
        (obs) =>
          !result.toShift!.observances.some((shifted) => shifted.id === obs.id),
      );

      return {
        observances: result.observances || currentObservances,
        toShift: result.toShift,
      };
    }

    return result;
  }

  /**
   * handleEmptyDay
   *
   * When a day ends up with no observances, find the previous appropriate day to copy
   * a Mass from and mark it as a "Feria". The search walks backwards until either:
   *  - a Sunday is found, or
   *  - Jan 6 is reached (special rule), or
   *  - Jan 1 (start of year) is reached.
   *
   * This preserves the original application's behaviour for empty weekdays.
   */
  private handleEmptyDay(date: string): void {
    let currentDate = parseLocalDate(date);
    const { yearStart } = this.keyDates;

    // Walk backwards until a Sunday or Jan 6 is found, but stop if we reach yearStart.
    while (
      !isSunday(currentDate) &&
      !(currentDate.getMonth() === 0 && currentDate.getDate() === 6)
    ) {
      if (isSameDay(currentDate, yearStart)) break;
      currentDate = subDays(currentDate, 1);
    }

    const previousDay = this.get(yyyyMMDD(currentDate));
    if (previousDay?.mass[0]) {
      // clone the previous day's top mass and rename "name" to "Feria" for the current date
      this.updateDay(date, [
        massManager.createMassWithDate(
          { ...previousDay.mass[0], name: "Feria" },
          date,
        ),
      ]);
    }
  }

  /**
   * handleShiftedDay
   *
   * Apply a `toShift` instruction: merge the shifted observances into the target day,
   * deduplicate and store them back into the container.
   *
   * Note: the `toShift.date` may refer to a key that doesn't yet exist in the map;
   * we create a new Day in that case.
   */
  private handleShiftedDay(toShift: {
    date?: string;
    observances: Mass[];
  }): void {
    const shiftedDay =
      this.container.get(toShift.date ?? "") || new Day(toShift.date ?? "");
    shiftedDay.mass = this.removeDuplicates([
      ...shiftedDay.mass,
      ...toShift.observances,
    ]);
    this.container.set(toShift.date ?? "", shiftedDay);
  }

  /**
   * removeDuplicates
   *
   * Sorts masses by rank and then filters duplicates by id, preferring local masses.
   * Sorting ensures deterministic order; deduplication ensures only one mass per id remains.
   */
  private removeDuplicates(masses: Mass[]): Mass[] {
    masses.sort((a, b) => {
      if (a.rank === b.rank) {
        // prefer local masses (-1 means local first)
        return a.local ? 1 : b.local ? -1 : 0;
      }
      return a.rank - b.rank;
    });

    const seen = new Set<string>();
    return masses.filter((mass) => {
      if (seen.has(mass.id)) return false;
      seen.add(mass.id);
      return true;
    });
  }

  /* -------------------- public API -------------------- */

  private getSeasonName(date: string): LiturgicalSeason | undefined {
    const day = this.get(date);
    return day?.season;
  }

  public get(date: string): Day | undefined {
    return this.container.get(date);
  }

  /**
   * findDay
   *
   * Returns the first [date, Day] pair where the observanceId is present.
   * If observanceId is falsy, returns undefined immediately.
   */
  public findDay(observanceId?: string): [string, Day] | undefined {
    if (!observanceId) return;

    for (const [date, day] of this.container) {
      if (day.all.some((obs) => obs.id === observanceId)) {
        return [date, day];
      }
    }
    return undefined;
  }

  public getAllDays(): Day[] {
    return Array.from(this.container.values());
  }

  private updateDay(date: string, masses: Mass[]): void {
    const day = this.get(date);
    if (day) {
      day.mass = masses;
    }
  }
}
