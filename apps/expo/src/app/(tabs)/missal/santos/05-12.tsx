import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0512() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S.S. Nereu, Achileu, Domitila, Virgem e Pancracio, Mártires
          </Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl 32:18-20</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Ecce, óculi Dómini super timéntes eum, sperántes in misericórdia
              ejus, allelúja: ut erípiat a morte ánimas eórum: quóniam adjútor
              et protéctor noster est, allelúja, allelúja.{" "}
              <Text className="em">Ps 32:1</Text> Exsultáte, justi, in Dómino:
              rectos decet collaudátio. ℣. Gloria Patri...
            </Text>
            <Text className="text-base">
              Eis que os olhos do Senhor se dirigem aos que o temem, e esperam
              na sua misericórdia, aleluia: para livrar as suas almas da morte:
              porque Ele é o nosso socorro e o nosso protector, aleluia,
              aleluia. <Text className="em">Sl. 32, 1</Text> Justos, alegrai-vos
              no Senhor: aos rectos convém que o louvem. ℣. Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Semper nos, Dómine, Mártyrum tuórum Nérei, Achillei, Domitíllæ
              atque Pancrátii fóveat, quǽsumus, beáta sollémnitas: et tuo dignos
              reddat obséquio. Per Dóminium nostrum...
            </Text>
            <Text className="text-base">
              Fazei, Senhor, Vos suplicamos, que a feliz solenidade dos vossos
              Mártires Néreo, Aquiles, Domitila e Pancrácio nos reanime e nos
              torne dignos de Vos servirmos. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            title="Epístola da Missa de S. Filipe e S. Tiago"
            href="/missal/santos/05-01#epístola"
          />

          <View className="side-by-side">
            <Text className="text-base">
              Allelúja, allelúja. ℣. Hæc est vera fratérnitas, quæ vicit mundi
              crímina: Christum secuta est, ínclita tenens regna cœléstia.
              Allelúja.
            </Text>
            <Text className="text-base">
              Aleluia, aleluia. ℣. Esta é a verdadeira fraternidade que venceu
              os crimes do mundo: Ela seguiu Cristo, possuindo gloriosamente o
              reino celestial. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            title="Evangelho do Vigésimo Domingo depois de Pentecostes"
            href="/missal/pentecostes/20-0#evangelho"
          />

          <Text className="h3">Ofertório</Text>

          <LinkCard
            title="Ofertório Missa Protexísti me"
            href="/missal/comum/9martir#ofertório"
          />

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Sanctórum Martyrum tuórum, quǽsumus. Dómine, Nérei, Achíllei,
              Domitíllæ atque Pancrátii sit tibi grata conféssio: quæ et múnera
              nostra comméndet, et tuam nobis indulgéntiam semper implóret. Per
              Dóminum...
            </Text>
            <Text className="text-base">
              Dignai-Vos receber, Senhor, com ânimo agradável a confissão dos
              vossos Santos Mártires Néreo, Aquiles, Domitila e Pancrácio; e que
              ela Vos disponha a aceitardes as nossas ofertas e elas nos tornem
              sempre merecedores da vossa indulgência. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <LinkCard
            title="Comúnio Missa Sancti tui"
            href="/missal/comum/10martires#comúnio"
          />

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Quǽsumus, Dómine: ut beatórum Mártyrum tuórum Nérei, Achíllei,
              Domitíllæ atque Pancrátii deprecatiónibus, sacraménta sancta, quæ
              súmpsimus, ad tuæ nobis profíciant placatiónis augméntum. Per
              Dóminum...
            </Text>
            <Text className="text-base">
              Vos pedimos, Senhor, fazei que pelas preces dos vossos Mártires
              Néreo, Aquiles, Domitila e Pancrácio os sagrados mystérios, que
              recebemos, Vos tornem cada vez mais propício para connosco. Por
              nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
