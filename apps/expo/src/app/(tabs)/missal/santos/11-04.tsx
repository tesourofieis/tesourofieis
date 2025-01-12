import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1104() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Carlos Borromeu, B. e Conf., a 4 de Novembro
          </Text>

          <View className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/11confessorespontifices1"
            >
              Missa Státuit ei
            </Link>{" "}
            , excepto:
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Ecclésiam tuam, Dómine, sancti Caróli Confessóris tui atque
              Pontíficis contínua protectióne custódi: ut, sicut illum
              pastorális sollicitúdo gloriósum réddidit; ita nos ejus
              intercéssio in tuo semper fáciat amóre fervéntes. Per Dóminum...
            </Text>
            <Text className="text-base">
              Pela protecção do vosso Santo Confessor e Pontífice Carlos,
              dignai-Vos guardar a vossa Igreja, Senhor, a fim de que, assim
              como a sua solicitude pastoral o tornou glorioso, assim também a
              sua intercessão nos obtenha perpétuo fervor no vosso amor. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h2">Comemoração dos Santos Mártires</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Præsta, quǽsumus, omnípotens Deus: ut, qui sanctórum Mártyrum
              tuórum Vitális et Agrícolæ sollémnia cólimus, eórum apud te
              intercessiónibus adjuvémur. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus omnipotente, Vos rogamos, permiti que, celebrando a festa
              dos vossos Santos Mártires Vital e Agrícola, sejamos auxiliados
              pela sua intercessão junto de Vós. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Oblatis, quǽsumus, Dómine, placáre munéribus: et, intercedéntibus
              sanctis Martýribus tuis Vitále et Agrícola, a cunctis nos defénde
              perículis. Per Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Deixai-Vos aplacar com os dons que Vos oferecemos, Senhor, e por
              intercessão dos vossos Santos Mártires Vital e Agrícola
              preservai-nos de todos os perigos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Hæc nos commúnio, Dómine, purget a crímine: et, intercedéntibus
              sanctis Martýribus tuis Vitále et Agrícola, cœléstis remédii
              fáciat esse consórtes. Per Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Que esta comunhão nos purifique dos nossos crimes, Senhor, e que
              por intercessão dos vossos Santos Mártires Vital e Agrícola nos
              faça participantes do remédio celestial. Por nosso S...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
