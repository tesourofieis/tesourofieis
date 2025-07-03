import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./adv3-0";

export default function PageAdv32() {
  return (
    <PageWrapper>
      <H1 text="Terça-feira da 3ª semana do Advento" />

      <Missa />
    </PageWrapper>
  );
}
