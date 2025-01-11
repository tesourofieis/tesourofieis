import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { type SidebarItem, sidebar } from "~/sidebar";

type DrawerItemProps = {
  node: HierarchyNode;
  path: string;
  level: number;
  expanded: { [key: string]: boolean };
  toggleExpand: (path: string) => void;
};

// utils/createHierarchy.ts
type HierarchyNode = {
  title: string;
  description?: string;
  link?: string;
  children: { [key: string]: HierarchyNode };
};

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

      // If this is the last part, add the item details
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
}: DrawerItemProps) => {
  const hasChildren = Object.keys(node.children).length > 0;
  const isExpanded = expanded[path];

  return (
    <View style={{ marginLeft: level * 16 }}>
      <Pressable
        onPress={() => {
          if (hasChildren) {
            toggleExpand(path);
          }
        }}
        className={`flex-row items-center justify-between py-3 px-4 ${
          hasChildren ? "bg-gray-50 dark:bg-gray-800" : ""
        }`}
      >
        {node.link ? (
          <Link href={node.link} asChild>
            <Pressable className="flex-1">
              <Text className="text-base dark:text-white">{node.title}</Text>
              {node.description && (
                <Text className="text-sm text-gray-500 dark:text-gray-400">
                  {node.description}
                </Text>
              )}
            </Pressable>
          </Link>
        ) : (
          <View className="flex-1">
            <Text className="text-base font-medium dark:text-white">
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
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default function CustomDrawerContent(props) {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const hierarchy = createHierarchy(sidebar);

  const toggleExpand = (path: string) => {
    setExpanded((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  return (
    <DrawerContentScrollView {...props}>
      <View className="flex-1">
        <Link href="/" asChild>
          <Pressable className="p-4 border-b border-gray-200 dark:border-gray-700">
            <Text className="text-lg font-bold dark:text-white">Home</Text>
          </Pressable>
        </Link>

        {Object.entries(hierarchy).map(([key, node]) => (
          <DrawerItem
            key={key}
            node={node}
            path={key}
            level={0}
            expanded={expanded}
            toggleExpand={toggleExpand}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
