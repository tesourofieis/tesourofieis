import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1017Braga() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasl. de S. Pedro de Rates, a 17 de Outubro, Na Arquidiocese de
            Braga
          </Text>
          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/3martirpontifice">
              Missa Sacerdótes Dei
            </Link>{" "}
            , excepto:
          </Text>
          <Text className="h3">Oração</Text>Ó Deus, que de um modo admirável nos
          destes como primeiro Pastor o B. Mártir Pedro, permiti, Vos
          imploramos, que, celebrando a sua Trasladação, nos tornemos dignos
          filhos de tão grande pai. Por nosso Senhor
          <Text className="h3">Secreta</Text>
          Olhai benignamente, Senhor, para as dádivas que Vos pela intercessão
          daquele cujos méritos Vos foram agradáveis, elas nos sejam salutares.
          Por nosso Senhor...
          <Text className="h3">Postcomúnio</Text>
          Humildemente Vos suplicamos, Senhor, que nos guardeis com a graça da
          contínua oração do B. Pedro, vosso Mártir e Pontífice, para que pelos
          seus méritos seja dignamente governada a Igreja que se ufana de o
          haver possuído como seu Padroeiro e Chefe. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
