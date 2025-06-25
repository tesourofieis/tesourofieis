import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";

export default function PageBencaos() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Bênçãos</Text>
          <Text className="h3">Ao Levantar</Text>
          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Benedicamus Domino.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Bendigamos o Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>Deo Gratias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Demos graças a Deus.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Laudetur Jesus Christus.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Louvado seja Jesus Cristo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>In æternum.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Sempre seja louvado.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
          </Language>
          <Text className="h3">Antes da Refeição</Text>
          <Language>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> In nómine Patris, et Fílii, et
              Spíritus Sancti.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Em nome do Pai e do Filho e do
              Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Bénedic, Dómine, nos et hæc
              tua dona quæ de tua largitáte sumus sumptúri. Per Christum Dóminum
              nostrum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Abençoai-nos, Senhor, e a
              estes alimentos que da vossa generosidade recebemos. Por Cristo
              Senhor Nosso.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
          </Language>
          <Text className="h3">Depois da Refeição</Text>
          <Language>
            <Text className="latin">
              In nómine Patris, et Fílii, et Spíritus Sancti.
            </Text>
            <Text className="vernacular">
              Em nome do Pai e do Filho e do Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ágimus tibi grátias,
              omnipotens Deus, pro universis beneficiis tuis, qui vivis et
              regnas in sǽcula sæculórum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Senhor, nós Vos damos graças
              pelo alimento que nos destes; fazei-nos dignos de participar da
              vossa mesa celeste.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
          </Language>
          <Text className="h3">Viagem</Text>
          <Language>
            <Text className="latin">
              Beata Maria intercedénte, bene ambulémus: et Dóminus sit in
              itínere nostro, et Ángeli ejus comiténtur nobíscum.
            </Text>
            <Text className="vernacular">
              Que pela intercessão da Bem-Aventurada Virgem Maria, tenhamos uma
              boa viagem, que o Senhor esteja no nosso caminho e os seus Anjos
              nos acompanhem.
            </Text>
            <Text className="latin">
              <Text className="cross"> ✠ </Text> In nómine Patris, et Fílii, et
              Spíritus Sancti.
            </Text>
            <Text className="vernacular">
              <Text className="cross"> ✠ </Text> Em nome do Pai e do Filho e do
              Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
          </Language>

          <Text className="h3">Antes do Trabalho</Text>
          <Text className="text-base">
            Abençoai, Senhor, o trabalho em que vou ocupar-me e permiti que
            sirva para vossa glória e para minha santificação.
          </Text>
          <Text className="text-base">
            <Text className="cross"> ✠ </Text>
            Em nome do Pai e do Filho e do Espírito Santo.
          </Text>
          <Text className="text-base">
            <Text className="response"> ℟. </Text>Amen.
          </Text>

          <Text className="h3">Aos Filhos</Text>
          <Language>
            <Text className="latin">
              Pax et benedíctio Dei omnipoténtis, Patris, et Fílii, et Spíritus
              Sancti, descéndat super te, et máneat semper.
            </Text>
            <Text className="vernacular">
              Que a paz e a bênção de Deus Todo-Poderoso, Pai, Filho e Espírito
              Santo, desça sobre ti e permaneça contigo para sempre.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
          </Language>

          <Text className="h3">A Adultos</Text>
          <Language>
            <Text className="latin">
              Benedíctio Dei omnipoténtis, Patris, et Fílii, et Spíritus Sancti,
              descéndat super te, et máneat semper.
            </Text>
            <Text className="vernacular">
              A bênção de Deus Todo-Poderoso, Pai, Filho e Espírito Santo, desça
              sobre ti e permaneça contigo para sempre.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text>Amen.
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
