import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page099() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 99</Text>

          <View className="side-by-side">
            <Text className="latin">
              Jubiláte Deo, omnis terra: * servíte Dómino in lætítia.
            </Text>
            <Text className="vernacular">
              Aclamai a Deus, toda a terra: * servi o Senhor com alegria.
            </Text>
            <Text className="latin">
              Introíte in conspéctu ejus, * in exsultatióne.
            </Text>
            <Text className="vernacular">
              Vinde à sua presença * em grande exaltação.
            </Text>
            <Text className="latin">
              Scitóte quóniam Dóminus ipse est Deus: * ipse fecit nos, et non
              ipsi nos.
            </Text>
            <Text className="vernacular">
              Sabei que o Senhor é Deus: * nos fez Ele e não nós a nós mesmos.
            </Text>
            <Text className="latin">
              Pópulus ejus, et oves páscuæ ejus: * introíte portas ejus in
              confessióne, átria ejus in hymnis: confitémini illi.
            </Text>
            <Text className="vernacular">
              O seu povo e as ovelhas do seu pasto: * entrai nos seus portões
              com louvor, nos seus átrios com hinos: glorificai-O.
            </Text>
            <Text className="latin">
              Laudáte nomen ejus: quóniam suávis est Dóminus, in ætérnum
              misericórdia ejus, * et usque in generatiónem et generatiónem
              véritas ejus.
            </Text>
            <Text className="vernacular">
              Louvai o seu nome: porque o Senhor é suave, a sua misericórdia é
              eterna: * e a sua verdade permanece de geração em geração.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
