import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Language from "~/components/Language";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo53 from "./../salterio/053";
import Salmo84 from "./../salterio/084";
import Salmo116 from "./../salterio/116";

export default function PagePrima() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Prima</Text>

          <Text className="aside">
            Meditemos nos ultrajes, sofrimentos e açoites, suportados por Jesus
            Cristo em casa de Caifás. Igualmente na aparição à Santa Virgem após
            a ressurreição e na visita das santas mulheres ao sepulcro.
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Deus{" "}
              <Text className="cross"> ✠ </Text> in adjutórium meum inténde.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Deus,{" "}
              <Text className="cross"> ✠ </Text> vinde em meu auxílio.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Dómine, ad adjuvándum me
              festína.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Senhor, apressai-Vos em
              socorrer-me.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
              Spíritui Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sicut erat in pricípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </Language>

          <Text className="h2">Memento rerum conditor</Text>

          <MementoRerumConditor />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Assumpta est Maria in cælum:
              gaudete angeli, laudantes benedicunt Dominum.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Maria foi exaltada ao
              céu; os anjos se alegram, louvam, e glorificam o Senhor.
            </Text>
          </Language>

          <Text className="h2">Salmo 53</Text>

          <Salmo53 />

          <Text className="h2">Salmo 84</Text>

          <Salmo84 />

          <Text className="h2">Salmo 116</Text>

          <Salmo116 />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> Assumpta est Maria in
                  cælum: gaudete angeli, laudantes benedicunt Dominum.
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> Maria foi exaltada ao
                  céu; os anjos se alegram, louvam, e glorificam o Senhor.
                </Text>
              </Language>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Ct. 6, 9</Text>

              <Language>
                <Text className="latin">
                  Quæ est ista, quæ progréditur quasi auróra consúrgens, pulchra
                  ut luna, elécta ut sol, terribilis ut castrorum acies
                  ordinata?
                </Text>
                <Text className="vernacular">
                  Quem é esta que aparece como a aurora quando desponta, formosa
                  como a lua, eleita, como o sol, terrível como um exército
                  formado em linha?
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Deo grátias.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Graças a Deus.
                </Text>
                <Text className="latin">
                  <Text className="versicle"> ℣. </Text>Dignare me laudare te,
                  Virgo sacrata.
                </Text>
                <Text className="vernacular">
                  <Text className="versicle"> ℣. </Text>Dignai-vos, sagrada
                  Virgem, de que eu vos louve.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Da mihi virtutem contra
                  hostes tuos.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Dai-me esforço contra
                  vossos inimigos.
                </Text>
              </Language>

              <Language>
                <Text className="latin">
                  <Text className="em">Hic genuflectitur</Text> Kyrie eleison
                </Text>
                <Text className="vernacular">
                  <Text className="em">Genuflectir</Text> Senhor, tende piedade
                  de nós.
                </Text>
                <Text className="latin">Christe, eléison.</Text>
                <Text className="vernacular">
                  Cristo, tende piedade de nós.
                </Text>
                <Text className="latin">Kyrie, eléison.</Text>
                <Text className="vernacular">
                  Senhor, tende piedade de nós.
                </Text>
                <Text className="latin">
                  <Text className="versicle"> ℣. </Text>Domine, exaudi orationem
                  meam.
                </Text>
                <Text className="vernacular">
                  <Text className="versicle"> ℣. </Text>Ouvi, Senhor, a minha
                  oração.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Et clamor meus ad te
                  veniat.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> E o meu clamor chegue
                  até Vós.
                </Text>
              </Language>

              <Language>
                <Text className="latin">
                  <Text className="latin">Orémus.</Text>
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Oremos.</Text>
                </Text>
                <Text className="latin">
                  Deus, qui virginalem aulam beatae Mariae in qua habitares,
                  eligere dignatus es: da, quaesumus, ut sua nos defensione
                  munitos; jucundos facias suae interesse commemorationi. Qui
                  vivis et regnas...
                </Text>
                <Text className="vernacular">
                  Ó Deus, que Vos dignastes eleger puríssimas entranhas da
                  bem-aventurada Virgem Maria para vossa morada: concedei-nos
                  que com o presente culto, que alegres lhe tributamos, nos
                  façamos beneméritos do seu patrocínio. Vós que viveis e
                  reinais...
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Amen.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Amen.
                </Text>
              </Language>
            </TabItem>

            <TabItem label="No Advento">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> Missus est Gabriel Angelus
                  ad Maríam, Vírginem, desponsatam Joseph.
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> O Anjo Gabriel foi
                  enviado a Maria Virgem, desposada com José.
                </Text>
              </Language>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Is. 7, 14-15</Text>

              <Language>
                <Text className="latin">
                  Ecce Virgo concipiet, et pariet filium, et vocabitur nomen
                  ejus Emmanuel. Butyrum et mel comedet, ut sciat reprobare
                  malum, et eligere bonum.
                </Text>
                <Text className="vernacular">
                  Pois por isso o mesmo Senhor vos dará este sinal: Uma virgem
                  conceberá e dará à luz um filho, e o seu nome será Emanuel.
                  Ele comerá manteiga e mel, até que saiba rejeitar o mal e
                  escolher o bem.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Deo grátias.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Graças a Deus.
                </Text>
                <Text className="latin">
                  <Text className="versicle"> ℣. </Text>Dignare me laudare te,
                  Virgo sacrata.
                </Text>
                <Text className="vernacular">
                  <Text className="versicle"> ℣. </Text>Dignai-vos, sagrada
                  Virgem, de que eu vos louve.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Da mihi virtutem contra
                  hostes tuos.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Dai-me esforço contra
                  vossos inimigos.
                </Text>
              </Language>

              <Language>
                <Text className="latin">
                  <Text className="em">Hic genuflectitur</Text> Kyrie eleison
                </Text>
                <Text className="vernacular">
                  <Text className="em">Genuflectir</Text> Senhor, tende piedade
                  de nós.
                </Text>
                <Text className="latin">Christe, eléison.</Text>
                <Text className="vernacular">
                  Cristo, tende piedade de nós.
                </Text>
                <Text className="latin">Kyrie, eléison.</Text>
                <Text className="vernacular">
                  Senhor, tende piedade de nós.
                </Text>
                <Text className="latin">
                  <Text className="versicle"> ℣. </Text>Domine, exaudi orationem
                  meam.
                </Text>
                <Text className="vernacular">
                  <Text className="versicle"> ℣. </Text>Ouvi, Senhor, a minha
                  oração.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Et clamor meus ad te
                  veniat.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> E o meu clamor chegue
                  até Vós.
                </Text>
              </Language>

              <Language>
                <Text className="latin">
                  <Text className="latin">Orémus.</Text>
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Oremos.</Text>
                </Text>
                <Text className="latin">
                  Deus, qui de beatæ Mariæ Virginis utero Verbum tuum, Angelo
                  nuntiante, carnem suscipere voluisti: præsta supplicibus tuis;
                  ut qui vere eam Genetricem Dei credimus, ejus apud te
                  intercessionibus adjuvemur. Per eundem Dominum nostrum Jesum
                  Christum.
                </Text>
                <Text className="vernacular">
                  Ó Deus, que pela anunciação do Anjo quisestes que o vosso
                  Verbo se vestisse da nossa carne nas entranhas da
                  bem-aventurada Virgem Maria: nós, vossos humildes servos,
                  cremos ser ela a verdadeira Mãe de Deus, concedei-nos que nos
                  ajudem as suas intercessões para convosco. Pelo mesmo Jesus
                  Cristo Senhor Nosso.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Amen.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Amen.
                </Text>
              </Language>
            </TabItem>

            <TabItem label="No Natal">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> O admirabile commercium:
                  Creator generis humani, animatum corpus sumens, de Virgine
                  nasci dignatus est: et procedens homo sine semine, largitus
                  est nobis suam Deitatem.
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> Ó admirável permuta!
                  O Criador do género humano, tomando corpo e alma, dignou-se
                  nascer de uma Virgem; e, feito homem sem progenitor,
                  tornou-nos participantes da sua divindade.
                </Text>
              </Language>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Ct. 6, 9</Text>

              <Language>
                <Text className="latin">
                  Quæ est ista, quæ progréditur quasi auróra consúrgens, pulchra
                  ut luna, elécta ut sol, terribilis ut castrorum acies
                  ordinata?
                </Text>
                <Text className="vernacular">
                  Quem é esta que aparece como a aurora quando desponta, formosa
                  como a lua, eleita, como o sol, terrível como um exército
                  formado em linha?
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Deo grátias.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Graças a Deus.
                </Text>
                <Text className="latin">
                  <Text className="versicle"> ℣. </Text>Dignare me laudare te,
                  Virgo sacrata.
                </Text>
                <Text className="vernacular">
                  <Text className="versicle"> ℣. </Text>Dignai-vos, sagrada
                  Virgem, de que eu vos louve.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Da mihi virtutem contra
                  hostes tuos.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Dai-me esforço contra
                  vossos inimigos.
                </Text>
              </Language>

              <Language>
                <Text className="latin">
                  <Text className="em">Hic genuflectitur</Text> Kyrie eleison
                </Text>
                <Text className="vernacular">
                  <Text className="em">Genuflectir</Text> Senhor, tende piedade
                  de nós.
                </Text>
                <Text className="latin">Christe, eléison.</Text>
                <Text className="vernacular">
                  Cristo, tende piedade de nós.
                </Text>
                <Text className="latin">Kyrie, eléison.</Text>
                <Text className="vernacular">
                  Senhor, tende piedade de nós.
                </Text>
                <Text className="latin">
                  <Text className="versicle"> ℣. </Text>Domine, exaudi orationem
                  meam.
                </Text>
                <Text className="vernacular">
                  <Text className="versicle"> ℣. </Text>Ouvi, Senhor, a minha
                  oração.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Et clamor meus ad te
                  veniat.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> E o meu clamor chegue
                  até Vós.
                </Text>
              </Language>

              <Language>
                <Text className="latin">
                  <Text className="latin">Orémus.</Text>
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Oremos.</Text>
                </Text>
                <Text className="latin">
                  Deus, qui salutis æternæ, beatæ Mariæ virginitate fœcunda,
                  humano generi præmia præstitisti: tribue, quǽsumus; ut ipsam
                  pro nobis intercedere sentiamus, per quam meruimus auctorem
                  vitæ suscipere, Dominum nostrum Jesum Christum Filium tuum.
                  Qui tecum vivit et regnat in unitate Spiritus Sancti, Deus,
                  per omnia sæcula sæculorum.
                </Text>
                <Text className="vernacular">
                  Ó Deus, que pela virgindade fecunda da bem-aventurada Maria,
                  destes ao género humano as gratificações da salvação eterna:
                  concedei-nos, Vos rogamos, que experienciemos sua intercessão
                  por nós, dela pela qual recebemos o autor da vida, Nosso
                  Senhor Jesus Cristo, vosso Filho. Que convosco, e com o
                  Espírito Santo, vive e reina por todos os séculos.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Amen.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Amen.
                </Text>
              </Language>
            </TabItem>
          </Tabs>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Domine, exaudi orationem
              meam.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ouvi, Senhor, a minha
              oração.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et clamor meus ad te
              veniat.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E o meu clamor chegue até
              Vós.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text> Benedicamus Domino.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Bendigamos o Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo gratias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Fidelium animæ per
              misericordiam Dei, requiescant in pace.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E que as almas dos fiéis,
              pela misericórdia de Deus, descansem em paz.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

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
