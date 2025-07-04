import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "./adv4-0";

export default function PageAdv44() {
  return (
    <PageWrapper>
      <H1 text="Quinta-feira da 4ª semana do Advento" />

      <Missa />
    </PageWrapper>
  );
}
