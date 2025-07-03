import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Docs as RawDocsType } from "~/app/(tabs)/more";
import { getDb, mapDbDocToDocs } from "~/db/db";
import { docs as docsSchema } from "~/db/schema";
import { eq, like, sql } from "drizzle-orm";

type DrizzleDocSelect = typeof docsSchema.$inferSelect;

type Docs = RawDocsType;

interface SearchContextType {
  search: (query: string, limit?: number) => Promise<Docs[]>;
  getDocumentById: (id: string) => Promise<Docs | null>;
  findBySlug: (slug: string) => Promise<Docs[]>;
  isReady: boolean;
  error: string | null;
  indexingProgress: number;
  currentQuery: string;
  setCurrentQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentQuery, setCurrentQuery] = useState("");

  useEffect(() => {
    const initializeDb = async () => {
      try {
        console.log("Initializing database connection...");
        await getDb();
        setIsReady(true);
        console.log("Database ready for use.");
      } catch (e: any) {
        console.error("Failed to initialize database:", e);
        setError(e.message || "Failed to load database.");
      }
    };
    initializeDb();
  }, []);

  const search = useCallback(
    async (query: string, limit = 15): Promise<Docs[]> => {
      if (!isReady) throw new Error("Database not ready for search.");
      if (!query.trim()) return [];

      try {
        const db = await getDb();

        const normalizedQuery = query.trim();
        const searchTerm = normalizedQuery
          .split(/\s+/)
          .map((word) => `"${word}"*`) // Quote words to handle potential FTS operators
          .join(" "); // Use space for an implicit AND, or 'NEAR' for proximity

        const ftsResultRows: { id: string; title: string; body: string }[] =
          db.all(
            sql`
              SELECT
                id,
                highlight(docs_fts, 1, '<b>', '</b>') as title, -- Highlight column 1 (title)
                highlight(docs_fts, 2, '<b>', '</b>') as body   -- Highlight column 2 (body)
              FROM docs_fts
              WHERE docs_fts MATCH ${searchTerm}
              ORDER BY rank
              LIMIT ${limit};
            `
          );

        if (ftsResultRows.length === 0) return [];

        const docIds = ftsResultRows.map((row) => row.id).filter(Boolean);

        const docsDataRows = db
          .select()
          .from(docsSchema)
          .where(
            sql`${docsSchema.id} IN (${sql.join(
              docIds.map((id) => sql`${id}`),
              sql`, `
            )})`
          )
          // Drizzle's `orderBy` doesn't have a direct `INSTR` equivalent for custom ordering like this.
          // For preserving the FTS rank order, you'll need to do the sorting in JavaScript
          // after fetching, or construct a more complex SQL query with Drizzle's `sql` template.
          // For now, we'll fetch and sort in JS as your original code did.
          .all();

        // Re-order based on FTS rank (docIds order)
        const orderedResults = docIds
          .map((id) => docsDataRows.find((doc) => doc.id === id))
          .filter(Boolean) as DrizzleDocSelect[];

        return orderedResults.map(mapDbDocToDocs);
      } catch (e: any) {
        console.error("Drizzle search error:", e);
        throw new Error(`Search failed: ${e.message}`);
      }
    },
    [isReady]
  );

  const getDocumentById = useCallback(
    async (id: string): Promise<Docs | null> => {
      if (!isReady) {
        throw new Error("Database not ready for document lookup.");
      }
      try {
        const db = await getDb();
        const result = db
          .select()
          .from(docsSchema)
          .where(eq(docsSchema.id, id))
          .get();

        if (result) {
          return mapDbDocToDocs(result);
        }
        return null;
      } catch (e: any) {
        console.error("Drizzle getDocumentById error:", e);
        throw new Error(`Get document failed: ${e.message}`);
      }
    },
    [isReady]
  );

  const findBySlug = useCallback(
    async (slug: string): Promise<Docs[]> => {
      if (!isReady) {
        throw new Error("Database not ready for findBySlug.");
      }
      if (!slug.trim()) return [];

      try {
        const db = await getDb();
        const targetUrlPrefix = `/${slug}/`;

        const results = db
          .select()
          .from(docsSchema)
          .where(like(docsSchema.url, `${targetUrlPrefix}%`))
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
    },
    [isReady]
  );

  const value = useMemo(
    () => ({
      search,
      getDocumentById,
      findBySlug,
      isReady,
      error,
      indexingProgress: isReady ? 100 : 0,
      currentQuery,
      setCurrentQuery,
    }),
    [search, getDocumentById, findBySlug, isReady, error, currentQuery]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within a SearchProvider");
  return ctx;
};
