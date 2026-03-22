import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { TabItem, Tabs } from "~/components/Tabs";
import { Typography } from "~/components/typography";
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

export default function PageMatinas() {
  return (
    <PageWrapper>
      <H1 text="Matinas" />

      <Typography className="aside">
        Meditemos no nascimento do Salvador, no monte das oliveiras, na sua agonia e nas cordas com
        que o amarraram.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Domine,{" "}
          <Typography className="cross"> ✠ </Typography> labia mea aperies.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Abri, Senhor,{" "}
          <Typography className="cross"> ✠ </Typography> os meus lábios.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et os meum annuntiabit laudem tuam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E a minha boca anunciará o vosso
          louvor.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Deus{" "}
          <Typography className="cross"> ✠ </Typography> in adjutórium meum inténde.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Deus,{" "}
          <Typography className="cross"> ✠ </Typography> vinde em meu auxílio.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Dómine, ad adjuvándum me festína.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Senhor, apressai-Vos em socorrer-me.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et Spíritui
          Sancto.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao Filho e ao Espírito
          Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et nunc, et
          semper, et in sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim como era no princípio, agora e
          sempre, e por todos os séculos dos séculos. Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Desde o Sábado antes do Domingo da Septuagésima até às vésperas do Sábado Santo, em vez de
        Allelúja, é dito:
      </Typography>

      <Language>
        <Typography className="latin">Laus tibi, Domine, Rex æternæ gloriæ.</Typography>
        <Typography className="vernacular">
          Louvado sejais, ó Senhor, Rei da glória eterna.
        </Typography>
      </Language>

      <H2 text="Invitatório" />

      <Language>
        <Typography className="latin">Ave Maria, gratia plena, Dominus tecum.</Typography>
        <Typography className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Typography>
      </Language>

      <Salmo94 />

      <Language>
        <Typography className="latin">
          Veníte, exsultémus Dómino: * jubilémus Deo salutári nostro:
        </Typography>
        <Typography className="vernacular">
          Vinde, exultemos no Senhor: * cantemos alegres a de Deus nosso salvador:
        </Typography>
        <Typography className="latin">
          Præoccupémus fáciem ejus in confessióne: * et in psalmis jubilémus ei.
        </Typography>
        <Typography className="vernacular">
          Apresentemo-nos diante d’Ele em acção de graças: * e celebremo-l’O com salmos.
        </Typography>
        <Typography className="latin">Ave Maria, gratia plena, Dominus tecum.</Typography>
        <Typography className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Typography>
        <Typography className="latin">
          Quóniam Deus magnus Dóminus: * et Rex magnus super omnes deos.
        </Typography>
        <Typography className="vernacular">
          Porque o Senhor é o Deus grande: * e o Rei grande sobre todos os deuses.
        </Typography>
        <Typography className="latin">
          Quia in manu ejus sunt omnes fines terræ: * et altitúdines móntium ipsíus sunt.
        </Typography>
        <Typography className="vernacular">
          Pois na sua mão estão todos os confins da terra: * e as alturas dos montes são suas.
        </Typography>
        <Typography className="latin">Dominus tecum.</Typography>
        <Typography className="vernacular">O Senhor é convosco.</Typography>
        <Typography className="latin">
          Quóniam ipsíus est mare, et ipse fecit illud: * et siccam manus ejus formavérunt.
        </Typography>
        <Typography className="vernacular">
          Seu é o mar e Ele o fez: * e as suas mãos formaram a terra árida.
        </Typography>
        <Typography className="latin">
          Veníte, adorémus, et procidámus, * et plorémus ante Dóminum qui fecit nos.
        </Typography>
        <Typography className="vernacular">
          Vinde, adoremos e prostremo-nos, * e choremos diante do Senhor que nos criou.
        </Typography>
        <Typography className="latin">
          Quia ipse est Dóminus Deus noster, * et nos pópulus páscuæ ejus, et oves manus ejus.
        </Typography>
        <Typography className="vernacular">
          Pois Ele é o Senhor nosso Deus, * e nós somos o povo do seu pasto e as ovelhas da sua
          manada.
        </Typography>
        <Typography className="latin">Ave Maria, gratia plena, Dominus tecum.</Typography>
        <Typography className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Typography>
        <Typography className="latin">
          Hódie si vocem ejus audiéritis, * nolíte obduráre corda vestra:
        </Typography>
        <Typography className="vernacular">
          Se hoje ouvirdes a sua voz, * não endureceis os vossos corações:
        </Typography>
        <Typography className="latin">
          Sicut in irritatióne secúndum diem tentatiónis in desérto: * ubi tentavérunt me patres
          vestri, probavérunt me, et vidérunt ópera mea.
        </Typography>
        <Typography className="vernacular">
          Como quando me provocaram à ira, no dia da tentação no deserto: * onde vossos pais me
          tentaram, me testaram e viram as minhas obras.
        </Typography>
        <Typography className="latin">Dominus tecum.</Typography>
        <Typography className="vernacular">O Senhor é convosco.</Typography>
        <Typography className="latin">
          Quadragínta annis offénsus fui generatióni illi, * et dixi: semper hi errant corde.
        </Typography>
        <Typography className="vernacular">
          Quarenta anos estive irritado contra esta geração, * e disse: é um povo de coração
          errante.
        </Typography>
        <Typography className="latin">
          Et isti non cognovérunt vias meas, ut jurávi in ira mea: * Si introíbunt in réquiem meam.
        </Typography>
        <Typography className="vernacular">
          Eles não conheceram os meus caminhos, pelo que jurei na minha ira: * no meu repouso não
          entrarão.
        </Typography>
        <Typography className="latin">Ave Maria, gratia plena, Dominus tecum.</Typography>
        <Typography className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Typography>
        <Typography className="latin">
          Gloria Patri, et Filio, et Spiritui sancto: Sicut erat in principio, et nunc, et semper,
          et in sæcula sæculorum. Amen.
        </Typography>
        <Typography className="vernacular">
          Glória ao Pai, e ao Filho e ao Espírito Santo. Assim como era no princípio, agora e
          sempre, e por todos os séculos dos séculos. Amen.
        </Typography>
        <Typography className="latin">Dominus tecum.</Typography>
        <Typography className="vernacular">O Senhor é convosco.</Typography>
        <Typography className="latin">Ave Maria, gratia plena, Dominus tecum.</Typography>
        <Typography className="vernacular">
          Ave, Maria, cheia de graça, o Senhor é convosco.
        </Typography>
      </Language>

      <QuemTerra />

      <Tabs>
        <TabItem label="Domingo, Segunda e Quinta feira">
          <H2 text="Primeiro Nocturno" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Benedicta tu in mulieribus, et
              benedictus fructus ventris tui.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Bendita sois vós entre as
              mulheres, e bendito é o fruto do vosso ventre.
            </Typography>
          </Language>

          <Salmo8 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Benedicta tu in mulieribus, et
              benedictus fructus ventris tui.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Bendita sois vós entre as
              mulheres, e bendito é o fruto do vosso ventre.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Sicut myrrha electa, odorem dedisti
              suavitatis, sancta Dei Genitrix.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Como a preciosa mirra, exalastes
              suavíssima fragrância, ó santa Mãe de Deus.
            </Typography>
          </Language>

          <Salmo18 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Sicut myrrha electa, odorem dedisti
              suavitatis, sancta Dei Genitrix.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Como a preciosa mirra, exalastes
              suavíssima fragrância, ó santa Mãe de Deus.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ante torum hujus Virginis frequentate
              nobis dulcia cantica dramatis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Multiplicai-nos doces cânticos
              ante o precioso leito desta Virgem.
            </Typography>
          </Language>

          <Salmo23 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ante torum hujus Virginis frequentate
              nobis dulcia cantica span.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Multiplicai-nos doces cânticos
              ante o precioso leito desta Virgem.
            </Typography>
          </Language>
        </TabItem>
        <TabItem label="Terça e Sexta feira">
          <H2 text="Segundo Nocturno" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Specie tua et pulchritudine tua
              intende, prospere procede, et regna.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ornada de glória e de formosura,
              caminhai prosperamente e reinai.
            </Typography>
          </Language>

          <Salmo44 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Specie tua et pulchritudine tua
              intende, prospere procede, et regna.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ornada de glória e de formosura,
              caminhai prosperamente e reinai.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Adjuvabit eam Deus vultu suo: Deus in
              medio ejus, non commovebitur.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ajudou-a Deus com seu favorável
              aspecto; e como Deus assiste no meio dela, não se verá perturbada.
            </Typography>
          </Language>

          <Salmo45 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Adjuvabit eam Deus vultu suo: Deus in
              medio ejus, non commovebitur.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ajudou-a Deus com seu favorável
              aspecto; e como Deus assiste no meio dela, não se verá perturbada.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Sicut lætantium omnium nostrum
              habitatio est in te, sancta Dei Genitrix.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Santa Mãe de Deus, todos nossos
              que por amor habitam convosco estão cheios de alegria.
            </Typography>
          </Language>

          <Salmo86 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Sicut lætantium omnium nostrum
              habitatio est in te, sancta Dei Genitrix.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Santa Mãe de Deus, todos nossos
              que por amor habitam convosco estão cheios de alegria.
            </Typography>
          </Language>
        </TabItem>

        <TabItem label="Quarta-feira e Sábado">
          <H2 text="Terceiro Nocturno" />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <Language>
                <Typography className="latin">
                  <Typography className="latin">Ant.</Typography> Gaude, Maria Virgo: cunctas
                  hæreses sola intermenisti in universo mundo.
                </Typography>
                <Typography className="vernacular">
                  <Typography className="vernacular">Ant.</Typography> Alegrai-vos, Virgem Maria:
                  porque só vós haveis destruído todas as heresias em todo o mundo.
                </Typography>
              </Language>
            </TabItem>

            <TabItem label="No Advento">
              <Language>
                <Typography className="latin">
                  <Typography className="latin">Ant.</Typography> Angelus Domini nuntiavit Mariæ, et
                  concepit de Spiritu Sancto, (Allelúja)
                </Typography>
                <Typography className="vernacular">
                  <Typography className="vernacular">Ant.</Typography> O Anjo do Senhor anunciou a
                  Maria, e ela concebeu do Espírito Santo.
                </Typography>
              </Language>
            </TabItem>
          </Tabs>

          <Salmo95 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Gaude, Maria Virgo: cunctas hæreses
              sola intermenisti in universo mundo.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Alegrai-vos, Virgem Maria: porque
              só vós haveis destruído todas as heresias em todo o mundo.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Dignare me laudare te, Virgo sacrata:
              da mihi virtutem contra hostes tuos.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Dignai-vos, sagrada Virgem, de
              que eu vos louve; dai-me esforço contra vossos inimigos.
            </Typography>
          </Language>

          <Salmo96 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Dignare me laudare te, Virgo sacrata:
              da mihi virtutem contra hostes tuos.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Dignai-vos, sagrada Virgem, de
              que eu vos louve; dai-me esforço contra vossos inimigos.
            </Typography>
          </Language>

          <Tabs>
            <TabItem label="Depois da Purificação">
              <Language>
                <Typography className="latin">
                  <Typography className="latin">Ant.</Typography> Post partum virgo inviolata
                  permansisti: Dei Genitrix, intercede pro nobis.
                </Typography>
                <Typography className="vernacular">
                  <Typography className="vernacular">Ant.</Typography> Depois do parto permanecestes
                  virgem imaculada; Mãe de Deus, intercedei por nós.
                </Typography>
              </Language>
            </TabItem>

            <TabItem label="No Advento">
              <Language>
                <Typography className="latin">
                  <Typography className="latin">Ant.</Typography> Angelus Domini nuntiavit Mariæ, et
                  concepit de Spiritu Sancto, (Allelúja)
                </Typography>
                <Typography className="vernacular">
                  <Typography className="vernacular">Ant.</Typography> O Anjo do Senhor anunciou a
                  Maria, e ela concebeu do Espírito Santo.
                </Typography>
              </Language>
            </TabItem>
          </Tabs>

          <Salmo97 />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <Language>
                <Typography className="latin">
                  <Typography className="latin">Ant.</Typography> Post partum virgo inviolata
                  permansisti: Dei Genitrix, intercede pro nobis.
                </Typography>
                <Typography className="vernacular">
                  <Typography className="vernacular">Ant.</Typography> Depois do parto permanecestes
                  virgem imaculada; Mãe de Deus, intercedei por nós.
                </Typography>
              </Language>
            </TabItem>

            <TabItem label="No Advento">
              <Language>
                <Typography className="latin">
                  <Typography className="latin">Ant.</Typography> Angelus Domini nuntiavit Mariæ, et
                  concepit de Spiritu Sancto, (Allelúja)
                </Typography>
                <Typography className="vernacular">
                  <Typography className="vernacular">Ant.</Typography> O Anjo do Senhor anunciou a
                  Maria, e ela concebeu do Espírito Santo.
                </Typography>
              </Language>
            </TabItem>
          </Tabs>
        </TabItem>
      </Tabs>

      <H2 text="Versículo" />

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Diffusa est gratia in labiis tuis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Estão cheios de graça vossos lábios.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Propterea benedixit te Deum in æternum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Por isso Deus vos abençoou para sempre.
        </Typography>
        <Typography className="latin">Pater Noster (secreto usque ad).</Typography>
        <Typography className="vernacular">Pai Nosso (em silêncio).</Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Et ne nos inducas in tentationem.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>E nos não deixeis cair em tentação.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sed libera nos a malo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Mas livrai-nos do mal.
        </Typography>
      </Language>

      <H2 text="Absolvição" />

      <Language>
        <Typography className="latin">
          Precibus et meritis beatæ Mariæ semper Virginis, et omnium Sanctorum, perducat nos Dominus
          ad regna cælorum.
        </Typography>
        <Typography className="vernacular">
          Pelos rogos e merecimentos da bem-aventurada Virgem Maria, e de todos os Santos, nos
          conduza o Senhor ao reino dos céus.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Jube, Domine, benedicere.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Dai-me, Senhor, a vossa bênção.
        </Typography>
      </Language>

      <H2 text="Bênção" />

      <Language>
        <Typography className="latin">Nos cum prole pia benedicat Virgo Maria.</Typography>
        <Typography className="vernacular">
          Nos abençoe a Virgem Maria com seu piíssimo Filho.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Tabs>
        <TabItem label="Depois da Natal">
          <H2 text="Lição 1" />

          <Typography className="em">Ecl. 24, 11-13</Typography>

          <Language>
            <Typography className="latin">
              In omnibus requiem quæsivi, et in hereditate Domini morabor. Tunc præcepit, et dixit
              mihi Creator omnium: et qui creavit me, requievit in tabernaculo meo. Et dixit mihi:
              In Jacob inhabita, et in Israël hereditare, et in electis meis mitte radices.
            </Typography>
            <Typography className="vernacular">
              Em todas as coisas procurei descanso, e na herança do Senhor farei morada. Então
              ordenou, e me disse o Criador de tudo; e O que me criou descansou no meu Tabernáculo,
              e disse-me: Tem a tua morada em Jacob, e a tua herança em Israel, e nos meus
              escolhidos lança raízes.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Tu autem, Dómine, miserére nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>E Vós, Senhor, tende misericórdia de
              nós.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Sancta et immaculáta virginitas,
              quibus te laudibus efferam nescio: Quia quem cæli cápere non póterant, tuo gremio
              contulísti.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Santa e imaculada Virgindade, não
              sei com que louvores possa exaltar-vos. Porque encerrastes no vosso seio Aquele a quem
              os céus não podiam abranger.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Benedicta tu in muliéribus, et
              benedíctus fructus ventris tui.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Bendita sois vós entre as mulheres e
              bendito é o fruto do vosso ventre.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Quia quem cæli cápere non póterant,
              tuo gremio contulisti.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Porque encerrastes no vosso seio
              Aquele a quem os céus não podiam abranger.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Iube domne benedicere.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Dai-me, Senhor, a vossa bênção.
            </Typography>
            <Typography className="latin">
              Ipsa Virgo Vírginum intercédat pro nobis ad Dóminum.
            </Typography>
            <Typography className="vernacular">
              A mesma Virgem das virgens interceda por nós ao Senhor.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>

          <H2 text="Lição 2" />

          <Typography className="em">Ecl. 24, 15-16</Typography>

          <Language>
            <Typography className="latin">
              Et sic in Sion firmata sum, et in civitate sanctificata similiter requievi, et in
              Ierúsalem potestas mea. Et radicavi in populo honorificato, et in parte Dei mei
              hereditas illius, et in plenitudine sanctorum detentio mea.
            </Typography>
            <Typography className="vernacular">
              E desta maneira estou fundada em Sião, e semelhantemente repousei na cidade
              santificada; e em Jerusalém é o meu poder. E lancei raízes no povo honorificado, e na
              parte do meu Deus, herança sua, e na congregação dos santos fiz a minha morada.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Tu autem, Dómine, miserére nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>E Vós, Senhor, tende misericórdia de
              nós.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Demos graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Beata es, Virgo Maria, quæ Dominum
              portasti, Creatorem mundi: Genuisti qui te fecit, et in æternum permanes Virgo.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Bem-aventurada sois, ó Virgem
              Maria, que trouxestes no vosso ventre o Criador do mundo. Gerastes o que vos deu o
              ser, e ficastes para sempre Virgem.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Ave Maria, gratia plena, Dominus
              tecum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Ave Maria, cheia de graça, o Senhor
              é convosco.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Genuisti qui te fecit, et in
              æternum permanes Virgo.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Gerastes O que vos deu o ser, e
              ficastes para sempre Virgem.
            </Typography>
          </Language>

          <Typography className="aside">
            Quando o Te Deum é dito depois da Terceira Lição, adiciona-se o seguinte no fim do
            Responsório:
          </Typography>

          <Language>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et Spirítui
              Sancto.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Glória ao Pai e ao Filho e ao
              Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Genuisti qui te fecit, et in
              æternum permanes Virgo.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Gerastes O que vos deu o ser, e
              ficastes para sempre Virgem.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Iube domne benedicere.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Dai-me, Senhor, a vossa bênção.
            </Typography>
          </Language>

          <H2 text="Bênção" />

          <Language>
            <Typography className="latin">
              Per Vírginem matrem concédat nobis Dóminus salútem et pacem.
            </Typography>
            <Typography className="vernacular">
              Pela Virgem Maria, nos conceda o Senhor a paz e a salvação.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>

          <H2 text="Lição 3" />

          <Typography className="em">Ecl. 24, 17-20</Typography>

          <Language>
            <Typography className="latin">
              Quasi cedrus exaltata sum in Libano, et quasi cypressus in monte Sion: Quasi palma
              exaltata sum in Cades, et quasi plantatio rosæ in Iericho: Quasi oliva speciosa in
              campis, et quasi platanus exaltata sum iuxta aquam in plateis. Sicut cinnamomum et
              balsamum aromatizans odorem dedi; quasi myrrha electa dedi suavitatem odoris:
            </Typography>
            <Typography className="vernacular">
              Exaltada sou, qual cedro no Líbano, e qual cipreste no monte Sião. Exaltada sou, qual
              palma em Cades e como as rosas em Jericó. Qual especial oliveira nos campos, e qual
              plátano, sou exaltada junto da água nas praças. Assim como o cinamomo e o bálsamo, que
              difundem cheiro, dei eu fragrância; como a mirra, dei cheiro de suavidade.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Tu autem, Dómine, miserére nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>E Vós, Senhor, tende misericórdia de
              nós.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Demos graças a Deus.
            </Typography>
          </Language>

          <Typography className="aside">
            O Te Deum não é dito no Advento, ou da Septuagésima até à Páscoa, excluindo as Festas de
            Nossa Senhora. O seguinte Responsório é dito quando o Te Deum é omitido:
          </Typography>

          <Language>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Felix namque es, sacra Virgo Maria,
              et omni laude dignissima: Quia ex te ortus est sol justitiæ, Christus Deus noster.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Ditosa sois, ó sagrada Virgem
              Maria, e digníssima de todo o louvor. Porque de vós nasceu o sol de justiça, Jesus
              Cristo nosso Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Ora pro populo, interveni pro clero,
              intercede pro devoto femineo sexu: sentiant omnes tuum juvamen, quicumque celebrant
              tuam sanctam commemorationem.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Rogai pelo povo, intercedei pelo
              clero, advogai pelo devoto sexo feminino; experimentem o vosso patrocínio os que
              celebram a vossa santa memória. Porque de vós nasceu o Sol de justiça, Jesus Cristo,
              nosso Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Quia ex te ortus est sol justitiæ.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Porque de ti nasceu o Sol de
              justiça.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et Spirítui
              Sancto.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Glória ao Pai e ao Filho e ao
              Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Christus Deus noster.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Jesus Cristo, nosso Deus.
            </Typography>
          </Language>
        </TabItem>

        <TabItem label="No Advento">
          <H2 text="Lição 1" />

          <Typography className="em">Lc. 1, 26-28</Typography>

          <Language>
            <Typography className="latin">
              Missus est Angelus Gabriel a Deo in civitatem Galilææ, cui nomen Nazareth, ad virginem
              desponsatam viro, cui nomen erat Joseph, de domo David: et nomen virginis Maria. Et
              ingressus Angelus ad eam dixit: Ave gratia plena: Dominus tecum: benedicta tu in
              mulieribus.
            </Typography>
            <Typography className="vernacular">
              O Anjo Gabriel foi mandado por Deus à cidade de Galileia chamada Nazaré, a uma virgem
              denominada Maria, desposada com um varão cujo nome era José, da casa de David. E
              entrando o Anjo onde ela estava, lhe disse: Deus vos salve, ó cheia de graça, o Senhor
              é convosco; bendita sois vós entre as mulheres.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Tu autem, Dómine, miserére nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>E vós, Senhor, tende misericórdia de
              nós.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Demos graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Missus est Gabriel Angelus ad
              Maríam Vírginem desponsatam Joseph, nuntians ei verbum; et expavescit Virgo de lúmine:
              ne timeas, María, invenísti grátiam apud Dóminum: Ecce concipies et paries, et
              vocábitur Altíssimi Fílius.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> O Anjo Gabriel foi enviado a Maria
              Virgem, desposada com José, para lhe anunciar o verbo; e a Virgem assustou-se com o
              esplendor da sua luz. Não temas, Maria, que achaste graça para com o Senhor.
              Conceberás, e darás à luz um filho que será chamado o filho do Altíssimo.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Dabit ei Dóminus Deus sedem David,
              patris ejus, et regnábit in domo Jacob in ætérnum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>O Senhor Deus lhe dará o trono de
              David seu Pai, e reinará eternamente na casa de Jacob.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Ecce concipies et paries, et
              vocábitur Altíssimi Fílius.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Conceberás, e darás á luz um filho
              que será chamado o Filho do Altíssimo.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Iube domne benedicere.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Dai-me, ó Senhor, a vossa bênção.
            </Typography>
            <Typography className="latin">
              Ipsa Virgo Vírginum intercédat pro nobis ad Dóminum.
            </Typography>
            <Typography className="vernacular">
              A mesma Virgem das virgens interceda por nós ao Senhor.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>

          <H2 text="Lição 2" />

          <Typography className="em">Lc. 1, 29-33</Typography>

          <Language>
            <Typography className="latin">
              Quæ cum audisset, turbata est in sermone ejus, et cogitabat qualis esset ista
              salutatio. Et ait Angelus ei: Ne timeas, Maria: invenisti enim gratiam apud Deum: ecce
              concipies in utero, et paries filium, et vocabis nomen ejus Jesum: hic erit magnus, et
              Filius Altissimi vocabitur, et dabit illi Dominus Deus sedem David patris ejus: et
              regnabit in domo Jacob in æternum, et regni ejus non erit finis.
            </Typography>
            <Typography className="vernacular">
              Ouvindo ela estas palavras, perturbou-se pelo que se lhe dizia; e considerava que
              saudação seria. Então o Anjo disse-lhe: Não temas, Maria, porque achaste graça para
              com Deus. Conceberás no teu ventre, e darás à luz um filho a quem darás o nome de
              Jesus. Este será grande e se chamará Filho do Altíssimo, e o Senhor Deus lhe dará o
              trono de David seu Pai, e reinará eternamente na casa de Jacob, e o seu Reino não terá
              fim.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Tu autem, Dómine, miserére nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>E vós, Senhor, tende misericórdia de
              nós.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Demos graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Ave, María, grátia plena; Dóminus
              tecum: Spíritus Sanctus supervéniet in te, et virtus Altíssimi obumbrábit tibi: quod
              enim ex te nascétur Sanctum, vocábitur Fílius Dei.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Ave, Maria, cheia de graça; o
              Senhor é convosco. Virá sobre vós o Espírito Santo e a virtude do Altíssimo vos fará
              sombra: por isso o santo que nascerá de vós será chamado Filho de Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Quómodo fiet istud, quóniam virum
              non cognósco? Et respóndens Angelus, dixit ei.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Como se fará isto, pois não conheço
              varão? E respondendo o Anjo, lhe disse:
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Spíritus Sanctus supervéniet in te,
              et virtus Altíssimi obumbrábit tibi: quod enim ex te nascétur Sanctum, vocábitur
              Fílius Dei.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Virá sobre vós o Espírito Santo, e
              a virtude do Altíssimo vos fará sombra; por isso o santo que nascerá de vós será
              chamado Filho de Deus.
            </Typography>
          </Language>

          <Typography className="aside">
            Quando o Te Deum é dito depois da Terceira Lição, adiciona-se o seguinte no fim do
            Responsório:
          </Typography>

          <Language>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et Spirítui
              Sancto.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Glória ao Pai e ao Filho e ao
              Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Spíritus Sanctus supervéniet in te,
              et virtus Altíssimi obumbrábit tibi: quod enim ex te nascétur Sanctum, vocábitur
              Fílius Dei.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Virá sobre vós o Espírito Santo, e
              a virtude do Altíssimo vos fará sombra; por isso o santo que nascerá de vós será
              chamado Filho de Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Iube domne benedicere.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Dai-me, Senhor, a vossa bênção.
            </Typography>
          </Language>

          <H2 text="Bênção" />

          <Language>
            <Typography className="latin">
              Per Vírginem Matrem concédat nobis Dóminus salútem et pacem.
            </Typography>
            <Typography className="vernacular">
              Pela Virgem Maria, nos conceda o Senhor a paz e a salvação.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>

          <H2 text="Lição 3" />

          <Typography className="em">Lc. 1, 34-38</Typography>

          <Language>
            <Typography className="latin">
              Dixit autem Maria ad Angelum: Quomodo fiet istud, quoniam virum non cognosco? Et
              respondens Angelus dixit ei: Spiritus Sanctus superveniet in te, et virtus Altissimi
              obumbrabit tibi. Ideoque et quod nascetur ex te Sanctum, vocabitur Filius Dei. Et ecce
              Elisabeth cognata tua, et ipsa concepit filium in senectute sua: et hic mensis sextus
              est illi, quæ vocatur sterilis: quia non erit impossibile apud Deum omne verbum. Dixit
              autem Maria: Ecce ancilla Domini: fiat mihi secundum verbum tuum.
            </Typography>
            <Typography className="vernacular">
              Disse então Maria ao Anjo: Como se fará isto, por quando não conheço varão? E
              respondendo o Anjo, lhe disse: Virá sobre vós o Espírito Santo, e a virtude do
              Altíssimo vos fará sombra; e por isso o santo que nascerá de vós se chamará Filho de
              Deus. E também Isabel, vossa parenta, que é chamada estéril, concebeu um filho na sua
              velhice, está já no sexto mês; porque a Deus nada é impossível. Disse então Maria: Eis
              aqui a escrava do Senhor, faça-se em mim segundo a vossa palavra.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Tu autem, Dómine, miserére nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>E vós, Senhor, tende misericórdia de
              nós.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Demos graças a Deus.
            </Typography>
          </Language>

          <Typography className="aside">
            O Te Deum não é dito no Advento, excluindo as Festas de Nossa Senhora. O seguinte
            Responsório é dito quando o Te Deum é omitido:
          </Typography>

          <Language>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Súscipe verbum, Virgo María, quod
              tibi a Dómino per Angelum transmíssum est: concípies et páries Deum páriter et
              hóminem, ut benedícta dicáris inter omnes mulíeres.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Recebei, Maria Virgem, a palavra
              que Senhor vos transmite pelo seu Anjo. Concebereis, e dareis à luz a Deus e Homem
              juntamente: pelo que sereis chamada Bendita entre todas as mulheres.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Paries quidem fílium, et
              virginitátis non patiéris detriméntum: efficiéris grávida, et eris mater semper
              intácta.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Dareis à luz um filho, e ficareis
              sempre Virgem. Concebereis e ficareis mãe, continuareis sempre pura e imaculada.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Ut benedícta dicáris inter omnes
              mulíeres.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Pelo que sereis chamada Bendita
              entre todas as mulheres.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et Spirítui
              Sancto.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Glória ao Pai e ao Filho e ao
              Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Ut benedícta dicáris inter omnes
              mulíeres.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Pelo que sereis chamada Bendita
              entre todas as mulheres.
            </Typography>
          </Language>
        </TabItem>
      </Tabs>

      <TeDeum />

      <Typography className="aside">
        As Matinas acabam depois do Terceiro Responsório ou do Te Deum, porque é usual depois das
        Matinas passar-se directamente para as Laudes. No entanto, se não continuar para as Laudes
        diz:
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Domine, exaudi orationem meam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Ouvi, Senhor, a minha oração.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et clamor meus ad te veniat.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E o meu clamor chegue até Vós.
        </Typography>
      </Language>

      <Language>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Deus, cujus misericórdiæ non est númerus et bonitátis infinítus est thesáurus, piíssmimæ
          majestáti tuæ pro collátis donis grátias ágimus, tuam semper cleméntiam exorántes, ut qui
          peténtibus postuláta concédis, eósdem non déserens, ad prǽmia futúra dispónas. Per
          Christum Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          Ó Deus, cuja misericórdia é infinita e cuja bondade é um tesouro inesgotável, dignai-Vos
          aceitar as graças que rendemos à vossa clemência pelos benefícios que nos concedestes; e
          Vos pedimos que, atendendo benignamente às orações dos vossos suplicantes, não fiquem
          abandonados e possam alcançar as recompensas futuras. Por Cristo, nosso Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Domine, exaudi orationem meam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Ouvi, Senhor, a minha oração.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et clamor meus ad te veniat.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E o meu clamor chegue até Vós.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Benedicamus Domino.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Bendigamos o Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Deo gratias.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Graças a Deus.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Fidelium animæ per misericordiam Dei,
          requiescant in pace.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>E que as almas dos fiéis, pela
          misericórdia de Deus, descansem em paz.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>

      <Typography className="aside">
        Acabar com uma{" "}
        <Link className="link" href="/devocionario/antifonas">
          Antífona de Nossa Senhora
        </Link>{" "}
        .
      </Typography>
    </PageWrapper>
  );
}
