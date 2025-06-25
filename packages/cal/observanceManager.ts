import { OBSERVANCES } from "./observances";
import { parseLocalDate } from "./utils";

export interface Mass {
  flexibility: "santos" | "commune" | "tempora" | "votivas";
  id: string;
  date?: string;
  name: string;
  rank: number;
  color: "w" | "r" | "v" | "b" | "g" | "vw";
  link: string;
  outro: boolean; // to be used by flexibility santos
  weekday?: number; // to be used by flexibility tempora
  type:
    | "feria"
    | "advent"
    | "sancti"
    | "jesus"
    | "post-epiphany"
    | "epiphany"
    | "pre-lent-to-pentcost"
    | "ember-september"
    | "pentepi"
    | "week-24-after-pentcost";
  local?: string; // to be used by flexibility santos
  category:
    | "epifania"
    | "advento"
    | "pre-quaresma"
    | "quaresma"
    | "pascoa"
    | "comum"
    | "natal"
    | "votivas"
    | "santos"
    | "pentecostes";
  week?: number; // to be used by flexibility tempora
  day?: number; // to be used by flexibility santos
  month?: number; // to be used by flexibility santos
  novena?: boolean;
}

export type MassMap = {
  [key: string]: Mass;
};

export class MassManager {
  private masses: Mass[];

  constructor() {
    this.masses = Object.values(OBSERVANCES);
  }

  createMassWithDate(mass: Mass, date: string): Mass {
    const updatedMass = { ...mass, date, rank: this.calcRank(mass, date) };
    return updatedMass;
  }

  private calcRank(mass: Mass, date: string): number {
    for (const caseItem of TEMPORA_RANK_MAP) {
      if (
        date &&
        parseLocalDate(date).getMonth() === caseItem.month &&
        parseLocalDate(date).getDate() === caseItem.day &&
        mass.type === "advent" &&
        mass.weekday !== 0
      ) {
        return caseItem.rank;
      }
    }
    return mass.rank;
  }

  getById(id: string) {
    return OBSERVANCES[id];
  }

  getByFlexibility(flexibility: Mass["flexibility"]): Mass[] {
    return this.masses.filter((mass) => mass.flexibility === flexibility);
  }

  getByTypeId(type: Mass["type"]): Mass[] {
    return this.masses.filter((mass) => mass.type === type);
  }

  getTempora(): Mass[] {
    return this.masses.filter((mass) => mass.flexibility === "tempora");
  }

  getSancti(): Mass[] {
    return this.masses.filter((mass) => mass.flexibility === "santos");
  }

  getAdvent(): Mass[] {
    return this.masses.filter((mass) => mass.type === "advent");
  }

  getEaster(): Mass[] {
    return this.masses.filter(
      (mass) =>
        mass.category === "pascoa" &&
        ((mass.weekday && mass.weekday < 5) || (mass.week && mass.week < 4)),
    );
  }

  getTemporaSunday(): Mass[] {
    return this.masses.filter(
      (mass) => mass.id.startsWith("tempora:") && mass.id.includes("-0"),
    );
  }

  getLentEmberDays(): Mass[] {
    return this.masses.filter(
      (mass) =>
        mass.category === "quaresma" &&
        mass.week === 1 &&
        mass.day &&
        [3, 5, 6].includes(mass.day),
    );
  }

  getSeptemberEmberDays(): Mass[] {
    return this.masses.filter((mass) => mass.type === "ember-september");
  }

  getAdventEmberDays(): Mass[] {
    return this.masses.filter(
      (mass) =>
        mass.category === "advento" &&
        mass.week === 3 &&
        mass.day &&
        [3, 5, 6].includes(mass.day),
    );
  }

  getEmberDays() {
    return this.getLentEmberDays()
      .concat(this.getSeptemberEmberDays())
      .concat(this.getAdventEmberDays());
  }

  getSanctiClass1(): Mass[] {
    return this.masses.filter(
      (mass) => mass.category === "santos" && mass.rank === 1,
    );
  }

  getSanctiClass2(): Mass[] {
    return this.masses.filter(
      (mass) => mass.category === "santos" && mass.rank === 2,
    );
  }

  match(
    observances: Mass[],
    criteria: Mass | Mass[] | ((mass: Mass) => boolean),
  ): Mass | undefined {
    const observanceArray = Array.isArray(observances)
      ? observances
      : [observances];

    const criteriaArray = Array.isArray(criteria) ? criteria : [criteria];

    for (const obs of observanceArray) {
      for (const crit of criteriaArray) {
        if (typeof crit === "function") {
          if (crit(obs)) {
            return obs;
          }
        } else if (crit.id !== undefined && obs.id === crit.id) {
          return obs;
        }
      }
    }
  }
}

export const massManager = new MassManager();

// TEMPORA_RANK_MAP can be used within the class methods if needed
export const TEMPORA_RANK_MAP: {
  pattern: string;
  month: number;
  day: number;
  rank: number;
}[] = [
  { pattern: "PATTERN_ADVENT_FERIA", month: 11, day: 17, rank: 2 },
  { pattern: "PATTERN_ADVENT_FERIA", month: 11, day: 18, rank: 2 },
  { pattern: "PATTERN_ADVENT_FERIA", month: 11, day: 19, rank: 2 },
  { pattern: "PATTERN_ADVENT_FERIA", month: 11, day: 20, rank: 2 },
  { pattern: "PATTERN_ADVENT_FERIA", month: 11, day: 21, rank: 2 },
  { pattern: "PATTERN_ADVENT_FERIA", month: 11, day: 22, rank: 2 },
  { pattern: "PATTERN_ADVENT_FERIA", month: 11, day: 23, rank: 2 },
];
