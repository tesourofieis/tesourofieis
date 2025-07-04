import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1025Funchal() {
  return (
    <PageWrapper>
      <H1 text="Na Oitava da Dedicação da Igreja Catedral do Funchal, a 25 de Outubro" />

      <Missa />
    </PageWrapper>
  );
}
