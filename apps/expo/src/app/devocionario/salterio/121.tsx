import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page121() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 121</Text>

          <View className="side-by-side">
            <Text className="latin">
              Lætátus sum in his, quæ dicta sunt mihi: * In domum Dómini íbimus.
            </Text>
            <Text className="vernacular">
              Alegrei-me com o que me foi dito: * iremos à casa do Senhor.
            </Text>
            <Text className="latin">
              Stantes erant pedes nostri, * in átriis tuis, Jerúsalem.
            </Text>
            <Text className="vernacular">
              Estavam os nossos pés parados, * às tuas portas, ó Jerusalém.
            </Text>
            <Text className="latin">
              Jerúsalem, quæ ædificátur ut cívitas: * cujus participátio ejus in
              idípsum.
            </Text>
            <Text className="vernacular">
              Jerusalém, que está edificada como uma cidade: * cujas partes
              estão em união.
            </Text>
            <Text className="latin">
              Illuc enim ascendérunt tribus, tribus Dómini: * testimónium Israël
              ad confiténdum nómini Dómini.
            </Text>
            <Text className="vernacular">
              De facto, lá subiram as tribos, as tribos do Senhor: * como
              testemunho a Israel, para louvar o nome do Senhor.
            </Text>
            <Text className="latin">
              Quia illic sedérunt sedes in judício, * sedes super domum David.
            </Text>
            <Text className="vernacular">
              Pois ali se estabeleceram as sedes em julgamento, * sedes sobre a
              casa de David.
            </Text>
            <Text className="latin">
              Rogáte quæ ad pacem sunt Jerúsalem: * et abundántia diligéntibus
              te:
            </Text>
            <Text className="vernacular">
              Roguei graças de paz para Jerusalém: * e abundância para os que a
              amam.
            </Text>
            <Text className="latin">
              Fiat pax in virtúte tua: * et abundántia in túrribus tuis.
            </Text>
            <Text className="vernacular">
              Reine a paz na tua força, * e abundância nas tuas torres.
            </Text>
            <Text className="latin">
              Propter fratres meos, et próximos meos, * loquébar pacem de te:
            </Text>
            <Text className="vernacular">
              Por causa dos meus irmãos e dos meus vizinhos, * pedi a paz para
              ti.
            </Text>
            <Text className="latin">
              Propter domum Dómini, Dei nostri, * quæsívi bona tibi.
            </Text>
            <Text className="vernacular">
              Por causa da casa do Senhor nosso Deus, * procurei o bem para ti.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
