import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageConcedemihi() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Concede Mihi</Text>

          <View className="side-by-side">
            <Text className="latin">
              Concede mihi, benignissime Jesu, grátiam tuam, ut mecum sit et
              mecum laboret, mecum que in finem usque persevéret.
            </Text>
            <Text className="vernacular">
              Infinitamente bom Jesus, eu Vos peço que me concedeis a vossa
              graça; fazei que ela permaneça em mim, trabalhe comigo e se
              mantenha comigo até ao fim.
            </Text>
            <Text className="latin">
              Da mihi hoc semper desiderare et velle, quod tibi magis acceptum
              est et carius placet.
            </Text>
            <Text className="vernacular">
              Concedei-me sempre a vontade e o desejo daquilo que for mais
              agradável e mais aceitável para Vós.
            </Text>
            <Text className="latin">
              Tua voluntas mea sit, et mea voluntas tuam semper sequatur et
              optime ei concordet.
            </Text>
            <Text className="vernacular">
              Que a vossa vontade seja a minha, e que minha vontade esteja
              sempre em conformidade com vossa.
            </Text>
            <Text className="latin">
              Sit mihi unum velle et nolle tecum, nec aliud posse velle aut
              nolle, nisi quod Tu vis et nolis. Amen.
            </Text>
            <Text className="vernacular">
              Fazei que tudo aquilo que eu queira ou não queira seja aquilo que
              Vós quereis ou não quereis. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
