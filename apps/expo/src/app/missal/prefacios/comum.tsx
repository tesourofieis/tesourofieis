import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageComum() {
  return (
    <PageWrapper>
      <Text className="h1">Prefácio Comum</Text>

      <Text className="aside">
        Diz-se em todas as Festas e Férias que não têm Prefácio próprio e até
        nas Missas dos Domingos, se não celebradas em outro dia da semana.
      </Text>

      <Language>
        <Text className="latin">
          Vere dignum et justum est, æquum et salutáre, nos tibi semper et
          ubíque grátias agere: Dómine sancte, Pater omnípotens, ætérne Deus:
          per Christum, Dóminum nostrum. Per quem majestátem tuam laudant
          Angeli, adórant Dominatiónes, tremunt Potestátes. Cœli cœlorúmque
          Virtútes ac beáta Séraphim sócia exsultatióne concélebrant. Cum quibus
          et nostras voces ut admitti jubeas, deprecámur, súpplici confessione
          dicéntes:
        </Text>
        <Text className="vernacular">
          É verdadeiramente digno e justo, racional e salutar render-Vos graças
          em todos os lugares e sempre, ó Senhor santo, Pai omnipotente, eterno
          Deus, por nosso Senhor Jesus Cristo. Pelo qual os Anjos louvam a vossa
          majestade, as Dominações a adoram e as Potestades se prostram
          reverentes; e os Céus, as Virtudes dos céus e os bem-aventurados
          Serafins a celebram em comum alegria e louvor. Dignai-Vos permitir,
          Vos imploramos, que as nossas vozes suplicantes se unam às deles,
          dizendo:
        </Text>
      </Language>
    </PageWrapper>
  );
}
