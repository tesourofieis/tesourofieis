import type { Docs, SubHeading } from "~/components/Drawer";
import rawDocsData from "../../assets/docs.json";

const allDocs: Docs[] = rawDocsData as Docs[];

export interface SearchResult extends Docs {
  matchedHeading?: SubHeading;
  matchedText?: string;
  highlightedTitle?: string;
}

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const escapeRegExp = (text: string) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

export function search(query: string, limit = 15): SearchResult[] {
  const normalizedQuery = normalize(query.trim());

  if (!normalizedQuery) {
    return [];
  }

  const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);

  const filteredAndRankedDocs: {
    doc: Docs;
    rank: number;
    matchedContentForSnippet?: string;
  }[] = [];

  for (const doc of allDocs) {
    let rank = 0;
    let matchedContentForSnippet: string | undefined;

    const fullSearchableBody = [
      doc.title,
      doc.content.introduction,
      ...doc.content.headings.map((h) => `${h.title} ${h.body}`),
      doc.content.comment,
    ]
      .filter((s): s is string => typeof s === "string")
      .map(normalize)
      .join(" ");

    if (fullSearchableBody.includes(normalizedQuery)) {
      rank += 100;
    }

    for (const term of queryTerms) {
      if (fullSearchableBody.includes(term)) {
        rank += 10;
      }
    }

    if (normalize(doc.title).includes(normalizedQuery)) {
      rank += 200;
      if (!matchedContentForSnippet) matchedContentForSnippet = doc.title;
    }

    for (const heading of doc.content.headings) {
      if (normalize(heading.title).includes(normalizedQuery)) {
        rank += 150;
        if (!matchedContentForSnippet) matchedContentForSnippet = heading.title;
      }
      if (normalize(heading.body).includes(normalizedQuery)) {
        rank += 50;
        if (!matchedContentForSnippet) matchedContentForSnippet = heading.body;
      }
    }

    if (
      doc.content.introduction &&
      normalize(doc.content.introduction).includes(normalizedQuery)
    ) {
      rank += 30;
      if (!matchedContentForSnippet)
        matchedContentForSnippet = doc.content.introduction;
    }

    if (
      doc.content.comment &&
      normalize(doc.content.comment).includes(normalizedQuery)
    ) {
      rank += 10;
      if (!matchedContentForSnippet)
        matchedContentForSnippet = doc.content.comment;
    }

    if (rank > 0) {
      filteredAndRankedDocs.push({
        doc: doc,
        rank: rank,
        matchedContentForSnippet:
          matchedContentForSnippet || fullSearchableBody,
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
