import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function Page1117() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Gregório Taumaturgo, B. e C., a 17 de Novembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/11confessorespontifices1"
            >
              Missa Státuit ei
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mc. 11, 22-24</Text>

          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii
              secúndum Marcum.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
              segundo S. Marcos.
            </Text>
            <Text className="latin">
              In illo témpore: Respóndens Jesus discípulis suis, ait illis:
              Habéte fidem Dei. Amen, dico vobis, quia, quicúmque díxerit huic
              monti: Tóllere et míttere in mare, et non hæsitáverit in corde
              suo, sed credíderit, quia, quodcúmque díxerit, fiat, fiet ei.
              Proptérea dico vobis: Omnia quæcúmque orántes pétitis, crédite
              quia accipiétis, et evénient vobis.
            </Text>
            <Text className="vernacular">
              Naquele tempo, Jesus disse aos seus discípulos: «Tende fé em Deus.
              Em verdade vos digo que todo aquele que disser a esta montanha
              «tira-te e lança-te no mar», e disser isto sem hesitar no seu
              coração e até acreditando que tudo o que disse acontecerá, fique
              certo de que o verá cumprir-se. Eis porque vos digo: Tudo quanto
              pedirdes na oração acreditai que o alcançareis e vereis».
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
