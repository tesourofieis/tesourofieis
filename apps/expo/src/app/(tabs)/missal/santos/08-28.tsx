import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0828() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Agostinho, a 28 de Agosto</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Adésto supplicatiónibus nostris, omnípotens Deus: et, quibus
              fidúciam sperándæ pietátis indúlges, intercedénte beáto Augustíno
              Confessóre tuo atque Pontífice, consuétae misericórdiæ tríbue
              benígnus efféctum. Per Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Ouvi benigno, ó Deus omnipotente, as nossas súplicas, e, visto que
              nos permitis confiarmos na vossa bondade, concedei-nos, pela
              intercessão do B. Agostinho, vosso Confessor e Pontífice, a graça
              de alcançarmos o efeito benigno da vossa habitual misericórdia.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 36, 30-31</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium.
              ℣. Lex Dei ejus in corde ipsíus: et non supplantabúntur gressus
              ejus.
            </Text>
            <Text className="text-base">
              A boca do justo falará com sabedoria e a sua língua proclamará a
              justiça. ℣. A lei do seu Deus está no seu coração e os seus pés
              não tropeçarão.
            </Text>
            <Text className="text-base">
              Allelúja, allelúja. ℣. <Text className="em">Ps. 88, 21</Text>{" "}
              Invéni David servum meum, óleo sancto meo unxi eum. Allelúja.
            </Text>
            <Text className="text-base">
              Aleluia, aleluia. ℣. <Text className="em">Sl. 88, 21</Text>{" "}
              Encontrei o meu servo David e ungi-o com meu óleo sagrado.
              Aleluia.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
