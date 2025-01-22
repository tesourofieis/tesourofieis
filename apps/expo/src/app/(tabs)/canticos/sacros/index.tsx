import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import DirectoryList from "~/components/DirectoryList";

export default function PageIndex() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Sacros</Text>

          <DirectoryList slug="canticos/sacros" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
