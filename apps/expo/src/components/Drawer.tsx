import { Typography } from "~/components/typography";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { usePathname, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { COLORS } from "~/constants/Colors";
import { burgundy } from "config";
import { useSearchModal } from "~/components/Search";
import { getAllTopLevelDocs, getChildren } from "~/services/search";

interface StaticRoute {
  name: string;
  title: string;
  icon: keyof typeof FontAwesome6.glyphMap;
}

interface CustomDrawerContentProps {
  navigation: {
    closeDrawer: () => void;
  };
}

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

const STATIC_ROUTES: StaticRoute[] = [
  { name: "index", title: "Início", icon: "landmark" },
  { name: "ordo", title: "Ordo", icon: "church" },
  { name: "calendario", title: "Calendário", icon: "calendar-days" },
];

const RENDER_BATCH_SIZE = 4;

const TreeItem = React.memo(
  ({
    doc,
    level,
    expanded,
    toggleExpand,
    currentPathname,
    loadingIds,
    childrenMap,
    colors,
    closeDrawer,
  }: {
    doc: Docs;
    level: number;
    expanded: Record<string, boolean>;
    toggleExpand: (id: string, children: boolean) => void;
    currentPathname: string;
    loadingIds: string[];
    childrenMap: Record<string, Docs[]>;
    colors: { icon: string };
    closeDrawer: () => void;
  }) => {
    const router = useRouter();
    const children = doc.hasChildren;
    const isOpen = expanded[doc.id];

    const handlePress = useCallback(() => {
      if (children) {
        toggleExpand(doc.id, children);
      } else {
        closeDrawer();
        router.push({
          pathname: doc.url,
          params: { docId: doc.id },
        } as any);
      }
    }, [children, doc.url, doc.id, router, toggleExpand, closeDrawer]);

    const visibleChildren = useMemo(() => {
      if (!children || !isOpen) return [];
      return childrenMap[doc.id] || [];
    }, [children, isOpen, childrenMap, doc.id]);

    const renderChild = ({ item }: { item: Docs }) => (
      <TreeItem
        doc={item}
        level={level + 1}
        expanded={expanded}
        toggleExpand={toggleExpand}
        currentPathname={currentPathname}
        loadingIds={loadingIds}
        childrenMap={childrenMap}
        colors={colors}
        closeDrawer={closeDrawer}
      />
    );

    const description = !children
      ? doc.content.introduction ||
        (doc.content.headings.length > 0 ? doc.content.headings[0].body : "")
      : "";

    // The text content needs padding-left based on level.
    // The total padding for the row (including the icon) should ensure it's not too close to the edge.
    const baseHorizontalPadding = 13; // A base padding for the start and end of the row.
    const iconContainerWidth = 24; // Fixed width of the icon container (w-6 = 24 units)
    const iconMarginLeft = 8; // Assumed margin between text and icon (ml-2 in prev code was 8 units)

    // Calculate dynamic left padding for the text container
    const dynamicLeftPaddingForText = level * 16;

    // The right padding of the *text itself* needs to account for the icon's space.
    // The total usable width for text is (DrawerWidth - BasePaddingLeft - DynamicTextLeftPadding - IconContainerWidth - IconMarginLeft - BasePaddingRight)
    // To ensure the description doesn't push into the icon, we can make its right padding dynamic too.
    const dynamicRightPaddingForText = level * 10 + 8; // Adjust this value to control text width

    return (
      <View>
        <TouchableOpacity
          onPress={handlePress}
          // Removed px-4 from here. We'll manage padding directly within the children or outer View
          className="flex-row items-center py-3 active:bg-sepia-200 dark:active:bg-sepia-700"
          accessibilityRole="button"
          accessibilityLabel={doc.title}
        >
          {/* A new wrapper View to handle the overall left padding of the row content */}
          {/* This wrapper is essentially "the content area" which starts after global left padding */}
          <View
            style={{
              paddingLeft: baseHorizontalPadding + dynamicLeftPaddingForText,
              flexDirection: "row", // Ensure children are laid out horizontally
              alignItems: "center",
              justifyContent: "flex-start",
              flex: 1, // Allow this content area to expand, but its children will manage widths
            }}
          >
            {/* Text content container */}
            <View
              style={{
                flexShrink: 1, // Allow text to shrink, but not grow infinitely
                // The right padding here prevents the text from bumping into the icon
                paddingRight: dynamicRightPaddingForText,
              }}
            >
              <Typography className="text-xs font-serif text-sepia-800 dark:text-sepia-200">
                {doc.title}
              </Typography>
              {description && description !== doc.title && (
                <Typography
                  className="text-pretty text-sepia-600 dark:text-sepia-300 text-xs mt-1"
                  numberOfLines={2}
                >
                  {description}
                </Typography>
              )}
            </View>

            {/* Icon container - give it a fixed width and fixed right margin */}
            {/* The right edge of this container should align with the desired right edge of the entire row */}
            <View
              style={{
                width: iconContainerWidth,
                marginRight: baseHorizontalPadding, // Ensures the icon is pushed from the right edge
                alignItems: "center", // Align icon to the right within its container
                justifyContent: "flex-start",
              }}
            >
              {children ? (
                loadingIds.includes(doc.id) ? (
                  <ActivityIndicator size="small" />
                ) : (
                  <FontAwesome6
                    name={isOpen ? "chevron-up" : "chevron-down"}
                    size={12}
                    color={colors.icon}
                  />
                )
              ) : (
                <FontAwesome6
                  name="arrow-right"
                  size={12}
                  color={colors.icon}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>

        {visibleChildren.length > 0 && (
          <FlatList
            data={visibleChildren}
            renderItem={renderChild}
            keyExtractor={(item) => item.id}
            removeClippedSubviews
            maxToRenderPerBatch={RENDER_BATCH_SIZE}
            windowSize={8}
            getItemLayout={(_, i) => ({
              length: 60,
              offset: 60 * i,
              index: i,
            })}
          />
        )}
      </View>
    );
  },
);

export function CustomDrawerContent({ navigation }: CustomDrawerContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isDark = useColorScheme() === "dark";
  const { openSearch } = useSearchModal();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [allDocs, setAllDocs] = useState<Docs[]>([]);
  const [loadingIds, setLoadingIds] = useState<string[]>([]);

  useEffect(() => {
    if (allDocs.length === 0) {
      const loadDocs = async () => {
        try {
          const docs = getAllTopLevelDocs();
          setAllDocs(docs);
        } catch (err) {
          console.error("Error loading initial docs:", err);
        }
      };
      loadDocs();
    }
  }, [allDocs.length]);

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

  const toggleExpand = useCallback(
    async (id: string, children: boolean) => {
      if (expanded[id]) {
        setExpanded((prev) => ({ ...prev, [id]: false }));
      } else {
        const childrenAlreadyLoaded = allDocs.some((doc) => doc.parent === id);

        if (children && !childrenAlreadyLoaded) {
          setLoadingIds((prev) => [...prev, id]);
          try {
            const children = getChildren(id);
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
    [expanded, allDocs],
  );

  const handleStaticRoute = useCallback(
    (routeName: string) => {
      navigation.closeDrawer();
      router.push(`/${routeName === "index" ? "" : routeName}` as const);
    },
    [router, navigation],
  );

  const handleSearchPress = useCallback(() => {
    openSearch();
  }, [openSearch]);

  const handleConfigPress = useCallback(() => {
    navigation.closeDrawer();
    router.push("/configurar" as const);
  }, [router, navigation]);

  const colors = useMemo(
    () => ({
      icon: isDark ? COLORS["300"] : COLORS["700"],
    }),
    [isDark],
  );

  const isLoadingInitialDocs = allDocs.length === 0;

  return (
    <View className="flex-1 bg-sepia-100 dark:bg-sepia-800">
      <View className="pt-5 px-4 pb-3">
        <View className="flex-row justify-between items-center mb-3">
          <Pressable
            className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
            onPress={() => handleStaticRoute("index")}
            accessibilityRole="button"
            accessibilityLabel="Ir para Início"
          >
            <FontAwesome6 name="book-bible" size={15} color={burgundy[500]} />
          </Pressable>
          <Typography
            className="flex-1 text-pretty text-sepia-800 dark:text-sepia-200 font-serif-bold text-center px-4"
            accessibilityRole="header"
            accessibilityLabel="Tesouro dos Fiéis"
          >
            Tesouro dos Fiéis
          </Typography>
          <Pressable
            className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
            onPress={handleSearchPress}
            accessibilityRole="button"
            accessibilityLabel="Abrir pesquisa"
          >
            <FontAwesome6
              name="magnifying-glass"
              size={16}
              color={colors.icon}
            />
          </Pressable>
        </View>
      </View>

      {STATIC_ROUTES.map((route) => (
        <TouchableOpacity
          key={route.name}
          onPress={() => handleStaticRoute(route.name)}
          className="flex-row items-center px-4 py-3 active:bg-sepia-300 dark:active:bg-sepia-700"
          accessibilityRole="button"
          accessibilityLabel={route.title}
        >
          <FontAwesome6 name={route.icon} size={13} color={colors.icon} />
          <Typography className="ml-3 text-xs font-serif text-sepia-800 dark:text-sepia-200">
            {route.title}
          </Typography>
        </TouchableOpacity>
      ))}

      <View className="h-px bg-sepia-300 dark:bg-sepia-700 my-2" />

      {isLoadingInitialDocs ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" />
          <Typography className="text-sepia-500 dark:text-sepia-400 mt-2">
            A carregar documentos...
          </Typography>
        </View>
      ) : (
        <FlatList
          data={topLevelDocs}
          keyExtractor={(doc) => doc.id}
          renderItem={({ item: doc }) => (
            <TreeItem
              doc={doc}
              level={0}
              expanded={expanded}
              toggleExpand={toggleExpand}
              currentPathname={pathname}
              loadingIds={loadingIds}
              childrenMap={childrenMap}
              colors={colors}
              closeDrawer={navigation.closeDrawer}
            />
          )}
        />
      )}

      <View className="flex-row justify-between items-center m-2">
        <Typography
          className="flex-1 text-pretty text-sepia-800 dark:text-sepia-200 font-serif-bold text-center px-4"
          accessibilityRole="header"
          accessibilityLabel="Tesouro dos Fiéis"
        >
          {new Date().getFullYear().toString()}
        </Typography>
        <Pressable
          className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
          onPress={handleConfigPress}
          accessibilityRole="button"
          accessibilityLabel="Configurações"
        >
          <FontAwesome6 name="gear" size={16} color={colors.icon} />
        </Pressable>
      </View>
    </View>
  );
}
