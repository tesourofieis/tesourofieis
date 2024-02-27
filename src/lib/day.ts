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
import { Proper, ProperConfig } from "./proper.ts";
import { getCustomPreface, match, yyyyMMDD } from "./utils.ts";
import { Calendar } from "./calendar.ts";
import { UTCDate } from "@date-fns/utc";

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
    return [...this.tempora, ...this.celebration, ...this.commemoration];
  }

  getTemporaId() {
    return this.tempora[0].id;
  }

  getTemporaName() {
    return this.tempora[0]?.title;
  }

  getCelebrationId() {
    return this.celebration[0]?.id;
  }

  getCelebrationName() {
    return this.celebration[0]?.title;
  }

  getCelebrationColors() {
    return this.celebration[0]?.colors;
  }

  getCelebrationRank() {
    return this.celebration[0]?.rank;
  }

  getProper(calendar: Calendar) {
    /**
     * Get proper that is used in today Mass. If given day does not have a dedicated proper,
     * use the one from the latest Sunday.
     */
    const celebrationPropers = this.calculateProper(calendar, this.celebration);

    if (this.commemoration.length) {
      const commemorationPropers = this.calculateProper(
        calendar,
        this.commemoration,
      );
      for (const celebrationProper of celebrationPropers) {
        for (const i of [0, 1]) {
          const proper = celebrationProper[i];
          if (proper) {
            const commemorations = commemorationPropers
              .filter(
                (commemorationProper) =>
                  proper.id !== commemorationProper[i].id,
              )
              .map((cp) => cp[i]);
            if (proper && commemorations.length) {
              proper.addCommemorations(commemorations);
            }
          }
        }
      }
    }

    return celebrationPropers;
  }

  private calculateProper(calendar: Calendar, observances: Observance[]) {
    if (observances.length && observances.every((i) => i.hasProper())) {
      const result: Proper[][] = [];
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
    }

    const inferredObservances = this.inferObservance(calendar);
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
        proper.rank = rank;
      }
    }

    return [propers];
  }

  private inferObservance(calendar: Calendar) {
    let date = new UTCDate(this.date);

    // No proper for this day, get one from the latest Sunday
    if (!isSunday(date)) {
      if (isSameYear(date, this.date)) {
        date = previousSunday(date);
      }
    }

    // No proper for this day, get from epiphany
    if (isSameDay(date, new UTCDate(getYear(this.date), 0, 6))) {
      date = new UTCDate(getYear(this.date), 0, 6);
    }

    // if previous sunday is in the previous calendar year
    // grab the proper from the circuncision
    if (!isSameYear(date, this.date)) {
      date = new UTCDate(getYear(this.date), 0, 1);
    }

    const day = calendar.get(yyyyMMDD(date));

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

    if (day.tempora?.length) {
      return day.tempora[0];
    }

    return day?.celebration[0];
  }

  private inferInterReadingSection(observance: Observance) {
    if (observance.id in CUSTOM_INTER_READING_SECTIONS) {
      return CUSTOM_INTER_READING_SECTIONS[observance.id];
    }
    if (match(this.tempora, PATTERN_EASTER)) {
      return GRADUALE_PASCHAL;
    }
    if (match(this.tempora, [PATTERN_PRE_LENTEN, PATTERN_LENT])) {
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
