import { UTCDate } from "@date-fns/utc";
import {
  getDate,
  getDay,
  getMonth,
  getYear,
  isSameDay,
  isSameYear,
  isSunday,
  previousSunday,
} from "date-fns";
import type { Calendar } from "./calendar.ts";
import {
  COMMUNE_C_10A,
  COMMUNE_C_10B,
  COMMUNE_C_10C,
  COMMUNE_C_10PASC,
  COMMUNE_C_10T,
  PATTERN_ADVENT,
  PATTERN_EASTER,
  PATTERN_LENT,
  PATTERN_POST_EPIPHANY_SUNDAY,
  PATTERN_PRE_LENTEN,
  SANCTI_01_01,
  TABLE_OF_PRECEDENCE,
  TEMPORA_EPI1_0,
  TEMPORA_EPI1_0A,
  TEMPORA_NAT2_0,
  TEMPORA_PENT01_0,
  TEMPORA_RANK_MAP,
  TITLES,
  TYPE_TEMPORA,
} from "./constants.ts";
import { yyyyMMDD } from "./utils.ts";

// """ Class used to keep `Observance` objects for particular days of Missal.
//
// It contains three lists: `tempora`, `celebration` and `commemoration`.
// On Missal's creation the lists are filled in so that `tempora` always contains `Observance` representing
// given variable day, `celebration` contains an `Observance`s to be celebrated in this day and
// `commemoration` contains zero or more `Observance`s that should be commemorated with the main celebration.
// """
class Day {
  date: string;
  tempora: Observance[] = [];
  celebration: Observance[] = [];
  commemoration: Observance[] = [];

  constructor(date: string) {
    this.date = date;
  }

  get all(): Observance[] {
    return this.tempora.concat(this.celebration).concat(this.commemoration);
  }

  getTemporaName() {
    return this.tempora[0]?.title;
  }

  serialize() {
    const serialized = {};
    const containers = ["tempora", "celebration", "commemoration"];

    for (const container of containers) {
      serialized[container] = this[container].map((item: Day) =>
        item.serialize(),
      );
    }

    return serialized;
  }
}

class Observance {
  date: string;
  flexibility: string;
  name: string;
  rank: number;
  colors: string[];
  id: string;
  link: string;
  title: string;
  priority: number | null;
  weekday: number | null;

  // """ Build an Observance out of identifier and calendar date
  //
  // :param observance_id: observance's identifier in format
  //                <flexibility>:<identifier>:<rank>
  // :type observance_id: string
  // :param date_: specific date in which the observance is supposed
  //             to be placed. For some Sancti days its rank (class)
  //             depends on which calendar day they occur.
  // :type date_: `date ` object
  // """
  constructor(observanceId: string, date_: string) {
    const [flexibility, name, rank, color] = observanceId.split(":");
    this.date = date_;
    this.flexibility = flexibility;
    this.name = name;
    this.rank = this.calcRank(observanceId, Number.parseInt(rank, 10));
    this.colors = Array.from(color);
    this.id = `${this.flexibility}:${this.name}:${this.rank}:${color}`;
    this.link = `missal/${this.getTempora(this.name)}/${this.name}`;
    this.title = TITLES[observanceId];

    // Determine the weekday attribute based on the type of observance
    if (
      flexibility === TYPE_TEMPORA &&
      ![
        COMMUNE_C_10A,
        COMMUNE_C_10B,
        COMMUNE_C_10C,
        COMMUNE_C_10PASC,
        COMMUNE_C_10T,
      ].includes(observanceId)
    ) {
      if (name.replace(/^.*-(\d+).*$/, "$1") === "10-Dur") {
        this.weekday = 0;
      }
      this.weekday = Number.parseInt(name.replace(/^.*-(\d+).*$/, "$1"), 10);
    } else {
      this.weekday = getDay(this.date);
    }

    this.priority = this.calcPriority();
  }

  private getTempora(name: string) {
    if (PATTERN_ADVENT.test(name)) return "advento";
    if (PATTERN_LENT.test(name)) return "quaresma";
    if (PATTERN_EASTER.test(name)) return "pascoa";
    if (PATTERN_POST_EPIPHANY_SUNDAY.test(name)) return "epifania";
    if (PATTERN_PRE_LENTEN.test(name)) return "pre-quaresma";
    if (this.flexibility === "santos") return "santos";

    if (name.includes("Pent")) return "pentecostes";
  }

  private inferObservance(calendar: Calendar) {
    let date = new UTCDate(this.date);

    // No proper for this day, get one from the latest Sunday
    if (!isSunday(date)) {
      if (isSameYear(date, this.date)) {
        date = previousSunday(date);
      }
    }

    // No proper for this day, get from epiphany
    if (isSameDay(date, new UTCDate(getYear(this.date), 0, 6))) {
      date = new UTCDate(getYear(this.date), 0, 6);
    }

    // if previous sunday is in the previous calendar year
    // grab the proper from the circuncision
    if (!isSameYear(date, this.date)) {
      date = new UTCDate(getYear(this.date), 0, 1);
    }

    const day = calendar.get(yyyyMMDD(date));

    if (day?.celebration.length) {
      // Handling exceptions
      if (day?.celebration[0].id === TEMPORA_EPI1_0) {
        // "Feast of the Holy Family" replaces "First Sunday after Epiphany"; use the latter in
        // following days without the own proper
        return new Observance(TEMPORA_EPI1_0A, yyyyMMDD(date));
      }

      if (day?.celebration[0].id === TEMPORA_PENT01_0) {
        // "Trinity Sunday" replaces "1st Sunday after Pentecost"; use the latter in
        // following days without the own proper
        return new Observance(TEMPORA_PENT01_0, yyyyMMDD(date));
      }

      if (day?.celebration[0].id === TEMPORA_NAT2_0) {
        // When the last Sunday is the feast of Holy Name, use proper from Octave of the Nativity
        return new Observance(SANCTI_01_01, yyyyMMDD(date));
      }
      return day?.celebration[0];
    }

    if (day.tempora?.length) {
      return day.tempora[0];
    }

    return day?.celebration[0];
  }

  private calcRank(observanceId: string, originalRank: number): number {
    for (const caseItem of TEMPORA_RANK_MAP) {
      if (
        getMonth(this.date) === caseItem.month &&
        getDate(this.date) === caseItem.day &&
        new RegExp(caseItem.pattern).test(observanceId)
      ) {
        return caseItem.rank;
      }
    }
    return originalRank;
  }

  private calcPriority() {
    for (let priority = 0; priority < TABLE_OF_PRECEDENCE.length; priority++) {
      if (this.id.match(TABLE_OF_PRECEDENCE[priority])) {
        return priority;
      }
    }
  }

  serialize() {
    return {
      id: this.id,
      link: this.link,
      rank: this.rank,
      title: this.title,
      colors: this.colors,
    };
  }
}

export { Day, Observance };
