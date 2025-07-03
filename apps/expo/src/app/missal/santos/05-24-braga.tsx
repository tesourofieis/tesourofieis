import { Link } from "expo-router";
import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";

export default function Page0524Braga() {
  return (
    <PageWrapper>
      <Text className="h1">
        Trasl. das Rel. de S. Tiago Intercísio, a 24 de Maio, Arquidiocese de
        Braga e noutros lugares
      </Text>

      <Text className="aside">
        Como na
        <Link href="/missal/santos/05-04-portugal">
          Missa da Trasladação das Relíquias de S. Vicente,
        </Link>
        alterando-se com o nome deste Santo.
      </Text>
    </PageWrapper>
  );
}
