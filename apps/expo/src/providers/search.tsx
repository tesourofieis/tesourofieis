import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import removeDiacritics from "diacritics";
import rawDocs from "../../assets/search-index.json";
import { Docs } from "~/app/(tabs)/more";

class UniversalSearchEngine {
  private index = null;
  private isIndexing = false;

  normalize(text) {
    return removeDiacritics.remove(text.toLowerCase());
  }

  async buildIndex(docs) {
    const documents = {};
    const terms = {};
    const titleTerms = {};
    const ngrams = {};

    for (const doc of docs) {
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
      for (let i = 0; i < text.length - 2; i++) {
        const trigram = text.slice(i, i + 3);
        if (!ngrams[trigram]) ngrams[trigram] = [];
        if (!ngrams[trigram].includes(doc.id)) {
          ngrams[trigram].push(doc.id);
        }
      }

      if (docs.length > 1000 && Object.keys(documents).length % 100 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
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

  async initialize(docs) {
    if (this.isIndexing) return;
    this.isIndexing = true;
    this.index = await this.buildIndex(docs);
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
        doc.url.indexOf(targetPath) + targetPath.length
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

  useEffect(() => {
    (async () => {
      try {
        await searchEngine.initialize(rawDocs);
        setIsReady(true);
      } catch (e) {
        console.error("Failed to initialize search engine", e);
        setError("Failed to initialize search");
      }
    })();
  }, []);

  const value = useMemo(
    () => ({
      searchEngine,
      isReady,
      error,
    }),
    [isReady, error]
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
