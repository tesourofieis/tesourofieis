import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/sumospontifices";

export default function Page1119Outro() {
  return (
    <PageWrapper>
      <H1 text="Comemoração de S. Ponciano, Papa e Mártir, a 19 de Agosto" />

      <Missa />
    </PageWrapper>
  );
}
