import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page0924() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            B. Virgem Maria das Mercês, a 24 de Setembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/26festasmaria1">
              Missa Salve
            </Link>{" "}
            , sancta Parens da Virgem Maria, excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui per gloriosíssimam Fílii tui Matrem, ad liberandos
              Christi fidéles a potestáte paganórum, nova Ecclésiam tuam prole
              amplificáre dignátus es: præsta, quǽsumus; ut, quam pie venerámur
              tanti óperis institutrícem, ejus páriter méritis et intercessióne,
              a peccátis ómnibus et captivitáte dǽmonis liberémur. Per eúndem
              Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que pela gloriosíssima Mãe do vosso Filho Vos dignastes
              aumentar a vossa Igreja com uma nova família, destinada a libertar
              os fiéis de Cristo do poder dos pagãos, concedei-nos, Vos rogamos,
              que, venerando piedosamente a inspiradora de uma tão notável
              instituição, sejamos, graças aos seus méritos e intercessão,
              livres de todos os pecados e do cativeiro do demónio. Pelo
              mesmo...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
