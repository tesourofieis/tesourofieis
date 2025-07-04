import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "./../pentecostes/pent3-0";

export default function PageCoracaojesus() {
  return (
    <PageWrapper>
      <H1 text="Missa do Santíssimo Coração de Jesus" />

      <Missa />
    </PageWrapper>
  );
}
