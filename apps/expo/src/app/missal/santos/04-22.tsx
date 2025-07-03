import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/sumospontifices";

export default function Page0422() {
  return (
    <PageWrapper>
      <H1 text="S. S. Sotero e Caio, P. P. e Mártires, a 22 de Abril" />

      <Missa />
    </PageWrapper>
  );
}
