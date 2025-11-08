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
  { name: "configurar", title: "Configurar", icon: "gears" },
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
    const isActive =
      currentPathname.endsWith(doc.url) || currentPathname === doc.url;

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

  useEffect(() => {
    if (allDocs.length === 0) return;

    console.log("Pathname changed:", pathname);

    const findAndExpandActiveRoute = async () => {
      let currentDocs = [...allDocs];

      const activeDoc = currentDocs.find((doc) => {
        const matches = pathname.endsWith(doc.url) || pathname === doc.url;
        console.log(
          `Checking doc: ${doc.id}, url: ${doc.url}, pathname: ${pathname}, matches: ${matches}`,
        );
        return matches;
      });

      console.log("Active doc found:", activeDoc?.id);

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
        console.log("Adding parent to expand:", currentParent);
        currentParent = parentDoc.parent;
      }

      console.log("Parents to expand (bottom to top):", parentsToExpand);

      // Reverse to load from top to bottom
      const parentsTopToBottom = [...parentsToExpand].reverse();
      console.log("Parents to expand (top to bottom):", parentsTopToBottom);

      // Load children sequentially from top level down
      for (const parentId of parentsTopToBottom) {
        const childrenAlreadyLoaded = currentDocs.some(
          (doc) => doc.parent === parentId,
        );

        if (!childrenAlreadyLoaded) {
          console.log("Loading children for:", parentId);
          try {
            const children = getChildren(parentId);
            console.log(
              `Loaded ${children.length} children for ${parentId}:`,
              children.map((c) => c.id),
            );
            currentDocs = [...currentDocs, ...children];
          } catch (err) {
            console.error("Error loading children for active route:", err);
          }
        } else {
          console.log("Children already loaded for:", parentId);
        }
      }

      if (currentDocs.length > allDocs.length) {
        console.log(
          `Updating allDocs: ${allDocs.length} -> ${currentDocs.length}`,
        );
        setAllDocs(currentDocs);
      }

      const newExpanded: Record<string, boolean> = {};
      parentsToExpand.forEach((id) => {
        newExpanded[id] = true;
      });
      console.log("Setting expanded:", newExpanded);
      setExpanded(newExpanded);
    };

    findAndExpandActiveRoute();
  }, [pathname]);

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
    </View>
  );
}
