import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { usePathname, useRouter } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { COLORS } from "~/constants/Colors";
import { useSearch } from "~/providers/search";

export interface SubHeading {
  title: string;
  id: string;
  level: number;
  body: string;
}

export interface Docs {
  id: string;
  title: string;
  url: string;
  level: number;
  levels: string[];
  section?: string | null;
  parent?: string | null;
  content: {
    introduction?: string;
    headings: SubHeading[];
    comment?: string | null;
  };
  hasChildren: boolean;
}

const ANIMATION_DURATION = 200;
const INITIAL_RENDER_COUNT = 8;
const RENDER_BATCH_SIZE = 4;

const debugLog = (message: string, data?: any) => {
  if (__DEV__) {
    console.log(`[ANCHOR DEBUG] ${message}`, data || "");
  }
};

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const highlightText = (text: string, highlight?: string) => {
  if (!highlight || highlight.length < 2) return text;

  const normalizedText = normalize(text);
  const normalizedHighlight = normalize(highlight);

  const index = normalizedText.indexOf(normalizedHighlight);
  if (index === -1) return text;

  const start = index;
  const end = start + highlight.length;

  return (
    <>
      {text.slice(0, start)}
      <Text className="bg-sepia-200 dark:bg-sepia-700">
        {text.slice(start, end)}
      </Text>
      {text.slice(end)}
    </>
  );
};

const TreeItem = React.memo(
  ({
    doc,
    level,
    expanded,
    toggleExpand,
    isActive,
    searchHighlight,
    currentPathname,
    loadingIds,
    childrenMap,
  }: {
    doc: Docs;
    level: number;
    expanded: Record<string, boolean>;
    toggleExpand: (id: string, hasChildren: boolean) => void;
    isActive: boolean;
    searchHighlight?: string;
    currentPathname: string;
    loadingIds: string[];
    childrenMap: Record<string, Docs[]>;
  }) => {
    const router = useRouter();
    const isDark = useColorScheme() === "dark";

    // Check if this document has children either from the hasChildren flag or from already loaded children
    const hasChildren = doc.hasChildren;
    const isOpen = expanded[doc.id];

    const handlePress = useCallback(() => {
      if (hasChildren) {
        toggleExpand(doc.id, hasChildren);
      } else {
        debugLog("TreeItem navigation", {
          link: doc.url,
          docId: doc.id,
          anchor: undefined,
          hasLink: !!doc.url,
          hasTitle: !!doc.title,
        });
        router.push({
          pathname: doc.url,
          params: { docId: doc.id },
        } as any);
      }
    }, [hasChildren, doc.url, doc.id, router, toggleExpand]);

    const visibleChildren = useMemo(() => {
      if (!hasChildren || !isOpen) return [];
      return childrenMap[doc.id] || [];
    }, [hasChildren, isOpen, childrenMap, doc.id]);

    const renderChild = ({ item }: { item: Docs }) => (
      <TreeItem
        doc={item}
        level={level + 1}
        expanded={expanded}
        toggleExpand={toggleExpand}
        isActive={item.url === currentPathname}
        searchHighlight={searchHighlight}
        currentPathname={currentPathname}
        loadingIds={loadingIds}
        childrenMap={childrenMap}
      />
    );

    const description = !hasChildren
      ? doc.content.introduction ||
        (doc.content.headings.length > 0 ? doc.content.headings[0].body : "")
      : "";

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
              {highlightText(doc.title, searchHighlight)}
            </Text>
            {description && description !== doc.title && (
              <Text
                className="text-sepia-600 dark:text-sepia-300 text-xs mt-1"
                numberOfLines={2}
              >
                {highlightText(description, searchHighlight)}
              </Text>
            )}
            <View className="flex-row mt-2">
              {doc.levels.map((section) => (
                <Text
                  key={section}
                  className="text-xs text-center w-fit text-ellipsis text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900"
                >
                  {section}
                </Text>
              ))}
            </View>
          </View>
          {hasChildren ? (
            loadingIds.includes(doc.id) ? (
              <ActivityIndicator size="small" color={COLORS["500"]} />
            ) : (
              <FontAwesome6
                name={isOpen ? "chevron-up" : "chevron-down"}
                size={16}
                color={!isDark ? COLORS["800"] : COLORS["200"]}
              />
            )
          ) : (
            <FontAwesome6
              name="arrow-right"
              size={16}
              color={!isDark ? COLORS["800"] : COLORS["200"]}
            />
          )}
        </TouchableOpacity>

        <FlatList
          data={visibleChildren}
          renderItem={renderChild}
          keyExtractor={(item) => item.id}
          removeClippedSubviews
          maxToRenderPerBatch={RENDER_BATCH_SIZE}
          windowSize={8}
          getItemLayout={(d, i) => ({ length: 60, offset: 60 * i, index: i })}
        />
      </View>
    );
  },
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
    onPress: (item: Docs, headingId?: string) => void;
    isActive: boolean;
  }) => {
    const isDark = useColorScheme() === "dark";

    const handlePress = useCallback(
      (headingId?: string) => {
        debugLog("SearchResultItem pressed", {
          id: item.id,
          title: item.title,
          url: item.url,
          headingId: headingId,
        });
        onPress(item, headingId);
      },
      [item, onPress],
    );

    const getSnippet = useCallback(() => {
      const fullText = [
        item.content.introduction,
        ...item.content.headings.map((h) => `${h.title} ${h.body}`),
        item.content.comment,
      ]
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
      return fullText.slice(0, 150) + "…";
    }, [item.content]);

    return (
      <TouchableOpacity
        onPress={() => handlePress()}
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
          {highlightText(getSnippet(), query)}
        </Text>
        {item.content.headings.length > 0 && (
          <View className="mt-2">
            <Text className="text-xs text-sepia-500 dark:text-sepia-400 italic">
              Secções:
            </Text>
            {item.content.headings.map((heading) => (
              <TouchableOpacity
                key={heading.id}
                onPress={() => handlePress(heading.id)}
                className="mt-1 ml-2"
              >
                <Text
                  className="text-sm text-blue-600 dark:text-blue-400 underline"
                  numberOfLines={1}
                >
                  {highlightText(heading.title, query)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {item.section && (
          <Text className="text-ellipsis text-sepia-400 dark:text-sepia-500 text-xs px-2 py-1">
            {item.section}
          </Text>
        )}
      </TouchableOpacity>
    );
  },
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
    onPress: (item: Docs, headingId?: string) => void;
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

    const renderItem = useCallback(
      ({ item }: { item: Docs }) => (
        <SearchResultItem
          item={item}
          query={query}
          onPress={onPress}
          isActive={pathname === item.url}
        />
      ),
      [query, onPress, pathname],
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
          windowSize={8}
          getItemLayout={(d, i) => ({ length: 150, offset: 150 * i, index: i })}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
      </Animated.View>
    );
  },
);

export default function MoreScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const isDark = useColorScheme() === "dark";
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Docs[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [allDocs, setAllDocs] = useState<Docs[]>([]);
  const [loadingIds, setLoadingIds] = useState<string[]>([]);

  const {
    search,
    getDocumentById,
    getAllTopLevelDocs,
    getChildren,
    isReady,
    error: searchError,
  } = useSearch();

  useEffect(() => {
    if (isReady && allDocs.length === 0) {
      const loadDocs = async () => {
        try {
          debugLog("Loading initial docs...");
          const docs = await getAllTopLevelDocs();
          setAllDocs(docs);
          debugLog("Initial docs loaded:", docs.length);
          debugLog(
            "Docs children:",
            docs.map((i) => i.hasChildren),
          );
        } catch (err) {
          console.error("Error loading initial docs:", err);
        }
      };
      loadDocs();
    }
  }, [isReady, allDocs.length, getAllTopLevelDocs]);

  const childrenMap = useMemo(() => {
    return allDocs.reduce(
      (map, doc) => {
        if (doc.parent) {
          map[doc.parent] = map[doc.parent] || [];
          map[doc.parent].push(doc);
        }
        return map;
      },
      {} as Record<string, Docs[]>,
    );
  }, [allDocs]);

  const topLevelDocs = useMemo(() => {
    return allDocs.filter((doc) => !doc.parent);
  }, [allDocs]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    if (!isReady) {
      setIsSearching(true);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsSearching(true);
      try {
        const searchResults = await search(searchQuery, 15);
        setResults(searchResults);
      } catch (err) {
        console.error("Search error:", err);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, search, isReady]);

  const toggleExpand = useCallback(
    async (id: string, hasChildren: boolean) => {
      if (expanded[id]) {
        setExpanded((prev) => ({ ...prev, [id]: false }));
      } else {
        if (hasChildren && !allDocs.some((doc) => doc.parent === id)) {
          setLoadingIds((prev) => [...prev, id]);
          try {
            const children = await getChildren(id);
            setAllDocs((prev) => [...prev, ...children]);
          } catch (err) {
            console.error("Error loading children:", err);
          } finally {
            setLoadingIds((prev) =>
              prev.filter((loadingId) => loadingId !== id),
            );
          }
        }
        setExpanded((prev) => ({ ...prev, [id]: true }));
      }
    },
    [expanded, allDocs, getChildren],
  );

  const handleResultPress = useCallback(
    async (item: Docs, headingId?: string) => {
      try {
        debugLog("handleResultPress called", {
          itemId: item.id,
          itemTitle: item.title,
          itemUrl: item.url,
          headingId: headingId,
        });
        router.push({
          pathname: item.url,
          params: { docId: item.id, anchor: headingId },
        } as any);
      } catch (error) {
        debugLog("Error in handleResultPress", error);
      }
    },
    [router],
  );

  const handleClear = useCallback(() => {
    setSearchQuery("");
    setResults([]);
  }, []);

  const colors = useMemo(
    () => ({
      placeholder: COLORS["500"],
      inputBg: isDark ? COLORS["900"] : COLORS["100"],
      inputBorder: isDark ? COLORS["600"] : COLORS["300"],
    }),
    [isDark],
  );

  const renderContent = () => {
    const showSearchUI = searchQuery.trim();
    const isLoadingInitialDocs = !isReady && allDocs.length === 0;

    if (isLoadingInitialDocs) {
      return (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color={colors.placeholder} />
          <Text className="text-sepia-500 dark:text-sepia-400 mt-2">
            A carregar documentos...
          </Text>
          {searchError && (
            <Text className="text-red-500 dark:text-red-400 mt-2 text-center">
              Erro: {searchError}
            </Text>
          )}
        </View>
      );
    }

    if (showSearchUI) {
      if (isSearching) {
        return (
          <View className="p-4 items-center">
            <ActivityIndicator size="large" color={colors.placeholder} />
          </View>
        );
      }

      if (searchError) {
        return (
          <View className="p-4 items-center">
            <FontAwesome6
              name="exclamation-triangle"
              size={24}
              color={isDark ? COLORS["200"] : COLORS["800"]}
            />
            <Text className="text-sepia-500 dark:text-sepia-400 mt-2 text-center">
              {searchError}
            </Text>
          </View>
        );
      }

      if (results.length) {
        return (
          <SearchResults
            results={results}
            query={searchQuery}
            onPress={handleResultPress}
            pathname={pathname}
          />
        );
      }

      return (
        <View className="p-4 items-center">
          <FontAwesome6
            name="search"
            size={24}
            color={isDark ? COLORS["200"] : COLORS["800"]}
          />
          <Text className="text-sepia-500 dark:text-sepia-400 mt-2 text-center">
            Nenhum resultado encontrado
          </Text>
        </View>
      );
    }

    return (
      <FlatList
        data={topLevelDocs}
        keyExtractor={(doc) => doc.id}
        renderItem={({ item: doc }) => (
          <TreeItem
            doc={doc}
            level={0}
            expanded={expanded}
            toggleExpand={toggleExpand}
            isActive={doc.url === pathname}
            searchHighlight={searchQuery}
            currentPathname={pathname}
            loadingIds={loadingIds}
            childrenMap={childrenMap}
          />
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    );
  };

  return (
    <>
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
    </>
  );
}
