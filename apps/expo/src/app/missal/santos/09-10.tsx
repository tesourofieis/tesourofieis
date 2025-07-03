import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/15confessoresnaopontifices2";

export default function Page0910() {
  return (
    <PageWrapper>
      <H1 text="S. Nicolau Tolentino, Conf., a 10 de Setembro" />

      <Missa />
    </PageWrapper>
  );
}
