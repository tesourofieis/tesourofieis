import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0214() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Valentim, Presbítero e Mártir, a 14 de Fevereiro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/4martirnaopontifice1">
              Missa In virtúte tua
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Præsta, quǽsumus, omnípotens Deus: ut, qui beáti Valentíni
              Mártyris tui natalítia cólimus, a cunctis malis imminéntibus, ejus
              intercessióne, liberémur. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Concedei-nos, Vos suplicamos, ó Deus omnipotente, que, celebrando
              o natal do B. Valentim, vosso Mártir, sejamos livres por sua
              intercessão de todos os males que nos ameaçam. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Súscipe, quǽsumus, Dómine, múnera dignánter obláta: et, beáti
              Valentini Mártyris tui suffragántibus méritis, ad nostræ salútis
              auxílium proveníre concéde. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Recebei, Vos suplicamos, Senhor, os dons que devidamente Vos
              oferecemos; e pelos méritos e sufrágios do B. Valentim, vosso
              Mártir, concedei-nos que nos sirvam de auxílio para a salvação.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sit nobis, Dómine, reparátio mentis et córporis cœléste mystérium:
              ut, cujus exséquimur actiónem, intercedénte beáto Valentíno
              Mártyre tuo, sentiámus efféctum. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que estes celestiais mystérios, Senhor, restaurem a nossa alma e o
              nosso corpo, a fim de que, por intercessão do B. Valentim, vosso
              Mártir, sintamos os efeitos do sacrifício que celebrámos. Por
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
