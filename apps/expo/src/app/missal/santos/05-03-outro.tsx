import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0503Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Alexandre, Papa e Mártir, a 3 de Maio" />

      <Missa />
    </PageWrapper>
  );
}
