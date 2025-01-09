"use dom";
import "../../../../global.css";

import React from "react";
import { TabItem, Tabs } from "~/components/Tabs";
import AveMarisStella from "./../../canticos/sacros/avemarisstella";
import Magnificat from "./../../canticos/sacros/magnificat";
import Salmo109 from "./../salterio/109";
import Salmo112 from "./../salterio/112";
import Salmo121 from "./../salterio/121";
import Salmo126 from "./../salterio/126";
import Salmo147 from "./../salterio/147";

export default function PageVesperas() {
  return (
    <div className="docs">
      <h1>Vésperas</h1>

      <aside>
        Meditemos na descida da cruz, o corpo de Jesus Cristo colocado nos
        braços de sua santa Mãe e na instituição do adorável Sacramento da
        Eucaristia.
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
              <em>Ant.</em> Dum esset Rex in acubitu suo, nardus mea dedit
              odorem suavitatis.
            </p>
            <p>
              <em>Ant.</em> Estando o Rei no seu repouso, exalou o meu frasco um
              suavíssimo cheiro.
            </p>
          </div>

          <h2>Salmo 109</h2>

          <Salmo109 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Dum esset Rex in acubitu suo, nardus mea dedit
              odorem suavitatis.
            </p>
            <p>
              <em>Ant.</em> Estando o Rei no seu repouso, exalou o meu frasco um
              suavíssimo cheiro.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Læva ejus sub capite meo, et dextera ilius
              amplexabitur me.
            </p>
            <p>
              <em>Ant.</em> Sua mão esquerda estará debaixo de minha cabeça, e a
              sua direita me dará um abraço.
            </p>
          </div>

          <h2>Salmo 112</h2>

          <Salmo112 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Læva ejus sub capite meo, et dextera ilius
              amplexabitur me.
            </p>
            <p>
              <em>Ant.</em> Sua mão esquerda estará debaixo de minha cabeça, e a
              sua direita me dará um abraço.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Nigra sum, sed formosa, filiæ Jerusalem; ideo
              dilexit me rex, et introduxit me in cubiculom suum.
            </p>
            <p>
              <em>Ant.</em> Sou negra, mas sou formosa, ó filhas de Jerusalém;
              por isso o Rei me amou, e me levou a seu aposento.
            </p>
          </div>

          <h2>Salmo 121</h2>

          <Salmo121 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Nigra sum, sed formosa, filiæ Jerusalem; ideo
              dilexit me rex, et introduxit me in cubiculom suum.
            </p>
            <p>
              <em>Ant.</em> Sou negra, mas sou formosa, ó filhas de Jerusalém;
              por isso o Rei me amou, e me levou a seu aposento.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Jam hiems transiit, imber abiit et recessit: surge,
              amica mea, et veni.
            </p>
            <p>
              <em>Ant.</em> Já se foi o Inverno, e passou o chuveiro; levanta-te
              e vem, ó minha amada.
            </p>
          </div>

          <h2>Salmo 126</h2>

          <Salmo126 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Jam hiems transiit, imber abiit et recessit: surge,
              amica mea, et veni.
            </p>
            <p>
              <em>Ant.</em> Já se foi o Inverno, e passou o chuveiro; levanta-te
              e vem, ó minha amada.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Speciosa facta es et suavis in deliciis tuis, sancta
              Dei Genitrix.
            </p>
            <p>
              <em>Ant.</em> Especiosa sois, e suave nas vossas delicias, ó santa
              Mãe de Deus.
            </p>
          </div>

          <h2>Salmo 147</h2>

          <Salmo147 />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Speciosa facta es et suavis in deliciis tuis, sancta
              Dei Genitrix.
            </p>
            <p>
              <em>Ant.</em> Especiosa sois, e suave nas vossas delicias, ó santa
              Mãe de Deus.
            </p>
          </div>

          <h2>Pequeno Capítulo</h2>

          <em>Ecl. 24, 14</em>

          <div className="side-by-side">
            <p>
              Ab initio et ante sæcula creata sum, et usque ad futurum sæculum
              non desinam, et in habitatione sancta coram ipso ministravi.
            </p>
            <p>
              Eu fui criada desde o princípio, antes dos séculos, e não deixarei
              de existir até ao fim dos séculos, e exerci diante dele o meu
              ministério na morada santa.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
          </div>

          <h2>Ave Maris Stella</h2>

          <AveMarisStella />

          <h2>Ofício 1</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Beata Mater et intacta Virgo, gloriosa Regina mundi,
              intercede pro nobis ad Dominum.
            </p>
            <p>
              <em>Ant.</em> Santa Mãe e Virgem intacta, gloriosa Rainha do
              mundo, intercedei a Deus por nós.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>

          <h2>Tempo Pascal</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Regína Cæli, lætáre, allelúja; Quia quem meruísti
              portáre, allelúja; Resurréxit, sicut dixit, allelúja; Ora pro
              nóbis Deum, allelúja. Gaude et lætáre, Virgo Maria, allelúja. Quia
              surréxit Dóminus vere, allelúja.
            </p>
            <p>
              <em>Ant.</em> Rainha do Céu, alegrai-Vos, Aleluia! Porque Aquele
              que merecestes trazer em vosso ventre, Aleluia! Ressuscitou como
              disse, Aleluia! Rogai por nós a Deus, Aleluia! Alegrai-Vos e
              exultai, ó Virgem Maria, Aleluia! Porque o Senhor ressuscitou
              verdadeiramente, Aleluia!
            </p>
          </div>

          <h2>Magnificat</h2>

          <Magnificat />

          <h2>Ofício 1</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Beata Mater et intacta Virgo, gloriosa Regina mundi,
              intercede pro nobis ad Dominum.
            </p>
            <p>
              <em>Ant.</em> Santa Mãe e Virgem intacta, gloriosa Rainha do
              mundo, intercedei a Deus por nós.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>

          <h2>Tempo Pascal</h2>

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Regína Cæli, lætáre, allelúja; Quia quem meruísti
              portáre, allelúja; Resurréxit, sicut dixit, allelúja; Ora pro
              nóbis Deum, allelúja. Gaude et lætáre, Virgo Maria, allelúja. Quia
              surréxit Dóminus vere, allelúja.
            </p>
            <p>
              <em>Ant.</em> Rainha do Céu, alegrai-Vos, Aleluia! Porque Aquele
              que merecestes trazer em vosso ventre, Aleluia! Ressuscitou como
              disse, Aleluia! Rogai por nós a Deus, Aleluia! Alegrai-Vos e
              exultai, ó Virgem Maria, Aleluia! Porque o Senhor ressuscitou
              verdadeiramente, Aleluia!
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
              Concede nos famulos tuos, quǽsumus, Domine Deus, perpetua mentis
              et corporis sanitate gaudere: et gloriosa beatæ Mariæ semper
              Virginis intercessione, a præsenti liberari tristitia, et æterna
              perfrui lætitia. Per Dominum nostrum Jesum Christum.
            </p>
            <p>
              Senhor Deus, nós Vos suplicamos que concedais a vossos servos
              lograr uma perpétua saúde de corpo e alma, e que pela intercessão
              gloriosa da bem-aventurada sempre Virgem Maria sejamos livres da
              presente tristeza, e gozemos da eterna alegria. Por Jesus Cristo
              nosso Senhor.
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
              <em>Ant.</em> Missus est Gábriel Angelus ad Maríam Vírginem
              desponsátam Joseph.
            </p>
            <p>
              <em>Ant.</em> O Anjo Gabriel foi mandado à Virgem Maria, desposada
              com José.
            </p>
          </div>

          <h2>Salmo 109</h2>

          <Salmo109 />

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

          <h2>Salmo 112</h2>

          <Salmo112 />

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

          <h2>Salmo 121</h2>

          <Salmo121 />

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

          <h2>Salmo 126</h2>

          <Salmo126 />

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

          <h2>Salmo 147</h2>

          <Salmo147 />

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

          <h2>Ave Maris Stella</h2>

          <AveMarisStella />

          <div className="side-by-side">
            <p>℣. Diffusa est gratia in labiis tuis.</p>
            <p>℣. A graça derramou-se nos vossos lábios.</p>
            <p>
              <span className="text-red-500">℟.</span> Propterea benedixit te
              Deus in æternum.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Por isso vos abençoou
              Deus para sempre.
            </p>
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

          <h2>Magnificat</h2>

          <Magnificat />

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

          <h2>Salmo 109</h2>

          <Salmo109 />

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

          <h2>Salmo 112</h2>

          <Salmo112 />

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

          <h2>Salmo 121</h2>

          <Salmo121 />

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

          <h2>Salmo 126</h2>

          <Salmo126 />

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

          <h2>Salmo 147</h2>

          <Salmo147 />

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

          <em>Ecl. 24, 14</em>

          <div className="side-by-side">
            <p>
              Ab initio et ante sæcula creata sum, et usque ad futurum sæculum
              non desinam, et in habitatione sancta coram ipso ministravi.
            </p>
            <p>
              Eu fui criada desde o princípio, antes dos séculos, e não deixarei
              de existir até ao fim dos séculos, e exerci diante dele o meu
              ministério na morada santa.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
          </div>

          <h2>Ave Maris Stella</h2>

          <AveMarisStella />

          <div className="side-by-side">
            <p>℣. Diffusa est gratia in labiis tuis.</p>
            <p>℣. A graça derramou-se nos vossos lábios.</p>
            <p>
              <span className="text-red-500">℟.</span> Propterea benedixit te
              Deus in æternum.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Por isso vos abençoou
              Deus para sempre.
            </p>
            <p>
              <em>Ant.</em> Magnum hæreditatis mysterium: templum Dei factus est
              uterus nescientis virum: non est pollutus ex ea carnem assumens;
              omnes gentes venient, dicentes: Gloria tibi, Domine.
            </p>
            <p>
              <em>Ant.</em> Grande mystério de herança: o ventre daquela que não
              conheceu varão, é feito templo de Deus; o qual se não manchou,
              tomando dela carne humana. Virão todas as gentes, dizendo: Glória
              a Vós, ó Senhor.
            </p>
          </div>

          <h2>Magnificat</h2>

          <Magnificat />

          <div className="side-by-side">
            <p>
              <em>Ant.</em> Magnum hæreditatis mysterium: templum Dei factus est
              uterus nescientis virum: non est pollutus ex ea carnem assumens;
              omnes gentes venient, dicentes: Gloria tibi, Domine.
            </p>
            <p>
              <em>Ant.</em> Grande mystério de herança: o ventre daquela que não
              conheceu varão, é feito templo de Deus; o qual se não manchou,
              tomando dela carne humana. Virão todas as gentes, dizendo: Glória
              a Vós, ó Senhor.
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

      <aside>
        Acabar com uma [Antífona de Nossa Senhora](/devocionario/antifonas).
      </aside>
    </div>
  );
}
