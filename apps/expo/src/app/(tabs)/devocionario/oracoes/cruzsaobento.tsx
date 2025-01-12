import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageCruzsaobento() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Cruz São Bento</Text>

          <View className="side-by-side">
            <Text className="text-base">
              C.S.P.B.: Crux Sancti Patris Benedicti.
            </Text>
            <Text className="text-base">
              C.S.P.B.: Cruz do Santo Patriarca Bento.
            </Text>
            <Text className="text-base">
              C.S.S.M.L.: Crux Sancta Sit Mihi Lux.
            </Text>
            <Text className="text-base">
              C.S.S.M.L.: A Cruz Santa seja a minha Luz.
            </Text>
            <Text className="text-base">
              N.D.S.M.D.: Non Draco Sit Mihi Dux.
            </Text>
            <Text className="text-base">
              N.D.S.M.D.: Que o Dragão não seja meu Senhor.
            </Text>
            <Text className="text-base">V.R.S.: Vade Retro Satana!</Text>
            <Text className="text-base">V.R.S.: Retira-te, Satanás!</Text>
            <Text className="text-base">
              N.S.M.V. Numquam Suades Mihi Vana!
            </Text>
            <Text className="text-base">
              N.S.M.V. Não me aconselhes loucuras!
            </Text>
            <Text className="text-base">S.M.Q.L.: Sunt Mala Quæ Libas.</Text>
            <Text className="text-base">
              S.M.Q.L.: São maldades o que me apresentas.
            </Text>
            <Text className="text-base">I.V.B.: Ipse Venena Bibas.</Text>
            <Text className="text-base">
              I.V.B.: Tu mesmo bebe esses venenos.
            </Text>
            <Text className="text-base">Amen.</Text>
            <Text className="text-base">Amen.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
