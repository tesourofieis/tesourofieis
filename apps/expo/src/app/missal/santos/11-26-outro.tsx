import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/2martirpontificeforapascal";

export default function Page1126Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro Alexandrino, B. e Mártir, a 26 de Novembro" />

      <Missa />
    </PageWrapper>
  );
}
