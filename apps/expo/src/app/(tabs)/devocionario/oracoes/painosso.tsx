import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PagePainosso() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Pai Nosso</Text>

          <View className="side-by-side">
            <Text className="text-base">
              ℣. Pater noster, qui es in cælis: sanctificétur nomen tuum:
              advéniat regnum tuum: fiat volúntas tua, sicut in cælo, et in
              terra.
            </Text>
            <Text className="text-base">
              ℣. Pai Nosso, que estais nos céus, santificado seja o Vosso Nome,
              venha a nós o Vosso Reino; seja feita a Vossa vontade assim na
              terra como no Céu.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Panem nostrum quotidiánum
              da nobis hódie: et dimítte nobis débita nostra, sicut et nos
              dimíttimus debitóribus nostris. Et ne nos indúcas in tentatiónem.
              Sed líbera nos a malo.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> O pão nosso de cada dia
              nos dai hoje; perdoai-nos as nossas dívidas, assim como nós
              perdoamos aos nossos devedores; e não nos deixeis cair em
              tentação; mas livrai-nos do mal.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
