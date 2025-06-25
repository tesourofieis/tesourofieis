import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page1122() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            Santa Cecília, Virgem e Mártir, a 22 de Novembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/17virgensmartires1">
              Missa Loquébar
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui nos ánnua beátæ Caeciliae Vírginis et Mártyris tuæ
              sollemnitáte lætíficas: da, ut, quam venerámur offício, étiam piæ
              conversatiónis sequámur exémplo. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que nos alegrais com a solenidade anual da B. Cecília,
              vossa Virgem e Mártir, dignai-Vos permitir que, honrando-a com
              estes cultos, imitemos também os exemplos da sua piedosa vida. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/18virgensmartires2#epístola"
            title="Virgens Mártires - Missa Me exspectavérunt"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 44, 11 & 12</Text>

          <Language>
            <Text className="latin">
              Audi, fília, et vide, et inclína aurem tuam: quia concupívit Rex
              spéciem tuam.<Text className="versicle"> ℣. </Text>
              <Text className="latin">ibid., 5</Text> Spécie tua et
              pulchritúdine tua inténde, próspere procéde et regna.
            </Text>
            <Text className="vernacular">
              Escutai, ó minha filha, vede e inclinai o vosso ouvido; o Rei está
              cheio de amor por vós, por causa da vossa beleza!
              <Text className="versicle"> ℣. </Text>
              <Text className="vernacular">ibid., 5</Text> Com a vossa glória e
              com vossa formosura caminhai, triunfai e reinai.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Matth. 25, 4 & 6</Text> Quinque prudéntes
              vírgines accepérunt óleum in vasis suis cum lampádibus: média
              autem nocte clamor factus est: Ecce, sponsus venit: exíte óbviam
              Christo Dómino. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Mt. 25, 4 & 6</Text> As cinco virgens
              prudentes tomaram óleo em seus vasos para suas lâmpadas. No meio
              da noite uma voz soou: eis que chega o esposo: ide ao encontro de
              Cristo, Senhor. Aleluia.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Hæc hóstia, Dómine, placatiónis et laudis, quǽsumus: ut,
              intercedénte beáta Cæcília Vírgine et Mártyre tua, nos
              propitiatióne tua dignos semper effíciat. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que esta hóstia de propiciação e de louvor, Senhor, Vos rogamos,
              nos torne sempre dignos da vossa misericórdia, pela intercessão da
              B. Cecília, vossa Virgem e Mártir. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus,
              semper interventióne nos réfove, cujus sollémnia celebrámus. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Saciastes, Senhor, a vossa família com vossos sacratíssimos dons;
              e dignai-Vos favorecer-nos sempre, Vos imploramos, pela
              intercessão daquela cuja festa celebramos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
