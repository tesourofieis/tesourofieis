import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./adv4-0";

export default function PageAdv42() {
  return (
    <PageWrapper>
      <H1 text="Terça-feira da 4ª semana do Advento" />

      <Missa />
    </PageWrapper>
  );
}
