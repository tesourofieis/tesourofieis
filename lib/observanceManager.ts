import { OBSERVANCES } from "./observances";

export interface Mass {
  flexibility: "santos" | "commune" | "tempora" | "votivas";
  id: string;
  date?: string;
  name: string;
  rank: number;
  color: "w" | "r" | "v" | "b" | "g" | "vw";
  link: string;
  outro?: boolean; // to be used by flexibility santos (only set when true)
  weekday?: number; // to be used by flexibility tempora
  calendar?: "pre-55" | "62";
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
  private byFlexibility: Map<Mass["flexibility"], Mass[]>;
  private byType: Map<Mass["type"], Mass[]>;
  private santosByMonthDay: Map<string, Mass[]>; // key: "m-d"

  private easterMasses: Mass[];
  private temporaSundayMasses: Mass[];
  private lentEmberDays: Mass[];
  private septemberEmberDays: Mass[];
  private adventEmberDays: Mass[];
  private emberDays: Mass[];
  private sanctiClass1: Mass[];
  private sanctiClass2: Mass[];
  private criteriaIdSetCache: WeakMap<(Mass | undefined)[], Set<string>>;

  constructor() {
    this.masses = Object.values(OBSERVANCES);
    this.byFlexibility = new Map();
    this.byType = new Map();
    this.santosByMonthDay = new Map();

    this.easterMasses = [];
    this.temporaSundayMasses = [];
    this.lentEmberDays = [];
    this.septemberEmberDays = [];
    this.adventEmberDays = [];
    this.emberDays = [];
    this.sanctiClass1 = [];
    this.sanctiClass2 = [];
    this.criteriaIdSetCache = new WeakMap();

    for (const mass of this.masses) {
      // index by flexibility
      const flexList = this.byFlexibility.get(mass.flexibility) || [];
      flexList.push(mass);
      this.byFlexibility.set(mass.flexibility, flexList);

      // index by type
      const typeList = this.byType.get(mass.type) || [];
      typeList.push(mass);
      this.byType.set(mass.type, typeList);

      // index santos by month-day
      if (mass.flexibility === "santos" && mass.month && mass.day) {
        const key = `${mass.month}-${mass.day}`;
        const list = this.santosByMonthDay.get(key) || [];
        list.push(mass);
        this.santosByMonthDay.set(key, list);
      }

      if (
        mass.category === "pascoa" &&
        ((mass.weekday !== undefined && mass.weekday < 5) ||
          (mass.week !== undefined && mass.week < 4))
      ) {
        this.easterMasses.push(mass);
      }

      if (mass.flexibility === "tempora" && mass.weekday === 0) {
        this.temporaSundayMasses.push(mass);
      }

      if (
        mass.category === "quaresma" &&
        mass.week === 1 &&
        (mass.day === 3 || mass.day === 5 || mass.day === 6)
      ) {
        this.lentEmberDays.push(mass);
      }

      if (mass.type === "ember-september") {
        this.septemberEmberDays.push(mass);
      }

      if (
        mass.category === "advento" &&
        mass.week === 3 &&
        (mass.day === 3 || mass.day === 5 || mass.day === 6)
      ) {
        this.adventEmberDays.push(mass);
      }

      if (mass.category === "santos" && mass.rank === 1) {
        this.sanctiClass1.push(mass);
      }

      if (mass.category === "santos" && mass.rank === 2) {
        this.sanctiClass2.push(mass);
      }
    }

    this.emberDays = this.lentEmberDays
      .concat(this.septemberEmberDays)
      .concat(this.adventEmberDays);
  }

  createMassWithDate(mass: Mass, date: string): Mass {
    const updatedMass = { ...mass, date, rank: this.calcRank(mass, date) };
    return updatedMass;
  }

  private calcRank(mass: Mass, date: string): number {
    if (mass.type !== "advent" || mass.weekday === 0 || !date) {
      return mass.rank;
    }

    const month = Number.parseInt(date.slice(5, 7), 10) - 1;
    const day = Number.parseInt(date.slice(8, 10), 10);

    return month === 11 && day >= 17 && day <= 23 ? 2 : mass.rank;
  }

  getById(id: string): Mass | undefined {
    return OBSERVANCES[id];
  }

  getByTypeId(type: Mass["type"]): Mass[] {
    return this.byType.get(type) || [];
  }

  getTempora(): Mass[] {
    return this.byFlexibility.get("tempora") || [];
  }

  getSancti(): Mass[] {
    return this.byFlexibility.get("santos") || [];
  }

  getSanctiByMonthDay(month: number, day: number): Mass[] {
    return this.santosByMonthDay.get(`${month}-${day}`) || [];
  }

  getAdvent(): Mass[] {
    return this.byType.get("advent") || [];
  }

  getEaster(): Mass[] {
    return this.easterMasses;
  }

  getTemporaSunday(): Mass[] {
    return this.temporaSundayMasses;
  }

  getLentEmberDays(): Mass[] {
    return this.lentEmberDays;
  }

  getSeptemberEmberDays(): Mass[] {
    return this.septemberEmberDays;
  }

  getAdventEmberDays(): Mass[] {
    return this.adventEmberDays;
  }

  getEmberDays() {
    return this.emberDays;
  }

  getSanctiClass1(): Mass[] {
    return this.sanctiClass1;
  }

  getSanctiClass2(): Mass[] {
    return this.sanctiClass2;
  }

  match(
    observances: Mass[],
    criteria: Mass | undefined | (Mass | undefined)[] | ((mass: Mass) => boolean),
  ): Mass | undefined {
    if (!criteria) {
      return undefined;
    }

    if (typeof criteria === "function") {
      for (const observance of observances) {
        if (criteria(observance)) {
          return observance;
        }
      }
      return undefined;
    }

    if (Array.isArray(criteria)) {
      let criteriaIds = this.criteriaIdSetCache.get(criteria);

      if (!criteriaIds) {
        criteriaIds = new Set(
          criteria.map((criterion) => criterion?.id).filter((id): id is string => Boolean(id)),
        );
        this.criteriaIdSetCache.set(criteria, criteriaIds);
      }

      for (const observance of observances) {
        if (criteriaIds.has(observance.id)) {
          return observance;
        }
      }

      return undefined;
    }

    for (const observance of observances) {
      if (observance.id === criteria.id) {
        return observance;
      }
    }

    return undefined;
  }
}

export const massManager = new MassManager();
