import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page1219Braga() {
  return (
    <PageWrapper>
      <H1 text="Trasladação de S. Geraldo, a 19 de Dezembro, Na Arquidiocese de Braga" />
      <Text className="aside">
        Como na
        <Link href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei Dóminus,
        </Link>
        excepto:
      </Text>
      <H3 text="Oração" />Ó Deus, que enriquecestes a Igreja Bracarense com o
      preciosíssimo corpo do B. Geraldo, concedei-nos propício que imitemos
      fielmente os exemplos das virtudes daquele cujas relíquias honramos com
      filial devoção. Por nosso Senhor...
    </PageWrapper>
  );
}
