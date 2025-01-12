import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page1025EvoraBeja() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Crispim e Crispiniano, Márts., a 25 de Outubro, Na
            Arquidiocese de Évora e Diocese de Beja
          </Text>
          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/6muitosmartires1">
              Missa Intret in
            </Link>{" "}
            , excepto:
          </View>
          <Text className="h3">Oração</Text>
          Senhor, ao vosso povo, a fim de que, em atenção aos preclaros méritos
          dos vossos B. B. Mártires Crispim e Crispiniano, ao implorar a vossa
          misericórdia, seja sempre auxiliado com sua protecção. Por nosso
          Senhor...
          <Text className="h3">Gradual</Text>
          Deus é glorioso em seus Santos: e admirável na sua majestade,
          praticando prodígios. Senhor, a vossa dextra engrandeceu-se pela sua
          força: a vossa dextra esmagou os inimigos. Aleluia, aleluia. Esta é a
          verdadeira fraternidade que Venceu os crimes do mundo. Ela seguiu
          Cristo, pelo que gozará com glória o reino celestial. Aleluia.
          <Text className="h3">Secreta</Text>
          Recebei propício, Senhor, as dádivas que oferecemos, e permiti que a
          oração dos vossos B. B. Mártires Crispim e Crispiniano as torne
          agradáveis à vossa Majestade. Por nosso Senhor...
          <Text className="h3">Postcomúnio</Text>
          Que os sacramentos recebidos, Senhor, nos purifiquem, e pela
          intercessão dos B. B. Mártires Crispim e Crispiniano nos livrem de
          todos os males. Por nosso Senhor...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
