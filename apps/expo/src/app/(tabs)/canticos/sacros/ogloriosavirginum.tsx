import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageOgloriosavirginum() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">O gloriosa virginum</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              O gloriosa virginum, Sublimis inter sidera: Qui te creavit,
              parvulum Lactente nutris ubere.
            </Text>
            <Text className="text-base vernacular">
              Virgem Virgem mais esclarecida, sobre os astros superior, que a
              vosso próprio criador a vossos peitos dais vida.
            </Text>
            <Text className="text-base latin">
              Quod Heva tristis abstulit, tu reddis almo germine; intrent ut
              astra flebiles, cæli recludis cardines.
            </Text>
            <Text className="text-base vernacular">
              O que por Eva perdemos com vosso fruto restituístes; as portas do
              céu abristes, para que os tristes entremos.
            </Text>
            <Text className="text-base latin">
              Tu regis alti janua, et aula lucis fulgida; vitam datam per
              Virginem, gentes redemptæ plaudite.
            </Text>
            <Text className="text-base vernacular">
              Vós sois porta do alto Rei, de luz aula esclarecida: aplaudi,
              gentes, a vida que a virgem nos concedeu
            </Text>
            <Text className="text-base latin">
              Jesu, tibi sit gloria, qui natus es de Virgine, cum Patre, et almo
              Sipritu, in sempiterna sæcula. Amen.
            </Text>
            <Text className="text-base vernacular">
              Jesus seja engrandecido, da virgem pura nascido, e o eterno Pai
              também, com o Espírito Santo. Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
