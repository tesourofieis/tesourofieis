import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageConclusoes() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Conclusão das Orações, Secretas e Postcomúnios
          </Text>

          <Text className="aside">
            Para maior facilidade, damos a seguir as conclusões por extenso das
            Orações, Secretas e Postcomúnios das Missas, as quais,
            ordinariamente, estão indicadas no Missal, de modo abreviado.
          </Text>

          <Text className="h1">
            1.ª - Quando se dirige ao Pai, concluir-se-á:
          </Text>

          <View className="side-by-side">
            <Text className="latin">
              Per Dóminum nostrum Jesum Christum Fílium tuum, qui tecum vivit et
              regnat in unitáte Spíritus Sancti, Deus, per ómnia Sæcula
              sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              Por nosso Senhor Jesus, vosso Filho, que convosco vive e reina em
              unidade do Espírito Santo, Deus, por todos os séculos dos séculos.
              Amen.
            </Text>
          </View>

          <Text className="h1">
            2.ª - Quando se menciona o Filho no princípio:
          </Text>

          <View className="side-by-side">
            <Text className="latin">
              Per eúmdem Dóminum nostrum Jesum Christum Fílium tuum, qui tecum
              vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sæcula
              sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              Pelo mesmo nosso Senhor Jesus Cristo, vosso Filho, que convosco
              vive e reina em unidade do Espírito Santo, Deus, por todos os
              séculos dos séculos. Amen.
            </Text>
          </View>

          <Text className="h1">
            3.ª - Quando se menciona o Filho no fim, concluir-se-á:
          </Text>

          <View className="side-by-side">
            <Text className="latin">
              Qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per
              ómnia sæcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              Que convosco vive e reina em unidade do Espírito Santo, Deus, por
              todos os séculos dos séculos. Amen.
            </Text>
          </View>

          <Text className="h1">
            4.ª - Quando se dirige ao Filho concluir-se-á:
          </Text>

          <View className="side-by-side">
            <Text className="latin">
              Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti,
              Deus, per ómnia sæcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              Ó Vós, que viveis e reinais com Deus Pai em unidade do Espírito
              Santo, Deus, por todos os séculos dos séculos. Amen.
            </Text>
          </View>

          <Text className="h1">
            5.ª - Quando se menciona o Espírito Santo, concluir-se-á:
          </Text>

          <View className="side-by-side">
            <Text className="latin">
              ... in unitáte ejúsdem Spíritus Sancti, Deus, per ómnia sæcula
              sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              ... em unidade do mesmo Espírito Santo, Deus, por todos os séculos
              dos séculos. Amen.
            </Text>
          </View>

          <Text className="aside">
            Quando na mesma Missa se recitam diversas Orações, Secretas e
            Postcomúnios, somente a primeira e a última terão a conclusão como
            se indica atrás. Terminadas as conclusões, os fiéis respondem: Amen.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
