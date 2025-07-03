import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0819() {
  return (
    <PageWrapper>
      <Text className="h1">S. João Eudes, Conf., a 19 de Agosto</Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Deus, qui beátum Joánnem, Confessórem tuum, ad cultum sacrórum Córdium
          Jesu et Maríæ rite promovéndum, mirabíliter inflammásti, et per eum
          novas in Ecclésia tua famílias congregáre voluísti: præsta, quǽsumus;
          ut, cujus pia mérita venerámur, virtútum quoque instruámur exémplis.
          Per eúndem Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que, para promover o culto em honra dos Sagrados Corações de
          Jesus e de Maria, inflamastes com zelo admirável o B. João, vosso
          Confessor, e por ele Vos dignastes criar novas famílias na vossa
          Igreja, concedei-nos, Vos pedimos, que sejamos edificados com os
          exemplos das virtudes daquele cujos piedosos méritos veneramos. Por
          nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
