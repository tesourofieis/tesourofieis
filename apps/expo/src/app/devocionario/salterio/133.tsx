import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page133() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 133</Text>

          <View className="side-by-side">
            <Text className="latin">
              Ecce nunc benedícite Dóminum, * omnes servi Dómini:
            </Text>
            <Text className="vernacular">
              Agora, pois, bendizei o Senhor, * todos os servos do Senhor:
            </Text>
            <Text className="latin">
              Qui statis in domo Dómini, * in átriis domus Dei nostri.
            </Text>
            <Text className="vernacular">
              Vós que estais na casa do Senhor, * nos átrios da casa do nosso
              Deus.
            </Text>
            <Text className="latin">
              In nóctibus extóllite manus vestras in sancta, * et benedícite
              Dóminum.
            </Text>
            <Text className="vernacular">
              De noite levantai as vossas mãos para o santuário, * e bendizei o
              Senhor.
            </Text>
            <Text className="latin">
              Benedícat te Dóminus ex Sion, * qui fecit cælum et terram.
            </Text>
            <Text className="vernacular">
              Te abençoe de Sião o Senhor, * que fez o céu e a terra.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
