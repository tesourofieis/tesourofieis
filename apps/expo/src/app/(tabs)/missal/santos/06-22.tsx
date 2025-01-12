import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0622() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">S. Paulino, B. e Conf., a 22 de Junho</Text>

          <Text className="h3">Intróito</Text>

          <LinkCard
            href="/missal/comum/12confessorespontifices2#intróito"
            title="Confessores Pontífices - Missa Sacerdótes tui"
          />

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Deus, qui ómnia pro te in hoc sǽculo relinquéntibus, céntuplum in
              futúro et vitam ætérnam promisísti: concéde propítius; ut, sancti
              Pontíficis Paulíni vestígiis inhæréntes, valeámus terréna
              despícere et sola cœléstia desideráre: Qui vivis...
            </Text>
            <Text className="text-base">
              Ó Deus, que àqueles que tudo abandonaram neste mundo para Vos
              seguirem prometestes o cêntuplo e a vida eterna, concedei-nos
              propício que, seguindo os exemplos do santo Pontífice Paulino,
              desprezemos sempre as coisas terrenas e aspiremos somente às
              celestiais. Ó Vós, que viveis...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <Text className="em">2 Cor. 8, 9-15</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Lectio Epístolæ beati Pauli Apostoli ad Corinthios.
            </Text>
            <Text className="text-base">
              Lição da Ep.ª do B. Ap.º Paulo aos Coríntios.
            </Text>
            <Text className="text-base">
              Fratres: Scitis grátiam Dómini nostri Jesu Christi, quóniam
              propter vos egénus factus est, cum esset dives, ut illíus inópia
              vos dívites essétis. Et consílium in hoc do: hoc enim vobis útile
              est, qui non solum fácere, sed et velle coepistis ab anno prióre:
              nunc vero et facto perfícite: ut, quemádmodum promptus est ánimus
              voluntátis, ita sit et perficiéndi ex eo quod habétis. Si enim
              volúntas prompta est, secúndum id quod habet, accépta est, non
              secúndum id quod non habet. Non enim ut áliis sit remíssio, vobis
              autem tribulátio, sed ex æqualitáte. In præsénti témpore vestra
              abundántia illórum inópiam súppleat: ut et illórum abundántia
              vestræ inópiæ sit suppleméntum, ut fiat æquálitas, sicut scriptum
              est: Qui multum, non abundávit: et qui módicum, non minorávit.
            </Text>
            <Text className="text-base">
              Meus irmãos: Conheceis a bondade de nosso Senhor Jesus Cristo,
              que, sendo rico, se fez pobre, por causa de vos tornar ricos pela
              sua pobreza. A este respeito dou-vos um conselho, que vos é tanto
              mais útil quanto começastes, não somente agora a praticar esta
              virtude, mas já o fazeis desde o último ano. Agora, pois,
              completai a vossa obra, a fim de que, tal como tem estado pronta a
              vossa vontade para querer, tal esteja também para cumprir o que
              quereis, segundo os meios que possuís; pois, quando a vontade está
              pronta, segundo o que possui, ela é agradável a Deus, mas não
              segundo o que se não possui. Não digo isto para que eles sintam
              alívio, e fiqueis atribulados; mas para que haja igualdade. Nas
              circunstâncias presentes a vossa abundância supra as necessidades
              dos outros, de sorte que haja igualdade, assim como está escrito:
              «Àquele que recolheu muito lhe não sobejou; e àquele que recolheu
              pouco lhe não faltou».
            </Text>
          </View>

          <Text className="h3">Gradual</Text>

          <Text className="em">Ecl. 44, 16</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Ecce sacérdos magnus, qui in diébus suis plácuit Deo. ℣.{" "}
              <Text className="em">ibid., 20</Text> Non est invéntus símilis
              illi, qui conserváret legem Excélsi.
            </Text>
            <Text className="text-base">
              Eis o grande sacerdote que nos dias da sua vida agradou a Deus. ℣.{" "}
              <Text className="em">ibid., 20</Text> Ninguém o igualou na
              observância das leis do Altíssimo.
            </Text>
            <Text className="text-base">
              Allelúja, allelúja. ℣. <Text className="em">Ps. 109, 4</Text> Tu
              es sacérdos in ætérnum, secúndum órdinem Melchísedech. Allelúja.
            </Text>
            <Text className="text-base">
              Aleluia, aleluia. ℣. <Text className="em">Sl. 109, 4</Text> Tu és
              sacerdote para sempre, segundo a ordem de Melquisedeque.
            </Text>
          </View>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/15confessoresnaopontifices2#evangelho"
            title="Confessores não Pontífices - Missa Justus ut palma"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 88, 21-22</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Invéni David servum meum, óleo sancto meo unxi eum: manus enim mea
              auxiliábitur ei, et bráchium meum confortábit eum.
            </Text>
            <Text className="text-base">
              Encontrei o seu servo David e ungi-o com meu óleo sagrado. Minha
              mão o socorrerá e o meu braço o fortalecerá.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Da nobis, Dómine, perféctæ caritátis sacrifícium, exémplo sancti
              Pontíficis Paulíni, cum altáris oblatióne conjúngere: et
              beneficéntiæ stúdio sempitérnam misericórdiam promeréri. Per
              Dóminum nostrum...
            </Text>
            <Text className="text-base">
              Concedei-nos, Senhor, que, imitando o exemplo do Santo Pontífice
              Paulino, juntemos à oferta do altar o sacrifício da caridade
              perfeita; e permiti que, aplicando-nos ao exercício da
              beneficência, mereçamos alcançar o perdão. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Lc. 12, 42</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Fidélis servus et prudens, quem constítuit dóminus super famíliam
              suam: ut det illis in témpore trítici mensúram.
            </Text>
            <Text className="text-base">
              Eis o servo fiel e prudente que o Senhor estabeleceu acima da sua
              família para distribuir, oportunamente, a cada um a sua medida de
              trigo.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base">
              Tríbue nobis per hæc sancta, Dómine, illum pietátis et humilitátis
              afféctum, quem ex hoc divíno fonte hausit sanctus Póntifex tuus
              Paulínus: et, ipsíus intercessióne, in omnes, qui te deprecántur,
              grátiæ tuæ divítias benígnus effúnde. Per Dóminum...
            </Text>
            <Text className="text-base">
              Concedei-nos, Senhor, em virtude destes sacramentos aqueles
              sentimentos de piedade e de humildade que o vosso Santo Pontífice
              Paulino auria nesta fonte divina; e pela sua intercessão infundi
              benigno as riquezas da vossa graça naqueles que Vo-las suplicam.
              Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
