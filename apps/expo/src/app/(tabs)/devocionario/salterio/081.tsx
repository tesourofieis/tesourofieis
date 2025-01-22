import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page081() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Salmo 81</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus stetit in synagóga deórum: * in médio autem deos dijúdicat.
            </Text>
            <Text className="text-base vernacular">
              Deus está presente no conselho dos deuses: * no meio deles julga
              os mesmos deuses.
            </Text>
            <Text className="text-base latin">
              Úsquequo judicátis iniquitátem: * et fácies peccatórum súmitis?
            </Text>
            <Text className="text-base vernacular">
              Até quando julgareis injustamente: * e tereis em favor os
              pecadores?
            </Text>
            <Text className="text-base latin">
              Judicáte egéno, et pupíllo: * húmilem, et páuperem justificáte.
            </Text>
            <Text className="text-base vernacular">
              Fazei justiça ao necessitado e ao órfão: * atendei à razão do
              humilde e do pobre.
            </Text>
            <Text className="text-base latin">
              Erípite páuperem: * et egénum de manu peccatóris liberáte.
            </Text>
            <Text className="text-base vernacular">
              Resgatai o pobre: * e livrai o desvalido da mão do pecador.
            </Text>
            <Text className="text-base latin">
              Nesciérunt, neque intellexérunt, in ténebris ámbulant: *
              movebúntur ómnia fundaménta terræ.
            </Text>
            <Text className="text-base vernacular">
              Não souberam nem entenderam, andam nas trevas: * serão abalados
              todos os fundamentos da terra.
            </Text>
            <Text className="text-base latin">
              Ego dixi: Dii estis, * et fílii Excélsi omnes.
            </Text>
            <Text className="text-base vernacular">
              Eu disse: sois deuses, * e todos filhos do Excelso.
            </Text>
            <Text className="text-base latin">
              Vos autem sicut hómines moriémini: * et sicut unus de princípibus
              cadétis.
            </Text>
            <Text className="text-base vernacular">
              Contudo, vós como homens morrereis: * e caireis como um qualquer
              príncipe.
            </Text>
            <Text className="text-base latin">
              Surge, Deus, júdica terram: * quóniam Tu hereditábis in ómnibus
              géntibus.
            </Text>
            <Text className="text-base vernacular">
              Levantai-Vos, ó Deus, julgai a terra: * porque todos as gentes são
              vossa herança.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
