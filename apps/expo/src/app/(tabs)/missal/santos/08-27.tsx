import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0827() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. José Calasans, Conf., a 27 de Agosto</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 33, 12</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Veníte, fílii, audíte me: timorem Dómini docébo vos.{" "}
              <Text className="em">Ps. ibid., 2</Text> Benedícam Dóminum in omni
              témpore: semper laus ejus in ore meo. ℣. Gloria Patri...
            </Text>
            <Text className="text-base">
              Vinde, meus filhos; escutai-me e vos ensinarei a temer o Senhor.{" "}
              <Text className="em">Sl. ibid., 2</Text> Bendirei o Senhor em
              todas as ocasiões: o seu louvor estará sempre na minha boca. ℣.
              Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui per sanctum Joséphum Confessórem tuum, ad erudiéndam
              spíritu intellegéntiæ ac pietátis juventútem, novum Ecclésiæ tuæ
              subsídium providére dignátus es: præsta, quǽsumus; nos, ejus
              exémplo et intercessióne, ita fácere et docére, ut prǽmia
              consequámur ætérna. Per Dóminum...
            </Text>
            <Text className="text-base">
              Ó Deus, que por S. José, vosso Confessor, Vos dignastes
              proporcionar à vossa Igreja novo auxílio para a formação da
              juventude na ciência e na piedade, concedei-nos, vos rogamos, que
              pelo seu exemplo e intercessão possamos proceder e ensinar de tal
              modo que consigamos alcançar os prémios eternos. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/4martirnaopontifice1#epístola"
            title="Mártir não Pontífice - Missa In virtúte tua"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 36, 30-31</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium.
              ℣. Lex Dei ejus in corde ipsíus: et non supplantabúntur gressus
              ejus.
            </Text>
            <Text className="text-base">
              A boca do justo falará com sabedoria e a sua língua proclamará a
              justiça! ℣. A lei do seu Deus está no seu coração e os seus pés
              não tropeçarão.
            </Text>
            <Text className="text-base">
              Allelúja, allelúja. ℣. <Text className="em">Jac. 1, 12</Text>{" "}
              Beátus vir, qui suffert tentatiónem: quóniam, cum probátus fúerit,
              accípiet corónam vitæ. Allelúja.
            </Text>
            <Text className="text-base">
              Aleluia, aleluia. ℣. <Text className="em">Jac. 1, 12</Text>{" "}
              Bem-aventurado o varão que sofre a tentação, porque, depois de ser
              provado, receberá a coroa da vida. Aleluia.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <Text className="em">Mt. 18, 1-5</Text>

          <View className="side-by-side">
            <Text className="text-base">
              <Text className="cross text-red-500">✠</Text> Sequéntia sancti
              Evangélii secúndum Matthǽum.
            </Text>
            <Text className="text-base">
              <Text className="cross text-red-500">✠</Text> Continuação do santo
              Evangelho segundo S. Mateus.
            </Text>
            <Text className="text-base">
              In illo témpore: Accessérunt discípuli ad Jesum, dicéntes: Quis,
              putas, major est in regno cœlorum? Et ádvocans Jesus parvulum,
              státuit eum in médio eórum et dixit: Amen, dico vobis, nisi
              convérsi fuéritis et efficiámini sicut párvuli, non intrabitis in
              regnum cœlórum. Quicúmque ergo humiliáverit se sicut párvulus
              iste, hic est major in regno cœlorum. Et qui suscéperit unum
              párvulum talem in nómine meo, me súscipit.
            </Text>
            <Text className="text-base">
              Naquele tempo, aproximaram-se de Jesus os discípulos, dizendo-Lhe:
              «Qual pensais Vós que é o maior no reino dos céus?». E Jesus,
              havendo chamado um pequeno, colocou-o no meio deles e disse: «Em
              verdade vos digo: se vos não converteis e não vos tornais como os
              pequenos, não entrareis no reino dos céus. Todo aquele, pois, que
              se fizer pequeno, como este menino, esse é o maior no reino dos
              céus; e quem receber um pequeno, como este, em meu nome, recebe-me
              a mim mesmo».
            </Text>
          </View>

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 9, 17</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Desidérium páuperum exaudívit Dóminus: præparatiónem cordis eórum
              audívit auris tua.
            </Text>
            <Text className="text-base">
              O Senhor ouviu o desejo dos pobres; os seus ouvidos escutaram a
              pureza do seu coração.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Altáre tuum, Dómine, munéribus cumulamus oblatis: ut ejus nobis
              fiant supplicatione propitia, cujus nos donasti patrocínio
              adjuvári. Per Dóminum...
            </Text>
            <Text className="text-base">
              Cumulamos, Senhor, os vossos altares com dons e oblatas, a fim de
              que nos alcancem misericórdia pelas orações daquele que nos
              proporcionastes para nos auxiliar com seu patrocínio. Por nosso
              Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mc. 10, 14</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Sínite párvulos veníre ad me, et ne prohibuéritis eos: tálium est
              enim regnum Dei.
            </Text>
            <Text className="text-base">
              Deixai aproximarem-se de mim as criancinhas e as não afasteis,
              pois delas é o reino de Deus.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Sanctificáti, Dómine, salutári mystério: quǽsumus; ut,
              intercedénte sancto Josépho Confessóre tuo, ad majus semper
              proficiámus pietátis increméntum. Per Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Santificados, Senhor, com estes salutares mystérios, Vos rogamos
              que pela intercessão de S. José, vosso Confessor, permitais que
              aumentemos sempre cada vez mais a nossa piedade. Por nosso
              Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
