import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { TabItem, Tabs } from "~/components/Tabs";
import { Typography } from "~/components/typography";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo125 from "./../salterio/125";
import Salmo126 from "./../salterio/126";
import Salmo127 from "./../salterio/127";

export default function PageNoa() {
  return (
    <PageWrapper>
      <H1 text="Noa" />

      <Typography className="aside">
        Meditemos em Jesus morrendo na cruz, na agitação da natureza neste
        momento, na destruição do reino de Satanás, e na Igreja nascendo do lado
        aberto do seu Divino Esposo preso à Santa Cruz.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Deus{" "}
          <Typography className="cross"> ✠ </Typography> in adjutórium meum
          inténde.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Deus,{" "}
          <Typography className="cross"> ✠ </Typography> vinde em meu auxílio.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Dómine, ad
          adjuvándum me festína.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Senhor,
          apressai-Vos em socorrer-me.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Glória Patri, et
          Fílio, et Spíritui Sancto.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao
          Filho e ao Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sicut erat in
          pricípio, et nunc, et semper, et in sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim como era no
          princípio, agora e sempre, e por todos os séculos dos séculos. Amen.
        </Typography>
      </Language>

      <MementoRerumConditor />

      <Language>
        <Typography className="latin">
          <Typography className="latin">Ant.</Typography> Pulchra es et decora,
          filia Jerusalem: terribus ut castrorum acies ordinara.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Ant.</Typography> Filha de
          Jerusalém, sois bela e decorosa, terrível como um exército formado em
          linha.
        </Typography>
      </Language>

      <Salmo125 />

      <Salmo126 />

      <Salmo127 />

      <Tabs>
        <TabItem label="Depois da Purificação">
          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Pulchra es et
              decora, filia Jerusalem: terribus ut castrorum acies ordinara.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Filha de
              Jerusalém, sois bela e decorosa, terrível como um exército formado
              em linha.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ecl. 24, 19-20</Typography>

          <Language>
            <Typography className="latin">
              Sicut cinnamomum et balsamum aromatizans odorem dedi: quasi myrrha
              electa dedi suavitatem odoris.
            </Typography>
            <Typography className="vernacular">
              Assim como o cinamomo e o bálsamo, que difundem cheiro, dei eu
              fragrância: como a mirra escolhida, dei cheiro de suavidade.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Post partum,
              Virgo, invioláta permansísti.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Despois do parto
              permanecestes imaculada.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Dei Génetrix,
              intercéde pro nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Intercedei por
              nós, ó Mãe de Deus.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="em">Hic genuflectitur</Typography> Kyrie
              eleison
            </Typography>
            <Typography className="vernacular">
              <Typography className="em">Genuflectir</Typography> Senhor, tende
              piedade de nós.
            </Typography>
            <Typography className="latin">Christe, eléison.</Typography>
            <Typography className="vernacular">
              Cristo, tende piedade de nós.
            </Typography>
            <Typography className="latin">Kyrie, eléison.</Typography>
            <Typography className="vernacular">
              Senhor, tende piedade de nós.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Domine, exaudi
              orationem meam.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Ouvi, Senhor, a
              minha oração.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et clamor meus
              ad te veniat.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E o meu clamor
              chegue até Vós.
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
              Famulorum tuorum, quaesumus, Domine, delictis ignosce: ut qui tibi
              placere de actibus nostris non valemus, Genitricis Filii tui
              Domini nostri intercessione salvemur: Qui tecum vivit et regnat...
            </Typography>
            <Typography className="vernacular">
              Perdoai, Senhor, como Vos pedimos, os delictos dos vossos servos;
              para que não podendo agradar-Vos com as nossas obras, sejamos
              salvos, pela intercessão da Virgem Mãe de vosso Filhos e Senhor
              nosso: Que convosco vive e reina...
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
              <Typography className="latin">Ant.</Typography> Ecce ancilla
              Domini: fiat mihi secundum verbum tuum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis aqui a
              escrava do Senhor, faça-se em mim segundo a vossa palavra.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Is. 7, 14-15</Typography>

          <Language>
            <Typography className="latin">
              Ecce Virgo concipiet, et pariet filium, et vocabitur nomen ejus
              Emmanuel. Butyrum et mel comedet, ut sciat reprobare malum, et
              eligere bonum.
            </Typography>
            <Typography className="vernacular">
              Pois por isso o mesmo Senhor vos dará este sinal: Uma virgem
              conceberá e dará à luz um filho, e o seu nome será Emanuel. Ele
              comerá manteiga e mel, até que saiba rejeitar o mal e escolher o
              bem.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Benedicta tu in
              mulieribus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Bendita sois vóo
              entre as mulheres.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et benedictus
              fructus ventris tui.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E bendito é o
              fruto do vosso ventre.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="em">Hic genuflectitur</Typography> Kyrie
              eleison
            </Typography>
            <Typography className="vernacular">
              <Typography className="em">Genuflectir</Typography> Senhor, tende
              piedade de nós.
            </Typography>
            <Typography className="latin">Christe, eléison.</Typography>
            <Typography className="vernacular">
              Cristo, tende piedade de nós.
            </Typography>
            <Typography className="latin">Kyrie, eléison.</Typography>
            <Typography className="vernacular">
              Senhor, tende piedade de nós.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Domine, exaudi
              orationem meam.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Ouvi, Senhor, a
              minha oração.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et clamor meus
              ad te veniat.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E o meu clamor
              chegue até Vós.
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
              Deus, qui de beatæ Mariæ Virginis utero Verbum tuum, Angelo
              nuntiante, carnem suscipere voluisti: præsta supplicibus tuis; ut
              qui vere eam Genetricem Dei credimus, ejus apud te
              intercessionibus adjuvemur. Per eundem Dominum nostrum Jesum
              Christum.
            </Typography>
            <Typography className="vernacular">
              Ó Deus, que pela anunciação do Anjo quisestes que o vosso Verbo se
              vestisse da nossa carne nas entranhas da bem-aventurada Virgem
              Maria: nós, vossos humildes servos, cremos ser ela a verdadeira
              Mãe de Deus, concedei-nos que nos ajudem as suas intercessões para
              convosco. Pelo mesmo Jesus Cristo Senhor Nosso.
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
              <Typography className="latin">Ant.</Typography> Ecce, Maria genuit
              nobis Salvatorem, quem Joannes videns exclamavit, dicens: Ecce
              Agnus Dei, ecce qui tollit peccata mundi, (allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis, Maria
              deu à luz o nosso Salvador, que João reconheceu e exclamou: eis o
              Cordeiro de Deus, Aquele que tira o pecado do mundo, (aleluia).
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ecl. 24, 19-20</Typography>

          <Language>
            <Typography className="latin">
              In plateis sicut cinnamomum et balsamum aromatizans odorem dedi:
              quasi myrrha electa, dedi suavitatem odoris.
            </Typography>
            <Typography className="vernacular">
              Nas praças assim como o cinamomo e o bálsamo, que difundem cheiro,
              dei eu fragrância; como a mirra, dei cheiro de suavidade.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Post partum,
              Virgo, invioláta permansísti.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Despois do parto
              permanecestes imaculada.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Dei Génetrix,
              intercéde pro nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Intercedei por
              nós, ó Mãe de Deus.
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
              Deus, qui salutis æternæ, beatæ Mariæ virginitate fœcunda, humano
              generi præmia præstitisti: tribue, quǽsumus; ut ipsam pro nobis
              intercedere sentiamus, per quam meruimus auctorem vitæ suscipere,
              Dominum nostrum Jesum Christum Filium tuum. Qui tecum vivit et
              regnat in unitate Spiritus Sancti, Deus, per omnia sæcula
              sæculorum.
            </Typography>
            <Typography className="vernacular">
              Ó Deus, que pela virgindade fecunda da bem-aventurada Maria,
              destes ao género humano as gratificações da salvação eterna:
              concedei-nos, Vos rogamos, que experienciemos sua intercessão por
              nós, dela pela qual recebemos o autor da vida, Nosso Senhor Jesus
              Cristo, vosso Filho. Que convosco, e com o Espírito Santo, vive e
              reina por todos os séculos.
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
          <Typography className="versicle"> ℣. </Typography>Domine, exaudi
          orationem meam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Ouvi, Senhor, a
          minha oração.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et clamor meus ad
          te veniat.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E o meu clamor
          chegue até Vós.
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
          <Typography className="versicle"> ℣. </Typography>Fidelium animæ per
          misericordiam Dei, requiescant in pace.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>E que as almas dos
          fiéis, pela misericórdia de Deus, descansem em paz.
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
