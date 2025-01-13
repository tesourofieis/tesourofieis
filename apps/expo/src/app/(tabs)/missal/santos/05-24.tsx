import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";

export default function Page0524() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            B. Virgem Maria, Auxílio dos Cristãos, a 24 de Maio
          </Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/26festasmaria1">
              Missa Comum das Festas da B. V. M.,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Omnípotens et miséricors Deus, qui ad defensiónem pópuli
              christiáni in beatíssima Vírgine María perpétuum auxílium
              mirabíliter constituísti: concéde propítius; ut, tali præsídio
              muníti certántes in vita, victóriam de hoste malígno cónsequi
              valeámus in morte. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Omnipotente e misericordioso Deus, que para defesa do povo cristão
              maravilhosamente instituístes a B. Virgem Maria como sua
              auxiliadora perpétua, concedei-nos propício que, depois de
              havermos sido munidos nos combates da vida com uma tão poderosa
              protecção, mereçamos também alcançar à hora da morte a vitória
              contra o inimigo maligno. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Pro religiónis christánæ triúmpho hóstias placatiónis tibi,
              Dómine, immolámus: quæ ut nobis profíciant, opem auxiliátrix Virgo
              præstet; per quam talis perfécta est victória. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Vos oferecemos vítimas de propiciação pelo triunfo da religião
              cristã, e que elas, Senhor, pela intercessão da Virgem
              Auxiliadora, pela qual foi assegurada a vitória perfeita, revertam
              em nosso proveito. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Adésto, Dómine, pópulis, qui participatióne Córporis et Sánguinis
              tui reficiúntur: ut, sanctíssima tua Genitríce auxiliánte, ab omni
              malo et perículo liberéntur, et in omni ópere bono custodiántur:
              Qui vivis et regnas...
            </Text>
            <Text className="text-base vernacular">
              Acolhei benigno, Senhor, os povos que se alimentam com vosso Corpo
              e Sangue, a fim de que com o auxílio da vossa Santíssima Mãe sejam
              livres de todo o mal e de todo o perigo, e perseverem na prática
              de todas as boas obras. Ó Vós, que viveis e reinais...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
