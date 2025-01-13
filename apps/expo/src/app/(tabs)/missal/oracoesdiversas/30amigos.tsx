import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page30Amigos() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">30.ª Pelos amigos dedicados</Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui cantátis dona per grátiam Sancti Spíritus tuórum
              fidélium córdibus infudísti: da fámulis et famulábus tuis, pro
              quibus tuam deprecámur cleméntiam, salútem mentis et córporis; ut
              te tota virtúte díligant et, quæ tibi plácita sunt, tota
              dilectióne perfíciant. Per Dóminum... in unitáte ejúsdem Spíritus
              Sancti.
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que pela graça do Espírito Santo infundistes nos corações
              dos vossos fiéis os dons da caridade, dignai-Vos conceder a
              salvação da alma e do corpo aos vossos servos e servas, para quem
              invocamos a vossa clemência, a fim de que eles Vos amem com todas
              as potências de sua alma e pratiquem com todo o amor o que Vos é
              agradável. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Miserére, quǽsumus, Dómine, fámulis et famulábus tuis, pro quibus
              hoc sacrifícium laudis tuæ offérimus majestáti: ut, per hæc
              sancta, supérnæ benedictiónis grátiam obtíneant, et glóriam ætérnæ
              beatitúdinis acquírant. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, Vos pedimos, tende misericórdia dos vossos servos e
              servas, por quem oferecemos este sacrifício de louvor em honra da
              vossa majestade, a fim de que por estes mystérios sacratíssimos
              alcancem a graça de uma especial bênção e adquiram a glória da
              bem-aventurança eterna. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Divína libántes mystéria, quǽsumus, Dómine: ut hæc salutária
              sacraménta illis profíciant ad prosperitátem et pacem; pro quorum
              quarúmque dilectióne hæc tuæ obtúlimus majestáti. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Havendo nós comparticipado dos divinos mystérios, Vos pedimos,
              Senhor, que Vos digneis aplicar a virtude destes mystérios de
              salvação em favor da prosperidade e da paz daqueles e daquelas por
              amor dos quais já os oferecemos à vossa majestade. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
