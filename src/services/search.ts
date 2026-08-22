import MiniSearch, { type SearchResult as MiniSearchResult } from "minisearch";
import type { Docs, SubHeading } from "~/components/Drawer";
import { tokenize } from "../../lib/search-tokenizer";
import searchIndexData from "../../assets/search-index.json";
import rawDocsData from "../../assets/docs.json";

const allDocs: Docs[] = rawDocsData as Docs[];
const docsById = new Map(allDocs.map((d) => [d.id, d]));

let miniSearch: MiniSearch | null = null;

function getSearchIndex(): MiniSearch {
  if (!miniSearch) {
    miniSearch = MiniSearch.loadJSON(JSON.stringify(searchIndexData), {
      fields: ["title", "section", "headingTitles", "introduction", "bodyText"],
      storeFields: ["id", "title", "url", "section", "bodyText"], // bodyText stored for snippets
      tokenize,
    });
  }
  return miniSearch;
}

export interface SearchResult extends Docs {
  matchedHeading?: SubHeading;
  matchedText?: string;
  highlightedTitle?: string;
  relevanceScore?: number;
  searchReasons?: string[];
}

export interface SearchFilters {
  sections?: string[];
  level?: number;
  hasHeadings?: boolean;
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightMatches(text: string, match?: Record<string, string[]>): string {
  if (!match) return text;
  const terms = Object.keys(match);
  if (!terms.length) return text;

  const regex = new RegExp(`(${terms.map((t) => escapeRegExp(t)).join("|")})`, "gi");
  return text.replace(regex, "<b>$1</b>");
}

function normalizeForComparison(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/**
 * Extract a contextual snippet around the matched query terms
 * Returns highlighted text with <b> tags around matches
 */
function extractContextualSnippet(
  bodyText: string | undefined,
  query: string,
  matchTerms: string[],
  contextWords = 8,
): string | undefined {
  if (!bodyText || !query.trim()) return undefined;

  const normalizedBody = normalizeForComparison(bodyText);
  const normalizedQuery = normalizeForComparison(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);

  // Find the position of the first match
  let matchPosition = -1;

  // First try to find exact query
  matchPosition = normalizedBody.indexOf(normalizedQuery);

  // If not found, try individual query words
  if (matchPosition === -1) {
    for (const word of queryWords) {
      const pos = normalizedBody.indexOf(word);
      if (pos !== -1) {
        matchPosition = pos;
        break;
      }
    }
  }

  // If still not found, try match terms from MiniSearch
  if (matchPosition === -1 && matchTerms.length > 0) {
    for (const term of matchTerms) {
      const pos = normalizedBody.indexOf(term);
      if (pos !== -1) {
        matchPosition = pos;
        break;
      }
    }
  }

  if (matchPosition === -1) return undefined;

  // Find word boundaries around the match
  const words = bodyText.split(/\s+/);
  let charCount = 0;
  let wordIndexAtMatch = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!word) continue;
    if (charCount + word.length >= matchPosition) {
      wordIndexAtMatch = i;
      break;
    }
    charCount += word.length + 1; // +1 for space
  }

  // Extract context around the match
  const startIndex = Math.max(0, wordIndexAtMatch - contextWords);
  const endIndex = Math.min(words.length, wordIndexAtMatch + contextWords + 1);
  const snippetWords = words.slice(startIndex, endIndex);

  // Add ellipsis if needed
  let snippet = snippetWords.join(" ");
  if (startIndex > 0) snippet = "..." + snippet;
  if (endIndex < words.length) snippet = snippet + "...";

  // Highlight the matched terms
  const allTerms = [...new Set([...queryWords, ...matchTerms])].filter((t) => t.length >= 2);
  if (allTerms.length > 0) {
    const highlightRegex = new RegExp(`(${allTerms.map((t) => escapeRegExp(t)).join("|")})`, "gi");
    snippet = snippet.replace(highlightRegex, "<b>$1</b>");
  }

  return snippet;
}

export function search(query: string, limit = 15, filters?: SearchFilters): SearchResult[] {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return [];

  const ms = getSearchIndex();

  const results = ms.search(trimmedQuery, {
    prefix: true,
    fuzzy: 0.2,
    boost: { title: 3, headingTitles: 2, section: 1.5 },
    filter: filters?.sections?.length
      ? (result: MiniSearchResult) => filters.sections!.includes(result.section as string)
      : undefined,
  });

  const searchResults: SearchResult[] = [];
  const normalizedQuery = normalizeForComparison(trimmedQuery);

  for (const result of results.slice(0, limit)) {
    const doc = docsById.get(result.id);
    if (!doc) continue;

    // Apply additional filters if provided
    if (filters?.level !== undefined && doc.level !== filters.level) continue;
    if (
      filters?.hasHeadings !== undefined &&
      doc.content.headings.length > 0 !== filters.hasHeadings
    )
      continue;

    // Get match terms for highlighting
    const matchTerms = result.match ? Object.keys(result.match) : [];

    // Find which heading matched (if any)
    let matchedHeading: SubHeading | undefined;
    for (const heading of doc.content.headings) {
      const normalizedTitle = normalizeForComparison(heading.title);
      const normalizedBody = normalizeForComparison(heading.body);

      if (
        matchTerms.some(
          (term) => normalizedTitle.includes(term) || normalizedBody.includes(term),
        ) ||
        normalizedTitle.includes(normalizedQuery) ||
        normalizedBody.includes(normalizedQuery)
      ) {
        matchedHeading = heading;
        break;
      }
    }

    // Extract contextual snippet from the stored bodyText
    const bodyText = result.bodyText as string | undefined;
    let matchedText = extractContextualSnippet(bodyText, trimmedQuery, matchTerms);

    // Fallback to heading body or introduction if no snippet found
    if (!matchedText) {
      if (matchedHeading?.body) {
        matchedText = matchedHeading.body;
      } else if (doc.content.introduction) {
        matchedText = doc.content.introduction;
      } else if (doc.content.headings.length > 0) {
        matchedText = doc.content.headings[0]?.body;
      }
    }

    searchResults.push({
      ...doc,
      matchedHeading,
      matchedText,
      highlightedTitle: highlightMatches(doc.title, result.match),
      relevanceScore: result.score,
    });
  }

  return searchResults;
}

export function findBySlug(slug: string): Docs[] {
  if (!slug.trim()) return [];

  const targetUrlPrefix = `/${slug}`;

  const results = allDocs.filter((doc: Docs) => {
    const docUrlNormalized = doc.url.startsWith("/") ? doc.url : `/${doc.url}`;
    const targetUrlNormalized = targetUrlPrefix.startsWith("/")
      ? targetUrlPrefix
      : `/${targetUrlPrefix}`;

    if (docUrlNormalized === targetUrlNormalized) {
      return true;
    }

    if (docUrlNormalized.startsWith(`${targetUrlNormalized}/`)) {
      const pathAfterSlug = docUrlNormalized.substring(`${targetUrlNormalized}/`.length);
      const segments = pathAfterSlug.split("/").filter(Boolean);
      return segments.length === 1;
    }
    return false;
  });

  results.sort((a, b) => a.title.localeCompare(b.title));

  return results;
}

export function getAllTopLevelDocs(): Docs[] {
  const results = allDocs.filter((doc) => doc.level === 0);
  results.sort((a, b) => a.title.localeCompare(b.title));
  return results;
}

export function getChildren(parent: string): Docs[] {
  const results = allDocs.filter((doc) => doc.parent === parent);
  results.sort((a, b) => a.title.localeCompare(b.title));
  return results;
}

export function getDocumentById(id: string): Docs | null {
  return docsById.get(id) || null;
}

export function getAvailableSections(): string[] {
  const sections = new Set<string>();
  allDocs.forEach((doc) => {
    if (doc.section) {
      sections.add(doc.section);
    }
  });
  return Array.from(sections).sort();
}

const SECTION_DISPLAY_NAMES = new Map<string, string>([
  ["canticos", "Cânticos"],
  ["devocionario", "Devocionário"],
  ["fe", "Fé"],
  ["missal", "Missal"],
  ["ritual", "Ritual"],
]);

export function getSectionDisplayName(section: string): string {
  return SECTION_DISPLAY_NAMES.get(section) ?? section;
}
