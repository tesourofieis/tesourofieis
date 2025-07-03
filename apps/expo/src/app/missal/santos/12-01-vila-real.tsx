import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./../comum/25dedicacaoigreja";

export default function Page1201VilaReal() {
  return (
    <PageWrapper>
      <H1 text="Na Oitava da Dedicação da Igreja Catedral de Vila Real, a 1 de Dezembro" />

      <Missa />
    </PageWrapper>
  );
}
