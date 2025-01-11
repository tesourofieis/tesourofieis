"use dom";
import "../../../global.css";

import { Link } from "expo-router";
import React from "react";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo125 from "./../salterio/125";
import Salmo126 from "./../salterio/126";
import Salmo127 from "./../salterio/127";

export default function PageNoa() {
  return (
    <div className="docs">
      <h1>Noa</h1>

      <aside>
        Meditemos em Jesus morrendo na cruz, na agitação da natureza neste
        momento, na destruição do reino de Satanás, e na Igreja nascendo do lado
        aberto do seu Divino Esposo preso à Santa Cruz.
      </aside>

      <div className="side-by-side">
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

      <h2>Hino Memento rerum conditor</h2>

      <MementoRerumConditor />

      <div className="side-by-side">
        <p>
          <em>Ant.</em> Pulchra es et decora, filia Jerusalem: terribus ut
          castrorum acies ordinara.
        </p>
        <p>
          <em>Ant.</em> Filha de Jerusalém, sois bela e decorosa, terrível como
          um exército formado em linha.
        </p>
      </div>

      <h2>Salmo 125</h2>

      <Salmo125 />

      <h2>Salmo 126</h2>

      <Salmo126 />

      <h2>Salmo 127</h2>

      <Salmo127 />

      <Tabs>
        <TabItem label="Depois da Purificação">
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

          <em>Ecl. 24, 19-20</em>

          <div className="side-by-side">
            <p>
              Sicut cinnamomum et balsamum aromatizans odorem dedi: quasi myrrha
              electa dedi suavitatem odoris.
            </p>
            <p>
              Assim como o cinamomo e o bálsamo, que difundem cheiro, dei eu
              fragrância: como a mirra escolhida, dei cheiro de suavidade.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
            <p>℣. Post partum, Virgo, invioláta permansísti.</p>
            <p>℣. Despois do parto permanecestes imaculada.</p>
            <p>
              <span className="text-red-500">℟.</span> Dei Génetrix, intercéde
              pro nobis.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Intercedei por nós, ó Mãe
              de Deus.
            </p>
          </div>

          <div className="side-by-side">
            <p>
              <em>Hic genuflectitur</em> Kyrie eleison
            </p>
            <p>
              <em>Genuflectir</em> Senhor, tende piedade de nós.
            </p>
            <p>Christe, eléison.</p>
            <p>Cristo, tende piedade de nós.</p>
            <p>Kyrie, eléison.</p>
            <p>Senhor, tende piedade de nós.</p>
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
          </div>

          <div className="side-by-side">
            <p>
              <span className="text-red-500 text-center">Orémus.</span>
            </p>
            <p>
              <span className="text-red-500 text-center">Oremos.</span>
            </p>
            <p>
              Famulorum tuorum, quaesumus, Domine, delictis ignosce: ut qui tibi
              placere de actibus nostris non valemus, Genitricis Filii tui
              Domini nostri intercessione salvemur: Qui tecum vivit et regnat...
            </p>
            <p>
              Perdoai, Senhor, como Vos pedimos, os delictos dos vossos servos;
              para que não podendo agradar-Vos com as nossas obras, sejamos
              salvos, pela intercessão da Virgem Mãe de vosso Filhos e Senhor
              nosso: Que convosco vive e reina...
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
              <em>Ant.</em> Ecce ancilla Domini: fiat mihi secundum verbum tuum.
            </p>
            <p>
              <em>Ant.</em> Eis aqui a escrava do Senhor, faça-se em mim segundo
              a vossa palavra.
            </p>
          </div>

          <h2>Pequeno Capítulo</h2>

          <em>Is. 7, 14-15</em>

          <div className="side-by-side">
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
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
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
              <em>Hic genuflectitur</em> Kyrie eleison
            </p>
            <p>
              <em>Genuflectir</em> Senhor, tende piedade de nós.
            </p>
            <p>Christe, eléison.</p>
            <p>Cristo, tende piedade de nós.</p>
            <p>Kyrie, eléison.</p>
            <p>Senhor, tende piedade de nós.</p>
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
          </div>

          <div className="side-by-side">
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

          <em>Ecl. 24, 19-20</em>

          <div className="side-by-side">
            <p>
              In plateis sicut cinnamomum et balsamum aromatizans odorem dedi:
              quasi myrrha electa, dedi suavitatem odoris.
            </p>
            <p>
              Nas praças assim como o cinamomo e o bálsamo, que difundem cheiro,
              dei eu fragrância; como a mirra, dei cheiro de suavidade.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
            <p>℣. Post partum, Virgo, invioláta permansísti.</p>
            <p>℣. Despois do parto permanecestes imaculada.</p>
            <p>
              <span className="text-red-500">℟.</span> Dei Génetrix, intercéde
              pro nobis.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Intercedei por nós, ó Mãe
              de Deus.
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
