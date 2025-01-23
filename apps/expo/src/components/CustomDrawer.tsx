import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Link, usePathname } from "expo-router";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
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

// Memoized drawer item to prevent unnecessary re-renders
const DrawerItem = memo(
  ({
    title,
    description,
    link,
    hasChildren,
    isExpanded,
    isActive,
    onToggle,
    level,
  }) => {
    return (
      <View style={{ marginLeft: level * 16 }}>
        <Pressable
          onPress={hasChildren ? onToggle : undefined}
          className={`flex-row items-center justify-between py-3 px-4 rounded-lg ${
            isActive ? "bg-gray-100 dark:bg-gray-800" : ""
          }`}
        >
          {link ? (
            <Link href={link} asChild>
              <Pressable className="flex-1">
                <Text
                  className={`text-base ${
                    isActive ? "font-bold" : ""
                  } dark:text-white`}
                >
                  {title}
                </Text>
                {description && (
                  <Text className="text-sm text-gray-500 dark:text-gray-400">
                    {description}
                  </Text>
                )}
              </Pressable>
            </Link>
          ) : (
            <Text className="text-base capitalize font-medium dark:text-white">
              {title}
            </Text>
          )}
          {hasChildren && (
            <Text className="text-lg dark:text-white">
              {isExpanded ? "−" : "+"}
            </Text>
          )}
        </Pressable>
      </View>
    );
  },
);

const CustomDrawerContent = (props) => {
  const pathname = usePathname();

  // Memoize hierarchy creation
  const hierarchy = useMemo(() => createHierarchy(sidebar), []);

  // Memoize the active path expansion
  const initialExpanded = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    const expanded = {};
    let currentPath = "";

    parts.forEach((part) => {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      expanded[currentPath] = true;
    });

    return expanded;
  }, [pathname]);

  const [expanded, setExpanded] = useState(initialExpanded);
  const [searchText, setSearchText] = useState("");

  // Memoize filtered hierarchy
  const filteredHierarchy = useMemo(
    () => (searchText ? searchHierarchy(hierarchy, searchText) : hierarchy),
    [searchText, hierarchy],
  );

  const toggleExpand = useCallback((path: string) => {
    setExpanded((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  }, []);

  // Render tree recursively but with memoized children
  const renderTree = useCallback(
    (node, path = "", level = 0) => {
      return Object.entries(node).map(([key, item]) => {
        const currentPath = path ? `${path}/${key}` : key;
        const hasChildren = Object.keys(item.children).length > 0;

        return (
          <View key={currentPath}>
            <DrawerItem
              title={item.title}
              description={item.description}
              link={item.link}
              hasChildren={hasChildren}
              isExpanded={expanded[currentPath]}
              isActive={item.link === pathname}
              onToggle={() => toggleExpand(currentPath)}
              level={level}
            />
            {hasChildren && expanded[currentPath] && (
              <View>{renderTree(item.children, currentPath, level + 1)}</View>
            )}
          </View>
        );
      });
    },
    [expanded, pathname, toggleExpand],
  );

  return (
    <DrawerContentScrollView {...props}>
      <View className="p-4">
        <View className="flex-row items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <FontAwesome name="search" size={16} color="#9CA3AF" />
          <TextInput
            className="flex-1 ml-2 text-base dark:text-white"
            placeholder="Search..."
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText && (
            <Pressable onPress={() => setSearchText("")}>
              <Text className="text-gray-500 dark:text-gray-400 text-lg">
                ×
              </Text>
            </Pressable>
          )}
        </View>
      </View>

      {Object.keys(filteredHierarchy).length > 0 ? (
        renderTree(filteredHierarchy)
      ) : (
        <Text className="text-gray-500 dark:text-gray-400 text-center">
          No results found
        </Text>
      )}
    </DrawerContentScrollView>
  );
};

export default memo(CustomDrawerContent);
