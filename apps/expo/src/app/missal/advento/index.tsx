import { Text, View } from "react-native";
import DirectoryList from "~/components/DirectoryList";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageIndex() {
  return (
    <PageWrapper>
      <H1 text="Advento" />

      <DirectoryList slug="missal/advento" />
    </PageWrapper>
  );
}
