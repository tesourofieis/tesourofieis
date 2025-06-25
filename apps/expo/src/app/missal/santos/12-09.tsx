import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "./12-08";

export default function Page1209() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Segundo Dia na Oitava, a 9 de Dezembro</Text>

          <Text className="comment">
            A Igreja prolonga durante oito dias a festa da vitória alcançada por
            Maria sobre o demónio, e retoma a Missa de ontem. As festas
            principais da Santíssima Virgem são a Assunção e a Imaculada
            Conceição, ambas de primeira classe e de primeira ordem com oitava.
            É recitado diariamente o Credo, profissão de fé fixada no Concílio
            de Constantinopla e somente cantado nas reuniões mais solenes do
            culto. Preparemo-nos para o Nascimento de Jesus em nossos corações
            imitando, embora longe, algo da pureza de sua Mãe.
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
