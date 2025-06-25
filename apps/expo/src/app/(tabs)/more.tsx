import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { COLORS } from "~/constants/Colors";
import { type SidebarItem, sidebar } from "~/sidebar";

type HierarchyNode = {
  title: string;
  description?: string;
  link?: string;
  children: { [key: string]: HierarchyNode };
};

type MenuItemProps = {
  node: HierarchyNode;
  path: string;
  level: number;
  expanded: { [key: string]: boolean };
  toggleExpand: (path: string) => void;
  isActive: boolean;
};

const createHierarchy = (items: SidebarItem[]) => {
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
};

const searchHierarchy = (
  hierarchy: { [key: string]: HierarchyNode },
  searchText: string,
): { [key: string]: HierarchyNode } => {
  const filtered: { [key: string]: HierarchyNode } = {};

  Object.entries(hierarchy).forEach(([key, node]) => {
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
};

const MenuItem = ({
  node,
  path,
  level,
  expanded,
  toggleExpand,
  isActive,
}: MenuItemProps) => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const textColor = colorScheme === "light" ? COLORS["800"] : COLORS["200"];
  const subtextColor = colorScheme === "light" ? COLORS["700"] : COLORS["300"];
  const iconColor = colorScheme === "light" ? COLORS["600"] : COLORS["400"];

  const hasChildren = Object.keys(node.children).length > 0;
  const isExpanded = expanded[path];

  const handlePress = () => {
    if (hasChildren) {
      toggleExpand(path);
    } else if (node.link) {
      router.push({
        pathname: node.link.slice(1),
      });
    }
  };

  const ItemComponent = level === 0 ? MainMenuItem : SubMenuItem;

  return (
    <View style={{ marginLeft: level * 16 }}>
      <ItemComponent
        title={node.title}
        description={node.description}
        hasChildren={hasChildren}
        isExpanded={isExpanded}
        isActive={isActive}
        onPress={handlePress}
        textColor={textColor}
        subtextColor={subtextColor}
        iconColor={iconColor}
      />
      {hasChildren && isExpanded && (
        <View>
          {Object.entries(node.children).map(([key, childNode]) => (
            <MenuItem
              key={`${path}/${key}`}
              node={childNode}
              path={`${path}/${key}`}
              level={level + 1}
              expanded={expanded}
              toggleExpand={toggleExpand}
              isActive={childNode.link === router.pathname}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const MainMenuItem = ({
  title,
  description,
  hasChildren,
  isExpanded,
  isActive,
  onPress,
  textColor,
  subtextColor,
  iconColor,
}) => (
  <View className="bg-sepia-50 dark:bg-sepia-900 border rounded-lg border-sepia-300 p-1 m-1 dark:border-sepia-800">
    <TouchableOpacity
      className={`m-2 p-3 flex-row items-center justify-between rounded-lg ${
        isActive ? "bg-sepia-100 dark:bg-sepia-800" : ""
      }`}
      onPress={onPress}
    >
      <View className="flex-row items-center flex-1">
        <View>
          <Text
            className={`font-bold text-lg ${isActive ? "font-extrabold" : ""}`}
            style={{ color: textColor }}
          >
            {title}
          </Text>
          {description && (
            <Text className="text-sm" style={{ color: subtextColor }}>
              {description}
            </Text>
          )}
        </View>
      </View>
      {hasChildren ? (
        <FontAwesome6
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={16}
          color={iconColor}
        />
      ) : (
        <FontAwesome6 name="arrow-right" color={COLORS["500"]} size={16} />
      )}
    </TouchableOpacity>
  </View>
);

const SubMenuItem = ({
  title,
  description,
  hasChildren,
  isExpanded,
  isActive,
  onPress,
  textColor,
  subtextColor,
  iconColor,
}) => (
  <TouchableOpacity
    className={`flex-row items-center justify-between p-3 gap-2 rounded-lg ${
      isActive ? "bg-sepia-100 dark:bg-sepia-800" : ""
    }`}
    onPress={onPress}
  >
    <View className="flex-row items-center flex-1">
      <View>
        <Text
          className={`text-base text-wrap ${isActive ? "font-bold" : ""}`}
          style={{ color: textColor }}
        >
          {title}
        </Text>
        {description && (
          <Text className="text-sm" style={{ color: subtextColor }}>
            {description}
          </Text>
        )}
      </View>
    </View>
    {hasChildren ? (
      <FontAwesome6
        name={isExpanded ? "chevron-up" : "chevron-down"}
        size={13}
        color={iconColor}
      />
    ) : (
      <FontAwesome6 name="arrow-right" color={iconColor} size={13} />
    )}
  </TouchableOpacity>
);

export default function MoreScreen() {
  const router = useRouter();
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const hierarchy = createHierarchy(sidebar);

  const filteredHierarchy = searchQuery
    ? searchHierarchy(hierarchy, searchQuery)
    : hierarchy;

  const expandParentPaths = (link: string) => {
    const parts = link.split("/").filter(Boolean);
    const newExpanded: { [key: string]: boolean } = {};
    let currentPath = "";

    parts.forEach((part) => {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      newExpanded[currentPath] = true;
    });

    return newExpanded;
  };

  useEffect(() => {
    if (searchQuery) {
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
      // Reset to collapsed state when search is cleared
      setExpanded({});
    }
  }, [searchQuery]); // Remove filteredHierarchy dependency

  const toggleExpand = (path: string) => {
    setExpanded((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  return (
    <ScrollView className="flex-1 p-3 bg-sepia-200 dark:bg-sepia-800">
      <TextInput
        className="bg-sepia-100 dark:bg-sepia-800 text-sepia-800 dark:text-sepia-200 p-3 border border-sepia-300 dark:border-sepia-700 rounded-lg m-1 mb-4"
        placeholder="Procurar..."
        placeholderTextColor={COLORS["500"]}
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {Object.keys(filteredHierarchy).length > 0 ? (
        Object.entries(filteredHierarchy).map(([key, node]) => (
          <MenuItem
            key={key}
            node={node}
            path={key}
            level={0}
            expanded={expanded}
            toggleExpand={toggleExpand}
            isActive={false} // Remove router.pathname dependency for now
          />
        ))
      ) : (
        <View className="p-4">
          <Text className="text-sepia-500 dark:text-sepia-400 text-center">
            Nenhum resultado encontrado
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
