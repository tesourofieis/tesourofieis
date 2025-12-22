import { BookPlus, Search, X } from "lucide-react-native";
import { burgundy } from "config";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Typography } from "~/components/typography";
import { COLORS } from "~/constants/Colors";
import { type SearchResult, search } from "~/services/search";

const SearchModalContext = createContext<{
  openSearch: () => void;
  closeSearch: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const useSearchModal = () => {
  const context = useContext(SearchModalContext);
  if (!context) {
    throw new Error("useSearchModal must be used within SearchModalProvider");
  }
  return context;
};

export function SearchModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const openSearch = useCallback(() => {
    setVisible(true);
  }, []);

  const closeSearch = useCallback(() => setVisible(false), []);

  const handleNavigate = useCallback(
    (url: string, headingId?: string) => {
      router.push({
        pathname: url,
        params: headingId ? { anchor: headingId } : undefined,
      } as any);
    },
    [router],
  );

  return (
    <SearchModalContext.Provider
      value={{
        openSearch,
        closeSearch,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
      <SearchModal
        visible={visible}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onClose={closeSearch}
        onNavigate={handleNavigate}
      />
    </SearchModalContext.Provider>
  );
}

const renderFTSHighlightedText = (text: string) => {
  if (!text) return null;
  const parts = text.split(/(<b>.*?<\/b>)/g).filter(Boolean);
  return (
    <Typography>
      {parts.map((part, i) => {
        if (part.startsWith("<b>") && part.endsWith("</b>")) {
          const highlightedContent = part.slice(3, -4);
          return (
            <Typography
              key={part + i}
              className="bg-sepia-200 dark:bg-sepia-700 font-semibold"
            >
              {highlightedContent}
            </Typography>
          );
        }
        return <Typography key={part + i}>{part}</Typography>;
      })}
    </Typography>
  );
};

const SearchResultItem = React.memo(
  ({
    item,
    onPress,
  }: {
    item: SearchResult;
    onPress: (url: string, headingId?: string) => void;
  }) => {
    const handlePress = useCallback(
      (headingId?: string) => {
        onPress(item.url, headingId);
      },
      [item, onPress],
    );
    const handleCardPress = useCallback(() => {
      if (item.matchedHeading) {
        handlePress(item.matchedHeading.id);
      } else {
        handlePress();
      }
    }, [item.matchedHeading, handlePress]);

    const highlighted = item.highlightedTitle ?? "";
    const displayTitle = highlighted;
    const displaySnippet = item.matchedText;
    const fallbackSnippet =
      item.content.introduction ||
      (item.content.headings.length > 0
        ? item.content.headings[0]!.body
        : "") ||
      "";

    return (
      <View className="mx-4 py-3 border-b border-sepia">
        <TouchableOpacity onPress={handleCardPress}>
          <Typography className="h6 text-red-500">
            {displayTitle ? renderFTSHighlightedText(displayTitle) : item.title}
          </Typography>

          <Typography
            className="text-pretty text-xs mt-1 text-sepia-600 dark:text-sepia-300"
            numberOfLines={3}
          >
            {displaySnippet || fallbackSnippet}
          </Typography>

          {item.content.headings.length > 1 && (
            <View className="mt-2">
              <Typography className="font-serif">Secções:</Typography>
              <View className="flex-row flex-wrap gap-2 mt-1">
                {item.content.headings
                  .filter((heading) => heading.id !== item.matchedHeading?.id)
                  .slice(0, 10)
                  .map((heading) => (
                    <TouchableOpacity
                      key={heading.id}
                      onPress={() => handlePress(heading.id)}
                    >
                      <Typography
                        className="font-serif text-xs underline"
                        numberOfLines={1}
                      >
                        {heading.title}
                      </Typography>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          )}
          <View className="flex-row flex-wrap items-center mt-1 gap-2">
            {item.id
              .split("/")
              .slice(0, -1)
              .map((path, i) => (
                <Typography
                  key={i}
                  className="text-ellipsis text-sepia-800 dark:text-sepia-200 text-xs px-2 py-1 mt-2 rounded-full extreme-background"
                >
                  {path}
                </Typography>
              ))}
          </View>
        </TouchableOpacity>
      </View>
    );
  },
);

function SearchModal({
  visible,
  searchQuery,
  setSearchQuery,
  onClose,
  onNavigate,
}: {
  visible: boolean;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
  onNavigate: (url: string, headingId?: string) => void;
}) {
  const isDark = useColorScheme() === "dark";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsSearching(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }
    setIsSearching(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      try {
        const searchResults = search(searchQuery, 15);
        setResults(searchResults);
      } catch (err) {
        console.error("Search error:", err);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [searchQuery]);

  const handleNavigate = useCallback(
    (url: string, headingId?: string) => {
      onNavigate(url, headingId);
      onClose();
    },
    [onNavigate, onClose, setSearchQuery],
  );

  const colors = useMemo(
    () => ({
      placeholder: COLORS["500"],
      blurIntensity: 100,
    }),
    [],
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
      allowSwipeDismissal
    >
      <BlurView
        intensity={colors.blurIntensity}
        tint={isDark ? "dark" : "light"}
        style={{ flex: 1 }}
      >
        <View className="flex-1 items-center justify-center bg-black/40">
          <Pressable className="absolute inset-0" onPress={onClose} />
          <View className="px-6 w-full max-w-xl flex-1 items-center justify-center">
            <View
              className="extreme-background overflow-hidden rounded-xl"
              style={{
                height: "85%",
                width: "85%",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View className="px-5 pt-4 pb-3 medium-background">
                <View className="flex-row justify-center items-center pb-3">
                  <BookPlus size={15} color={burgundy[500]} />
                </View>
                <View className="flex-row px-5 py-1 items-center rounded-xl border border-sepia extreme-background">
                  <Search size={15} color={colors.placeholder} />
                  <TextInput
                    placeholder="Procurar..."
                    placeholderTextColor={colors.placeholder}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    autoCapitalize="none"
                    autoCorrect={false}
                    focusable
                    autoFocus
                    returnKeyType="search"
                    className="flex-1 ml-2 text-sepia-900 dark:text-sepia-100"
                  />
                  {!!searchQuery && (
                    <TouchableOpacity
                      onPress={() => setSearchQuery("")}
                      className="ml-2"
                    >
                      <X size={15} color={colors.placeholder} />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View className="flex-1 medium-background">
                {isSearching && (
                  <View className="flex-1 justify-center items-center py-12">
                    <ActivityIndicator size="large" />
                  </View>
                )}
                {results.length > 0 && (
                  <FlatList
                    data={results}
                    renderItem={({ item }) => (
                      <SearchResultItem item={item} onPress={handleNavigate} />
                    )}
                    keyExtractor={(item) => item.id}
                  />
                )}
                {searchQuery.trim() && !isSearching && !results.length && (
                  <View className="flex-1 justify-center items-center py-12">
                    <Search
                      size={15}
                      color={isDark ? COLORS["300"] : COLORS["700"]}
                    />
                    <Typography className="text-sepia-500 dark:text-sepia-400 mt-2 text-center">
                      Nenhum resultado encontrado
                    </Typography>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
