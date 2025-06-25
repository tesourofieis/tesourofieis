import {
  addDays,
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
import { parseLocalDate, yyyyMMDD } from "./utils";

export enum LiturgicalSeason {
  ADVENT = "Advento",
  CHRISTMAS = "Natal",
  CHRISTMAS_EARLY = "Natal",
  EPIPHANY = "Epifania",
  SEPTUAGESIMA = "Septuagésima",
  LENT = "Quaresma",
  PASSIONTIDE = "Paixão",
  HOLY_WEEK = "Semana Santa",
  EASTER = "Páscoa",
  PENTECOST = "Pentecostes",
}

export class Day {
  mass: Mass[] = [];
  season: LiturgicalSeason = "" as LiturgicalSeason;

  constructor(public date: string) {}

  get all() {
    return this.mass;
  }

  getTemporaName() {
    return this.mass[0]?.name;
  }

  get getSeason(): LiturgicalSeason {
    return this.season;
  }

  set setSeason(value: LiturgicalSeason) {
    this.season = value;
  }
}

export class Calendar {
  private container: Map<string, Day>;
  private _seasonBoundaries: Map<LiturgicalSeason, [Date, Date]>;

  constructor(public year: number) {
    this.container = new Map();
    this._seasonBoundaries = new Map();
    this.buildEmptyCalendar();
    this.create();
  }

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

  private create() {
    this.fillInTemporaDays();
    this.fillInSanctiDays();
    this.resolveConcurrency();
    this.calculateSeasonBoundaries();
    this.applySeasons();
  }

  private calculateSeasonBoundaries() {
    const christmas = new Date(this.year, 11, 25);
    const epiphany = new Date(this.year, 0, 6);
    const easterSunday = this.calcEasterSunday();
    const ashWednesday = subDays(easterSunday, 46); // Ash Wednesday is 46 days before Easter
    const septuagesima = subDays(ashWednesday, 17); // Septuagesima is 17 days before Ash Wednesday
    const passionSunday = subDays(easterSunday, 14); // Passion Sunday (5th Sunday of Lent)
    const palmSunday = subDays(easterSunday, 7); // Palm Sunday starts Holy Week
    const pentecostSunday = addDays(easterSunday, 49);
    const adventStart = this.calcFirstAdventSunday();
    const yearEnd = new Date(this.year, 11, 31);
    const yearStart = new Date(this.year, 0, 1);
    const _christmasOctave = new Date(this.year + 1, 0, 1); // January 1st of next year
    const _epiphanyNextYear = new Date(this.year + 1, 0, 6); // January 6th of next year

    // Advent: First Sunday of Advent until Christmas Eve
    this._seasonBoundaries.set(LiturgicalSeason.ADVENT, [
      adventStart,
      subDays(christmas, 1),
    ]);

    // Christmas: December 25 until January 5th (before Epiphany)
    this._seasonBoundaries.set(LiturgicalSeason.CHRISTMAS, [
      christmas,
      yearEnd,
    ]);

    // Christmas continues into next year until Epiphany
    this._seasonBoundaries.set(LiturgicalSeason.CHRISTMAS_EARLY, [
      yearStart,
      subDays(epiphany, 1), // January 5th
    ]);

    // Epiphany: January 6th until Septuagesima
    this._seasonBoundaries.set(LiturgicalSeason.EPIPHANY, [
      epiphany,
      subDays(septuagesima, 1),
    ]);

    // Septuagesima: 17 days before Ash Wednesday until Ash Wednesday
    this._seasonBoundaries.set(LiturgicalSeason.SEPTUAGESIMA, [
      septuagesima,
      subDays(ashWednesday, 1),
    ]);

    // Lent: Ash Wednesday until Passion Sunday
    this._seasonBoundaries.set(LiturgicalSeason.LENT, [
      ashWednesday,
      subDays(passionSunday, 1),
    ]);

    // Passiontide: Passion Sunday until Palm Sunday
    this._seasonBoundaries.set(LiturgicalSeason.PASSIONTIDE, [
      passionSunday,
      subDays(palmSunday, 1),
    ]);

    // Holy Week: Palm Sunday until Easter
    this._seasonBoundaries.set(LiturgicalSeason.HOLY_WEEK, [
      palmSunday,
      subDays(easterSunday, 1),
    ]);

    // Easter: Easter Sunday until Pentecost
    this._seasonBoundaries.set(LiturgicalSeason.EASTER, [
      easterSunday,
      subDays(pentecostSunday, 1),
    ]);

    // Pentecost: Day after Pentecost until First Sunday of Advent
    this._seasonBoundaries.set(LiturgicalSeason.PENTECOST, [
      pentecostSunday,
      subDays(adventStart, 1),
    ]);
  }

  private applySeasons() {
    for (const [dateString, day] of this.container) {
      const date = parseLocalDate(dateString);

      for (const [season, [start, end]] of this._seasonBoundaries.entries()) {
        if (date >= start && date <= end) {
          if (season === LiturgicalSeason.CHRISTMAS_EARLY) {
            day.season = LiturgicalSeason.CHRISTMAS;
          } else {
            day.season = season;
          }
          break;
        }
      }

      const month = date.getMonth();
      const dayOfMonth = date.getDate();

      if (month === 11 && dayOfMonth >= 25 && dayOfMonth <= 31) {
        day.season = LiturgicalSeason.CHRISTMAS;
      }
    }
  }

  public getSeasonName(date: string) {
    const day = this.getDay(date);
    return day?.season;
  }

  private fillInTemporaDays() {
    this.insertBlock(
      this.calcHolyFamily(),
      massManager.getByTypeId("post-epiphany"),
    );
    this.insertBlock(
      this.calcSeptuagesima(),
      massManager.getByTypeId("pre-lent-to-pentcost"),
    );
    this.insertBlock(
      this.calcSaturdayBefore24SundayAfterPentecost(),
      massManager.getByTypeId("pentepi"),
      true,
      false,
      this.calcFirstAdventSunday(),
    );
    this.insertBlock(
      this.calc24SundayAfterPentecost(),
      massManager.getByTypeId("week-24-after-pentcost"),
    );
    this.insertBlock(
      this.calcFirstAdventSunday(),
      massManager.getByTypeId("advent"),
      false,
      false,
      new Date(this.year, 11, 23),
    );
    this.insertBlock(
      this.calcEmberWednesdaySeptember(),
      massManager.getByTypeId("ember-september"),
    );

    this.insertSingleDay(this.calcHolyName(), "TEMPORA_NAT2_0");
    this.insertSingleDay(this.calcChristKing(), "SANCTI_10_DUR");

    const christmasOctaveSunday = this.calcSundayChristmasOctave();
    if (christmasOctaveSunday) {
      const mass = massManager.getById("TEMPORA_NAT1_0");
      if (mass) {
        this.insertBlock(christmasOctaveSunday, [mass]);
      }
    }
  }

  private insertSingleDay(date: Date, massId: string) {
    const day = this.container.get(yyyyMMDD(date));
    if (day) {
      const mass = massManager.getById(massId);
      if (mass) {
        day.mass.push(massManager.createMassWithDate(mass, yyyyMMDD(date)));
      }
    }
  }

  private insertBlock(
    date: Date,
    block: Mass[],
    reverse = false,
    overwrite = true,
    stopDate?: Date,
  ) {
    const processBlock = reverse ? block.slice().reverse() : block;

    for (const [ii, observance] of processBlock.entries()) {
      if (!observance) continue;

      const currentDate = addDays(new Date(date), reverse ? -ii : ii);
      const dateKey = yyyyMMDD(currentDate);
      const day = this.container.get(dateKey);

      if (!day) continue;
      if (day.mass.length && !overwrite) break;
      if (stopDate && isSameDay(stopDate, subDays(currentDate, 1))) break;

      day.mass.push(massManager.createMassWithDate(observance, dateKey));
    }
  }

  private fillInSanctiDays() {
    for (const [date, day] of this.container) {
      const dateObj = parseLocalDate(date);
      const m = dateObj.getMonth();
      const d = dateObj.getDate();

      const masses = massManager
        .getByFlexibility("santos")
        .filter((mass) => mass.month === m + 1 && mass.day === d)
        .map((mass) => massManager.createMassWithDate(mass, date));

      day.mass.push(...masses);
    }
  }

  private resolveConcurrency() {
    for (const [date, day] of this.container) {
      const rules = new Rules(day.mass, date, this);
      const result = this.applyRules(rules);

      if (result?.observances) {
        const temporaObservances = result.observances.filter(
          (obs) => obs.flexibility === "tempora",
        );

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

      if (!result.observances?.some((obs) => obs.id)) {
        this.handleEmptyDay(date);
      }

      if (result?.toShift?.date) {
        this.handleShiftedDay(result.toShift);
      }

      if (result?.observances?.length) {
        day.mass = this.removeDuplicates(result.observances);
      }
    }
  }

  private handleEmptyDay(date: string) {
    let currentDate = parseLocalDate(date);
    const yearStart = new Date(this.year, 0, 1);

    while (
      !isSunday(currentDate) &&
      !(currentDate.getMonth() === 0 && currentDate.getDate() === 6)
    ) {
      if (isSameDay(currentDate, yearStart)) break;
      currentDate = subDays(currentDate, 1);
    }

    const previousDay = this.getDay(yyyyMMDD(currentDate));
    if (previousDay?.mass[0]) {
      this.updateDay(date, [
        massManager.createMassWithDate(
          { ...previousDay.mass[0], name: "Feria" },
          date,
        ),
      ]);
    }
  }

  private handleShiftedDay(toShift: { date?: string; observances: Mass[] }) {
    const shiftedDay =
      this.container.get(toShift.date ?? "") || new Day(toShift.date ?? "");
    shiftedDay.mass = this.removeDuplicates([
      ...shiftedDay.mass,
      ...toShift.observances,
    ]);
    this.container.set(toShift.date ?? "", shiftedDay);
  }

  private applyRules(rules: Rules): RuleResult {
    const result = rules.applyRules();

    if (!result) {
      return { observances: rules.observances };
    }

    if (result.toShift?.observances.length) {
      const currentObservances = rules.observances.filter(
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

  private calcEasterSunday(): Date {
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

  private calcHolyFamily(): Date {
    return nextSunday(new Date(this.year, 0, 6));
  }

  private calcSeptuagesima(): Date {
    return subDays(this.calcEasterSunday(), 63);
  }

  private calcFirstAdventSunday(): Date {
    const christmasDay = new Date(this.year, 11, 25);
    const weekday = christmasDay.getDay();

    const adventDates = [
      new Date(this.year, 10, 27), // Sunday
      new Date(this.year, 11, 3), // Monday
      new Date(this.year, 11, 2), // Tuesday
      new Date(this.year, 11, 1), // Wednesday
      new Date(this.year, 10, 30), // Thursday
      new Date(this.year, 10, 29), // Friday
      new Date(this.year, 10, 28), // Saturday
    ];

    return adventDates[weekday];
  }

  private calc24SundayAfterPentecost(): Date {
    return previousSunday(this.calcFirstAdventSunday());
  }

  private calcSaturdayBefore24SundayAfterPentecost(): Date {
    return previousSaturday(this.calc24SundayAfterPentecost());
  }

  private calcEmberWednesdaySeptember(): Date {
    let date = new Date(this.year, 8, 15);
    while (!isSunday(date) || date.getDate() > 21) {
      date = addDays(date, 1);
      if (date.getMonth() > 8) break;
    }
    return nextWednesday(date);
  }

  private calcHolyName(): Date {
    let date = new Date(this.year, 0, 1);

    while (date.getDate() <= 7) {
      if (isSunday(date)) {
        const day = date.getDate();
        return day === 1 || day === 6 || day === 7
          ? new Date(this.year, 0, 2)
          : date;
      }
      date = addDays(date, 1);
    }

    return new Date(this.year, 0, 2);
  }

  private calcChristKing(): Date {
    return previousSunday(new Date(this.year, 10, 1));
  }

  private calcSundayChristmasOctave(): Date | null {
    for (let day = 26; day <= 31; day++) {
      const date = new Date(this.year, 11, day);
      if (isSunday(date)) return date;
    }
    return null;
  }

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

  public getDay(date: string): Day | undefined {
    return this.container.get(date);
  }

  public getDaysInMonth(month: number): Day[] {
    const startDate = new Date(this.year, month - 1, 1);
    const endDate = new Date(this.year, month, 0);
    const days: Day[] = [];

    for (let d = startDate; d <= endDate; d = addDays(d, 1)) {
      const day = this.getDay(yyyyMMDD(d));
      if (day) days.push(day);
    }

    return days;
  }

  public updateDay(date: string, masses: Mass[]): void {
    const day = this.getDay(date);
    if (day) {
      day.mass = masses;
    }
  }
}
