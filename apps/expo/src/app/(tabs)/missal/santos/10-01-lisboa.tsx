import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1001Lisboa() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Veríssimo e Outros, Mártires, a 1 de Outubro, No Patriarcado de
            Lisboa
          </Text>
          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/6muitosmartires1">
              Missa Intret in
            </Link>{" "}
            , excepto:
          </View>
          <Text className="h3">Oração</Text>Ó Deus, que permitistes
          assistíssemos a esta festa dos vossos Santos Mártires Veríssimo,
          Máximo e Júlia, concedei-nos, Vos suplicamos, que, celebrando o seu
          nascimento no céu, nos enchamos de zelo com seus exemplos. Por nosso
          Senhor...
          <Text className="h3">Gradual</Text>
          Deus é glorioso em seus Santos, e admirável na sua majestade,
          praticando prodígios. Senhor, a vossa dextra engrandeceu-se pela sua
          força: a vossa dextra esmagou os inimigos. Aleluia, aleluia. Esta é a
          verdadeira fraternidade» que venceu os crimes do mundo. Ela seguiu
          Cristo: Pelo que goza a glória do reino celestial. Aleluia.
          <Text className="h3">Secreta e Postcomúnio</Text>
          <LinkCard
            href="/missal/comum/7muitosmartires2#secreta"
            title="Muitos Mártires - Missa Sapiéntiam sanctórum"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
