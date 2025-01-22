import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Salmo94 from "./../devocionario/salterio/094";

export default function PageOficiodefuntos() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Ofício dos Defuntos</Text>

          <Text className="aside">
            Rezar{" "}
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai-nosso
            </Link>{" "}
            ;
            <Link className="link" href="/devocionario/oracoes/avemaria">
              Ave-Maria
            </Link>{" "}
            ;
            <Link
              className="link"
              href="/devocionario/oracoes/simboloapostolos"
            >
              Creio em Deus.
            </Link>
          </Text>

          <Text className="h2">Invitatório</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Regem, cui ómnia vivunt, Veníte adorémus.
            </Text>
            <Text className="text-base vernacular">
              Vinde, adoremos o Rei para quem todas as criatura vivem.
            </Text>
            <Text className="text-base latin">
              Regem, cui ómnia vivunt, Veníte adorémus.
            </Text>
            <Text className="text-base vernacular">
              Vinde, adoremos o Rei para quem todas as criatura vivem.
            </Text>
          </View>

          <Text className="h2">Salmo 94</Text>

          <Salmo94 />

          <View className="side-by-side">
            <Text className="text-base latin">
              Veníte, exsultémus Dómino: * jubilémus Deo salutári nostro:
            </Text>
            <Text className="text-base vernacular">
              Vinde, exultemos no Senhor: * cantemos alegres a de Deus nosso
              salvador:
            </Text>
            <Text className="text-base latin">
              Præoccupémus fáciem ejus in confessióne: * et in psalmis jubilémus
              ei.
            </Text>
            <Text className="text-base vernacular">
              Apresentemo-nos diante d’Ele em acção de graças: * e celebremo-l’O
              com salmos.
            </Text>
          </View>

          <View className="side-by-side">
            <Text className="text-base latin">
              Regem, cui ómnia vivunt, Veníte adorémus.
            </Text>
            <Text className="text-base vernacular">
              Vinde, adoremos o Rei para quem todas as criatura vivem.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
