import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/sumospontifices";

export default function Page0527Outro() {
  return (
    <PageWrapper>
      <H1 text="S. João, Papa e Mártir, a 27 de Maio" />

      <Missa />
    </PageWrapper>
  );
}
