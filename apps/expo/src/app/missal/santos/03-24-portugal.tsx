import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page0324Portugal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Festa do Santíssimo Sacramento, a 24 de Março
          </Text>

          <Text className="aside">
            Em todoas as igrejas de Portugal é permitido, neste dia, celebrar em
            honra do Santíssimo Sacramento, a Missa, que será do
            <Link href="/missal/pentecostes/pent1-4">
              {" "}
              Santíssimo Corpo de Cristo{" "}
            </Link>
            com Glória e Credo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
