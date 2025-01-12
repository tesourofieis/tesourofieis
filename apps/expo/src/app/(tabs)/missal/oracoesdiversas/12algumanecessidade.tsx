import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page12Algumanecessidade() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">12.ª Por alguma necessidade</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, refúgium nostrum et virtus: adésto piis Ecclésiæ tuæ
              précibus, auctor ipse pietátis, et præsta; ut, quod fidéliter
              pétimus, efficáciter consequámur. Per Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Ó Deus, nosso refúgio e fortaleza e autor da piedade, atendei às
              preces devotas da vossa Igreja, para que obtenhamos eficazmente o
              que Vos suplicamos confiadamente. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Da, miséricors Deus: ut hæc salutáris oblátio et a própriis nos
              reátibus indesinénter expédiat, et ab ómnibus tueátur advérsis.
              Per Dóminum...
            </Text>
            <Text className="text-base">
              Concedei-nos, ó Deus misericordioso, que esta salutar oblação nos
              livre urgentemente das nossas próprias faltas e nos defenda de
              todas as adversidades. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Súmpsimus, Dómine, sacri dona mystérii, humíliter deprecántes: ut,
              quæ in tui commemoratiónem nos fácere præcepísti, in nostræ
              profíciant infirmitátis auxílium: Qui vivis...
            </Text>
            <Text className="text-base">
              Senhor, recebemos os dons dos vossos sagrados mystérios; e,
              humildemente Vos suplicamos, permiti que seja proveitoso para a
              nossa fraqueza aquilo que ordenastes fizéssemos em vossa memória.
              Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
