import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page1017Braga() {
  return (
    <PageWrapper>
      <H1 text="Trasl. de S. Pedro de Rates, a 17 de Outubro, Na Arquidiocese de Braga" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/3martirpontifice">
          Missa Sacerdótes Dei
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="vernacular">
        Ó Deus, que de um modo admirável nos destes como primeiro Pastor o B.
        Mártir Pedro, permiti, Vos imploramos, que, celebrando a sua
        Trasladação, nos tornemos dignos filhos de tão grande pai. Por nosso
        Senhor
      </Text>
      <H3 text="Secreta" />
      <Text className="vernacular">
        Olhai benignamente, Senhor, para as dádivas que Vos pela intercessão
        daquele cujos méritos Vos foram agradáveis, elas nos sejam salutares.
        Por nosso Senhor...
      </Text>
      <H3 text="Postcomúnio" />
      <Text className="vernacular">
        Humildemente Vos suplicamos, Senhor, que nos guardeis com a graça da
        contínua oração do B. Pedro, vosso Mártir e Pontífice, para que pelos
        seus méritos seja dignamente governada a Igreja que se ufana de o haver
        possuído como seu Padroeiro e Chefe. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
