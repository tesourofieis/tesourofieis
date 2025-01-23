import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0121() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Inês, Virgem e Márt., a 21 de Janeiro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/17virgensmartires1">
              Missa Loquébar
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 118, 95-96</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Me exspectavérunt peccatores, ut pérderent me: testimónia tua,
              Dómine, intelléxi: omnis consummatiónis vidi finem: latum mandátum
              tuum nimis. <Text className="text-base latin">Ps. ibid., 1</Text>{" "}
              Beáti immaculáti in via: qui ámbulant in lege Dómini. ℣. Gloria
              Patri...
            </Text>
            <Text className="text-base vernacular">
              Esperaram-me os pecadores para me perder; mas, Senhor, tinha
              meditado nos vossos testemunhos. Encontrei limites em tudo quanto
              existe: só o vosso poder é infinito.{" "}
              <Text className="text-base vernacular">Sl. ibid., 1</Text>{" "}
              Bem-aventurados os que são imaculados em seus caminhos e que
              cumprem a Lei do Senhor. ℣. Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Omnipotens sempitérne Deus, qui infírma mundi éligis, ut fórtia
              quæque confúndas: concéde propítius; ut, qui beátæ Agnétis
              Vírginis et Mártyris tuæ sollémnia cólimus, ejus apud te
              patrocínia sentiámus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Ó Deus omnipotente e eterno, que escolhestes os fracos para
              confundir os fortes, concedei-nos benigno que, celebrando a
              solenidade da B. Inês, vossa Virgem e Mártir, gozemos a sua
              protecção junto do vosso trono. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 44, 3</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Diffúsa est grátia in lábiis tuis: proptérea benedíxit te Deus in
              ætérnum. ℣. <Text className="text-base latin">ibid., 5</Text>{" "}
              Propter veritátem et mansuetúdinem et justítiam: et dedúcet te
              mirabíliter déxtera tua.
            </Text>
            <Text className="text-base vernacular">
              A graça espalhou-se nos vossos lábios; por isso Deus vos abençoou
              para a eternidade. ℣.{" "}
              <Text className="text-base vernacular">ibid., 5</Text> Por amor da
              verdade, da mansidão e da justiça a vossa mão direita vos levará a
              praticar maravilhas.
            </Text>
            <Text className="text-base latin">
              Allelúja, allelúja. ℣.{" "}
              <Text className="text-base latin">Matth. 25, 4 & 6</Text> Quinque
              prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus:
              média autem nocte clamor factus est: Ecce, sponsus venit: exíte
              óbviam Christo Dómino. Allelúja.
            </Text>
            <Text className="text-base vernacular">
              Aleluia, aleluia. ℣.{" "}
              <Text className="text-base vernacular">Mt. 25, 4 & 6</Text> As
              cinco virgens prudentes tomaram azeite em seus vasos para suas
              lâmpadas. À meia-noite ouviu-se um clamor dizer: «Eis que chega o
              esposo: ide ao encontro de Cristo Senhor». Aleluia.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Hóstias, Dómine, quas tibi offérimus, propítius súscipe: et,
              intercedénte beáta Agnéte Vírgine et Mártyre tua, víncula
              peccatórum nostrórum absólve. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Recebei benigno, Senhor, as hóstias que Vos oferecemos; e, por
              intercessão da B. Inês, vossa Virgem e Mártir, dignai-Vos quebrar
              as cadeias dos nossos pecados. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 25, 4 & 6</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quinque prudéntes vírgines accepérunt óleum in vasis suis cum
              lampádibus: média autem nocte clamor factus est: Ecce, sponsus
              venit: exíte óbviam Christo Dómino.
            </Text>
            <Text className="text-base vernacular">
              As cinco virgens prudentes tomaram azeite em seus vasos para suas
              lâmpadas. À meia-noite ouviu-se um clamor dizer: «Eis o esposo que
              chega: ide ao encontro de Cristo Senhor».
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Refécti cibo potúque cœlésti. Deus noster, te súpplices exorámus:
              ut, in cujus hæc commemoratióne percépimus, ejus muniámur et
              précibus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Confortados já com o alimento e a bebida celestiais, ó Deus, Vos
              suplicamos, fazei que aquela em cuja memória os recebemos nos
              proteja com suas preces. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
