// Portuguese stop words for filtering common words from search
export const STOP_WORDS = new Set([
  "que",
  "para",
  "com",
  "por",
  "uma",
  "dos",
  "das",
  "nos",
  "nas",
  "seu",
  "sua",
  "seus",
  "suas",
  "como",
  "pela",
  "pelo",
  "esta",
  "este",
  "essa",
  "esse",
  "mais",
  "muito",
  "bem",
  "sem",
  "depois",
  "antes",
  "assim",
]);

/**
 * Tokenizer for MiniSearch that normalizes Portuguese text.
 * - Removes accents (NFD normalization)
 * - Converts to lowercase
 * - Splits on whitespace and punctuation
 * - Filters tokens shorter than 2 characters
 * - Removes Portuguese stop words
 *
 * IMPORTANT: This function must be used identically at build time
 * (scripts/build-search-index.ts) and runtime (src/services/search.ts)
 * for MiniSearch to work correctly.
 */
export function tokenize(text: string): string[] {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(/[\s\-_.,;:!?()[\]{}'"]+/)
    .filter((t) => t.length >= 2 && !STOP_WORDS.has(t));
}
