import { getDate, getMonth } from "date-fns";
import { OBSERVANCES } from "./observances";

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
        getMonth(date) === caseItem.month &&
        getDate(date) === caseItem.day &&
        mass.category === "advento" &&
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

  getAll(): Mass[] {
    return this.masses;
  }

  getByFlexibility(flexibility: Mass["flexibility"]): Mass[] {
    return this.masses.filter((mass) => mass.flexibility === flexibility);
  }

  getByTypeId(type: Mass["type"]): Mass[] {
    return this.masses.filter((mass) => mass.type === type);
  }

  getOutro(): Mass[] {
    return this.masses.filter((mass) => mass.outro);
  }

  getLocal(): Mass[] {
    return this.masses.filter((mass) => mass.local !== undefined);
  }

  getByRank(rank: number): Mass[] {
    return this.masses.filter((mass) => mass.rank === rank);
  }

  getByColor(color: Mass["color"]): Mass[] {
    return this.masses.filter((mass) => mass.color === color);
  }

  getTempora(): Mass[] {
    return this.masses.filter((mass) => mass.flexibility === "tempora");
  }

  getSancti(): Mass[] {
    return this.masses.filter((mass) => mass.flexibility === "santos");
  }

  getAdvent(): Mass[] {
    return this.masses.filter((mass) => mass.category === "advento");
  }

  getAdventSunday(): Mass[] {
    return this.masses.filter(
      (mass) => mass.category === "advento" && mass.weekday === 0,
    );
  }

  getAdventFeria(): Mass[] {
    return this.masses.filter(
      (mass) => mass.category === "advento" && mass.weekday !== 0,
    );
  }

  getLent(): Mass[] {
    return this.masses.filter((mass) => mass.category === "quaresma");
  }

  getEaster(): Mass[] {
    return this.masses.filter(
      (mass) =>
        mass.category === "pascoa" &&
        ((mass.weekday && mass.weekday < 5) || (mass.week && mass.week < 4)),
    );
  }

  getSunday(): Mass[] {
    return this.masses.filter((mass) => mass.weekday === 0);
  }

  getLentSunday(): Mass[] {
    return this.masses.filter(
      (mass) => mass.category === "quaresma" && mass.weekday === 0,
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
        mass.day === (3 || 5 || 6),
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
        mass.day === (3 || 5 || 6),
    );
  }

  getEmberDays() {
    return this.getLentEmberDays()
      .concat(this.getSeptemberEmberDays())
      .concat(this.getAdventEmberDays());
  }

  getTemporaSundayClass2(): Mass[] {
    return this.masses.filter(
      (mass) =>
        (mass.flexibility === "tempora" &&
          mass.weekday === 0 &&
          mass.rank === 2) ||
        mass.id === "TEMPORA_NAT1_0",
    );
  }

  getTemporaClass4(): Mass[] {
    return this.masses.filter(
      (mass) => mass.flexibility === "tempora" && mass.rank === 4,
    );
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

  getSanctiClass3(): Mass[] {
    return this.masses.filter(
      (mass) => mass.category === "santos" && mass.rank === 3,
    );
  }

  getSanctiClass4(): Mass[] {
    return this.masses.filter(
      (mass) => mass.category === "santos" && mass.rank === 4,
    );
  }

  getSanctiClass1Or2(): Mass[] {
    return this.masses.filter(
      (mass) =>
        mass.id.startsWith("santos:") && (mass.rank === 1 || mass.rank === 2),
    );
  }

  getClass1(): Mass[] {
    return this.masses.filter((mass) => mass.rank === 1);
  }

  getClass2(): Mass[] {
    return this.masses.filter((mass) => mass.rank === 2);
  }

  getClass3(): Mass[] {
    return this.masses.filter((mass) => mass.rank === 3);
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
