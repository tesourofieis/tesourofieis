import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/25dedicacaoigreja";

export default function Page1022() {
  return (
    <PageWrapper>
      <H1 text="Dedicação da Basílica de Mafra, a 22 de Outubro" />

      <Missa />
    </PageWrapper>
  );
}
