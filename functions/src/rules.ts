import {
  addDays,
  getDay,
  getYear,
  isAfter,
  isBefore,
  isLeapYear,
  isSaturday,
  isSunday,
} from "date-fns";
import { Calendar } from "./calendar.ts";
import { Observance } from "./observance.ts";
import {
  EMBER_DAYS,
  FEASTS_OF_JESUS_CLASS_1_AND_2,
  PATTERN_ADVENT,
  PATTERN_CLASS_1,
  PATTERN_EASTER,
  PATTERN_LENT,
  PATTERN_SANCTI,
  PATTERN_SANCTI_CLASS_1_OR_2,
  PATTERN_SANCTI_CLASS_2,
  PATTERN_SANCTI_CLASS_3,
  PATTERN_SANCTI_CLASS_3_LOCAL,
  PATTERN_SANCTI_CLASS_4,
  PATTERN_TEMPORA,
  PATTERN_TEMPORA_CLASS_4,
  PATTERN_TEMPORA_SUNDAY,
  PATTERN_TEMPORA_SUNDAY_CLASS_2,
  SANCTI_01_13,
  SANCTI_02_24,
  SANCTI_02_27,
  SANCTI_09_29,
  SANCTI_11_02_1,
  SANCTI_12_24,
  SANCTI_12_25_1,
  COMMUNE_C_10A,
  COMMUNE_C_10B,
  COMMUNE_C_10C,
  COMMUNE_C_10PASC,
  COMMUNE_C_10T,
  TEMPORA_EPI1_0,
  TEMPORA_PASC0_0,
  TEMPORA_QUAD6_1,
  TEMPORA_QUAD6_2,
  TEMPORA_QUAD6_3,
  TEMPORA_QUAD6_4,
  TEMPORA_QUAD6_5,
  TEMPORA_QUAD6_6,
  TEMPORA_QUADP3_3,
  TYPE_SANCTI,
} from "./constants.ts";
import { match, yyyyMMDD } from "./utils.ts";

function rule_nativity_has_multiple_masses(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  // Nativity Vigil takes place of 4th Advent Sunday.
  const nativityObservance = match(observances, SANCTI_12_25_1);
  if (nativityObservance) {
    const nativityMasses = observances.filter((ld) =>
      ld.id.startsWith("sancti:12-25m"),
    );
    return [nativityMasses, [], []];
  }
}

function rule_all_souls(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  // All Souls Day; if not Sunday - Nov 2, else Nov 3; additionally, it has three masses
  if (match(observances, SANCTI_11_02_1)) {
    const allSouls = observances.filter((ld) =>
      ld.id.startsWith("sancti:11-02m"),
    );
    if (isSunday(date_)) {
      return [
        [],
        [match(observances, PATTERN_TEMPORA_SUNDAY)],
        [[new Date(getYear(date_), 10, 3), allSouls]],
      ];
    }
    return [allSouls, [], []];
  }
}

function rule_nativity_vigil(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  // Nativity Vigil takes place of 4th Advent Sunday.
  if (match(observances, SANCTI_12_24) && isSunday(date_)) {
    return [[match(observances, SANCTI_12_24)], [], []];
  }
}

function rule_st_matthias(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  // St. Matthias the Apostle, normally on Feb 24, but in leap year on Feb 25

  if (
    match(observances, SANCTI_02_24) &&
    isLeapYear(date_) &&
    getDay(date_) === 24
  ) {
    return [
      [match(observances, PATTERN_TEMPORA)],
      [],
      [[addDays(date_, 1), match(observances, SANCTI_02_24)]],
    ];
  }
}

function rule_feb27(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  // Feb 27, normally on Feb 27 but in leap year on Feb 28

  if (
    match(observances, SANCTI_02_27) &&
    isLeapYear(date_) &&
    getDay(date_) === 27
  ) {
    return [
      [match(observances, PATTERN_TEMPORA)],
      [],
      [[addDays(date_, 1), match(observances, SANCTI_02_27)]],
    ];
  }
}

function rule_bmv_office_on_saturday(
  calendar: Calendar,
  date_: string,
  tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  // On feria Saturdays (4th class) the celebration is B. M. V. Saturdays on the given period

  function calcProperForGivenPeriod() {
    if (match(tempora, PATTERN_ADVENT)) {
      return COMMUNE_C_10A; // B. M. V. Saturdays in Advent
    }

    if (
      isAfter(date_, new Date(getYear(date_), 11, 25)) ||
      isBefore(date_, new Date(getYear(date_), 1, 2))
    ) {
      return COMMUNE_C_10B; // B. M. V. Saturdays between Nativity and Purification
    }

    const wednesdayInHolyWeek = calendar.findDay(TEMPORA_QUAD6_3);
    if (
      isAfter(date_, new Date(getYear(date_), 1, 2)) &&
      //@ts-ignore
      isBefore(date_, wednesdayInHolyWeek[0])
    ) {
      return COMMUNE_C_10C; // B. M. V. Saturdays between Feb 2 and Wednesday in Holy Week
    }

    if (match(tempora, PATTERN_EASTER)) {
      return COMMUNE_C_10PASC; // B. M. V. Saturdays in Easter period
    }

    return COMMUNE_C_10T; // B. M. V. Saturdays between Trinity Sunday and Saturday before 1st Sunday of Advent
  }

  if (isSaturday(date_)) {
    const ranks = new Set(observances.map((i) => i.rank));
    if (ranks.size === 0 || (ranks.size === 1 && ranks.has(4))) {
      const bmvOffice = new Observance(calcProperForGivenPeriod(), date_);
      return [
        [bmvOffice],
        observances.filter((i) => i.flexibility === TYPE_SANCTI).slice(0, 1),
        [],
      ];
    }
  }
}

function rule_same_class_feasts_take_over_advent_feria_and_ember_days(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  const advOrEmber = match(observances, [...EMBER_DAYS, PATTERN_ADVENT]);

  if (!isSunday(date_) && advOrEmber) {
    const sancti = match(observances, [PATTERN_SANCTI]);

    if (!sancti) {
      return [[advOrEmber], [], []];
    }

    if (advOrEmber.rank === sancti.rank) {
      return [[sancti], [advOrEmber], []];
    }

    if (advOrEmber.rank < sancti.rank) {
      return [[advOrEmber], [sancti], []];
    }
  }
}

function rule_lent_commemoration(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  const lentObservance = match(observances, PATTERN_LENT);

  if (lentObservance) {
    const sancti = match(observances, [PATTERN_SANCTI]);

    if (!sancti) {
      return [[lentObservance], [], []];
    }

    if (lentObservance.rank === sancti.rank) {
      if (sancti.rank === 1) {
        // Will be shifted to a different day by the other rule
        return;
      }

      return [[lentObservance], [sancti], []];
    }

    if (lentObservance.rank > sancti.rank) {
      return [[sancti], [lentObservance], []];
    }
  }
}

function rule_shift_conflicting_1st_class_feasts(
  calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  // # If there are two feasts with 1st class, the one with lower priority on Precedence Table is shifted to the first
  // # day where there is no 1st and 2nd class feast.
  // # day where there is no 1st and 2nd class feast.
  //
  //
  // # The feast of the Immaculate Conception of the Blessed Virgin Mary, however,
  // # is preferred to the Sunday of Advent on which it may occur. (General Rubrics, 15)
  if (new Date(date_) === new Date(getYear(date_), 11, 8) && isSunday(date_)) {
    return [
      [match(observances, PATTERN_SANCTI)],
      [match(observances, PATTERN_TEMPORA)],
      [],
    ];
  }

  const _calc_target_date = (): Date => {
    let target_date = new Date(date_);
    while (getYear(target_date) === getYear(date_)) {
      target_date = addDays(target_date, 1);
      const all_ranks = new Set(
        calendar.get(yyyyMMDD(target_date)).all.map((ld) => ld.rank),
      );
      if (!all_ranks.has(1) && !all_ranks.has(2)) {
        return new Date(target_date);
      }
    }
    // Return a default date if needed
    return new Date();
  };

  const first_class_feasts = observances.filter((o) => o.rank === 1);
  if (first_class_feasts.length > 1) {
    const [celebration, shift_day] = first_class_feasts
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 2);
    const to_shift: [Date, Observance[]][] = [
      [_calc_target_date(), [shift_day]],
    ];
    return [[celebration], [], to_shift];
  }
}

function rule_lord_feast1(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  if (match(observances, SANCTI_01_13) && match(observances, TEMPORA_EPI1_0)) {
    return [[match(observances, TEMPORA_EPI1_0)], [], []];
  }
}

function rule_lord_feast2(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  if (
    match(observances, FEASTS_OF_JESUS_CLASS_1_AND_2) &&
    match(observances, PATTERN_TEMPORA_SUNDAY_CLASS_2)
  ) {
    // HACK: first class feasts vs sundays
    return [[match(observances, PATTERN_SANCTI_CLASS_1_OR_2)], [], []];
  }
}

function rule_first_class_feast_with_sunday_commemoration(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  if (
    match(observances, SANCTI_09_29) &&
    match(observances, PATTERN_TEMPORA_SUNDAY_CLASS_2)
  ) {
    return [
      [match(observances, PATTERN_CLASS_1)],
      [match(observances, PATTERN_TEMPORA_SUNDAY_CLASS_2)],
      [],
    ];
  }
}

function rule_first_class_feast_no_commemoration(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  if (match(observances, PATTERN_CLASS_1)) {
    return [
      [
        match(
          observances.sort((a, b) => a.priority - b.priority),
          PATTERN_CLASS_1,
        ),
      ],
      [],
      [],
    ];
  }
}

function rule_2nd_class_sunday(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  const pattern_tempora_sunday_class_2 = match(
    observances,
    PATTERN_TEMPORA_SUNDAY_CLASS_2,
  );

  const pattern_sancti_class_2 = match(observances, PATTERN_SANCTI_CLASS_2);

  if (pattern_tempora_sunday_class_2 && isSunday(date_)) {
    if (pattern_sancti_class_2) {
      return [[pattern_sancti_class_2], [pattern_tempora_sunday_class_2], []];
    } else {
      return [[pattern_tempora_sunday_class_2], [], []];
    }
  }
}

function rule_1st_class_feria(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  if (
    match(observances, [
      TEMPORA_QUAD6_1,
      TEMPORA_QUAD6_2,
      TEMPORA_QUAD6_3,
      TEMPORA_QUAD6_4,
      TEMPORA_QUAD6_5,
      TEMPORA_QUAD6_6,
      TEMPORA_PASC0_0,
      TEMPORA_QUADP3_3,
    ])
  ) {
    return [[match(observances, PATTERN_TEMPORA)], [], []];
  }
}

function rule_3rd_class_local_saint_celebrated_3rd_class_general_saint_commemorated(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  const thirdClassLocalSancti = observances.filter((i) =>
    match(i.id, PATTERN_SANCTI_CLASS_3_LOCAL),
  );

  if (thirdClassLocalSancti.length > 0) {
    const thirdClassSancti = observances.filter(
      (i) =>
        match(i.id, PATTERN_SANCTI_CLASS_3) &&
        !match(i.id, PATTERN_SANCTI_CLASS_3_LOCAL),
    );

    if (thirdClassSancti.length > 0) {
      return [
        thirdClassLocalSancti.map((o) => new Observance(o.id, date_)),
        thirdClassSancti.map((o) => new Observance(o.id, date_)),
        [],
      ];
    }
  }
}

function rule_4th_class_feria_are_removed_from_celebration(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  const fourthClassTempora = match(observances, PATTERN_TEMPORA_CLASS_4);

  if (fourthClassTempora) {
    const commemoration = match(observances, PATTERN_SANCTI_CLASS_4);

    if (commemoration) {
      return [
        observances.filter((o) => o !== fourthClassTempora),
        [commemoration],
        [],
      ];
    }

    return [observances.filter((o) => o !== fourthClassTempora), [], []];
  }
}

function rule_4th_class_commemorations_are_only_commemorated(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  const fourthClassSancti = match(observances, PATTERN_SANCTI_CLASS_4);

  if (fourthClassSancti) {
    const filteredObservances = observances.filter(
      (o) => o !== fourthClassSancti,
    );
    return [filteredObservances, [fourthClassSancti], []];
  }

  return [[], [], []];
}

function rule_general(
  _calendar: Calendar,
  _date_: string,
  tempora: Observance[],
  observances: Observance[],
  _lang: string,
) {
  // Default rule for situations not handled by any of the above
  if (observances.length === 0) {
    return [[], [], []];
  } else if (observances.length === 1) {
    return [observances, [], []];
  } else {
    const [first, second] = observances
      .slice()
      .sort(
        (a, b) =>
          a.priority - b.priority ||
          a.rank - b.rank ||
          a.flexibility.localeCompare(b.flexibility),
      )
      .slice(0, 2);

    if (
      match(first, PATTERN_TEMPORA_SUNDAY) ||
      (tempora.length > 0 && second.id === tempora[0].id)
    ) {
      return [[first], [], []];
    }

    return [[first], [second], []];
  }
}

export const rules = [
  rule_nativity_has_multiple_masses,
  rule_all_souls,
  rule_nativity_vigil,
  rule_st_matthias,
  rule_feb27,
  rule_same_class_feasts_take_over_advent_feria_and_ember_days,
  rule_lent_commemoration,
  rule_shift_conflicting_1st_class_feasts,
  rule_lord_feast1,
  rule_lord_feast2,
  rule_first_class_feast_with_sunday_commemoration,
  rule_first_class_feast_no_commemoration,
  rule_2nd_class_sunday,
  rule_1st_class_feria,
  rule_bmv_office_on_saturday,
  rule_3rd_class_local_saint_celebrated_3rd_class_general_saint_commemorated,
  rule_4th_class_feria_are_removed_from_celebration,
  rule_4th_class_commemorations_are_only_commemorated,
  rule_general,
];
