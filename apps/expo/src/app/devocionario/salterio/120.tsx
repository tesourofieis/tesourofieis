import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page120() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 120</Text>

          <View className="side-by-side">
            <Text className="latin">
              Levávi óculos meos in montes, * unde véniet auxílium mihi.
            </Text>
            <Text className="vernacular">
              Levantei os meus olhos para os montes, * donde me virá o auxílio.
            </Text>
            <Text className="latin">
              Auxílium meum a Dómino, * qui fecit cælum et terram.
            </Text>
            <Text className="vernacular">
              Meu auxílio vem do Senhor, * que fez o céu e a terra.
            </Text>
            <Text className="latin">
              Non det in commotiónem pedem tuum: * neque dormítet qui custódit
              te.
            </Text>
            <Text className="vernacular">
              Não permita Ele que vacile o teu pé: * nem adormeça Aquele que te
              guarda.
            </Text>
            <Text className="latin">
              Ecce, non dormitábit neque dórmiet, * qui custódit Israël.
            </Text>
            <Text className="vernacular">
              Eis que não adormecerá, nem dormirá, * O que guarda Israel.
            </Text>
            <Text className="latin">
              Dóminus custódit te, Dóminus protéctio tua, * super manum déxteram
              tuam.
            </Text>
            <Text className="vernacular">
              O Senhor te guarda, o Senhor é a tua protecção, * Ele está à tua
              direita.
            </Text>
            <Text className="latin">
              Per diem sol non uret te: * neque luna per noctem.
            </Text>
            <Text className="vernacular">
              Durante o dia o sol te não queimará: * nem de noite a lua.
            </Text>
            <Text className="latin">
              Dóminus custódit te ab omni malo: * custódiat ánimam tuam Dóminus.
            </Text>
            <Text className="vernacular">
              O Senhor te guarde de todo o mal: * o Senhor guarde a tua alma.
            </Text>
            <Text className="latin">
              Dóminus custódiat intróitum tuum, et éxitum tuum: * ex hoc nunc,
              et usque in sǽculum.
            </Text>
            <Text className="vernacular">
              O Senhor guarde a tua entrada e a tua saída: * desde agora e para
              sempre.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
