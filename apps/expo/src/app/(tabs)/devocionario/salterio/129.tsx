import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page129() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 129</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              De profúndis clamávi ad Te, Dómine: * Dómine, exáudi vocem meam:
            </Text>
            <Text className="text-base vernacular">
              Do profundo clamei a Vós, Senhor: * ó Senhor, escutai a minha voz:
            </Text>
            <Text className="text-base latin">
              Fiant aures tuæ intendéntes, * in vocem deprecatiónis meæ.
            </Text>
            <Text className="text-base vernacular">
              Estejam atentos os vossos ouvidos, * à voz da minha súplica.
            </Text>
            <Text className="text-base latin">
              Si iniquitátes observáveris, Dómine: * Dómine, quis sustinébit?
            </Text>
            <Text className="text-base vernacular">
              Se observardes as nossas iniquidades, Senhor: * ó Senhor, quem
              subsistirá?
            </Text>
            <Text className="text-base latin">
              Quia apud Te propitiátio est: * et propter legem tuam sustínui Te,
              Dómine.
            </Text>
            <Text className="text-base vernacular">
              Pois em Vós está a clemência: * Senhor, e devido à vossa lei
              subsiste em Vós.
            </Text>
            <Text className="text-base latin">
              Sustínuit ánima mea in verbo ejus: * sperávit ánima mea in Dómino.
            </Text>
            <Text className="text-base vernacular">
              Minha alma subsiste na sua palavra: * esperou a minha alma no
              Senhor.
            </Text>
            <Text className="text-base latin">
              A custódia matutína usque ad noctem: * speret Israël in Dómino.
            </Text>
            <Text className="text-base vernacular">
              Desde a vigília matutina até à noite: * espere Israel no Senhor.
            </Text>
            <Text className="text-base latin">
              Quia apud Dóminum misericórdia: * et copiósa apud eum redémptio.
            </Text>
            <Text className="text-base vernacular">
              Pois no Senhor está a misericórdia: * e há n’Ele abundante
              redenção.
            </Text>
            <Text className="text-base latin">
              Et ipse rédimet Israël, * ex ómnibus iniquitátibus ejus.
            </Text>
            <Text className="text-base vernacular">
              Ele mesmo redimirá Israel, * de todas suas iniquidades.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
