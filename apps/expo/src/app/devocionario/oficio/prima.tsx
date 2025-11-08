import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo53 from "./../salterio/053";
import Salmo84 from "./../salterio/084";
import Salmo116 from "./../salterio/116";

export default function PagePrima() {
  return (
    <PageWrapper>
      <H1 text="Prima" />

      <Typography className="aside">
        Meditemos nos ultrajes, sofrimentos e açoites, suportados por Jesus
        Cristo em casa de Caifás. Igualmente na aparição à Santa Virgem após a
        ressurreição e na visita das santas mulheres ao sepulcro.
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
          <Typography className="latin">Ant.</Typography> Assumpta est Maria in
          cælum: gaudete angeli, laudantes benedicunt Dominum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Ant.</Typography> Maria foi
          exaltada ao céu; os anjos se alegram, louvam, e glorificam o Senhor.
        </Typography>
      </Language>

      <Salmo53 />

      <Salmo84 />

      <Salmo116 />

      <Tabs>
        <TabItem label="Depois da Purificação">
          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Assumpta est Maria
              in cælum: gaudete angeli, laudantes benedicunt Dominum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Maria foi
              exaltada ao céu; os anjos se alegram, louvam, e glorificam o
              Senhor.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ct. 6, 9</Typography>

          <Language>
            <Typography className="latin">
              Quæ est ista, quæ progréditur quasi auróra consúrgens, pulchra ut
              luna, elécta ut sol, terribilis ut castrorum acies ordinata?
            </Typography>
            <Typography className="vernacular">
              Quem é esta que aparece como a aurora quando desponta, formosa
              como a lua, eleita, como o sol, terrível como um exército formado
              em linha?
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Dignare me
              laudare te, Virgo sacrata.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Dignai-vos,
              sagrada Virgem, de que eu vos louve.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Da mihi
              virtutem contra hostes tuos.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Dai-me esforço
              contra vossos inimigos.
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
              Deus, qui virginalem aulam beatae Mariae in qua habitares, eligere
              dignatus es: da, quaesumus, ut sua nos defensione munitos;
              jucundos facias suae interesse commemorationi. Qui vivis et
              regnas...
            </Typography>
            <Typography className="vernacular">
              Ó Deus, que Vos dignastes eleger puríssimas entranhas da
              bem-aventurada Virgem Maria para vossa morada: concedei-nos que
              com o presente culto, que alegres lhe tributamos, nos façamos
              beneméritos do seu patrocínio. Vós que viveis e reinais...
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
              <Typography className="latin">Ant.</Typography> Missus est Gabriel
              Angelus ad Maríam, Vírginem, desponsatam Joseph.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Anjo
              Gabriel foi enviado a Maria Virgem, desposada com José.
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
              <Typography className="versicle"> ℣. </Typography>Dignare me
              laudare te, Virgo sacrata.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Dignai-vos,
              sagrada Virgem, de que eu vos louve.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Da mihi
              virtutem contra hostes tuos.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Dai-me esforço
              contra vossos inimigos.
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
              <Typography className="latin">Ant.</Typography> O admirabile
              commercium: Creator generis humani, animatum corpus sumens, de
              Virgine nasci dignatus est: et procedens homo sine semine,
              largitus est nobis suam Deitatem.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ó admirável
              permuta! O Criador do género humano, tomando corpo e alma,
              dignou-se nascer de uma Virgem; e, feito homem sem progenitor,
              tornou-nos participantes da sua divindade.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ct. 6, 9</Typography>

          <Language>
            <Typography className="latin">
              Quæ est ista, quæ progréditur quasi auróra consúrgens, pulchra ut
              luna, elécta ut sol, terribilis ut castrorum acies ordinata?
            </Typography>
            <Typography className="vernacular">
              Quem é esta que aparece como a aurora quando desponta, formosa
              como a lua, eleita, como o sol, terrível como um exército formado
              em linha?
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Dignare me
              laudare te, Virgo sacrata.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Dignai-vos,
              sagrada Virgem, de que eu vos louve.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Da mihi
              virtutem contra hostes tuos.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Dai-me esforço
              contra vossos inimigos.
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
