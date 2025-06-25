import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page0809Outro2() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Romão, Mártir, a 9 de Agosto</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/5martirnaopontifice2">
              Missa Lætábitur justus
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Præsta, quǽsumus, omnípotens Deus: ut, intercedénte beáto Románo
              Mártyre tuo, et a cunctis adversitátibus liberémur in córpore, et
              a pravis cogitatiónibus mundémur in mente. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Fazei, ó Deus omnipotente, Vos rogamos, que pela intercessão do B.
              Romão, vosso Mártir, o nosso corpo seja livre de todas as
              adversidades e a nossa alma purificada dos maus pensamentos. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Munéribus nostris, quǽsumus, Dómine, precibúsque suscéptis: et
              cœléstibus nos munda mysteriis, et cleménter exáudi. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Havendo Vós, Senhor, aceitado as nossas ofertas e orações,
              dignai-Vos purificar-nos com vossos celestiais mystérios e
              ouvir-nos benignamente. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Quǽsumus, omnípotens Deus: ut, qui cœlestia aliménta percépimus,
              intercedénte beáto Románo Mártyre tuo, per hæc contra ómnia
              advérsa muniámur. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Vos suplicamos, ó omnipotente Deus, pela intercessão do B. Romão,
              vosso Mártir, que, havendo nós recebido os alimentos celestiais,
              sejamos, em virtude deles, fortalecidos contra todas as
              adversidades. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
