import type { Docs, SubHeading } from "~/components/Drawer";
import rawDocsData from "../../assets/docs.json";

const allDocs: Docs[] = rawDocsData as Docs[];

// Create search index for faster lookups
let searchIndex: Map<string, Docs[]> | null = null;
let normalizedTitleIndex: Map<string, Docs[]> | null = null;

const buildSearchIndex = () => {
  if (searchIndex && normalizedTitleIndex) return;

  searchIndex = new Map();
  normalizedTitleIndex = new Map();

  allDocs.forEach((doc) => {
    // Index by section
    if (doc.section) {
      const sectionKey = `section:${doc.section}`;
      if (!searchIndex!.has(sectionKey)) {
        searchIndex!.set(sectionKey, []);
      }
      searchIndex!.get(sectionKey)!.push(doc);
    }

    // Index by doc keywords array for fast lookups
    const docKeywords = (doc as any).keywords || [];
    docKeywords.forEach((keyword: string) => {
      if (!searchIndex!.has(keyword)) {
        searchIndex!.set(keyword, []);
      }
      searchIndex!.get(keyword)!.push(doc);
    });

    // Index title words for title-based searches
    const indexTitleWords = normalize(doc.title)
      .split(/\s+/)
      .filter((word) => word.length >= 2);
    indexTitleWords.forEach((word) => {
      if (!normalizedTitleIndex!.has(word)) {
        normalizedTitleIndex!.set(word, []);
      }
      normalizedTitleIndex!.get(word)!.push(doc);
    });
  });
};

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

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const escapeRegExp = (text: string) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// Simple Levenshtein distance for fuzzy matching
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix: number[][] = [];
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 === 0) return len2;
  if (len2 === 0) return len1;

  // Initialize matrix
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    if (matrix[0]) {
      matrix[0][j] = j;
    }
  }

  // Fill matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      const currentRow = matrix[i];
      const prevRow = matrix[i - 1];
      const currentCell = matrix[i]?.[j - 1];

      if (currentRow && prevRow && currentCell !== undefined) {
        currentRow[j] = Math.min(
          prevRow[j]! + 1, // deletion
          currentCell + 1, // insertion
          prevRow[j - 1]! + cost, // substitution
        );
      }
    }
  }

  return matrix[len1]?.[len2] ?? 0;
};

const fuzzyMatch = (query: string, text: string, threshold = 0.7): boolean => {
  const normalizedQuery = normalize(query);
  const normalizedText = normalize(text);

  if (normalizedText.includes(normalizedQuery)) return true;

  const words = normalizedText.split(/\s+/);
  const queryWords = normalizedQuery.split(/\s+/);

  for (const queryWord of queryWords) {
    let bestMatch = false;
    for (const word of words) {
      if (word.length >= 3 && queryWord.length >= 3) {
        const distance = levenshteinDistance(queryWord, word);
        const similarity =
          1 - distance / Math.max(queryWord.length, word.length);
        if (similarity >= threshold) {
          bestMatch = true;
          break;
        }
      }
    }
    if (!bestMatch && queryWord.length >= 3) {
      return false; // All query words must have a fuzzy match
    }
  }

  return queryWords.length > 0;
};

const extractContextualSnippet = (
  fullText: string | undefined | null,
  query: string,
  wordContext = 10,
): string => {
  if (!fullText || !query.trim()) {
    return fullText || "";
  }

  const normalizedFullText = normalize(fullText);
  const normalizedQuery = normalize(query.trim());
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);

  if (queryWords.length === 0) {
    return fullText.length > 200
      ? `${fullText.substring(0, 200)}...`
      : fullText;
  }

  const queryRegex = new RegExp(queryWords.map(escapeRegExp).join("|"), "gi");

  let bestSnippet = "";
  let bestMatchIndex = -1;

  const match = normalizedFullText.match(queryRegex);
  if (match && match.index !== undefined) {
    bestMatchIndex = match.index;
  }

  if (bestMatchIndex === -1) {
    return fullText.length > 200
      ? `${fullText.substring(0, 200)}...`
      : fullText;
  }

  const words = fullText.split(/\s+/);
  let charCount = 0;
  let wordIndexAtMatch = 0;

  for (let i = 0; i < words.length; i++) {
    if (charCount + words[i]!.length >= bestMatchIndex) {
      wordIndexAtMatch = i;
      break;
    }
    charCount += words[i]!.length + 1;
  }

  const startIndex = Math.max(0, wordIndexAtMatch - wordContext);
  const endIndex = Math.min(words.length, wordIndexAtMatch + wordContext + 1);

  const snippetWords = words.slice(startIndex, endIndex);

  if (startIndex > 0) {
    snippetWords.unshift("...");
  }
  if (endIndex < words.length) {
    snippetWords.push("...");
  }

  bestSnippet = snippetWords.join(" ");

  const highlightRegex = new RegExp(
    `(${queryWords.map(escapeRegExp).join("|")})`,
    "gi",
  );
  bestSnippet = bestSnippet.replace(highlightRegex, "<b>$1</b>");

  return bestSnippet;
};

const highlightTitle = (title: string, query: string): string => {
  if (!query.trim()) return title;
  const normalizedQuery = normalize(query.trim());
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);

  if (queryWords.length === 0) return title;

  const highlightRegex = new RegExp(
    `(${queryWords.map(escapeRegExp).join("|")})`,
    "gi",
  );
  return title.replace(highlightRegex, "<b>$1</b>");
};

const calculateRelevanceScore = (
  doc: Docs,
  query: string,
  normalizedQuery: string,
  queryTerms: string[],
): { score: number; reasons: string[]; matchedContent?: string } => {
  let score = 0;
  const reasons: string[] = [];
  let matchedContent: string | undefined;

  // Title exact match (highest priority)
  if (normalize(doc.title).includes(normalizedQuery)) {
    score += 1000;
    reasons.push("Título contém termo exato");
    if (!matchedContent) matchedContent = doc.title;
  }

  // Title fuzzy match
  if (fuzzyMatch(query, doc.title)) {
    score += 500;
    reasons.push("Título similar");
    if (!matchedContent) matchedContent = doc.title;
  }

  // Title starts with query
  if (normalize(doc.title).startsWith(normalizedQuery)) {
    score += 800;
    reasons.push("Título inicia com termo");
  }

  // Section exact match
  if (doc.section && normalize(doc.section).includes(normalizedQuery)) {
    score += 300;
    reasons.push("Seção contém termo");
  }

  // Check headings
  for (const heading of doc.content.headings) {
    if (normalize(heading.title).includes(normalizedQuery)) {
      score += 600;
      reasons.push("Cabeçalho contém termo exato");
      if (!matchedContent) matchedContent = heading.title;
    } else if (fuzzyMatch(query, heading.title)) {
      score += 300;
      reasons.push("Cabeçalho similar");
      if (!matchedContent) matchedContent = heading.title;
    }

    if (normalize(heading.body).includes(normalizedQuery)) {
      score += 200;
      reasons.push("Conteúdo do cabeçalho contém termo");
      if (!matchedContent) matchedContent = heading.body;
    } else if (fuzzyMatch(query, heading.body)) {
      score += 100;
      reasons.push("Conteúdo do cabeçalho similar");
      if (!matchedContent) matchedContent = heading.body;
    }
  }

  // Introduction exact match
  if (
    doc.content.introduction &&
    normalize(doc.content.introduction).includes(normalizedQuery)
  ) {
    score += 150;
    reasons.push("Introdução contém termo");
    if (!matchedContent) matchedContent = doc.content.introduction;
  }

  // Comment match
  if (
    doc.content.comment &&
    normalize(doc.content.comment).includes(normalizedQuery)
  ) {
    score += 50;
    reasons.push("Comentário contém termo");
    if (!matchedContent) matchedContent = doc.content.comment;
  }

  // Bonus for multiple term matches using keywords and content
  const docKeywords = (doc as any).keywords || [];
  const termMatches = queryTerms.filter((term) => {
    // Check in keywords first (fast)
    if (docKeywords.includes(term)) return true;

    // Fallback to content search (slower but comprehensive)
    const fullText = normalize(
      [
        doc.title,
        doc.content.introduction,
        ...doc.content.headings.map((h) => `${h.title} ${h.excerpt || h.body}`),
        doc.content.comment,
      ]
        .filter(Boolean)
        .join(" "),
    );
    return fullText.includes(term);
  });

  if (termMatches.length > 1) {
    score += termMatches.length * 100;
    reasons.push(`Múltiplos termos encontrados (${termMatches.length})`);
  }

  // Bonus for shorter documents (more focused)
  if (doc.content.headings.length === 1) {
    score += 50;
    reasons.push("Documento focado");
  }

  // Penalty for very long documents
  if (doc.content.headings.length > 10) {
    score -= 25;
  }

  return { score, reasons, matchedContent };
};

export function search(
  query: string,
  limit = 15,
  filters?: SearchFilters,
): SearchResult[] {
  buildSearchIndex(); // Ensure index is built

  const normalizedQuery = normalize(query.trim());

  if (!normalizedQuery) {
    return [];
  }

  const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);

  // Use index for faster candidate selection
  let candidateDocs = new Set<Docs>();

  // Get candidates from title index
  queryTerms.forEach((term) => {
    if (normalizedTitleIndex!.has(term)) {
      normalizedTitleIndex!.get(term)!.forEach((doc) => candidateDocs.add(doc));
    }
  });

  // Get candidates from content index
  queryTerms.forEach((term) => {
    if (searchIndex!.has(term)) {
      searchIndex!.get(term)!.forEach((doc) => candidateDocs.add(doc));
    }
  });

  // If few indexed matches, add docs with body content that might match
  if (candidateDocs.size < 10) {
    const normalizedTerms = queryTerms.map((term) => normalize(term));
    allDocs.forEach((doc) => {
      // Check if body content contains any query terms
      const hasBodyMatch = doc.content.headings.some((heading) => {
        const normalizedBody = normalize(heading.body);
        return normalizedTerms.some((term) => normalizedBody.includes(term));
      });

      if (hasBodyMatch) {
        candidateDocs.add(doc);
      }
    });
  }

  // If still no matches, fall back to full search for fuzzy matching
  if (candidateDocs.size === 0) {
    candidateDocs = new Set(allDocs);
  }

  let docsToSearch = Array.from(candidateDocs);

  // Apply filters
  if (filters) {
    if (filters.sections && filters.sections.length > 0) {
      docsToSearch = docsToSearch.filter(
        (doc) => doc.section && filters.sections!.includes(doc.section),
      );
    }

    if (filters.level !== undefined) {
      docsToSearch = docsToSearch.filter((doc) => doc.level === filters.level);
    }

    if (filters.hasHeadings !== undefined) {
      docsToSearch = docsToSearch.filter((doc) =>
        filters.hasHeadings
          ? doc.content.headings.length > 0
          : doc.content.headings.length === 0,
      );
    }
  }

  const filteredAndRankedDocs: {
    doc: Docs;
    rank: number;
    matchedContentForSnippet?: string;
    reasons: string[];
  }[] = [];

  for (const doc of docsToSearch) {
    const relevanceData = calculateRelevanceScore(
      doc,
      query,
      normalizedQuery,
      queryTerms,
    );

    if (relevanceData.score > 0) {
      filteredAndRankedDocs.push({
        doc: doc,
        rank: relevanceData.score,
        matchedContentForSnippet: relevanceData.matchedContent,
        reasons: relevanceData.reasons,
      });
    }
  }

  filteredAndRankedDocs.sort((a, b) => {
    if (b.rank !== a.rank) {
      return b.rank - a.rank;
    }
    return a.doc.title.localeCompare(b.doc.title);
  });

  const searchResults: SearchResult[] = filteredAndRankedDocs
    .slice(0, limit)
    .map((item) => {
      let matchedHeading: SubHeading | undefined;

      for (const heading of item.doc.content.headings) {
        if (
          (item.matchedContentForSnippet &&
            normalize(heading.title).includes(normalizedQuery)) ||
          (item.matchedContentForSnippet &&
            normalize(heading.body).includes(normalizedQuery))
        ) {
          matchedHeading = heading;
          break;
        }
      }

      return {
        ...item.doc,
        matchedHeading: matchedHeading,
        matchedText: extractContextualSnippet(
          item.matchedContentForSnippet,
          query,
        ),
        highlightedTitle: highlightTitle(item.doc.title, query),
        relevanceScore: item.rank,
        searchReasons: item.reasons,
      };
    });

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
      const pathAfterSlug = docUrlNormalized.substring(
        `${targetUrlNormalized}/`.length,
      );
      const segments = pathAfterSlug.split("/").filter(Boolean);
      return segments.length === 1;
    }
    return false;
  });

  results.sort((a, b) => a.title.localeCompare(b.title));

  return results;
}

export function getAllTopLevelDocs(): Docs[] {
  console.debug("inside getAllTopLevelDocs (JSON)");
  const results = allDocs.filter((doc) => doc.level === 0);
  console.info(`Found ${results.length} top-level docs.`);
  results.sort((a, b) => a.title.localeCompare(b.title));
  return results;
}

export function getChildren(parent: string): Docs[] {
  const results = allDocs.filter((doc) => doc.parent === parent);
  results.sort((a, b) => a.title.localeCompare(b.title));
  return results;
}

export function getDocumentById(id: string): Docs | null {
  const result = allDocs.find((doc) => doc.id === id);
  return result || null;
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

export function getSectionDisplayName(section: string): string {
  const displayNames: Record<string, string> = {
    canticos: "Cânticos",
    devocionario: "Devocionário",
    fe: "Fé",
    missal: "Missal",
    ritual: "Ritual",
  };
  return displayNames[section] || section;
}
