import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page13Tribulacao() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">13.ª Por alguma tribulação</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ne despícias, omnípotens Deus, pópulum tuum in afflictióne
              clamántem: sed, propter glóriam nóminis tui, tribulátis succúrre
              placátus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Não desprezeis, ó Deus omnipotente, o vosso povo, que nesta
              aflição por Vós clama; mas antes, para glória do vosso nome,
              deixai-Vos aplacar e vinde em auxílio daqueles que estão na
              tribulação. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Súscipe, Dómine, propítius hóstias, quibus et te placári voluísti,
              et nobis salútem poténti pietáte restítui. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Recebei propício, Senhor, estas oblações, com as quais quisestes
              ser aplacado; e, pela vossa poderosa misericórdia, restituí-nos a
              salvação por meio delas. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Tribulatiónem nostram, quǽsumus, Dómine, propítius réspice: et
              iram tuæ indignatiónis, quam juste merémur, avérte. Per Dóminum
              nostrum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos suplicamos, lançai vossos olhares misericordiosos para
              as nossas tribulações e afastai de nós o furor da vossa
              indignação, que justamente merecemos. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
