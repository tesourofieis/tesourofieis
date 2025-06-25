import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page1Sufragiosantos() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">1.ª Para implorar os Sufrágios dos Santos</Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Concéde, quǽsumus, omnípotens Deus: ut intercéssio sanctæ Dei
              Genetrícis Maríæ, sanctorúmque ómnium Apostolórum, Mártyrum,
              Confessórum, atque Vírginum, et ómnium electórum tuórum, nos
              ubíque lætíficet; ut, dum eórum mérita recólimus, patrocínia
              sentiámus. Per eúndem Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Concedei-nos, Vos suplicamos, ó Deus omnipotente, que a
              intercessão de Maria, santa Mãe de Deus, de todos os Santos
              Apóstolos, Mártires, Confessores e Virgens e de todos vossos
              escolhidos nos alegre sempre e em toda a parte, a fim de que,
              sempre que recordemos os seus merecimentos, gozemos a sua
              protecção. Pelo mesmo nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Oblátis, Dómine, placáre munéribus: et, intercedénte beáta María
              semper Vírgine cum ómnibus Sanctis tuis, a cunctis nos defénde
              perículis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Aplacai-Vos, Senhor, com os dons que Vos oferecemos; e, por
              intercessão da B. Maria, sempre Virgem, e de todos os Santos,
              defendei-nos de todos os perigos. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Súmpsimus, Dómine, beátæ Maríæ semper Vírginis et ómnium Sanctórum
              tuórum memóriam recoléntes, sacraménta cœléstia: præsta, quǽsumus;
              ut, quod temporáliter gérimus, ætérnis gáudiis consequámur. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Recebemos, Senhor, os dons celestiais em memória da B. Maria,
              sempre Virgem, e de todos vossos Santos; e, Vos suplicamos,
              concedei-nos que esta união, começada na terra, possa ser coroada
              com as alegrias eternas. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
