import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/25dedicacaoigreja";

export default function Page1116CoimbraBraganca() {
  return (
    <PageWrapper>
      <H1 text="Na Dedicação das Igrejas Catedrais de Bragança e Coimbra, a 16 de Novembro" />

      <Missa />
    </PageWrapper>
  );
}
