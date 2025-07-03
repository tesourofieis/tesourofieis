import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1006() {
  return (
    <PageWrapper>
      <H1 text="S. Bruno, Conf., a 6 de Outubro" />

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
          Sancti Brunónis Confessóris tui, quǽsumus, Dómine, intercessiónibus
          adjuvémur: ut, qui majestátem tuam gráviter delinquéndo offéndimus,
          ejus méritis et précibus, nostrórum delictórum véniam consequámur. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Que a intercessão do vosso Santo Confessor Bruno nos auxilie, Senhor,
          Vos rogamos, a fim de que, havendo ofendido gravemente a vossa
          majestade, obtenhamos o perdão dos nossos pecados pelos méritos e
          preces do mesmo santo. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Quǽsumus, omnípotens Deus: ut, qui cœlestia aliménta percépimus,
          intercedénte beáto Brunóne Confessóre tuo, per hæc contra ómnia
          advérsa muniámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente, Vos imploramos, havendo nós recebido o alimento
          celestial, fazei que, por intercessão do B. Confessor Bruno, sejamos
          fortificados contra todas as adversidades. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
