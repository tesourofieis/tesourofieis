import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0916Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Cornélio, Papa e Mártir, a 16 de Setembro" />

      <Missa />
    </PageWrapper>
  );
}
