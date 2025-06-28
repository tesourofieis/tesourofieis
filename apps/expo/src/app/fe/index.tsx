import { Text, View } from "react-native";
import DirectoryList from "~/components/DirectoryList";
import PageWrapper from "~/components/Page";

export default function PageIndex() {
  return (
    <PageWrapper>
      <Text className="h1">Fé</Text>

      <DirectoryList slug="fe" />
    </PageWrapper>
  );
}
