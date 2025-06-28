import { Text, View } from "react-native";
import DirectoryList from "~/components/DirectoryList";
import PageWrapper from "~/components/Page";

export default function PageIndex() {
  return (
    <PageWrapper>
      <Text className="h1">Orações Diversas</Text>

      <DirectoryList slug="missal/oracoesdiversas" />
    </PageWrapper>
  );
}
