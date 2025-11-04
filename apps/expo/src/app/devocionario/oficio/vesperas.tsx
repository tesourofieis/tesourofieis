import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
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
    <PageWrapper>
      <H1 text="Vésperas" />

      <Typography className="aside">
        Meditemos na descida da cruz, o corpo de Jesus Cristo colocado nos
        braços de sua santa Mãe e na instituição do adorável Sacramento da
        Eucaristia.
      </Typography>

      <Tabs>
        <TabItem label="Depois da Purificação">
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
              <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Dum esset Rex in acubitu suo,
              nardus mea dedit odorem suavitatis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Estando o Rei no seu
              repouso, exalou o meu frasco um suavíssimo cheiro.
            </Typography>
          </Language>

          <Salmo109 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Dum esset Rex in acubitu suo,
              nardus mea dedit odorem suavitatis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Estando o Rei no seu
              repouso, exalou o meu frasco um suavíssimo cheiro.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Læva ejus sub capite meo, et
              dextera ilius amplexabitur me.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Sua mão esquerda estará
              debaixo de minha cabeça, e a sua direita me dará um abraço.
            </Typography>
          </Language>

          <Salmo112 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Læva ejus sub capite meo, et
              dextera ilius amplexabitur me.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Sua mão esquerda estará
              debaixo de minha cabeça, e a sua direita me dará um abraço.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Nigra sum, sed formosa, filiæ
              Jerusalem; ideo dilexit me rex, et introduxit me in cubiculom
              suum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Sou negra, mas sou
              formosa, ó filhas de Jerusalém; por isso o Rei me amou, e me levou
              a seu aposento.
            </Typography>
          </Language>

          <Salmo121 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Nigra sum, sed formosa, filiæ
              Jerusalem; ideo dilexit me rex, et introduxit me in cubiculom
              suum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Sou negra, mas sou
              formosa, ó filhas de Jerusalém; por isso o Rei me amou, e me levou
              a seu aposento.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Jam hiems transiit, imber
              abiit et recessit: surge, amica mea, et veni.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Já se foi o Inverno, e
              passou o chuveiro; levanta-te e vem, ó minha amada.
            </Typography>
          </Language>

          <Salmo126 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Jam hiems transiit, imber
              abiit et recessit: surge, amica mea, et veni.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Já se foi o Inverno, e
              passou o chuveiro; levanta-te e vem, ó minha amada.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Speciosa facta es et suavis in
              deliciis tuis, sancta Dei Genitrix.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Especiosa sois, e suave
              nas vossas delicias, ó santa Mãe de Deus.
            </Typography>
          </Language>

          <Salmo147 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Speciosa facta es et suavis in
              deliciis tuis, sancta Dei Genitrix.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Especiosa sois, e suave
              nas vossas delicias, ó santa Mãe de Deus.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ecl. 24, 14</Typography>

          <Language>
            <Typography className="latin">
              Ab initio et ante sæcula creata sum, et usque ad futurum sæculum
              non desinam, et in habitatione sancta coram ipso ministravi.
            </Typography>
            <Typography className="vernacular">
              Eu fui criada desde o princípio, antes dos séculos, e não deixarei
              de existir até ao fim dos séculos, e exerci diante dele o meu
              ministério na morada santa.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
          </Language>

          <AveMarisStella />

          <H2 text="Ofício 1" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Beata Mater et intacta Virgo,
              gloriosa Regina mundi, intercede pro nobis ad Dominum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Santa Mãe e Virgem
              intacta, gloriosa Rainha do mundo, intercedei a Deus por nós.
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
              <Typography className="latin">Ant.</Typography> Regína Cæli, lætáre, allelúja;
              Quia quem meruísti portáre, allelúja; Resurréxit, sicut dixit,
              allelúja; Ora pro nóbis Deum, allelúja. Gaude et lætáre, Virgo
              Maria, allelúja. Quia surréxit Dóminus vere, allelúja.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Rainha do Céu,
              alegrai-Vos, Aleluia! Porque Aquele que merecestes trazer em vosso
              ventre, Aleluia! Ressuscitou como disse, Aleluia! Rogai por nós a
              Deus, Aleluia! Alegrai-Vos e exultai, ó Virgem Maria, Aleluia!
              Porque o Senhor ressuscitou verdadeiramente, Aleluia!
            </Typography>
          </Language>

          <Magnificat />

          <H2 text="Ofício 1" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Beata Mater et intacta Virgo,
              gloriosa Regina mundi, intercede pro nobis ad Dominum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Santa Mãe e Virgem
              intacta, gloriosa Rainha do mundo, intercedei a Deus por nós.
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
              <Typography className="latin">Ant.</Typography> Regína Cæli, lætáre, allelúja;
              Quia quem meruísti portáre, allelúja; Resurréxit, sicut dixit,
              allelúja; Ora pro nóbis Deum, allelúja. Gaude et lætáre, Virgo
              Maria, allelúja. Quia surréxit Dóminus vere, allelúja.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Rainha do Céu,
              alegrai-Vos, Aleluia! Porque Aquele que merecestes trazer em vosso
              ventre, Aleluia! Ressuscitou como disse, Aleluia! Rogai por nós a
              Deus, Aleluia! Alegrai-Vos e exultai, ó Virgem Maria, Aleluia!
              Porque o Senhor ressuscitou verdadeiramente, Aleluia!
            </Typography>
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
            <Typography className="latin">
              <Typography className="latin">Orémus.</Typography>
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Oremos.</Typography>
            </Typography>
            <Typography className="latin">
              Concede nos famulos tuos, quǽsumus, Domine Deus, perpetua mentis
              et corporis sanitate gaudere: et gloriosa beatæ Mariæ semper
              Virginis intercessione, a præsenti liberari tristitia, et æterna
              perfrui lætitia. Per Dominum nostrum Jesum Christum.
            </Typography>
            <Typography className="vernacular">
              Senhor Deus, nós Vos suplicamos que concedais a vossos servos
              lograr uma perpétua saúde de corpo e alma, e que pela intercessão
              gloriosa da bem-aventurada sempre Virgem Maria sejamos livres da
              presente tristeza, e gozemos da eterna alegria. Por Jesus Cristo
              nosso Senhor.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Amen.
            </Typography>
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
              <Typography className="versicle"> ℣. </Typography>E que as almas dos fiéis,
              pela misericórdia de Deus, descansem em paz.
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
              <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Missus est Gábriel Angelus ad
              Maríam Vírginem desponsátam Joseph.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Anjo Gabriel foi
              mandado à Virgem Maria, desposada com José.
            </Typography>
          </Language>

          <Salmo109 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Missus est Gábriel Angelus ad
              Maríam Vírginem desponsátam Joseph.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Anjo Gabriel foi
              mandado à Virgem Maria, desposada com José.
            </Typography>
          </Language>

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

          <Salmo112 />

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

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ne timeas, María, invenísti
              grátiam apud Dóminum: ecce concípies et páries fílium.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Não temais, ó Maria,
              achastes graça para com o Senhor: concebereis, e dareis à luz um
              filho.
            </Typography>
          </Language>

          <Salmo121 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ne timeas, María, invenísti
              grátiam apud Dóminum: ecce concípies et páries fílium.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Não temais, ó Maria,
              achastes graça para com o Senhor: concebereis, e dareis à luz um
              filho.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Dabit ei Dóminus sedem David,
              patris ejus, et regnábit in ætérnum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Senhor lhe dará o trono
              de David seu Pai, e reinará eternamente.
            </Typography>
          </Language>

          <Salmo126 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Dabit ei Dóminus sedem David,
              patris ejus, et regnábit in ætérnum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Senhor lhe dará o trono
              de David seu Pai, e reinará eternamente.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ecce ancílla Dómini: fiat mihi
              secúndum verbum tuum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis aqui a escrava do
              Senhor, faça-se em mim segundo a vossa palavra.
            </Typography>
          </Language>

          <Salmo147 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ecce ancílla Dómini: fiat mihi
              secúndum verbum tuum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis aqui a escrava do
              Senhor, faça-se em mim segundo a vossa palavra.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Is. 11, 1-2</Typography>

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
          </Language>

          <AveMarisStella />

          <Language>
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
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Spiritus Sanctus in te
              descendet, Maria: ne timeas, habebis in utero filium Dei,
              (allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Espírito Santo descerá
              sobre vós, ó Maria; não temais: concebereis, e tereis no ventre o
              Filho de Deus, (aleluia).
            </Typography>
          </Language>

          <Magnificat />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Spiritus Sanctus in te
              descendet, Maria: ne timeas, habebis in utero filium Dei,
              (allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Espírito Santo descerá
              sobre vós, ó Maria; não temais: concebereis, e tereis no ventre o
              Filho de Deus, (aleluia).
            </Typography>
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
              <Typography className="versicle"> ℣. </Typography>E que as almas dos fiéis,
              pela misericórdia de Deus, descansem em paz.
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
              <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> O admirabile commercium:
              Creator generis humani, animatum corpus sumens, de Virgine nasci
              dignatus est: et procedens homo sine semine, largitus est nobis
              suam Deitatem.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ó admirável permuta! O
              Criador do género humano, tomando corpo e alma, dignou-se nascer
              de uma Virgem; e, feito homem sem progenitor, tornou-nos
              participantes da sua divindade.
            </Typography>
          </Language>

          <Salmo109 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> O admirabile commercium:
              Creator generis humani, animatum corpus sumens, de Virgine nasci
              dignatus est: et procedens homo sine semine, largitus est nobis
              suam Deitatem.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ó admirável permuta! O
              Criador do género humano, tomando corpo e alma, dignou-se nascer
              de uma Virgem; e, feito homem sem progenitor, tornou-nos
              participantes da sua divindade.
            </Typography>
          </Language>

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

          <Salmo112 />

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

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Rubum, quem viderat Moyses
              incombustum, conservatam agnovimus tuam laudabilem virginitatem:
              Dei Genitrix, intercede pro nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Na sarça que Moisés via
              sem se consumir, reconhecemos a vossa admirável virgindade
              conservada: rogai por nós, Santa Mãe de Deus.
            </Typography>
          </Language>

          <Salmo121 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Rubum, quem viderat Moyses
              incombustum, conservatam agnovimus tuam laudabilem virginitatem:
              Dei Genitrix, intercede pro nobis.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Na sarça que Moisés via
              sem se consumir, reconhecemos a vossa admirável virgindade
              conservada: rogai por nós, Santa Mãe de Deus.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Germinavit radix Jesse, orta
              est stella ex Jacob; virgo peperit Salvatorem: te laudamus, Deus
              noster.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Floresceu a raiz de
              Jessé, surgiu a estrela de Jacob. A Virgem deu à luz o Salvador:
              Nós Vos louvamos, ó Nosso Deus.
            </Typography>
          </Language>

          <Salmo126 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Germinavit radix Jesse, orta
              est stella ex Jacob; virgo peperit Salvatorem: te laudamus, Deus
              noster.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Floresceu a raiz de
              Jessé, surgiu a estrela de Jacob. A Virgem deu à luz o Salvador:
              Nós Vos louvamos, Senhor nosso Deus.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ecce, Maria genuit nobis
              Salvatorem, quem Joannes videns exclamavit, dicens: Ecce Agnus
              Dei, ecce qui tollit peccata mundi, (allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis, Maria deu à luz o
              nosso Salvador, que João reconheceu e exclamou: eis o Cordeiro de
              Deus, Aquele que tira o pecado do mundo, (aleluia).
            </Typography>
          </Language>

          <Salmo147 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ecce, Maria genuit nobis
              Salvatorem, quem Joannes videns exclamavit, dicens: Ecce Agnus
              Dei, ecce qui tollit peccata mundi, (allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis, Maria deu à luz o
              nosso Salvador, que João reconheceu e exclamou: eis o Cordeiro de
              Deus, Aquele que tira o pecado do mundo, (aleluia).
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ecl. 24, 14</Typography>

          <Language>
            <Typography className="latin">
              Ab initio et ante sæcula creata sum, et usque ad futurum sæculum
              non desinam, et in habitatione sancta coram ipso ministravi.
            </Typography>
            <Typography className="vernacular">
              Eu fui criada desde o princípio, antes dos séculos, e não deixarei
              de existir até ao fim dos séculos, e exerci diante dele o meu
              ministério na morada santa.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
          </Language>

          <AveMarisStella />

          <Language>
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
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Magnum hæreditatis mysterium:
              templum Dei factus est uterus nescientis virum: non est pollutus
              ex ea carnem assumens; omnes gentes venient, dicentes: Gloria
              tibi, Domine.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Grande mystério de
              herança: o ventre daquela que não conheceu varão, é feito templo
              de Deus; o qual se não manchou, tomando dela carne humana. Virão
              todas as gentes, dizendo: Glória a Vós, ó Senhor.
            </Typography>
          </Language>

          <Magnificat />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography>
              <Typography className="vernacular">
                Magnum hæreditatis mysterium: templum Dei factus est uterus
                nescientis virum: non est pollutus ex ea carnem assumens; omnes
                gentes venient, dicentes: Gloria tibi, Domine.
              </Typography>
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography>
              <Typography className="vernacular">
                Grande mystério de herança: o ventre daquela que não conheceu
                varão, é feito templo de Deus; o qual se não manchou, tomando
                dela carne humana. Virão todas as gentes, dizendo: Glória a Vós,
                ó Senhor.
              </Typography>
            </Typography>
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
              <Typography className="versicle"> ℣. </Typography>E que as almas dos fiéis,
              pela misericórdia de Deus, descansem em paz.
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
