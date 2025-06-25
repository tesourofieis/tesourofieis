import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0513() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Roberto Belarmino, B. C. e Doutor, a 13 de Maio
          </Text>

          <Text className="comment">
            Nascido em Montepulciano (Itália) a 4 de Outubro de 1542, faleceu em
            Roma a 17 de Setembro de 1621, canonizado por Pio XI em 29 de Junho
            de 1930, proclamado Doutor da Igreja em 15 de Agosto de 1931.
            Sucessivamente professor de teologia e pregador em Lovaina
            (1559-1576) encarregado do curso de controvérsias em Roma, onde teve
            por penitente S. Luís de Gonzaga, provincial dos Jesuítas em
            Nápoles, enviado em França por Sixto V em missão diplomática,
            Belarmino foi, apesar de repugnância da sua humildade, agraciado com
            as honras do cardinalato em 1599. Clemente VIII motivou a sua
            escolha declarando que a Igreja não possuía outro igual em
            sabedoria. Sem contar os três anos que Belarmino passou como
            arcebispo em Cápua, o cardeal continuou a residir na Cidade Eterna,
            onde prestou relevantes serviçoes a Clemente VIII, Paulo V e Grgório
            XV. Com seus livros de controvérsias causou enormes prejuízos à
            heresia protestante, enquanto com o seu catecismo, traduzido em 40
            línguas, espalhava por todos os países do mundo o conhecimento da
            doutrina cristã. Alma de angélica inocência, religioso de humildade
            e obediência sem par, foi no episcopado um pastor modelar por sua
            vigilância e caridade para com os pobres. No fim da carreira foi
            autorizado pelo Papa a retirar-se para o noviciado de S. André,
            berço de sua vida religiosa, onde se preparou para a mais santa das
            mortes.
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
              Deus, qui ad errórem insídias repelléndas et apostólicæ Sedis jura
              propugnánda, beátum Robértum Pontíficem tuuam atque Doctórem mira
              eruditióne et virtúte decorásti: ejus méritis et intercessióne
              concéde; ut nos in veritátis amóre crescámus et errántium corda ad
              Ecclésiæ tuæ rédeant unitátem. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que para refutar as insídias dos erros e defender os
              direitos da Santa Sé Apostólica enriquecestes o B. Roberto, vosso
              Pontífice e Doutor, com admirável erudição e constância,
              concedei-nos pelos seus méritos e intercessão que em nós aumente o
              amor à verdade e regressem à unidade da vossa Igreja os corações
              dos que permanecem no erro. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/santos/03-07#epístola"
            title="S. Tomás Aquino, Conf. e Doutor"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 72, 28</Text>

          <Language>
            <Text className="latin">
              Mihi autem adhærére Deo bonum est, pónere in Dómino Deo spem meam:
              ut annúntiem pmnes prædicatiónes tuas in portis fíliæ Sion,
              allelúja.
            </Text>
            <Text className="vernacular">
              Por isso bom é para mim unir-me a Deus e pôr no Senhor Deus a
              minha esperança, a fim de publicar todos seus louvores às portas
              da filha de Sião, aleluia.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Hóstias tibi, Dómine, in odórem suavitátis offérimus: et præsta;
              ut, beáti Robérti mónitis et exémplis edócti, per sémitam
              mandatórum tuórum dilatáto corde currámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              A Vós, Senhor, oferecemos estas hóstias em odor de suavidade; e
              concedei-nos que, edificados com os ensinos e exemplos do B.
              Roberto, caminhemos generosamente pela via dos vossos preceitos.
              Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 5, 14, 16</Text>

          <Language>
            <Text className="latin">
              Vos estis lux mundi: sic lúceat lux vestra coram homínibus, ut
              vídeant ópera vestra bona, et gloríficent Patrem vestrum qui in
              cœlis est, allelúja.
            </Text>
            <Text className="vernacular">
              Sois a luz do mundo. Assim a vossa luz brilhe diante dos homens,
              para que vejam as vossas boas obras e glorifiquem o vosso Pai, que
              está nos céus, aleluia.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Sacraménta, quæ súmpsimus, Dómine Deus noster, in nobis fóveant
              caritátis ardórem: quo beátus Robértus veheménter accénsus, pro
              Ecclésia tua se júgiter impendébat. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Que os sacramentos, que recebemos, Senhor, nosso Deus, em nós
              infundam o ardor da caridade com o qual o B. Roberto, intensamente
              abrasado, se esforçava incessantemente em defender a vossa Igreja.
              Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
