import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page0828() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Agostinho, a 28 de Agosto</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Adésto supplicatiónibus nostris, omnípotens Deus: et, quibus
              fidúciam sperándæ pietátis indúlges, intercedénte beáto Augustíno
              Confessóre tuo atque Pontífice, consuétae misericórdiæ tríbue
              benígnus efféctum. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ouvi benigno, ó Deus omnipotente, as nossas súplicas, e, visto que
              nos permitis confiarmos na vossa bondade, concedei-nos, pela
              intercessão do B. Agostinho, vosso Confessor e Pontífice, a graça
              de alcançarmos o efeito benigno da vossa habitual misericórdia.
              Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 36, 30-31</Text>

          <Language>
            <Text className="latin">
              Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium.
              <Text className="versicle"> ℣. </Text>Lex Dei ejus in corde
              ipsíus: et non supplantabúntur gressus ejus.
            </Text>
            <Text className="vernacular">
              A boca do justo falará com sabedoria e a sua língua proclamará a
              justiça.<Text className="versicle"> ℣. </Text>A lei do seu Deus
              está no seu coração e os seus pés não tropeçarão.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Ps. 88, 21</Text> Invéni David servum
              meum, óleo sancto meo unxi eum. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Sl. 88, 21</Text> Encontrei o meu
              servo David e ungi-o com meu óleo sagrado. Aleluia.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
