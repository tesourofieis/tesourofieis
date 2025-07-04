import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page122() {
  return (
    <PageWrapper>
      <H1 text="Salmo 122" />

      <Language>
        <Text className="latin">
          Ad Te levávi óculos meos, * qui hábitas in cælis.
        </Text>
        <Text className="vernacular">
          Levantei os meus olhos para Vós, * que habitais nos céus.
        </Text>
        <Text className="latin">
          Ecce, sicut óculi servórum * in mánibus dominórum suórum,
        </Text>
        <Text className="vernacular">
          Eis que, assim como os olhos dos servos * estão nas mãos dos seus
          senhores,
        </Text>
        <Text className="latin">
          Sicut óculi ancíllæ in mánibus dóminæ suæ: * ita óculi nostri ad
          Dóminum, Deum nostrum, donec misereátur nostri.
        </Text>
        <Text className="vernacular">
          Como os olhos da serva nas mãos de sua senhora: * assim os nossos
          olhos estão no Senhor nosso Deus, até que tenha misericórdia de nós.
        </Text>
        <Text className="latin">
          Miserére nostri, Dómine, miserére nostri: * quia multum repléti sumus
          despectióne:
        </Text>
        <Text className="vernacular">
          Tende misericórdia de nós, ó Senhor, tende misericórdia de nós: * pois
          estamos cheios de desprezo.
        </Text>
        <Text className="latin">
          Quia multum repléta est ánima nostra: * oppróbrium abundántibus, et
          despéctio supérbis.
        </Text>
        <Text className="vernacular">
          Pois a nossa alma está cheiíssima: * de ser o objecto de escárnio para
          os ricos e de desprezo para os soberbos.
        </Text>
      </Language>
    </PageWrapper>
  );
}
