import { UTCDate } from "@date-fns/utc";
import { getDate, getDay, getMonth } from "date-fns";
import {
  COMMUNE_C_10A,
  COMMUNE_C_10B,
  COMMUNE_C_10C,
  COMMUNE_C_10PASC,
  COMMUNE_C_10T,
  LANGUAGE,
  PATTERN_POST_EPIPHANY_SUNDAY,
  TABLE_OF_PRECEDENCE,
  TEMPORA_PENT23_0,
  TEMPORA_RANK_MAP,
  TYPE_TEMPORA,
  getTranslation,
} from "./constants.ts";
import {
  getYear,
  isSameDay,
  isSameYear,
  isSunday,
  previousSunday,
} from "date-fns";
import type { Calendar } from "./calendar.ts";
import {
  CUSTOM_INTER_READING_SECTIONS,
  FERIA,
  GRADUALE,
  GRADUALE_PASCHAL,
  PATTERN_EASTER,
  PATTERN_LENT,
  PATTERN_PRE_LENTEN,
  PREFATIO_COMMUNIS,
  SANCTI_01_01,
  TEMPORA_EPI1_0,
  TEMPORA_EPI1_0A,
  TEMPORA_NAT2_0,
  TEMPORA_PENT01_0,
  TRACTUS,
} from "./constants.ts";
import { getCustomPreface, match, yyyyMMDD } from "./utils.ts";

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
    this.title = getTranslation(LANGUAGE).TITLES[observanceId];

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
      rank: this.rank,
      title: this.title,
      colors: this.colors,
    };
  }
}

export { Day, Observance };
