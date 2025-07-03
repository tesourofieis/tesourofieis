import { Link } from "expo-router";
import { Text, View } from "react-native";
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
      <Text className="h1">Vésperas</Text>

      <Text className="aside">
        Meditemos na descida da cruz, o corpo de Jesus Cristo colocado nos
        braços de sua santa Mãe e na instituição do adorável Sacramento da
        Eucaristia.
      </Text>

      <Tabs>
        <TabItem label="Depois da Purificação">
          <Language>
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
              <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sicut erat in pricípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Dum esset Rex in acubitu suo,
              nardus mea dedit odorem suavitatis.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Estando o Rei no seu
              repouso, exalou o meu frasco um suavíssimo cheiro.
            </Text>
          </Language>

          <Text className="h2">Salmo 109</Text>

          <Salmo109 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Dum esset Rex in acubitu suo,
              nardus mea dedit odorem suavitatis.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Estando o Rei no seu
              repouso, exalou o meu frasco um suavíssimo cheiro.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Læva ejus sub capite meo, et
              dextera ilius amplexabitur me.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Sua mão esquerda estará
              debaixo de minha cabeça, e a sua direita me dará um abraço.
            </Text>
          </Language>

          <Text className="h2">Salmo 112</Text>

          <Salmo112 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Læva ejus sub capite meo, et
              dextera ilius amplexabitur me.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Sua mão esquerda estará
              debaixo de minha cabeça, e a sua direita me dará um abraço.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Nigra sum, sed formosa, filiæ
              Jerusalem; ideo dilexit me rex, et introduxit me in cubiculom
              suum.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Sou negra, mas sou
              formosa, ó filhas de Jerusalém; por isso o Rei me amou, e me levou
              a seu aposento.
            </Text>
          </Language>

          <Text className="h2">Salmo 121</Text>

          <Salmo121 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Nigra sum, sed formosa, filiæ
              Jerusalem; ideo dilexit me rex, et introduxit me in cubiculom
              suum.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Sou negra, mas sou
              formosa, ó filhas de Jerusalém; por isso o Rei me amou, e me levou
              a seu aposento.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Jam hiems transiit, imber
              abiit et recessit: surge, amica mea, et veni.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Já se foi o Inverno, e
              passou o chuveiro; levanta-te e vem, ó minha amada.
            </Text>
          </Language>

          <Text className="h2">Salmo 126</Text>

          <Salmo126 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Jam hiems transiit, imber
              abiit et recessit: surge, amica mea, et veni.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Já se foi o Inverno, e
              passou o chuveiro; levanta-te e vem, ó minha amada.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Speciosa facta es et suavis in
              deliciis tuis, sancta Dei Genitrix.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Especiosa sois, e suave
              nas vossas delicias, ó santa Mãe de Deus.
            </Text>
          </Language>

          <Text className="h2">Salmo 147</Text>

          <Salmo147 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Speciosa facta es et suavis in
              deliciis tuis, sancta Dei Genitrix.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Especiosa sois, e suave
              nas vossas delicias, ó santa Mãe de Deus.
            </Text>
          </Language>

          <Text className="h2">Pequeno Capítulo</Text>

          <Text className="em">Ecl. 24, 14</Text>

          <Language>
            <Text className="latin">
              Ab initio et ante sæcula creata sum, et usque ad futurum sæculum
              non desinam, et in habitatione sancta coram ipso ministravi.
            </Text>
            <Text className="vernacular">
              Eu fui criada desde o princípio, antes dos séculos, e não deixarei
              de existir até ao fim dos séculos, e exerci diante dele o meu
              ministério na morada santa.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
          </Language>

          <Text className="h2">Ave Maris Stella</Text>

          <AveMarisStella />

          <Text className="h2">Ofício 1</Text>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Beata Mater et intacta Virgo,
              gloriosa Regina mundi, intercede pro nobis ad Dominum.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Santa Mãe e Virgem
              intacta, gloriosa Rainha do mundo, intercedei a Deus por nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="h2">Tempo Pascal</Text>

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

          <Text className="h2">Magnificat</Text>

          <Magnificat />

          <Text className="h2">Ofício 1</Text>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Beata Mater et intacta Virgo,
              gloriosa Regina mundi, intercede pro nobis ad Dominum.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Santa Mãe e Virgem
              intacta, gloriosa Rainha do mundo, intercedei a Deus por nós.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>

          <Text className="h2">Tempo Pascal</Text>

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
              Concede nos famulos tuos, quǽsumus, Domine Deus, perpetua mentis
              et corporis sanitate gaudere: et gloriosa beatæ Mariæ semper
              Virginis intercessione, a præsenti liberari tristitia, et æterna
              perfrui lætitia. Per Dominum nostrum Jesum Christum.
            </Text>
            <Text className="vernacular">
              Senhor Deus, nós Vos suplicamos que concedais a vossos servos
              lograr uma perpétua saúde de corpo e alma, e que pela intercessão
              gloriosa da bem-aventurada sempre Virgem Maria sejamos livres da
              presente tristeza, e gozemos da eterna alegria. Por Jesus Cristo
              nosso Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
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
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Fidelium animæ per
              misericordiam Dei, requiescant in pace.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E que as almas dos fiéis,
              pela misericórdia de Deus, descansem em paz.
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
          <Language>
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
              <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sicut erat in pricípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Missus est Gábriel Angelus ad
              Maríam Vírginem desponsátam Joseph.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> O Anjo Gabriel foi
              mandado à Virgem Maria, desposada com José.
            </Text>
          </Language>

          <Text className="h2">Salmo 109</Text>

          <Salmo109 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Missus est Gábriel Angelus ad
              Maríam Vírginem desponsátam Joseph.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> O Anjo Gabriel foi
              mandado à Virgem Maria, desposada com José.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ave, María, grátia plena;
              Dóminus tecum: benedícta tu in muliéribus.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Ave, Maria, cheia de
              graça, o Senhor é convosco; bendita sois vós entre as mulheres.
            </Text>
          </Language>

          <Text className="h2">Salmo 112</Text>

          <Salmo112 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ave, María, grátia plena;
              Dóminus tecum: benedícta tu in muliéribus.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Ave, Maria, cheia de
              graça, o Senhor é convosco; bendita sois vós entre as mulheres.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ne timeas, María, invenísti
              grátiam apud Dóminum: ecce concípies et páries fílium.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Não temais, ó Maria,
              achastes graça para com o Senhor: concebereis, e dareis à luz um
              filho.
            </Text>
          </Language>

          <Text className="h2">Salmo 121</Text>

          <Salmo121 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ne timeas, María, invenísti
              grátiam apud Dóminum: ecce concípies et páries fílium.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Não temais, ó Maria,
              achastes graça para com o Senhor: concebereis, e dareis à luz um
              filho.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Dabit ei Dóminus sedem David,
              patris ejus, et regnábit in ætérnum.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> O Senhor lhe dará o trono
              de David seu Pai, e reinará eternamente.
            </Text>
          </Language>

          <Text className="h2">Salmo 126</Text>

          <Salmo126 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Dabit ei Dóminus sedem David,
              patris ejus, et regnábit in ætérnum.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> O Senhor lhe dará o trono
              de David seu Pai, e reinará eternamente.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ecce ancílla Dómini: fiat mihi
              secúndum verbum tuum.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Eis aqui a escrava do
              Senhor, faça-se em mim segundo a vossa palavra.
            </Text>
          </Language>

          <Text className="h2">Salmo 147</Text>

          <Salmo147 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ecce ancílla Dómini: fiat mihi
              secúndum verbum tuum.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Eis aqui a escrava do
              Senhor, faça-se em mim segundo a vossa palavra.
            </Text>
          </Language>

          <Text className="h2">Pequeno Capítulo</Text>

          <Text className="em">Is. 11, 1-2</Text>

          <Language>
            <Text className="latin">
              Egredietur virga de radice Jesse, et flos de radice ejus ascendet.
              Et requiescet super eum Spiritus Domini.
            </Text>
            <Text className="vernacular">
              Sairá uma vara da raiz de Jessé, e subirá uma flor da sua raiz, e
              descansará sobre ele o Espírito do Senhor.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
          </Language>

          <Text className="h2">Ave Maris Stella</Text>

          <AveMarisStella />

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Diffusa est gratia in labiis
              tuis.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>A graça derramou-se nos
              vossos lábios.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Propterea benedixit te Deus
              in æternum.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Por isso vos abençoou Deus
              para sempre.
            </Text>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Spiritus Sanctus in te
              descendet, Maria: ne timeas, habebis in utero filium Dei,
              (allelúja).
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> O Espírito Santo descerá
              sobre vós, ó Maria; não temais: concebereis, e tereis no ventre o
              Filho de Deus, (aleluia).
            </Text>
          </Language>

          <Text className="h2">Magnificat</Text>

          <Magnificat />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Spiritus Sanctus in te
              descendet, Maria: ne timeas, habebis in utero filium Dei,
              (allelúja).
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> O Espírito Santo descerá
              sobre vós, ó Maria; não temais: concebereis, e tereis no ventre o
              Filho de Deus, (aleluia).
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
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Fidelium animæ per
              misericordiam Dei, requiescant in pace.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E que as almas dos fiéis,
              pela misericórdia de Deus, descansem em paz.
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
          <Language>
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
              <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sicut erat in pricípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
            <Text className="latin">
              <Text className="latin">Ant.</Text> O admirabile commercium:
              Creator generis humani, animatum corpus sumens, de Virgine nasci
              dignatus est: et procedens homo sine semine, largitus est nobis
              suam Deitatem.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Ó admirável permuta! O
              Criador do género humano, tomando corpo e alma, dignou-se nascer
              de uma Virgem; e, feito homem sem progenitor, tornou-nos
              participantes da sua divindade.
            </Text>
          </Language>

          <Text className="h2">Salmo 109</Text>

          <Salmo109 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> O admirabile commercium:
              Creator generis humani, animatum corpus sumens, de Virgine nasci
              dignatus est: et procedens homo sine semine, largitus est nobis
              suam Deitatem.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Ó admirável permuta! O
              Criador do género humano, tomando corpo e alma, dignou-se nascer
              de uma Virgem; e, feito homem sem progenitor, tornou-nos
              participantes da sua divindade.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Quando natus es inefabilitre
              ex Virgnine, tunc impletæ sunt Scripturæ: sicut pluvia in vellus
              descendisti, ut salvum faceres genus humanum: te laudamus, Deus
              noster.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Quando nascestes
              misteriosamente da Virgem, então se cumpriram as Escrituras:
              descestes como a chuva sobre a lã, para salvar a humanidade. Nós
              Vos louvamos, ó Nosso Deus.
            </Text>
          </Language>

          <Text className="h2">Salmo 112</Text>

          <Salmo112 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Quando natus es inefabilitre
              ex Virgnine, tunc impletæ sunt Scripturæ: sicut pluvia in vellus
              descendisti, ut salvum faceres genus humanum: te laudamus, Deus
              noster.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Quando nascestes
              misteriosamente da Virgem, então se cumpriram as Escrituras:
              descestes como a chuva sobre a lã, para salvar a humanidade. Nós
              Vos louvamos, ó Nosso Deus.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Rubum, quem viderat Moyses
              incombustum, conservatam agnovimus tuam laudabilem virginitatem:
              Dei Genitrix, intercede pro nobis.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Na sarça que Moisés via
              sem se consumir, reconhecemos a vossa admirável virgindade
              conservada: rogai por nós, Santa Mãe de Deus.
            </Text>
          </Language>

          <Text className="h2">Salmo 121</Text>

          <Salmo121 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Rubum, quem viderat Moyses
              incombustum, conservatam agnovimus tuam laudabilem virginitatem:
              Dei Genitrix, intercede pro nobis.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Na sarça que Moisés via
              sem se consumir, reconhecemos a vossa admirável virgindade
              conservada: rogai por nós, Santa Mãe de Deus.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Germinavit radix Jesse, orta
              est stella ex Jacob; virgo peperit Salvatorem: te laudamus, Deus
              noster.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Floresceu a raiz de
              Jessé, surgiu a estrela de Jacob. A Virgem deu à luz o Salvador:
              Nós Vos louvamos, ó Nosso Deus.
            </Text>
          </Language>

          <Text className="h2">Salmo 126</Text>

          <Salmo126 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Germinavit radix Jesse, orta
              est stella ex Jacob; virgo peperit Salvatorem: te laudamus, Deus
              noster.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Floresceu a raiz de
              Jessé, surgiu a estrela de Jacob. A Virgem deu à luz o Salvador:
              Nós Vos louvamos, Senhor nosso Deus.
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ecce, Maria genuit nobis
              Salvatorem, quem Joannes videns exclamavit, dicens: Ecce Agnus
              Dei, ecce qui tollit peccata mundi, (allelúja).
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Eis, Maria deu à luz o
              nosso Salvador, que João reconheceu e exclamou: eis o Cordeiro de
              Deus, Aquele que tira o pecado do mundo, (aleluia).
            </Text>
          </Language>

          <Text className="h2">Salmo 147</Text>

          <Salmo147 />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Ecce, Maria genuit nobis
              Salvatorem, quem Joannes videns exclamavit, dicens: Ecce Agnus
              Dei, ecce qui tollit peccata mundi, (allelúja).
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Eis, Maria deu à luz o
              nosso Salvador, que João reconheceu e exclamou: eis o Cordeiro de
              Deus, Aquele que tira o pecado do mundo, (aleluia).
            </Text>
          </Language>

          <Text className="h2">Pequeno Capítulo</Text>

          <Text className="em">Ecl. 24, 14</Text>

          <Language>
            <Text className="latin">
              Ab initio et ante sæcula creata sum, et usque ad futurum sæculum
              non desinam, et in habitatione sancta coram ipso ministravi.
            </Text>
            <Text className="vernacular">
              Eu fui criada desde o princípio, antes dos séculos, e não deixarei
              de existir até ao fim dos séculos, e exerci diante dele o meu
              ministério na morada santa.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Deo grátias.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Graças a Deus.
            </Text>
          </Language>

          <Text className="h2">Ave Maris Stella</Text>

          <AveMarisStella />

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Diffusa est gratia in labiis
              tuis.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>A graça derramou-se nos
              vossos lábios.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Propterea benedixit te Deus
              in æternum.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Por isso vos abençoou Deus
              para sempre.
            </Text>
            <Text className="latin">
              <Text className="latin">Ant.</Text> Magnum hæreditatis mysterium:
              templum Dei factus est uterus nescientis virum: non est pollutus
              ex ea carnem assumens; omnes gentes venient, dicentes: Gloria
              tibi, Domine.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Grande mystério de
              herança: o ventre daquela que não conheceu varão, é feito templo
              de Deus; o qual se não manchou, tomando dela carne humana. Virão
              todas as gentes, dizendo: Glória a Vós, ó Senhor.
            </Text>
          </Language>

          <Text className="h2">Magnificat</Text>

          <Magnificat />

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text>
              <Text className="text-base">
                Magnum hæreditatis mysterium: templum Dei factus est uterus
                nescientis virum: non est pollutus ex ea carnem assumens; omnes
                gentes venient, dicentes: Gloria tibi, Domine.
              </Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text>
              <Text className="text-base">
                Grande mystério de herança: o ventre daquela que não conheceu
                varão, é feito templo de Deus; o qual se não manchou, tomando
                dela carne humana. Virão todas as gentes, dizendo: Glória a Vós,
                ó Senhor.
              </Text>
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
              Deus, qui salutis æternæ, beatæ Mariæ virginitate fœcunda, humano
              generi præmia præstitisti: tribue, quǽsumus; ut ipsam pro nobis
              intercedere sentiamus, per quam meruimus auctorem vitæ suscipere,
              Dominum nostrum Jesum Christum Filium tuum. Qui tecum vivit et
              regnat in unitate Spiritus Sancti, Deus, per omnia sæcula
              sæculorum.
            </Text>
            <Text className="vernacular">
              Ó Deus, que pela virgindade fecunda da bem-aventurada Maria,
              destes ao género humano as gratificações da salvação eterna:
              concedei-nos, Vos rogamos, que experienciemos sua intercessão por
              nós, dela pela qual recebemos o autor da vida, Nosso Senhor Jesus
              Cristo, vosso Filho. Que convosco, e com o Espírito Santo, vive e
              reina por todos os séculos.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
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
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Fidelium animæ per
              misericordiam Dei, requiescant in pace.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>E que as almas dos fiéis,
              pela misericórdia de Deus, descansem em paz.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Amen.
            </Text>
          </Language>
        </TabItem>
      </Tabs>

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
