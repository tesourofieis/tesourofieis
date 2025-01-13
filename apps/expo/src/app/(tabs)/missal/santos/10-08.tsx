import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1008() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Santa Brígida, Viúva, a 8 de Outubro</Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
              Missa Cognóvi, Dómine
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Dómine, Deus noster, qui beátæ Birgíttæ per Fílium tuum unigénitum
              secreta cœléstia revelásti: ipsíus pia intercessióne da nobis,
              fámulis tuis; in revelatióne sempitérna glóriæ tuæ gaudére
              lætántes. Per eúndem Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, nosso Deus, que pelo vosso Unigénito Filho revelastes os
              segredos celestiais à B. Brígida, concedei-nos, já que somos
              vossos servos, que nos alegremos na felicidade da contemplação da
              vossa eterna glória. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/santos/05-04#epístola"
            title="Santa Mónica, Viúva"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
