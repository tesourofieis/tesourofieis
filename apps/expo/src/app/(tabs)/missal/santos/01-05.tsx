import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0105() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Vigília Epifania</Text>

          <View className="aside">
            Como na [Missa Domingo dentro do Oitavário do
            Natal](/missal/natal/nat1-0), com o Evangelho:
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mt. 2, 19-23</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">✠</Text> Sequéntia sancti
              Evangélii secúndum Matthǽum.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">✠</Text> Continuação do
              santo Evangelho segundo S. Mateus.
            </Text>
            <Text className="text-base latin">
              In illo témpore: Defúncto Heróde, ecce, Angelus Dómini appáruit in
              somnis Joseph in Ægýpto, dicens: Surge, et áccipe Púerum et Matrem
              ejus, et vade in terram Israël: defúncti sunt enim, qui quærébant
              ánimam Pueri. Qui consúrgens, accépit Púerum et Matrem ejus, et
              venit in terram Israël. Audiens autem, quod Archeláus regnáret in
              Judæa pro Heróde patre suo, tímuit illo ire: et, admonítus in
              somnis, secéssit in partes Galilææ. Et véniens habitávit in
              civitáte, quæ vocátur Názareth: ut adimplére tur quod dictum est
              per Prophétas: Quóniam Nazaræus vocábitur.
            </Text>
            <Text className="text-base vernacular">
              Naquele tempo, quando Herodes morreu, eis que um Anjo do Senhor
              apareceu em sonhos a José, que estava no Egipto, dizendo-lhe:
              "Levanta-te, toma o Menino e sua Mãe e volta para a terra de
              Israel, pois já são mortos os que queriam matar o Menino". Logo
              José, levantando-se, tomou o Menino e sua Mãe e veio para a terra
              de Israel; mas, sabendo que Arquelau reinava na Judeia, em lugar
              de Herodes, seu pai, receou voltar para lá. Então, advertido em
              sonhos, retirou-se para a Galileia, indo habitar em uma cidade
              chamada Nazaré, a fim de que se cumprisse o que fora dito pelos
              Profetas: "Será chamado Nazareno".
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
