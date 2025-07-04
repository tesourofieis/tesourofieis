import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/16abades";

export default function Page0321() {
  return (
    <PageWrapper>
      <H1 text="S. Bento, Abade, a 21 de Março" />

      <Missa />
    </PageWrapper>
  );
}
