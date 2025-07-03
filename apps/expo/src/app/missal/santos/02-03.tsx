import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/3martirpontifice";

export default function Page0203() {
  return (
    <PageWrapper>
      <H1 text="S. Brás, B. e Márt., a 3 de Fevereiro" />

      <Missa />
    </PageWrapper>
  );
}
