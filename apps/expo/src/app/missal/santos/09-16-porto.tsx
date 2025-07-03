import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/25dedicacaoigreja";

export default function Page0916Porto() {
  return (
    <PageWrapper>
      <H1 text="Na Dedicação da Igreja Catedral do Porto, a 16 de Setembro" />

      <Missa />
    </PageWrapper>
  );
}
