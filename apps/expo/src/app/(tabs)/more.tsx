import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter, usePathname } from "expo-router";
import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
  Animated,
  ActivityIndicator,
  FlatList,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { COLORS } from "~/constants/Colors";
import rawDocs from "../../../assets/search-index.json";

interface Docs {
  id: string;
  title: string;
  body: string;
  url: string;
}

interface TreeNode {
  title: string;
  children: Record<string, TreeNode>;
  description?: string;
  link?: string;
}

class SearchIndexDB {
  private db: SQLite.SQLiteDatabase | null = null;

  async initialize() {
    this.db = await SQLite.openDatabaseAsync("search_index.db");
    
    await this.db.execAsync(`
      CREATE TABLE IF NOT EXISTS documents (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        body TEXT NOT NULL,
        url TEXT NOT NULL,
        search_text TEXT NOT NULL
      );
      
      CREATE INDEX IF NOT EXISTS idx_search_text ON documents(search_text);
      CREATE INDEX IF NOT EXISTS idx_title ON documents(title);
    `);
  }

  async indexDocuments(docs: Docs[]) {
    if (!this.db) throw new Error("Database not initialized");

    const existingCount = await this.db.getFirstAsync<{count: number}>(
      "SELECT COUNT(*) as count FROM documents"
    );

    if (existingCount?.count === docs.length) return;

    await this.db.execAsync("DELETE FROM documents");

    const insertStatement = await this.db.prepareAsync(
      "INSERT INTO documents (id, title, body, url, search_text) VALUES (?, ?, ?, ?, ?)"
    );

    for (const doc of docs) {
      const searchText = `${doc.title} ${doc.body}`.toLowerCase();
      await insertStatement.executeAsync([
        doc.id,
        doc.title,
        doc.body,
        doc.url,
        searchText
      ]);
    }

    await insertStatement.finalizeAsync();
  }

  async search(query: string, limit: number = 15): Promise<Docs[]> {
    if (!this.db || !query.trim()) return [];

    const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0);
    const likeConditions = searchTerms.map(() => "search_text LIKE ?").join(" AND ");
    const likeParams = searchTerms.map(term => `%${term}%`);

    const sql = `
      SELECT id, title, body, url 
      FROM documents 
      WHERE ${likeConditions}
      ORDER BY 
        CASE 
          WHEN title LIKE ? THEN 1
          WHEN title LIKE ? THEN 2
          ELSE 3
        END,
        LENGTH(title)
      LIMIT ?
    `;

    const params = [
      ...likeParams,
      `%${query.toLowerCase()}%`,
      `%${query.toLowerCase()}%`,
      limit
    ];

    const results = await this.db.getAllAsync<Docs>(sql, params);
    return results;
  }

  async getDocumentById(id: string): Promise<Docs | null> {
    if (!this.db) return null;
    
    const result = await this.db.getFirstAsync<Docs>(
      "SELECT id, title, body, url FROM documents WHERE id = ?",
      [id]
    );
    
    return result || null;
  }

  async close() {
    if (this.db) {
      await this.db.closeAsync();
      this.db = null;
    }
  }
}

const ANIMATION_DURATION = 200;
const INITIAL_RENDER_COUNT = 10;
const RENDER_BATCH_SIZE = 5;
const INDEXING_CHUNK_SIZE = 50;

const createHierarchy = (items: Docs[]): Record<string, TreeNode> => {
  const root: Record<string, TreeNode> = {};
  for (const { id, title, body, url } of items) {
    const parts = id.split("/").filter(Boolean);
    let current = root;
    for (let i = 0; i < parts.length; i++) {
      const key = parts[i];
      if (!current[key]) current[key] = { title: key, children: {} };
      if (i === parts.length - 1) {
        current[key].title = title;
        current[key].description = body.slice(0, 120);
        current[key].link = url;
      }
      current = current[key].children;
    }
  }
  return root;
};

const highlightText = (text: string, highlight?: string) => {
  if (!highlight || highlight.length < 2) return text;
  const lowerHighlight = highlight.toLowerCase();
  const lowerText = text.toLowerCase();
  const index = lowerText.indexOf(lowerHighlight);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <Text className="bg-sepia-200 dark:bg-sepia-700">
        {text.slice(index, index + highlight.length)}
      </Text>
      {text.slice(index + highlight.length)}
    </>
  );
};

const TreeItem = React.memo(
  ({
    node,
    path,
    level,
    expanded,
    toggleExpand,
    isActive,
    searchHighlight,
    currentPathname,
  }: {
    node: TreeNode;
    path: string;
    level: number;
    expanded: Record<string, boolean>;
    toggleExpand: (path: string) => void;
    isActive: boolean;
    searchHighlight?: string;
    currentPathname: string;
  }) => {
    const router = useRouter();
    const isDark = useColorScheme() === "dark";
    const hasKids = !!Object.keys(node.children).length;
    const isOpen = expanded[path];
    const handlePress = useCallback(() => {
      if (hasKids) toggleExpand(path);
      else if (node.link) router.push(node.link);
    }, [hasKids, node.link, path]);

    const renderChild = useCallback(
      ({ item: [key, child] }: any) => (
        <TreeItem
          node={child}
          path={`${path}/${key}`}
          level={level + 1}
          expanded={expanded}
          toggleExpand={toggleExpand}
          isActive={child.link === currentPathname}
          searchHighlight={searchHighlight}
          currentPathname={currentPathname}
        />
      ),
      [expanded, searchHighlight, currentPathname]
    );

    return (
      <View style={{ paddingLeft: level * 16 }}>
        <TouchableOpacity
          onPress={handlePress}
          className={`rounded-xl mx-4 my-1 py-3 px-4 flex-row items-center ${
            isActive
              ? "bg-sepia-200 dark:bg-sepia-700 border-l-3 border-accent"
              : "bg-sepia-100 dark:bg-sepia-800 border-l-3 border-sepia-200 dark:border-sepia-700"
          }`}
        >
          <View className="flex-1">
            <Text
              className={`${
                isActive ? "font-bold" : "font-semibold"
              } text-base text-${isDark ? "sepia-100" : "sepia-900"}`}
            >
              {highlightText(node.title, searchHighlight)}
            </Text>
            {node.description && node.description !== node.title && (
              <Text
                className="text-sepia-600 dark:text-sepia-300 text-xs mt-1"
                numberOfLines={2}
              >
                {highlightText(node.description, searchHighlight)}
              </Text>
            )}
          </View>
          <FontAwesome6
            name={
              hasKids ? (isOpen ? "chevron-up" : "chevron-down") : "arrow-right"
            }
            size={16}
            color={!isDark ? COLORS["800"] : COLORS["200"]}
          />
        </TouchableOpacity>
        {hasKids && isOpen && (
          <FlatList
            data={Object.entries(node.children)}
            renderItem={renderChild}
            keyExtractor={([k]) => `${path}/${k}`}
            removeClippedSubviews
            maxToRenderPerBatch={RENDER_BATCH_SIZE}
            windowSize={10}
            getItemLayout={(d, i) => ({ length: 60, offset: 60 * i, index: i })}
          />
        )}
      </View>
    );
  }
);

const SearchResultItem = React.memo(
  ({
    item,
    query,
    onPress,
    isActive,
  }: {
    item: Docs;
    query: string;
    onPress: (id: string) => void;
    isActive: boolean;
  }) => {
    const isDark = useColorScheme() === "dark";
    const handlePress = () => onPress(item.id);
    return (
      <TouchableOpacity
        onPress={handlePress}
        className={`rounded-lg mx-4 my-2 p-4 ${
          isActive
            ? "bg-sepia-100 dark:bg-sepia-700 border-l-3 border-sepia-500"
            : "bg-sepia-50 dark:bg-sepia-800 border-l-3 border-sepia-200 dark:border-sepia-700"
        }`}
      >
        <Text
          className={`${
            isActive ? "font-bold" : "font-semibold"
          } text-base text-${isDark ? "sepia-100" : "sepia-900"}`}
        >
          {highlightText(item.title, query)}
        </Text>
        <Text
          className="text-sepia-600 dark:text-sepia-300 text-sm mt-1"
          numberOfLines={3}
        >
          {highlightText(item.body.slice(0, 150), query)}…
        </Text>
      </TouchableOpacity>
    );
  }
);

const SearchResults = React.memo(
  ({
    results,
    query,
    onPress,
    pathname,
  }: {
    results: Docs[];
    query: string;
    onPress: (id: string) => void;
    pathname: string;
  }) => {
    const fade = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      fade.setValue(0);
      Animated.timing(fade, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }).start();
    }, [results.length]);

    const renderItem = ({ item }: any) => (
      <SearchResultItem
        item={item}
        query={query}
        onPress={onPress}
        isActive={pathname === item.url}
      />
    );

    return (
      <Animated.View style={{ opacity: fade, flex: 1 }}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          removeClippedSubviews
          maxToRenderPerBatch={RENDER_BATCH_SIZE}
          initialNumToRender={INITIAL_RENDER_COUNT}
          windowSize={10}
          getItemLayout={(d, i) => ({ length: 100, offset: 100 * i, index: i })}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
      </Animated.View>
    );
  }
);

export default function MoreScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const isDark = useColorScheme() === "dark";
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Docs[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [searchDB] = useState(() => new SearchIndexDB());
  const [isIndexing, setIsIndexing] = useState(true);

  const hierarchy = useMemo(() => createHierarchy(rawDocs), []);
  const hierarchyEntries = useMemo(
    () => Object.entries(hierarchy),
    [hierarchy]
  );

  useEffect(() => {
    const initializeDB = async () => {
      try {
        setIsIndexing(true);
        await searchDB.initialize();
        await searchDB.indexDocuments(rawDocs);
        setIsIndexing(false);
      } catch (err) {
        setError("Erro ao inicializar banco de dados");
        setIsIndexing(false);
      }
    };

    initializeDB();

    return () => {
      searchDB.close();
    };
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsSearching(false);
      setError(null);
      return;
    }

    const performSearch = async () => {
      setIsSearching(true);
      try {
        const searchResults = await searchDB.search(searchQuery, 15);
        setResults(searchResults);
        setError(null);
      } catch (err) {
        setError("Falha na busca");
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    const timeoutId = setTimeout(performSearch, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const toggleExpand = useCallback(
    (path) => setExpanded((p) => ({ ...p, [path]: !p[path] })),
    []
  );

  const handleResultPress = useCallback(
    async (id) => {
      try {
        const doc = await searchDB.getDocumentById(id);
        if (!doc) return setError(`Documento não encontrado: ${id}`);
        router.push(doc.url);
      } catch (err) {
        setError("Erro ao abrir documento");
      }
    },
    [router]
  );

  const handleClear = useCallback(() => {
    setSearchQuery("");
    setResults([]);
    setError(null);
  }, []);

  const colors = useMemo(
    () => ({
      placeholder: COLORS["500"],
      inputBg: isDark ? COLORS["900"] : COLORS["100"],
      inputBorder: isDark ? COLORS["600"] : COLORS["300"],
    }),
    [isDark]
  );

  const renderContent = () => {
    if (isIndexing) {
      return (
        <View className="p-4 items-center justify-center flex-1">
          <ActivityIndicator size="large" color={colors.placeholder} />
          <Text className="text-sepia-500 dark:text-sepia-400 mt-2 text-center">
            Indexando documentos...
          </Text>
        </View>
      );
    }

    if (searchQuery.trim()) {
      if (isSearching)
        return (
          <View className="p-4 items-center">
            <ActivityIndicator size="large" color={colors.placeholder} />
          </View>
        );
      if (error)
        return (
          <View className="p-4 items-center">
            <FontAwesome6
              name="exclamation-triangle"
              size={24}
              color={!isDark ? COLORS["800"] : COLORS["200"]}
            />
            <Text className="text-sepia-500 dark:text-sepia-400 mt-2 text-center">
              {error}
            </Text>
          </View>
        );
      if (results.length)
        return (
          <SearchResults
            results={results}
            query={searchQuery}
            onPress={handleResultPress}
            pathname={pathname}
          />
        );
      return (
        <View className="p-4 items-center">
          <FontAwesome6
            name="search"
            size={24}
            color={!isDark ? COLORS["800"] : COLORS["200"]}
          />
          <Text className="text-sepia-500 dark:text-sepia-400 mt-2 text-center">
            Nenhum resultado encontrado
          </Text>
        </View>
      );
    }

    if (error)
      return (
        <View className="p-4 items-center">
          <FontAwesome6
            name="exclamation-triangle"
            size={24}
            color={!isDark ? COLORS["800"] : COLORS["200"]}
          />
          <Text className="text-sepia-500 dark:text-sepia-400 mt-2 text-center">
            {error}
          </Text>
        </View>
      );

    return (
      <FlatList
        data={hierarchyEntries}
        keyExtractor={([k]) => k}
        renderItem={({ item: [key, node] }) => (
          <TreeItem
            node={node}
            path={key}
            level={0}
            expanded={expanded}
            toggleExpand={toggleExpand}
            isActive={node.link === pathname}
            searchHighlight={searchQuery}
            currentPathname={pathname}
          />
        )}
        removeClippedSubviews
        maxToRenderPerBatch={RENDER_BATCH_SIZE}
        initialNumToRender={INITIAL_RENDER_COUNT}
        windowSize={10}
        contentContainerStyle={{ paddingVertical: 8 }}
        ListEmptyComponent={() => (
          <View className="p-4 items-center">
            <FontAwesome6
              name="folder-open"
              size={24}
              color={!isDark ? COLORS["800"] : COLORS["200"]}
            />
            <Text className="text-sepia-500 dark:text-sepia-400 mt-2 text-center">
              Nenhum item disponível
            </Text>
          </View>
        )}
      />
    );
  };

  return (
    <View className="flex-1">
      <View className="p-4 bg-sepia-100 dark:bg-sepia-900 border-b border-sepia-500">
        <View className="flex-row px-3 py-2 items-center bg-sepia-200 dark:bg-sepia-800 rounded-lg">
          <FontAwesome6
            name="magnifying-glass"
            size={16}
            color={colors.placeholder}
          />
          <TextInput
            placeholder="Procurar..."
            placeholderTextColor={colors.placeholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            editable={!isIndexing}
            className="flex-1 ml-2 text-sepia-900 dark:text-sepia-100"
          />
          {!!searchQuery && (
            <TouchableOpacity onPress={handleClear} className="ml-2">
              <FontAwesome6 name="xmark" size={16} color={colors.placeholder} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {renderContent()}
    </View>
  );
}
