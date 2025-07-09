import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { TabItem, Tabs } from "~/components/Tabs";
import MementoRerumConditor from "./../../canticos/sacros/mementorerumconditor";
import NuncDimittis from "./../../canticos/sacros/nuncdimittis";
import Salmo128 from "./../salterio/128";
import Salmo129 from "./../salterio/129";
import Salmo130 from "./../salterio/130";

export default function PageCompletas() {
  return (
    <PageWrapper>
      <H1 text="Completas" />

      <Text className="aside">
        Meditemos na sepultura de Jesus Cristo e na sua estadia no túmulo.
      </Text>

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Convérte nos{" "}
          <Text className="cross"> ✠ </Text> Deus, salutáris noster.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Convertei-nos,{" "}
          <Text className="cross"> ✠ </Text> Deus nosso Salvador.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et avérte iram tuam a nobis.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E afastai de nós a vossa ira.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Deus{" "}
          <Text className="cross"> ✠ </Text> in adjutórium meum inténde.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Deus,{" "}
          <Text className="cross"> ✠ </Text> vinde em meu auxílio.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Dómine, ad adjuvándum me
          festína.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Senhor, apressai-Vos em
          socorrer-me.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
          Spíritui Sancto.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e ao
          Espírito Santo.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Sicut erat in pricípio, et
          nunc, et semper, et in sǽcula sæculórum. Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Assim como era no princípio,
          agora e sempre, e por todos os séculos dos séculos. Amen.
        </Text>
      </Language>

      <Salmo128 />

      <Salmo129 />

      <Salmo130 />

      <MementoRerumConditor />

      <Tabs>
        <TabItem label="Depois da Purificação">
          <H2 text="Pequeno Capítulo" />

          <Text className="em">Ecl. 24</Text>

          <Language>
            <Text className="latin">
              Ego mater pulchræ dilectionis, et timoris, et agnitionis, et
              sanctæ spei.
            </Text>
            <Text className="vernacular">
              Eu sou a Mãe do amor belo e do temor, e do conhecimento antigo, e
              da santa esperança.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ora pro nobis sancta Dei
              Génetrix.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Rogai por nós, Santa Mãe de
              Deus.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ut digni efficiamur
              promissionibus Christi.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Para que sejamos dignos das
              promessas de Cristo.
            </Text>
          </Language>

          <H2 text="Ofício 1" />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Sub tuum præsídium confúgimus,
              sancta Dei Génetrix; nostras deprecatiónes ne despícias in
              necessitátibus; sed a perículis cunctis líbera nos semper, Virgo
              gloriósa et benedícta.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> À vossa protecção
              recorremos, Santa Mãe de Deus; não desprezeis as nossas súplicas
              em nossas necessidades; mas livrai-nos sempre de todos os perigos,
              ó Virgem gloriosa e bendita.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <H2 text="Tempo Pascal" />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Regína Cæli, lætáre, allelúja;
              Quia quem meruísti portáre, allelúja; Resurréxit, sicut dixit,
              allelúja; Ora pro nóbis Deum, allelúja. Gaude et lætáre, Virgo
              Maria, allelúja. Quia surréxit Dóminus vere, allelúja.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Rainha do Céu,
              alegrai-Vos, Aleluia! Porque Aquele que merecestes trazer em vosso
              ventre, Aleluia! Ressuscitou como disse, Aleluia! Rogai por nós a
              Deus, Aleluia! Alegrai-Vos e exultai, ó Virgem Maria, Aleluia!
              Porque o Senhor ressuscitou verdadeiramente, Aleluia!
            </Text>
          </Language>

          <NuncDimittis />

          <H2 text="Ofício 1" />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Sub tuum præsídium confúgimus,
              sancta Dei Génetrix; nostras deprecatiónes ne despícias in
              necessitátibus; sed a perículis cunctis líbera nos semper, Virgo
              gloriósa et benedícta.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> À vossa protecção
              recorremos, Santa Mãe de Deus; não desprezeis as nossas súplicas
              em nossas necessidades; mas livrai-nos sempre de todos os perigos,
              ó Virgem gloriosa e bendita.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <H2 text="Tempo Pascal" />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Regína Cæli, lætáre, allelúja;
              Quia quem meruísti portáre, allelúja; Resurréxit, sicut dixit,
              allelúja; Ora pro nóbis Deum, allelúja. Gaude et lætáre, Virgo
              Maria, allelúja. Quia surréxit Dóminus vere, allelúja.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Rainha do Céu,
              alegrai-Vos, Aleluia! Porque Aquele que merecestes trazer em vosso
              ventre, Aleluia! Ressuscitou como disse, Aleluia! Rogai por nós a
              Deus, Aleluia! Alegrai-Vos e exultai, ó Virgem Maria, Aleluia!
              Porque o Senhor ressuscitou verdadeiramente, Aleluia!
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Domine, exaudi orationem
              meam.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ouvi, Senhor, a minha
              oração.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et clamor meus ad te
              veniat.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E o meu clamor chegue até
              Vós.
            </Text>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Beatæ et gloriosæ semper Virginis Mariæ, quǽsumus, Domine,
              intercessio gloriosa nos protegat: et ad vitam perducat æternam.
              Per Dominum...
            </Text>
            <Text className="vernacular">
              Qua gloriosa intercessão da abençoada e gloriosa Maria sempre
              Virgem, nos proteja, nós Vos pedimos Senhor, e que nos traga a
              vida eterna. Por nosso Senhor...
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
        </TabItem>

        <TabItem label="No Advento">
          <H2 text="Pequeno Capítulo" />

          <Text className="em">Is. 7, 14-15</Text>

          <Language>
            <Text className="latin">
              Ecce Virgo concipiet, et pariet filium, et vocabitur nomen ejus
              Emmanuel. Butyrum et mel comedet, ut sciat reprobare malum, et
              eligere bonum.
            </Text>
            <Text className="vernacular">
              Pois por isso o mesmo Senhor vos dará este sinal: Uma virgem
              conceberá e dará à luz um filho, e o seu nome será Emanuel. Ele
              comerá manteiga e mel, até que saiba rejeitar o mal e escolher o
              bem.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo gratias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Angelus Dómini nuntiávit
              Maríæ.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>O Anjo do Senhor anunciou a
              Maria.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Et concépit de Spíritu
              Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> E Ela concebeu do Espírito
              Santo.
            </Text>
            <Text className="latin">
              <Text className="latin">Nunc. Ant.</Text> Spiritus Sanctus in te
              descendet, Maria: ne timeas, habebis in utero Filium Dei,
              (Allelúja).
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Nunc. Ant.</Text> O Espírito Santo
              descerá sobre vós, ó Maria; não temais: concebereis, e tereis no
              ventre o Filho de Deus, (Aleluia).
            </Text>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Deus, qui de beatæ Mariæ Virginis utero Verbum tuum, Angelo
              nuntiante, carnem suscipere voluisti: præsta supplicibus tuis; ut
              qui vere eam Genetricem Dei credimus, ejus apud te
              intercessionibus adjuvemur. Per eundem Dominum nostrum Jesum
              Christum.
            </Text>
            <Text className="vernacular">
              Ó Deus, que pela anunciação do Anjo quisestes que o vosso Verbo se
              vestisse da nossa carne nas entranhas da bem-aventurada Virgem
              Maria: nós, vossos humildes servos, cremos ser ela a verdadeira
              Mãe de Deus, concedei-nos que nos ajudem as suas intercessões para
              convosco. Pelo mesmo Jesus Cristo Senhor Nosso.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
        </TabItem>

        <TabItem label="No Natal">
          <H2 text="Pequeno Capítulo" />

          <Text className="em">Ecl. 24</Text>

          <Language>
            <Text className="latin">
              Ego mater pulchræ dilectionis, et timoris, et agnitionis, et
              sanctæ spei. Eu sou a Mãe do amor belo e do temor, e do
              conhecimento antigo, e da santa esperança.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Ora pro nobis sancta Dei
              Génetrix.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Rogai por nós, Santa Mãe de
              Deus.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Ut digni efficiamur
              promissionibus Christi.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Para que sejamos dignos das
              promessas de Cristo.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Nunc. Ant.</Text> Magnum hæreditatis
              mysterium: templum Dei factus est uterus nescientis virum: non est
              pollutus ex ea carnem assumens; omnes gentes venient, dicentes:
              Gloria tibi, Domine.
            </Text>
            <Text className="latin">
              <Text className="latin">Nunc. Ant.</Text> Grande mystério de
              herança: o ventre daquela que não conheceu varão, é feito templo
              de Deus; o qual se não manchou, tomando dela carne humana. Virão
              todas as gentes, dizendo: Glória a Vós, ó Senhor.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Orémus.</Text>
            </Text>
            <Text className="latin">
              <Text className="latin">Oremos.</Text>
            </Text>
            <Text className="vernacular">
              Deus, qui salutis æternæ, beatæ Mariæ virginitate fœcunda, humano
              generi præmia præstitisti: tribue, quǽsumus; ut ipsam pro nobis
              intercedere sentiamus, per quam meruimus auctorem vitæ suscipere,
              Dominum nostrum Jesum Christum Filium tuum. Qui tecum vivit et
              regnat in unitate Spiritus Sancti, Deus, per omnia sæcula
              sæculorum.
            </Text>
            <Text className="latin">
              Ó Deus, que pela virgindade fecunda da bem-aventurada Maria,
              destes ao género humano as gratificações da salvação eterna:
              concedei-nos, Vos rogamos, que experienciemos sua intercessão por
              nós, dela pela qual recebemos o autor da vida, Nosso Senhor Jesus
              Cristo, vosso Filho. Que convosco, e com o Espírito Santo, vive e
              reina por todos os séculos.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
        </TabItem>
      </Tabs>

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Domine, exaudi orationem meam.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Ouvi, Senhor, a minha oração.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Et clamor meus ad te veniat.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> E o meu clamor chegue até Vós.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Benedicamus Domino.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Bendigamos o Senhor.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Deo gratias.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Graças a Deus.
        </Text>
      </Language>

      <Text className="aside">
        Acabar com uma{" "}
        <Link className="link" href="/devocionario/antifonas">
          Antífona de Nossa Senhora
        </Link>{" "}
        .
      </Text>
    </PageWrapper>
  );
}
