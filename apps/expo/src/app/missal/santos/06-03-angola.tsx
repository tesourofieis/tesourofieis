import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page0603Angola() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Carlos Lwanga e Outros, Mártires, a 3 de Junho, Em Angola
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/6muitosmartires1">
              Missa Intret in
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>Ó Deus, que nos permitistes a graça
          de celebrarmos o nascimento no céu dos vossos Santos Mártires Carlos,
          Matias e seus Companheiros, concedei-nos ainda a graça de gozarmos na
          sua companhia a bem-aventurança eterna. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
