import { UTCDate } from "@date-fns/utc";
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
import { yyyyMMDD } from "./utils";
import { type Mass, massManager } from "./observanceManager";

type RuleFunction = (
  observances: Mass[],
  date: string,
  calendar: Calendar
) => RuleResult | undefined;

export interface RuleResult {
  observances?: Mass[];
  toShift?: {
    date?: string;
    observances: Mass[];
  };
}

export class Rules {
  private ruleFunctions: RuleFunction[];

  constructor(
    private observances: Mass[],
    private date: string,
    private calendar: Calendar
  ) {
    this.ruleFunctions = this.apply();
  }

  apply(): RuleFunction[] {
    const rules: RuleFunction[] = [
      this.ruleNativityHasMultipleMasses.bind(this),
      this.ruleAllSouls.bind(this),
      this.ruleNativityVigil.bind(this),
      this.ruleNativityOctaveFeria.bind(this),
      this.ruleStMatthias.bind(this),
      this.ruleFeb27.bind(this),
      this.sevenSorrowsOnFridayAfterPassionSunday.bind(this),
      this.ruleSameClassFeastsTakeOverAdventFeriaAndEmberDays.bind(this),
      this.ruleLentCommemoration.bind(this),
      this.ruleShiftConflicting1stClassFeasts.bind(this),
      this.ruleShiftConflictingSecondClassFeasts.bind(this),
      // this.ruleLordFeast.bind(this),
      this.ruleCommemoration.bind(this),
      this.rule2ndClassSundayTempora.bind(this),
      this.ruleBmvOfficeOnSaturday.bind(this),
      this.rule4thClassFeriaAreRemovedFromCelebration.bind(this),
      this.ruleGeneral.bind(this),
    ];

    return rules;
  }

  applyRules(): RuleResult {
    const currentMasses = this.observances;
    let shiftedMasses: Mass[] | undefined;
    let shiftedDate: string | undefined;

    if (this.ruleFunctions) {
      for (const ruleFunction of this.ruleFunctions) {
        const result = ruleFunction(currentMasses, this.date, this.calendar);

        // If a rule does not return anything, continue to the next rule
        if (result === undefined) {
          continue;
        }

        // Handle shifted observances
        if (result.toShift?.date && result.toShift.observances) {
          shiftedDate = result.toShift.date;
          shiftedMasses = result.toShift.observances;
        }

        // Update current day observances
        // if (result.observances?.length) {
        //   currentMasses = result.observances;
        // }

        // If a significant change occurred, we stop further processing
        if (
          shiftedDate ||
          (result.observances?.length &&
            result.observances.length !== this.observances.length)
        ) {
          break;
        }
      }
    }

    // Return the final result
    return {
      observances: currentMasses,
      toShift:
        shiftedMasses && shiftedDate
          ? {
              observances: shiftedMasses,
              date: shiftedDate,
            }
          : undefined,
    };
  }

  // Nativity Vigil takes place of 4th Advent Sunday.
  ruleNativityHasMultipleMasses(observances: Mass[]): RuleResult | undefined {
    const nativityObservance = massManager.match(
      observances,
      massManager.getById("SANCTI_12_25_1")
    );
    if (nativityObservance) {
      const nativityMasses = observances.filter((ld) =>
        ld.id.startsWith("santos:12-25-")
      );
      return { observances: nativityMasses.reverse() };
    }
  }

  sevenSorrowsOnFridayAfterPassionSunday(
    observances: Mass[]
  ): RuleResult | undefined {
    const fridayAfterPassion = massManager.match(
      observances,
      massManager.getById("TEMPORA_QUAD5_5")
    );

    const sancti = massManager.match(
      observances,
      massManager.getByFlexibility("santos")
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
  ruleAllSouls(observances: Mass[], date_: string): RuleResult | undefined {
    if (massManager.match(observances, massManager.getById("SANCTI_11_02"))) {
      const allSouls = observances
        .filter((ld) => ld.id.startsWith("santos:11-02"))
        .reverse();
      if (isSunday(date_)) {
        const tempora = massManager.match(
          observances,
          massManager.getTemporaSunday()
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
  ruleNativityVigil(
    observances: Mass[],
    date_: string
  ): RuleResult | undefined {
    const nativityVigil = massManager.match(
      observances,
      massManager.getById("SANCTI_12_24")
    );
    if (nativityVigil && isSunday(date_)) {
      return {
        observances: [nativityVigil],
      };
    }
  }

  // If 30 December is sunday, octave of christmas is celebrated
  ruleNativityOctaveFeria(
    observances: Mass[],
    date_: string
  ): RuleResult | undefined {
    const nativity = massManager.match(
      observances,
      massManager.getById("SANCTI_01_01")
    );
    if (nativity && isSunday(date_)) {
      return {
        observances: [nativity],
      };
    }
  }

  // St. Matthias the Apostle, normally on Feb 24, but in leap year on Feb 25
  ruleStMatthias(observances: Mass[], date_: string): RuleResult | undefined {
    if (
      massManager.match(observances, massManager.getById("SANCTI_02_24")) &&
      isLeapYear(date_) &&
      getDate(date_) === 24
    ) {
      return {
        observances: observances,
        toShift: {
          observances: [massManager.getById("SANCTI_02_24")],
          date: yyyyMMDD(addDays(new UTCDate(date_), 1)),
        },
      };
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
    date_: string,
    calendar: Calendar,
    tempora?: Mass[]
  ): RuleResult | undefined {
    function calcProperForGivenPeriod() {
      if (
        tempora &&
        massManager.match(tempora, massManager.getByTypeId("advent"))
      ) {
        return massManager.getById("COMMUNE_C_10A"); // B. M. V. Saturdays in Advent
      }

      if (
        isAfter(date_, new UTCDate(getYear(date_), 11, 25)) ||
        isBefore(date_, new UTCDate(getYear(date_), 1, 2))
      ) {
        return massManager.getById("COMMUNE_C_10B"); // B. M. V. Saturdays between Nativity and Purification
      }

      const wednesdayInHolyWeek = calendar.findDay(
        massManager.getById("TEMPORA_QUAD6_3")?.id
      );

      if (
        isAfter(date_, new UTCDate(getYear(date_), 1, 2)) &&
        wednesdayInHolyWeek &&
        isBefore(date_, wednesdayInHolyWeek[0])
      ) {
        return massManager.getById("COMMUNE_C_10C"); // B. M. V. Saturdays between Feb 2 and Wednesday in Holy Week
      }

      if (tempora && massManager.match(tempora, massManager.getEaster())) {
        return massManager.getById("COMMUNE_C_10PASC"); // B. M. V. Saturdays in Easter period
      }

      return massManager.getById("COMMUNE_C_10T"); // B. M. V. Saturdays between Trinity Sunday and Saturday before 1st Sunday of Advent
    }

    if (isSaturday(date_)) {
      const ranks = new Set(observances.map((i) => i.rank));
      if (
        ranks.size === 0 ||
        (ranks.size === 1 && ranks.has(4) && calcProperForGivenPeriod()?.id)
      ) {
        const bmvOffice = massManager.createMassWithDate(
          calcProperForGivenPeriod()!,
          date_
        );
        return { observances: [bmvOffice] };
      }
    }
  }

  ruleSameClassFeastsTakeOverAdventFeriaAndEmberDays(
    observances: Mass[],
    date_: string
  ): RuleResult | undefined {
    const advOrEmber = massManager.match(
      observances,
      massManager.getEmberDays().concat(massManager.getAdvent())
    );

    if (!isSunday(date_) && advOrEmber) {
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

  ruleLentCommemoration(observances: Mass[]): RuleResult | undefined {
    const lentObservance = massManager.match(
      observances,
      massManager.getLent()
    );

    if (lentObservance) {
      const sancti = massManager.match(observances, massManager.getSancti());

      if (!sancti?.rank) {
        return { observances: [lentObservance] };
      }

      if (lentObservance.rank === sancti.rank) {
        if (sancti.rank === 1) {
          // Will be shifted to a different day by the other rule
          return;
        }

        return { observances: [lentObservance, sancti] };
      }

      if (lentObservance.rank > sancti.rank) {
        return { observances: [sancti, lentObservance] };
      }
    }
  }

  ruleShiftConflicting1stClassFeasts(
    observances: Mass[],
    date_: string,
    calendar: Calendar
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
      getDate(date_) === 8 &&
      getMonth(date_) === 11 &&
      isSunday(date_)
    ) {
      return {
        observances: [sancti, tempora],
      };
    }

    function calcTargetDate() {
      let targetDate = new UTCDate(date_);
      while (getYear(targetDate) === getYear(date_)) {
        targetDate = addDays(targetDate, 1);
        const allRanks = new Set(
          calendar.get(yyyyMMDD(targetDate))?.all.map((ld) => ld.rank)
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
    date_: string,
    calendar: Calendar
  ): RuleResult | undefined {
    function calcTargetDate() {
      let targetDate = new UTCDate(date_);
      while (getYear(targetDate) === getYear(date_)) {
        targetDate = addDays(targetDate, 1);
        const allRanks = new Set(
          calendar.get(yyyyMMDD(targetDate))?.all.map((ld) => ld.rank)
        );
        if (!allRanks.has(1)) {
          return yyyyMMDD(targetDate);
        }
      }
    }

    const firstClassFeasts = observances.filter((ld) => ld.rank === 1);

    const secondClassFeasts = massManager.match(
      observances,
      massManager.getSanctiClass2()
    );

    if (firstClassFeasts.length && secondClassFeasts?.rank === 2) {
      const targetDate = calcTargetDate();

      return {
        observances: [firstClassFeasts[0]],
        toShift: {
          observances: [secondClassFeasts],
          date: targetDate,
        },
      };
    }
  }

  // TODO: check if we need it since they should be already rank 1
  // ruleLordFeast(observances: Mass[]) {
  //   if (
  //     massManager.match(observances, FEASTS_OF_JESUS_CLASS_1_AND_2) &&
  //     massManager.match(observances, PATTERN_TEMPORA_SUNDAY_CLASS_2)
  //   ) {
  //     return [[massManager.match(observances, PATTERN_SANCTI_CLASS_1_OR_2)], [], []];
  //   }
  // }

  // When 2nd class Sunday occurs along with 2nd class feast, the Sunday takes precedence and the feast is commemorated
  rule2ndClassSundayTempora(
    observances: Mass[],
    date_: string
  ): RuleResult | undefined {
    const patternSundayClass_2 = massManager.match(
      observances,
      massManager.getSunday()
    );

    const patternSanctiClass_2 = massManager.match(
      observances,
      massManager.getSanctiClass2()
    );

    if (
      patternSundayClass_2 &&
      patternSundayClass_2.rank === 2 &&
      isSunday(date_)
    ) {
      if (patternSanctiClass_2) {
        return { observances: [patternSanctiClass_2, patternSundayClass_2] };
      }
      return { observances: [patternSundayClass_2] };
    }
  }

  ruleCommemoration(observances: Mass[]): RuleResult | undefined {
    const patternSancti = massManager.match(
      observances,
      massManager.getSancti()
    );

    const sundays = massManager.match(observances, massManager.getSunday());

    const sundaysLent = massManager.match(
      observances,
      massManager.getLentSunday()
    );

    const albis = massManager.match(
      observances,
      massManager.getLentSunday().filter((i) => i.week === 1)
    );

    const firstClassSaints = massManager.match(
      observances,
      massManager.getSanctiClass1()
    );

    const class1 = massManager.match(observances, massManager.getClass1());
    const temporaSundayClass2 = massManager.match(
      observances,
      massManager.getTemporaSundayClass2()
    );

    // In case of some 1st class feasts the Sunday is commemorated,
    // e.g. St. Michael the Archangel on Sunday 2019-09-29
    if (
      massManager.match(
        observances,
        massManager.getSancti().filter((i) => i.day === 29 && i.month === 9)
      ) &&
      class1 &&
      temporaSundayClass2
    ) {
      return {
        observances: [class1, temporaSundayClass2],
      };
    }

    // if sundays outside lent and easter week
    if (!sundaysLent && !albis && sundays && patternSancti) {
      // if sunday is second class and sancti first class
      // celebrate the sancti without sunday commemoration
      if (firstClassSaints && sundays?.rank === 2) {
        return { observances: [firstClassSaints] };
      }

      // if sancti second class sunday is commemorated
      if (patternSancti.rank <= 2) {
        return { observances: [patternSancti, sundays] };
      }

      // if sancti third class is commemorated
      if (patternSancti.rank === 3) {
        return { observances: [sundays, patternSancti] };
      }

      // if sancti is fourth class skip
      if (patternSancti.rank === 4) {
        return {};
      }

      // else sundays with sancti commemoration
      return { observances: [sundays, patternSancti] };
    }

    // if not on sunday and first class sancti
    // no commemoration takes place
    if (!sundays && firstClassSaints) {
      return { observances: [firstClassSaints] };
    }

    // else first class without commemoration
    if (class1) {
      return {
        observances: [class1],
      };
    }
  }

  rule4thClassFeriaAreRemovedFromCelebration(
    observances: Mass[]
  ): RuleResult | undefined {
    const fourthClassTempora = massManager.match(
      observances,
      massManager.getTemporaClass4()
    );

    if (fourthClassTempora) {
      const commemoration = massManager.match(
        observances,
        massManager.getSanctiClass4()
      );

      if (commemoration) {
        return { observances: [commemoration] };
      }

      return {
        observances: observances.filter((o) => o !== fourthClassTempora),
      };
    }
    return { observances };
  }

  ruleGeneral(observances: Mass[]): RuleResult | undefined {
    // Default rule for situations not handled by any of the above
    if (observances.length === 0) {
      return {};
    }
    if (observances.length === 1) {
      return { observances };
    }
    const [first, second] = observances
      .sort(
        (a, b) => a.rank - b.rank || a.flexibility.localeCompare(b.flexibility)
      )
      .slice(0, 2);

    return { observances: [first, second] };
  }
}
