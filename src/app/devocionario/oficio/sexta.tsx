import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { TabItem, Tabs } from "~/components/Tabs";
import { Typography } from "~/components/typography";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo122 from "./../salterio/122";
import Salmo123 from "./../salterio/123";
import Salmo124 from "./../salterio/124";

export default function PageSexta() {
  return (
    <PageWrapper>
      <H1 text="Sexta" />

      <Typography className="aside">
        Meditemos na crucifixão de Jesus Cristo e nas palavras pronunciadas por ele na Santa Cruz,
        dando-nos Maria por Mãe.
      </Typography>

      <Language>
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

      <MementoRerumConditor />

      <Language>
        <Typography className="latin">
          <Typography className="latin">Ant.</Typography> In odorem unguentorum tuorum currimus:
          adolescentulæ dilexerunt te nimis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Ant.</Typography> Todos corremos à fragrância dos
          vossos aromas, as donzelas amar-vos-ão grandemente.
        </Typography>
      </Language>

      <Salmo122 />

      <Salmo123 />

      <Salmo124 />

      <Tabs>
        <TabItem label="Depois da Purificação">
          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> In odorem unguentorum tuorum currimus:
              adolescentulæ dilexerunt te nimis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Todos corremos à fragrância dos
              vossos aromas, as donzelas amar-vos-ão grandemente.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ecl. 24, 16</Typography>

          <Language>
            <Typography className="latin">
              Et radicavi in populo honorificato, et in parte Dei mei hereditas illius et in
              plenitudine sanctorum detentio mea.
            </Typography>
            <Typography className="vernacular">
              E lancei raízes no povo honorificado, e na parte de meu Deus, herança sua; e na
              congregação dos santos fiz a minha morada.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Benedicta tu in mulieribus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Bendita sois v´so entre as mulheres.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et benedictus fructus ventris tui.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E bendito é o fruto do vosso
              ventre.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="em">Hic genuflectitur</Typography> Kyrie eleison
            </Typography>
            <Typography className="vernacular">
              <Typography className="em">Genuflectir</Typography> Senhor, tende piedade de nós.
            </Typography>
            <Typography className="latin">Christe, eléison.</Typography>
            <Typography className="vernacular">Cristo, tende piedade de nós.</Typography>
            <Typography className="latin">Kyrie, eléison.</Typography>
            <Typography className="vernacular">Senhor, tende piedade de nós.</Typography>
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
              Concede, misericors Deus, fragilitati nostrae praesidium: ut qui sanctae Dei
              Genitricis memoriam agimus, intercessionis ejus auxilio, a nostris iniquitatibus
              resurgamus. Per eúmdem Dóminum...
            </Typography>
            <Typography className="vernacular">
              Concedei, misericordioso Deus, um esforço grande à nossa fragilidade, para que os que
              celebramos a memória da santa Mãe de Deus, com o auxílio da sua intercessão,
              ressuscitemos das nossas iniquidades. Pelo mesmo Senhor...
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>
        </TabItem>

        <TabItem label="No Advento">
          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ne timeas, María, invenísti grátiam
              apud Dóminum: ecce concípies et páries fílium, (alleluia).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Não temais, ó Maria, achastes
              graça para com o Senhor: concebereis, e dareis à luz um filho, (aleluia).
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Lc. 1, 32</Typography>

          <Language>
            <Typography className="latin">
              Dabit illi Dominus Deus sedem David patris ejus: et regnabit in domo Jacob in æternum,
              et regni ejus non erit finis.
            </Typography>
            <Typography className="vernacular">
              O Senhor Deus lhe dará o trono de David seu Pai, e reinará eternamente na casa de
              Jacob, e o seu Reino não terá fim.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Benedicta tu in mulieribus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Bendita sois vóo entre as mulheres.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et benedictus fructus ventris tui.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E bendito é o fruto do vosso
              ventre.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="em">Hic genuflectitur</Typography> Kyrie eleison
            </Typography>
            <Typography className="vernacular">
              <Typography className="em">Genuflectir</Typography> Senhor, tende piedade de nós.
            </Typography>
            <Typography className="latin">Christe, eléison.</Typography>
            <Typography className="vernacular">Cristo, tende piedade de nós.</Typography>
            <Typography className="latin">Kyrie, eléison.</Typography>
            <Typography className="vernacular">Senhor, tende piedade de nós.</Typography>
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
              Deus, qui de beatæ Mariæ Virginis utero Verbum tuum, Angelo nuntiante, carnem
              suscipere voluisti: præsta supplicibus tuis; ut qui vere eam Genetricem Dei credimus,
              ejus apud te intercessionibus adjuvemur. Per eundem Dominum nostrum Jesum Christum.
            </Typography>
            <Typography className="vernacular">
              Ó Deus, que pela anunciação do Anjo quisestes que o vosso Verbo se vestisse da nossa
              carne nas entranhas da bem-aventurada Virgem Maria: nós, vossos humildes servos,
              cremos ser ela a verdadeira Mãe de Deus, concedei-nos que nos ajudem as suas
              intercessões para convosco. Pelo mesmo Jesus Cristo Senhor Nosso.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>
        </TabItem>

        <TabItem label="No Natal">
          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Rubum, quem viderat Moyses
              incombustum, conservatam agnovimus tuam laudabilem virginitatem: Dei Genitrix,
              intercede pro nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Na sarça que Moisés via sem se
              consumir, reconhecemos a vossa admirável virgindade conservada: rogai por nós, Santa
              Mãe de Deus.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ecl. 24, 16</Typography>

          <Language>
            <Typography className="latin">
              Et radicavi in populo honorificato, et in parte Dei mei hereditas illius et in
              plenitudine sanctorum detentio mea.
            </Typography>
            <Typography className="vernacular">
              E lancei raízes no povo honorificado, e na parte de meu Deus, herança sua; e na
              congregação dos santos fiz a minha morada.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Benedicta tu in mulieribus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Bendita sois vóo entre as mulheres.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et benedictus fructus ventris tui.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E bendito é o fruto do vosso
              ventre.
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
              Deus, qui salutis æternæ, beatæ Mariæ virginitate fœcunda, humano generi præmia
              præstitisti: tribue, quǽsumus; ut ipsam pro nobis intercedere sentiamus, per quam
              meruimus auctorem vitæ suscipere, Dominum nostrum Jesum Christum Filium tuum. Qui
              tecum vivit et regnat in unitate Spiritus Sancti, Deus, per omnia sæcula sæculorum.
            </Typography>
            <Typography className="vernacular">
              Ó Deus, que pela virgindade fecunda da bem-aventurada Maria, destes ao género humano
              as gratificações da salvação eterna: concedei-nos, Vos rogamos, que experienciemos sua
              intercessão por nós, dela pela qual recebemos o autor da vida, Nosso Senhor Jesus
              Cristo, vosso Filho. Que convosco, e com o Espírito Santo, vive e reina por todos os
              séculos.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>
        </TabItem>
      </Tabs>

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
