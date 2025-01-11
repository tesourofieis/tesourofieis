import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { sidebar } from "~/sidebar";

const DirectoryList = ({ slug }: { slug: string }) => {
  // Filter logic to determine relevant pages for the current directory
  const filteredPages = sidebar.filter((page) => page.link.includes(slug));

  return (
    <View style={styles.container}>
      {filteredPages.map((page, _index) => (
        <Link
          key={page.link}
          href={{
            pathname: page.link,
          }}
          className="my-1 w-full flex-1 justify-between rounded-lg border-l text-sepia-600 dark:text-sepia-300 border-l-sepia-300 p-4 no-underline hover:bg-sepia-200 dark:border-l-sepia-700 dark:hover:bg-sepia-900"
          asChild
        >
          <Text style={styles.title}>{page.title}</Text>
        </Link>
      ))}
    </View>
  );
};

export default DirectoryList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  linkCard: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
