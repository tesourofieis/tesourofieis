import { Link } from "expo-router";
import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page1113() {
  return (
    <PageWrapper>
      <H1 text="S. Diogo, Conf., a 13 de Novembro" />

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
          Omnípotens sempitérne Deus, qui dispositióne mirábili infírma mundi
          éligis, ut fórtia quæque confúndas: concéde propítius humilitáti
          nostræ; ut, piis beáti Dídaci Confessóris tui précibus, ad perénnem in
          cœlis glóriam sublimári mereámur. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente e sempiterno, que com admirável providência
          escolheis o que há de mais fraco no mundo para confundir os fortes,
          concedei propício à nossa humildade que, pelas piedosas preces do B.
          Diogo, vosso Confessor, mereçamos ser elevados à glória eterna nos
          céus. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
