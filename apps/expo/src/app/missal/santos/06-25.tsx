import { Link } from "expo-router";

import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Language from "~/components/Language";

export default function Page0625() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Guilherme, Abade, a 25 de Junho</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/16abades">
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui infirmitáti nostræ ad teréndam salútis viam in Sanctis
              tuis exémplum et præsídium collocásti: da nobis, ita beáti
              Guliélmi Abbátis mérita venerári; ut ejúsdem excipiámus suffrágia
              et vestígia prosequámur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que para facilitar à nossa fraqueza o caminho da salvação
              no auxiliais com o exemplo e com a assistência dos vossos Santos,
              concedei-nos a graça de imitar os méritos do B. Abade Guilherme de
              modo que mereçamos o socorro das suas preces e sigamos os seus
              passos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
