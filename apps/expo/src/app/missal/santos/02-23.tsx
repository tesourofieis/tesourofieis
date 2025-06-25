import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page0223() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Pedro Damião, B., C. e Doutor, a 23 de Fevereiro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Concéde nos, quǽsumus, omnípotens Deus: beáti Petri Confessóris
              tui atque Pontíficis mónita et exémpla sectári; ut per terréstrium
              rerum contémptum ætérna gáudia consequámur. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Concedei-nos, ó Deus omnipotente, Vos suplicamos, que imitemos as
              lições e os exemplos do B. Pedro, vosso Confessor e Pontífice, a
              fim de que pelo desprezo dos bens terrenos alcancemos as alegrias
              eternas. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
