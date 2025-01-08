"use dom";
import "../../../../global.css";

import React from "react";
import Salmo128 from "./../salterio/128";
import Salmo129 from "./../salterio/129";
import Salmo130 from "./../salterio/130";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import { Tabs, TabItem } from "@astrojs/starlight/components";
import NuncDimittis from "./../../canticos/sacros/nuncdimittis";

export default function PageCompletas() {
  return (
    <div className="docs">
      <h1>Completas</h1>

      <aside>
        Meditemos naa sepultura de Jesus Cristo e na sua estadia no túmulo.
      </aside>

      <div className="side-by-side not-content">
        <p>
          ℣. Convérte nos <span className="cross text-red-500">✠</span> Deus,
          salutáris noster.
        </p>
        <p>
          ℣. Convertei-nos, <span className="cross text-red-500">✠</span> Deus
          nosso Salvador.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Et avérte iram tuam a nobis.
        </p>
        <p>
          <span className="text-red-500">℟.</span> E afastai de nós a vossa ira.
        </p>
        <p>
          ℣. Deus <span className="cross text-red-500"> ✠ </span> in adjutórium
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

      <h2>Salmo 128</h2>

      <Salmo128 />

      <h2>Salmo 129</h2>

      <Salmo129 />

      <h2>Salmo 130</h2>

      <Salmo130 />

      <h2>Hino Memento rerum conditor</h2>

      <MementoRerumConditor />

      <Tabs>
        <TabItem label="Depois da Purificação">
          <h2>Pequeno Capítulo</h2>

          <em>Ecl. 24</em>

          <div className="side-by-side not-content">
            <p>
              Ego mater pulchræ dilectionis, et timoris, et agnitionis, et
              sanctæ spei.
            </p>
            <p>
              Eu sou a Mãe do amor belo e do temor, e do conhecimento antigo, e
              da santa esperança.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
            <p>℣. Ora pro nobis sancta Dei Génetrix.</p>
            <p>℣. Rogai por nós, Santa Mãe de Deus.</p>
            <p>
              <span className="text-red-500">℟.</span> Ut digni efficiamur
              promissionibus Christi.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Para que sejamos dignos
              das promessas de Cristo.
            </p>
          </div>

          <h2>Ofício 1</h2>

          <div className="side-by-side not-content">
            <p>
              <em>Ant.</em> Sub tuum præsídium confúgimus, sancta Dei Génetrix;
              nostras deprecatiónes ne despícias in necessitátibus; sed a
              perículis cunctis líbera nos semper, Virgo gloriósa et benedícta.
            </p>
            <p>
              <em>Ant.</em> À vossa protecção recorremos, Santa Mãe de Deus; não
              desprezeis as nossas súplicas em nossas necessidades; mas
              livrai-nos sempre de todos os perigos, ó Virgem gloriosa e
              bendita.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>

          <h2>Tempo Pascal</h2>

          <div className="side-by-side not-content">
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

          <h2>Cântico Nunc Dimittis</h2>

          <NuncDimittis />

          <h2>Ofício 1</h2>

          <div className="side-by-side not-content">
            <p>
              <em>Ant.</em> Sub tuum præsídium confúgimus, sancta Dei Génetrix;
              nostras deprecatiónes ne despícias in necessitátibus; sed a
              perículis cunctis líbera nos semper, Virgo gloriósa et benedícta.
            </p>
            <p>
              <em>Ant.</em> À vossa protecção recorremos, Santa Mãe de Deus; não
              desprezeis as nossas súplicas em nossas necessidades; mas
              livrai-nos sempre de todos os perigos, ó Virgem gloriosa e
              bendita.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Amen.
            </p>
          </div>

          <h2>Tempo Pascal</h2>

          <div className="side-by-side not-content">
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
              Beatæ et gloriosæ semper Virginis Mariæ, quǽsumus, Domine,
              intercessio gloriosa nos protegat: et ad vitam perducat æternam.
              Per Dominum...
            </p>
            <p>
              Qua gloriosa intercessão da abençoada e gloriosa Maria sempre
              Virgem, nos proteja, nós Vos pedimos Senhor, e que nos traga a
              vida eterna. Por nosso Senhor...
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
          <h2>Pequeno Capítulo</h2>

          <em>Is. 7, 14-15</em>

          <div className="side-by-side not-content">
            <p>
              Ecce Virgo concipiet, et pariet filium, et vocabitur nomen ejus
              Emmanuel. Butyrum et mel comedet, ut sciat reprobare malum, et
              eligere bonum.
            </p>
            <p>
              Pois por isso o mesmo Senhor vos dará este sinal: Uma virgem
              conceberá e dará à luz um filho, e o seu nome será Emanuel. Ele
              comerá manteiga e mel, até que saiba rejeitar o mal e escolher o
              bem.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo gratias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
            <p>℣. Angelus Dómini nuntiávit Maríæ.</p>
            <p>℣. O Anjo do Senhor anunciou a Maria.</p>
            <p>
              <span className="text-red-500">℟.</span> Et concépit de Spíritu
              Sancto.
            </p>
            <p>
              <span className="text-red-500">℟.</span> E Ela concebeu do
              Espírito Santo.
            </p>
            <p>
              <em>Nunc. Ant.</em> Spiritus Sanctus in te descendet, Maria: ne
              timeas, habebis in utero Filium Dei, (Allelúja).
            </p>
            <p>
              <em>Nunc. Ant.</em> O Espírito Santo descerá sobre vós, ó Maria;
              não temais: concebereis, e tereis no ventre o Filho de Deus,
              (Aleluia).
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
          </div>
        </TabItem>

        <TabItem label="No Natal">
          <h2>Pequeno Capítulo</h2>

          <em>Ecl. 24</em>

          <div className="side-by-side not-content">
            <p>
              Ego mater pulchræ dilectionis, et timoris, et agnitionis, et
              sanctæ spei. Eu sou a Mãe do amor belo e do temor, e do
              conhecimento antigo, e da santa esperança.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
            <p>℣. Ora pro nobis sancta Dei Génetrix.</p>
            <p>℣. Rogai por nós, Santa Mãe de Deus.</p>
            <p>
              <span className="text-red-500">℟.</span> Ut digni efficiamur
              promissionibus Christi.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Para que sejamos dignos
              das promessas de Cristo.
            </p>
            <p>
              <em>Nunc. Ant.</em> Magnum hæreditatis mysterium: templum Dei
              factus est uterus nescientis virum: non est pollutus ex ea carnem
              assumens; omnes gentes venient, dicentes: Gloria tibi, Domine.
            </p>
            <p>
              <em>Nunc. Ant.</em> Grande mystério de herança: o ventre daquela
              que não conheceu varão, é feito templo de Deus; o qual se não
              manchou, tomando dela carne humana. Virão todas as gentes,
              dizendo: Glória a Vós, ó Senhor.
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
          </div>
        </TabItem>
      </Tabs>

      <div className="side-by-side not-content">
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
      </div>

      <aside>
        Acabar com uma [Antífona de Nossa Senhora](/devocionario/antifonas).
      </aside>
    </div>
  );
}
