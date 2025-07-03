import { Text, View } from "react-native";
import DirectoryList from "~/components/DirectoryList";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageIndex() {
  return (
    <PageWrapper>
      <H1 text="Pequeno Ofício de Nossa Senhora" />

      <Text className="aside">
        Em conformidade com <Text className="em">Editio Typica</Text> do
        Breviário Romano.
      </Text>

      <DirectoryList slug="devocionario/oficio" />
    </PageWrapper>
  );
}
