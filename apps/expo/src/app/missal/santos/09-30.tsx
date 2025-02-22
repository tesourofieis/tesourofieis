import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0930() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Jerónimo, Presb. C. e Doutor, a 30 de Setembro
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
            <Text className="latin">
              Deus, qui Ecclésiæ tuæ in exponéndis sacris Scriptúris beátum
              Hierónymum, Confessórem tuum, Doctórem máximum providére dignátus
              es: præsta, quǽsumus; ut, ejus suffragántibus méritis, quod ore
              simul et ópere dócuit, te adjuvánte, exercére valeámus. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que para explicar as Sagradas Escrituras Vos dignastes
              prover a vossa Igreja com um eminente Doutor na pessoa do vosso B.
              confessor Jerónimo, concedei-nos, Vos suplicamos. que pelos
              sufrágios dos seus méritos possamos com o auxílio da vossa graça
              praticar aquilo que ele ensinou, tanto pelas palavras, como pelas
              acções. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="latin">
              Donis cœléstibus da nobis, quǽsumus, Dómine, líbera tibi mente
              servíre: ut múnera, quæ deférimus, interveniénte beáto Hierónymo
              Confessóre tuo, et medélam nobis operéntur et glóriam. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Pela virtude destes dons, Senhor, concedei-nos a graça de Vos
              servirmos com inteira liberdade de espírito, a fim de que os dons,
              que Vos apresentamos, nos alcancem, por intercessão do vosso B.
              Confessor Jerónimo, a cura dos nossos males e a glória eterna. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="latin">
              Repleti alimónia cœlésti, quǽsumus, Dómine: ut, interveniénte
              beáto Hierónymo Confessóre tuo, misericórdiæ tuæ grátiam cónsequi
              mereámur. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Saciados com o alimento celestial, permiti, Senhor, Vos rogamos,
              que pela intercessão do vosso B. Confessor Jerónimo mereçamos
              conseguir a graça da vossa misericórdia. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
