import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/26festasmaria1";

export default function Page0805() {
  return (
    <PageWrapper>
      <H1 text="Dedicação de Santa Maria das Neves, a 5 de Agosto" />

      <Missa />
    </PageWrapper>
  );
}
