import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0727Outro() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            B. Rodolfo Água-Viva e Outros, Márts, a 27 de Julho
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/7muitosmartires2">
              Missa Sapiéntiam sanctórum
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>
          Vos pedimos, permiti que a veneranda oblação dos vossos B. B. Mártires
          Rodolfo, Afonso, Pedro, António e Francisco Vos recomende as nossas
          orações, a fim de que, pelo seu exemplo e intercessão, também nos
          imolemos, como hóstia viva por Vós recebida, em honra do vosso santo
          nome. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
