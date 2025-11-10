import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { burgundy } from "config";
import { usePathname, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Platform,
  Pressable,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { useSearchModal } from "~/components/Search";
import { Typography } from "~/components/typography";
import { COLORS } from "~/constants/Colors";
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

const ALL_STATIC_ROUTES: StaticRoute[] = [
  { name: "index", title: "Início", icon: "landmark" },
  { name: "ordo", title: "Ordo", icon: "church" },
  { name: "calendario", title: "Calendário", icon: "calendar-days" },
  { name: "configurar", title: "Configurar", icon: "gears" },
];

function normalizePathForMatching(path: string): string {
  return path.replace(/\/\([^)]+\)/g, "");
}

function pathsMatch(pathname: string, docUrl: string): boolean {
  const normalizedPathname = normalizePathForMatching(pathname);
  const normalizedDocUrl = normalizePathForMatching(docUrl);

  if (normalizedPathname === normalizedDocUrl) return true;
  if (normalizedPathname.endsWith(normalizedDocUrl)) return true;
  if (normalizedDocUrl.endsWith(normalizedPathname)) return true;

  return false;
}

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
    flattenedDocs,
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
    flattenedDocs: Docs[];
  }) => {
    const router = useRouter();
    const children = doc.hasChildren;
    const isOpen = expanded[doc.id];
    const isActive = pathsMatch(currentPathname, doc.url);

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

    const description = !children
      ? doc.content.introduction ||
        (doc.content.headings.length > 0 ? doc.content.headings[0].body : "")
      : "";

    const baseHorizontalPadding = 13;
    const iconContainerWidth = 24;
    const dynamicLeftPaddingForText = level * 16;
    const dynamicRightPaddingForText = level * 10 + 8;

    return (
      <View>
        <TouchableOpacity
          onPress={handlePress}
          className={`flex-row items-center py-3 active:bg-sepia-200 dark:active:bg-sepia-700 ${
            isActive ? "bg-sepia-200 dark:bg-sepia-700" : ""
          }`}
          accessibilityRole="button"
          accessibilityLabel={doc.title}
        >
          <View
            style={{
              paddingLeft: baseHorizontalPadding + dynamicLeftPaddingForText,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              flex: 1,
            }}
          >
            <View
              style={{
                flexShrink: 1,
                paddingRight: dynamicRightPaddingForText,
              }}
            >
              <Typography
                className={`text-xs font-serif ${
                  isActive
                    ? "text-burgundy-600 dark:text-burgundy-400 font-serif-bold"
                    : "text-sepia-800 dark:text-sepia-200"
                }`}
              >
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

            <View
              style={{
                width: iconContainerWidth,
                marginRight: baseHorizontalPadding,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {children ? (
                loadingIds.includes(doc.id) ? (
                  <ActivityIndicator size="small" />
                ) : (
                  <FontAwesome6
                    name={isOpen ? "chevron-up" : "chevron-down"}
                    size={15}
                    color={isActive ? burgundy[500] : colors.icon}
                  />
                )
              ) : (
                <FontAwesome6
                  name="arrow-right"
                  size={15}
                  color={isActive ? burgundy[500] : colors.icon}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
);

export default function CustomDrawerContent({
  navigation,
}: CustomDrawerContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isDark = useColorScheme() === "dark";
  const { openSearch } = useSearchModal();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [allDocs, setAllDocs] = useState<Docs[]>([]);
  const [loadingIds, setLoadingIds] = useState<string[]>([]);

  const flatListRef = React.useRef<FlatList>(null);
  const hasScrolledToActive = React.useRef(false);

  const STATIC_ROUTES = useMemo(() => {
    return ALL_STATIC_ROUTES.filter((route) => {
      if (Platform.OS === "web" && route.name === "configurar") {
        return false;
      }
      return true;
    });
  }, []);

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

  const flattenedDocs = useMemo(() => {
    const flatten = (docs: Docs[], level: number = 0): Docs[] => {
      const result: Docs[] = [];
      for (const doc of docs) {
        result.push(doc);
        if (expanded[doc.id] && childrenMap[doc.id]) {
          result.push(...flatten(childrenMap[doc.id], level + 1));
        }
      }
      return result;
    };

    const topLevel = allDocs.filter((doc) => !doc.parent);
    return flatten(topLevel);
  }, [allDocs, expanded, childrenMap]);

  useEffect(() => {
    if (allDocs.length === 0 || isManualInteraction.current) return;

    const findAndExpandActiveRoute = async () => {
      let currentDocs = [...allDocs];

      let activeDoc = currentDocs.find((doc) => pathsMatch(pathname, doc.url));

      if (!activeDoc) {
        const normalizedPath = normalizePathForMatching(pathname);
        const pathSegments = normalizedPath.split("/").filter(Boolean);

        for (let i = 0; i < pathSegments.length; i++) {
          const currentPath = pathSegments.slice(0, i + 1).join("/");
          const parentDoc = currentDocs.find((doc) => doc.id === currentPath);

          if (parentDoc?.hasChildren) {
            const childrenAlreadyLoaded = currentDocs.some(
              (doc) => doc.parent === parentDoc.id,
            );

            if (!childrenAlreadyLoaded) {
              try {
                const children = getChildren(parentDoc.id);
                currentDocs = [...currentDocs, ...children];
              } catch (err) {
                console.error("Error loading children:", err);
              }
            }
          }
        }

        activeDoc = currentDocs.find((doc) => pathsMatch(pathname, doc.url));
      }

      if (!activeDoc) {
        setExpanded({});
        return;
      }

      const parentsToExpand: string[] = [];
      let currentParent = activeDoc.parent;

      while (currentParent) {
        const parentDoc = currentDocs.find((doc) => doc.id === currentParent);
        if (!parentDoc) break;
        parentsToExpand.push(currentParent);
        currentParent = parentDoc.parent;
      }

      const parentsTopToBottom = [...parentsToExpand].reverse();

      for (const parentId of parentsTopToBottom) {
        const childrenAlreadyLoaded = currentDocs.some(
          (doc) => doc.parent === parentId,
        );

        if (!childrenAlreadyLoaded) {
          try {
            const children = getChildren(parentId);
            currentDocs = [...currentDocs, ...children];
          } catch (err) {
            console.error("Error loading children for active route:", err);
          }
        }
      }

      if (currentDocs.length > allDocs.length) {
        setAllDocs(currentDocs);
      }

      const newExpanded: Record<string, boolean> = {};
      parentsToExpand.forEach((id) => {
        newExpanded[id] = true;
      });
      setExpanded(newExpanded);
    };

    findAndExpandActiveRoute();
  }, [pathname, allDocs.length]);

  useEffect(() => {
    if (
      flattenedDocs.length > 0 &&
      flatListRef.current &&
      !hasScrolledToActive.current
    ) {
      const activeIndex = flattenedDocs.findIndex((doc) =>
        pathsMatch(pathname, doc.url),
      );

      if (activeIndex !== -1) {
        setTimeout(() => {
          flatListRef.current?.scrollToIndex({
            index: activeIndex,
            animated: true,
            viewPosition: 0.3,
          });
          hasScrolledToActive.current = true;
        }, 500);
      }
    }
  }, [flattenedDocs, pathname]);

  useEffect(() => {
    hasScrolledToActive.current = false;
  }, [pathname]);

  const isManualInteraction = React.useRef(false);

  const toggleExpand = useCallback(
    async (id: string, children: boolean) => {
      isManualInteraction.current = true;
      const isCurrentlyExpanded = expanded[id];

      setExpanded((prev) => ({ ...prev, [id]: !isCurrentlyExpanded }));

      if (!isCurrentlyExpanded && children) {
        const childrenAlreadyLoaded = allDocs.some((doc) => doc.parent === id);

        if (!childrenAlreadyLoaded) {
          setLoadingIds((prev) => [...prev, id]);
          try {
            const loadedChildren = getChildren(id);
            setAllDocs((prev) => [...prev, ...loadedChildren]);
          } catch (err) {
            console.error("Error loading children:", err);
          } finally {
            setLoadingIds((prev) =>
              prev.filter((loadingId) => loadingId !== id),
            );
          }
        }
      }

      setTimeout(() => {
        isManualInteraction.current = false;
      }, 100);
    },
    [expanded, allDocs],
  );

  const handleStaticRoute = useCallback(
    (routeName: string) => {
      navigation.closeDrawer();
      // @ts-expect-error
      router.push(`/${routeName === "index" ? "" : routeName}` as const);
    },
    [router, navigation],
  );

  const handleSearchPress = useCallback(() => {
    openSearch();
  }, [openSearch]);

  const colors = useMemo(
    () => ({
      icon: isDark ? COLORS["300"] : COLORS["700"],
    }),
    [isDark],
  );

  const isLoadingInitialDocs = allDocs.length === 0;

  const getItemLevel = useCallback(
    (doc: Docs) => {
      let level = 0;
      let currentParent = doc.parent;
      while (currentParent) {
        level++;
        const parent = allDocs.find((d) => d.id === currentParent);
        currentParent = parent?.parent;
      }
      return level;
    },
    [allDocs],
  );

  return (
    <View className="flex-1 bg-sepia-100 dark:bg-sepia-900">
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
          <Pressable
            className="p-2 items-center rounded-xl active:bg-sepia-200 dark:active:bg-sepia-700"
            onPress={handleSearchPress}
            accessibilityRole="button"
            accessibilityLabel="Abrir pesquisa"
          >
            <FontAwesome6
              name="magnifying-glass"
              size={15}
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
          <FontAwesome6 name={route.icon} size={15} color={colors.icon} />
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
          ref={flatListRef}
          data={flattenedDocs}
          keyExtractor={(doc) => doc.id}
          renderItem={({ item: doc }) => (
            <TreeItem
              doc={doc}
              level={getItemLevel(doc)}
              expanded={expanded}
              toggleExpand={toggleExpand}
              currentPathname={pathname}
              loadingIds={loadingIds}
              childrenMap={childrenMap}
              colors={colors}
              closeDrawer={navigation.closeDrawer}
              flattenedDocs={flattenedDocs}
            />
          )}
          onScrollToIndexFailed={(info) => {
            setTimeout(() => {
              flatListRef.current?.scrollToIndex({
                index: info.index,
                animated: true,
                viewPosition: 0.3,
              });
            }, 100);
          }}
        />
      )}
    </View>
  );
}
