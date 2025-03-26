import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function PageOgloriosavirginum() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">O gloriosa virginum</Text>

          <Language>
            <Text className="latin">
              O gloriósa vírginum, sublímis inter sídera, Qui te creávit
              párvulum lacténte nutris úbere.
            </Text>
            <Text className="vernacular">
              Virgem Virgem mais esclarecida, sobre os astros superior, que a
              vosso próprio criador a vossos peitos dais vida.
            </Text>
            <Text className="latin">
              Quod Eva tristis ábstulit, tu reddis almo gérmine, Intrent ut
              astra flébiles, caeli reclúdis cárdines.
            </Text>
            <Text className="vernacular">
              O que por Eva perdemos com vosso fruto restituístes; as portas do
              céu abristes, para que os tristes entremos.
            </Text>
            <Text className="latin">
              Tu Regis alti jánua et aula lucis fúlgida, Vitam datam per
              Vírginem, gentes redémptae pláudite.
            </Text>
            <Text className="vernacular">
              Vós sois porta do alto Rei, de luz aula esclarecida: aplaudi,
              gentes, a vida que a virgem nos concedeu
            </Text>
            <Text className="latin">
              Jesu Tibi sit glória, Qui natus es de Vírgine, Cum Patre et Almo
              Spíritu, in sempitérna saécula. Amen.
            </Text>
            <Text className="vernacular">
              Jesus seja engrandecido, da virgem pura nascido, e o eterno Pai
              também, com o Espírito Santo. Amen.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
