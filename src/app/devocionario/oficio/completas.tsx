import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { TabItem, Tabs } from "~/components/Tabs";
import { Typography } from "~/components/typography";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import NuncDimittis from "./../../canticos/sacros/nuncdimittis";
import Salmo128 from "./../salterio/128";
import Salmo129 from "./../salterio/129";
import Salmo130 from "./../salterio/130";

export default function PageCompletas() {
  return (
    <PageWrapper>
      <H1 text="Completas" />

      <Typography className="aside">
        Meditemos na sepultura de Jesus Cristo e na sua estadia no túmulo.
      </Typography>

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Convérte nos{" "}
          <Typography className="cross"> ✠ </Typography> Deus, salutáris noster.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Convertei-nos,{" "}
          <Typography className="cross"> ✠ </Typography> Deus nosso Salvador.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et avérte iram tuam a nobis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E afastai de nós a vossa ira.
        </Typography>
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

      <Salmo128 />

      <Salmo129 />

      <Salmo130 />

      <MementoRerumConditor />

      <Tabs>
        <TabItem label="Depois da Purificação">
          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ecl. 24</Typography>

          <Language>
            <Typography className="latin">
              Ego mater pulchræ dilectionis, et timoris, et agnitionis, et sanctæ spei.
            </Typography>
            <Typography className="vernacular">
              Eu sou a Mãe do amor belo e do temor, e do conhecimento antigo, e da santa esperança.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Ora pro nobis sancta Dei Génetrix.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Rogai por nós, Santa Mãe de Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Ut digni efficiamur promissionibus
              Christi.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Para que sejamos dignos das
              promessas de Cristo.
            </Typography>
          </Language>

          <H2 text="Ofício 1" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Sub tuum præsídium confúgimus, sancta
              Dei Génetrix; nostras deprecatiónes ne despícias in necessitátibus; sed a perículis
              cunctis líbera nos semper, Virgo gloriósa et benedícta.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> À vossa protecção recorremos,
              Santa Mãe de Deus; não desprezeis as nossas súplicas em nossas necessidades; mas
              livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>

          <H2 text="Tempo Pascal" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Regína Cæli, lætáre, allelúja; Quia
              quem meruísti portáre, allelúja; Resurréxit, sicut dixit, allelúja; Ora pro nóbis
              Deum, allelúja. Gaude et lætáre, Virgo Maria, allelúja. Quia surréxit Dóminus vere,
              allelúja.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Rainha do Céu, alegrai-Vos,
              Aleluia! Porque Aquele que merecestes trazer em vosso ventre, Aleluia! Ressuscitou
              como disse, Aleluia! Rogai por nós a Deus, Aleluia! Alegrai-Vos e exultai, ó Virgem
              Maria, Aleluia! Porque o Senhor ressuscitou verdadeiramente, Aleluia!
            </Typography>
          </Language>

          <NuncDimittis />

          <H2 text="Ofício 1" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Sub tuum præsídium confúgimus, sancta
              Dei Génetrix; nostras deprecatiónes ne despícias in necessitátibus; sed a perículis
              cunctis líbera nos semper, Virgo gloriósa et benedícta.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> À vossa protecção recorremos,
              Santa Mãe de Deus; não desprezeis as nossas súplicas em nossas necessidades; mas
              livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
          </Language>

          <H2 text="Tempo Pascal" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Regína Cæli, lætáre, allelúja; Quia
              quem meruísti portáre, allelúja; Resurréxit, sicut dixit, allelúja; Ora pro nóbis
              Deum, allelúja. Gaude et lætáre, Virgo Maria, allelúja. Quia surréxit Dóminus vere,
              allelúja.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Rainha do Céu, alegrai-Vos,
              Aleluia! Porque Aquele que merecestes trazer em vosso ventre, Aleluia! Ressuscitou
              como disse, Aleluia! Rogai por nós a Deus, Aleluia! Alegrai-Vos e exultai, ó Virgem
              Maria, Aleluia! Porque o Senhor ressuscitou verdadeiramente, Aleluia!
            </Typography>
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
              <Typography className="latin">Orémus.</Typography>
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Oremos.</Typography>
            </Typography>
            <Typography className="latin">
              Beatæ et gloriosæ semper Virginis Mariæ, quǽsumus, Domine, intercessio gloriosa nos
              protegat: et ad vitam perducat æternam. Per Dominum...
            </Typography>
            <Typography className="vernacular">
              Qua gloriosa intercessão da abençoada e gloriosa Maria sempre Virgem, nos proteja, nós
              Vos pedimos Senhor, e que nos traga a vida eterna. Por nosso Senhor...
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
          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Is. 7, 14-15</Typography>

          <Language>
            <Typography className="latin">
              Ecce Virgo concipiet, et pariet filium, et vocabitur nomen ejus Emmanuel. Butyrum et
              mel comedet, ut sciat reprobare malum, et eligere bonum.
            </Typography>
            <Typography className="vernacular">
              Pois por isso o mesmo Senhor vos dará este sinal: Uma virgem conceberá e dará à luz um
              filho, e o seu nome será Emanuel. Ele comerá manteiga e mel, até que saiba rejeitar o
              mal e escolher o bem.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo gratias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Angelus Dómini nuntiávit Maríæ.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>O Anjo do Senhor anunciou a Maria.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et concépit de Spíritu Sancto.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E Ela concebeu do Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Nunc. Ant.</Typography> Spiritus Sanctus in te
              descendet, Maria: ne timeas, habebis in utero Filium Dei, (Allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Nunc. Ant.</Typography> O Espírito Santo descerá
              sobre vós, ó Maria; não temais: concebereis, e tereis no ventre o Filho de Deus,
              (Aleluia).
            </Typography>
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
          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ecl. 24</Typography>

          <Language>
            <Typography className="latin">
              Ego mater pulchræ dilectionis, et timoris, et agnitionis, et sanctæ spei. Eu sou a Mãe
              do amor belo e do temor, e do conhecimento antigo, e da santa esperança.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Ora pro nobis sancta Dei Génetrix.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Rogai por nós, Santa Mãe de Deus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Ut digni efficiamur promissionibus
              Christi.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Para que sejamos dignos das
              promessas de Cristo.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Nunc. Ant.</Typography> Magnum hæreditatis
              mysterium: templum Dei factus est uterus nescientis virum: non est pollutus ex ea
              carnem assumens; omnes gentes venient, dicentes: Gloria tibi, Domine.
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Nunc. Ant.</Typography> Grande mystério de herança: o
              ventre daquela que não conheceu varão, é feito templo de Deus; o qual se não manchou,
              tomando dela carne humana. Virão todas as gentes, dizendo: Glória a Vós, ó Senhor.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Orémus.</Typography>
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Oremos.</Typography>
            </Typography>
            <Typography className="vernacular">
              Deus, qui salutis æternæ, beatæ Mariæ virginitate fœcunda, humano generi præmia
              præstitisti: tribue, quǽsumus; ut ipsam pro nobis intercedere sentiamus, per quam
              meruimus auctorem vitæ suscipere, Dominum nostrum Jesum Christum Filium tuum. Qui
              tecum vivit et regnat in unitate Spiritus Sancti, Deus, per omnia sæcula sæculorum.
            </Typography>
            <Typography className="latin">
              Ó Deus, que pela virgindade fecunda da bem-aventurada Maria, destes ao género humano
              as gratificações da salvação eterna: concedei-nos, Vos rogamos, que experienciemos sua
              intercessão por nós, dela pela qual recebemos o autor da vida, Nosso Senhor Jesus
              Cristo, vosso Filho. Que convosco, e com o Espírito Santo, vive e reina por todos os
              séculos.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="latin">
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
