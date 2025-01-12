import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageEucaminharei() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Eu caminharei</Text>

          <View className="not-content">
            <Text className="text-base">
              Eu caminharei em direcção a Deus, que alegra os filhos seus.
            </Text>
            <Text className="text-base">
              <br />
            </Text>
            <Text className="text-base">
              Refrão: Glória ao Pai, glória ao Filho Senhor, glória ao Espírito
              Santo amor.
            </Text>
            <Text className="text-base">
              <br />
            </Text>
            <Text className="text-base">
              Em ardente prece e humilde confissão, vamos pedir perdão.
            </Text>
            <Text className="text-base">
              <br />
            </Text>
            <Text className="text-base">
              No seu santo templo tem Deus um altar para connosco estar.
            </Text>
            <Text className="text-base">
              <br />
            </Text>
            <Text className="text-base">
              Do seu corpo fez o nosso alimento divino sacramento.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
