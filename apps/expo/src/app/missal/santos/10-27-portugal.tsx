import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1027Portugal() {
  return (
    <PageWrapper>
      <H1 text="S. Gonçalo de Lagos, a 27 de Outubro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, virtútem, qui beátum Gundisálvum Confessórem tuum ánimi
          demissióne, morum candóre, ac singuláre caritáte mirábilem effecísti:
          concéde, quæsumus; ut ejus exémpla imitántes in terris, coronári cum
          ipso merámur in cælis. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus das virtudes, que tornastes admirável na humildade de espírito,
          na candura de Costumes e na singular caridade o B. Gonçalo, vosso
          Confessor, concedei-nos, Vos imploramos, que, Imitando seus exemplos
          na terra, mereçamos com ele ser coroados nos céus. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
