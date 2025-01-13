import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1014() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Calisto I, Papa e Mártir, a 14 de Outubro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/sumospontifices">
              Missa Si díligis me
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui nos cónspicis ex nostra infirmitáte defícere: ad amórem
              tuum nos misericórditer per Sanctórum tuórum exémpla restáura. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que nos vedes desfalecer por causa da nossa fraqueza,
              dignai-Vos pela vossa misericórdia restaurar-nos no vosso amor,
              segundo os exemplos dos vossos Santos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Mýstica nobis, Dómine, prosit oblátio: quæ nos et a reátibus
              nostris expédiat, et perpétua salvatióne confírmet. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que esta mística oblação nos aproveite, Senhor; e que nos livre
              das nossas faltas e nos assegure a salvação eterna. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quǽsumus, omnípotens Deus: ut reátus nostros múnera sacráta
              puríficent, et recte vivéndi nobis operéntur efféctum. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Dignai-Vos permitir, ó Deus omnipotente, que estes dons nos
              purifiquem das nossas faltas e que, produzindo em nós os seus
              efeitos, nos façam viver santamente. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
