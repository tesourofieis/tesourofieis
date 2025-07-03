import { View } from "react-native";
import PageLinkCard from "./LinkCard";
import { useSearch } from "~/providers/search";

const DirectoryList = ({ slug }: { slug: string }) => {
  const { searchEngine } = useSearch();
  const searchResults = searchEngine.findBySlug(slug);

  return (
    <View className="">
      {searchResults.map((page, _index) => (
        <PageLinkCard
          key={page.url}
          href={page.url}
          title={page.title}
          description={page.body}
        />
      ))}
    </View>
  );
};

export default DirectoryList;
