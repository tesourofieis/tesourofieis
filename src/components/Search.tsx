import {
  BookPlus,
  Search,
  X,
  Filter,
  Tag,
  CircleDot,
} from "lucide-react-native";
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
  Platform,
  Pressable,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
  ScrollView,
  Keyboard,
} from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Typography } from "~/components/typography";
import { COLORS } from "~/constants/Colors";
import {
  type SearchResult,
  type SearchFilters,
  search,
  getAvailableSections,
  getSectionDisplayName,
} from "~/services/search";

// =============================================================================
// Context
// =============================================================================

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

// =============================================================================
// Provider
// =============================================================================

export function SearchModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openSearch = useCallback(() => {
    if (Platform.OS === "web") {
      setVisible(true);
    } else {
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, []);

  const closeSearch = useCallback(() => {
    if (Platform.OS === "web") {
      setVisible(false);
    } else {
      bottomSheetRef.current?.close();
      Keyboard.dismiss();
    }
  }, []);

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
      {Platform.OS === "web" ? (
        <SearchModal
          visible={visible}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onClose={closeSearch}
          onNavigate={handleNavigate}
        />
      ) : (
        <SearchBottomSheet
          ref={bottomSheetRef}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onNavigate={handleNavigate}
        />
      )}
    </SearchModalContext.Provider>
  );
}

// =============================================================================
// Shared Components
// =============================================================================

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
              className="bg-sepia-200 dark:bg-sepia-700 bold"
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
      } else if (item.content.headings.length > 0) {
        handlePress(item.content.headings[0]?.id);
      } else {
        handlePress();
      }
    }, [item.matchedHeading, item.content.headings, handlePress]);

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
      <View className="mx-4 py-3 border-b border-b-sepia-500">
        <TouchableOpacity onPress={handleCardPress}>
          <View className="flex-row items-center gap-2">
            <CircleDot size={10} />
            <Typography className="bold h6 text-red-500 gap-2">
              {displayTitle
                ? renderFTSHighlightedText(displayTitle)
                : item.title}
            </Typography>
          </View>

          <Typography
            className="text-pretty bold text-xs mt-1 text-sepia-600 dark:text-sepia-300"
            numberOfLines={3}
          >
            {displaySnippet
              ? renderFTSHighlightedText(displaySnippet)
              : fallbackSnippet}
          </Typography>

          {item.content.headings.length > 1 && (
            <View className="mt-2">
              <Typography className="font-display">Secções:</Typography>
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
                        className="font-display text-xs underline"
                        numberOfLines={1}
                      >
                        {heading.title}
                      </Typography>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          )}
          <View className="flex-row flex-wrap items-center mt-3 gap-2">
            {item.section && (
              <View className="flex-row items-center gap-1">
                <Tag size={10} color={COLORS["600"]} />
                <Typography className="text-ellipsis text-burgundy-600 dark:text-burgundy-300 text-xs px-2 py-1 rounded-full bg-burgundy-100 dark:bg-burgundy-900">
                  {getSectionDisplayName(item.section)}
                </Typography>
              </View>
            )}
            {item.id
              .split("/")
              .slice(1, -1)
              .map((path, i) => (
                <Typography
                  key={i}
                  className="text-ellipsis text-sepia-800 dark:text-sepia-200 text-xs px-2 py-1 rounded-full extreme-background"
                >
                  {path}
                </Typography>
              ))}
            {item.relevanceScore && item.relevanceScore > 1000 && (
              <Typography className="text-xs text-green-600 dark:text-green-400 px-2 py-1 rounded-full bg-green-100 dark:bg-green-900">
                Relevante
              </Typography>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  },
);

// =============================================================================
// Search Filters Component
// =============================================================================

function SearchFiltersBar({
  showFilters,
  selectedSections,
  setSelectedSections,
  availableSections,
}: {
  showFilters: boolean;
  selectedSections: string[];
  setSelectedSections: React.Dispatch<React.SetStateAction<string[]>>;
  availableSections: string[];
}) {
  if (!showFilters) return null;

  return (
    <View className="mt-3 px-2">
      <Typography className="text-sm font-display mb-2 text-sepia-600 dark:text-sepia-300">
        Filtrar por seção:
      </Typography>
      <ScrollView horizontal>
        <View className="flex-row gap-2">
          {selectedSections.length > 0 && (
            <TouchableOpacity
              onPress={() => setSelectedSections([])}
              className="px-3 py-1 rounded-full bg-red-200 dark:bg-red-700"
            >
              <Typography className="text-xs text-red-700 dark:text-red-200">
                Limpar
              </Typography>
            </TouchableOpacity>
          )}
          {availableSections.map((section) => {
            const isSelected = selectedSections.includes(section);
            return (
              <TouchableOpacity
                key={section}
                onPress={() => {
                  if (isSelected) {
                    setSelectedSections((prev) =>
                      prev.filter((s) => s !== section),
                    );
                  } else {
                    setSelectedSections((prev) => [...prev, section]);
                  }
                }}
                className={`px-3 py-1 rounded-full border ${
                  isSelected
                    ? "bg-burgundy-200 dark:bg-burgundy-700 border-burgundy-400"
                    : "bg-sepia-200 dark:bg-sepia-700 border-sepia-400"
                }`}
              >
                <Typography
                  className={`text-xs ${
                    isSelected
                      ? "text-burgundy-700 dark:text-burgundy-200"
                      : "text-sepia-600 dark:text-sepia-300"
                  }`}
                >
                  {getSectionDisplayName(section)}
                </Typography>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

// =============================================================================
// Search Results Component
// =============================================================================

function SearchResults({
  results,
  isSearching,
  searchQuery,
  selectedSections,
  setSelectedSections,
  onNavigate,
  ListComponent = FlatList,
}: {
  results: SearchResult[];
  isSearching: boolean;
  searchQuery: string;
  selectedSections: string[];
  setSelectedSections: React.Dispatch<React.SetStateAction<string[]>>;
  onNavigate: (url: string, headingId?: string) => void;
  ListComponent?: typeof FlatList | typeof BottomSheetFlatList;
}) {
  const isDark = useColorScheme() === "dark";

  if (isSearching) {
    return (
      <View className="flex-1 justify-center items-center py-12">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (results.length > 0) {
    return (
      <View className="flex-1">
        <View className="px-4 py-2 border-b border-sepia">
          <Typography className="text-xs text-sepia-600 dark:text-sepia-400">
            {results.length} resultado
            {results.length !== 1 ? "s" : ""} encontrado
            {results.length !== 1 ? "s" : ""}
            {selectedSections.length > 0 && (
              <Typography className="text-xs">
                {" "}
                em{" "}
                {selectedSections
                  .map((s) => getSectionDisplayName(s))
                  .join(", ")}
              </Typography>
            )}
          </Typography>
        </View>
        <ListComponent
          data={results}
          renderItem={({ item }: { item: SearchResult }) => (
            <SearchResultItem item={item} onPress={onNavigate} />
          )}
          keyExtractor={(item: SearchResult) => item.id}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    );
  }

  if (searchQuery.trim()) {
    return (
      <View className="flex-1 justify-center items-center py-12">
        <Search size={15} color={isDark ? COLORS["300"] : COLORS["700"]} />
        <Typography className="text-sepia-500 dark:text-sepia-400 mt-2 text-center">
          Nenhum resultado encontrado
        </Typography>
        {selectedSections.length > 0 && (
          <TouchableOpacity
            onPress={() => setSelectedSections([])}
            className="mt-2 px-3 py-1 rounded border border-sepia"
          >
            <Typography className="text-xs text-sepia-600 dark:text-sepia-400">
              Remover filtros
            </Typography>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return null;
}

// =============================================================================
// Custom Hook for Search Logic
// =============================================================================

function useSearch(searchQuery: string, selectedSections: string[]) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const performSearch = useCallback((query: string, sections: string[]) => {
    if (!query.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    try {
      const filters: SearchFilters = {};
      if (sections.length > 0) {
        filters.sections = sections;
      }
      const searchResults = search(query, 20, filters);
      setResults(searchResults);
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

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

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      performSearch(searchQuery, selectedSections);
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [searchQuery, selectedSections, performSearch]);

  return { results, isSearching };
}

// =============================================================================
// Bottom Sheet (Mobile)
// =============================================================================

const SearchBottomSheet = React.forwardRef<
  BottomSheet,
  {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    onNavigate: (url: string, headingId?: string) => void;
  }
>(({ searchQuery, setSearchQuery, onNavigate }, ref) => {
  const isDark = useColorScheme() === "dark";
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const inputRef = useRef<any>(null);
  const availableSections = useMemo(() => getAvailableSections(), []);
  const { results, isSearching } = useSearch(searchQuery, selectedSections);

  // Snap points: minimal peek (just drag line) and expanded
  const snapPoints = useMemo(() => {
    const maxHeight = Math.min(
      windowHeight * 0.7,
      windowHeight - insets.top - 24,
    );
    return [24, Math.max(320, Math.round(maxHeight))];
  }, [windowHeight, insets.top]);

  const handleNavigate = useCallback(
    (url: string, headingId?: string) => {
      onNavigate(url, headingId);
      (ref as React.RefObject<BottomSheet>)?.current?.snapToIndex(0);
      Keyboard.dismiss();
    },
    [onNavigate, ref],
  );

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      Keyboard.dismiss();
    }
    if (index >= 1) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        opacity={0.5}
        pressBehavior="collapse"
      />
    ),
    [],
  );

  const renderHandle = useCallback(
    () => (
      <View className="items-center py-2">
        <View className="w-12 h-1 bg-sepia-400 dark:bg-sepia-500" />
      </View>
    ),
    [],
  );

  const colors = useMemo(
    () => ({
      placeholder: COLORS["500"],
    }),
    [],
  );

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      handleComponent={renderHandle}
      enablePanDownToClose={true}
      topInset={insets.top + 50}
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustResize"
      backgroundStyle={{
        backgroundColor: isDark ? COLORS["800"] : COLORS["200"],
      }}
    >
      <BottomSheetFlatList<SearchResult>
        data={results}
        keyExtractor={(item: SearchResult) => item.id}
        renderItem={({ item }: { item: SearchResult }) => (
          <SearchResultItem item={item} onPress={handleNavigate} />
        )}
        keyboardShouldPersistTaps="handled"
        stickyHeaderIndices={[0]}
        contentContainerStyle={{
          paddingBottom: 100,
          backgroundColor: isDark ? COLORS["800"] : COLORS["200"],
        }}
        ListHeaderComponent={
          <View className="px-4 pb-1 medium-background">
            <View className="flex-row px-3 py-1 items-center rounded-lg border border-sepia-300 dark:border-sepia-600 extreme-background">
              <Search size={16} color={colors.placeholder} />
              <BottomSheetTextInput
                ref={inputRef}
                placeholder="Procurar..."
                placeholderTextColor={colors.placeholder}
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCorrect={false}
                returnKeyType="search"
                style={{
                  flex: 1,
                  paddingVertical: 8,
                  marginLeft: 8,
                  fontSize: 16,
                  color: isDark ? COLORS["100"] : COLORS["900"],
                }}
              />
              <TouchableOpacity
                onPress={() => setShowFilters(!showFilters)}
                className="ml-2 p-1"
              >
                <Filter
                  size={15}
                  color={
                    selectedSections.length > 0
                      ? burgundy[500]
                      : colors.placeholder
                  }
                />
              </TouchableOpacity>
              {!!searchQuery && (
                <TouchableOpacity
                  onPress={() => setSearchQuery("")}
                  className="ml-1 p-1"
                >
                  <X size={16} color={colors.placeholder} />
                </TouchableOpacity>
              )}
            </View>

            <SearchFiltersBar
              showFilters={showFilters}
              selectedSections={selectedSections}
              setSelectedSections={setSelectedSections}
              availableSections={availableSections}
            />

            {results.length > 0 && (
              <View className="pt-2">
                <Typography className="text-xs text-sepia-600 dark:text-sepia-400">
                  {results.length} resultado{results.length !== 1 ? "s" : ""}
                </Typography>
              </View>
            )}

            {isSearching && (
              <View className="py-8 items-center">
                <ActivityIndicator size="small" />
              </View>
            )}

            {searchQuery.trim() && !isSearching && results.length === 0 && (
              <View className="py-8 items-center">
                <Typography className="text-sepia-500 dark:text-sepia-400 text-center">
                  Nenhum resultado encontrado
                </Typography>
              </View>
            )}
          </View>
        }
      />
    </BottomSheet>
  );
});

// =============================================================================
// Modal (Web)
// =============================================================================

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
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const inputRef = useRef<TextInput>(null);
  const availableSections = useMemo(() => getAvailableSections(), []);
  const { results, isSearching } = useSearch(searchQuery, selectedSections);

  // Focus input when modal opens
  useEffect(() => {
    if (visible) {
      const focusTimeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(focusTimeout);
    }
  }, [visible]);

  const handleNavigate = useCallback(
    (url: string, headingId?: string) => {
      onNavigate(url, headingId);
      onClose();
    },
    [onNavigate, onClose],
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
              className="overflow-hidden rounded-xl"
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
                    ref={inputRef}
                    placeholder="Procurar..."
                    placeholderTextColor={colors.placeholder}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    autoCorrect={false}
                    autoFocus
                    returnKeyType="search"
                    className="flex-1 py-3 ml-2 text-sepia-900 dark:text-sepia-100"
                  />
                  <TouchableOpacity
                    onPress={() => setShowFilters(!showFilters)}
                    className="ml-2 p-1"
                  >
                    <Filter
                      size={15}
                      color={
                        selectedSections.length > 0
                          ? burgundy[500]
                          : colors.placeholder
                      }
                    />
                  </TouchableOpacity>
                  {!!searchQuery && (
                    <TouchableOpacity
                      onPress={() => setSearchQuery("")}
                      className="ml-2"
                    >
                      <X size={15} color={colors.placeholder} />
                    </TouchableOpacity>
                  )}
                </View>

                <SearchFiltersBar
                  showFilters={showFilters}
                  selectedSections={selectedSections}
                  setSelectedSections={setSelectedSections}
                  availableSections={availableSections}
                />
              </View>

              <View className="flex-1 medium-background">
                <SearchResults
                  results={results}
                  isSearching={isSearching}
                  searchQuery={searchQuery}
                  selectedSections={selectedSections}
                  setSelectedSections={setSelectedSections}
                  onNavigate={handleNavigate}
                />
              </View>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
