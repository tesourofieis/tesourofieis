import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page1019() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro de Alcântara, Conf., a 19 de Outubro" />

      <Text className="aside">
        Como na
        <Link href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátum Petrum Confessórem tuum admirábilis pœniténtiæ et
          altíssimæ contemplatiónis múnere illustráre dignátus es: da nobis,
          quǽsumus; ut, ejus suffragántibus méritis, carne mortificáti, facílius
          cœléstia capiámus. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que Vos dignastes ilustrar o B. Pedro, Confessor, com os dons
          de uma penitência e de uma contemplação sublimes, permiti, Vos
          suplicamos, que, auxiliados com seus méritos e intercessão e
          mortificando o nosso corpo, obtenhamos mais facilmente os bens
          celestiais. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/santos/01-15-1#epístola"
        title="S. Paulo, 1.º Eremita, Conf."
      />
    </PageWrapper>
  );
}
