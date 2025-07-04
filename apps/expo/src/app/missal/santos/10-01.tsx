import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/11confessorespontifices1";

export default function Page1001() {
  return (
    <PageWrapper>
      <H1 text="B. Remígio, B. e Conf., a 1 de Outubro" />

      <Missa />
    </PageWrapper>
  );
}
