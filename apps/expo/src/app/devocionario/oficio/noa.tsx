import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Language from "~/components/Language";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo125 from "./../salterio/125";
import Salmo126 from "./../salterio/126";
import Salmo127 from "./../salterio/127";

export default function PageNoa() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Noa</Text>

          <Text className="aside">
            Meditemos em Jesus morrendo na cruz, na agitação da natureza neste
            momento, na destruição do reino de Satanás, e na Igreja nascendo do
            lado aberto do seu Divino Esposo preso à Santa Cruz.
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

          <Text className="h2">Hino Memento rerum conditor</Text>

          <MementoRerumConditor />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Pulchra es et decora, filia
              Jerusalem: terribus ut castrorum acies ordinara.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Filha de Jerusalém, sois
              bela e decorosa, terrível como um exército formado em linha.
            </Text>
          </Language>

          <Text className="h2">Salmo 125</Text>

          <Salmo125 />

          <Text className="h2">Salmo 126</Text>

          <Salmo126 />

          <Text className="h2">Salmo 127</Text>

          <Salmo127 />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> Pulchra es et decora,
                  filia Jerusalem: terribus ut castrorum acies ordinara.
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> Filha de Jerusalém,
                  sois bela e decorosa, terrível como um exército formado em
                  linha.
                </Text>
              </Language>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Ecl. 24, 19-20</Text>

              <Language>
                <Text className="latin">
                  Sicut cinnamomum et balsamum aromatizans odorem dedi: quasi
                  myrrha electa dedi suavitatem odoris.
                </Text>
                <Text className="vernacular">
                  Assim como o cinamomo e o bálsamo, que difundem cheiro, dei eu
                  fragrância: como a mirra escolhida, dei cheiro de suavidade.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Deo grátias.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Graças a Deus.
                </Text>
                <Text className="latin">
                  <Text className="versicle"> ℣. </Text>Post partum, Virgo,
                  invioláta permansísti.
                </Text>
                <Text className="vernacular">
                  <Text className="versicle"> ℣. </Text>Despois do parto
                  permanecestes imaculada.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Dei Génetrix, intercéde
                  pro nobis.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Intercedei por nós, ó
                  Mãe de Deus.
                </Text>
              </Language>

              <Language>
                <Text className="latin">
                  <Text className="latin">Hic genuflectitur</Text> Kyrie eleison
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Genuflectir</Text> Senhor, tende
                  piedade de nós.
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
                  Famulorum tuorum, quaesumus, Domine, delictis ignosce: ut qui
                  tibi placere de actibus nostris non valemus, Genitricis Filii
                  tui Domini nostri intercessione salvemur: Qui tecum vivit et
                  regnat...
                </Text>
                <Text className="vernacular">
                  Perdoai, Senhor, como Vos pedimos, os delictos dos vossos
                  servos; para que não podendo agradar-Vos com as nossas obras,
                  sejamos salvos, pela intercessão da Virgem Mãe de vosso Filhos
                  e Senhor nosso: Que convosco vive e reina...
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
                  <Text className="latin">Ant.</Text> Ecce ancilla Domini: fiat
                  mihi secundum verbum tuum.
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> Eis aqui a escrava do
                  Senhor, faça-se em mim segundo a vossa palavra.
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
                  <Text className="versicle"> ℣. </Text>Benedicta tu in
                  mulieribus.
                </Text>
                <Text className="vernacular">
                  <Text className="versicle"> ℣. </Text>Bendita sois vóo entre
                  as mulheres.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Et benedictus fructus
                  ventris tui.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> E bendito é o fruto do
                  vosso ventre.
                </Text>
              </Language>

              <Language>
                <Text className="latin">
                  <Text className="latin">Hic genuflectitur</Text> Kyrie eleison
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Genuflectir</Text> Senhor, tende
                  piedade de nós.
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
                  <Text className="latin">Ant.</Text> Ecce, Maria genuit nobis
                  Salvatorem, quem Joannes videns exclamavit, dicens: Ecce Agnus
                  Dei, ecce qui tollit peccata mundi, (allelúja).
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> Eis, Maria deu à luz
                  o nosso Salvador, que João reconheceu e exclamou: eis o
                  Cordeiro de Deus, Aquele que tira o pecado do mundo,
                  (aleluia).
                </Text>
              </Language>

              <Text className="h2">Pequeno Capítulo</Text>

              <Text className="em">Ecl. 24, 19-20</Text>

              <Language>
                <Text className="latin">
                  In plateis sicut cinnamomum et balsamum aromatizans odorem
                  dedi: quasi myrrha electa, dedi suavitatem odoris.
                </Text>
                <Text className="vernacular">
                  Nas praças assim como o cinamomo e o bálsamo, que difundem
                  cheiro, dei eu fragrância; como a mirra, dei cheiro de
                  suavidade.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Deo grátias.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Graças a Deus.
                </Text>
                <Text className="latin">
                  <Text className="versicle"> ℣. </Text>Post partum, Virgo,
                  invioláta permansísti.
                </Text>
                <Text className="vernacular">
                  <Text className="versicle"> ℣. </Text>Despois do parto
                  permanecestes imaculada.
                </Text>
                <Text className="latin">
                  <Text className="response"> ℟. </Text> Dei Génetrix, intercéde
                  pro nobis.
                </Text>
                <Text className="vernacular">
                  <Text className="response"> ℟. </Text> Intercedei por nós, ó
                  Mãe de Deus.
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
