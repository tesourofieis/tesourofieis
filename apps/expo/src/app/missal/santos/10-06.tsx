import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1006() {
  return (
    <PageWrapper>
      <Text className="h1">S. Bruno, Conf., a 6 de Outubro</Text>

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

      <Text className="h3">Postcomúnio</Text>

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
