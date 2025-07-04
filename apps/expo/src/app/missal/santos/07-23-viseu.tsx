import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page0723Viseu() {
  return (
    <PageWrapper>
      <H1 text="Na Dedicação da Igreja Catedral de Viseu, a 23 de Julho" />

      <Missa />
    </PageWrapper>
  );
}
