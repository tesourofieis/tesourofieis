import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/25dedicacaoigreja";

export default function Page1022LisboaEvoraBeja() {
  return (
    <PageWrapper>
      <H1 text="Na Dedicação da Basílica de Mafra, a 22 de Outubro" />

      <Missa />
    </PageWrapper>
  );
}
