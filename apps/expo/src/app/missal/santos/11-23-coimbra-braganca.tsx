import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "./../comum/25dedicacaoigreja";

export default function Page1123CoimbraBraganca() {
  return (
    <PageWrapper>
      <H1 text="Na Oitava da Dedicação das Igrejas Catedrais de Bragança e Coimbra, a 23 de Novembro" />

      <Missa />
    </PageWrapper>
  );
}
