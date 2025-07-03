import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./01-22-lisboa-faro";

export default function Page0129LisboaFaro() {
  return (
    <PageWrapper>
      <H1 text="Na Oitava de S. Vicente, Mártir, a 29 de Janeiro" />

      <Missa />
    </PageWrapper>
  );
}
