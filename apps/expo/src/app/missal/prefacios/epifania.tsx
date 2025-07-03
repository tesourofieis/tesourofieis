import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageEpifania() {
  return (
    <PageWrapper>
      <Text className="h1">Prefácio da Epifania</Text>

      <Text className="aside">
        Diz-se na Festa da Epifania e durante o Oitavário.
      </Text>

      <Language>
        <Text className="latin">
          Vere dignum et justum est, æquum et salutáre, nos tibi semper et
          ubique grátias agere: Dómine sancte, Pater omnípotens, ætérne Deus:
          Quia, cum Unigenitus tuus in substántia nostræ mortalitátis appáruit,
          nova nos immortalitátis suæ luce reparávit. Et ídeo cum Angelis et
          Archángelis, cum Thronis et Dominatiónibus cumque omni milítia
          cœléstis exércitus hymnum glóriæ tuæ cánimus, sine fine dicéntes:
        </Text>
        <Text className="vernacular">
          Verdadeiramente é digno e justo, racional e salutar dar-Vos graças,
          Senhor santo, Pai omnipotente, eterno Deus, em todos os lugares e
          sempre: Pois o vosso Filho Unigénito, revestido com a substancia da
          nossa carne mortal, reparou as faltas da natureza humana,
          comunicando-lhe o novo esplendor da sua imortalidade. E, por isso, com
          os Anjos e Arcanjos, com os Tronos e Dominações e com toda a milícia
          do exército celestial, cantamos o hino da vossa glória, dizendo
          incessantemente:
        </Text>
      </Language>
    </PageWrapper>
  );
}
