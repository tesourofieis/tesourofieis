import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "./adv1-0";

export default function PageAdv14() {
  return (
    <PageWrapper>
      <H1 text="Quinta-feira da 1ª semana do Advento" />

      <Missa />
    </PageWrapper>
  );
}
