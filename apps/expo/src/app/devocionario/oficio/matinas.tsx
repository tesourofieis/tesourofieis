"use dom";
import "../../../global.css";

import { Link } from "expo-router";
import React from "react";
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

export default function PageMatinas() {
  return (
    <div className="docs">
      <h1>Matinas</h1>

      <aside>
        Meditemos no nascimento do Salvador, no monte das oliveiras, na sua
        agonia e nas cordas com que o amarraram.
      </aside>

      <div className="side-by-side">
        <p>
          ℣. Domine, <span className="cross text-red-500">✠</span> labia mea
          aperies.
        </p>
        <p>
          ℣. Abri, Senhor, <span className="cross text-red-500">✠</span> os meus
          lábios.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Et os meum annuntiabit laudem
          tuam.
        </p>
        <p>
          <span className="text-red-500">℟.</span> E a minha boca anunciará o
          vosso louvor.
        </p>
        <p>
          ℣. Deus <span className="cross text-red-500">✠</span> in adjutórium
          meum inténde.
        </p>
        <p>
          ℣. Deus, <span className="cross text-red-500">✠</span> vinde em meu
          auxílio.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Dómine, ad adjuvándum me
          festína.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Senhor, apressai-Vos em
          socorrer-me.
        </p>
        <p>℣. Glória Patri, et Fílio, et Spíritui Sancto.</p>
        <p>℣. Glória ao Pai, e ao Filho e ao Espírito Santo.</p>
        <p>
          <span className="text-red-500">℟.</span> Sicut erat in pricípio, et
          nunc, et semper, et in sǽcula sæculórum. Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Assim como era no princípio,
          agora e sempre, e por todos os séculos dos séculos. Amen.
        </p>
      </div>

      <aside>
        Desde o Sábado antes do Domingo da Septuagésima até às vésperas do
        Sábado Santo, em vez de Allelúja, é dito:
      </aside>

      <div className="side-by-side">
        <p>Laus tibi, Domine, Rex æternæ gloriæ.</p>
        <p>Louvado sejais, ó Senhor, Rei da glória eterna.</p>
      </div>

      <h2>Invitatório</h2>

      <div className="side-by-side">
        <p>Ave Maria, gratia plena, Dominus tecum.</p>
        <p>Ave, Maria, cheia de graça, o Senhor é convosco.</p>
      </div>

      <h2>Salmo 94</h2>

      <Salmo94 />

      <div className="side-by-side">
        <p>Veníte, exsultémus Dómino: * jubilémus Deo salutári nostro:</p>
        <p>
          Vinde, exultemos no Senhor: * cantemos alegres a de Deus nosso
          salvador:
        </p>
        <p>
          Præoccupémus fáciem ejus in confessióne: * et in psalmis jubilémus ei.
        </p>
        <p>
          Apresentemo-nos diante d’Ele em acção de graças: * e celebremo-l’O com
          salmos.
        </p>
        <p>Ave Maria, gratia plena, Dominus tecum.</p>
        <p>Ave, Maria, cheia de graça, o Senhor é convosco.</p>
        <p>Quóniam Deus magnus Dóminus: * et Rex magnus super omnes deos.</p>
        <p>
          Porque o Senhor é o Deus grande: * e o Rei grande sobre todos os
          deuses.
        </p>
        <p>
          Quia in manu ejus sunt omnes fines terræ: * et altitúdines móntium
          ipsíus sunt.
        </p>
        <p>
          Pois na sua mão estão todos os confins da terra: * e as alturas dos
          montes são suas.
        </p>
        <p>Dominus tecum.</p>
        <p>O Senhor é convosco.</p>
        <p>
          Quóniam ipsíus est mare, et ipse fecit illud: * et siccam manus ejus
          formavérunt.
        </p>
        <p>Seu é o mar e Ele o fez: * e as suas mãos formaram a terra árida.</p>
        <p>
          Veníte, adorémus, et procidámus, * et plorémus ante Dóminum qui fecit
          nos.
        </p>
        <p>
          Vinde, adoremos e prostremo-nos, * e choremos diante do Senhor que nos
          criou.
        </p>
        <p>
          Quia ipse est Dóminus Deus noster, * et nos pópulus páscuæ ejus, et
          oves manus ejus.
        </p>
        <p>
          Pois Ele é o Senhor nosso Deus, * e nós somos o povo do seu pasto e as
          ovelhas da sua manada.
        </p>
        <p>Ave Maria, gratia plena, Dominus tecum.</p>
        <p>Ave, Maria, cheia de graça, o Senhor é convosco.</p>
        <p>Hódie si vocem ejus audiéritis, * nolíte obduráre corda vestra:</p>
        <p>Se hoje ouvirdes a sua voz, * não endureceis os vossos corações:</p>
        <p>
          Sicut in irritatióne secúndum diem tentatiónis in desérto: * ubi
          tentavérunt me patres vestri, probavérunt me, et vidérunt ópera mea.
        </p>
        <p>
          Como quando me provocaram à ira, no dia da tentação no deserto: * onde
          vossos pais me tentaram, me testaram e viram as minhas obras.
        </p>
        <p>Dominus tecum.</p>
        <p>O Senhor é convosco.</p>
        <p>
          Quadragínta annis offénsus fui generatióni illi, * et dixi: semper hi
          errant corde.
        </p>
        <p>
          Quarenta anos estive irritado contra esta geração, * e disse: é um
          povo de coração errante.
        </p>
        <p>
          Et isti non cognovérunt vias meas, ut jurávi in ira mea: * Si
          introíbunt in réquiem meam.
        </p>
        <p>
          Eles não conheceram os meus caminhos, pelo que jurei na minha ira: *
          no meu repouso não entrarão.
        </p>
        <p>Ave Maria, gratia plena, Dominus tecum.</p>
        <p>Ave, Maria, cheia de graça, o Senhor é convosco.</p>
        <p>
          Gloria Patri, et Filio, et Spiritui sancto: Sicut erat in principio,
          et nunc, et semper, et in sæcula sæculorum. Amen.
        </p>
        <p>
          Glória ao Pai, e ao Filho e ao Espírito Santo. Assim como era no
          princípio, agora e sempre, e por todos os séculos dos séculos. Amen.
        </p>
        <p>Dominus tecum.</p>
        <p>O Senhor é convosco.</p>
        <p>Ave Maria, gratia plena, Dominus tecum.</p>
        <p>Ave, Maria, cheia de graça, o Senhor é convosco.</p>
      </div>

      <h2>Hino Quem terra</h2>

      <QuemTerra />

      <Tabs>
        <TabItem label="Domingo, Segunda e Quinta feira">
          <h2>Primeiro Nocturno</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Benedicta tu in mulieribus, et benedictus fructus
              ventris tui.
            </p>
            <p>
              <em>Ant.</em> Bendita sois vós entre as mulheres, e bendito é o
              fruto do vosso ventre.
            </p>
          </div>

          <h2>Salmo 8</h2>

          <Salmo8 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Benedicta tu in mulieribus, et benedictus fructus
              ventris tui.
            </p>
            <p>
              <em>Ant.</em> Bendita sois vós entre as mulheres, e bendito é o
              fruto do vosso ventre.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Sicut myrrha electa, odorem dedisti suavitatis,
              sancta Dei Genitrix.
            </p>
            <p>
              <em>Ant.</em> Como a preciosa mirra, exalastes suavíssima
              fragrância, ó santa Mãe de Deus.
            </p>
          </div>

          <h2>Salmo 18</h2>

          <Salmo18 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Sicut myrrha electa, odorem dedisti suavitatis,
              sancta Dei Genitrix.
            </p>
            <p>
              <em>Ant.</em> Como a preciosa mirra, exalastes suavíssima
              fragrância, ó santa Mãe de Deus.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ante torum hujus Virginis frequentate nobis dulcia
              cantica dramatis.
            </p>
            <p>
              <em>Ant.</em> Multiplicai-nos doces cânticos ante o precioso leito
              desta Virgem.
            </p>
          </div>

          <h2>Salmo 23</h2>

          <Salmo23 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ante torum hujus Virginis frequentate nobis dulcia
              cantica span.
            </p>
            <p>
              <em>Ant.</em> Multiplicai-nos doces cânticos ante o precioso leito
              desta Virgem.
            </p>
          </div>
        </TabItem>
        <TabItem label="Terça e Sexta feira">
          <h2>Segundo Nocturno</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Specie tua et pulchritudine tua intende, prospere
              procede, et regna.
            </p>
            <p>
              <em>Ant.</em> Ornada de glória e de formosura, caminhai
              prosperamente e reinai.
            </p>
          </div>

          <h2>Salmo 44</h2>

          <Salmo44 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Specie tua et pulchritudine tua intende, prospere
              procede, et regna.
            </p>
            <p>
              <em>Ant.</em> Ornada de glória e de formosura, caminhai
              prosperamente e reinai.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Adjuvabit eam Deus vultu suo: Deus in medio ejus,
              non commovebitur.
            </p>
            <p>
              <em>Ant.</em> Ajudou-a Deus com seu favorável aspecto; e como Deus
              assiste no meio dela, não se verá perturbada.
            </p>
          </div>

          <h2>Salmo 45</h2>

          <Salmo45 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Adjuvabit eam Deus vultu suo: Deus in medio ejus,
              non commovebitur.
            </p>
            <p>
              <em>Ant.</em> Ajudou-a Deus com seu favorável aspecto; e como Deus
              assiste no meio dela, não se verá perturbada.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Sicut lætantium omnium nostrum habitatio est in te,
              sancta Dei Genitrix.
            </p>
            <p>
              <em>Ant.</em> Santa Mãe de Deus, todos nossos que por amor habitam
              convosco estão cheios de alegria.
            </p>
          </div>

          <h2>Salmo 86</h2>

          <Salmo86 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Sicut lætantium omnium nostrum habitatio est in te,
              sancta Dei Genitrix.
            </p>
            <p>
              <em>Ant.</em> Santa Mãe de Deus, todos nossos que por amor habitam
              convosco estão cheios de alegria.
            </p>
          </div>
        </TabItem>

        <TabItem label="Quarta-feira e Sábado">
          <h2>Terceiro Nocturno</h2>

          <Tabs>
            <TabItem label="Depois da Purificação">
              <div className="side-by-side">
                <p>
                  <em>Ant.</em> Gaude, Maria Virgo: cunctas hæreses sola
                  intermenisti in universo mundo.
                </p>
                <p>
                  <em>Ant.</em> Alegrai-vos, Virgem Maria: porque só vós haveis
                  destruído todas as heresias em todo o mundo.
                </p>
              </div>
            </TabItem>

            <TabItem label="No Advento">
              <div className="side-by-side">
                <p>
                  <em>Ant.</em> Angelus Domini nuntiavit Mariæ, et concepit de
                  Spiritu Sancto, (Allelúja)
                </p>
                <p>
                  <em>Ant.</em> O Anjo do Senhor anunciou a Maria, e ela
                  concebeu do Espírito Santo.
                </p>
              </div>
            </TabItem>
          </Tabs>

          <h2>Salmo 95</h2>

          <Salmo95 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Gaude, Maria Virgo: cunctas hæreses sola
              intermenisti in universo mundo.
            </p>
            <p>
              <em>Ant.</em> Alegrai-vos, Virgem Maria: porque só vós haveis
              destruído todas as heresias em todo o mundo.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Dignare me laudare te, Virgo sacrata: da mihi
              virtutem contra hostes tuos.
            </p>
            <p>
              <em>Ant.</em> Dignai-vos, sagrada Virgem, de que eu vos louve;
              dai-me esforço contra vossos inimigos.
            </p>
          </div>

          <h2>Salmo 96</h2>

          <Salmo96 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Dignare me laudare te, Virgo sacrata: da mihi
              virtutem contra hostes tuos.
            </p>
            <p>
              <em>Ant.</em> Dignai-vos, sagrada Virgem, de que eu vos louve;
              dai-me esforço contra vossos inimigos.
            </p>
          </div>

          <Tabs>
            <TabItem label="Depois da Purificação">
              <div className="side-by-side">
                <p>
                  <em>Ant.</em> Post partum virgo inviolata permansisti: Dei
                  Genitrix, intercede pro nobis.
                </p>
                <p>
                  <em>Ant.</em> Depois do parto permanecestes virgem imaculada;
                  Mãe de Deus, intercedei por nós.
                </p>
              </div>
            </TabItem>

            <TabItem label="No Advento">
              <div className="side-by-side">
                <p>
                  <em>Ant.</em> Angelus Domini nuntiavit Mariæ, et concepit de
                  Spiritu Sancto, (Allelúja)
                </p>
                <p>
                  <em>Ant.</em> O Anjo do Senhor anunciou a Maria, e ela
                  concebeu do Espírito Santo.
                </p>
              </div>
            </TabItem>
          </Tabs>

          <h2>Salmo 97</h2>

          <Salmo97 />

          <Tabs>
            <TabItem label="Depois da Purificação">
              <div className="side-by-side">
                <p>
                  <em>Ant.</em> Post partum virgo inviolata permansisti: Dei
                  Genitrix, intercede pro nobis.
                </p>
                <p>
                  <em>Ant.</em> Depois do parto permanecestes virgem imaculada;
                  Mãe de Deus, intercedei por nós.
                </p>
              </div>
            </TabItem>

            <TabItem label="No Advento">
              <div className="side-by-side">
                <p>
                  <em>Ant.</em> Angelus Domini nuntiavit Mariæ, et concepit de
                  Spiritu Sancto, (Allelúja)
                </p>
                <p>
                  <em>Ant.</em> O Anjo do Senhor anunciou a Maria, e ela
                  concebeu do Espírito Santo.
                </p>
              </div>
            </TabItem>
          </Tabs>
        </TabItem>
      </Tabs>

      <h2>Versículo</h2>

      <div className="side-by-side">
        <p>℣. Diffusa est gratia in labiis tuis.</p>
        <p>℣. Estão cheios de graça vossos lábios.</p>
        <p>
          <span className="text-red-500">℟.</span> Propterea benedixit te Deum
          in æternum.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Por isso Deus vos abençoou
          para sempre.
        </p>
        <p>Pater Noster (secreto usque ad).</p>
        <p>Pai Nosso (em silêncio).</p>
        <p>℣. Et ne nos inducas in tentationem.</p>
        <p>℣. E nos não deixeis cair em tentação.</p>
        <p>
          <span className="text-red-500">℟.</span> Sed libera nos a malo.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Mas livrai-nos do mal.
        </p>
      </div>

      <h2>Absolvição</h2>

      <div className="side-by-side">
        <p>
          Precibus et meritis beatæ Mariæ semper Virginis, et omnium Sanctorum,
          perducat nos Dominus ad regna cælorum.
        </p>
        <p>
          Pelos rogos e merecimentos da bem-aventurada Virgem Maria, e de todos
          os Santos, nos conduza o Senhor ao reino dos céus.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>℣. Jube, Domine, benedicere.</p>
        <p>℣. Dai-me, Senhor, a vossa bênção.</p>
      </div>

      <h2>Bênção</h2>

      <div className="side-by-side">
        <p>Nos cum prole pia benedicat Virgo Maria.</p>
        <p>Nos abençoe a Virgem Maria com seu piíssimo Filho.</p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>

      <Tabs>
        <TabItem label="Depois da Natal">
          <h2>Lição 1</h2>

          <em>Ecl. 24, 11-13</em>

          <div className="side-by-side">
            <p>
              In omnibus requiem quæsivi, et in hereditate Domini morabor. Tunc
              præcepit, et dixit mihi Creator omnium: et qui creavit me,
              requievit in tabernaculo meo. Et dixit mihi: In Jacob inhabita, et
              in Israël hereditare, et in electis meis mitte radices.
            </p>
            <p>
              Em todas as coisas procurei descanso, e na herança do Senhor farei
              morada. Então ordenou, e me disse o Criador de tudo; e O que me
              criou descansou no meu Tabernáculo, e disse-me: Tem a tua morada
              em Jacob, e a tua herança em Israel, e nos meus escolhidos lança
              raízes.
            </p>
            <p>℣. Tu autem, Dómine, miserére nobis.</p>
            <p>℣. E Vós, Senhor, tende misericórdia de nós.</p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Sancta et immaculáta
              virginitas, quibus te laudibus efferam nescio: Quia quem cæli
              cápere non póterant, tuo gremio contulísti.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Santa e imaculada
              Virgindade, não sei com que louvores possa exaltar-vos. Porque
              encerrastes no vosso seio Aquele a quem os céus não podiam
              abranger.
            </p>
            <p>
              ℣. Benedicta tu in muliéribus, et benedíctus fructus ventris tui.
            </p>
            <p>
              ℣. Bendita sois vós entre as mulheres e bendito é o fruto do vosso
              ventre.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Quia quem cæli cápere non
              póterant, tuo gremio contulisti.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Porque encerrastes no
              vosso seio Aquele a quem os céus não podiam abranger.
            </p>
            <p>℣. Iube domne benedicere.</p>
            <p>℣. Dai-me, Senhor, a vossa bênção.</p>
            <p>Ipsa Virgo Vírginum intercédat pro nobis ad Dóminum.</p>
            <p>A mesma Virgem das virgens interceda por nós ao Senhor.</p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>

          <h2>Lição 2</h2>

          <em>Ecl. 24, 15-16</em>

          <div className="side-by-side">
            <p>
              Et sic in Sion firmata sum, et in civitate sanctificata similiter
              requievi, et in Ierúsalem potestas mea. Et radicavi in populo
              honorificato, et in parte Dei mei hereditas illius, et in
              plenitudine sanctorum detentio mea.
            </p>
            <p>
              E desta maneira estou fundada em Sião, e semelhantemente repousei
              na cidade santificada; e em Jerusalém é o meu poder. E lancei
              raízes no povo honorificado, e na parte do meu Deus, herança sua,
              e na congregação dos santos fiz a minha morada.
            </p>
            <p>℣. Tu autem, Dómine, miserére nobis.</p>
            <p>℣. E Vós, Senhor, tende misericórdia de nós.</p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Demos graças a Deus.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Beata es, Virgo Maria,
              quæ Dominum portasti, Creatorem mundi: Genuisti qui te fecit, et
              in æternum permanes Virgo.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Bem-aventurada sois, ó
              Virgem Maria, que trouxestes no vosso ventre o Criador do mundo.
              Gerastes o que vos deu o ser, e ficastes para sempre Virgem.
            </p>
            <p>℣. Ave Maria, gratia plena, Dominus tecum.</p>
            <p>℣. Ave Maria, cheia de graça, o Senhor é convosco.</p>
            <p>
              <span className="text-red-500">℟.</span> Genuisti qui te fecit, et
              in æternum permanes Virgo.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Gerastes O que vos deu o
              ser, e ficastes para sempre Virgem.
            </p>
          </div>

          <aside>
            Quando o Te Deum é dito depois da Terceira Lição, adiciona-se o
            seguinte no fim do Responsório:
          </aside>

          <div className="side-by-side">
            <p>℣. Glória Patri, et Fílio, et Spirítui Sancto.</p>
            <p>℣. Glória ao Pai e ao Filho e ao Espírito Santo.</p>
            <p>
              <span className="text-red-500">℟.</span> Genuisti qui te fecit, et
              in æternum permanes Virgo.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Gerastes O que vos deu o
              ser, e ficastes para sempre Virgem.
            </p>
            <p>℣. Iube domne benedicere.</p>
            <p>℣. Dai-me, Senhor, a vossa bênção.</p>
          </div>

          <h2>Bênção</h2>

          <div className="side-by-side">
            <p>Per Vírginem matrem concédat nobis Dóminus salútem et pacem.</p>
            <p>Pela Virgem Maria, nos conceda o Senhor a paz e a salvação.</p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>

          <h2>Lição 3</h2>

          <em>Ecl. 24, 17-20</em>

          <div className="side-by-side">
            <p>
              Quasi cedrus exaltata sum in Libano, et quasi cypressus in monte
              Sion: Quasi palma exaltata sum in Cades, et quasi plantatio rosæ
              in Iericho: Quasi oliva speciosa in campis, et quasi platanus
              exaltata sum iuxta aquam in plateis. Sicut cinnamomum et balsamum
              aromatizans odorem dedi; quasi myrrha electa dedi suavitatem
              odoris:
            </p>
            <p>
              Exaltada sou, qual cedro no Líbano, e qual cipreste no monte Sião.
              Exaltada sou, qual palma em Cades e como as rosas em Jericó. Qual
              especial oliveira nos campos, e qual plátano, sou exaltada junto
              da água nas praças. Assim como o cinamomo e o bálsamo, que
              difundem cheiro, dei eu fragrância; como a mirra, dei cheiro de
              suavidade.
            </p>
            <p>℣. Tu autem, Dómine, miserére nobis.</p>
            <p>℣. E Vós, Senhor, tende misericórdia de nós.</p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Demos graças a Deus.
            </p>
          </div>

          <aside>
            O Te Deum não é dito no Advento, ou da Septuagésima até à Páscoa,
            excluindo as Festas de Nossa Senhora. O seguinte Responsório é dito
            quando o Te Deum é omitido:
          </aside>

          <div className="side-by-side">
            <p>
              <span className="text-red-500">℟.</span> Felix namque es, sacra
              Virgo Maria, et omni laude dignissima: Quia ex te ortus est sol
              justitiæ, Christus Deus noster.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Ditosa sois, ó sagrada
              Virgem Maria, e digníssima de todo o louvor. Porque de vós nasceu
              o sol de justiça, Jesus Cristo nosso Deus.
            </p>
            <p>
              ℣. Ora pro populo, interveni pro clero, intercede pro devoto
              femineo sexu: sentiant omnes tuum juvamen, quicumque celebrant
              tuam sanctam commemorationem.
            </p>
            <p>
              ℣. Rogai pelo povo, intercedei pelo clero, advogai pelo devoto
              sexo feminino; experimentem o vosso patrocínio os que celebram a
              vossa santa memória. Porque de vós nasceu o Sol de justiça, Jesus
              Cristo, nosso Deus.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Quia ex te ortus est sol
              justitiæ.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Porque de ti nasceu o Sol
              de justiça.
            </p>
            <p>℣. Glória Patri, et Fílio, et Spirítui Sancto.</p>
            <p>℣. Glória ao Pai e ao Filho e ao Espírito Santo.</p>
            <p>
              <span className="text-red-500">℟.</span> Christus Deus noster.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Jesus Cristo, nosso Deus.
            </p>
          </div>
        </TabItem>

        <TabItem label="No Advento">
          <h2>Lição 1</h2>

          <em>Lc. 1, 26-28</em>

          <div className="side-by-side">
            <p>
              Missus est Angelus Gabriel a Deo in civitatem Galilææ, cui nomen
              Nazareth, ad virginem desponsatam viro, cui nomen erat Joseph, de
              domo David: et nomen virginis Maria. Et ingressus Angelus ad eam
              dixit: Ave gratia plena: Dominus tecum: benedicta tu in
              mulieribus.
            </p>
            <p>
              O Anjo Gabriel foi mandado por Deus à cidade de Galileia chamada
              Nazaré, a uma virgem denominada Maria, desposada com um varão cujo
              nome era José, da casa de David. E entrando o Anjo onde ela
              estava, lhe disse: Deus vos salve, ó cheia de graça, o Senhor é
              convosco; bendita sois vós entre as mulheres.
            </p>
            <p>℣. Tu autem, Dómine, miserére nobis.</p>
            <p>℣. E vós, Senhor, tende misericórdia de nós.</p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Demos graças a Deus.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Missus est Gabriel
              Angelus ad Maríam Vírginem desponsatam Joseph, nuntians ei verbum;
              et expavescit Virgo de lúmine: ne timeas, María, invenísti grátiam
              apud Dóminum: Ecce concipies et paries, et vocábitur Altíssimi
              Fílius.
            </p>
            <p>
              <span className="text-red-500">℟.</span> O Anjo Gabriel foi
              enviado a Maria Virgem, desposada com José, para lhe anunciar o
              verbo; e a Virgem assustou-se com o esplendor da sua luz. Não
              temas, Maria, que achaste graça para com o Senhor. Conceberás, e
              darás à luz um filho que será chamado o filho do Altíssimo.
            </p>
            <p>
              ℣. Dabit ei Dóminus Deus sedem David, patris ejus, et regnábit in
              domo Jacob in ætérnum.
            </p>
            <p>
              ℣. O Senhor Deus lhe dará o trono de David seu Pai, e reinará
              eternamente na casa de Jacob.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Ecce concipies et paries,
              et vocábitur Altíssimi Fílius.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Conceberás, e darás á luz
              um filho que será chamado o Filho do Altíssimo.
            </p>
            <p>℣. Iube domne benedicere.</p>
            <p>℣. Dai-me, ó Senhor, a vossa bênção.</p>
            <p>Ipsa Virgo Vírginum intercédat pro nobis ad Dóminum.</p>
            <p>A mesma Virgem das virgens interceda por nós ao Senhor.</p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>

          <h2>Lição 2</h2>

          <em>Lc. 1, 29-33</em>

          <div className="side-by-side">
            <p>
              Quæ cum audisset, turbata est in sermone ejus, et cogitabat qualis
              esset ista salutatio. Et ait Angelus ei: Ne timeas, Maria:
              invenisti enim gratiam apud Deum: ecce concipies in utero, et
              paries filium, et vocabis nomen ejus Jesum: hic erit magnus, et
              Filius Altissimi vocabitur, et dabit illi Dominus Deus sedem David
              patris ejus: et regnabit in domo Jacob in æternum, et regni ejus
              non erit finis.
            </p>
            <p>
              Ouvindo ela estas palavras, perturbou-se pelo que se lhe dizia; e
              considerava que saudação seria. Então o Anjo disse-lhe: Não temas,
              Maria, porque achaste graça para com Deus. Conceberás no teu
              ventre, e darás à luz um filho a quem darás o nome de Jesus. Este
              será grande e se chamará Filho do Altíssimo, e o Senhor Deus lhe
              dará o trono de David seu Pai, e reinará eternamente na casa de
              Jacob, e o seu Reino não terá fim.
            </p>
            <p>℣. Tu autem, Dómine, miserére nobis.</p>
            <p>℣. E vós, Senhor, tende misericórdia de nós.</p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Demos graças a Deus.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Ave, María, grátia plena;
              Dóminus tecum: Spíritus Sanctus supervéniet in te, et virtus
              Altíssimi obumbrábit tibi: quod enim ex te nascétur Sanctum,
              vocábitur Fílius Dei.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Ave, Maria, cheia de
              graça; o Senhor é convosco. Virá sobre vós o Espírito Santo e a
              virtude do Altíssimo vos fará sombra: por isso o santo que nascerá
              de vós será chamado Filho de Deus.
            </p>
            <p>
              ℣. Quómodo fiet istud, quóniam virum non cognósco? Et respóndens
              Angelus, dixit ei.
            </p>
            <p>
              ℣. Como se fará isto, pois não conheço varão? E respondendo o
              Anjo, lhe disse:
            </p>
            <p>
              <span className="text-red-500">℟.</span> Spíritus Sanctus
              supervéniet in te, et virtus Altíssimi obumbrábit tibi: quod enim
              ex te nascétur Sanctum, vocábitur Fílius Dei.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Virá sobre vós o Espírito
              Santo, e a virtude do Altíssimo vos fará sombra; por isso o santo
              que nascerá de vós será chamado Filho de Deus.
            </p>
          </div>

          <aside>
            Quando o Te Deum é dito depois da Terceira Lição, adiciona-se o
            seguinte no fim do Responsório:
          </aside>

          <div className="side-by-side">
            <p>℣. Glória Patri, et Fílio, et Spirítui Sancto.</p>
            <p>℣. Glória ao Pai e ao Filho e ao Espírito Santo.</p>
            <p>
              <span className="text-red-500">℟.</span> Spíritus Sanctus
              supervéniet in te, et virtus Altíssimi obumbrábit tibi: quod enim
              ex te nascétur Sanctum, vocábitur Fílius Dei.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Virá sobre vós o Espírito
              Santo, e a virtude do Altíssimo vos fará sombra; por isso o santo
              que nascerá de vós será chamado Filho de Deus.
            </p>
            <p>℣. Iube domne benedicere.</p>
            <p>℣. Dai-me, Senhor, a vossa bênção.</p>
          </div>

          <h2>Bênção</h2>

          <div className="side-by-side">
            <p>Per Vírginem Matrem concédat nobis Dóminus salútem et pacem.</p>
            <p>Pela Virgem Maria, nos conceda o Senhor a paz e a salvação.</p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>

          <h2>Lição 3</h2>

          <em>Lc. 1, 34-38</em>

          <div className="side-by-side">
            <p>
              Dixit autem Maria ad Angelum: Quomodo fiet istud, quoniam virum
              non cognosco? Et respondens Angelus dixit ei: Spiritus Sanctus
              superveniet in te, et virtus Altissimi obumbrabit tibi. Ideoque et
              quod nascetur ex te Sanctum, vocabitur Filius Dei. Et ecce
              Elisabeth cognata tua, et ipsa concepit filium in senectute sua:
              et hic mensis sextus est illi, quæ vocatur sterilis: quia non erit
              impossibile apud Deum omne verbum. Dixit autem Maria: Ecce ancilla
              Domini: fiat mihi secundum verbum tuum.
            </p>
            <p>
              Disse então Maria ao Anjo: Como se fará isto, por quando não
              conheço varão? E respondendo o Anjo, lhe disse: Virá sobre vós o
              Espírito Santo, e a virtude do Altíssimo vos fará sombra; e por
              isso o santo que nascerá de vós se chamará Filho de Deus. E também
              Isabel, vossa parenta, que é chamada estéril, concebeu um filho na
              sua velhice, está já no sexto mês; porque a Deus nada é
              impossível. Disse então Maria: Eis aqui a escrava do Senhor,
              faça-se em mim segundo a vossa palavra.
            </p>
            <p>℣. Tu autem, Dómine, miserére nobis.</p>
            <p>℣. E vós, Senhor, tende misericórdia de nós.</p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Demos graças a Deus.
            </p>
          </div>

          <aside>
            O Te Deum não é dito no Advento, excluindo as Festas de Nossa
            Senhora. O seguinte Responsório é dito quando o Te Deum é omitido:
          </aside>

          <div className="side-by-side">
            <p>
              <span className="text-red-500">℟.</span> Súscipe verbum, Virgo
              María, quod tibi a Dómino per Angelum transmíssum est: concípies
              et páries Deum páriter et hóminem, ut benedícta dicáris inter
              omnes mulíeres.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Recebei, Maria Virgem, a
              palavra que Senhor vos transmite pelo seu Anjo. Concebereis, e
              dareis à luz a Deus e Homem juntamente: pelo que sereis chamada
              Bendita entre todas as mulheres.
            </p>
            <p>
              ℣. Paries quidem fílium, et virginitátis non patiéris detriméntum:
              efficiéris grávida, et eris mater semper intácta.
            </p>
            <p>
              ℣. Dareis à luz um filho, e ficareis sempre Virgem. Concebereis e
              ficareis mãe, continuareis sempre pura e imaculada.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Ut benedícta dicáris
              inter omnes mulíeres.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Pelo que sereis chamada
              Bendita entre todas as mulheres.
            </p>
            <p>℣. Glória Patri, et Fílio, et Spirítui Sancto.</p>
            <p>℣. Glória ao Pai e ao Filho e ao Espírito Santo.</p>
            <p>
              <span className="text-red-500">℟.</span> Ut benedícta dicáris
              inter omnes mulíeres.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Pelo que sereis chamada
              Bendita entre todas as mulheres.
            </p>
          </div>
        </TabItem>
      </Tabs>

      <h2>Te Deum</h2>

      <TeDeum />

      <aside>
        As Matinas acabam depois do Terceiro Responsório ou do Te Deum, porque é
        usual depois das Matinas passar-se directamente para as Laudes. No
        entanto, se não continuar para as Laudes diz:
      </aside>

      <div className="side-by-side">
        <p>℣. Domine, exaudi orationem meam.</p>
        <p>℣. Ouvi, Senhor, a minha oração.</p>
        <p>
          <span className="text-red-500">℟.</span> Et clamor meus ad te veniat.
        </p>
        <p>
          <span className="text-red-500">℟.</span> E o meu clamor chegue até
          Vós.
        </p>
      </div>

      <div className="side-by-side">
        <p>
          <span className="text-red-500 text-center">Orémus.</span>
        </p>
        <p>
          <span className="text-red-500 text-center">Oremos.</span>
        </p>
        <p>
          Deus, cujus misericórdiæ non est númerus et bonitátis infinítus est
          thesáurus, piíssmimæ majestáti tuæ pro collátis donis grátias ágimus,
          tuam semper cleméntiam exorántes, ut qui peténtibus postuláta
          concédis, eósdem non déserens, ad prǽmia futúra dispónas. Per Christum
          Dóminum nostrum.
        </p>
        <p>
          Ó Deus, cuja misericórdia é infinita e cuja bondade é um tesouro
          inesgotável, dignai-Vos aceitar as graças que rendemos à vossa
          clemência pelos benefícios que nos concedestes; e Vos pedimos que,
          atendendo benignamente às orações dos vossos suplicantes, não fiquem
          abandonados e possam alcançar as recompensas futuras. Por Cristo,
          nosso Senhor.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>

      <div className="side-by-side">
        <p>℣. Domine, exaudi orationem meam.</p>
        <p>℣. Ouvi, Senhor, a minha oração.</p>
        <p>
          <span className="text-red-500">℟.</span> Et clamor meus ad te veniat.
        </p>
        <p>
          <span className="text-red-500">℟.</span> E o meu clamor chegue até
          Vós.
        </p>
        <p>℣. Benedicamus Domino.</p>
        <p>℣. Bendigamos o Senhor.</p>
        <p>
          <span className="text-red-500">℟.</span> Deo gratias.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Graças a Deus.
        </p>
        <p>℣. Fidelium animæ per misericordiam Dei, requiescant in pace.</p>
        <p>
          ℣. E que as almas dos fiéis, pela misericórdia de Deus, descansem em
          paz.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>

      <aside>
        Acabar com uma{" "}
        <Link className="link" href="/devocionario/antifonas">
          Antífona de Nossa Senhora
        </Link>{" "}
        .
      </aside>
    </div>
  );
}
