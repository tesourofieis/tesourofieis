import { Text, View } from "react-native";
import DirectoryList from "~/components/DirectoryList";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageIndex() {
  return (
    <PageWrapper>
      <H1 text="Devocionário" />

      <DirectoryList slug="devocionario" />
    </PageWrapper>
  );
}
