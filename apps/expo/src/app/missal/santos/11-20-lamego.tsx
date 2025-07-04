import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1120Lamego() {
  return (
    <PageWrapper>
      <H1 text="Na Dedicação da Igreja Catedral de Lamego, a 20 de Novembro" />

      <Missa />
    </PageWrapper>
  );
}
