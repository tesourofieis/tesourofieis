import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0102() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Oitava de S. Estevão, Mártir, a 2 de Janeiro
          </Text>

          <Text className="aside">
            Como na [Missa S. Estêvão, Primeiro Mártir, a 26 de
            Dezembro](/missal/santos/12-26), excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Omnípotens sempitérne Deus, qui primítias Mártyrum in beáti Levítæ
              Stéphani sánguine dedicásti: tríbue, quǽsumus; ut pro nobis
              intercéssor exsístat, qui pro suis étiam persecutóribus exorávit
              Dóminum nostrum Jesum Christum Filium tuum. Qui tecum vivit...
            </Text>
            <Text className="text-base vernacular">
              Deus omnipotente e eterno, que consagrastes as primícias dos
              Mártires com o sangue do B. Levita Estevão, dignai-Vos permitir
              que seja perante Vós nosso intercessor aquele que a Nosso Senhor
              Jesus Cristo rogou pelos seus perseguidores. Ele que, sendo
              Deus...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
