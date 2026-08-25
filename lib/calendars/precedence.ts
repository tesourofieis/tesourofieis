import type { Mass } from "../domain";
import type { CalendarDefinition } from "./types";

/**
 * Precedence resolution modeled on divinum-officium.
 *
 * Each observance may carry `rankVariants` - the equivalent of DO's
 * per-rubrica [Rank] sections in its data files:
 *
 *   [Rank]
 *   ;;Duplex I classis;;6.1;;
 *   (sed rubrica 1570 aut rubrica 1617)
 *   ;;Duplex;;3;;
 *   (sed rubrica 1960 aut rubrica innovata)
 *   ;;Duplex I classis;;6;;
 *
 * Variants are resolved by walking the definition inheritance chain
 * (leaf edition first, then its base) and taking the first variant whose
 * `rubrics` matches the node's divinum-officium version name. "*" matches
 * any node as the default section.
 */

/**
 * DO's precedence scale (the third [Rank] field). Kept here for reference;
 * the legacy 1-4 rank is derived from it so the existing engine keeps
 * working while rules migrate to fine-grained comparisons.
 */
export const PRECEDENCE = {
  SIMPLEX: 1.5,
  FERIA: 2,
  SEMIDUPLEX: 2.5,
  DUPLEX_MAJOR: 3.5,
  DUPLEX_II_CLASSIS: 5,
  DOMINICA_II_CLASSIS: 5.1,
  DUPLEX_I_CLASSIS: 6,
  FERIA_PRIVILEGIATA: 7,
} as const;

/** Maps the legacy coarse rank (1-4) onto DO's precedence scale. */
export function legacyToPrecedence(rank: number): number {
  if (rank <= 0) return PRECEDENCE.SIMPLEX - 1;
  switch (rank) {
    case 1:
      return PRECEDENCE.DUPLEX_I_CLASSIS + 0.5;
    case 2:
      return PRECEDENCE.DUPLEX_II_CLASSIS;
    case 3:
      return PRECEDENCE.DUPLEX_MAJOR;
    default:
      return PRECEDENCE.SEMIDUPLEX - 1;
  }
}

/** Derives the legacy coarse rank from a DO-scale precedence value. */
export function precedenceToLegacyRank(precedence: number): number {
  if (precedence >= PRECEDENCE.DUPLEX_I_CLASSIS) return 1;
  if (precedence >= PRECEDENCE.DUPLEX_II_CLASSIS) return 2;
  if (precedence >= PRECEDENCE.SEMIDUPLEX) return 3;
  return 4;
}

/**
 * Resolve the grade of an observance under an edition chain: the nearest
 * definition (leaf first) whose doVersion has a matching variant wins;
 * "*" acts as DO's default (first) [Rank] section; no variants at all
 * falls back to the entry's static rank via the legacy mapping.
 */
export function resolvePrecedence(chain: CalendarDefinition[], mass: Mass): number {
  const variants = mass.rankVariants;
  if (!variants?.length) {
    return legacyToPrecedence(mass.rank);
  }

  for (const definition of chain) {
    const match = variants.find((v) => v.rubrics === definition.doVersion);
    if (match) return match.precedence;
  }

  const fallback = variants.find((v) => v.rubrics === "*");
  return fallback ? fallback.precedence : legacyToPrecedence(mass.rank);
}
