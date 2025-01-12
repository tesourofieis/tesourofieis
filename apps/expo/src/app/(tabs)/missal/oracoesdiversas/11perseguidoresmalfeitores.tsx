import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page11Perseguidoresmalfeitores() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            11.ª Contra os nossos perseguidores e malfeitores
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Hóstium nostrórum, quǽsumus, Dómine, elíde supérbiam: et eórum
              contumáciam déxteræ tuæ virtúte prostérne. Per Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Esmagai, Senhor, o orgulho dos nossos inimigos, e, Vos suplicamos,
              com o poder da vossa dextra, reprimi a sua arrogância. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Hujus, Dómine, virtúte mystérii, et a própriis mundémur occúltis,
              et ab inimicórum liberémur insídiis. Per Dóminum...
            </Text>
            <Text className="text-base">
              Senhor, que pela virtude deste mystério sejamos purificados das
              nossas manchas ocultas e livres das ciladas dos nossos inimigos.
              Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Protéctor noster, áspice. Deus, et ab inimicórum nos defénde
              perículis: ut, omni perturbatióne submóta, líberis tibi méntibus
              serviámus. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que sois o nosso protector, dignai-Vos lançar sobre nós os
              vossos olhares, livrando-nos dos perigos com que nos afligem os
              nossos inimigos, a fim de que, sendo afastados todos os motivos de
              perturbação, nos empreguemos no vosso serviço, livres de todos os
              cuidados. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
