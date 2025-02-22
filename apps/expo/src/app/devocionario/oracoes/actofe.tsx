import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageActofe() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Acto de Fé</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dómine Deus, firma fide credo et confíteor ómnia et síngula quæ
              sancta Ecclésia Cathólica propónit, quia tu, Deus, ea ómnia
              revelásti, qui es ætérna véritas et sapiéntia quæ nec fállere nec
              falli potest. In hac fide vívere et mori státuo. Amen.
            </Text>
            <Text className="vernacular">
              Senhor Deus, creio firmemente e confesso todas e cada uma das
              coisas que a Santa Igreja Católica propõe, porque Vós, ó Deus,
              revelastes todas essas coisas, Vós, que sois a eterna verdade e
              sabedoria que não pode enganar nem ser enganada. Nesta fé, é minha
              determinação viver e morrer. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
