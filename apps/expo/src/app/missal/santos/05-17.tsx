import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0517() {
  return (
    <PageWrapper>
      <H1 text="S. Pascoal Bailão, Conf., a 17 de Maio" />

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
          Deus, qui beátum Paschálem Confessórem tuum mirífica erga Córporis et
          Sánguinis tui sacra mystéria dilectióne decorásti: concéde propítius;
          ut, quam ille ex hoc divino convívio spíritus percépit pinguédinem,
          eándem et nos percípere mereámur: Qui vivis et regnas...
        </Text>
        <Text className="vernacular">
          Ó Deus, que enriquecestes o B. Pascoal, vosso Confessor, com precioso
          afecto para com os sagrados mystérios do vosso Corpo e Sangue,
          concedei-nos propício que alcancemos neste divino banquete a mesma
          abundância de graças que ele alcançou. Ó Vós, que viveis e reinais...
        </Text>
      </Language>
    </PageWrapper>
  );
}
