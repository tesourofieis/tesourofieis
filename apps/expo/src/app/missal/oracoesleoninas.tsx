import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import AveMaria from "./../devocionario/oracoes/avemaria";
import SaoMiguel from "./../devocionario/oracoes/saomiguel";

export default function PageOracoesleoninas() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Orações Leoninas</Text>

          <Text className="aside">
            De joelhos diante do altar, o Sacerdote diz com os fiéis as
            seguintes preces prescritas pelo Papa Leão XIII e por Pio XI
            enriquecidas de indulgências (10 anos). Este último Papa mandou se
            rezassem pela conversão da Rússia.
          </Text>

          <Text className="h2">Ave Maria</Text>

          <Text className="aside">Ave Maria repete-se três vezes</Text>

          <AveMaria />

          <Text className="h2">Salve Regina</Text>

          <Language>
            <Text className="latin">
              Salve, Regína, mater misericórdiæ; vita, dulcédo et spes nóstra,
              salve. Ad te clamámus éxsules fílii Hevæ. Ad te suspirámus
              geméntes et flentes In hac lacrimárum valle. Eia ergo, advocáta
              nostra, illos tuos misericórdes óculos ad nos convérte. Et Iesum,
              benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O
              clemens, o pia, o dulcis Virgo María.
            </Text>
            <Text className="vernacular">
              Salvé, Rainha, mãe de misericórdia, vida, doçura, esperança nossa,
              salve! A Vós bradamos, os degredados filhos de Eva. A Vós
              suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois,
              advogada nossa, esses vossos olhos misericordiosos a nós volvei.
              E, depois deste desterro, nos mostrai Jesus, bendito fruto do
              vosso ventre. Ó clemente, ó piedosa, ó doce Virgem Maria.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ora pro nobis Sancta Dei
              Génitrix.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Rogai por nós, Santa Mãe de
              Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ut digni efficiámur
              promissiónibus Christi.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Para que sejamos dignos das
              promessas de Cristo.
            </Text>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Deus, refúgium nostrum et virtus, pópulum ad te clamántem
              propítius réspice; et intercedénte gloriósa, et immaculáta Vírgine
              Dei Genitríce María, cum beáto Joseph, ejus Sponso, ac beatis
              Apóstolis tuis Petro et Paulo, et ómnibus Sanctis, quas pro
              conversióne peccatórum, pro libertáte et exaltatióne sanctæ Matris
              Ecclésiæ, preces effúndimus, miséricors et benígnus exáudi. Per
              eúndem Christum Dóminum nostrum.
            </Text>
            <Text className="vernacular">
              Meu Deus, refúgio e fortaleza nossa, atendei propício aos clamores
              do vosso povo, e, pela intercessão da gloriosa e imaculada Virgem
              Maria, Mãe de Deus, do Bem-aventurado S. José, seu Esposo, dos
              bem-aventurados Apóstolos Pedro e Paulo e de todos os Santos, ouvi
              benigno e misericordioso as preces que fervorosamente Vos
              dirigimos pela conversão dos pecadores e pela libertação da santa
              Madre Igreja. Pelo mesmo Cristo, nosso Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amén.
            </Text>
          </Language>

          <Text className="h1">Oração a São Miguel Arcanjo</Text>

          <SaoMiguel />

          <Text className="h2">Sagrado Coração de Jesus</Text>

          <Text className="aside">
            S. Pio X pediu que se juntasse três vezes a seguinte jaculatória:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Cor Jesu sacratíssimum:
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Coração sacratíssimo de
              Jesus:
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Miserére nobis.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Tende misericórdia de nós.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
