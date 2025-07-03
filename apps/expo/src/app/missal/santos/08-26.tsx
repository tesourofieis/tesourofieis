import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/sumospontifices";

export default function Page0826() {
  return (
    <PageWrapper>
      <H1 text="S. Zeferino, Papa e Mártir, a 26 de Agosto" />

      <Missa />
    </PageWrapper>
  );
}
