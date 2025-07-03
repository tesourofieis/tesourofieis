import removeDiacritics from "diacritics";
import React, {
  createContext,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Docs } from "~/app/(tabs)/more";
import rawDocs from "../../assets/search-index.json";

class UniversalSearchEngine {
  private index = null;
  private isIndexing = false;
  private indexingProgress = 0;

  normalize(text: string) {
    return removeDiacritics.remove(text.toLowerCase());
  }

  async buildIndex(
    docs: Docs[],
    onProgress?: Dispatch<SetStateAction<number>>,
  ) {
    const documents = {};
    const terms = {};
    const titleTerms = {};
    const ngrams = {};
    const batchSize = 50;

    for (let i = 0; i < docs.length; i += batchSize) {
      const batch = docs.slice(i, i + batchSize);

      for (const doc of batch) {
        const normalizedDoc = {
          ...doc,
          title: this.normalize(doc.title),
          body: this.normalize(doc.body),
        };

        documents[doc.id] = doc;

        const titleWords = this.tokenize(normalizedDoc.title);
        const bodyWords = this.tokenize(normalizedDoc.body);
        const allWords = [...titleWords, ...bodyWords];

        titleWords.forEach((word) => {
          if (!titleTerms[word]) titleTerms[word] = [];
          titleTerms[word].push(doc.id);
        });

        allWords.forEach((word) => {
          if (!terms[word]) terms[word] = [];
          terms[word].push(doc.id);
        });

        const text = `${normalizedDoc.title} ${normalizedDoc.body}`;
        for (let j = 0; j < text.length - 2; j++) {
          const trigram = text.slice(j, j + 3);
          if (!ngrams[trigram]) ngrams[trigram] = [];
          if (!ngrams[trigram].includes(doc.id)) {
            ngrams[trigram].push(doc.id);
          }
        }
      }

      this.indexingProgress = Math.round(((i + batchSize) / docs.length) * 100);
      onProgress?.(this.indexingProgress);

      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    return { documents, terms, titleTerms, ngrams };
  }

  tokenize(text) {
    return text.replace(/[^\w\s]/g, " ").split(/\s+/);
  }

  calculateScore(docId, query, queryTerms) {
    const doc = this.index.documents[docId];
    const normalizedTitle = this.normalize(doc.title);
    const normalizedBody = this.normalize(doc.body);
    const queryLower = this.normalize(query);

    let score = 0;

    if (normalizedTitle.includes(queryLower)) score += 100;
    if (normalizedTitle.startsWith(queryLower)) score += 50;

    let titleMatches = 0;
    let bodyMatches = 0;

    queryTerms.forEach((term) => {
      const titleCount = (normalizedTitle.match(new RegExp(term, "g")) || [])
        .length;
      const bodyCount = (normalizedBody.match(new RegExp(term, "g")) || [])
        .length;
      titleMatches += titleCount;
      bodyMatches += bodyCount;
    });

    score += titleMatches * 10;
    score += bodyMatches * 2;
    score -= doc.title.length * 0.1;

    return score;
  }

  async initialize(
    docs: Docs[],
    onProgress?: Dispatch<SetStateAction<number>>,
  ) {
    if (this.isIndexing) return;
    this.isIndexing = true;
    this.index = await this.buildIndex(docs, onProgress);
    this.isIndexing = false;
  }

  isReady() {
    return this.index !== null && !this.isIndexing;
  }

  search(query, limit = 15) {
    if (!this.index || !query.trim()) return [];

    const normalizedQuery = this.normalize(query);
    const queryTerms = this.tokenize(normalizedQuery);
    const candidateIds = new Set();

    queryTerms.forEach((term) => {
      this.index.terms[term]?.forEach((id) => candidateIds.add(id));
      this.index.titleTerms[term]?.forEach((id) => candidateIds.add(id));

      Object.keys(this.index.terms).forEach((indexTerm) => {
        if (indexTerm.includes(term) || term.includes(indexTerm)) {
          this.index.terms[indexTerm].forEach((id) => candidateIds.add(id));
        }
      });
    });

    if (candidateIds.size === 0) {
      for (let i = 0; i < normalizedQuery.length - 2; i++) {
        const trigram = normalizedQuery.slice(i, i + 3);
        this.index.ngrams[trigram]?.forEach((id) => candidateIds.add(id));
      }
    }

    return Array.from(candidateIds)
      .map((id: string) => ({
        doc: this.index.documents[id],
        score: this.calculateScore(id, normalizedQuery, queryTerms),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((r) => r.doc);
  }

  findBySlug(slug: string) {
    if (!this.index || !slug) return [];

    const targetPath = `/${slug}/`;
    return Object.values(this.index.documents).filter((doc: Docs) => {
      if (!doc.url || !doc.url.includes(targetPath)) return false;

      const pathAfterSlug = doc.url.substring(
        doc.url.indexOf(targetPath) + targetPath.length,
      );
      const segments = pathAfterSlug.split("/").filter(Boolean);

      return segments.length === 1;
    });
  }

  getDocumentById(id) {
    return this.index?.documents[id] || null;
  }
}

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchEngine] = useState(() => new UniversalSearchEngine());
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);
  const [indexingProgress, setIndexingProgress] = useState(0);
  const initializationRef = useRef(false);

  const initializeSearch = useCallback(async () => {
    if (initializationRef.current) return;
    initializationRef.current = true;

    try {
      await searchEngine.initialize(rawDocs, setIndexingProgress);
      setIsReady(true);
    } catch (e) {
      console.error("Failed to initialize search engine", e);
      setError("Failed to initialize search");
    }
  }, [searchEngine]);

  useEffect(() => {
    const initializeInBackground = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      initializeSearch();
    };

    initializeInBackground();
  }, [initializeSearch]);

  const value = useMemo(
    () => ({
      searchEngine,
      isReady,
      error,
      indexingProgress,
      initializeSearch,
    }),
    [isReady, error, indexingProgress, initializeSearch],
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

export const useTreeBuilder = () => {
  const { searchEngine, isReady } = useSearch();

  const buildTree = useCallback(
    (rootSlug?: string) => {
      if (!isReady) return null;

      if (rootSlug) {
        return searchEngine.findBySlug(rootSlug);
      }

      // Build complete tree structure from all documents
      const allDocs = Object.values(searchEngine.index.documents);
      const tree = {};

      allDocs.forEach((doc: Docs) => {
        if (!doc.url) return;

        const segments = doc.url.split("/").filter(Boolean);
        let current = tree;

        segments.forEach((segment, index) => {
          if (!current[segment]) {
            current[segment] = { children: {}, docs: [] };
          }

          if (index === segments.length - 1) {
            current[segment].docs.push(doc);
          } else {
            current = current[segment].children;
          }
        });
      });

      return tree;
    },
    [searchEngine, isReady],
  );

  return { buildTree, isReady };
};
