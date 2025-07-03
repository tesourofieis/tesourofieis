import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./adv1-0";

export default function PageAdv16() {
  return (
    <PageWrapper>
      <H1 text="Sábado da 1ª semana do Advento" />

      <Missa />
    </PageWrapper>
  );
}
