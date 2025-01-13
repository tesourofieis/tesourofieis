import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1Sufragiosantos() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">1.ª Para implorar os Sufrágios dos Santos</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Concéde, quǽsumus, omnípotens Deus: ut intercéssio sanctæ Dei
              Genetrícis Maríæ, sanctorúmque ómnium Apostolórum, Mártyrum,
              Confessórum, atque Vírginum, et ómnium electórum tuórum, nos
              ubíque lætíficet; ut, dum eórum mérita recólimus, patrocínia
              sentiámus. Per eúndem Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Concedei-nos, Vos suplicamos, ó Deus omnipotente, que a
              intercessão de Maria, santa Mãe de Deus, de todos os Santos
              Apóstolos, Mártires, Confessores e Virgens e de todos vossos
              escolhidos nos alegre sempre e em toda a parte, a fim de que,
              sempre que recordemos os seus merecimentos, gozemos a sua
              protecção. Pelo mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Oblátis, Dómine, placáre munéribus: et, intercedénte beáta María
              semper Vírgine cum ómnibus Sanctis tuis, a cunctis nos defénde
              perículis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Aplacai-Vos, Senhor, com os dons que Vos oferecemos; e, por
              intercessão da B. Maria, sempre Virgem, e de todos os Santos,
              defendei-nos de todos os perigos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Súmpsimus, Dómine, beátæ Maríæ semper Vírginis et ómnium Sanctórum
              tuórum memóriam recoléntes, sacraménta cœléstia: præsta, quǽsumus;
              ut, quod temporáliter gérimus, ætérnis gáudiis consequámur. Per
              Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Recebemos, Senhor, os dons celestiais em memória da B. Maria,
              sempre Virgem, e de todos vossos Santos; e, Vos suplicamos,
              concedei-nos que esta união, começada na terra, possa ser coroada
              com as alegrias eternas. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
