import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import Salmo119 from "./../salterio/119";
import Salmo120 from "./../salterio/120";
import Salmo121 from "./../salterio/121";

export default function PageTerca() {
  return (
    <PageWrapper>
      <H1 text="Terça" />

      <Typography className="aside">
        Meditemos na flagelação, na coroação de espinhos e na condenação à
        morte. Podemos ainda meditar na descida do Espírito Santo, que se deu
        nesta mesma hora.
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
          <Typography className="response"> ℟. </Typography> Dómine, ad adjuvándum me
          festína.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Senhor, apressai-Vos em
          socorrer-me.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et
          Spíritui Sancto.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao Filho e ao
          Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et
          nunc, et semper, et in sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim como era no princípio,
          agora e sempre, e por todos os séculos dos séculos. Amen.
        </Typography>
      </Language>

      <MementoRerumConditor />

      <Language>
        <Typography className="latin">
          <Typography className="latin">Ant.</Typography> Maria Virgo assumpta est ad
          ætherum thalamum, in quo Rex regum stellato sedet solio.
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Ant.</Typography> A Virgem Maria foi exaltada
          ao tálamo celeste, onde o Rei dos reis está sentado num trono de
          estrelas.
        </Typography>
      </Language>

      <Salmo119 />

      <Salmo120 />

      <Salmo121 />

      <Tabs>
        <TabItem label="Depois da Purificação">
          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Maria Virgo assumpta est ad
              ætherum thalamum, in quo Rex regum stellato sedet solio.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> A Virgem Maria foi
              exaltada ao tálamo celeste, onde o Rei dos reis está sentado num
              trono de estrelas.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ecl. 24, 15</Typography>

          <Language>
            <Typography className="latin">
              Et sic in Sion firmata sum, et in civitate sanctificata similiter
              requievi, et in Jerúsalem potestas mea.
            </Typography>
            <Typography className="vernacular">
              E desta maneira estou fundada em Sião, e semelhantemente repousei
              na cidade santificada, e em Jerúsalem é o meu poder.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Diffusa est gratia in labiis
              tuis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>A graça derramou-se nos
              vossos lábios.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Propterea benedixit te Deus
              in æternum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Por isso vos abençoou Deus
              para sempre.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="em">Hic genuflectitur</Typography> Kyrie eleison
            </Typography>
            <Typography className="vernacular">
              <Typography className="em">Genuflectir</Typography> Senhor, tende piedade de
              nós.
            </Typography>
            <Typography className="latin">Christe, eléison.</Typography>
            <Typography className="vernacular">Cristo, tende piedade de nós.</Typography>
            <Typography className="latin">Kyrie, eléison.</Typography>
            <Typography className="vernacular">Senhor, tende piedade de nós.</Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Domine, exaudi orationem
              meam.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Ouvi, Senhor, a minha
              oração.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et clamor meus ad te
              veniat.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E o meu clamor chegue até
              Vós.
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
              Deus, qui salutis aeternae, beatae Mariae virginitate fecunda,
              humano generi praemia praestitisti: tribue, quaesumus; ut ipsam
              pro nobis intercedere sentiamus, per quam meruimus auctorem vitae
              suscipere, Dominum nostrum Jesum Christum Filium tuum: Qui tecum
              vivit et regnat...
            </Typography>
            <Typography className="vernacular">
              Ó Deus, que pela virgindade fecunda da B. Maria, participastes ao
              género humano os prémios da salvação eterna: concedei-nos, Vos
              rogamos, que experimentemos quanto é poderosa a nosso favor a
              intercessão daquela Virgem, pela qual merecemos receber o autor da
              vida nosso Senhor Jesus Cristo, Filho vosso: que convosco Vive e
              reina...
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>
        </TabItem>

        <TabItem label="No Adveno">
          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ave, María, grátia plena;
              Dóminus tecum: benedícta tu in muliéribus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ave, Maria, cheia de
              graça, o Senhor é convosco; bendita sois vós entre as mulheres.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Is. 6, 1-2</Typography>

          <Language>
            <Typography className="latin">
              Egredietur virga de radice Jesse, et flos de radice ejus ascendet.
              Et requiescet super eum Spiritus Domini.
            </Typography>
            <Typography className="vernacular">
              Sairá uma vara da raiz de Jessé, e subirá uma flor da sua raiz, e
              descansará sobre ele o Espírito do Senhor.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Diffusa est gratia in labiis
              tuis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Estão cheios de graça vossos
              lábios.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Propterea benedixit te Deum
              in æternum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Por isso Deus vos abençoou
              para sempre.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="em">Hic genuflectitur</Typography> Kyrie eleison
            </Typography>
            <Typography className="vernacular">
              <Typography className="em">Genuflectir</Typography> Senhor, tende piedade de
              nós.
            </Typography>
            <Typography className="latin">Christe, eléison.</Typography>
            <Typography className="vernacular">Cristo, tende piedade de nós.</Typography>
            <Typography className="latin">Kyrie, eléison.</Typography>
            <Typography className="vernacular">Senhor, tende piedade de nós.</Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Domine, exaudi orationem
              meam.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Ouvi, Senhor, a minha
              oração.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et clamor meus ad te
              veniat.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E o meu clamor chegue até
              Vós.
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
              <Typography className="latin">Ant.</Typography> Quando natus es inefabilitre
              ex Virgnine, tunc impletæ sunt Scripturæ: sicut pluvia in vellus
              descendisti, ut salvum faceres genus humanum: te laudamus, Deus
              noster.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Quando nascestes
              misteriosamente da Virgem, então se cumpriram as Escrituras:
              descestes como a chuva sobre a lã, para salvar a humanidade. Nós
              Vos louvamos, ó Nosso Deus.
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
          <Typography className="versicle"> ℣. </Typography>Fidelium animæ per misericordiam
          Dei, requiescant in pace.
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
        </Link>
        .
      </Typography>
    </PageWrapper>
  );
}
