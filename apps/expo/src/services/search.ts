import { getDb, mapDbDocToDocs } from "~/db/db";
import { docs } from "~/db/schema";
import { eq, sql } from "drizzle-orm";
import { Docs } from "~/app/(tabs)/more";

export type DrizzleDocSelect = typeof docs.$inferSelect;

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

export async function search(query: string, limit = 15): Promise<Docs[]> {
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

    const orderedResults = docIds
      .map((id) => docsDataRows.find((doc) => doc.id === id))
      .filter(Boolean) as DrizzleDocSelect[];

    return orderedResults.map(mapDbDocToDocs);
  } catch (e: any) {
    console.error("Drizzle search error:", e);
    throw new Error(`Search failed: ${e.message}`);
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
