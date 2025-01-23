import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0523() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Basileu, B. e Mártir, a 23 de Maio, Na Diocese do Porto
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/9martir">
              Missa Protexísti me
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>
          <Text className="text-base">
            Dignai-Vos acolher em vossa clemência, Senhor, Vos suplicamos, as
            preces do vosso povo, a fim de que sejamos auxiliados pelos méritos
            do B. Basileu, vosso Mártir e Pontífice, que nos conforta com a
            recordação dos seus sofrimentos. Por nosso Senhor...
          </Text>
          <Text className="h3">Secreta</Text>
          <Text className="text-base">
            Recebei, Senhor, os dons que devidamente Vos oferecemos; e, tendo
            Vós em atenção os méritos do B. Basileu, vosso Mártir e Pontífice,
            permiti que nos sirvam de auxílio para alcançarmos a salvação. Por
            nosso Senhor...
          </Text>
          <Text className="h3">Postcomúnio</Text>
          <Text className="text-base">
            Havendo Vós, Senhor, saciado a vossa família com os sacrossantos
            dons, confortai-nos constantemente, Vos suplicamos, com a
            intercessão daquele cuja solenidade celebramos. Por nosso Senhor...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
