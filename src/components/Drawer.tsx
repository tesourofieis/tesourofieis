import {
  Building,
  Cross,
  CalendarDays,
  MessageSquare,
  Settings,
  ChevronDown,
  ChevronRight,
  FolderOpen,
  Folder,
  FileText,
  File,
} from "lucide-react-native";
import { burgundy } from "config";
import { usePathname, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Typography } from "~/components/typography";
import { COLORS } from "~/constants/Colors";
import { getAllTopLevelDocs, getChildren } from "~/services/search";

interface StaticRoute {
  name: string;
  title: string;
  icon: string;
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
  excerpt?: string; // Short snippet for search results
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
  keywords: string[]; // Minimal keyword array instead of searchBlob
  hasChildren: boolean;
}

const ALL_STATIC_ROUTES: StaticRoute[] = [
  { name: "index", title: "Início", icon: "landmark" },
  { name: "calendario", title: "Calendário", icon: "calendar-days" },
  { name: "configurar", title: "Configurar", icon: "gear" },
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "landmark":
      return Building;
    case "cross":
      return Cross;
    case "calendar-days":
      return CalendarDays;
    case "comment-medical":
      return MessageSquare;
    case "gear":
      return Settings;
    default:
      return File;
  }
};

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

    const intro = doc.content.introduction ?? "";
    const heading =
      doc.content.headings.length > 0
        ? doc.content.headings[0]?.body || ""
        : "";
    const description = !children ? intro || heading : "";

    const iconSize = 12;
    const chevronSize = 12;
    const chevronWidth = chevronSize + 12;
    const indent = level * chevronWidth;

    return (
      <TouchableOpacity
        onPress={handlePress}
        className="flex-row items-center py-2 px-4 active:bg-sepia-300 dark:active:bg-sepia-700"
        accessibilityRole="button"
        accessibilityLabel={doc.title}
      >
        {children && (
          <View
            style={{
              marginLeft: indent,
              width: chevronSize,
              alignItems: "center",
            }}
          >
            {loadingIds.includes(doc.id) ? (
              <ActivityIndicator size="small" />
            ) : isOpen ? (
              <ChevronDown
                size={chevronSize}
                color={isActive ? burgundy[500] : colors.icon}
              />
            ) : (
              <ChevronRight
                size={chevronSize}
                color={isActive ? burgundy[500] : colors.icon}
              />
            )}
          </View>
        )}

        <View
          style={{
            width: iconSize,
            alignItems: "center",
            marginLeft: children ? 12 : indent + chevronWidth,
            marginRight: 12,
          }}
        >
          {children ? (
            isOpen ? (
              <FolderOpen
                size={iconSize}
                color={isActive ? burgundy[500] : colors.icon}
              />
            ) : (
              <Folder
                size={iconSize}
                color={isActive ? burgundy[500] : colors.icon}
              />
            )
          ) : isActive ? (
            <FileText
              size={iconSize}
              color={isActive ? burgundy[500] : colors.icon}
            />
          ) : (
            <File
              size={iconSize}
              color={isActive ? burgundy[500] : colors.icon}
            />
          )}
        </View>

        <View style={{ flex: 1 }}>
          <>
            <Typography
              className={`text-sm bold ${
                isActive
                  ? "text-burgundy-600 dark:text-burgundy-400 bold"
                  : "text-sepia-800 dark:text-sepia-200"
              }`}
            >
              {doc.title}
            </Typography>
            {description && description !== doc.title && (
              <Typography
                className="text-sepia-500 text-xs font-display"
                numberOfLines={1}
              >
                {description}
              </Typography>
            )}
          </>
        </View>
      </TouchableOpacity>
    );
  },
);

export default function CustomDrawerContent({
  navigation,
}: CustomDrawerContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isDark = useColorScheme() === "dark";

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [allDocs, setAllDocs] = useState<Docs[]>([]);
  const [loadingIds, setLoadingIds] = useState<string[]>([]);

  const flatListRef = React.useRef<FlatList>(null);
  const hasScrolledToActive = React.useRef(false);

  const STATIC_ROUTES = useMemo(() => {
    // All static routes are now available on all platforms including web
    return ALL_STATIC_ROUTES;
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
          const list = map[doc.parent] || [];
          list.push(doc);
          map[doc.parent] = list;
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
          result.push(...flatten(childrenMap[doc.id] || [], level + 1));
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

      if (activeIndex !== -1 && activeIndex < flattenedDocs.length) {
        const attemptScroll = (attempt = 0) => {
          if (attempt > 10 || hasScrolledToActive.current) return;

          setTimeout(
            () => {
              if (
                flatListRef.current &&
                activeIndex < flattenedDocs.length &&
                !hasScrolledToActive.current
              ) {
                try {
                  flatListRef.current.scrollToIndex({
                    index: activeIndex,
                    animated: false,
                    viewPosition: 0.3,
                  });
                  hasScrolledToActive.current = true;
                } catch (err) {
                  attemptScroll(attempt + 1);
                }
              }
            },
            200 * (attempt + 1),
          );
        };

        attemptScroll();
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
      // @ts-ignore
      router.push(`/${routeName === "index" ? "" : routeName}` as const);
    },
    [router, navigation],
  );

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
    <View className="flex-1 pt-3 soft-background">
      {STATIC_ROUTES.map((route) => (
        <TouchableOpacity
          key={route.name}
          onPress={() => handleStaticRoute(route.name)}
          className={`flex-row items-center py-2 px-4 active:bg-sepia-300 dark:active:bg-sepia-700`}
          accessibilityRole="button"
          accessibilityLabel={route.title}
        >
          <View style={{ width: 18, alignItems: "center", marginRight: 12 }}>
            {(() => {
              const IconComponent = getIconComponent(route.icon);
              return <IconComponent size={10} color={colors.icon} />;
            })()}
          </View>
          <Typography className="text-sm bold text-sepia-800 dark:text-sepia-200">
            {route.title}
          </Typography>
        </TouchableOpacity>
      ))}

      {isLoadingInitialDocs ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" />
          <Typography className="text-sepia-500 mt-2">
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
        />
      )}
    </View>
  );
}
