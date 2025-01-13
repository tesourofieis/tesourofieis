import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageOrdenacaopadre() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">No Dia da Ordenação de Presbítero</Text>

          <Text className="aside">
            Como na Missa do dia, juntando-se, o seguinte, sob a mesma conclusão
            da que antecede:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Exáudi, quǽsumus, Dómine, súpplicum preces, et de voto tibi
              péctore famulántes perpétua defensióne custódi: ut, nullis
              perturbatiónibus impedíti, líberam servitútem tuis semper
              exhibeámus offíciis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ouvi, Senhor, Vos imploramos, as preces destes vossos servos
              suplicantes e guardai-nos perpetuamente, a fim de que, livres de
              todo o temor, exerçamos com toda a liberdade o nosso ministério.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Tuis, quǽsumus, Dómine, operáre mystériis: ut hæc tibi múnera
              dignis méntibus offerámus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos suplicamos, fazei que estes mystérios tornem dignos de
              Vós estes dons, que Vos oferecemos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quos tuis, Dómine, réficis sacraméntis, contínuis attólle benígnus
              auxíliis: ut tuæ redemptiónis efféctum, et mystériis capiámus et
              móribus: Qui vivis...
            </Text>
            <Text className="text-base vernacular">
              Fortificai, Senhor, com vossas incessantes graças aqueles que
              benignamente alimentastes com vossos sacramentos, a fim de que
              experimentemos o efeito da Redenção, tanto pela virtude destes
              mystérios, como pela nossa própria conduta. Ó Vós, que, sendo
              Deus...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
