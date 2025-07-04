import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/16abades";

export default function Page0207() {
  return (
    <PageWrapper>
      <H1 text="S. Romualdo, Abade, a 7 de Fevereiro" />

      <Missa />
    </PageWrapper>
  );
}
