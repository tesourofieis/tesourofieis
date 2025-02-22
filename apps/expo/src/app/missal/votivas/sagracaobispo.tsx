import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageSagracaobispo() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Na Sagração de um Bispo</Text>

          <Text className="aside">
            Missa Própria do dia, acrescentando-se à Oração, à Secreta e ao
            Postcomúnio, sob a mesma conclusão, o seguinte:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="latin">
              Adésto supplicatiónibus nostris, omnípotens Deus: ut, quod
              humilitátis nostræ geréndum est ministério, tuæ virtútis impleátur
              efféctu. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó omnipotente Deus, atendei às nossas súplicas, a fim de que
              aquilo que praticamos pelo nosso humilde ministério, tenha efeito
              pelo vosso poder. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Súscipe, Dómine, múmera, quæ tibi offérimus pro hoc fámulo tuo: ut
              propítius in eo tua dona custódias. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Aceitai, Senhor, as oblatas que Vos Oferecemos em benefício deste
              vosso servo, a fim de que, propiciamente, conserveis nela os
              vossos dons. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Súscipe, Dómine, múnera, quæ tibi offérimus pro me fámulo tuo: ut
              propítius in me tua dona custódias. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Senhor, Vos suplicamos, que nos sejam salutares os remédios da
              vossa misericórdia; e que, propiciamente, eles de tal modo nos
              reanimem e alentem que em todo nosso ministério Vos consigamos
              agradar. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
