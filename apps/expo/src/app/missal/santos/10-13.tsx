import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1013() {
  return (
    <PageWrapper>
      <H1 text="S. Eduardo, Conf., a 13 de Outubro" />

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
