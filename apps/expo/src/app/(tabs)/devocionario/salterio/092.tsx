import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page092() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 92</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Dóminus regnávit, decórem indútus est: * indútus est Dóminus
              fortitúdinem, et præcínxit se.
            </Text>
            <Text className="text-base vernacular">
              O Senhor reinou e vestiu-se de magnificência: * vestiu-se o Senhor
              de fortaleza e cingiu-se dela.
            </Text>
            <Text className="text-base latin">
              Étenim firmávit orbem terræ, * qui non commovébitur.
            </Text>
            <Text className="text-base vernacular">
              Pois firmou a órbita da terra, * que não será abalada.
            </Text>
            <Text className="text-base latin">
              Paráta sedes tua ex tunc: * a sǽculo Tu es.
            </Text>
            <Text className="text-base vernacular">
              De então ficou vosso trono preparado: * Vós sois desde a
              eternidade.
            </Text>
            <Text className="text-base latin">
              Elevavérunt flúmina, Dómine: * elevavérunt flúmina vocem suam.
            </Text>
            <Text className="text-base vernacular">
              Os rios levantaram, ó Senhor: * os rios levantaram a sua voz.
            </Text>
            <Text className="text-base latin">
              Elevavérunt flúmina fluctus suos, * a vócibus aquárum multárum.
            </Text>
            <Text className="text-base vernacular">
              Levantaram os rios o som das suas ondas, * com estrondo das muitas
              águas.
            </Text>
            <Text className="text-base latin">
              Mirábiles elatiónes maris: * mirábilis in altis Dóminus.
            </Text>
            <Text className="text-base vernacular">
              Maravilhosas as elevações do mar: * admirável o Senhor nas
              alturas.
            </Text>
            <Text className="text-base latin">
              Testimónia tua credibília facta sunt nimis: * domum tuam decet
              sanctitúdo, Dómine, in longitúdinem diérum.
            </Text>
            <Text className="text-base vernacular">
              Vossos testemunhos são digníssimos de fé: * a santidade convém à
              vossa casa, ó Senhor, na longitude dos dias.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
