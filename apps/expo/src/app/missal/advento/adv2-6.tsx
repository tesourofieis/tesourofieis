import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./adv2-0";

export default function PageAdv26() {
  return (
    <PageWrapper>
      <H1 text="Sábado da 2ª semana do Advento" />

      <Missa />
    </PageWrapper>
  );
}
