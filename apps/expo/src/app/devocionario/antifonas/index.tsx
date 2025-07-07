import DirectoryList from "~/components/DirectoryList";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageIndex() {
  return (
    <PageWrapper>
      <H1 text="Antífonas de Nossa Senhora" />

      <DirectoryList slug="devocionario/antifonas" />
    </PageWrapper>
  );
}
