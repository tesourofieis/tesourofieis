/**
 * Content schema for missal pages - the single source of truth that
 * observance links point into.
 *
 * Design constraints, drawn from the corpus:
 * - Offices interleave (a feast may carry commemorations whose Oracao,
 *   Secrets and Postcommunions alternate with the winner's own), so a
 *   page is an ORDERED LIST of sections, never a fixed template.
 * - Every liturgical text exists in Latin and Portuguese.
 * - Rubrical directions (Trato after Septuagesima, red-line notes) are
 *   first-class sections so printed-book fidelity survives.
 */

export interface Lang {
  /** Latin text (may embed inline versicle markup later). */
  la: string;
  /** Vernacular translation. */
  pt: string;
}

export type MissalSection =
  /** Red-line rubrical direction or editorial aside. */
  | { kind: "rubric"; text: string }
  /** Cross-reference card to another page (optionally an anchor). */
  | { kind: "ref"; title: string; href: string }
  /** Italic source citation (Sl. 20, 4 / Mt. 19...). */
  | { kind: "source"; text: string }
  /** Liturgical heading (Oração, Secreta, Prefácio...). */
  | { kind: "heading"; text: string }
  /** Bilingual prayer/propers block. */
  | { kind: "text"; body: Lang };

export interface MissalPage {
  /** Display title (H1). */
  title: string;
  sections: MissalSection[];
}
