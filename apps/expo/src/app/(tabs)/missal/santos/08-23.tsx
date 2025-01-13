import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0823() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Filipe Benício, Conf., a 23 de Agosto</Text>

          <Text className="aside">
            Como na [Missa Justus ut
            palma](/missal/comum/15confessoresnaopontifices2), excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui per beátum Philippum Confessórem tuum, exímium nobis
              humilitátis exémplum tribuísti: da fámulis tuis próspera mundi ex
              ejus imitatióne despícere, et cœléstia semper inquírere. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que na pessoa do B. Filipe, vosso Confessor, nos
              proporcionastes exímio exemplo de humildade, fazei que os vossos
              servos, imitando-o, desprezem as alegrias deste mundo e procurem
              sempre as celestiais. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
