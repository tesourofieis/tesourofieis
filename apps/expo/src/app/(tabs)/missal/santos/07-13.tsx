import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Missa from "../comum/sumospontifices";

export default function Page0713() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Anacleto, Papa e Mártir, a 13 de Julho</Text>

          <Text className="aside">
            «Em Roma, diz o Martirológio romano, festa de Santo Anacleto Papa e
            Mártir, que governou a Igreja de Deus e a honrou com ilustre
            martírio». Participando da plenitude do sacerdócio de Cristo (Intr.,
            Ale., Of.), o santo Pontífice compartilhou também aos seus
            sofrimentos (Ep.). Rei das almas, não temeu, diante do príncipe
            deste mundo, e tornou-se uma das pedras que constituem, nos
            primeiros séculos, os fundamentos da Igreja (Ev.). Decretou que todo
            Bispo seria consagrado pelo menos, por três Bispos, os clérigos
            publicamente iniciados nas Ordens Sacras pelo seu próprio Bispo e
            que, terminada a consagração, comungariam todos na Missa. Recebeu a
            coroa do martírio (Com.), depois de ter ocupado a Santa Sé cerca de
            dez anos. Foi sepultado no Vaticano (112).
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
