import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0923Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Tecla, Virgem e Mártir, a 23 de Setembro
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Da, quǽsumus, omnípotens Deus: ut, qui beátæ Theclæ Vírginis et
              Mártyris tuæ natalítia cólimus; et ánnua sollemnitáte lætémur, et
              tantæ fídei proficiámus exémplo. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente, celebrando nós o nascimento da B. Tecla, vossa
              Virgem e Mártir, concedei-nos, Vos suplicamos, que nos alegremos
              com sua festa anual e nos sejam proveitosos os exemplos da sua
              grande fé. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta e Postcomúnio</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
