import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./adv1-0";

export default function PageAdv12() {
  return (
    <PageWrapper>
      <H1 text="Terça-feira da 1ª semana do Advento" />

      <Missa />
    </PageWrapper>
  );
}
