import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DirectoryList from "~/components/DirectoryList";

export default function PageIndex() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Ritual</Text>

          <DirectoryList slug="ritual" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
