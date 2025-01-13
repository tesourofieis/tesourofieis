import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1129() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Saturnino, Mártir, a 29 de Novembro</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/5martirnaopontifice2">
              Missa Lætábitur justus
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui nos beáti Saturníni Martyris tui concédis natalítia
              pérfrui: ejus nos tríbue méritis adjuvári. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que nos permitistes a alegria de celebrarmos o aniversário
              do nascimento do vosso B. Mártir Saturnino, concedei-nos ainda que
              sejamos auxiliados pelos seus méritos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Múnera, Dómine, tibi dicáta sanctífica: et, intercedénte beáto
              Saturníno Mártyre tuo, per hæc eádem nos placátus inténde. Per
              Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Santificai, Senhor, estas ofertas, que Vos dedicamos, e por
              intercessão do B. Saturnino, vosso Mártir, olhai aplacado para
              nós. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sanctíflcet nos, quǽsumus, Dómine, tui percéptio sacraménti: et
              intercessióne Sanctórum tuórum tibi reddat accéptos. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos suplicamos, permiti que a recepção do vosso sacramento
              nos santifique e que por intercessão dos vossos santos nos alcance
              a graça de Vos agradarmos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
