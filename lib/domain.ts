import { Schema } from "effect";

/**
 * Domain model for the liturgical calendar, expressed as Effect Schemas.
 * These definitions are the single source of truth: TypeScript types are
 * derived from them, and the static observance data is validated against
 * them when the mass index is built.
 */

const Flexibility = Schema.Literals(["santos", "commune", "tempora", "votivas"]);

const LiturgicalColor = Schema.Literals(["w", "r", "v", "b", "g", "vw"]);

/** Which missal edition a mass belongs to ("62" is the 1962 typical edition). */
export const CalendarEdition = Schema.Literals(["pre-55", "62"]);
export type CalendarEdition = typeof CalendarEdition.Type;

const MassType = Schema.Literals([
  "feria",
  "advent",
  "sancti",
  "jesus",
  "post-epiphany",
  "epiphany",
  "pre-lent-to-pentcost",
  "ember-september",
  "pentepi",
  "week-24-after-pentcost",
]);

const MassCategory = Schema.Literals([
  "epifania",
  "advento",
  "pre-quaresma",
  "quaresma",
  "pascoa",
  "comum",
  "natal",
  "votivas",
  "santos",
  "pentecostes",
]);

/**
 * Edition-specific liturgical grade, mirroring divinum-officium's per-rubrica
 * [Rank] sections in observance data files.
 *
 * `rubrics` is a divinum-officium version name ("Rubrics 1960", "Tridentine - 1570", ...)
 * or "*" for the default. `precedence` uses DO's fine-grained numeric scale:
 * Simplex ~1-2, Semiduplex ~2.5, Duplex ~3-4.x, II. classis ~5, Feria privilegiata ~7,
 * I. classis ~6+.
 */
export const RankVariant = Schema.Struct({
  rubrics: Schema.String,
  name: Schema.String,
  precedence: Schema.Number,
});
export type RankVariant = typeof RankVariant.Type;

export const Mass = Schema.Struct({
  flexibility: Flexibility,
  id: Schema.String,
  date: Schema.optional(Schema.String),
  name: Schema.String,
  rank: Schema.Number,
  color: LiturgicalColor,
  link: Schema.String,
  /** Only set for flexibility "santos", and only when true. */
  outro: Schema.optional(Schema.Boolean),
  /** Used by flexibility "tempora". */
  weekday: Schema.optional(Schema.Number),
  calendar: Schema.optional(CalendarEdition),
  type: MassType,
  /** Used by flexibility "santos". */
  local: Schema.optional(Schema.String),
  category: MassCategory,
  /** Used by flexibility "tempora". */
  week: Schema.optional(Schema.Number),
  /** Used by flexibility "santos". */
  day: Schema.optional(Schema.Number),
  /** Used by flexibility "santos". */
  month: Schema.optional(Schema.Number),
  novena: Schema.optional(Schema.Boolean),
  /** Per-edition grades; resolved through the calendar definition chain. */
  rankVariants: Schema.optional(Schema.Array(RankVariant)),
  /** Editions where this observance does not exist (e.g. vigils abolished in 1960). */
  suppressedIn: Schema.optional(Schema.Array(CalendarEdition)),
  /**
   * Fine-grained DO-scale precedence stamped when the observance is placed
   * on a date (see lib/calendars/precedence.ts). Static entries carry only
   * the coarse `rank`; day copies carry both.
   */
  precedence: Schema.optional(Schema.Number),
});
export type Mass = typeof Mass.Type;

export type MassMap = { [key: string]: Mass };

/** The nine liturgical seasons, identified by their Portuguese display names. */
export const LiturgicalSeason = Schema.Literals([
  "Advento",
  "Natal",
  "Epifania",
  "Septuagésima",
  "Quaresma",
  "Paixão",
  "Semana Santa",
  "Páscoa",
  "Pentecostes",
]);
export type LiturgicalSeason = typeof LiturgicalSeason.Type;

/** Named references to the liturgical seasons. */
export const Season = {
  ADVENT: "Advento",
  CHRISTMAS: "Natal",
  EPIPHANY: "Epifania",
  SEPTUAGESIMA: "Septuagésima",
  LENT: "Quaresma",
  PASSIONTIDE: "Paixão",
  HOLY_WEEK: "Semana Santa",
  EASTER: "Páscoa",
  PENTECOST: "Pentecostes",
} as const satisfies Record<string, LiturgicalSeason>;

/** Raised when a calendar is requested for a year the model cannot represent. */
export class UnsupportedYearError extends Schema.TaggedError<UnsupportedYearError>()(
  "UnsupportedYearError",
  { year: Schema.Number },
) {}
