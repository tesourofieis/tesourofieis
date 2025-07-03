import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/13doutores";

export default function Page0421() {
  return (
    <PageWrapper>
      <H1 text="S. Anselmo, B. Conf. e Doutor, a 21 de Abril" />

      <Missa />
    </PageWrapper>
  );
}
