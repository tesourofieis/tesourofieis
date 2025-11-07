import { Typography } from "~/components/typography";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { usePathname, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { COLORS } from "~/constants/Colors";
import { getAllTopLevelDocs, getChildren } from "~/services/search";
import PageWrapper from "~/components/Page";

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

const RENDER_BATCH_SIZE = 4;

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export const TreeItem = React.memo(
  ({
    doc,
    level,
    expanded,
    toggleExpand,
    searchHighlight,
    currentPathname,
    loadingIds,
    childrenMap,
  }: {
    doc: Docs;
    level: number;
    expanded: Record<string, boolean>;
    toggleExpand: (id: string, children: boolean) => void;
    searchHighlight?: string;
    currentPathname: string;
    loadingIds: string[];
    childrenMap: Record<string, Docs[]>;
  }) => {
    const router = useRouter();
    const isDark = useColorScheme() === "dark";

    const children = doc.hasChildren;
    const isOpen = expanded[doc.id];

    const handlePress = useCallback(() => {
      if (children) {
        toggleExpand(doc.id, children);
      } else {
        router.push({
          pathname: doc.url,
          params: { docId: doc.id },
        } as any);
      }
    }, [children, doc.url, doc.id, router, toggleExpand]);

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
        searchHighlight={searchHighlight}
        currentPathname={currentPathname}
        loadingIds={loadingIds}
        childrenMap={childrenMap}
      />
    );

    const description = !children
      ? doc.content.introduction ||
        (doc.content.headings.length > 0 ? doc.content.headings[0].body : "")
      : "";

    return (
      <View>
        <View className="mx-4 py-1 border-b border-sepia">
          <TouchableOpacity
            onPress={handlePress}
            className="flex-row items-center"
          >
            <View className="flex-1" style={{ paddingLeft: level * 16 }}>
              <Typography className="vernacular text-xs">
                {highlightText(doc.title, searchHighlight)}
              </Typography>
              {description && description !== doc.title && (
                <Typography
                  className="text-pretty text-sepia-600 dark:text-sepia-300 text-xs mt-1"
                  numberOfLines={2}
                >
                  {highlightText(description, searchHighlight)}
                </Typography>
              )}
            </View>
            <View className="mr-2">
              {children ? (
                loadingIds.includes(doc.id) ? (
                  <ActivityIndicator size="small" className="text-red-500" />
                ) : (
                  <FontAwesome6
                    name={isOpen ? "chevron-up" : "chevron-down"}
                    size={12}
                    color={!isDark ? COLORS["700"] : COLORS["300"]}
                  />
                )
              ) : (
                <FontAwesome6
                  name="arrow-right"
                  size={12}
                  color={!isDark ? COLORS["700"] : COLORS["300"]}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>

        {visibleChildren.length > 0 && (
          <FlatList
            data={visibleChildren}
            renderItem={renderChild}
            keyExtractor={(item) => item.id}
            removeClippedSubviews
            maxToRenderPerBatch={RENDER_BATCH_SIZE}
            windowSize={8}
            getItemLayout={(_, i) => ({ length: 60, offset: 60 * i, index: i })}
          />
        )}
      </View>
    );
  },
);

const highlightText = (text: string, highlight?: string) => {
  if (!highlight || highlight.length < 2)
    return <Typography>{text}</Typography>;

  const normalizedHighlight = normalize(highlight);
  const words = normalizedHighlight
    .split(/\s+/)
    .filter((word) => word.length > 1);

  let result = text;
  words.forEach((word) => {
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(\\b${escapedWord}\\b)`, "gi");
    result = result.replace(regex, "<mark>$1</mark>");
  });

  if (result === text) return <Typography>{text}</Typography>;

  const parts = result.split(/(<mark>.*?<\/mark>)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("<mark>") && part.endsWith("</mark>")) {
          const markedText = part.slice(6, -7);
          return (
            <Typography key={part + i + "mark"} className="bg-red-400 italic">
              {markedText}
            </Typography>
          );
        }
        return <Typography key={part + i}>{part}</Typography>;
      })}
    </>
  );
};

export const ListDocs = () => {
  const pathname = usePathname();
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

  const renderContent = () => {
    const isLoadingInitialDocs = allDocs.length === 0;

    if (isLoadingInitialDocs) {
      return (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" className="text-red-500" />
          <Typography className="text-sepia-500 dark:text-sepia-400 mt-2">
            A carregar documentos...
          </Typography>
        </View>
      );
    }

    return (
      <PageWrapper>
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
            />
          )}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
      </PageWrapper>
    );
  };

  return (
    <View className="flex-1 bg-sepia-100 dark:bg-sepia-800">
      {renderContent()}
    </View>
  );
};
