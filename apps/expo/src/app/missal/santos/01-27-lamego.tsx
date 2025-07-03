import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./01-20";

export default function Page0127Lamego() {
  return (
    <PageWrapper>
      <H1 text="Na Oitava de S. Sebastião, Mártir, a 27 de Janeiro" />

      <Missa />
    </PageWrapper>
  );
}
