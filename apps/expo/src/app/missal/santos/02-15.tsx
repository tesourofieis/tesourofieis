import { Link } from "expo-router";

import { Text, View } from "react-native";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0215() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. S. Faustino e Jovita, Mártires, a 15 de Fevereiro
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Secreta e Postcomúnio</Text>

      <LinkCard
        href="/missal/comum/6muitosmartires1#secreta"
        title="Muitos Mártires - Missa Intret in"
      />
    </PageWrapper>
  );
}
