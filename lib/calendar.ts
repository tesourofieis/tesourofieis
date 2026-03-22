import {
  addDays,
  isAfter,
  isBefore,
  isLeapYear,
  isSameDay,
  isSaturday,
  isSunday,
  nextSunday,
  nextWednesday,
  previousSaturday,
  previousSunday,
  subDays,
} from "date-fns";
import { type Mass, massManager } from "./observanceManager";
import { parseLocalDate, shiftLocalDate, yyyyMMDD } from "./utils";

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
 */
export class Day {
  mass: Mass[] = [];
  alternatives: Mass[] = []; // outro, local, calendar:62 masses - don't participate in concurrency
  season: LiturgicalSeason = "" as LiturgicalSeason;

  constructor(public date: string) {}

  get all() {
    return [...this.mass, ...this.alternatives];
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

// ======================================
// === CORE LOGIC START ===
// ======================================

/**
 * LiturgicalYearCalculator
 */
class LiturgicalYearCalculator {
  constructor(private year: number) {}

  calculateKeyDates(): KeyDates {
    const christmas = new Date(this.year, 11, 25);
    const epiphany = new Date(this.year, 0, 6);
    const easterSunday = this.calculateEaster();
    const ashWednesday = subDays(easterSunday, 46);
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

  private calculateAdventStart(): Date {
    const christmasDay = new Date(this.year, 11, 25);
    const weekday = christmasDay.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;

    const adventDates = [
      new Date(this.year, 10, 27),
      new Date(this.year, 11, 3),
      new Date(this.year, 11, 2),
      new Date(this.year, 11, 1),
      new Date(this.year, 10, 30),
      new Date(this.year, 10, 29),
      new Date(this.year, 10, 28),
    ];

    return adventDates[weekday]!;
  }

  holyFamily(): Date {
    return nextSunday(new Date(this.year, 0, 6));
  }

  sundayBefore24AfterPentecost(adventStart: Date): Date {
    return previousSunday(adventStart);
  }

  saturdayBefore24AfterPentecost(adventStart: Date): Date {
    return previousSaturday(this.sundayBefore24AfterPentecost(adventStart));
  }

  emberWednesdaySeptember(): Date {
    let date = new Date(this.year, 8, 15);
    while (!isSunday(date) || date.getDate() > 21) {
      date = addDays(date, 1);
      if (date.getMonth() > 8) break;
    }
    return nextWednesday(date);
  }

  holyName(): Date {
    let date = new Date(this.year, 0, 1);

    while (date.getDate() <= 7) {
      if (isSunday(date)) {
        const day = date.getDate();
        return day === 1 || day === 6 || day === 7 ? new Date(this.year, 0, 2) : date;
      }
      date = addDays(date, 1);
    }
    return new Date(this.year, 0, 2);
  }

  christKing(): Date {
    return previousSunday(new Date(this.year, 10, 1));
  }

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
 */
class SeasonManager {
  private boundaries: Map<LiturgicalSeason, [Date, Date]>;

  constructor(private keyDates: KeyDates) {
    this.boundaries = this.calculateBoundaries();
  }

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
    } = this.keyDates;

    const boundaries = new Map<LiturgicalSeason, [Date, Date]>();

    boundaries.set(LiturgicalSeason.ADVENT, [adventStart, subDays(christmas, 1)]);
    boundaries.set(LiturgicalSeason.CHRISTMAS, [christmas, yearEnd]);
    boundaries.set(LiturgicalSeason.EPIPHANY, [epiphany, subDays(septuagesima, 1)]);
    boundaries.set(LiturgicalSeason.SEPTUAGESIMA, [septuagesima, subDays(ashWednesday, 1)]);
    boundaries.set(LiturgicalSeason.LENT, [ashWednesday, subDays(passionSunday, 1)]);
    boundaries.set(LiturgicalSeason.PASSIONTIDE, [passionSunday, subDays(palmSunday, 1)]);
    boundaries.set(LiturgicalSeason.HOLY_WEEK, [palmSunday, subDays(easterSunday, 1)]);
    boundaries.set(LiturgicalSeason.EASTER, [easterSunday, subDays(pentecostSunday, 1)]);
    boundaries.set(LiturgicalSeason.PENTECOST, [pentecostSunday, subDays(adventStart, 1)]);

    return boundaries;
  }

  getSeasonForDate(date: Date): LiturgicalSeason {
    const month = date.getMonth();
    const dayOfMonth = date.getDate();

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

    return LiturgicalSeason.PENTECOST;
  }
}

/**
 * MassInserter
 */
class MassInserter {
  constructor(
    private container: Map<string, Day>,
    private calculator: LiturgicalYearCalculator,
    private keyDates: KeyDates,
  ) {}

  insertTemporaDays(): void {
    this.insertBlock(this.calculator.holyFamily(), massManager.getByTypeId("post-epiphany"));
    this.insertBlock(this.keyDates.septuagesima, massManager.getByTypeId("pre-lent-to-pentcost"));
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

  insertSanctiDays(): void {
    for (const [date, day] of this.container) {
      const month = Number.parseInt(date.slice(5, 7), 10);
      const dayOfMonth = Number.parseInt(date.slice(8, 10), 10);

      const allMasses = massManager
        .getSanctiByMonthDay(month, dayOfMonth)
        .map((mass) => massManager.createMassWithDate(mass, date));

      // Separate special masses (outro, local, calendar:62) from regular masses
      // Special masses don't participate in concurrency resolution - they're just appended
      for (const mass of allMasses) {
        if (mass.outro || mass.local || mass.calendar) {
          day.alternatives.push(mass);
        } else {
          day.mass.push(mass);
        }
      }
    }
  }

  private insertBlock(
    date: Date,
    block: (Mass | string)[],
    reverse = false,
    overwrite = true,
    stopDate?: Date,
  ): void {
    const resolvedBlock: Mass[] = block
      .map((entry) => (typeof entry === "string" ? massManager.getById(entry) : entry))
      .filter((m): m is Mass => Boolean(m));

    // Separate special masses (outro, local, calendar:62) from regular masses
    // Special masses don't participate in date sequencing - they're appended to their fixed dates
    const regularMasses: Mass[] = [];
    const specialMasses: Mass[] = [];

    for (const mass of resolvedBlock) {
      if (mass.outro || mass.local || mass.calendar) {
        specialMasses.push(mass);
      } else {
        regularMasses.push(mass);
      }
    }

    // Insert special masses to their proper dates based on weekday
    for (const mass of specialMasses) {
      // Find the date that matches this mass's weekday within the block range
      if (mass.weekday !== undefined && mass.week !== undefined) {
        // Calculate the date for this mass based on its weekday offset from the start
        const daysFromStart = regularMasses.findIndex(
          (m) => m.weekday === mass.weekday && m.week === mass.week,
        );
        if (daysFromStart >= 0) {
          const massDate = addDays(new Date(date), daysFromStart);
          const dateKey = yyyyMMDD(massDate);
          const day = this.container.get(dateKey);
          if (day) {
            day.alternatives.push(massManager.createMassWithDate(mass, dateKey));
          }
        }
      }
    }

    // Process regular masses sequentially
    const currentDate = new Date(date);

    if (reverse) {
      for (let i = regularMasses.length - 1; i >= 0; i--) {
        const observance = regularMasses[i];
        if (!observance) continue;

        const dateKey = yyyyMMDD(currentDate);
        const day = this.container.get(dateKey);

        if (!day) {
          currentDate.setDate(currentDate.getDate() - 1);
          continue;
        }

        if (day.mass.length && !overwrite) break;

        if (stopDate && isSameDay(stopDate, subDays(currentDate, 1))) break;

        day.mass.push(massManager.createMassWithDate(observance, dateKey));
        currentDate.setDate(currentDate.getDate() - 1);
      }
      return;
    }

    for (const observance of regularMasses) {
      if (!observance) continue;

      const dateKey = yyyyMMDD(currentDate);
      const day = this.container.get(dateKey);

      if (!day) {
        currentDate.setDate(currentDate.getDate() + 1);
        continue;
      }

      if (day.mass.length && !overwrite) break;

      if (stopDate && isSameDay(stopDate, subDays(currentDate, 1))) break;

      day.mass.push(massManager.createMassWithDate(observance, dateKey));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
}
// ======================================
// === CORE LOGIC END ===
// ======================================

/**
 * Instruction for moving a mass observance to a new date.
 */
export interface ShiftInstruction {
  date: string; // Target date to move TO (yyyy-MM-dd)
  observances: Mass[]; // The masses to move
  sourceDate?: string; // Where to remove them FROM (if not the current processing day, e.g., for Vigils)
}

/**
 * The structured output of a ConcurrencyRule resolution.
 */
export interface RuleResolution {
  stay: Mass[]; // The list of masses that the rule explicitly kept on the current day (winners)
  shifts: ShiftInstruction[]; // The list of shifts to process
}

export interface ConcurrencyRule {
  applies(observances: Mass[], date: string, calendar: Calendar): boolean;
  resolve(observances: Mass[], date: string, calendar: Calendar): RuleResolution;
}

/**
 * Centralized logic for handling Vigil shifting.
 */
class VigilManager {
  getVigilShift(
    oldFeastDate: string,
    newFeastDate: string,
    calendar: Calendar,
  ): ShiftInstruction | undefined {
    // 1. Look for the Vigil on the day before the OLD feast date
    const prevDateStr = shiftLocalDate(oldFeastDate, -1);
    const prevDay = calendar.get(prevDateStr);

    if (!prevDay) return undefined;

    // Find the Vigil mass
    const vigilMass = prevDay.mass.find((mass) => mass.name.startsWith("Vigília"));

    if (!vigilMass) return undefined;

    // 2. Vigil moves to the day before the NEW feast date
    const targetVigilDate = shiftLocalDate(newFeastDate, -1);
    return {
      date: targetVigilDate,
      observances: [vigilMass],
      sourceDate: prevDateStr, // Source is the day before the old feast date
    };
  }
}
const vigilManager = new VigilManager();

// ======================================
// === BASE CONCURRENCY RULE ===
// ======================================

/**
 * Abstract base class that implements the generic logic for handling "survivors"—
 * masses that were present but were not involved in the shift or conflict.
 * Concrete rules only need to implement 'getResolution'.
 */
abstract class BaseConcurrencyRule implements ConcurrencyRule {
  // Abstract methods the rule must implement
  abstract applies(observances: Mass[], date: string, calendar: Calendar): boolean;
  protected abstract getResolution(
    observances: Mass[],
    date: string,
    calendar: Calendar,
  ): RuleResolution;

  resolve(observances: Mass[], date: string, calendar: Calendar): RuleResolution {
    const resolution = this.getResolution(observances, date, calendar);

    // If no shift is generated, return the original list as the 'stay' list.
    if (resolution.shifts.length === 0) {
      return {
        stay: resolution.stay.length ? resolution.stay : observances,
        shifts: [],
      };
    }

    // 1. Identify ALL masses being shifted (the losers)
    const shiftedIds = new Set(resolution.shifts.flatMap((s) => s.observances.map((o) => o.id)));

    // 2. Filter out masses that were on the day but are now being shifted out (the survivors).
    const survivors = observances.filter((obs) => !shiftedIds.has(obs.id));

    // 3. Combine rule winners (resolution.stay) with the masses that were untouched (survivors).
    const finalStay = this.removeDuplicates([...resolution.stay, ...survivors]);

    return { stay: finalStay, shifts: resolution.shifts };
  }

  protected removeDuplicates(masses: Mass[]): Mass[] {
    const seen = new Set<string>();
    return masses.filter((mass) => {
      if (seen.has(mass.id)) return false;
      seen.add(mass.id);
      return true;
    });
  }
}

// =========================================
// === CONCRETE CONFLICT RULES ===
// =========================================

/**
 * NativityMultipleMassesRule
 * (Kept original logic since it has no shifts and is simple)
 */
class NativityMultipleMassesRule implements ConcurrencyRule {
  private nativityMasses = massManager
    .getSanctiClass1()
    .filter((mass) => mass.month === 12 && mass.day === 25);

  applies(observances: Mass[]): boolean {
    return Boolean(massManager.match(observances, this.nativityMasses));
  }

  resolve(): RuleResolution {
    return { stay: this.nativityMasses, shifts: [] };
  }
}

/**
 * SevenSorrowsRule
 * (Kept original logic)
 */
class SevenSorrowsRule implements ConcurrencyRule {
  private sevenSorrowsTempora = massManager.getById("TEMPORA_QUAD5_5");
  private sevenSorrowsSancti = massManager.getById("SANCTI_09_15");

  applies(observances: Mass[]): boolean {
    return Boolean(massManager.match(observances, this.sevenSorrowsTempora));
  }

  resolve(observances: Mass[]): RuleResolution {
    if (!this.sevenSorrowsSancti) return { stay: observances, shifts: [] };
    const sancti = massManager.match(observances, massManager.getSancti());

    if (sancti) {
      return { stay: [this.sevenSorrowsSancti, sancti], shifts: [] };
    }

    return { stay: [this.sevenSorrowsSancti], shifts: [] };
  }
}

/**
 * AllSoulsRule
 */
class AllSoulsRule extends BaseConcurrencyRule {
  private allSoulsMass = massManager.getById("SANCTI_11_02");

  applies(observances: Mass[]): boolean {
    return Boolean(massManager.match(observances, this.allSoulsMass));
  }

  protected getResolution(observances: Mass[], date: string): RuleResolution {
    const allSouls = observances.filter((ld) => ld.id.startsWith("SANCTI_11_02")).reverse();

    if (isSunday(parseLocalDate(date))) {
      const sunday = massManager.match(observances, massManager.getTemporaSunday());

      if (sunday) {
        return {
          stay: [sunday!],
          shifts: [
            {
              date: shiftLocalDate(date, 1),
              observances: allSouls,
            },
          ],
        };
      }
    }
    return { stay: allSouls, shifts: [] };
  }
}

/**
 * NativityVigilRule
 * (Kept original logic)
 */
class NativityVigilRule implements ConcurrencyRule {
  private nativityVigilMass = massManager.getById("SANCTI_12_24");

  applies(observances: Mass[], date: string): boolean {
    const nativityVigil = massManager.match(observances, this.nativityVigilMass);
    return Boolean(nativityVigil && isSunday(parseLocalDate(date)));
  }

  resolve(observances: Mass[]): RuleResolution {
    const nativityVigil = massManager.match(observances, this.nativityVigilMass);
    if (!nativityVigil) return { stay: observances, shifts: [] };
    return { stay: [nativityVigil], shifts: [] };
  }
}

/**
 * NativityOctaveFeriaRule
 * (Kept original logic)
 */
class NativityOctaveFeriaRule implements ConcurrencyRule {
  private nativityOctaveMass = massManager.getById("SANCTI_01_01");

  applies(observances: Mass[], date: string): boolean {
    const nativity = massManager.match(observances, this.nativityOctaveMass);
    return Boolean(nativity && isSunday(parseLocalDate(date)));
  }

  resolve(observances: Mass[]): RuleResolution {
    const nativity = massManager.match(observances, this.nativityOctaveMass);
    if (!nativity) return { stay: observances, shifts: [] };
    return { stay: [nativity], shifts: [] };
  }
}

/**
 * StMatthiasRule
 */
class StMatthiasRule extends BaseConcurrencyRule {
  private stMatthias = massManager.getById("SANCTI_02_24");

  applies(observances: Mass[], date: string): boolean {
    const parsed = parseLocalDate(date);
    return Boolean(
      massManager.match(observances, this.stMatthias) &&
      isLeapYear(parsed) &&
      parsed.getDate() === 24,
    );
  }

  protected getResolution(observances: Mass[], date: string): RuleResolution {
    const temp = massManager.match(observances, massManager.getTempora());
    const stMatthias = this.stMatthias;
    if (!stMatthias) return { stay: observances, shifts: [] };

    if (temp) {
      return {
        stay: [temp],
        shifts: [
          {
            observances: [stMatthias],
            date: shiftLocalDate(date, 1),
          },
        ],
      };
    }
    return { stay: observances, shifts: [] };
  }
}

/**
 * Feb27Rule
 */
class Feb27Rule extends BaseConcurrencyRule {
  private feb27Mass = massManager.getById("SANCTI_02_27");

  applies(observances: Mass[], date: string): boolean {
    const parsed = parseLocalDate(date);
    return Boolean(
      massManager.match(observances, this.feb27Mass) &&
      parsed.getDate() === 27 &&
      isLeapYear(parsed),
    );
  }

  protected getResolution(observances: Mass[], date: string): RuleResolution {
    const mass = this.feb27Mass;
    if (!mass) return { stay: observances, shifts: [] };
    const shiftedDate = shiftLocalDate(date, 1);
    return {
      stay: [],
      shifts: [
        {
          observances: [mass],
          date: shiftedDate,
        },
      ],
    };
  }
}

/**
 * BmvSaturdayRule
 */
class BmvSaturdayRule implements ConcurrencyRule {
  private holyWeekWednesdayDate: string | null | undefined;

  applies(observances: Mass[], date: string): boolean {
    if (!isSaturday(parseLocalDate(date))) return false;

    const ranks = new Set(observances.map((i) => i.rank));
    return ranks.size === 0 || (ranks.size === 1 && ranks.has(4));
  }

  resolve(observances: Mass[], date: string, calendar: Calendar): RuleResolution {
    const bmvOffice = this.calculateProperForPeriod(observances, date, calendar);

    if (bmvOffice) {
      return {
        stay: [
          massManager.createMassWithDate(bmvOffice, date),
          ...observances.filter((i) => i.flexibility === "santos"),
        ],
        shifts: [],
      };
    }

    return { stay: observances, shifts: [] };
  }

  private calculateProperForPeriod(
    observances: Mass[],
    date: string,
    calendar: Calendar,
  ): Mass | undefined {
    const parsed = parseLocalDate(date);
    const tempora = observances.filter((i) => i.flexibility === "tempora");

    if (tempora && massManager.match(tempora, massManager.getByTypeId("advent"))) {
      return massManager.getById("COMMUNE_C_10A");
    }

    if (
      isAfter(parsed, new Date(parsed.getFullYear(), 11, 25)) ||
      isBefore(parsed, new Date(parsed.getFullYear(), 1, 2))
    ) {
      return massManager.getById("COMMUNE_C_10B");
    }

    const wednesdayInHolyWeek = this.getHolyWeekWednesdayDate(calendar);

    if (
      isAfter(parsed, new Date(parsed.getFullYear(), 1, 2)) &&
      wednesdayInHolyWeek &&
      isBefore(parsed, parseLocalDate(wednesdayInHolyWeek))
    ) {
      return massManager.getById("COMMUNE_C_10C");
    }

    if (tempora && massManager.match(tempora, massManager.getEaster())) {
      return massManager.getById("COMMUNE_C_10PASC");
    }

    return massManager.getById("COMMUNE_C_10T");
  }

  private getHolyWeekWednesdayDate(calendar: Calendar): string | null {
    if (this.holyWeekWednesdayDate !== undefined) {
      return this.holyWeekWednesdayDate;
    }

    this.holyWeekWednesdayDate =
      calendar.findDay(massManager.getById("TEMPORA_QUAD6_3")?.id)?.[0] || null;

    return this.holyWeekWednesdayDate;
  }
}

/**
 * AdventEmberDayRule
 */
class AdventEmberDayRule implements ConcurrencyRule {
  private adventAndEmberDays = massManager.getEmberDays().concat(massManager.getAdvent());

  applies(observances: Mass[], date: string): boolean {
    const advOrEmber = massManager.match(observances, this.adventAndEmberDays);
    return Boolean(!isSunday(parseLocalDate(date)) && advOrEmber);
  }

  resolve(observances: Mass[]): RuleResolution {
    const advOrEmber = massManager.match(observances, this.adventAndEmberDays);
    const sancti = massManager.match(observances, massManager.getSancti());

    if (!sancti) {
      return { stay: [advOrEmber!], shifts: [] };
    }

    const s = sancti as Mass;
    // @ts-ignore
    if (advOrEmber!.rank === s.rank) {
      return { stay: [s, advOrEmber!], shifts: [] };
    }

    // @ts-ignore
    if (advOrEmber!.rank < s.rank) {
      // @ts-ignore
      return { stay: [advOrEmber!, s], shifts: [] };
    }

    return { stay: observances, shifts: [] };
  }
}

/**
 * FirstClassConflictRule
 */
class FirstClassConflictRule extends BaseConcurrencyRule {
  applies(observances: Mass[], date: string): boolean {
    if (observances.length < 2) {
      return false;
    }

    let firstClassCount = 0;
    for (const observance of observances) {
      if (observance.rank === 1) {
        firstClassCount += 1;
        if (firstClassCount > 1) {
          break;
        }
      }
    }

    if (firstClassCount < 2) {
      return false;
    }

    const parsed = parseLocalDate(date);
    const sancti = massManager.match(observances, massManager.getSancti());
    const tempora = massManager.match(observances, massManager.getTempora());

    if (
      sancti &&
      tempora &&
      parsed.getDate() === 8 &&
      parsed.getMonth() === 11 &&
      isSunday(parsed)
    ) {
      return false;
    }

    return true;
  }

  protected getResolution(observances: Mass[], date: string, calendar: Calendar): RuleResolution {
    const firstClassFeasts = observances.filter((ld) => ld.rank === 1);
    if (firstClassFeasts.length < 2) return { stay: firstClassFeasts, shifts: [] };
    const [celebration, shiftDay] = firstClassFeasts as [Mass, Mass];
    const targetDate = this.findNextAvailableDate(date, calendar);

    const shifts: ShiftInstruction[] = [{ observances: [shiftDay], date: targetDate }];

    const vigilShift = vigilManager.getVigilShift(date, targetDate, calendar);
    if (vigilShift) {
      shifts.push(vigilShift);
    }

    return {
      stay: [celebration],
      shifts: shifts,
    };
  }

  private findNextAvailableDate(date: string, calendar: Calendar): string {
    let targetDate = parseLocalDate(date);
    const startYear = targetDate.getFullYear();
    while (targetDate.getFullYear() === startYear) {
      targetDate = addDays(targetDate, 1);
      const targetDateStr = yyyyMMDD(targetDate);
      const targetDay = calendar.get(targetDateStr);

      const isConflicting = targetDay?.all.some((obs) => obs.rank === 1 || obs.rank === 2);

      if (!isConflicting) {
        return targetDateStr;
      }
    }
    return yyyyMMDD(targetDate);
  }
}

/**
 * SecondClassConflictRule
 */
class SecondClassConflictRule extends BaseConcurrencyRule {
  applies(observances: Mass[]): boolean {
    if (observances.length < 2) {
      return false;
    }

    let hasFirstClass = false;
    for (const observance of observances) {
      if (observance.rank === 1) {
        hasFirstClass = true;
        break;
      }
    }

    if (!hasFirstClass) {
      return false;
    }

    const secondClassFeasts = massManager.match(observances, massManager.getSanctiClass2());

    return Boolean(secondClassFeasts?.rank === 2);
  }

  protected getResolution(observances: Mass[], date: string, calendar: Calendar): RuleResolution {
    const firstClassFeasts = observances.filter((ld) => ld.rank === 1);
    const secondClassFeasts = massManager.match(observances, massManager.getSanctiClass2());
    if (!secondClassFeasts) return { stay: observances, shifts: [] };
    const targetDate = this.findNextAvailableDate(date, calendar);

    const shifts: ShiftInstruction[] = [{ observances: [secondClassFeasts], date: targetDate }];

    const vigilShift = vigilManager.getVigilShift(date, targetDate, calendar);
    if (vigilShift) {
      shifts.push(vigilShift);
    }

    return {
      stay: firstClassFeasts,
      shifts: shifts,
    };
  }

  private findNextAvailableDate(date: string, calendar: Calendar): string {
    let targetDate = parseLocalDate(date);
    const startYear = targetDate.getFullYear();
    while (targetDate.getFullYear() === startYear) {
      targetDate = addDays(targetDate, 1);
      const targetDateStr = yyyyMMDD(targetDate);
      const targetDay = calendar.get(targetDateStr);

      const isConflicting = targetDay?.all.some((obs) => obs.rank === 1);

      if (!isConflicting) {
        return targetDateStr;
      }
    }
    return yyyyMMDD(targetDate);
  }
}

/**
 * GeneralRankRule
 */
class GeneralRankRule implements ConcurrencyRule {
  applies(observances: Mass[]): boolean {
    return observances.length >= 1;
  }

  resolve(observances: Mass[]): RuleResolution {
    if (observances.length === 1) {
      return { stay: observances, shifts: [] };
    }

    const sorted = [...observances].sort(
      (a, b) => a.rank - b.rank || a.flexibility.localeCompare(b.flexibility),
    );
    return { stay: sorted, shifts: [] };
  }
}

// ======================================
// === CONCURRENCY RESOLVER ===
// ======================================

/**
 * ConcurrencyResolver
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

  resolve(observances: Mass[], date: string, calendar: Calendar): RuleResolution | undefined {
    for (const rule of this.rules) {
      if (rule.applies(observances, date, calendar)) {
        const result = rule.resolve(observances, date, calendar);
        if (result) {
          return result;
        }
      }
    }
    return undefined; // If no rule applies, we return undefined
  }
}

// ======================================
// === CALENDAR CLASS ===
// ======================================

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

  private build(): void {
    this.buildEmptyCalendar();
    this.fillInMasses();
    this.resolveConcurrency();
  }

  private buildEmptyCalendar(): void {
    const date = new Date(this.year, 0, 1);

    while (date.getFullYear() === this.year) {
      const dateString = yyyyMMDD(date);
      const day = new Day(dateString);
      day.season = this.seasonManager.getSeasonForDate(date);
      this.container.set(dateString, day);
      date.setDate(date.getDate() + 1);
    }
  }

  private fillInMasses(): void {
    const inserter = new MassInserter(this.container, this.calculator, this.keyDates);
    inserter.insertTemporaDays();
    inserter.insertSanctiDays();
  }

  /**
   * resolveConcurrency: Orchestrates conflict resolution and shift processing.
   */
  private resolveConcurrency(): void {
    let fallbackMass: Mass | undefined;

    for (const [date, day] of this.container) {
      const parsedDate = parseLocalDate(date);
      const isAnchorDay =
        isSunday(parsedDate) ||
        (parsedDate.getMonth() === 0 && (parsedDate.getDate() === 1 || parsedDate.getDate() === 6));

      // 1. Get the resolution from the rules (BaseRule ensures 'stay' includes winners + survivors)
      const result = this.concurrencyResolver.resolve(day.mass, date, this);

      // If no rule applied or no conflict was found, result is undefined or only has original mass.
      if (!result) {
        // Fallback to GeneralRankRule if absolutely necessary, but ConcurrencyResolver should handle this.
        if (day.mass.length > 0) {
          day.mass = this.removeDuplicates(day.mass);
        } else if (fallbackMass) {
          this.updateDay(date, [
            massManager.createMassWithDate({ ...fallbackMass, name: "Feria" }, date),
          ]);
        } else {
          this.handleEmptyDay(date);
        }

        if (isAnchorDay) {
          fallbackMass = day.mass[0];
        }

        continue;
      }

      let finalObservances = result.stay;

      // 2. Existing logic for tempora selection
      const temporaObservances = finalObservances.filter((obs) => obs.flexibility === "tempora");

      if (temporaObservances.length > 1) {
        const bestTempora = temporaObservances.sort(
          (a, b) => a.rank - b.rank || (a.week && b.week ? a.week - b.week : 0),
        )[0]!;

        finalObservances = [
          ...finalObservances.filter((obs) => obs.flexibility !== "tempora"),
          bestTempora,
        ];
      }

      // 3. Process Shifts
      if (result.shifts.length) {
        for (const shift of result.shifts) {
          // If the shift is moving a Mass TO the current date (date === shift.date),
          // we merge it into `finalObservances` so it's included in the final assignment.
          if (shift.date === date) {
            finalObservances.push(...shift.observances);
          } else {
            // Otherwise, update the target day in the container
            this.handleShiftedDay(shift);
          }

          // Handle removal from source (e.g., removing Vigil from yesterday)
          if (shift.sourceDate) {
            this.removeFromDay(shift.sourceDate, shift.observances);
          }
        }
      }

      // 4. Final Assignment
      if (finalObservances.length > 0) {
        day.mass = this.removeDuplicates(finalObservances);
      } else if (fallbackMass) {
        this.updateDay(date, [
          massManager.createMassWithDate({ ...fallbackMass, name: "Feria" }, date),
        ]);
      } else {
        this.handleEmptyDay(date);
      }

      if (isAnchorDay) {
        fallbackMass = day.mass[0];
      }
    }
  }

  /**
   * handleEmptyDay: Handles the original logic for filling empty weekdays with Feria.
   */
  private handleEmptyDay(date: string): void {
    let currentDate = parseLocalDate(date);
    const { yearStart } = this.keyDates;

    while (
      !isSunday(currentDate) &&
      !(currentDate.getMonth() === 0 && currentDate.getDate() === 6)
    ) {
      if (isSameDay(currentDate, yearStart)) break;
      currentDate = subDays(currentDate, 1);
    }

    const previousDay = this.get(yyyyMMDD(currentDate));
    if (previousDay?.mass[0]) {
      this.updateDay(date, [
        massManager.createMassWithDate({ ...previousDay.mass[0], name: "Feria" }, date),
      ]);
    }
  }

  /**
   * handleShiftedDay: Applies a ShiftInstruction to a future date.
   */
  private handleShiftedDay(toShift: ShiftInstruction): void {
    const shiftedDay = this.container.get(toShift.date) || new Day(toShift.date);
    shiftedDay.mass = this.removeDuplicates([...shiftedDay.mass, ...toShift.observances]);
    this.container.set(toShift.date, shiftedDay);
  }

  /**
   * removeFromDay: Removes masses from their original day if they were shifted.
   */
  private removeFromDay(date: string, observancesToRemove: Mass[]): void {
    const day = this.container.get(date);
    if (!day) return;

    const idsToRemove = new Set(observancesToRemove.map((m) => m.id));
    day.mass = day.mass.filter((m) => !idsToRemove.has(m.id));
  }

  private removeDuplicates(masses: Mass[]): Mass[] {
    masses.sort((a, b) => {
      if (a.rank === b.rank) {
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

  public get(date: string): Day | undefined {
    return this.container.get(date);
  }

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
