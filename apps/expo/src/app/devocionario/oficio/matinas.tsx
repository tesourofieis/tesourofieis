import { Link } from "expo-router";
import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { TabItem, Tabs } from "~/components/Tabs";
import QuemTerra from "./../../canticos/sacros/quemterra";
import TeDeum from "./../../canticos/sacros/tedeum";
import Salmo8 from "./../salterio/008";
import Salmo18 from "./../salterio/018";
import Salmo23 from "./../salterio/023";
import Salmo44 from "./../salterio/044";
import Salmo45 from "./../salterio/045";
import Salmo86 from "./../salterio/086";
import Salmo94 from "./../salterio/094";
import Salmo95 from "./../salterio/095";
import Salmo96 from "./../salterio/096";
import Salmo97 from "./../salterio/097";
import { H1, H2 } from "~/components/Headings";


export default function PageMatinas() {
  return (
    <PageWrapper>
      <H1 text="Matinas" />

      <Text className="aside">
        Meditemos no nascimento do Salvador, no monte das oliveiras, na sua
        agonia e nas cordas com que o amarraram.
      </Text>

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Domine,{" "}
          <Text className="cross"> ✠ </Text> labia mea aperies.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Abri, Senhor,{" "}
          <Text className="cross"> ✠ </Text> os meus lábios.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et os meum annuntiabit laudem
          tuam.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E a minha boca anunciará o
          vosso louvor.
        </Text>
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
          <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e ao
          Espírito Santo.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Sicut erat in pricípio, et
          nunc, et semper, et in sǽcula sæculórum. Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Assim como era no princípio,
          agora e sempre, e por todos os séculos dos séculos. Amen.
        </Text>
      </Language>

      <Text className="aside">
        Desde o Sábado antes do Domingo da Septuagésima até às vésperas do
        Sábado Santo, em vez de Allelúja, é dito:
      </Text>

      <Language>
        <Text className="latin">Laus tibi, Domine, Rex æternæ gloriæ.</Text>
        <Text className="vernacular">
          Louvado sejais, ó Senhor, Rei da glória eterna.
        </Text>
      </Language>

      <H2 text="Invitatório" />

      <Language>
        <Text className="latin">Ave Maria, gratia plena, Dominus tecum.</Text>
        <Text className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Text>
      </Language>

      <H2 text="Salmo 94" />

      <Salmo94 />

      <Language>
        <Text className="latin">
          Veníte, exsultémus Dómino: * jubilémus Deo salutári nostro:
        </Text>
        <Text className="vernacular">
          Vinde, exultemos no Senhor: * cantemos alegres a de Deus nosso
          salvador:
        </Text>
        <Text className="latin">
          Præoccupémus fáciem ejus in confessióne: * et in psalmis jubilémus ei.
        </Text>
        <Text className="vernacular">
          Apresentemo-nos diante d’Ele em acção de graças: * e celebremo-l’O com
          salmos.
        </Text>
        <Text className="latin">Ave Maria, gratia plena, Dominus tecum.</Text>
        <Text className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Text>
        <Text className="latin">
          Quóniam Deus magnus Dóminus: * et Rex magnus super omnes deos.
        </Text>
        <Text className="vernacular">
          Porque o Senhor é o Deus grande: * e o Rei grande sobre todos os
          deuses.
        </Text>
        <Text className="latin">
          Quia in manu ejus sunt omnes fines terræ: * et altitúdines móntium
          ipsíus sunt.
        </Text>
        <Text className="vernacular">
          Pois na sua mão estão todos os confins da terra: * e as alturas dos
          montes são suas.
        </Text>
        <Text className="latin">Dominus tecum.</Text>
        <Text className="vernacular">O Senhor é convosco.</Text>
        <Text className="latin">
          Quóniam ipsíus est mare, et ipse fecit illud: * et siccam manus ejus
          formavérunt.
        </Text>
        <Text className="vernacular">
          Seu é o mar e Ele o fez: * e as suas mãos formaram a terra árida.
        </Text>
        <Text className="latin">
          Veníte, adorémus, et procidámus, * et plorémus ante Dóminum qui fecit
          nos.
        </Text>
        <Text className="vernacular">
          Vinde, adoremos e prostremo-nos, * e choremos diante do Senhor que nos
          criou.
        </Text>
        <Text className="latin">
          Quia ipse est Dóminus Deus noster, * et nos pópulus páscuæ ejus, et
          oves manus ejus.
        </Text>
        <Text className="vernacular">
          Pois Ele é o Senhor nosso Deus, * e nós somos o povo do seu pasto e as
          ovelhas da sua manada.
        </Text>
        <Text className="latin">Ave Maria, gratia plena, Dominus tecum.</Text>
        <Text className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Text>
        <Text className="latin">
          Hódie si vocem ejus audiéritis, * nolíte obduráre corda vestra:
        </Text>
        <Text className="vernacular">
          Se hoje ouvirdes a sua voz, * não endureceis os vossos corações:
        </Text>
        <Text className="latin">
          Sicut in irritatióne secúndum diem tentatiónis in desérto: * ubi
          tentavérunt me patres vestri, probavérunt me, et vidérunt ópera mea.
        </Text>
        <Text className="vernacular">
          Como quando me provocaram à ira, no dia da tentação no deserto: * onde
          vossos pais me tentaram, me testaram e viram as minhas obras.
        </Text>
        <Text className="latin">Dominus tecum.</Text>
        <Text className="vernacular">O Senhor é convosco.</Text>
        <Text className="latin">
          Quadragínta annis offénsus fui generatióni illi, * et dixi: semper hi
          errant corde.
        </Text>
        <Text className="vernacular">
          Quarenta anos estive irritado contra esta geração, * e disse: é um
          povo de coração errante.
        </Text>
        <Text className="latin">
          Et isti non cognovérunt vias meas, ut jurávi in ira mea: * Si
          introíbunt in réquiem meam.
        </Text>
        <Text className="vernacular">
          Eles não conheceram os meus caminhos, pelo que jurei na minha ira: *
          no meu repouso não entrarão.
        </Text>
        <Text className="latin">Ave Maria, gratia plena, Dominus tecum.</Text>
        <Text className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Text>
        <Text className="latin">
          Gloria Patri, et Filio, et Spiritui sancto: Sicut erat in principio,
          et nunc, et semper, et in sæcula sæculorum. Amen.
        </Text>
        <Text className="vernacular">
          Glória ao Pai, e ao Filho e ao Espírito Santo. Assim como era no
          princípio, agora e sempre, e por todos os séculos dos séculos. Amen.
        </Text>
        <Text className="latin">Dominus tecum.</Text>
        <Text className="vernacular">O Senhor é convosco.</Text>
        <Text className="latin">Ave Maria, gratia plena, Dominus tecum.</Text>
        <Text className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Text>
      </Language>

      <H2 text="Hino Quem terra" />

      <QuemTerra />

      <Tabs>
        <TabItem label="Domingo, Segunda e Quinta feira">
          <H2 text="Primeiro Nocturno" />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Benedicta tu in mulieribus, et
              benedictus fructus ventris tui.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Bendita sois vós entre as
              mulheres, e bendito é o fruto do vosso ventre.
            </Text>
          </Language>

          <H2 text="Salmo 8" />

          <Salmo8 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Benedicta tu in mulieribus, et
              benedictus fructus ventris tui.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Bendita sois vós entre as
              mulheres, e bendito é o fruto do vosso ventre.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Sicut myrrha electa, odorem
              dedisti suavitatis, sancta Dei Genitrix.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Como a preciosa mirra,
              exalastes suavíssima fragrância, ó santa Mãe de Deus.
            </Text>
          </Language>

          <H2 text="Salmo 18" />

          <Salmo18 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Sicut myrrha electa, odorem
              dedisti suavitatis, sancta Dei Genitrix.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Como a preciosa mirra,
              exalastes suavíssima fragrância, ó santa Mãe de Deus.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ante torum hujus Virginis
              frequentate nobis dulcia cantica dramatis.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Multiplicai-nos doces
              cânticos ante o precioso leito desta Virgem.
            </Text>
          </Language>

          <H2 text="Salmo 23" />

          <Salmo23 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ante torum hujus Virginis
              frequentate nobis dulcia cantica span.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Multiplicai-nos doces
              cânticos ante o precioso leito desta Virgem.
            </Text>
          </Language>
        </TabItem>
        <TabItem label="Terça e Sexta feira">
          <H2 text="Segundo Nocturno" />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Specie tua et pulchritudine
              tua intende, prospere procede, et regna.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Ornada de glória e de
              formosura, caminhai prosperamente e reinai.
            </Text>
          </Language>

          <H2 text="Salmo 44" />

          <Salmo44 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Specie tua et pulchritudine
              tua intende, prospere procede, et regna.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Ornada de glória e de
              formosura, caminhai prosperamente e reinai.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Adjuvabit eam Deus vultu suo:
              Deus in medio ejus, non commovebitur.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Ajudou-a Deus com seu
              favorável aspecto; e como Deus assiste no meio dela, não se verá
              perturbada.
            </Text>
          </Language>

          <H2 text="Salmo 45" />

          <Salmo45 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Adjuvabit eam Deus vultu suo:
              Deus in medio ejus, non commovebitur.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Ajudou-a Deus com seu
              favorável aspecto; e como Deus assiste no meio dela, não se verá
              perturbada.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Sicut lætantium omnium nostrum
              habitatio est in te, sancta Dei Genitrix.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Santa Mãe de Deus, todos
              nossos que por amor habitam convosco estão cheios de alegria.
            </Text>
          </Language>

          <H2 text="Salmo 86" />

          <Salmo86 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Sicut lætantium omnium nostrum
              habitatio est in te, sancta Dei Genitrix.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Santa Mãe de Deus, todos
              nossos que por amor habitam convosco estão cheios de alegria.
            </Text>
          </Language>
        </TabItem>

        <TabItem label="Quarta-feira e Sábado">
          <H2 text="Terceiro Nocturno" />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> Gaude, Maria Virgo:
                  cunctas hæreses sola intermenisti in universo mundo.
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> Alegrai-vos, Virgem
                  Maria: porque só vós haveis destruído todas as heresias em
                  todo o mundo.
                </Text>
              </Language>
            </TabItem>

            <TabItem label="No Advento">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> Angelus Domini nuntiavit
                  Mariæ, et concepit de Spiritu Sancto, (Allelúja)
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> O Anjo do Senhor
                  anunciou a Maria, e ela concebeu do Espírito Santo.
                </Text>
              </Language>
            </TabItem>
          </Tabs>

          <H2 text="Salmo 95" />

          <Salmo95 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Gaude, Maria Virgo: cunctas
              hæreses sola intermenisti in universo mundo.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Alegrai-vos, Virgem
              Maria: porque só vós haveis destruído todas as heresias em todo o
              mundo.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Dignare me laudare te, Virgo
              sacrata: da mihi virtutem contra hostes tuos.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Dignai-vos, sagrada
              Virgem, de que eu vos louve; dai-me esforço contra vossos
              inimigos.
            </Text>
          </Language>

          <H2 text="Salmo 96" />

          <Salmo96 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Dignare me laudare te, Virgo
              sacrata: da mihi virtutem contra hostes tuos.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Dignai-vos, sagrada
              Virgem, de que eu vos louve; dai-me esforço contra vossos
              inimigos.
            </Text>
          </Language>

          <Tabs>
            <TabItem label="Depois da Purificação">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> Post partum virgo
                  inviolata permansisti: Dei Genitrix, intercede pro nobis.
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> Depois do parto
                  permanecestes virgem imaculada; Mãe de Deus, intercedei por
                  nós.
                </Text>
              </Language>
            </TabItem>

            <TabItem label="No Advento">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> Angelus Domini nuntiavit
                  Mariæ, et concepit de Spiritu Sancto, (Allelúja)
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> O Anjo do Senhor
                  anunciou a Maria, e ela concebeu do Espírito Santo.
                </Text>
              </Language>
            </TabItem>
          </Tabs>

          <H2 text="Salmo 97" />

          <Salmo97 />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> Post partum virgo
                  inviolata permansisti: Dei Genitrix, intercede pro nobis.
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> Depois do parto
                  permanecestes virgem imaculada; Mãe de Deus, intercedei por
                  nós.
                </Text>
              </Language>
            </TabItem>

            <TabItem label="No Advento">
              <Language>
                <Text className="latin">
                  <Text className="latin">Ant.</Text> Angelus Domini nuntiavit
                  Mariæ, et concepit de Spiritu Sancto, (Allelúja)
                </Text>
                <Text className="vernacular">
                  <Text className="vernacular">Ant.</Text> O Anjo do Senhor
                  anunciou a Maria, e ela concebeu do Espírito Santo.
                </Text>
              </Language>
            </TabItem>
          </Tabs>
        </TabItem>
      </Tabs>

      <H2 text="Versículo" />

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Diffusa est gratia in labiis
          tuis.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Estão cheios de graça vossos
          lábios.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Propterea benedixit te Deum in
          æternum.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Por isso Deus vos abençoou para
          sempre.
        </Text>
        <Text className="latin">Pater Noster (secreto usque ad).</Text>
        <Text className="vernacular">Pai Nosso (em silêncio).</Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Et ne nos inducas in
          tentationem.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>E nos não deixeis cair em
          tentação.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Sed libera nos a malo.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Mas livrai-nos do mal.
        </Text>
      </Language>

      <H2 text="Absolvição" />

      <Language>
        <Text className="latin">
          Precibus et meritis beatæ Mariæ semper Virginis, et omnium Sanctorum,
          perducat nos Dominus ad regna cælorum.
        </Text>
        <Text className="vernacular">
          Pelos rogos e merecimentos da bem-aventurada Virgem Maria, e de todos
          os Santos, nos conduza o Senhor ao reino dos céus.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Jube, Domine, benedicere.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Dai-me, Senhor, a vossa bênção.
        </Text>
      </Language>

      <H2 text="Bênção" />

      <Language>
        <Text className="latin">Nos cum prole pia benedicat Virgo Maria.</Text>
        <Text className="vernacular">
          Nos abençoe a Virgem Maria com seu piíssimo Filho.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>

      <Tabs>
        <TabItem label="Depois da Natal">
          <H2 text="Lição 1" />

          <Text className="em">Ecl. 24, 11-13</Text>

          <Language>
            <Text className="latin">
              In omnibus requiem quæsivi, et in hereditate Domini morabor. Tunc
              præcepit, et dixit mihi Creator omnium: et qui creavit me,
              requievit in tabernaculo meo. Et dixit mihi: In Jacob inhabita, et
              in Israël hereditare, et in electis meis mitte radices.
            </Text>
            <Text className="vernacular">
              Em todas as coisas procurei descanso, e na herança do Senhor farei
              morada. Então ordenou, e me disse o Criador de tudo; e O que me
              criou descansou no meu Tabernáculo, e disse-me: Tem a tua morada
              em Jacob, e a tua herança em Israel, e nos meus escolhidos lança
              raízes.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Tu autem, Dómine, miserére
              nobis.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E Vós, Senhor, tende
              misericórdia de nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sancta et immaculáta
              virginitas, quibus te laudibus efferam nescio: Quia quem cæli
              cápere non póterant, tuo gremio contulísti.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Santa e imaculada
              Virgindade, não sei com que louvores possa exaltar-vos. Porque
              encerrastes no vosso seio Aquele a quem os céus não podiam
              abranger.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Benedicta tu in muliéribus,
              et benedíctus fructus ventris tui.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Bendita sois vós entre as
              mulheres e bendito é o fruto do vosso ventre.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Quia quem cæli cápere non
              póterant, tuo gremio contulisti.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Porque encerrastes no vosso
              seio Aquele a quem os céus não podiam abranger.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Iube domne benedicere.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Dai-me, Senhor, a vossa
              bênção.
            </Text>
            <Text className="latin">
              Ipsa Virgo Vírginum intercédat pro nobis ad Dóminum.
            </Text>
            <Text className="vernacular">
              A mesma Virgem das virgens interceda por nós ao Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <H2 text="Lição 2" />

          <Text className="em">Ecl. 24, 15-16</Text>

          <Language>
            <Text className="latin">
              Et sic in Sion firmata sum, et in civitate sanctificata similiter
              requievi, et in Ierúsalem potestas mea. Et radicavi in populo
              honorificato, et in parte Dei mei hereditas illius, et in
              plenitudine sanctorum detentio mea.
            </Text>
            <Text className="vernacular">
              E desta maneira estou fundada em Sião, e semelhantemente repousei
              na cidade santificada; e em Jerusalém é o meu poder. E lancei
              raízes no povo honorificado, e na parte do meu Deus, herança sua,
              e na congregação dos santos fiz a minha morada.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Tu autem, Dómine, miserére
              nobis.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E Vós, Senhor, tende
              misericórdia de nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Demos graças a Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Beata es, Virgo Maria, quæ
              Dominum portasti, Creatorem mundi: Genuisti qui te fecit, et in
              æternum permanes Virgo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Bem-aventurada sois, ó
              Virgem Maria, que trouxestes no vosso ventre o Criador do mundo.
              Gerastes o que vos deu o ser, e ficastes para sempre Virgem.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ave Maria, gratia plena,
              Dominus tecum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ave Maria, cheia de graça, o
              Senhor é convosco.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Genuisti qui te fecit, et
              in æternum permanes Virgo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Gerastes O que vos deu o
              ser, e ficastes para sempre Virgem.
            </Text>
          </Language>

          <Text className="aside">
            Quando o Te Deum é dito depois da Terceira Lição, adiciona-se o
            seguinte no fim do Responsório:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
              Spirítui Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Glória ao Pai e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Genuisti qui te fecit, et
              in æternum permanes Virgo.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Gerastes O que vos deu o
              ser, e ficastes para sempre Virgem.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Iube domne benedicere.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Dai-me, Senhor, a vossa
              bênção.
            </Text>
          </Language>

          <H2 text="Bênção" />

          <Language>
            <Text className="latin">
              Per Vírginem matrem concédat nobis Dóminus salútem et pacem.
            </Text>
            <Text className="vernacular">
              Pela Virgem Maria, nos conceda o Senhor a paz e a salvação.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <H2 text="Lição 3" />

          <Text className="em">Ecl. 24, 17-20</Text>

          <Language>
            <Text className="latin">
              Quasi cedrus exaltata sum in Libano, et quasi cypressus in monte
              Sion: Quasi palma exaltata sum in Cades, et quasi plantatio rosæ
              in Iericho: Quasi oliva speciosa in campis, et quasi platanus
              exaltata sum iuxta aquam in plateis. Sicut cinnamomum et balsamum
              aromatizans odorem dedi; quasi myrrha electa dedi suavitatem
              odoris:
            </Text>
            <Text className="vernacular">
              Exaltada sou, qual cedro no Líbano, e qual cipreste no monte Sião.
              Exaltada sou, qual palma em Cades e como as rosas em Jericó. Qual
              especial oliveira nos campos, e qual plátano, sou exaltada junto
              da água nas praças. Assim como o cinamomo e o bálsamo, que
              difundem cheiro, dei eu fragrância; como a mirra, dei cheiro de
              suavidade.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Tu autem, Dómine, miserére
              nobis.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E Vós, Senhor, tende
              misericórdia de nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Demos graças a Deus.
            </Text>
          </Language>

          <Text className="aside">
            O Te Deum não é dito no Advento, ou da Septuagésima até à Páscoa,
            excluindo as Festas de Nossa Senhora. O seguinte Responsório é dito
            quando o Te Deum é omitido:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Felix namque es, sacra
              Virgo Maria, et omni laude dignissima: Quia ex te ortus est sol
              justitiæ, Christus Deus noster.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Ditosa sois, ó sagrada
              Virgem Maria, e digníssima de todo o louvor. Porque de vós nasceu
              o sol de justiça, Jesus Cristo nosso Deus.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ora pro populo, interveni
              pro clero, intercede pro devoto femineo sexu: sentiant omnes tuum
              juvamen, quicumque celebrant tuam sanctam commemorationem.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Rogai pelo povo, intercedei
              pelo clero, advogai pelo devoto sexo feminino; experimentem o
              vosso patrocínio os que celebram a vossa santa memória. Porque de
              vós nasceu o Sol de justiça, Jesus Cristo, nosso Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Quia ex te ortus est sol
              justitiæ.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Porque de ti nasceu o Sol
              de justiça.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
              Spirítui Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Glória ao Pai e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Christus Deus noster.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Jesus Cristo, nosso Deus.
            </Text>
          </Language>
        </TabItem>

        <TabItem label="No Advento">
          <H2 text="Lição 1" />

          <Text className="em">Lc. 1, 26-28</Text>

          <Language>
            <Text className="latin">
              Missus est Angelus Gabriel a Deo in civitatem Galilææ, cui nomen
              Nazareth, ad virginem desponsatam viro, cui nomen erat Joseph, de
              domo David: et nomen virginis Maria. Et ingressus Angelus ad eam
              dixit: Ave gratia plena: Dominus tecum: benedicta tu in
              mulieribus.
            </Text>
            <Text className="vernacular">
              O Anjo Gabriel foi mandado por Deus à cidade de Galileia chamada
              Nazaré, a uma virgem denominada Maria, desposada com um varão cujo
              nome era José, da casa de David. E entrando o Anjo onde ela
              estava, lhe disse: Deus vos salve, ó cheia de graça, o Senhor é
              convosco; bendita sois vós entre as mulheres.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Tu autem, Dómine, miserére
              nobis.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E vós, Senhor, tende
              misericórdia de nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Demos graças a Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Missus est Gabriel Angelus
              ad Maríam Vírginem desponsatam Joseph, nuntians ei verbum; et
              expavescit Virgo de lúmine: ne timeas, María, invenísti grátiam
              apud Dóminum: Ecce concipies et paries, et vocábitur Altíssimi
              Fílius.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> O Anjo Gabriel foi enviado
              a Maria Virgem, desposada com José, para lhe anunciar o verbo; e a
              Virgem assustou-se com o esplendor da sua luz. Não temas, Maria,
              que achaste graça para com o Senhor. Conceberás, e darás à luz um
              filho que será chamado o filho do Altíssimo.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Dabit ei Dóminus Deus sedem
              David, patris ejus, et regnábit in domo Jacob in ætérnum.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Senhor Deus lhe dará o
              trono de David seu Pai, e reinará eternamente na casa de Jacob.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ecce concipies et paries,
              et vocábitur Altíssimi Fílius.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Conceberás, e darás á luz
              um filho que será chamado o Filho do Altíssimo.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Iube domne benedicere.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Dai-me, ó Senhor, a vossa
              bênção.
            </Text>
            <Text className="latin">
              Ipsa Virgo Vírginum intercédat pro nobis ad Dóminum.
            </Text>
            <Text className="vernacular">
              A mesma Virgem das virgens interceda por nós ao Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <H2 text="Lição 2" />

          <Text className="em">Lc. 1, 29-33</Text>

          <Language>
            <Text className="latin">
              Quæ cum audisset, turbata est in sermone ejus, et cogitabat qualis
              esset ista salutatio. Et ait Angelus ei: Ne timeas, Maria:
              invenisti enim gratiam apud Deum: ecce concipies in utero, et
              paries filium, et vocabis nomen ejus Jesum: hic erit magnus, et
              Filius Altissimi vocabitur, et dabit illi Dominus Deus sedem David
              patris ejus: et regnabit in domo Jacob in æternum, et regni ejus
              non erit finis.
            </Text>
            <Text className="vernacular">
              Ouvindo ela estas palavras, perturbou-se pelo que se lhe dizia; e
              considerava que saudação seria. Então o Anjo disse-lhe: Não temas,
              Maria, porque achaste graça para com Deus. Conceberás no teu
              ventre, e darás à luz um filho a quem darás o nome de Jesus. Este
              será grande e se chamará Filho do Altíssimo, e o Senhor Deus lhe
              dará o trono de David seu Pai, e reinará eternamente na casa de
              Jacob, e o seu Reino não terá fim.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Tu autem, Dómine, miserére
              nobis.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E vós, Senhor, tende
              misericórdia de nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Demos graças a Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ave, María, grátia plena;
              Dóminus tecum: Spíritus Sanctus supervéniet in te, et virtus
              Altíssimi obumbrábit tibi: quod enim ex te nascétur Sanctum,
              vocábitur Fílius Dei.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Ave, Maria, cheia de graça;
              o Senhor é convosco. Virá sobre vós o Espírito Santo e a virtude
              do Altíssimo vos fará sombra: por isso o santo que nascerá de vós
              será chamado Filho de Deus.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Quómodo fiet istud, quóniam
              virum non cognósco? Et respóndens Angelus, dixit ei.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Como se fará isto, pois não
              conheço varão? E respondendo o Anjo, lhe disse:
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Spíritus Sanctus
              supervéniet in te, et virtus Altíssimi obumbrábit tibi: quod enim
              ex te nascétur Sanctum, vocábitur Fílius Dei.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Virá sobre vós o Espírito
              Santo, e a virtude do Altíssimo vos fará sombra; por isso o santo
              que nascerá de vós será chamado Filho de Deus.
            </Text>
          </Language>

          <Text className="aside">
            Quando o Te Deum é dito depois da Terceira Lição, adiciona-se o
            seguinte no fim do Responsório:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
              Spirítui Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Glória ao Pai e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Spíritus Sanctus
              supervéniet in te, et virtus Altíssimi obumbrábit tibi: quod enim
              ex te nascétur Sanctum, vocábitur Fílius Dei.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Virá sobre vós o Espírito
              Santo, e a virtude do Altíssimo vos fará sombra; por isso o santo
              que nascerá de vós será chamado Filho de Deus.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Iube domne benedicere.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Dai-me, Senhor, a vossa
              bênção.
            </Text>
          </Language>

          <H2 text="Bênção" />

          <Language>
            <Text className="latin">
              Per Vírginem Matrem concédat nobis Dóminus salútem et pacem.
            </Text>
            <Text className="vernacular">
              Pela Virgem Maria, nos conceda o Senhor a paz e a salvação.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <H2 text="Lição 3" />

          <Text className="em">Lc. 1, 34-38</Text>

          <Language>
            <Text className="latin">
              Dixit autem Maria ad Angelum: Quomodo fiet istud, quoniam virum
              non cognosco? Et respondens Angelus dixit ei: Spiritus Sanctus
              superveniet in te, et virtus Altissimi obumbrabit tibi. Ideoque et
              quod nascetur ex te Sanctum, vocabitur Filius Dei. Et ecce
              Elisabeth cognata tua, et ipsa concepit filium in senectute sua:
              et hic mensis sextus est illi, quæ vocatur sterilis: quia non erit
              impossibile apud Deum omne verbum. Dixit autem Maria: Ecce ancilla
              Domini: fiat mihi secundum verbum tuum.
            </Text>
            <Text className="vernacular">
              Disse então Maria ao Anjo: Como se fará isto, por quando não
              conheço varão? E respondendo o Anjo, lhe disse: Virá sobre vós o
              Espírito Santo, e a virtude do Altíssimo vos fará sombra; e por
              isso o santo que nascerá de vós se chamará Filho de Deus. E também
              Isabel, vossa parenta, que é chamada estéril, concebeu um filho na
              sua velhice, está já no sexto mês; porque a Deus nada é
              impossível. Disse então Maria: Eis aqui a escrava do Senhor,
              faça-se em mim segundo a vossa palavra.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Tu autem, Dómine, miserére
              nobis.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E vós, Senhor, tende
              misericórdia de nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Demos graças a Deus.
            </Text>
          </Language>

          <Text className="aside">
            O Te Deum não é dito no Advento, excluindo as Festas de Nossa
            Senhora. O seguinte Responsório é dito quando o Te Deum é omitido:
          </Text>

          <Language>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Súscipe verbum, Virgo
              María, quod tibi a Dómino per Angelum transmíssum est: concípies
              et páries Deum páriter et hóminem, ut benedícta dicáris inter
              omnes mulíeres.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Recebei, Maria Virgem, a
              palavra que Senhor vos transmite pelo seu Anjo. Concebereis, e
              dareis à luz a Deus e Homem juntamente: pelo que sereis chamada
              Bendita entre todas as mulheres.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Paries quidem fílium, et
              virginitátis non patiéris detriméntum: efficiéris grávida, et eris
              mater semper intácta.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Dareis à luz um filho, e
              ficareis sempre Virgem. Concebereis e ficareis mãe, continuareis
              sempre pura e imaculada.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ut benedícta dicáris inter
              omnes mulíeres.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Pelo que sereis chamada
              Bendita entre todas as mulheres.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
              Spirítui Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Glória ao Pai e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ut benedícta dicáris inter
              omnes mulíeres.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Pelo que sereis chamada
              Bendita entre todas as mulheres.
            </Text>
          </Language>
        </TabItem>
      </Tabs>

      <H2 text="Te Deum" />

      <TeDeum />

      <Text className="aside">
        As Matinas acabam depois do Terceiro Responsório ou do Te Deum, porque é
        usual depois das Matinas passar-se directamente para as Laudes. No
        entanto, se não continuar para as Laudes diz:
      </Text>

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Domine, exaudi orationem meam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Ouvi, Senhor, a minha oração.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et clamor meus ad te veniat.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E o meu clamor chegue até Vós.
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
          Deus, cujus misericórdiæ non est númerus et bonitátis infinítus est
          thesáurus, piíssmimæ majestáti tuæ pro collátis donis grátias ágimus,
          tuam semper cleméntiam exorántes, ut qui peténtibus postuláta
          concédis, eósdem non déserens, ad prǽmia futúra dispónas. Per Christum
          Dóminum nostrum.
        </Text>
        <Text className="vernacular">
          Ó Deus, cuja misericórdia é infinita e cuja bondade é um tesouro
          inesgotável, dignai-Vos aceitar as graças que rendemos à vossa
          clemência pelos benefícios que nos concedestes; e Vos pedimos que,
          atendendo benignamente às orações dos vossos suplicantes, não fiquem
          abandonados e possam alcançar as recompensas futuras. Por Cristo,
          nosso Senhor.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Domine, exaudi orationem meam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Ouvi, Senhor, a minha oração.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et clamor meus ad te veniat.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E o meu clamor chegue até Vós.
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
          <Text className="versicle"> ℣. </Text>Fidelium animæ per misericordiam
          Dei, requiescant in pace.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>E que as almas dos fiéis, pela
          misericórdia de Deus, descansem em paz.
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
    </PageWrapper>
  );
}
