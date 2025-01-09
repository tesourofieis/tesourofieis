"use dom";
import "../../../../global.css";

import React from "react";
import { TabItem, Tabs } from "~/components/Tabs";
import Benedicite from "./../../canticos/sacros/benedicite";
import Benedictus from "./../../canticos/sacros/benedictus";
import OGloriosaVirginum from "./../../canticos/sacros/ogloriosavirginum";
import Salmo62 from "./../salterio/062";
import Salmo92 from "./../salterio/092";
import Salmo99 from "./../salterio/099";
import Salmo148 from "./../salterio/148";

export default function PageLaudes() {
  return (
    <div className="docs">
      <h1>Laudes</h1>

      <aside>
        Meditemos na ressurreição e na assunção de Maria, que, segundo piedosa
        crença, se teria operado durante a aurora; é por este motivo que, no
        Ofício da Santa Virgem, a Igreja coloca nas Laudes as antífonas da
        Assunção.
      </aside>

      <Tabs>
        <TabItem label="Depois da Purificação">
          <div className="side-by-side">
            <p>
              ℣. Deus <span className="cross text-red-500">✠</span> in
              adjutórium meum inténde.
            </p>
            <p>
              ℣. Deus, <span className="cross text-red-500">✠</span> vinde em
              meu auxílio.
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
              <span className="text-red-500">℟.</span> Sicut erat in pricípio,
              et nunc, et semper, et in sǽcula sæculórum. Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </p>
            <p>
              <em>Ant.</em> Assumpta est Maria in cælum: gaudete angeli,
              laudantes benedicunt Dominum.
            </p>
            <p>
              <em>Ant.</em> Maria foi exaltada ao céu; os anjos se alegram,
              louvam, e glorificam o Senhor.
            </p>
          </div>

          <h2>Salmo 92</h2>

          <Salmo92 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Assumpta est Maria in cælum: gaudete angeli,
              laudantes benedicunt Dominum.
            </p>
            <p>
              <em>Ant.</em> Maria foi exaltada ao céu; os anjos se alegram,
              louvam, e glorificam o Senhor.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Maria Virgo assumpta est ad ætherum thalamum, in quo
              Rex regum stellato sedet solio.
            </p>
            <p>
              <em>Ant.</em> A Virgem Maria foi exaltada ao tálamo celeste, onde
              o Rei dos reis está sentado num trono de estrelas.
            </p>
          </div>

          <h2>Salmo 99</h2>

          <Salmo99 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Maria Virgo assumpta est ad ætherum thalamum, in quo
              Rex regum stellato sedet solio.
            </p>
            <p>
              <em>Ant.</em> A Virgem Maria foi exaltada ao tálamo celeste, onde
              o Rei dos reis está sentado num trono de estrelas.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> In odorem unguentorum tuorum currimus: adolescentulæ
              dilexerunt te nimis.
            </p>
            <p>
              <em>Ant.</em> Todos corremos à fragrância dos vossos aromas, as
              donzelas amar-vos-ão grandemente.
            </p>
          </div>

          <h2>Salmo 62</h2>

          <Salmo62 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> In odorem unguentorum tuorum currimus: adolescentulæ
              dilexerunt te nimis.
            </p>
            <p>
              <em>Ant.</em> Todos corremos à fragrância dos vossos aromas, as
              donzelas amar-vos-ão grandemente.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Benedicta filia tu a Domino: quia per te fructum
              vitaæ communicavimus.
            </p>
            <p>
              <em>Ant.</em> Sois a filha bendita do Senhor, porque por vós
              recebemos o fruto da vida.
            </p>
          </div>

          <h2>Benedicite</h2>

          <Benedicite />

          <aside>Não se diz a Glória no fim.</aside>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Benedicta filia tu a Domino: quia per te fructum
              vitaæ communicavimus.
            </p>
            <p>
              <em>Ant.</em> Sois a filha bendita do Senhor, porque por vós
              recebemos o fruto da vida.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Pulchra es et decora, filia Jerusalem: terribus ut
              castrorum acies ordinara.
            </p>
            <p>
              <em>Ant.</em> Filha de Jerusalém, sois bela e decorosa, terrível
              como um exército formado em linha.
            </p>
          </div>

          <h2>Salmo 148</h2>

          <Salmo148 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Pulchra es et decora, filia Jerusalem: terribus ut
              castrorum acies ordinara.
            </p>
            <p>
              <em>Ant.</em> Filha de Jerusalém, sois bela e decorosa, terrível
              como um exército formado em linha.
            </p>
          </div>

          <h2>Pequeno Capítulo</h2>

          <em>Ct. 6, 8</em>

          <div className="side-by-side">
            <p>
              Viderunt eam filiæ Sion, et beatissimam prædicaverunt, et reginæ
              laudaverunt eam.
            </p>
            <p>
              Viram-na as Filhas de Sião, e a declararam beatíssima; e as
              Rainhas a louvaram.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
          </div>

          <h2>Hino O Gloriosa Virginum</h2>

          <OGloriosaVirginum />

          <h2>Ofício 1</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Beata dei genitrix, Maria, Virgo perpetua, templum
              Domini, sacrarium Spiritus Sancti, sola sine exemplo placuisti
              Domino nostro Jesu Christo: ora pro populo, interveni pro clero,
              intercede pro devoto femineo sexu.
            </p>
            <p>
              <em>Ant.</em> Ó Santa Mãe de Deus, Maria sempre Virgem, templo de
              Deus, sacrário do Espírito Santo; vós apenas, sem exemplo,
              agradastes Nosso Senhor Jesus Cristo: rezei por nós, intervinde
              pelo clero, intercedei pelo devoto sexo feminino.
            </p>
          </div>

          <h2>No Tempo Pascal</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Regína Cæli, lætáre, allelúja; Quia quem meruísti
              portáre, allelúja; Resurréxit, sicut dixit, allelúja; Ora pro
              nóbis Deum, allelúja.
            </p>
            <p>
              <em>Ant.</em> Rainha do Céu, alegrai-Vos, Aleluia! Porque Aquele
              que merecestes trazer em vosso ventre, Aleluia! Ressuscitou como
              disse, Aleluia! Rogai por nós a Deus, Aleluia!
            </p>
          </div>

          <h2>Benedictus</h2>

          <Benedictus />

          <h2>Ofício 1</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Beata dei genitrix, Maria, Virgo perpetua, templum
              Domini, sacrarium Spiritus Sancti, sola sine exemplo placuisti
              Domino nostro Jesu Christo: ora pro populo, interveni pro clero,
              intercede pro devoto femineo sexu.
            </p>
            <p>
              <em>Ant.</em> Ó Santa Mãe de Deus, Maria sempre Virgem, templo de
              Deus, sacrário do Espírito Santo; vós apenas, sem exemplo,
              agradastes Nosso Senhor Jesus Cristo: reza por nós, intervém pelo
              clero, intercede pelo devoto sexo feminino.
            </p>
          </div>

          <h2>No Tempo Pascal</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Regína Cæli, lætáre, allelúja; Quia quem meruísti
              portáre, allelúja; Resurréxit, sicut dixit, allelúja; Ora pro
              nóbis Deum, allelúja.
            </p>
            <p>
              <em>Ant.</em> Rainha do Céu, alegrai-Vos, Aleluia! Porque Aquele
              que merecestes trazer em vosso ventre, Aleluia! Ressuscitou como
              disse, Aleluia! Rogai por nós a Deus, Aleluia!
            </p>
            <p>
              <span className="text-red-500 text-center">Orémus.</span>
            </p>
            <p>
              <span className="text-red-500 text-center">Oremos.</span>
            </p>
            <p>
              Deus, qui de beatæ Mariæ Virginis utero Verbum tuum, Angelo
              nuntiante, carnem suscipere voluisti: præsta supplicibus tuis; ut
              qui vere eam Genetricem Dei credimus, ejus apud te
              intercessionibus adjuvemur. Per eundem Dominum nostrum Jesum
              Christum.
            </p>
            <p>
              Ó Deus, que pela anunciação do Anjo quisestes que o vosso Verbo se
              vestisse da nossa carne nas entranhas da bem-aventurada Virgem
              Maria: nós, vossos humildes servos, cremos ser ela verdadeira a
              Mãe de Deus, concedei-nos que nos ajudem as suas intercessões para
              convosco. Pelo mesmo Jesus Cristo Senhor Nosso.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>
        </TabItem>

        <TabItem label="No Advento">
          <div className="side-by-side">
            <p>
              ℣. Deus <span className="cross text-red-500">✠</span> in
              adjutórium meum inténde.
            </p>
            <p>
              ℣. Deus, <span className="cross text-red-500">✠</span> vinde em
              meu auxílio.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Dómine, ad adjuvándum me
              festína.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Senhor, apressai-Vos em
              socorrer-me.
            </p>
            <p>
              ℣. Glória Patri, et Fílio, et Spíritui Sancto. ℣. Glória ao Pai, e
              ao Filho e ao Espírito Santo.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Sicut erat in pricípio,
              et nunc, et semper, et in sǽcula sæculórum. Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </p>
            <p>
              <em>Ant.</em> Missus est Gábriel Angelus ad Maríam Vírginem
              desponsátam Joseph.
            </p>
            <p>
              <em>Ant.</em> O Anjo Gabriel foi mandado à Virgem Maria, desposada
              com José.
            </p>
          </div>

          <h2>Salmo 92</h2>

          <Salmo92 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Missus est Gábriel Angelus ad Maríam Vírginem
              desponsátam Joseph.
            </p>
            <p>
              <em>Ant.</em> O Anjo Gabriel foi mandado à Virgem Maria, desposada
              com José.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ave, María, grátia plena; Dóminus tecum: benedícta
              tu in muliéribus.
            </p>
            <p>
              <em>Ant.</em> Ave, Maria, cheia de graça, o Senhor é convosco;
              bendita sois vós entre as mulheres.
            </p>
          </div>

          <h2>Salmo 99</h2>

          <Salmo99 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ave, María, grátia plena; Dóminus tecum: benedícta
              tu in muliéribus.
            </p>
            <p>
              <em>Ant.</em> Ave, Maria, cheia de graça, o Senhor é convosco;
              bendita sois vós entre as mulheres.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ne timeas, María, invenísti grátiam apud Dóminum:
              ecce concípies et páries fílium.
            </p>
            <p>
              <em>Ant.</em> Não temais, ó Maria, achastes graça para com o
              Senhor: concebereis, e dareis à luz um filho.
            </p>
          </div>

          <h2>Salmo 62</h2>

          <Salmo62 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ne timeas, María, invenísti grátiam apud Dóminum:
              ecce concípies et páries fílium.
            </p>
            <p>
              <em>Ant.</em> Não temais, ó Maria, achastes graça para com o
              Senhor: concebereis, e dareis à luz um filho.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Dabit ei Dóminus sedem David, patris ejus, et
              regnábit in ætérnum.
            </p>
            <p>
              <em>Ant.</em> O Senhor lhe dará o trono de David seu Pai, e
              reinará eternamente.
            </p>
          </div>

          <h2>Benedicite</h2>

          <Benedicite />

          <aside>Não se diz a Glória no fim.</aside>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Dabit ei Dóminus sedem David, patris ejus, et
              regnábit in ætérnum.
            </p>
            <p>
              <em>Ant.</em> O Senhor lhe dará o trono de David seu Pai, e
              reinará eternamente.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ecce ancílla Dómini: fiat mihi secúndum verbum tuum.
            </p>
            <p>
              <em>Ant.</em> Eis aqui a escrava do Senhor, faça-se em mim segundo
              a vossa palavra.
            </p>
          </div>

          <h2>Salmo 148</h2>

          <Salmo148 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ecce ancílla Dómini: fiat mihi secúndum verbum tuum.
            </p>
            <p>
              <em>Ant.</em> Eis aqui a escrava do Senhor, faça-se em mim segundo
              a vossa palavra.
            </p>
          </div>

          <h2>Pequeno Capítulo</h2>

          <em>Is. 11, 1-2</em>

          <div className="side-by-side">
            <p>
              Egredietur virga de radice Jesse, et flos de radice ejus ascendet.
              Et requiescet super eum Spiritus Domini.
            </p>
            <p>
              Sairá uma vara da raiz de Jessé, e subirá uma flor da sua raiz, e
              descansará sobre ele o Espírito do Senhor.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
          </div>

          <h2>Hino O Gloriosa Virginum</h2>

          <OGloriosaVirginum />

          <div className="side-by-side">
            <p>℣. Benedicta tu in mulieribus.</p>
            <p>℣. Bendita sois vóo entre as mulheres.</p>
            <p>
              <span className="text-red-500">℟.</span> Et benedictus fructus
              ventris tui.
            </p>
            <p>
              <span className="text-red-500">℟.</span> E bendito é o fruto do
              vosso ventre.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Spiritus Sanctus in te descendet, Maria: ne timeas,
              habebis in utero filium Dei, (allelúja).
            </p>
            <p>
              <em>Ant.</em> O Espírito Santo descerá sobre vós, ó Maria; não
              temais: concebereis, e tereis no ventre o Filho de Deus,
              (aleluia).
            </p>
          </div>

          <h2>Benedictus</h2>

          <Benedictus />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Spiritus Sanctus in te descendet, Maria: ne timeas,
              habebis in utero filium Dei, (allelúja).
            </p>
            <p>
              <em>Ant.</em> O Espírito Santo descerá sobre vós, ó Maria; não
              temais: concebereis, e tereis no ventre o Filho de Deus,
              (aleluia).
            </p>
            <p>℣. Domine, exaudi orationem meam.</p>
            <p>℣. Ouvi, Senhor, a minha oração.</p>
            <p>
              <span className="text-red-500">℟.</span> Et clamor meus ad te
              veniat.
            </p>
            <p>
              <span className="text-red-500">℟.</span> E o meu clamor chegue até
              Vós.
            </p>
            <p>
              <span className="text-red-500 text-center">Orémus.</span>
            </p>
            <p>
              <span className="text-red-500 text-center">Oremos.</span>
            </p>
            <p>
              Deus, qui de beatæ Mariæ Virginis utero Verbum tuum, Angelo
              nuntiante, carnem suscipere voluisti: præsta supplicibus tuis; ut
              qui vere eam Genetricem Dei credimus, ejus apud te
              intercessionibus adjuvemur. Per eundem Dominum nostrum Jesum
              Christum.
            </p>
            <p>
              Ó Deus, que pela anunciação do Anjo quisestes que o vosso Verbo se
              vestisse da nossa carne nas entranhas da bem-aventurada Virgem
              Maria: nós, vossos humildes servos, cremos ser ela a verdadeira
              Mãe de Deus, concedei-nos que nos ajudem as suas intercessões para
              convosco. Pelo mesmo Jesus Cristo Senhor Nosso.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>℣. Domine, exaudi orationem meam.</p>
            <p>℣. Ouvi, Senhor, a minha oração.</p>
            <p>
              <span className="text-red-500">℟.</span> Et clamor meus ad te
              veniat.
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
              ℣. E que as almas dos fiéis, pela misericórdia de Deus, descansem
              em paz.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>
        </TabItem>

        <TabItem label="No Natal">
          <div className="side-by-side">
            <p>
              ℣. Deus <span className="cross text-red-500">✠</span> in
              adjutórium meum inténde.
            </p>
            <p>
              ℣. Deus, <span className="cross text-red-500">✠</span> vinde em
              meu auxílio.
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
              <span className="text-red-500">℟.</span> Sicut erat in pricípio,
              et nunc, et semper, et in sǽcula sæculórum. Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </p>
            <p>
              <em>Ant.</em> O admirabile commercium: Creator generis humani,
              animatum corpus sumens, de Virgine nasci dignatus est: et
              procedens homo sine semine, largitus est nobis suam Deitatem.
            </p>
            <p>
              <em>Ant.</em> Ó admirável permuta! O Criador do género humano,
              tomando corpo e alma, dignou-se nascer de uma Virgem; e, feito
              homem sem progenitor, tornou-nos participantes da sua divindade.
            </p>
          </div>

          <h2>Salmo 92</h2>

          <Salmo92 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> O admirabile commercium: Creator generis humani,
              animatum corpus sumens, de Virgine nasci dignatus est: et
              procedens homo sine semine, largitus est nobis suam Deitatem.
            </p>
            <p>
              <em>Ant.</em> Ó admirável permuta! O Criador do género humano,
              tomando corpo e alma, dignou-se nascer de uma Virgem; e, feito
              homem sem progenitor, tornou-nos participantes da sua divindade.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Quando natus es inefabilitre ex Virgnine, tunc
              impletæ sunt Scripturæ: sicut pluvia in vellus descendisti, ut
              salvum faceres genus humanum: te laudamus, Deus noster.
            </p>
            <p>
              <em>Ant.</em> Quando nascestes misteriosamente da Virgem, então se
              cumpriram as Escrituras: descestes como a chuva sobre a lã, para
              salvar a humanidade. Nós Vos louvamos, ó Nosso Deus.
            </p>
          </div>

          <h2>Salmo 99</h2>

          <Salmo99 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Quando natus es inefabilitre ex Virgnine, tunc
              impletæ sunt Scripturæ: sicut pluvia in vellus descendisti, ut
              salvum faceres genus humanum: te laudamus, Deus noster.
            </p>
            <p>
              <em>Ant.</em> Quando nascestes misteriosamente da Virgem, então se
              cumpriram as Escrituras: descestes como a chuva sobre a lã, para
              salvar a humanidade. Nós Vos louvamos, ó Nosso Deus.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Rubum, quem viderat Moyses incombustum, conservatam
              agnovimus tuam laudabilem virginitatem: Dei Genitrix, intercede
              pro nobis.
            </p>
            <p>
              <em>Ant.</em> Na sarça que Moisés via sem se consumir,
              reconhecemos a vossa admirável virgindade conservada: rogai por
              nós, Santa Mãe de Deus.
            </p>
          </div>

          <h2>Salmo 62</h2>

          <Salmo62 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Rubum, quem viderat Moyses incombustum, conservatam
              agnovimus tuam laudabilem virginitatem: Dei Genitrix, intercede
              pro nobis.
            </p>
            <p>
              <em>Ant.</em> Na sarça que Moisés via sem se consumir,
              reconhecemos a vossa admirável virgindade conservada: rogai por
              nós, Santa Mãe de Deus.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Germinavit radix Jesse, orta est stella ex Jacob;
              virgo peperit Salvatorem: te laudamus, Deus noster.
            </p>
            <p>
              <em>Ant.</em> Floresceu a raiz de Jessé, surgiu a estrela de
              Jacob. A Virgem deu à luz o Salvador: Nós Vos louvamos, ó Nosso
              Deus.
            </p>
          </div>

          <h2>Benedicite</h2>

          <Benedicite />

          <aside>Não se diz a Glória no fim.</aside>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Germinavit radix Jesse, orta est stella ex Jacob;
              virgo peperit Salvatorem: te laudamus, Deus noster.
            </p>
            <p>
              <em>Ant.</em> Floresceu a raiz de Jessé, surgiu a estrela de
              Jacob. A Virgem deu à luz o Salvador: Nós Vos louvamos, Senhor
              nosso Deus.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ecce, Maria genuit nobis Salvatorem, quem Joannes
              videns exclamavit, dicens: Ecce Agnus Dei, ecce qui tollit peccata
              mundi, (allelúja).
            </p>
            <p>
              <em>Ant.</em> Eis, Maria deu à luz o nosso Salvador, que João
              reconheceu e exclamou: eis o Cordeiro de Deus, Aquele que tira o
              pecado do mundo, (aleluia).
            </p>
          </div>

          <h2>Salmo 148</h2>

          <Salmo148 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Ecce, Maria genuit nobis Salvatorem, quem Joannes
              videns exclamavit, dicens: Ecce Agnus Dei, ecce qui tollit peccata
              mundi, (allelúja).
            </p>
            <p>
              <em>Ant.</em> Eis, Maria deu à luz o nosso Salvador, que João
              reconheceu e exclamou: eis o Cordeiro de Deus, Aquele que tira o
              pecado do mundo, (aleluia).
            </p>
          </div>

          <h2>Pequeno Capítulo</h2>

          <em>Is. 11, 1-2</em>

          <div className="side-by-side">
            <p>
              Egredietur virga de radice Jesse, et flos de radice ejus ascendet.
              Et requiescet super eum Spiritus Domini.
            </p>
            <p>
              Sairá uma vara da raiz de Jessé, e subirá uma flor da sua raiz, e
              descansará sobre ele o Espírito do Senhor.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
          </div>

          <h2>Hino O Gloriosa Virginum</h2>

          <OGloriosaVirginum />

          <div className="side-by-side">
            <p>℣. Benedicta tu in mulieribus.</p>
            <p>℣. Bendita sois vós entre as mulheres.</p>
            <p>
              <span className="text-red-500">℟.</span> Et benedicta fructus
              ventris tui.
            </p>
            <p>
              <span className="text-red-500">℟.</span> E bendito é o fruto do
              vosso ventre.
            </p>
            <p>
              <em>Ant.</em> Mirabile mysterium declaratur hodie: innovantur
              naturæ, Deus homo factus est: id quod fuit permansit, et quod non
              erat assumpsit; non commixtionem passus, neque divisionem.
            </p>
            <p>
              <em>Ant.</em> Hoje se manifesta um admirável mystério: renovam-se
              as naturezas; Deus faz-se homem: ficando o que era, tomando o que
              não era, sem permitir divisão nem mistura.
            </p>
          </div>

          <h2>Benedictus</h2>

          <Benedictus />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Mirabile mysterium declaratur hodie: innovantur
              naturæ, Deus homo factus est: id quod fuit permansit, et quod non
              erat assumpsit; non commixtionem passus, neque divisionem.
            </p>
            <p>
              <em>Ant.</em> Hoje se manifesta um admirável mystério: renovam-se
              as naturezas; Deus faz-se homem: ficando o que era, tomando o que
              não era, sem permitir divisão nem mistura.
            </p>
            <p>℣. Domine, exaudi orationem meam.</p>
            <p>℣. Ouvi, Senhor, a minha oração.</p>
            <p>
              <span className="text-red-500">℟.</span> Et clamor meus ad te
              veniat.
            </p>
            <p>
              <span className="text-red-500">℟.</span> E o meu clamor chegue até
              Vós.
            </p>
            <p>
              <span className="text-red-500 text-center">Orémus.</span>
            </p>
            <p>
              <span className="text-red-500 text-center">Oremos.</span>
            </p>
            <p>
              Deus, qui salutis æternæ, beatæ Mariæ virginitate fœcunda, humano
              generi præmia præstitisti: tribue, quǽsumus; ut ipsam pro nobis
              intercedere sentiamus, per quam meruimus auctorem vitæ suscipere,
              Dominum nostrum Jesum Christum Filium tuum. Qui tecum vivit et
              regnat in unitate Spiritus Sancti, Deus, per omnia sæcula
              sæculorum.
            </p>
            <p>
              Ó Deus, que pela virgindade fecunda da bem-aventurada Maria,
              destes ao género humano as gratificações da salvação eterna:
              concedei-nos, Vos rogamos, que experienciemos sua intercessão por
              nós, dela pela qual recebemos o autor da vida, Nosso Senhor Jesus
              Cristo, vosso Filho. Que convosco, e com o Espírito Santo, vive e
              reina por todos os séculos.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>℣. Domine, exaudi orationem meam.</p>
            <p>℣. Ouvi, Senhor, a minha oração.</p>
            <p>
              <span className="text-red-500">℟.</span> Et clamor meus ad te
              veniat.
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
              ℣. E que as almas dos fiéis, pela misericórdia de Deus, descansem
              em paz.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>
        </TabItem>
      </Tabs>

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
        Acabar com uma [Antífona de Nossa Senhora](/devocionario/antifonas).
      </aside>
    </div>
  );
}
