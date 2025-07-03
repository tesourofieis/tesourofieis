import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/sumospontifices";

export default function Page0802Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Estêvão I, Papa e Mártir, a 2 de Agosto" />

      <Missa />
    </PageWrapper>
  );
}
