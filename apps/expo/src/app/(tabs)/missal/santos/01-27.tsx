import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0127() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. João Crisóstomo, B. C. e Doutor, a 27 de Janeiro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ecclésiam tuam, quǽsumus, Dómine, grátia cœléstis amplíficet: quam
              beáti Joánnis Chrysóstomi Confessóris tui atque Pontíficis
              illustráre voluísti gloriósis méritis et doctrínis. Per Dóminum
              nostrum...
            </Text>
            <Text className="text-base vernacular">
              Vos suplicamos, Senhor, que a graça celestial aumente a vossa
              Igreja, a qual quisestes ilustrar com os gloriosos méritos e
              ensinos do B. João Crisóstomo, vosso Confessor e Pontífice. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Ecl. 44, 16</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ecce sacérdos magnus, qui in diébus suis plácuit Deo. ℣.{" "}
              <Text className="text-base latin">ibid., 20</Text> Non est
              inventus símilis illi, qui conserváret legem Excélsi.
            </Text>
            <Text className="text-base vernacular">
              Eis o grande sacerdote que nos dias da sua vida agradou a Deus. ℣.{" "}
              <Text className="text-base vernacular">ibid., 20</Text> Ninguém o
              igualou na observância das leis do Altíssimo.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Jac. 1, 12</Text> Beátus vir,
              qui suffert tentatiónem: quóniam, cum probátus fúerit, accípiet
              corónam vitæ. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Tg. 1, 12</Text>{" "}
              Bem-aventurado o varão que sofre com paciência a tentação, porque,
              quando acabar a provação, alcançará a coroa da vida. Aleluia.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
