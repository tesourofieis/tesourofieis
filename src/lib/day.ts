import { getDate, getDay, getMonth } from "date-fns";
import {
  COMMUNE_C_10A,
  COMMUNE_C_10B,
  COMMUNE_C_10C,
  COMMUNE_C_10PASC,
  COMMUNE_C_10T,
  PATTERN_ADVENT,
  PATTERN_EASTER,
  PATTERN_EPIPHANY,
  PATTERN_LENT,
  PATTERN_POST_EPIPHANY_SUNDAY,
  PATTERN_PRE_LENTEN,
  TABLE_OF_PRECEDENCE,
  TEMPORA_RANK_MAP,
  TITLES,
  TYPE_TEMPORA,
} from "./constants.ts";

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

  private getTempora(name: string): string {
    if (this.flexibility === "tempora") {
      if (name.includes("nat")) {
        return "natal";
      }
      if (name.includes("adv")) {
        return "advento";
      }
      if (name.includes("pasc")) {
        return "pascoa";
      }
      if (name.includes("epi")) {
        return "epifania";
      }
      if (name.includes("quadp")) {
        return "pre-quaresma";
      }
      if (name.includes("quad")) {
        return "quaresma";
      }
      if (name.includes("pent")) {
        return "pentecostes";
      }
    }

    if (this.flexibility === "santos") {
      console.log(`Matched Santos: ${name}`);
      return "santos";
    }

    if (this.flexibility === "commune") {
      return "comum";
    }

    if (this.flexibility === "votivas") {
      return "votivas";
    }

    console.log(`Checking name: ${name}, flexibility: ${this.flexibility}`);
    throw Error(`No directory for ${name}, flexibility , ${this.flexibility}`);
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
