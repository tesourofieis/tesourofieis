import {
  addDays,
  getDate,
  getMonth,
  getYear,
  isAfter,
  isBefore,
  isLeapYear,
  isSaturday,
  isSunday,
} from "date-fns";

import type { Calendar } from "./calendar";
import { type Mass, massManager } from "./observanceManager";
import { yyyyMMDD } from "./utils";

type RuleFunction = (
  observances: Mass[],
  date: string,
  calendar: Calendar,
) => RuleResult | undefined;

export interface RuleResult {
  observances?: Mass[];
  toShift?: {
    date?: string;
    observances: Mass[];
  };
}

export class Rules {
  public ruleFunctions: RuleFunction[];

  constructor(
    public observances: Mass[],
    public date: string,
    public calendar: Calendar,
  ) {
    this.ruleFunctions = this.getRuleFunctions();
  }

  private getRuleFunctions(): RuleFunction[] {
    return [
      this.ruleNativityHasMultipleMasses,
      this.ruleAllSouls,
      this.ruleNativityVigil,
      this.ruleNativityOctaveFeria,
      this.ruleStMatthias,
      this.ruleFeb27,
      this.sevenSorrowsOnFridayAfterPassionSunday,
      this.ruleSameClassFeastsTakeOverAdventFeriaAndEmberDays,
      this.ruleShiftConflicting1stClassFeasts,
      this.ruleShiftConflictingSecondClassFeasts,
      this.ruleBmvOfficeOnSaturday,
      this.ruleGeneral,
    ];
  }

  public applyRules(): RuleResult | undefined {
    for (const ruleFunction of this.ruleFunctions) {
      const result = ruleFunction.call(
        this,
        this.observances,
        this.date,
        this.calendar,
      );
      if (result !== undefined) {
        return result;
      }
    }
  }

  // Nativity Vigil takes place of 4th Advent Sunday.
  ruleNativityHasMultipleMasses(observances: Mass[]): RuleResult | undefined {
    const nativityObservance = massManager.match(
      observances,
      massManager
        .getSanctiClass1()
        .filter((i) => i.id.startsWith("SANCTI_12_25")),
    );
    if (nativityObservance) {
      const nativityMasses = massManager
        .getSanctiClass1()
        .filter((i) => i.month === 12 && i.day === 25);
      return { observances: nativityMasses };
    }
  }

  sevenSorrowsOnFridayAfterPassionSunday(
    observances: Mass[],
  ): RuleResult | undefined {
    const fridayAfterPassion = massManager.match(
      observances,
      massManager.getById("TEMPORA_QUAD5_5"),
    );

    const sancti = massManager.match(
      observances,
      massManager.getByFlexibility("santos"),
    );
    if (fridayAfterPassion) {
      const sevenSorrow = massManager.getById("SANCTI_09_15");

      if (sancti) {
        return { observances: [sevenSorrow, sancti] };
      }

      return { observances: [sevenSorrow] };
    }
  }

  // All Souls Day; if not Sunday - Nov 2, else Nov 3; additionally, it has three masses
  ruleAllSouls(observances: Mass[], date: string): RuleResult | undefined {
    if (massManager.match(observances, massManager.getById("SANCTI_11_02"))) {
      const allSouls = observances
        .filter((ld) => ld.id.startsWith("santos:11-02"))
        .reverse();
      if (isSunday(date)) {
        const tempora = massManager.match(
          observances,
          massManager.getTemporaSunday(),
        );
        if (tempora) {
          return {
            observances: [...allSouls, tempora],
          };
        }
      }
      return { observances: allSouls };
    }
  }

  // Nativity Vigil takes place of 4th Advent Sunday.
  ruleNativityVigil(observances: Mass[], date: string): RuleResult | undefined {
    const nativityVigil = massManager.match(
      observances,
      massManager.getById("SANCTI_12_24"),
    );
    if (nativityVigil && isSunday(date)) {
      return {
        observances: [nativityVigil],
      };
    }
  }

  // If 30 December is sunday, octave of christmas is celebrated
  ruleNativityOctaveFeria(
    observances: Mass[],
    date: string,
  ): RuleResult | undefined {
    const nativity = massManager.match(
      observances,
      massManager.getById("SANCTI_01_01"),
    );
    if (nativity && isSunday(date)) {
      return {
        observances: [nativity],
      };
    }
  }

  // St. Matthias the Apostle, normally on Feb 24, but in leap year on Feb 25
  ruleStMatthias(observances: Mass[], date: string): RuleResult | undefined {
    if (
      massManager.match(observances, massManager.getById("SANCTI_02_24")) &&
      isLeapYear(date) &&
      getDate(date) === 24
    ) {
      const temp = massManager.match(
        observances,
        massManager.getByFlexibility("tempora"),
      );

      if (temp) {
        return {
          observances: [temp],
          toShift: {
            observances: [massManager.getById("SANCTI_02_24")],
            date: yyyyMMDD(addDays(new Date(date), 1)),
          },
        };
      }
    }
  }

  // Feb 27, normally on Feb 27 but in leap year on Feb 28
  ruleFeb27(observances: Mass[], date: string): RuleResult | undefined {
    if (
      massManager.match(observances, massManager.getById("SANCTI_02_27")) &&
      getDate(new Date(date)) === 27
    ) {
      if (isLeapYear(new Date(date))) {
        const shiftedDate = yyyyMMDD(addDays(new Date(date), 1));
        return {
          observances: observances.filter((mass) => mass.id !== "SANCTI_02_27"),
          toShift: {
            observances: [massManager.getById("SANCTI_02_27")],
            date: shiftedDate,
          },
        };
      }
    }
  }

  // On feria Saturdays (4th class) the celebration is B. M. V. Saturdays on the given period
  ruleBmvOfficeOnSaturday(
    observances: Mass[],
    date: string,
    calendar: Calendar,
  ): RuleResult | undefined {
    function calcProperForGivenPeriod() {
      const tempora = observances.filter((i) => i.flexibility === "tempora");
      if (
        tempora &&
        massManager.match(tempora, massManager.getByTypeId("advent"))
      ) {
        return massManager.getById("COMMUNE_C_10A"); // B. M. V. Saturdays in Advent
      }

      if (
        isAfter(date, new Date(getYear(date), 11, 25)) ||
        isBefore(date, new Date(getYear(date), 1, 2))
      ) {
        return massManager.getById("COMMUNE_C_10B"); // B. M. V. Saturdays between Nativity and Purification
      }

      const wednesdayInHolyWeek = calendar.findDay(
        massManager.getById("TEMPORA_QUAD6_3")?.id,
      );

      if (
        isAfter(date, new Date(getYear(date), 1, 2)) &&
        wednesdayInHolyWeek &&
        isBefore(date, wednesdayInHolyWeek[0])
      ) {
        return massManager.getById("COMMUNE_C_10C"); // B. M. V. Saturdays between Feb 2 and Wednesday in Holy Week
      }

      if (tempora && massManager.match(tempora, massManager.getEaster())) {
        return massManager.getById("COMMUNE_C_10PASC"); // B. M. V. Saturdays in Easter period
      }

      return massManager.getById("COMMUNE_C_10T"); // B. M. V. Saturdays between Trinity Sunday and Saturday before 1st Sunday of Advent
    }

    if (isSaturday(date)) {
      const ranks = new Set(observances.map((i) => i.rank));
      if (
        ranks.size === 0 ||
        (ranks.size === 1 && ranks.has(4) && calcProperForGivenPeriod()?.id)
      ) {
        const bmvOffice = massManager.createMassWithDate(
          calcProperForGivenPeriod()!,
          date,
        );
        return {
          observances: [
            bmvOffice,
            ...observances.filter((i) => i.flexibility === "santos"),
          ],
        };
      }
    }
  }

  ruleSameClassFeastsTakeOverAdventFeriaAndEmberDays(
    observances: Mass[],
    date: string,
  ): RuleResult | undefined {
    const advOrEmber = massManager.match(
      observances,
      massManager.getEmberDays().concat(massManager.getAdvent()),
    );

    if (!isSunday(date) && advOrEmber) {
      const sancti = massManager.match(observances, massManager.getSancti());

      if (!sancti) {
        return { observances: [advOrEmber] };
      }

      if (advOrEmber.rank === sancti.rank) {
        return { observances: [sancti, advOrEmber] };
      }

      if (advOrEmber.rank < sancti.rank) {
        return { observances: [advOrEmber, sancti] };
      }
    }
  }

  ruleShiftConflicting1stClassFeasts(
    observances: Mass[],
    date: string,
    calendar: Calendar,
  ): RuleResult | undefined {
    // # If there are two feasts with 1st class, the one with lower priority on Precedence Table is shifted to the first
    // # day where there is no 1st and 2nd class feast.
    //
    // # The feast of the Immaculate Conception of the Blessed Virgin Mary, however,
    // # is preferred to the Sunday of Advent on which it may occur. (General Rubrics, 15)

    const sancti = massManager.match(observances, massManager.getSancti());
    const tempora = massManager.match(observances, massManager.getTempora());

    if (
      sancti &&
      tempora &&
      getDate(date) === 8 &&
      getMonth(date) === 11 &&
      isSunday(date)
    ) {
      return {
        observances: [sancti, tempora],
      };
    }

    function calcTargetDate() {
      let targetDate = new Date(date);
      while (getYear(targetDate) === getYear(date)) {
        targetDate = addDays(targetDate, 1);
        const allRanks = new Set(
          calendar.get(yyyyMMDD(targetDate))?.all.map((ld) => ld.rank),
        );
        if (!allRanks.has(1) && !allRanks.has(2)) {
          return yyyyMMDD(targetDate);
        }
      }
    }

    const firstClassFeasts = observances.filter((ld) => ld.rank === 1);

    if (firstClassFeasts.length > 1) {
      const targetDate = calcTargetDate();

      const [celebration, shiftDay] = firstClassFeasts;

      return {
        observances: [celebration],
        toShift: { observances: [shiftDay], date: targetDate },
      };
    }
  }

  // if we have first and second class feasts
  // transfer second class to next available
  ruleShiftConflictingSecondClassFeasts(
    observances: Mass[],
    date: string,
    calendar: Calendar,
  ): RuleResult | undefined {
    function calcTargetDate() {
      let targetDate = new Date(date);
      while (getYear(targetDate) === getYear(date)) {
        targetDate = addDays(targetDate, 1);
        const allRanks = new Set(
          calendar.get(yyyyMMDD(targetDate))?.all.map((ld) => ld.rank),
        );
        if (!allRanks.has(1)) {
          return yyyyMMDD(targetDate);
        }
      }
    }

    const firstClassFeasts = observances.filter((ld) => ld.rank === 1);

    const secondClassFeasts = massManager.match(
      observances,
      massManager.getSanctiClass2(),
    );

    if (firstClassFeasts.length && secondClassFeasts?.rank === 2) {
      const targetDate = calcTargetDate();

      return {
        observances: firstClassFeasts,
        toShift: {
          observances: [secondClassFeasts],
          date: targetDate,
        },
      };
    }
  }

  ruleGeneral(observances: Mass[]): RuleResult | undefined {
    // Default rule for situations not handled by any of the above
    if (observances.length === 0) {
      return;
    }

    if (observances.length === 1) {
      return { observances };
    }

    observances.sort(
      (a, b) => a.rank - b.rank || a.flexibility.localeCompare(b.flexibility),
    );

    return { observances };
  }
}
