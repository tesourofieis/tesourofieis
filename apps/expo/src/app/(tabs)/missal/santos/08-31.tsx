import { Link } from "expo-router";

import { View } from "react-native";

import React from "react";

export default function Page0831() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Raimundo Nonato, Conf., a 31 de Agosto</Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui in liberándis fidélibus tuis ab impiórum captivitáte
              beátum Raymúndum Confessórem tuum mirábilem effecísti: ejus nobis
              intercessióne concéde; ut, a peccatórum vínculis absolúti, quæ
              tibi sunt plácita, líberis méntibus exsequámur. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que ao B. Raimundo, vosso Confessor, tornastes admirável
              na dedicação com que libertava os vossos fiéis do cativeiro dos
              ímpios, concedei-nos pela sua intercessão que, livres dos vínculos
              dos pecados, cumpramos com liberdade de espírito o que Vos é
              agradável. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
