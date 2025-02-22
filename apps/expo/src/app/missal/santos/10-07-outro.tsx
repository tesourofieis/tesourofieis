import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1007Outro() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Marcos, Papa e Conf., a 7 de Outubro</Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/sumospontifices">
              Missa Si díligis me
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Exáudi, Dómine, preces nostras: et, interveniénte beáto Marco
              Confessóre tuo atque Pontífice, indulgéntiam nobis tríbue placátus
              et pacem. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Pastor eterno, atendei propício ao vosso rebanho; e guardai-o
              com vossa perpétua protecção por intercessão do bem-aventurado
              Marcos, vosso Sumo Pontífice, o qual escolhestes como pastor de
              toda a Igreja. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre
              Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit
              auxílium. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Com as ofertas destes dons, Vos suplicamos, Senhor, iluminai
              benignamente a vossa Igreja, a fim de que não só o vosso rebanho
              triunfe em toda a parte, mas também pelo poder do vosso nome os
              pastores sejam bem acolhidos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Da, quǽsumus, Dómine, fidélibus pópulis Sanctórum tuórum semper
              veneratióne lætari: et eórum perpétua supplicatióne muníri. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos suplicamos, governai com mansidão a vossa Igreja,
              agora que foi alimentada com a sagrada refeição, a fim de que,
              dirigida com firme suavidade, alcance o incremento da sua
              liberdade e persista na integridade da sua doutrina. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
