import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/sumospontifices";

export default function Page0426() {
  return (
    <PageWrapper>
      <H1 text="S. S. Cleto e Marcelino, P. P. e Mártires, a 26 de Abril" />

      <Missa />
    </PageWrapper>
  );
}
