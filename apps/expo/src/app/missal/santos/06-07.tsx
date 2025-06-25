import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page0607() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. João Nepomuceno, Mártir, a 7 de Junho</Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/5martirnaopontifice2">
              Missa Lætábitur justus
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>
          <Text className="text-base">
            Ó Deus, que pelo sigílio sacramental, inviolávelmente mantido pelo
            B. João, coroastes a vossa Igreja com a glória de um novo martírio,
            concedei-nos pela sua intercessão e exemplo que vigiemos
            cuidadosamente a nossa língua, de modo que antes queiramos sofrer
            todos os males neste mundo do que perder a nossa alma. Por nosso
            Senhor...
          </Text>
          <Text className="h3">Secreta</Text>
          <Text className="text-base">
            Possamos nós, Senhor, pela virtude destes sacrossantos mystérios,
            ser abrasados no fogo da caridade, no qual ardia o ínclito Mártir
            João, quando os celebrava. Por nosso Senhor...
          </Text>
          <Text className="h3">Postcomúnio</Text>
          <Text className="text-base">
            Que esta mesa celestial nos comunique, Senhor, o Espírito de
            fortaleza, que constantemente amparou e guiou até à vitória o B.
            João, vosso Mártir, cuja firmeza ao vosso sacramento foi
            violentamente experimentada. Por nosso Senhor...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
