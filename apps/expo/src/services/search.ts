import { getDb, mapDbDocToDocs } from "~/db/db";
import { docs } from "~/db/schema";
import { eq, sql } from "drizzle-orm";
import { Docs, SubHeading } from "~/app/(tabs)/more";

export type DrizzleDocSelect = typeof docs.$inferSelect;

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

const extractContextualSnippet = (
  fullText: string | undefined | null,
  query: string,
  wordContext = 10 // Number of words before and after
): string => {
  if (!fullText || !query.trim()) {
    return fullText || "";
  }

  const normalizedFullText = normalize(fullText);
  const normalizedQuery = normalize(query.trim());
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);

  let bestSnippet = "";
  let bestMatchIndex = -1;

  // Find the first occurrence of any query word to get a starting point
  for (const qWord of queryWords) {
    const index = normalizedFullText.indexOf(qWord);
    if (index !== -1) {
      bestMatchIndex = index;
      break;
    }
  }

  if (bestMatchIndex === -1) {
    // If no specific match found (e.g., FTS matched on synonyms not in raw text string),
    // return a default truncated snippet or the full text.
    return fullText.length > 200
      ? fullText.substring(0, 200) + "..."
      : fullText;
  }

  // --- Logic for surrounding words ---
  const words = fullText.split(/\s+/);
  let wordIndex = 0;
  let charCount = 0;
  for (let i = 0; i < words.length; i++) {
    if (
      charCount <= bestMatchIndex &&
      charCount + words[i].length >= bestMatchIndex
    ) {
      wordIndex = i;
      break;
    }
    charCount += words[i].length + 1; // +1 for space
  }

  const startIndex = Math.max(0, wordIndex - wordContext);
  const endIndex = Math.min(words.length, wordIndex + wordContext + 1); // +1 because slice is exclusive

  let snippetWords = words.slice(startIndex, endIndex);

  // Add ellipses if truncated
  if (startIndex > 0) {
    snippetWords.unshift("...");
  }
  if (endIndex < words.length) {
    snippetWords.push("...");
  }

  bestSnippet = snippetWords.join(" ");

  // --- Optional: Logic for finding nearest punctuation for a "quote" ---
  // This is more complex and depends on desired punctuation.
  // For example, to find a sentence:
  const sentenceEndings = /[.!?。？！]/; // Common sentence endings
  const fullSentenceMatch = fullText.match(
    new RegExp(`[^.!?。？！]*${normalizedQuery}[^.!?。？！]*[.!?。？！]?`, "i")
  );
  if (fullSentenceMatch && fullSentenceMatch[0]) {
    // Prioritize full sentence if it's not too long and contains the match
    if (fullSentenceMatch[0].length < 300) {
      // Limit sentence length for snippet
      bestSnippet = fullSentenceMatch[0].trim();
    }
  }

  return bestSnippet;
};

// Modify search function
export async function search(
  query: string,
  limit = 15
): Promise<SearchResult[]> {
  try {
    const db = await getDb();
    const normalizedQuery = query.trim();
    const searchTerm = normalizedQuery
      .split(/\s+/)
      .map((word) => `"${word}"*`)
      .join(" ");

    // For FTS, we still get the highlighted title.
    // We DON'T use highlight(docs_fts, 2, ...) anymore if we want custom snippets.
    const ftsResultRows: {
      id: string;
      title: string; // FTS highlighted title
      // We don't need search_body here if we're generating custom snippets.
      // However, if you want FTS rank for ordering, keep the FTS query as is.
    }[] = db.all(
      sql`
        SELECT
          id,
          highlight(docs_fts, 1, '<b>', '</b>') as title -- Still get highlighted title
        FROM docs_fts
        WHERE docs_fts MATCH ${searchTerm}
        ORDER BY rank
        LIMIT ${limit};
      `
    );

    const docIds = ftsResultRows.map((row) => row.id).filter(Boolean);
    const docsDataRows = db
      .select()
      .from(docs)
      .where(
        sql`${docs.id} IN (${sql.join(
          docIds.map((id) => sql`${id}`),
          sql`, `
        )})`
      )
      .all();

    const ftsTitleMap = new Map(
      ftsResultRows.map((row) => [row.id, row.title])
    );

    const orderedResults = docIds
      .map((id) => {
        const doc = docsDataRows.find((d) => d.id === id);
        const highlightedTitle = ftsTitleMap.get(id);

        if (doc) {
          const mappedDoc = mapDbDocToDocs(doc);

          let matchedHeading: SubHeading | undefined;
          let rawMatchedContent: string | undefined; // This will hold the full raw text of the matched section

          // Try to find the section that contains the query
          // Prioritize headings, then introduction, then comment
          const sectionsToCheck = [
            { text: mappedDoc.content.introduction, type: "intro" },
            ...mappedDoc.content.headings.map((h) => ({
              text: h.title,
              type: "heading-title",
              heading: h,
            })),
            ...mappedDoc.content.headings.map((h) => ({
              text: h.body,
              type: "heading-body",
              heading: h,
            })),
            { text: mappedDoc.content.comment, type: "comment" },
          ];

          for (const section of sectionsToCheck) {
            if (
              section.text &&
              normalize(section.text).includes(normalizedQuery)
            ) {
              rawMatchedContent = section.text;
              if (section.type.startsWith("heading") && section.heading) {
                matchedHeading = section.heading;
              }
              break; // Found the first matching section, break
            }
          }

          // If no specific section matched directly (maybe FTS matched a synonym or an edge case)
          // Fallback to introduction or first heading body
          if (!rawMatchedContent) {
            rawMatchedContent =
              mappedDoc.content.introduction ||
              (mappedDoc.content.headings.length > 0
                ? mappedDoc.content.headings[0].body
                : undefined) ||
              mappedDoc.content.comment;
          }

          const contextualSnippet = extractContextualSnippet(
            rawMatchedContent,
            query
          );

          return {
            ...mappedDoc,
            matchedHeading,
            matchedText: contextualSnippet, // This is your custom snippet
            highlightedTitle: highlightedTitle,
          } as SearchResult;
        }
        return null;
      })
      .filter(Boolean) as SearchResult[];

    return orderedResults;
  } catch (e: any) {
    console.error("Drizzle search error:", e);
    throw new Error(`Search failed: ${e.message}`);
  }
}

export async function findBySlug(slug: string) {
  if (!slug.trim()) return [];

  try {
    const db = await getDb();
    const targetUrlPrefix = `/${slug}/`;

    const results = db
      .select()
      .from(docs)
      .where(sql`${docs.url} LIKE ${targetUrlPrefix + "%"}`)
      .all();

    const filteredResults = results.filter((doc: DrizzleDocSelect) => {
      if (!doc.url) return false;
      if (!doc.url.startsWith(targetUrlPrefix)) return false;
      const pathAfterSlug = doc.url.substring(targetUrlPrefix.length);
      const segments = pathAfterSlug.split("/").filter(Boolean);
      return segments.length === 1;
    });

    return filteredResults.map(mapDbDocToDocs);
  } catch (e: any) {
    console.error("Drizzle findBySlug error:", e);
    throw new Error(`Find by slug failed: ${e.message}`);
  }
}

export async function getAllTopLevelDocs(): Promise<Docs[]> {
  try {
    const db = await getDb();
    const results = db.select().from(docs).where(eq(docs.level, 0)).all();
    return results.map(mapDbDocToDocs);
  } catch (e: any) {
    console.error("Failed to fetch top-level documents:", e);
    throw new Error(`Failed to load initial documents: ${e.message}`);
  }
}

export async function getChildren(parent: string) {
  try {
    const db = await getDb();
    const results = db.select().from(docs).where(eq(docs.parent, parent)).all();
    return results.map(mapDbDocToDocs);
  } catch (e: any) {
    console.error("Failed to fetch children:", e);
    throw new Error(`Failed to load children: ${e.message}`);
  }
}

export async function getDocumentById(id: string) {
  try {
    const db = await getDb();
    const result = db.select().from(docs).where(eq(docs.id, id)).get();

    if (result) {
      return mapDbDocToDocs(result);
    }
    return null;
  } catch (e: any) {
    console.error("Drizzle getDocumentById error:", e);
    throw new Error(`Get document failed: ${e.message}`);
  }
}
