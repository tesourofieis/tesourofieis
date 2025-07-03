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
import { COLORS } from "~/constants/Colors";
import rawDocs from "../../../assets/search-index.json";
import { useSearch } from "~/providers/search";
import { remove as removeDiacritics } from "diacritics";

interface Docs {
  id: string;
  title: string;
  body: string;
  url: string;
  level: number;
  section?: string;
}

interface TreeNode {
  title: string;
  children: Record<string, TreeNode>;
  description?: string;
  link?: string;
  level: number;
  section?: string;
  hasChildren: boolean;
}

const ANIMATION_DURATION = 200;
const INITIAL_RENDER_COUNT = 8;
const RENDER_BATCH_SIZE = 4;

const createHierarchy = (items: Docs[]): Record<string, TreeNode> => {
  const root: Record<string, TreeNode> = {};

  for (const { id, title, body, url, level, section } of items) {
    const parts = id.split("/").filter(Boolean);
    let current = root;

    for (let i = 0; i < parts.length; i++) {
      const key = parts[i];
      if (!current[key]) {
        current[key] = {
          title: key,
          children: {},
          level: level || 0,
          section: section,
          hasChildren: false,
        };
      }

      if (i === parts.length - 1) {
        current[key].title = title;
        current[key].description = body.slice(0, 120);
        current[key].link = url;
        current[key].level = level || 0;
        current[key].section = section;
      } else {
        current[key].hasChildren = true;
      }

      current = current[key].children;
    }
  }

  return root;
};

const getTopLevelNodes = (
  hierarchy: Record<string, TreeNode>
): [string, TreeNode][] => {
  return Object.entries(hierarchy).filter(
    ([_, node]) => node.level === 0 || node.level === 1
  );
};

const shouldShowNode = (
  node: TreeNode,
  expandedSections: Set<string>,
  maxLevel: number = 1
): boolean => {
  if (node.level <= maxLevel) return true;
  if (node.section && expandedSections.has(node.section)) return true;
  return false;
};

const normalize = (text: string) => removeDiacritics(text).toLowerCase();

const highlightText = (text: string, highlight?: string) => {
  if (!highlight || highlight.length < 2) return text;

  const normalizedText = normalize(text);
  const normalizedHighlight = normalize(highlight);

  const index = normalizedText.indexOf(normalizedHighlight);
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
    expandedSections,
    toggleSection,
  }: {
    node: TreeNode;
    path: string;
    level: number;
    expanded: Record<string, boolean>;
    toggleExpand: (path: string) => void;
    isActive: boolean;
    searchHighlight?: string;
    currentPathname: string;
    expandedSections: Set<string>;
    toggleSection: (section: string) => void;
  }) => {
    const router = useRouter();
    const isDark = useColorScheme() === "dark";
    const hasKids = !!Object.keys(node.children).length;
    const isOpen = expanded[path];

    const handlePress = useCallback(() => {
      if (hasKids) {
        toggleExpand(path);
        if (node.section) {
          toggleSection(node.section);
        }
      } else if (node.link) {
        router.push(node.link);
      }
    }, [hasKids, node.link, node.section, path]);

    const visibleChildren = useMemo(() => {
      if (!hasKids || !isOpen) return [];
      return Object.entries(node.children).filter(([_, child]) =>
        shouldShowNode(child, expandedSections, level + 1)
      );
    }, [node.children, hasKids, isOpen, expandedSections, level]);

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
          expandedSections={expandedSections}
          toggleSection={toggleSection}
        />
      ),
      [
        expanded,
        searchHighlight,
        currentPathname,
        expandedSections,
        toggleSection,
      ]
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
            {node.section && (
              <Text className="text-sepia-400 dark:text-sepia-500 text-xs mt-1">
                {node.section}
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
        {hasKids && isOpen && visibleChildren.length > 0 && (
          <FlatList
            data={visibleChildren}
            renderItem={renderChild}
            keyExtractor={([k]) => `${path}/${k}`}
            removeClippedSubviews
            maxToRenderPerBatch={RENDER_BATCH_SIZE}
            windowSize={8}
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
        {item.section && (
          <Text className="text-sepia-400 dark:text-sepia-500 text-xs mt-1">
            {item.section}
          </Text>
        )}
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
          windowSize={8}
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
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const { searchEngine, isReady, error: searchError } = useSearch();

  const hierarchy = useMemo(() => createHierarchy(rawDocs), []);
  const topLevelNodes = useMemo(() => getTopLevelNodes(hierarchy), [hierarchy]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    if (!searchEngine || !searchEngine.isReady()) {
      setIsSearching(true);
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsSearching(true);
      try {
        const searchResults = searchEngine.search(searchQuery, 15);
        setResults(searchResults);
      } catch (err) {
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, searchEngine]);

  const toggleExpand = useCallback(
    (path: string) => setExpanded((p) => ({ ...p, [path]: !p[path] })),
    []
  );

  const toggleSection = useCallback((section: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(section)) newSet.delete(section);
      else newSet.add(section);
      return newSet;
    });
  }, []);

  const handleResultPress = useCallback(
    (id: string) => {
      try {
        const doc = searchEngine.getDocumentById(id);
        if (!doc) return;
        router.push(doc.url);
      } catch {
        // handle error
      }
    },
    [router, searchEngine]
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
    [isDark]
  );

  const renderContent = () => {
    if (!isReady) {
      return (
        <View className="flex-1">
          <FlatList
            data={topLevelNodes}
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
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              />
            )}
            contentContainerStyle={{ paddingVertical: 8 }}
          />
          <View className="absolute bottom-4 right-4 bg-sepia-800 dark:bg-sepia-200 rounded-full p-3">
            <ActivityIndicator
              size="small"
              color={isDark ? COLORS["800"] : COLORS["200"]}
            />
          </View>
        </View>
      );
    }

    if (searchQuery.trim()) {
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
        data={topLevelNodes}
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
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
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
