import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageJesussacramentado() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Cantemos a Jesus Sacramentado</Text>

          <View className="not-content">
            <Text className="text-base">
              Cantemos a Jesus sacramentado, cantemos ao Senhor. Deus está aqui
              dos Anjos adorado, adoremos a Cristo redentor.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Refrão: Glória a Cristo Jesus, Céus e terra, bendizei o Senhor:
              louvor e glória a Ti, ó Rei da glória! Amor p’ra sempre a Ti, ó
              Deus de amor.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              Ó rara caridade e real fineza! Ó doce memorial! Deus está aqui com
              toda a sua riqueza com seu corpo e seu sangue divinal.
            </Text>
            <Text className="text-base">{"\n"}</Text>
            <Text className="text-base">
              No tabernáculo prisioneiro está por nosso amor; quis ficar aqui
              por nosso companheiro para ser-nos alivio em nossa dor.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
