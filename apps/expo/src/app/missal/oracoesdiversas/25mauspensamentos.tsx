import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page25Mauspensamentos() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">25.ª Para afastar os maus pensamentos</Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Omnípotens et mitíssime Deus, réspice propítius ad preces nostras:
              et líbera corda nostra de malárum tentatiónibus cogitatiónum; ut
              Sancti Spíritus dignum fíeri habitáculum mereámur. Per Dóminum...
              in unitáte ejúsdem Spíritus Sancti.
            </Text>
            <Text className="vernacular">
              Ó Deus omnipotente e pacífico, ouvi benigno as nossas preces e
              livrai os nossos corações da tentação dos maus pensamentos, a fim
              de que mereçamos tornar-nos em digna morada do Espírito Santo. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Has tibi, Dómine, offérimus oblatiónes pro salúte nostra: quaténus
              ánimas nostras ab immúndis cogitatiónibus purges, illæsásque
              custódias, et Sancti Spíritus grátia illumináre dignéris. Per
              Dóminum... in unitáte ejúsdem Spíritus Sancti.
            </Text>
            <Text className="vernacular">
              Senhor, Vos oferecemos estas oblatas em favor da nossa salvação, a
              fim de que Vos digneis expurgar os pensamentos impuros das nossas
              almas, conservá-las ilesas e iluminá-las com a graça do Espírito
              Santo. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Deus, qui illúminas omnem hóminem veniéntem in hunc mundum:
              illúmina, quǽsumus, corda nostra grátiæ tuæ splendóre; ut digna ac
              plácita majestáti tuæ cogitáre semper, et te sincére dilígere
              valeámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deusm que iluminais todos os homens que vêm a este mundo,
              ilustrai, Vos suplicamos, os nossos corações com o resplendor da
              vossa graça, a fim de que tenhamos sempre na mente pensamentos
              dignos e agradáveis à vossa majestade e consagremos sinceramente,
              e só a Vós, todo nosso amor. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
