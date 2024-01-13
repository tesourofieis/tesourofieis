import {
  getYear,
  isSameDay,
  isSameYear,
  isSunday,
  previousSunday,
} from "date-fns";
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
import { Observance } from "./observance.ts";
import { ProperConfig } from "./proper.ts";
import { getCustomPreface, match, yyyyMMDD } from "./utils.ts";
import { Calendar } from "./calendar.ts";

// """ Class used to keep `Observance` objects for particular days of Missal.
//
// It contains three lists: `tempora`, `celebration` and `commemoration`.
// On Missal's creation the lists are filled in so that `tempora` always contains `Observance` representing
// given variable day, `celebration` contains an `Observance`s to be celebrated in this day and
// `commemoration` contains zero or more `Observance`s that should be commemorated with the main celebration.
// """
class Day {
  date: string;
  calendar: Calendar;
  tempora: Observance[] = [];
  celebration: Observance[] = [];
  commemoration: Observance[] = [];

  constructor(date: string, calendar: Calendar) {
    this.date = date;
    this.calendar = calendar;
  }

  get all(): Observance[] {
    return [...this.tempora, ...this.celebration, ...this.commemoration];
  }

  getTemporaId(): string | undefined {
    return this.tempora.length > 0 ? this.tempora[0].id : undefined;
  }

  getTemporaName(): string | undefined {
    return this.tempora.length > 0 ? this.tempora[0].title : undefined;
  }

  getCelebrationId(): string | undefined {
    return this.celebration.length > 0 ? this.celebration[0].id : undefined;
  }

  getCelebrationName(): string | undefined {
    return this.celebration.length > 0 ? this.celebration[0].title : undefined;
  }

  getCelebrationColors(): string[] | undefined {
    return this.celebration.length > 0 ? this.celebration[0].colors : undefined;
  }

  getCelebrationRank(): number | undefined {
    return this.celebration.length > 0 ? this.celebration[0].rank : undefined;
  }

  getProper() {
    const celebrationPropers = this.calculateProper(this.celebration);

    if (this.commemoration.length) {
      const commemorationPropers = this.calculateProper(this.commemoration);
      if (celebrationPropers) {
        for (const celebrationProper of celebrationPropers) {
          for (let i = 0; i < 2; i++) {
            if (celebrationProper?.length) {
              celebrationProper[i].addCommemorations(
                commemorationPropers.map((j) => j[i]),
              );
            }
          }
        }
      }
    }

    return celebrationPropers;
  }

  private calculateProper(observances: Observance[]) {
    if (observances.length && observances.every((i) => i.hasProper())) {
      const result = [];
      for (const observance of observances) {
        const interReadingsSection = this.inferInterReadingSection(observance);
        const preface = getCustomPreface(observance, this.tempora[0]);
        const properConfig = new ProperConfig(
          preface,
          false,
          interReadingsSection,
        );
        const proper = observance.getProper(properConfig);
        result.push(proper);
      }
      return result;
    } else {
      // It's a feria day without its own proper for which the last Sunday's proper is used
      const inferredObservances = this.inferObservance();

      const rank =
        observances.length && !match(observances, FERIA)
          ? observances[0].rank
          : 4;

      const preface = getCustomPreface(
        observances.length && !match(observances, FERIA)
          ? observances[0]
          : inferredObservances,
      );

      const prefaceOrDefault = !preface ? preface : PREFATIO_COMMUNIS;
      const config: ProperConfig = {
        preface: prefaceOrDefault,
        stripAlleluia: true,
      };
      const propers = inferredObservances.getProper(config);
      if (propers) {
        for (const proper of propers) {
          proper[0].rank = rank;
        }
      }

      return propers;
    }
  }

  private inferObservance() {
    let date = new Date(this.date);

    // No proper for this day, get one from the latest Sunday
    if (!isSunday(date)) {
      if (isSameYear(date, this.date)) {
        date = previousSunday(date);
        console.log(date);
      }
    }

    // No proper for this day, get from epiphany
    if (isSameDay(date, new Date(getYear(this.date), 0, 6))) {
      date = new Date(getYear(this.date), 0, 6);
      console.log(date);
    }

    // if previous sunday is in the previous calendar year
    // grab the proper from the circuncision
    if (!isSameYear(date, this.date)) {
      date = new Date(getYear(this.date), 0, 1);
      console.log(date);
    }

    const day = this.calendar.get(yyyyMMDD(date));

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

    if (day?.tempora && day.tempora.length) {
      return day.tempora[0];
    }

    return day?.celebration[0];
  }

  private inferInterReadingSection(observance: Observance) {
    if (observance.id in CUSTOM_INTER_READING_SECTIONS) {
      return CUSTOM_INTER_READING_SECTIONS[observance.id];
    } else if (match(this.tempora, PATTERN_EASTER)) {
      return GRADUALE_PASCHAL;
    } else if (match(this.tempora, [PATTERN_PRE_LENTEN, PATTERN_LENT])) {
      return TRACTUS;
    }
    return GRADUALE;
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

  toString(): string {
    return `${JSON.stringify(this.tempora)}${JSON.stringify(
      this.celebration,
    )}${JSON.stringify(this.commemoration)}`;
  }
}

export { Day };
