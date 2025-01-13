import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageSuscipedomine() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Súscipe Dómine</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Súscipe, Dómine, universam meam libertatem. Accipe memoriam,
              intellectum atque voluntatem omnem. Quidquid habeo vel possideo
              mihi largitus es; id tibi totum restituo, ac tuæ prorsus voluntati
              trado gubernandum. Amorem tui solum cum grátia tua mihi dones, et
              dives sum satis, nec aliud quidquam ultra posco. Amen.
            </Text>
            <Text className="text-base vernacular">
              Tomai, Senhor e recebei toda minha liberdade, a minha memória, o
              meu entendimento e toda minha vontade, tudo o que tenho e possuo;
              Vós mo destes; a Vós, Senhor, o restituo. Tudo é vosso, disponde
              de tudo, à vossa inteira vontade. Dai-me o vosso amor e graça, que
              esta me basta. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
