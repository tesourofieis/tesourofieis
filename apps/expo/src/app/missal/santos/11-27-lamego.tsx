import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1127Lamego() {
  return (
    <PageWrapper>
      <H1 text="Na Oitava da Dedicação da Igreja Catedral da Lamego, a 27 de Novembro" />

      <Missa />
    </PageWrapper>
  );
}
