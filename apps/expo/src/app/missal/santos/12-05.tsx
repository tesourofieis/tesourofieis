import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Missa from "../comum/16abades";

export default function Page1205() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Sabas, Abade, a 5 de Dezembro</Text>

          <Text className="comment">
            A ordem monástica devia ser representada no cortejo da Virgem
            Imaculada, dos Apóstolos, dos Pontífices e das Virgens que precedem
            ao Cristo. Por isso, a Igreja faz memória de S. Sabas celebre
            anacoreta muito conhecido na Palestina, no século V, por suas
            virtudes e austeridades. Foi o organizador das comunidades
            monásticas na Palestina e fundo, entre outros, o célebre mosteiro
            que traz o seu nome. Morreu em 531 com mais de 90 anos.
          </Text>

          <Missa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
