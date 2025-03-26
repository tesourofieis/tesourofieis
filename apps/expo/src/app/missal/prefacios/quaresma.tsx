import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function PageQuaresma() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Prefácio da Quaresma</Text>

          <Text className="aside">
            Diz-se desde Quarta-Feira das Cinzas até à véspera do Domingo da
            Paixão, inclusivamente.
          </Text>

          <Language>
            <Text className="latin">
              Vere dignum et justum est, æquum et salutáre, nos tibi semper et
              ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne
              Deus: Qui corporáli jejúnio vitia cómprimis, mentem élevas,
              virtútem largíris et prǽmia: per Christum, Dóminum nostrum. Per
              quem majestátem tuam laudant Angeli, adórant Dominatiónes, tremunt
              Potestátes. Cœli cœlorúmque Virtútes ac beáta Séraphim sócia
              exsultatióne concélebrant. Cum quibus et nostras voces ut admítti
              júbeas, deprecámur, súpplici confessióne dicéntes:
            </Text>
            <Text className="vernacular">
              Verdadeiramente é digno e justo, racional e salutar dar-Vos graças
              em todos os lugares e sempre, Senhor santo, Pai omnipotente,
              eterno Deus, pois Vós, pelo jejum natural, reprimis os vícios,
              elevais o espírito e concedeis-nos a virtude e o prémio por
              Cristo, nosso Senhor: pelo qual os Anjos louvam a vossa majestade,
              as Dominações a adoram e as Potestades trémulas a reverenciam; e
              os Céus, as Virtudes dos Céus e os bem-aventurados Serafins se
              associam em comum louvor. Dignai-Vos permitir, Senhor, que as
              nossas vozes suplicantes se unam às deles, dizendo:
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
