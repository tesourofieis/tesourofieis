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
  WEEKDAY_MAPPING,
  getTranslation,
} from "./constants.ts";
import { Proper, ProperConfig } from "./proper.ts";
import { ProperParser } from "./properParser.ts";

export class Observance {
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
    this.rank = this.calcRank(observanceId, parseInt(rank, 10));
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
      this.weekday =
        WEEKDAY_MAPPING[parseInt(name.replace(/^.*-(\d+).*$/, "$1"), 10)];
    } else {
      this.weekday = getDay(this.date);
    }

    this.priority = this.calcPriority();
  }

  getProper(config?: ProperConfig) {
    const date = this.date;
    const proper = new ProperParser(this.id, config).parse();
    if (this.id.match(PATTERN_POST_EPIPHANY_SUNDAY) && getMonth(date) >= 9) {
      this.adjustSundayShiftedFromPostEpiphany(proper);
    }
    return proper;
  }

  hasProper(): boolean {
    return new ProperParser(this.id).properExists();
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

  private adjustSundayShiftedFromPostEpiphany(propers: Proper[]): void {
    const properSunday23PostPentecost = new ProperParser(
      TEMPORA_PENT23_0,
    ).parse();
    for (let i = 0; i < propers.length; i++) {
      const proper = propers[i];
      for (const section of [
        "INTROIT",
        "GRADUALE",
        "OFFERTORIUM",
        "COMMUNIO",
      ]) {
        proper.setSection(
          section,
          properSunday23PostPentecost[i][0]?.getSection(section),
        );
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
