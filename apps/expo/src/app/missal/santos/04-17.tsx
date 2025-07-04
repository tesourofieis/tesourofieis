import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0417() {
  return (
    <PageWrapper>
      <H1 text="S. Aniceto, Papa e Mártir, a 17 de Abril" />

      <Missa />
    </PageWrapper>
  );
}
