import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { sidebar } from "~/sidebar";
import PageLinkCard from "./LinkCard";

const DirectoryList = ({ slug }: { slug: string }) => {
  // Filter logic to determine relevant pages for the current directory
  const filteredPages = sidebar.filter((page) =>
    page.link.includes(`/${slug}`),
  );

  return (
    <View className="">
      {filteredPages.map((page, _index) => (
        <PageLinkCard key={page.link} href={page.link} title={page.title} />
      ))}
    </View>
  );
};

export default DirectoryList;
