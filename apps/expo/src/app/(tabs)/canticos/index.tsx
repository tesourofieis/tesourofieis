import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import DirectoryList from "~/components/DirectoryList";

export default function PageIndex() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Cânticos</Text>

          <DirectoryList slug="canticos" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
