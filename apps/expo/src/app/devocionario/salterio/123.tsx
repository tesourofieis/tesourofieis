import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page123() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 123</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Nisi quia Dóminus erat in nobis, dicat nunc Israël: * nisi quia
              Dóminus erat in nobis,
            </Text>
            <Text className="text-base vernacular">
              Se o Senhor não tivesse estado connosco, diga-o agora Israel: * se
              o Senhor não tivesse estado connosco,
            </Text>
            <Text className="text-base latin">
              Cum exsúrgerent hómines in nos, * forte vivos deglutíssent nos:
            </Text>
            <Text className="text-base vernacular">
              Quando os homens se levantavam contra nós, * de certo nos teriam
              devorado vivos:
            </Text>
            <Text className="text-base latin">
              Cum irascerétur furor eórum in nos, * fórsitan aqua absorbuísset
              nos.
            </Text>
            <Text className="text-base vernacular">
              Quando se inflamou a ira deles contra nós, * sem dúvida a água nos
              teria afogado.
            </Text>
            <Text className="text-base latin">
              Torréntem pertransívit ánima nostra: * fórsitan pertransísset
              ánima nostra aquam intolerábilem.
            </Text>
            <Text className="text-base vernacular">
              A nossa alma passou a torrente: * talvez a nossa alma poderia ter
              passado a água intolerável.
            </Text>
            <Text className="text-base latin">
              Benedíctus Dóminus * qui non dedit nos in captiónem déntibus
              eórum.
            </Text>
            <Text className="text-base vernacular">
              Bendito o Senhor, * que nos não deu por presa aos seus dentes.
            </Text>
            <Text className="text-base latin">
              Ánima nostra sicut passer erépta est * de láqueo venántium:
            </Text>
            <Text className="text-base vernacular">
              A nossa alma escapou como o pássaro * do laço dos caçadores:
            </Text>
            <Text className="text-base latin">
              Láqueus contrítus est, * et nos liberáti sumus.
            </Text>
            <Text className="text-base vernacular">
              O laço foi quebrado, * e nós ficámos livres.
            </Text>
            <Text className="text-base latin">
              Adjutórium nostrum in nómine Dómini, * qui fecit cælum et terram.
            </Text>
            <Text className="text-base vernacular">
              Nosso auxílio está no nome do Senhor, * que fez o céu e a terra.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
