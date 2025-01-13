import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page21Lagrimas() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">21.ª Pedindo o dom das lágrimas</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Omnípotens et mitíssime Deus, qui sitiénti pópulo fontem vivéntis
              aquæ de petra produxísti: educ de cordis nostri durítia lácrimas
              compunctiónis; ut peccáta nostra plángere valeámus, remissionémque
              eórum, te miseránte, mereámur accípere. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente e clementíssimo, que fizestes brotar da rocha
              uma fonte de água viva para saciar o vosso povo, arrancai lágrimas
              de compunção do nosso coração endurecido, a fim de que possamos
              chorar os nossos pecados, e, pela vossa misericórdia, alcançar a
              sua remissão. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hanc oblatiónem, quǽsumus, Dómine Deus, quam tuæ majestáti pro
              peccátis nostris offérimus, propítius réspice: et produc de óculis
              nostris lacrimárum flúmina, quibus débita flammárum incéndia
              valeámus exstínguere. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, nosso Deus, dignai-Vos aceitar misericordiosamente esta
              oblação, que oferecemos à vossa majestade em expiação dos nossos
              pecados, e fazei brotar dos nossos olhos torrentes de lágrimas
              capazes de extinguirem o ardor das chamas, que merecemos pelos
              nossos pecados...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Grátiam Spíritus Sancti, Dómine Deus, cordibus nostris cleménter
              infúnde: quæ nos gemítibus lacrimárum effíciat máculas nostrórum
              dilúere peccatórum; atque optátæ nobis, te largiénte, indulgéntiæ
              præstet efféctum. Per Dóminum... in unitáte ejusdem.
            </Text>
            <Text className="text-base vernacular">
              Senhor Deus, infundi clemente a graça do Espírito Santo nos nossos
              corações; e que esta graça, penetrando no nosso íntimo, se
              desentranhe em lágrimas e gemidos capazes de lavar as máculas dos
              nossos pecados, e assim possamos obter da vossa magnanimidade a
              indulgência tão ardentemente desejada. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
