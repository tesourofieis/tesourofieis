import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page19Animais() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">19.ª Nas doenças dos animais</Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui labóribus hóminum étiam de mutis animálibus solácia
              subrogásti: súpplices te rogámus; ut, sine quibus non álitur
              humána condício, nostris fácias úsibus non períre. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que Vos dignastes aliviar os trabalhos dos homens,
              concedendo-lhes o auxílio dos animais irracionais, humildemente
              Vos pedimos, conservai para as nossas necessidades, preservando-os
              da morte, aqueles de que a condição humana tem necessidade. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Sacrifíciis, Dómine, placátus oblátis: opem tuam nostris
              tempóribus cleménter impénde. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que os sacrifícios que Vos oferecemos, ó Senhor, aplaquem a vossa
              ira, e que a vossa clemência se faça sentir nestes infelizes
              tempos. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Benedictiónem tuam, Dómine, pópulus fidélis accípiat, qua córpore
              salvétur et mente: et cóngruam tibi exhíbeat servitútem, et
              propitiatiónis tuæ benefícia semper invéniat. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que o vosso povo fiel, Senhor, receba a vossa bênção,
              conferindo-lhe a saúde ao corpo e à alma, para que continue a
              servir-Vos convenientemente e por isso mesmo alcance os benefícios
              da vossa misericórdia. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
