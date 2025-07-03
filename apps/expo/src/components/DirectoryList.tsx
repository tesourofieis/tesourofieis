import { ActivityIndicator, View, Text } from "react-native"; // Add Text for error messages/no results
import { useSearch } from "~/providers/search";
import PageLinkCard from "./LinkCard";
import React, { useEffect, useState } from "react"; // Import useState and useEffect

const DirectoryList = ({ slug }: { slug: string }) => {
  const { findBySlug, isReady, error: searchError } = useSearch(); // Get isReady and error too
  const [searchResults, setSearchResults] = useState<Docs[]>([]); // State to store results
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for errors

  useEffect(() => {
    const fetchResults = async () => {
      if (!isReady) {
        // If search provider isn't ready yet, set loading and wait
        setIsLoading(true);
        return; // Exit and wait for `isReady` to become true
      }

      setIsLoading(true); // Start loading
      setError(null); // Clear previous errors
      try {
        const results = await findBySlug(slug); // Await the promise
        setSearchResults(results);
      } catch (err: any) {
        console.error("Error fetching by slug:", err);
        setError(err.message || "Failed to load directory.");
      } finally {
        setIsLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchResults();
  }, [slug, isReady, findBySlug]); // Re-run effect when slug changes or provider becomes ready

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <ActivityIndicator size="large" />
        <Text className="mt-2 text-gray-600 dark:text-gray-400">
          Carregando diretório...
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
          key={page.url} // Use page.url as key, assuming it's unique
          href={page.url}
          title={page.title}
          description={page.body}
        />
      ))}
    </View>
  );
};

export default DirectoryList;
