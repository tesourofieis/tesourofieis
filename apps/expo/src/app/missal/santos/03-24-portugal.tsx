import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0324Portugal() {
  return (
    <PageWrapper>
      <H1 text="Festa do Santíssimo Sacramento, a 24 de Março" />

      <Text className="aside">
        Em todoas as igrejas de Portugal é permitido, neste dia, celebrar em
        honra do Santíssimo Sacramento, a Missa, que será do
        <Link href="/missal/pentecostes/pent1-4">
          {" "}
          Santíssimo Corpo de Cristo{" "}
        </Link>
        com Glória e Credo.
      </Text>
    </PageWrapper>
  );
}
