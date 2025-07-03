import { Text, View } from "react-native";
import DirectoryList from "~/components/DirectoryList";
import PageWrapper from "~/components/Page";

export default function PageIndex() {
  return (
    <PageWrapper>
      <Text className="h1">Pequeno Ofício de Nossa Senhora</Text>

      <Text className="aside">
        Em conformidade com <Text className="em">Editio Typica</Text> do
        Breviário Romano.
      </Text>

      <DirectoryList slug="devocionario/oficio" />
    </PageWrapper>
  );
}
