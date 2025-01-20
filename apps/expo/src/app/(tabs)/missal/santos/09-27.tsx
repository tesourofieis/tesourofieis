import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0927() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. S. Cosme e Damião, Mártires, a 27 de Setembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/7muitosmartires2">
              Missa Sapiéntiam sanctórum
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Præsta, quǽsumus, omnípotens Deus: ut, qui sanctórum Mártyrum
              tuórum Cosmæ et Damiáni natalítia cólimus, a cunctis malis
              imminéntibus, eórum intercessiónibus, liberémur. Per Dóminum
              nostrum...
            </Text>
            <Text className="text-base vernacular">
              Concedei-nos, ó Deus omnipotente, Vos rogamos, que, celebrando o
              nascimento no céu dos vossos B. B. Mártires Cosme e Damião,
              sejamos livres, graças à sua intercessão, de todos os males que
              nos ameaçam. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 33, 18-19</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Clamavérunt justi, et Dóminus exaudívit eos: et ex ómnibus
              tribulatiónibus eórum liberávit eos. ℣. Juxta est Dóminus his, qui
              tribuláto sunt corde: et húmiles spíritu salvabit.
            </Text>
            <Text className="text-base vernacular">
              Clamaram os justos; então o Senhor ouviu-os e livrou-os de todas
              suas aflições. ℣. O Senhor está próximo daqueles que têm o coração
              atribulado; e salvará os que têm o espírito humilhado.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣. Hæc est vera fratérnitas, quæ vicit mundi
              crímina: Christum secuta est, ínclita tenens regna cœléstia.
              Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣. Esta é a verdadeira fraternidade que venceu
              os crimes do mundo: Ela seguiu Cristo, possuindo gloriosamente o
              reino celestial. Aleluia.
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 5, 12-13</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Gloriabúntur in te omnes, qui díligunt nomen tuum: quóniam tu,
              Dómine, benedíces justo: Dómine, ut scuto bonæ voluntátis tuæ
              coronásti nos.
            </Text>
            <Text className="text-base vernacular">
              Em Vós se alegrarão, Senhor, os que amam o vosso nome; pois,
              Senhor, abençoais o justo. Rodeastes-nos, Senhor, com vosso amor,
              como se fora um escudo.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sanctórum tuórum nobis, Dómine, pia non desit orátio: quæ et
              múnera nostra concíliet, et tuam nobis indulgéntiam semper
              obtíneat. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que a piedosa oração dos vossos Santos, Senhor, nos não falte; e
              que Vos torne recomendáveis as nossas ofertas e nos obtenha sempre
              a vossa misericórdia. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Sl. 78, 2 & 11</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Posuérunt mortália servórum tuórum, Dómine, escas volatilíbus
              cœli, carnes Sanctórum tuórum béstiis terræ: secúndum magnitúdinem
              bráchii tui pósside fílios morte punitórum.
            </Text>
            <Text className="text-base vernacular">
              Deram os cadáveres dos vossos servos, Senhor, em alimento às aves
              do céu, e as carnes dos vossos Santos às feras da terra. Com o
              poder do vosso braço, salvai os filhos daqueles que foram
              condenados à morte.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Prótegat, quǽsumus, Dómine, pópulum tuum et participátio cœléstis
              indúlta convívii, et deprecátio colláta Sanctórum. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Que o vosso povo, Senhor, Vos suplicamos, seja protegido pela
              participação, do celestial banquete, que lhe proporcionastes, e
              pela intercessão, que lhe concedestes, dos vossos Santos. Por
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
