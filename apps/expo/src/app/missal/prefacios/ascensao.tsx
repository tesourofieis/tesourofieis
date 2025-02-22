import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageAscensao() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Prefácio da Ascensão</Text>

          <Text className="aside">
            Diz-se desde a Ascensão até à Vigília de Pentecostes, excepto quando
            há Prefácio próprio.
          </Text>

          <View className="side-by-side">
            <Text className="latin">
              Vere dignum et justum est, æquum et salutáre, nos tibi semper et
              ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne
              Deus: per Christum, Dóminum nostrum. Qui post resurrectiónem suam
              ómnibus discípulis suis maniféstus appáruit et, ipsis cernéntibus,
              est elevátus in cœlum, ut nos divinitátis suæ tribúeret esse
              partícipes. Et ídeo cum Angelis et Archángelis, cum Thronis et
              Dominatiónibus cumque omni milítia cœléstis exércitus hymnum
              glóriæ tuæ cánimus, sine fine dicéntes:
            </Text>
            <Text className="vernacular">
              Verdadeiramente é digno e justo, racional e salutar que em todos
              os lugares e sempre Vos rendamos graças, Senhor santo, Pai
              omnipotente, eterno Deus, por Jesus Cristo, nosso Senhor, que
              depois da sua Ressurreição apareceu visivelmente a todos seus
              discípulos, em cuja presença subiu ao céu, a fim de nos tornar
              participantes da sua divindade. E, por isso, unidos aos Anjos e
              Arcanjos, aos Tronos e Dominações e a toda a milícia do exército
              celestial, cantamos um hino em vossa honra, dizendo
              incessantemente:
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
