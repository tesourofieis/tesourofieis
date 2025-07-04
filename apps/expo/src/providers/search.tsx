import { eq, sql } from "drizzle-orm";
import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Docs } from "~/app/(tabs)/more";
import { getDb, mapDbDocToDocs } from "~/db/db";
import { docs as docsSchema } from "~/db/schema";

type DrizzleDocSelect = typeof docsSchema.$inferSelect;

interface SearchContextType {
  search: (query: string, limit?: number) => Promise<Docs[]>;
  getDocumentById: (id: string) => Promise<Docs | null>;
  getAllTopLevelDocs: () => Promise<Docs[]>;
  getChildren: (parent: string) => Promise<Docs[]>; // NEW: Added for lazy loading
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

  const getAllTopLevelDocs = useCallback(async (): Promise<Docs[]> => {
    if (!isReady) {
      console.warn("Database not ready, cannot fetch top-level docs.");
      return [];
    }
    try {
      const db = await getDb();
      const results = db
        .select()
        .from(docsSchema)
        .where(eq(docsSchema.level, 0)) // Fetch only level 0 docs as top-level
        .all();
      return results.map(mapDbDocToDocs);
    } catch (e: any) {
      console.error("Failed to fetch top-level documents:", e);
      throw new Error(`Failed to load initial documents: ${e.message}`);
    }
  }, [isReady]);

  // NEW: Function to fetch children of a parent document
  const getChildren = useCallback(
    async (parent: string): Promise<Docs[]> => {
      if (!isReady) {
        console.warn("Database not ready, cannot fetch children.");
        return [];
      }
      try {
        const db = await getDb();
        const results = db
          .select()
          .from(docsSchema)
          .where(eq(docsSchema.parent, parent))
          .all();
        return results.map(mapDbDocToDocs);
      } catch (e: any) {
        console.error("Failed to fetch children:", e);
        throw new Error(`Failed to load children: ${e.message}`);
      }
    },
    [isReady],
  );

  const search = useCallback(
    async (query: string, limit = 15): Promise<Docs[]> => {
      if (!isReady) throw new Error("Database not ready for search.");
      if (!query.trim()) return [];

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
            `,
        );

        if (ftsResultRows.length === 0) return [];

        const docIds = ftsResultRows.map((row) => row.id).filter(Boolean);

        const docsDataRows = db
          .select()
          .from(docsSchema)
          .where(
            sql`${docsSchema.id} IN (${sql.join(
              docIds.map((id) => sql`${id}`),
              sql`, `,
            )})`,
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
    },
    [isReady],
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
    [isReady],
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
          .where(sql`${docsSchema.url} LIKE ${targetUrlPrefix + "%"}`)
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
    [isReady],
  );

  const value = useMemo(
    () => ({
      search,
      getDocumentById,
      getAllTopLevelDocs,
      getChildren, // NEW: Included in context value
      findBySlug,
      isReady,
      error,
      indexingProgress: isReady ? 100 : 0,
      currentQuery,
      setCurrentQuery,
    }),
    [
      search,
      getDocumentById,
      getAllTopLevelDocs,
      getChildren,
      findBySlug,
      isReady,
      error,
      currentQuery,
    ],
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
