import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page0104() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Oitava dos Santos Inocentes, a 4 de Janeiro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/12-28">
              Missa Santos Inocentes
            </Link>{" "}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
