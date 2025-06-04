import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Link, usePathname } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Pressable,
  type ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { type SidebarItem, sidebar } from "~/sidebar";

type HierarchyNode = {
  title: string;
  description?: string;
  link?: string;
  children: { [key: string]: HierarchyNode };
};

type DrawerItemProps = {
  node: HierarchyNode;
  path: string;
  level: number;
  expanded: { [key: string]: boolean };
  toggleExpand: (path: string) => void;
  isActive: boolean;
  activeItemRef: React.RefObject<View>;
};

function searchHierarchy(
  hierarchy: { [key: string]: HierarchyNode },
  searchText: string,
): { [key: string]: HierarchyNode } {
  const filtered: { [key: string]: HierarchyNode } = {};

  Object.entries(hierarchy).map(([key, node]) => {
    const matchesTitle = node.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesDescription = node.description
      ?.toLowerCase()
      .includes(searchText.toLowerCase());
    const childMatches = searchHierarchy(node.children, searchText);

    if (
      matchesTitle ||
      matchesDescription ||
      Object.keys(childMatches).length > 0
    ) {
      filtered[key] = {
        ...node,
        children: childMatches,
      };
    }
  });

  return filtered;
}

export function createHierarchy(items: SidebarItem[]) {
  const root: { [key: string]: HierarchyNode } = {};
  for (const item of items) {
    const parts = item.link.split("/").filter(Boolean);
    let current = root;
    for (let index = 0; index < parts.length; index++) {
      const part = parts[index];
      if (!current[part]) {
        current[part] = {
          title: part,
          children: {},
        };
      }
      if (index === parts.length - 1) {
        current[part].title = item.title;
        current[part].description = item.description;
        current[part].link = item.link;
      }
      current = current[part].children;
    }
  }
  return root;
}

const DrawerItem = ({
  node,
  path,
  level,
  expanded,
  toggleExpand,
  isActive,
  activeItemRef,
}: DrawerItemProps) => {
  const hasChildren = Object.keys(node.children).length > 0;
  const isExpanded = expanded[path];
  const pathname = usePathname();

  return (
    <View
      style={{ marginLeft: level * 16 }}
      ref={isActive ? activeItemRef : undefined}
      collapsable={false}
    >
      <Pressable
        onPressOut={() => {
          if (hasChildren) {
            toggleExpand(path);
          }
        }}
        className={`flex-row items-center justify-between py-3 px-4 rounded-lg ${
          isActive ? "bg-gray-100 dark:bg-gray-800" : ""
        }`}
      >
        {node.link ? (
          // @ts-ignore
          <Link href={node.link} asChild>
            <Pressable
              className="flex-1"
              onPressOut={(e) => {
                // Prevent the parent Pressable's onPress from firing
                e.stopPropagation();
              }}
            >
              <Text
                className={`text-base ${
                  isActive ? "font-bold" : ""
                } dark:text-white`}
              >
                {node.title}
              </Text>
              {node.description && (
                <Text className="text-sm text-gray-500 dark:text-gray-400">
                  {node.description}
                </Text>
              )}
            </Pressable>
          </Link>
        ) : (
          <View className="flex-1">
            <Text className="text-base capitalize font-medium dark:text-white">
              {node.title}
            </Text>
          </View>
        )}
        {hasChildren && (
          <Text className="text-lg dark:text-white">
            {isExpanded ? "−" : "+"}
          </Text>
        )}
      </Pressable>
      {hasChildren && isExpanded && (
        <View>
          {Object.entries(node.children).map(([key, childNode]) => (
            <DrawerItem
              key={`${path}/${key}`}
              node={childNode}
              path={`${path}/${key}`}
              level={level + 1}
              expanded={expanded}
              toggleExpand={toggleExpand}
              isActive={childNode.link === pathname}
              activeItemRef={activeItemRef}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default function CustomDrawerContent(props) {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [searchText, setSearchText] = useState("");
  const pathname = usePathname();
  const activeItemRef = useRef<View>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const lastPathRef = useRef<string>("");
  const hierarchy = createHierarchy(sidebar);

  const filteredHierarchy = searchText
    ? searchHierarchy(hierarchy, searchText)
    : hierarchy;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (searchText) {
      const allPaths = new Set<string>();

      function collectPaths(
        nodes: { [key: string]: HierarchyNode },
        parentPath = "",
      ) {
        Object.entries(nodes).forEach(([key, node]) => {
          const currentPath = parentPath ? `${parentPath}/${key}` : key;
          allPaths.add(currentPath);
          collectPaths(node.children, currentPath);
        });
      }

      collectPaths(filteredHierarchy);

      setExpanded((prev) => {
        const newExpanded = { ...prev };
        allPaths.forEach((path) => {
          newExpanded[path] = true;
        });
        return newExpanded;
      });
    } else {
      setExpanded(expandParentPaths(pathname));
    }
  }, [searchText, pathname]);

  const getRootSection = (path: string): string => {
    const parts = path.split("/").filter(Boolean);
    return parts[0] || "";
  };

  const expandParentPaths = (link: string) => {
    const parts = link.split("/").filter(Boolean);
    const newExpanded: { [key: string]: boolean } = {};
    let currentPath = "";

    parts.map((part) => {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      newExpanded[currentPath] = true;
    });

    return newExpanded;
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (pathname) {
      const currentSection = getRootSection(pathname);
      const previousSection = getRootSection(lastPathRef.current);

      if (currentSection !== previousSection) {
        setExpanded(expandParentPaths(pathname));
      } else {
        setExpanded((prev) => ({
          ...prev,
          ...expandParentPaths(pathname),
        }));
      }

      lastPathRef.current = pathname;

      const scrollAttempts = [50, 150, 300];

      scrollAttempts.map((delay) => {
        setTimeout(() => {
          if (activeItemRef.current) {
            activeItemRef.current.measure(
              (_x, _y, _width, _height, _pageX, pageY) => {
                if (pageY > 0) {
                  scrollViewRef.current?.scrollTo({
                    y: Math.max(0, pageY - 100),
                    animated: true,
                  });
                }
              },
            );
          }
        }, delay);
      });
    }
  }, [pathname]);

  const toggleExpand = (path: string) => {
    setExpanded((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const renderItem = (key: string, node: HierarchyNode, path: string) => (
    <DrawerItem
      key={key}
      node={node}
      path={path}
      level={0}
      expanded={expanded}
      toggleExpand={toggleExpand}
      isActive={node.link === pathname}
      activeItemRef={activeItemRef}
    />
  );

  return (
    <DrawerContentScrollView {...props} ref={scrollViewRef}>
      <View className="flex-1">
        <View className="py-4">
          <View className="flex-row items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <FontAwesome name="search" size={16} color="#9CA3AF" />
            <TextInput
              className="flex-1 ml-2 text-base dark:text-white"
              placeholder="Search..."
              placeholderTextColor="#9CA3AF"
              value={searchText}
              onChangeText={setSearchText}
            />
            {searchText ? (
              <Pressable onPressOut={() => setSearchText("")}>
                <Text className="text-gray-500 dark:text-gray-400 text-lg">
                  ×
                </Text>
              </Pressable>
            ) : null}
          </View>
        </View>

        <Link href="/" asChild>
          <Pressable
            className={`p-4 ${
              pathname === "/" ? "bg-gray-100 dark:bg-gray-800  rounded-lg" : ""
            }`}
          >
            <Text
              className={`text-lg ${
                pathname === "/" ? "font-bold" : ""
              } dark:text-white`}
            >
              Home
            </Text>
          </Pressable>
        </Link>

        {Object.keys(filteredHierarchy).length > 0 ? (
          Object.entries(filteredHierarchy).map(([key, node]) =>
            renderItem(key, node, key),
          )
        ) : (
          <View className="p-4">
            <Text className="text-gray-500 dark:text-gray-400 text-center">
              No results found
            </Text>
          </View>
        )}
      </View>
    </DrawerContentScrollView>
  );
}
