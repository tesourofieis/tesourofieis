import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1119() {
  return (
    <PageWrapper>
      <H1 text="Santa Isabel, Viúva, a 19 de Novembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Tuórum corda fidélium, Deus miserátor, illústra: et, beátæ Elisabeth
          précibus gloriósis; fac nos próspera mundi despícere, et cœlésti
          semper consolatióne gaudére. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus de misericórdia, esclarecei os corações dos vossos fiéis; e,
          pelas gloriosas preces da B. Isabel, concedei-nos a graça de
          desprezarmos as prosperidades deste mundo e de gozarmos perpetuamente
          a consolação celestial. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
