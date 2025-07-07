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

const findMatchingHeading = (
  doc: Docs,
  query: string
): { heading?: SubHeading; matchedText?: string } => {
  const normalizedQuery = normalize(query.toLowerCase());
  const queryWords = normalizedQuery
    .split(/\s+/)
    .filter((word) => word.length > 1);

  // Check introduction first
  if (doc.content.introduction) {
    const normalizedIntro = normalize(doc.content.introduction);
    const introMatches = queryWords.some((word) =>
      normalizedIntro.includes(word)
    );
    if (introMatches) {
      return {
        matchedText: doc.content.introduction,
      };
    }
  }

  // Check each heading's title and body
  for (const heading of doc.content.headings) {
    const normalizedTitle = normalize(heading.title);
    const normalizedBody = normalize(heading.body);

    const titleMatches = queryWords.some((word) =>
      normalizedTitle.includes(word)
    );
    const bodyMatches = queryWords.some((word) =>
      normalizedBody.includes(word)
    );

    if (titleMatches || bodyMatches) {
      const matchedText = heading.body;

      return {
        heading,
        matchedText: matchedText || heading.title,
      };
    }
  }

  // Check comment as fallback
  if (doc.content.comment) {
    const normalizedComment = normalize(doc.content.comment);
    const commentMatches = queryWords.some((word) =>
      normalizedComment.includes(word)
    );
    if (commentMatches) {
      return {
        matchedText: doc.content.comment,
      };
    }
  }

  return {};
};

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

    const ftsResultRows: {
      id: string;
      title: string;
      search_body: string;
    }[] = db.all(
      sql`
        SELECT
          id,
          highlight(docs_fts, 1, '<b>', '</b>') as title,
          highlight(docs_fts, 2, '<b>', '</b>') as search_body
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

    const ftsMap = new Map(ftsResultRows.map((row) => [row.id, row]));

    const orderedResults = docIds
      .map((id) => {
        const doc = docsDataRows.find((doc) => doc.id === id);
        const ftsResult = ftsMap.get(id);
        if (doc && ftsResult) {
          const mappedDoc = mapDbDocToDocs(doc);
          const { heading, matchedText } = findMatchingHeading(
            mappedDoc,
            normalizedQuery
          );

          return {
            ...mappedDoc,
            matchedHeading: heading,
            matchedText,
            highlightedTitle: ftsResult.title,
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
