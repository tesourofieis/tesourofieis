import type { Mass } from "../domain";
import { PRECEDENCE } from "./precedence";

/**
 * Liturgical grade label for a day mass, derived from its DO-scale
 * precedence (which already encodes per-edition variants) plus simple
 * structural signals - where a printed missal states the rubrical grade.
 */
export function gradeLabel(mass: Mass): string {
  const p = mass.precedence ?? PRECEDENCE.SIMPLEX;

  if (mass.flexibility === "tempora") {
    if (mass.weekday === 0) {
      if (p >= PRECEDENCE.DUPLEX_I_CLASSIS) return "Domingo I classe";
      if (p > PRECEDENCE.DUPLEX_II_CLASSIS) return "Domingo II classe";
      return "Domingo semidúplice";
    }
    if (p >= PRECEDENCE.FERIA_PRIVILEGIATA) return "Féria privilegiada";
    return "Féria";
  }

  if (mass.flexibility === "votivas") return "Votiva";
  if (mass.name?.startsWith("Vigília")) return "Vigília";

  // DO scale: 7 feria privilegiata · 6.5/6 I cl · 5.5/5 II cl ·
  // 4 majus · 3.5/3 duplex · 2.5 semiduplex · 1.5 simplex.
  if (p >= PRECEDENCE.FERIA_PRIVILEGIATA) return "Féria privilegiada";
  if (p >= PRECEDENCE.DUPLEX_I_CLASSIS) return "Duplex I classe";
  if (p >= PRECEDENCE.DUPLEX_II_CLASSIS) return "Duplex II classe";
  if (p >= PRECEDENCE.DUPLEX_MAJOR + 0.45) return "Duplex majus";
  if (p >= PRECEDENCE.DUPLEX_MAJOR) return "Duplex";
  if (p >= PRECEDENCE.SEMIDUPLEX) return "Semiduplex";
  return "Simplex";
}
