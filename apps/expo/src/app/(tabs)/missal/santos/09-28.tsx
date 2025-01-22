import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0928() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Venceslau, Mártir, a 28 de Setembro</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/4martirnaopontifice1">
              Missa In virtúte tua
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátum Wencesláum per martýrii palmam a terréno
              principátu ad cœléstem glóriam transtulísti: ejus précibus nos ab
              omni adversitáte custódi; et ejúsdem tríbue gaudére consórtio. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que pela palma do martírio trasladastes o B. Venceslau do
              principado terreno para a glória celestial, defendei-nos, pelas
              suas preces, de todas as adversidades e proporcionai-nos a alegria
              de compartilhar do seu glorioso destino. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
