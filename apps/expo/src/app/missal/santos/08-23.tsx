import { Link } from "expo-router";
import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0823() {
  return (
    <PageWrapper>
      <Text className="h1">S. Filipe Benício, Conf., a 23 de Agosto</Text>

      <Text className="aside">
        Como na
        <Link href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Deus, qui per beátum Philippum Confessórem tuum, exímium nobis
          humilitátis exémplum tribuísti: da fámulis tuis próspera mundi ex ejus
          imitatióne despícere, et cœléstia semper inquírere. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que na pessoa do B. Filipe, vosso Confessor, nos
          proporcionastes exímio exemplo de humildade, fazei que os vossos
          servos, imitando-o, desprezem as alegrias deste mundo e procurem
          sempre as celestiais. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
