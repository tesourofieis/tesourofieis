import { Link } from "expo-router";

import { Text, View } from "react-native";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0908() {
  return (
    <PageWrapper>
      <Text className="h1">Natividade da B. Virgem Maria, a 8 de Setembro</Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/07-02">
          Missa da Visitação da B. Virgem Maria
        </Link>{" "}
        , excepto: Na Oração e Secreta substituir a palavra Visitação por
        Natividade.
      </Text>

      <Text className="h3">Epístola</Text>

      <LinkCard
        href="/missal/santos/12-08#epístola"
        title="Imaculada Conceição da B. Virgem Maria"
      />

      <Text className="h3">Evangelho</Text>

      <LinkCard href="/missal/santos/08-16#evangelho" title="S. Joaquim" />
    </PageWrapper>
  );
}
