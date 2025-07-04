import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/25dedicacaoigreja";

export default function Page1118() {
  return (
    <PageWrapper>
      <H1 text="Dedic. da Basílica dos S. S. Pedro e Paulo, a 18 de Novembro" />

      <Missa />
    </PageWrapper>
  );
}
