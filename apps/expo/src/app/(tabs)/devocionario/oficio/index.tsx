import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import DirectoryList from "~/components/DirectoryList";

export default function PageIndex() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Pequeno Ofício de Nossa Senhora</Text>

          <View className="aside">
            Em conformidade com <Text className="em">Editio Typica</Text> do
            Breviário Romano.
          </View>

          <DirectoryList slug="devocionario/oficio" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
