import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1015() {
  return (
    <PageWrapper>
      <Text className="h1">Santa Teresa, a 15 de Outubro</Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Exáudi nos, Deus, salutáris noster: ut, sicut de beátæ Terésiæ
          Vírginis tuæ festivitáte gaudémus; ita cœléstis ejus doctrínæ pábulo
          nutriámur, et piæ devotiónis erudiámur affectu. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ouvi-nos, ó Deus, nosso Salvador, a fim de que, assim como nos
          alegramos na festa da vossa B. Virgem Teresa, assim também sejamos
          sustentados com o pão da sua celestial doutrina e Consigamos alcançar
          os afectos da sua piedosa devoção. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
