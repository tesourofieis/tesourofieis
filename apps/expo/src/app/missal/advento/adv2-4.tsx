import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "./adv2-0";

export default function PageAdv24() {
  return (
    <PageWrapper>
      <H1 text="Quinta-feira da 2ª semana do Advento" />

      <Missa />
    </PageWrapper>
  );
}
