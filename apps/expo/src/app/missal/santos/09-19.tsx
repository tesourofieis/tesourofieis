import { Link } from "expo-router";

import { Text, View } from "react-native";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0919() {
  return (
    <PageWrapper>
      <Text className="h1">
        S. Januário e Outros, Mártires, a 19 de Setembro
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Evangelho</Text>

      <LinkCard
        href="/missal/comum/8muitosmartires3#evangelho2"
        title="Muitos Mártires - Missa Salus autem"
      />
    </PageWrapper>
  );
}
