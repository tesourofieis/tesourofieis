import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import NuncDimittis from "./../../canticos/sacros/nuncdimittis";
import Salmo128 from "./../salterio/128";
import Salmo129 from "./../salterio/129";
import Salmo130 from "./../salterio/130";

export default function PageCompletas() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Completas</Text>

          <View className="aside">
            Meditemos naa sepultura de Jesus Cristo e na sua estadia no túmulo.
          </View>

          <View className="side-by-side">
            <Text className="text-base">
              ℣. Convérte nos <Text className="cross text-red-500">✠</Text>{" "}
              Deus, salutáris noster.
            </Text>
            <Text className="text-base">
              ℣. Convertei-nos, <Text className="cross text-red-500">✠</Text>{" "}
              Deus nosso Salvador.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Et avérte iram tuam a
              nobis.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> E afastai de nós a vossa
              ira.
            </Text>
            <Text className="text-base">
              ℣. Deus <Text className="cross text-red-500"> ✠ </Text> in
              adjutórium meum inténde.
            </Text>
            <Text className="text-base">
              ℣. Deus, <Text className="cross text-red-500">✠</Text> vinde em
              meu auxílio.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Dómine, ad adjuvándum me
              festína.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Senhor, apressai-Vos em
              socorrer-me.
            </Text>
            <Text className="text-base">
              ℣. Glória Patri, et Fílio, et Spíritui Sancto.
            </Text>
            <Text className="text-base">
              ℣. Glória ao Pai, e ao Filho e ao Espírito Santo.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Sicut erat in pricípio,
              et nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </View>

          <Text className="h2">Salmo 128</Text>

          <Salmo128 />

          <Text className="h2">Salmo 129</Text>

          <Salmo129 />

          <Text className="h2">Salmo 130</Text>

          <Salmo130 />

          <Text className="h2">Hino Memento rerum conditor</Text>

          <MementoRerumConditor />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Ecl. 24</Text>

              <View className="side-by-side">
                <Text className="text-base">
                  Ego mater pulchræ dilectionis, et timoris, et agnitionis, et
                  sanctæ spei.
                </Text>
                <Text className="text-base">
                  Eu sou a Mãe do amor belo e do temor, e do conhecimento
                  antigo, e da santa esperança.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Deo grátias.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Graças a Deus.
                </Text>
                <Text className="text-base">
                  ℣. Ora pro nobis sancta Dei Génetrix.
                </Text>
                <Text className="text-base">
                  ℣. Rogai por nós, Santa Mãe de Deus.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Ut digni efficiamur
                  promissionibus Christi.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Para que sejamos
                  dignos das promessas de Cristo.
                </Text>
              </View>

              <Text className="h2">Ofício 1</Text>

              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Sub tuum præsídium
                  confúgimus, sancta Dei Génetrix; nostras deprecatiónes ne
                  despícias in necessitátibus; sed a perículis cunctis líbera
                  nos semper, Virgo gloriósa et benedícta.
                </Text>
                <Text className="text-base">
                  <Text className="em">Ant.</Text> À vossa protecção recorremos,
                  Santa Mãe de Deus; não desprezeis as nossas súplicas em nossas
                  necessidades; mas livrai-nos sempre de todos os perigos, ó
                  Virgem gloriosa e bendita.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
              </View>

              <Text className="h2">Tempo Pascal</Text>

              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Regína Cæli, lætáre,
                  allelúja; Quia quem meruísti portáre, allelúja; Resurréxit,
                  sicut dixit, allelúja; Ora pro nóbis Deum, allelúja. Gaude et
                  lætáre, Virgo Maria, allelúja. Quia surréxit Dóminus vere,
                  allelúja.
                </Text>
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Rainha do Céu, alegrai-Vos,
                  Aleluia! Porque Aquele que merecestes trazer em vosso ventre,
                  Aleluia! Ressuscitou como disse, Aleluia! Rogai por nós a
                  Deus, Aleluia! Alegrai-Vos e exultai, ó Virgem Maria, Aleluia!
                  Porque o Senhor ressuscitou verdadeiramente, Aleluia!
                </Text>
              </View>

              <Text className="h2">Cântico Nunc Dimittis</Text>

              <NuncDimittis />

              <Text className="h2">Ofício 1</Text>

              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Sub tuum præsídium
                  confúgimus, sancta Dei Génetrix; nostras deprecatiónes ne
                  despícias in necessitátibus; sed a perículis cunctis líbera
                  nos semper, Virgo gloriósa et benedícta.
                </Text>
                <Text className="text-base">
                  <Text className="em">Ant.</Text> À vossa protecção recorremos,
                  Santa Mãe de Deus; não desprezeis as nossas súplicas em nossas
                  necessidades; mas livrai-nos sempre de todos os perigos, ó
                  Virgem gloriosa e bendita.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
              </View>

              <Text className="h2">Tempo Pascal</Text>

              <View className="side-by-side">
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Regína Cæli, lætáre,
                  allelúja; Quia quem meruísti portáre, allelúja; Resurréxit,
                  sicut dixit, allelúja; Ora pro nóbis Deum, allelúja. Gaude et
                  lætáre, Virgo Maria, allelúja. Quia surréxit Dóminus vere,
                  allelúja.
                </Text>
                <Text className="text-base">
                  <Text className="em">Ant.</Text> Rainha do Céu, alegrai-Vos,
                  Aleluia! Porque Aquele que merecestes trazer em vosso ventre,
                  Aleluia! Ressuscitou como disse, Aleluia! Rogai por nós a
                  Deus, Aleluia! Alegrai-Vos e exultai, ó Virgem Maria, Aleluia!
                  Porque o Senhor ressuscitou verdadeiramente, Aleluia!
                </Text>
                <Text className="text-base">
                  ℣. Domine, exaudi orationem meam.
                </Text>
                <Text className="text-base">
                  ℣. Ouvi, Senhor, a minha oração.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Et clamor meus ad te
                  veniat.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> E o meu clamor chegue
                  até Vós.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Orémus.</Text>
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Oremos.</Text>
                </Text>
                <Text className="text-base">
                  Beatæ et gloriosæ semper Virginis Mariæ, quǽsumus, Domine,
                  intercessio gloriosa nos protegat: et ad vitam perducat
                  æternam. Per Dominum...
                </Text>
                <Text className="text-base">
                  Qua gloriosa intercessão da abençoada e gloriosa Maria sempre
                  Virgem, nos proteja, nós Vos pedimos Senhor, e que nos traga a
                  vida eterna. Por nosso Senhor...
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
              </View>
            </TabItem>

            <TabItem label="No Advento">
              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Is. 7, 14-15</Text>

              <View className="side-by-side">
                <Text className="text-base">
                  Ecce Virgo concipiet, et pariet filium, et vocabitur nomen
                  ejus Emmanuel. Butyrum et mel comedet, ut sciat reprobare
                  malum, et eligere bonum.
                </Text>
                <Text className="text-base">
                  Pois por isso o mesmo Senhor vos dará este sinal: Uma virgem
                  conceberá e dará à luz um filho, e o seu nome será Emanuel.
                  Ele comerá manteiga e mel, até que saiba rejeitar o mal e
                  escolher o bem.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Deo gratias.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Graças a Deus.
                </Text>
                <Text className="text-base">
                  ℣. Angelus Dómini nuntiávit Maríæ.
                </Text>
                <Text className="text-base">
                  ℣. O Anjo do Senhor anunciou a Maria.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Et concépit de
                  Spíritu Sancto.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> E Ela concebeu do
                  Espírito Santo.
                </Text>
                <Text className="text-base">
                  <Text className="em">Nunc. Ant.</Text> Spiritus Sanctus in te
                  descendet, Maria: ne timeas, habebis in utero Filium Dei,
                  (Allelúja).
                </Text>
                <Text className="text-base">
                  <Text className="em">Nunc. Ant.</Text> O Espírito Santo
                  descerá sobre vós, ó Maria; não temais: concebereis, e tereis
                  no ventre o Filho de Deus, (Aleluia).
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Orémus.</Text>
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Oremos.</Text>
                </Text>
                <Text className="text-base">
                  Deus, qui de beatæ Mariæ Virginis utero Verbum tuum, Angelo
                  nuntiante, carnem suscipere voluisti: præsta supplicibus tuis;
                  ut qui vere eam Genetricem Dei credimus, ejus apud te
                  intercessionibus adjuvemur. Per eundem Dominum nostrum Jesum
                  Christum.
                </Text>
                <Text className="text-base">
                  Ó Deus, que pela anunciação do Anjo quisestes que o vosso
                  Verbo se vestisse da nossa carne nas entranhas da
                  bem-aventurada Virgem Maria: nós, vossos humildes servos,
                  cremos ser ela a verdadeira Mãe de Deus, concedei-nos que nos
                  ajudem as suas intercessões para convosco. Pelo mesmo Jesus
                  Cristo Senhor Nosso.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
              </View>
            </TabItem>

            <TabItem label="No Natal">
              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Ecl. 24</Text>

              <View className="side-by-side">
                <Text className="text-base">
                  Ego mater pulchræ dilectionis, et timoris, et agnitionis, et
                  sanctæ spei. Eu sou a Mãe do amor belo e do temor, e do
                  conhecimento antigo, e da santa esperança.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Deo grátias.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Graças a Deus.
                </Text>
                <Text className="text-base">
                  ℣. Ora pro nobis sancta Dei Génetrix.
                </Text>
                <Text className="text-base">
                  ℣. Rogai por nós, Santa Mãe de Deus.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Ut digni efficiamur
                  promissionibus Christi.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Para que sejamos
                  dignos das promessas de Cristo.
                </Text>
                <Text className="text-base">
                  <Text className="em">Nunc. Ant.</Text> Magnum hæreditatis
                  mysterium: templum Dei factus est uterus nescientis virum: non
                  est pollutus ex ea carnem assumens; omnes gentes venient,
                  dicentes: Gloria tibi, Domine.
                </Text>
                <Text className="text-base">
                  <Text className="em">Nunc. Ant.</Text> Grande mystério de
                  herança: o ventre daquela que não conheceu varão, é feito
                  templo de Deus; o qual se não manchou, tomando dela carne
                  humana. Virão todas as gentes, dizendo: Glória a Vós, ó
                  Senhor.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Orémus.</Text>
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500 text-center">Oremos.</Text>
                </Text>
                <Text className="text-base">
                  Deus, qui salutis æternæ, beatæ Mariæ virginitate fœcunda,
                  humano generi præmia præstitisti: tribue, quǽsumus; ut ipsam
                  pro nobis intercedere sentiamus, per quam meruimus auctorem
                  vitæ suscipere, Dominum nostrum Jesum Christum Filium tuum.
                  Qui tecum vivit et regnat in unitate Spiritus Sancti, Deus,
                  per omnia sæcula sæculorum.
                </Text>
                <Text className="text-base">
                  Ó Deus, que pela virgindade fecunda da bem-aventurada Maria,
                  destes ao género humano as gratificações da salvação eterna:
                  concedei-nos, Vos rogamos, que experienciemos sua intercessão
                  por nós, dela pela qual recebemos o autor da vida, Nosso
                  Senhor Jesus Cristo, vosso Filho. Que convosco, e com o
                  Espírito Santo, vive e reina por todos os séculos.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
                <Text className="text-base">
                  <Text className="text-red-500">℟.</Text> Amen.
                </Text>
              </View>
            </TabItem>
          </Tabs>

          <View className="side-by-side">
            <Text className="text-base">℣. Domine, exaudi orationem meam.</Text>
            <Text className="text-base">℣. Ouvi, Senhor, a minha oração.</Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Et clamor meus ad te
              veniat.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> E o meu clamor chegue até
              Vós.
            </Text>
            <Text className="text-base">℣. Benedicamus Domino.</Text>
            <Text className="text-base">℣. Bendigamos o Senhor.</Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Deo gratias.
            </Text>
            <Text className="text-base">
              <Text className="text-red-500">℟.</Text> Graças a Deus.
            </Text>
          </View>

          <View className="aside">
            Acabar com uma{" "}
            <Link className="link" href="/devocionario/antifonas">
              Antífona de Nossa Senhora
            </Link>{" "}
            .
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
