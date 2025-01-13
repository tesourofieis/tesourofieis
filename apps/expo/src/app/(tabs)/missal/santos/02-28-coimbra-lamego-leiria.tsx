import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0228CoimbraLamegoLeiria() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Trasladação de S. Agostinho, Bispo, Confessor e Doutor, a 27 de
            Fevereiro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/santos/08-28">
              Missa na festa
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h2">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Magníficet te, Dómine, sancti Confessóris tui atque Pontíficis
              Augustíni veneránda Tranlátio: qua illi honórem, et nobis opem,
              ineffábili providéntia contulísti. Per Dominum...
            </Text>
            <Text className="text-base vernacular">
              Senhor, que a veneranda Trasladação de Santo Agostinho, Vosso
              Confessor e Pontífice, nos engrandeça, a qual, por Vossa inefável
              providência, deu a ele glória e a nós socorro. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h2">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Omnípotens sempitérne Deus, múnera tuæ majestáti obláta, per
              intercessiónem beáti Augustíni Confessóris tui atque Pontíficis,
              ad perpétuam nobis fac proveníre salútem. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Deus omnipotente e sempiterno, fazei que as dádivas oferecidas à
              Vossa majestade por intercessão do B. Agostinho, Vosso Confessor e
              Pontífice, nos façam chegar à salvação eterna. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h2">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sacraménta salútis nostræ suscipiéntes, concéde, quǽsumus,
              omnípotens Deus: ut beáti Augustíni Confessóris tui atque
              Pontíficis nos ubíque orátio ádjuvet; in cujus Translatióne hæc
              tuæ obtúlimus majestáti. Per Dóminum nostram...
            </Text>
            <Text className="text-base vernacular">
              Depois de havermos recebido os sacramentos da nossa salvação,
              concedei-nos, omnipotente Deus, Vos imploramos, que em toda a
              parte nos socorra a oração do B. Agostinho, Vosso Confessor e
              Pontífice, em cuja Trasladação oferecemos estes dons à Vossa
              majestade. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
