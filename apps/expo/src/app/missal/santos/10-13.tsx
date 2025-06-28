import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1013() {
  return (
    <PageWrapper>
      <Text className="h1">S. Eduardo, Conf., a 13 de Outubro</Text>

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
          Deus, qui beátum regem Eduárdum Confessórem tuum æternitátis glória
          coronásti: fac nos, quǽsumus; ita eum venerári in terris, ut cum eo
          regnáre póssimus in cœlis. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que coroastes com a glória eterna o B. Rei Eduardo, vosso
          Confessor, fazei, Vos suplicamos, que o veneremos de tal modo na terra
          que com ele possamos reinar no céu. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
