"use dom";
import "../../../global.css";

import React from "react";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo53 from "./../salterio/053";
import Salmo84 from "./../salterio/084";
import Salmo116 from "./../salterio/116";

export default function PagePrima() {
  return (
    <div className="docs">
      <h1>Prima</h1>

      <aside>
        Meditemos nos ultrajes, sofrimentos e açoites, suportados por Jesus
        Cristo em casa de Caifás. Igualmente na aparição à Santa Virgem após a
        ressurreição e na visita das santas mulheres ao sepulcro.
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

      <h2>Memento rerum conditor</h2>

      <MementoRerumConditor />

      <div className="side-by-side">
        <p>
          <em>Ant.</em> Assumpta est Maria in cælum: gaudete angeli, laudantes
          benedicunt Dominum.
        </p>
        <p>
          <em>Ant.</em> Maria foi exaltada ao céu; os anjos se alegram, louvam,
          e glorificam o Senhor.
        </p>
      </div>

      <h2>Salmo 53</h2>

      <Salmo53 />

      <h2>Salmo 84</h2>

      <Salmo84 />

      <h2>Salmo 116</h2>

      <Salmo116 />

      <Tabs>
        <TabItem label="Depois da Purificação">
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

          <h2>Pequeno Capítulo</h2>

          <em>Ct. 6, 9</em>

          <div className="side-by-side">
            <p>
              Quæ est ista, quæ progréditur quasi auróra consúrgens, pulchra ut
              luna, elécta ut sol, terribilis ut castrorum acies ordinata?
            </p>
            <p>
              Quem é esta que aparece como a aurora quando desponta, formosa
              como a lua, eleita, como o sol, terrível como um exército formado
              em linha?
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
            <p>℣. Dignare me laudare te, Virgo sacrata.</p>
            <p>℣. Dignai-vos, sagrada Virgem, de que eu vos louve.</p>
            <p>
              <span className="text-red-500">℟.</span> Da mihi virtutem contra
              hostes tuos.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Dai-me esforço contra
              vossos inimigos.
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
              Deus, qui virginalem aulam beatae Mariae in qua habitares, eligere
              dignatus es: da, quaesumus, ut sua nos defensione munitos;
              jucundos facias suae interesse commemorationi. Qui vivis et
              regnas...
            </p>
            <p>
              Ó Deus, que Vos dignastes eleger puríssimas entranhas da
              bem-aventurada Virgem Maria para vossa morada: concedei-nos que
              com o presente culto, que alegres lhe tributamos, nos façamos
              beneméritos do seu patrocínio. Vós que viveis e reinais...
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
              <em>Ant.</em> Missus est Gabriel Angelus ad Maríam, Vírginem,
              desponsatam Joseph.
            </p>
            <p>
              <em>Ant.</em> O Anjo Gabriel foi enviado a Maria Virgem, desposada
              com José.
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
            <p>℣. Dignare me laudare te, Virgo sacrata.</p>
            <p>℣. Dignai-vos, sagrada Virgem, de que eu vos louve.</p>
            <p>
              <span className="text-red-500">℟.</span> Da mihi virtutem contra
              hostes tuos.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Dai-me esforço contra
              vossos inimigos.
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

          <h2>Pequeno Capítulo</h2>

          <em>Ct. 6, 9</em>

          <div className="side-by-side">
            <p>
              Quæ est ista, quæ progréditur quasi auróra consúrgens, pulchra ut
              luna, elécta ut sol, terribilis ut castrorum acies ordinata?
            </p>
            <p>
              Quem é esta que aparece como a aurora quando desponta, formosa
              como a lua, eleita, como o sol, terrível como um exército formado
              em linha?
            </p>
            <p>
              <span className="text-red-500">℟.</span> Deo grátias.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Graças a Deus.
            </p>
            <p>℣. Dignare me laudare te, Virgo sacrata.</p>
            <p>℣. Dignai-vos, sagrada Virgem, de que eu vos louve.</p>
            <p>
              <span className="text-red-500">℟.</span> Da mihi virtutem contra
              hostes tuos.
            </p>
            <p>
              <span className="text-red-500">℟.</span> Dai-me esforço contra
              vossos inimigos.
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
        <a className="link" href="/devocionario/antifonas">
          Antífona de Nossa Senhora
        </a>{" "}
        .
      </aside>
    </div>
  );
}
