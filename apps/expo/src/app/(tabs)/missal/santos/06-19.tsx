import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0619() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Juliana de Falconéri, Virgem, a 19 de Junho
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/20virgemnaomartir1">
              Missa Dilexísti justitiam
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui beátam Juliánam Vírginem tuam extrémo morbo laborántem,
              pretióso Fílii tui Córpore mirabíliter recreáre dignátus es:
              concéde, quǽsumus; ut, ejus intercedéntibus méritis, nos quoque
              eódem in mortis agóne refécti ac roboráti, ad cœléstem pátriam
              perducámur. Per eúndem Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que com o preciosíssimo Corpo de vosso Filho Vos dignastes
              sustentar miraculosamente a B. Juliana, vossa Virgem, quando ela
              sofreu a última doença, concedei-nos, pelos seus méritos e
              intercessão, Vos suplicamos, que também na nossa agonia mortal
              sejamos alimentados e fortificados com este mesmo Corpo e
              conduzidos à pátria celestial. Pelo mesmo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">
            Oração Comemoração S. S. Gervásio e Protásio
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Deus, qui nos ánnua sanctórum Martyrum tuórum Gervásii et Protásii
              sollemnitáte lætíficas: concéde propítius; ut, quorum gaudémus
              méritis, accendámur exémplis. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, que nos alegrais com a solenidade anual dos vossos Santos
              Mártires Gervásio e Protásio, concedei-nos propício que sejamos
              inflamados pelos exemplos daqueles cujos méritos nos enchem de
              alegria celestial. Pelo nosso Senhor...
            </Text>
          </View>

          <Text className="h3">
            Secreta Comemoração S. S. Gervásio e Protásio
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Oblátis, quǽsumus, Dómine, placáre munéribus: et, intercedéntibus
              sanctis Martýribus tuis, a cunctis nos defénde perículis. Per
              Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Deixai-Vos aplacar com os dons que Vos oferecemos, Senhor, e por
              intercessão dos vossos Santos Mártires defendei-nos de todos os
              perigos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">
            Postcomúnio Comemoração S. S. Gervásio e Protásio
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hæc nos commúnio, Dómine, purget a crímine: et, intercedéntibus
              sanctis Martýribus tuis Gervásio et Protásio, cœléstis remédii
              fáciat esse consórtes. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Que esta comunhão nos purifique dos nossos crimes, Senhor, e que
              por intercessão dos vossos Santos Mártires Gervásio e Protásio nos
              faça participantes do remédio celestial. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
