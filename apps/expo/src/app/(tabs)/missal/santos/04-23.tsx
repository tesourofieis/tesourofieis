import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0423() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Jorge, Patrono de Portugal, a 23 de Abril
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/9martir">
              Missa Protexísti me
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui nos beáti Georgii Martyris tui méritis et intercessióne
              lætíficas: concéde propítius; ut, qui tua per eum benefícia
              póscimus, dono tuæ grátiæ consequámur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que nos alegrais com os méritos e intercessão do B. Jorge,
              vosso Mártir, concedei-nos propício que, suplicando-Vos por sua
              intercessão os vossos benefícios, os obtenhamos por efeito da
              vossa graça. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/5martirnaopontifice2#epístola"
            title="Mártir não Pontífice - Missa Lætábitur justus"
          />

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Múnera, Dómine, obláta sanctífica: et, intercedénte beáto Geórgio
              Mártyre tuo, nos per hæc a peccatórum nostrórum máculis emúnda.
              Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Santificai, Senhor, estas oblatas que Vos são oferecidas; e pela
              intercessão do B. Jorge, vosso Mártir, purificai-nos, pela sua
              virtude, das manchas dos nossos pecados. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Súpplices te rogámus, omnípotens Deus: ut, quos tuis réficis
              sacraméntis, intercedénte beáto Geórgio Mártyre tuo, tibi étiam
              plácitis móribus dignánter tríbuas deservíre. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente, Vos imploramos, pela intercessão do B. Jorge,
              vosso Mártir, dignai-Vos conceder àqueles a quem sustentais com
              vossos sacramentos a graça de Vos servirem, como convém, com
              conduta de vida que Vos agrade. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
