import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/sumospontifices";

export default function Page0111() {
  return (
    <PageWrapper>
      <H1 text="S. Higino, Papa e Mártir, a 11 de Janeiro" />

      <Missa />
    </PageWrapper>
  );
}
