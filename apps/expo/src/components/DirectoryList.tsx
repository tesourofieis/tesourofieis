import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import type { Docs } from "~/app/(tabs)/more";
import { findBySlug } from "~/services/search";
import PageLinkCard from "./LinkCard";

const DirectoryList = ({ slug }: { slug: string }) => {
  const [searchResults, setSearchResults] = useState<Docs[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      setError(null);
      try {
        setIsLoading(true);
        const results = await findBySlug(slug);
        setSearchResults(results);
      } catch (err: any) {
        console.error("Error fetching by slug:", err);
        setError(err.message || "Failed to load directory.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [slug, findBySlug]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <ActivityIndicator size="large" />
        <Text className="mt-2 text-gray-600 dark:text-gray-400">
          Carregando directório...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-red-500 text-center">{error}</Text>
      </View>
    );
  }

  if (searchResults.length === 0) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-gray-600 dark:text-gray-400">
          Nenhum item encontrado neste diretório.
        </Text>
      </View>
    );
  }

  return (
    <View className="">
      {searchResults.map((page) => (
        <PageLinkCard
          key={page.url}
          href={page.url}
          title={page.title}
          description={
            page.content.comment ??
            page.content.introduction ??
            page.content.headings.map((i) => i.body).toString()
          }
        />
      ))}
    </View>
  );
};

export default DirectoryList;
