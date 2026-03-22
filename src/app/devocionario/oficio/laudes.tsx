import { Link } from "expo-router";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { TabItem, Tabs } from "~/components/Tabs";
import { Typography } from "~/components/typography";
import Benedicite from "./../../canticos/sacros/benedicite";
import Benedictus from "./../../canticos/sacros/benedictus";
import OGloriosaVirginum from "./../../canticos/sacros/ogloriosavirginum";
import Salmo62 from "./../salterio/062";
import Salmo92 from "./../salterio/092";
import Salmo99 from "./../salterio/099";
import Salmo148 from "./../salterio/148";

export default function PageLaudes() {
  return (
    <PageWrapper>
      <H1 text="Laudes" />

      <Typography className="aside">
        Meditemos na ressurreição e na assunção de Maria, que, segundo piedosa crença, se teria
        operado durante a aurora; é por este motivo que, no Ofício da Santa Virgem, a Igreja coloca
        nas Laudes as antífonas da Assunção.
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
              <Typography className="response"> ℟. </Typography> Dómine, ad adjuvándum me festína.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Senhor, apressai-Vos em
              socorrer-me.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et Spíritui
              Sancto.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao Filho e ao
              Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et nunc, et
              semper, et in sǽcula sæculórum. Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Assim como era no princípio, agora
              e sempre, e por todos os séculos dos séculos. Amen.
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Assumpta est Maria in cælum: gaudete
              angeli, laudantes benedicunt Dominum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Maria foi exaltada ao céu; os
              anjos se alegram, louvam, e glorificam o Senhor.
            </Typography>
          </Language>

          <Salmo92 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Assumpta est Maria in cælum: gaudete
              angeli, laudantes benedicunt Dominum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Maria foi exaltada ao céu; os
              anjos se alegram, louvam, e glorificam o Senhor.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Maria Virgo assumpta est ad ætherum
              thalamum, in quo Rex regum stellato sedet solio.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> A Virgem Maria foi exaltada ao
              tálamo celeste, onde o Rei dos reis está sentado num trono de estrelas.
            </Typography>
          </Language>

          <Salmo99 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Maria Virgo assumpta est ad ætherum
              thalamum, in quo Rex regum stellato sedet solio.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> A Virgem Maria foi exaltada ao
              tálamo celeste, onde o Rei dos reis está sentado num trono de estrelas.
            </Typography>
          </Language>

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

          <Salmo62 />

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

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Benedicta filia tu a Domino: quia per
              te fructum vitaæ communicavimus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Sois a filha bendita do Senhor,
              porque por vós recebemos o fruto da vida.
            </Typography>
          </Language>

          <Benedicite />

          <Typography className="aside">Não se diz a Glória no fim.</Typography>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Benedicta filia tu a Domino: quia per
              te fructum vitaæ communicavimus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Sois a filha bendita do Senhor,
              porque por vós recebemos o fruto da vida.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Pulchra es et decora, filia Jerusalem:
              terribus ut castrorum acies ordinara.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Filha de Jerusalém, sois bela e
              decorosa, terrível como um exército formado em linha.
            </Typography>
          </Language>

          <Salmo148 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Pulchra es et decora, filia Jerusalem:
              terribus ut castrorum acies ordinara.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Filha de Jerusalém, sois bela e
              decorosa, terrível como um exército formado em linha.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Ct. 6, 8</Typography>

          <Language>
            <Typography className="latin">
              Viderunt eam filiæ Sion, et beatissimam prædicaverunt, et reginæ laudaverunt eam.
            </Typography>
            <Typography className="vernacular">
              Viram-na as Filhas de Sião, e a declararam beatíssima; e as Rainhas a louvaram.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
          </Language>

          <OGloriosaVirginum />

          <H2 text="Ofício 1" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Beata dei genitrix, Maria, Virgo
              perpetua, templum Domini, sacrarium Spiritus Sancti, sola sine exemplo placuisti
              Domino nostro Jesu Christo: ora pro populo, interveni pro clero, intercede pro devoto
              femineo sexu.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ó Santa Mãe de Deus, Maria sempre
              Virgem, templo de Deus, sacrário do Espírito Santo; vós apenas, sem exemplo,
              agradastes Nosso Senhor Jesus Cristo: rezei por nós, intervinde pelo clero, intercedei
              pelo devoto sexo feminino.
            </Typography>
          </Language>

          <H2 text="No Tempo Pascal" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Regína Cæli, lætáre, allelúja; Quia
              quem meruísti portáre, allelúja; Resurréxit, sicut dixit, allelúja; Ora pro nóbis
              Deum, allelúja.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Rainha do Céu, alegrai-Vos,
              Aleluia! Porque Aquele que merecestes trazer em vosso ventre, Aleluia! Ressuscitou
              como disse, Aleluia! Rogai por nós a Deus, Aleluia!
            </Typography>
          </Language>

          <Benedictus />

          <H2 text="Ofício 1" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Beata dei genitrix, Maria, Virgo
              perpetua, templum Domini, sacrarium Spiritus Sancti, sola sine exemplo placuisti
              Domino nostro Jesu Christo: ora pro populo, interveni pro clero, intercede pro devoto
              femineo sexu.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ó Santa Mãe de Deus, Maria sempre
              Virgem, templo de Deus, sacrário do Espírito Santo; vós apenas, sem exemplo,
              agradastes Nosso Senhor Jesus Cristo: reza por nós, intervém pelo clero, intercede
              pelo devoto sexo feminino.
            </Typography>
          </Language>

          <H2 text="No Tempo Pascal" />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Regína Cæli, lætáre, allelúja; Quia
              quem meruísti portáre, allelúja; Resurréxit, sicut dixit, allelúja; Ora pro nóbis
              Deum, allelúja.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Rainha do Céu, alegrai-Vos,
              Aleluia! Porque Aquele que merecestes trazer em vosso ventre, Aleluia! Ressuscitou
              como disse, Aleluia! Rogai por nós a Deus, Aleluia!
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
              cremos ser ela verdadeira a Mãe de Deus, concedei-nos que nos ajudem as suas
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
              <Typography className="response"> ℟. </Typography> Dómine, ad adjuvándum me festína.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Senhor, apressai-Vos em
              socorrer-me.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et Spíritui
              Sancto.
              <Typography className="versicle"> ℣. </Typography>
              Glória ao Pai, e ao Filho e ao Espírito Santo.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et nunc, et
              semper, et in sǽcula sæculórum. Amen.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Assim como era no princípio, agora
              e sempre, e por todos os séculos dos séculos. Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Missus est Gábriel Angelus ad
              Maríam Vírginem desponsátam Joseph.
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> O Anjo Gabriel foi mandado à Virgem
              Maria, desposada com José.
            </Typography>
          </Language>

          <Salmo92 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Missus est Gábriel Angelus ad Maríam
              Vírginem desponsátam Joseph.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Anjo Gabriel foi mandado à
              Virgem Maria, desposada com José.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ave, María, grátia plena; Dóminus
              tecum: benedícta tu in muliéribus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ave, Maria, cheia de graça, o
              Senhor é convosco; bendita sois vós entre as mulheres.
            </Typography>
          </Language>

          <Salmo99 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ave, María, grátia plena; Dóminus
              tecum: benedícta tu in muliéribus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ave, Maria, cheia de graça, o
              Senhor é convosco; bendita sois vós entre as mulheres.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ne timeas, María, invenísti grátiam
              apud Dóminum: ecce concípies et páries fílium.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Não temais, ó Maria, achastes
              graça para com o Senhor: concebereis, e dareis à luz um filho.
            </Typography>
          </Language>

          <Salmo62 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ne timeas, María, invenísti grátiam
              apud Dóminum: ecce concípies et páries fílium.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Não temais, ó Maria, achastes
              graça para com o Senhor: concebereis, e dareis à luz um filho.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Dabit ei Dóminus sedem David, patris
              ejus, et regnábit in ætérnum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Senhor lhe dará o trono de
              David seu Pai, e reinará eternamente.
            </Typography>
          </Language>

          <Benedicite />

          <Typography className="aside">Não se diz a Glória no fim.</Typography>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Dabit ei Dóminus sedem David, patris
              ejus, et regnábit in ætérnum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Senhor lhe dará o trono de
              David seu Pai, e reinará eternamente.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ecce ancílla Dómini: fiat mihi
              secúndum verbum tuum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis aqui a escrava do Senhor,
              faça-se em mim segundo a vossa palavra.
            </Typography>
          </Language>

          <Salmo148 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ecce ancílla Dómini: fiat mihi
              secúndum verbum tuum.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis aqui a escrava do Senhor,
              faça-se em mim segundo a vossa palavra.
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Is. 11, 1-2</Typography>

          <Language>
            <Typography className="latin">
              Egredietur virga de radice Jesse, et flos de radice ejus ascendet. Et requiescet super
              eum Spiritus Domini.
            </Typography>
            <Typography className="vernacular">
              Sairá uma vara da raiz de Jessé, e subirá uma flor da sua raiz, e descansará sobre ele
              o Espírito do Senhor.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
          </Language>

          <OGloriosaVirginum />

          <Language>
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
              <Typography className="latin">Ant.</Typography> Spiritus Sanctus in te descendet,
              Maria: ne timeas, habebis in utero filium Dei, (allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Espírito Santo descerá sobre
              vós, ó Maria; não temais: concebereis, e tereis no ventre o Filho de Deus, (aleluia).
            </Typography>
          </Language>

          <Benedictus />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Spiritus Sanctus in te descendet,
              Maria: ne timeas, habebis in utero filium Dei, (allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> O Espírito Santo descerá sobre
              vós, ó Maria; não temais: concebereis, e tereis no ventre o Filho de Deus, (aleluia).
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
              <Typography className="response"> ℟. </Typography> Dómine, ad adjuvándum me festína.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Senhor, apressai-Vos em
              socorrer-me.
            </Typography>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et Spíritui
              Sancto.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao Filho e ao
              Espírito Santo.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et nunc, et
              semper, et in sǽcula sæculórum. Amen.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Assim como era no princípio, agora
              e sempre, e por todos os séculos dos séculos. Amen.
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> O admirabile commercium: Creator
              generis humani, animatum corpus sumens, de Virgine nasci dignatus est: et procedens
              homo sine semine, largitus est nobis suam Deitatem.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ó admirável permuta! O Criador do
              género humano, tomando corpo e alma, dignou-se nascer de uma Virgem; e, feito homem
              sem progenitor, tornou-nos participantes da sua divindade.
            </Typography>
          </Language>

          <Salmo92 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> O admirabile commercium: Creator
              generis humani, animatum corpus sumens, de Virgine nasci dignatus est: et procedens
              homo sine semine, largitus est nobis suam Deitatem.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Ó admirável permuta! O Criador do
              género humano, tomando corpo e alma, dignou-se nascer de uma Virgem; e, feito homem
              sem progenitor, tornou-nos participantes da sua divindade.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Quando natus es inefabilitre ex
              Virgnine, tunc impletæ sunt Scripturæ: sicut pluvia in vellus descendisti, ut salvum
              faceres genus humanum: te laudamus, Deus noster.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Quando nascestes misteriosamente
              da Virgem, então se cumpriram as Escrituras: descestes como a chuva sobre a lã, para
              salvar a humanidade. Nós Vos louvamos, ó Nosso Deus.
            </Typography>
          </Language>

          <Salmo99 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Quando natus es inefabilitre ex
              Virgnine, tunc impletæ sunt Scripturæ: sicut pluvia in vellus descendisti, ut salvum
              faceres genus humanum: te laudamus, Deus noster.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Quando nascestes misteriosamente
              da Virgem, então se cumpriram as Escrituras: descestes como a chuva sobre a lã, para
              salvar a humanidade. Nós Vos louvamos, ó Nosso Deus.
            </Typography>
          </Language>

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

          <Salmo62 />

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

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Germinavit radix Jesse, orta est
              stella ex Jacob; virgo peperit Salvatorem: te laudamus, Deus noster.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Floresceu a raiz de Jessé, surgiu
              a estrela de Jacob. A Virgem deu à luz o Salvador: Nós Vos louvamos, ó Nosso Deus.
            </Typography>
          </Language>

          <Benedicite />

          <Typography className="aside">Não se diz a Glória no fim.</Typography>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Germinavit radix Jesse, orta est
              stella ex Jacob; virgo peperit Salvatorem: te laudamus, Deus noster.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Floresceu a raiz de Jessé, surgiu
              a estrela de Jacob. A Virgem deu à luz o Salvador: Nós Vos louvamos, Senhor nosso
              Deus.
            </Typography>
          </Language>

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ecce, Maria genuit nobis Salvatorem,
              quem Joannes videns exclamavit, dicens: Ecce Agnus Dei, ecce qui tollit peccata mundi,
              (allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis, Maria deu à luz o nosso
              Salvador, que João reconheceu e exclamou: eis o Cordeiro de Deus, Aquele que tira o
              pecado do mundo, (aleluia).
            </Typography>
          </Language>

          <Salmo148 />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Ecce, Maria genuit nobis Salvatorem,
              quem Joannes videns exclamavit, dicens: Ecce Agnus Dei, ecce qui tollit peccata mundi,
              (allelúja).
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Eis, Maria deu à luz o nosso
              Salvador, que João reconheceu e exclamou: eis o Cordeiro de Deus, Aquele que tira o
              pecado do mundo, (aleluia).
            </Typography>
          </Language>

          <H2 text="Pequeno Capítulo" />

          <Typography className="em">Is. 11, 1-2</Typography>

          <Language>
            <Typography className="latin">
              Egredietur virga de radice Jesse, et flos de radice ejus ascendet. Et requiescet super
              eum Spiritus Domini.
            </Typography>
            <Typography className="vernacular">
              Sairá uma vara da raiz de Jessé, e subirá uma flor da sua raiz, e descansará sobre ele
              o Espírito do Senhor.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Deo grátias.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> Graças a Deus.
            </Typography>
          </Language>

          <OGloriosaVirginum />

          <Language>
            <Typography className="latin">
              <Typography className="versicle"> ℣. </Typography>Benedicta tu in mulieribus.
            </Typography>
            <Typography className="vernacular">
              <Typography className="versicle"> ℣. </Typography>Bendita sois vós entre as mulheres.
            </Typography>
            <Typography className="latin">
              <Typography className="response"> ℟. </Typography> Et benedicta fructus ventris tui.
            </Typography>
            <Typography className="vernacular">
              <Typography className="response"> ℟. </Typography> E bendito é o fruto do vosso
              ventre.
            </Typography>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Mirabile mysterium declaratur hodie:
              innovantur naturæ, Deus homo factus est: id quod fuit permansit, et quod non erat
              assumpsit; non commixtionem passus, neque divisionem.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Hoje se manifesta um admirável
              mystério: renovam-se as naturezas; Deus faz-se homem: ficando o que era, tomando o que
              não era, sem permitir divisão nem mistura.
            </Typography>
          </Language>

          <Benedictus />

          <Language>
            <Typography className="latin">
              <Typography className="latin">Ant.</Typography> Mirabile mysterium declaratur hodie:
              innovantur naturæ, Deus homo factus est: id quod fuit permansit, et quod non erat
              assumpsit; non commixtionem passus, neque divisionem.
            </Typography>
            <Typography className="vernacular">
              <Typography className="vernacular">Ant.</Typography> Hoje se manifesta um admirável
              mystério: renovam-se as naturezas; Deus faz-se homem: ficando o que era, tomando o que
              não era, sem permitir divisão nem mistura.
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
