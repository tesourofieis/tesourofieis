import { Text, View } from "react-native";
import DirectoryList from "~/components/DirectoryList";
import PageWrapper from "~/components/Page";

export default function PageIndex() {
  return (
    <PageWrapper>
      <Text className="h1">Orações</Text>

      <DirectoryList slug="devocionario/oracoes" />
    </PageWrapper>
  );
}
