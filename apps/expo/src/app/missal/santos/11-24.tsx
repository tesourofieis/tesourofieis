import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function Page1124() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. João da Cruz, Conf. e Doutor, a 24 de Novembro
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui sanctum Joánnem Confessórem tuum atque Doctorem perféctæ
              sui abnegatiónis et Crucis amatórem exímium effecísti: concéde;
              ut, ejus imitatióni júgiter inhæréntes, glóriam assequámur
              ætérnam. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que tornastes notável o vosso Santo Confessor e Doutor
              João pela abnegação perfeita de si próprio e pelo amor à Cruz,
              fazei que, diligenciando imitá-lo, alcancemos a glória eterna. Por
              nosso Senhor...
            </Text>
          </Language>

          <Text className="h2">Comemoração de S. Crisógono</Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte
              nostra reos nos esse cognóscimus, beáti Chrysógoni Mártyris tui
              intercessióne liberémur. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ouvi as nossas súplicas, Senhor, a fim de que, reconhecendo-nos
              réus pelas nossas iniquidades, sejamos absolvidos pela intercessão
              do vosso B. Mártir Crisógono. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Oblatis, quǽsumus, Dómine, placáre munéribus: et, intercedénte
              beáto Chrysógono Mártyre tuo, a cunctis nos defénde perículis. Per
              Dóminum...
            </Text>
            <Text className="vernacular">
              Deixai-Vos aplacar, Senhor, com a oferta destes dons, Vos
              suplicamos; e, pela intercessão do B. Crisógono, vosso Mártir,
              preservai-nos de todos os perigos. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Tui, Dómine, perceptióne sacraménti, et a nostris mundémur
              occúltis, et ab hóstium liberémur insídiis. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que a recepção do vosso sacramento, Senhor, nos purifique das
              nossas faltas ocultas e nos livre das insídias dos nossos
              inimigos. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
