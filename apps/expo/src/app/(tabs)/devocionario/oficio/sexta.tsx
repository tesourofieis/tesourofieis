import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo122 from "./../salterio/122";
import Salmo123 from "./../salterio/123";
import Salmo124 from "./../salterio/124";

export default function PageSexta() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Sexta</Text>

          <Text className="aside">
            Meditemos na crucifixão de Jesus Cristo e nas palavras pronunciadas
            por ele na Santa Cruz, dando-nos Maria por Mãe.
          </Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              ℣. Deus <Text className="text-base latin">✠</Text> in adjutórium
              meum inténde.
            </Text>
            <Text className="text-base vernacular">
              ℣. Deus, <Text className="text-base vernacular">✠</Text> vinde em
              meu auxílio.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Dómine, ad adjuvándum
              me festína.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> Senhor,
              apressai-Vos em socorrer-me.
            </Text>
            <Text className="text-base latin">
              ℣. Glória Patri, et Fílio, et Spíritui Sancto.
            </Text>
            <Text className="text-base vernacular">
              ℣. Glória ao Pai, e ao Filho e ao Espírito Santo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Sicut erat in
              pricípio, et nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </View>

          <Text className="h2">Memento rerum conditor</Text>

          <MementoRerumConditor />

          <View className="side-by-side">
            <Text className="text-base latin">
              <Text className="text-base latin">Ant.</Text> In odorem
              unguentorum tuorum currimus: adolescentulæ dilexerunt te nimis.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Ant.</Text> Todos corremos
              à fragrância dos vossos aromas, as donzelas amar-vos-ão
              grandemente.
            </Text>
          </View>

          <Text className="h2">Salmo 122</Text>

          <Salmo122 />

          <Text className="h2">Salmo 123</Text>

          <Salmo123 />

          <Text className="h2">Salmo 124</Text>

          <Salmo124 />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <View className="side-by-side">
                <Text className="text-base latin">
                  <Text className="text-base latin">Ant.</Text> In odorem
                  unguentorum tuorum currimus: adolescentulæ dilexerunt te
                  nimis.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">Ant.</Text> Todos
                  corremos à fragrância dos vossos aromas, as donzelas
                  amar-vos-ão grandemente.
                </Text>
              </View>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Ecl. 24, 16</Text>

              <View className="side-by-side">
                <Text className="text-base latin">
                  Et radicavi in populo honorificato, et in parte Dei mei
                  hereditas illius et in plenitudine sanctorum detentio mea.
                </Text>
                <Text className="text-base vernacular">
                  E lancei raízes no povo honorificado, e na parte de meu Deus,
                  herança sua; e na congregação dos santos fiz a minha morada.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Deo grátias.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> Graças a
                  Deus.
                </Text>
                <Text className="text-base latin">
                  ℣. Benedicta tu in mulieribus.
                </Text>
                <Text className="text-base vernacular">
                  ℣. Bendita sois v´so entre as mulheres.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Et benedictus
                  fructus ventris tui.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> E bendito é o
                  fruto do vosso ventre.
                </Text>
              </View>

              <View className="side-by-side">
                <Text className="text-base latin">
                  <Text className="text-base latin">Hic genuflectitur</Text>{" "}
                  Kyrie eleison
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">Genuflectir</Text>{" "}
                  Senhor, tende piedade de nós.
                </Text>
                <Text className="text-base latin">Christe, eléison.</Text>
                <Text className="text-base vernacular">
                  Cristo, tende piedade de nós.
                </Text>
                <Text className="text-base latin">Kyrie, eléison.</Text>
                <Text className="text-base vernacular">
                  Senhor, tende piedade de nós.
                </Text>
                <Text className="text-base latin">
                  ℣. Domine, exaudi orationem meam.
                </Text>
                <Text className="text-base vernacular">
                  ℣. Ouvi, Senhor, a minha oração.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Et clamor meus ad
                  te veniat.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> E o meu
                  clamor chegue até Vós.
                </Text>
              </View>

              <View className="side-by-side">
                <Text className="text-base latin">
                  <Text className="text-base latin">Orémus.</Text>
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">Oremos.</Text>
                </Text>
                <Text className="text-base latin">
                  Concede, misericors Deus, fragilitati nostrae praesidium: ut
                  qui sanctae Dei Genitricis memoriam agimus, intercessionis
                  ejus auxilio, a nostris iniquitatibus resurgamus. Per eúmdem
                  Dóminum...
                </Text>
                <Text className="text-base vernacular">
                  Concedei, misericordioso Deus, um esforço grande à nossa
                  fragilidade, para que os que celebramos a memória da santa Mãe
                  de Deus, com o auxílio da sua intercessão, ressuscitemos das
                  nossas iniquidades. Pelo mesmo Senhor...
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Amen.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> Amen.
                </Text>
              </View>
            </TabItem>

            <TabItem label="No Advento">
              <View className="side-by-side">
                <Text className="text-base latin">
                  <Text className="text-base latin">Ant.</Text> Ne timeas,
                  María, invenísti grátiam apud Dóminum: ecce concípies et
                  páries fílium, (alleluia).
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">Ant.</Text> Não temais,
                  ó Maria, achastes graça para com o Senhor: concebereis, e
                  dareis à luz um filho, (aleluia).
                </Text>
              </View>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Lc. 1, 32</Text>

              <View className="side-by-side">
                <Text className="text-base latin">
                  Dabit illi Dominus Deus sedem David patris ejus: et regnabit
                  in domo Jacob in æternum, et regni ejus non erit finis.
                </Text>
                <Text className="text-base vernacular">
                  O Senhor Deus lhe dará o trono de David seu Pai, e reinará
                  eternamente na casa de Jacob, e o seu Reino não terá fim.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Deo grátias.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> Graças a
                  Deus.
                </Text>
                <Text className="text-base latin">
                  ℣. Benedicta tu in mulieribus.
                </Text>
                <Text className="text-base vernacular">
                  ℣. Bendita sois vóo entre as mulheres.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Et benedictus
                  fructus ventris tui.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> E bendito é o
                  fruto do vosso ventre.
                </Text>
              </View>

              <View className="side-by-side">
                <Text className="text-base latin">
                  <Text className="text-base latin">Hic genuflectitur</Text>{" "}
                  Kyrie eleison
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">Genuflectir</Text>{" "}
                  Senhor, tende piedade de nós.
                </Text>
                <Text className="text-base latin">Christe, eléison.</Text>
                <Text className="text-base vernacular">
                  Cristo, tende piedade de nós.
                </Text>
                <Text className="text-base latin">Kyrie, eléison.</Text>
                <Text className="text-base vernacular">
                  Senhor, tende piedade de nós.
                </Text>
                <Text className="text-base latin">
                  ℣. Domine, exaudi orationem meam.
                </Text>
                <Text className="text-base vernacular">
                  ℣. Ouvi, Senhor, a minha oração.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Et clamor meus ad
                  te veniat.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> E o meu
                  clamor chegue até Vós.
                </Text>
              </View>

              <View className="side-by-side">
                <Text className="text-base latin">
                  <Text className="text-base latin">Orémus.</Text>
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">Oremos.</Text>
                </Text>
                <Text className="text-base latin">
                  Deus, qui de beatæ Mariæ Virginis utero Verbum tuum, Angelo
                  nuntiante, carnem suscipere voluisti: præsta supplicibus tuis;
                  ut qui vere eam Genetricem Dei credimus, ejus apud te
                  intercessionibus adjuvemur. Per eundem Dominum nostrum Jesum
                  Christum.
                </Text>
                <Text className="text-base vernacular">
                  Ó Deus, que pela anunciação do Anjo quisestes que o vosso
                  Verbo se vestisse da nossa carne nas entranhas da
                  bem-aventurada Virgem Maria: nós, vossos humildes servos,
                  cremos ser ela a verdadeira Mãe de Deus, concedei-nos que nos
                  ajudem as suas intercessões para convosco. Pelo mesmo Jesus
                  Cristo Senhor Nosso.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Amen.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> Amen.
                </Text>
              </View>
            </TabItem>

            <TabItem label="No Natal">
              <View className="side-by-side">
                <Text className="text-base latin">
                  <Text className="text-base latin">Ant.</Text> Rubum, quem
                  viderat Moyses incombustum, conservatam agnovimus tuam
                  laudabilem virginitatem: Dei Genitrix, intercede pro nobis.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">Ant.</Text> Na sarça
                  que Moisés via sem se consumir, reconhecemos a vossa admirável
                  virgindade conservada: rogai por nós, Santa Mãe de Deus.
                </Text>
              </View>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Ecl. 24, 16</Text>

              <View className="side-by-side">
                <Text className="text-base latin">
                  Et radicavi in populo honorificato, et in parte Dei mei
                  hereditas illius et in plenitudine sanctorum detentio mea.
                </Text>
                <Text className="text-base vernacular">
                  E lancei raízes no povo honorificado, e na parte de meu Deus,
                  herança sua; e na congregação dos santos fiz a minha morada.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Deo grátias.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> Graças a
                  Deus.
                </Text>
                <Text className="text-base latin">
                  ℣. Benedicta tu in mulieribus.
                </Text>
                <Text className="text-base vernacular">
                  ℣. Bendita sois vóo entre as mulheres.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Et benedictus
                  fructus ventris tui.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> E bendito é o
                  fruto do vosso ventre.
                </Text>
              </View>

              <View className="side-by-side">
                <Text className="text-base latin">
                  <Text className="text-base latin">Orémus.</Text>
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">Oremos.</Text>
                </Text>
                <Text className="text-base latin">
                  Deus, qui salutis æternæ, beatæ Mariæ virginitate fœcunda,
                  humano generi præmia præstitisti: tribue, quǽsumus; ut ipsam
                  pro nobis intercedere sentiamus, per quam meruimus auctorem
                  vitæ suscipere, Dominum nostrum Jesum Christum Filium tuum.
                  Qui tecum vivit et regnat in unitate Spiritus Sancti, Deus,
                  per omnia sæcula sæculorum.
                </Text>
                <Text className="text-base vernacular">
                  Ó Deus, que pela virgindade fecunda da bem-aventurada Maria,
                  destes ao género humano as gratificações da salvação eterna:
                  concedei-nos, Vos rogamos, que experienciemos sua intercessão
                  por nós, dela pela qual recebemos o autor da vida, Nosso
                  Senhor Jesus Cristo, vosso Filho. Que convosco, e com o
                  Espírito Santo, vive e reina por todos os séculos.
                </Text>
                <Text className="text-base latin">
                  <Text className="text-base latin">℟.</Text> Amen.
                </Text>
                <Text className="text-base vernacular">
                  <Text className="text-base vernacular">℟.</Text> Amen.
                </Text>
              </View>
            </TabItem>
          </Tabs>

          <View className="side-by-side">
            <Text className="text-base latin">
              ℣. Domine, exaudi orationem meam.
            </Text>
            <Text className="text-base vernacular">
              ℣. Ouvi, Senhor, a minha oração.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Et clamor meus ad te
              veniat.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> E o meu clamor
              chegue até Vós.
            </Text>
            <Text className="text-base latin">℣. Benedicamus Domino.</Text>
            <Text className="text-base vernacular">
              ℣. Bendigamos o Senhor.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Deo gratias.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> Graças a Deus.
            </Text>
            <Text className="text-base latin">
              ℣. Fidelium animæ per misericordiam Dei, requiescant in pace.
            </Text>
            <Text className="text-base vernacular">
              ℣. E que as almas dos fiéis, pela misericórdia de Deus, descansem
              em paz.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> Amen.
            </Text>
          </View>

          <Text className="aside">
            Acabar com uma{" "}
            <Link className="link" href="/devocionario/antifonas">
              Antífona de Nossa Senhora
            </Link>{" "}
            .
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
