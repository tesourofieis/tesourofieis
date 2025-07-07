import { Link } from "expo-router";
import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0524Braga() {
  return (
    <PageWrapper>
      <H1 text="Trasl. das Rel. de S. Tiago Intercísio, a 24 de Maio, Arquidiocese de Braga e noutros lugares" />

      <Text className="aside">
        Como na{" "}
        <Link href="/missal/santos/05-04-portugal">
          Missa da Trasladação das Relíquias de S. Vicente,
        </Link>
        alterando-se com o nome deste Santo.
      </Text>
    </PageWrapper>
  );
}
