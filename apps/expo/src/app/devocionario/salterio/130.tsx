import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page130() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 130</Text>

          <View className="side-by-side">
            <Text className="latin">
              Dómine, non est exaltátum cor meum: * neque eláti sunt óculi mei.
            </Text>
            <Text className="vernacular">
              Senhor, o meu coração se não exaltou: * nem os meus olhos se
              mostraram altivos.
            </Text>
            <Text className="latin">
              Neque ambulávi in magnis: * neque in mirabílibus super me.
            </Text>
            <Text className="vernacular">
              Não andei em grandezas: * nem em pompas superiores a mim.
            </Text>
            <Text className="latin">
              Si non humíliter sentiébam: * sed exaltávi ánimam meam:
            </Text>
            <Text className="vernacular">
              Se não tinha sentimentos humildes: * mas exaltava a minha alma:
            </Text>
            <Text className="latin">
              Sicut ablactátus est super matre sua, * ita retribútio in ánima
              mea.
            </Text>
            <Text className="vernacular">
              Como o ablactado é para sua mãe, * assim seja retribuída a minha
              alma.
            </Text>
            <Text className="latin">
              Speret Israël in Dómino, * ex hoc nunc et usque in sǽculum.
            </Text>
            <Text className="vernacular">
              Espere Israel no Senhor, * desde agora e para sempre.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
