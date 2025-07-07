import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0908() {
  return (
    <PageWrapper>
      <H1 text="Natividade da B. Virgem Maria, a 8 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/07-02">
          Missa da Visitação da B. Virgem Maria
        </Link>{" "}
        , excepto: Na Oração e Secreta substituir a palavra Visitação por
        Natividade.
      </Text>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/santos/12-08#epístola"
        title="Imaculada Conceição da B. Virgem Maria"
      />

      <H3 text="Evangelho" />

      <LinkCard href="/missal/santos/08-16#evangelho" title="S. Joaquim" />
    </PageWrapper>
  );
}
