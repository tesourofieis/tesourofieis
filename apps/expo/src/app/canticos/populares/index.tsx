import { Text, View } from "react-native";
import DirectoryList from "~/components/DirectoryList";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageIndex() {
  return (
    <PageWrapper>
      <H1 text="Populares" />

      <DirectoryList slug="canticos/populares" />
    </PageWrapper>
  );
}
