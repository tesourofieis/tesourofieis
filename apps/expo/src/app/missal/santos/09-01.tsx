import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page0901() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Egídio (ou Gil), Abade, a 1 de Setembro</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/16abades">
              Missa Os justi.
            </Link>{" "}
            A Comemoração dos S. S. Doze Irmãos como na
            <Link href="/missal/santos/08-01">
              Missa Comemoração dos S. S. Macabeus, Mártires.
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
