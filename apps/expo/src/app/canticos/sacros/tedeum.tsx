import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageTedeum() {
  return (
    <PageWrapper>
      <H1 text="Te Deum" />

      <Language>
        <Typography className="latin">
          Te Deum laudámus: te Dóminum confitémur. Te ætérnum Patrem omnis terra
          venerátur.
        </Typography>
        <Typography className="vernacular">
          Vos louvamos, ó Deus, e reconhecemos por Senhor. A Vós, ó Pai eterno,
          toda a terra adora.
        </Typography>
        <Typography className="latin">
          Tibi omnes ángeli, tibi cæli et univérse potestátes: tibi chérubim et
          séraphim incessábili voce proclámant: Sanctus, Sanctus, Sanctus,
          Dóminus Deus Sábaoth. Pleni sunt cæli et terra majestátis glóriæ tuæ.
        </Typography>
        <Typography className="vernacular">
          Todos os Anjos, os céus e todas as Potestades, os Querubins e os
          Serafins clamam incessantemente: Santo, Santo, Santo: Senhor, Deus dos
          exércitos. Os céus e a terra estão cheios da majestade da vossa
          glória.
        </Typography>
        <Typography className="latin">
          Te gloriósus apostolórum chorus, te prophetárum laudábilis númerus, te
          mártyrum candidátus laudat exércitus.
        </Typography>
        <Typography className="vernacular">
          O coro glorioso dos Apóstolos, a falange venerável dos Profetas, e a
          ala dos Mártires, brilhante de alvura, cantam os vossos louvores.
        </Typography>
        <Typography className="latin">
          Te per orbem terrárum sancta confitétur Ecclésia, Patrem imménsæ
          majestátis; venerándum tuum verum et únicum Fílium; Sanctum quoque
          Paráclitum Spíritum.
        </Typography>
        <Typography className="vernacular">
          A Santa Igreja confessa o vosso nome em toda a terra.: Ó Pai de
          infinita majestade! Ela adora o vosso Filho Unigénito e verdadeiro. E
          também o Espírito Paráclito.
        </Typography>
        <Typography className="latin">
          Tu rex glóriæ, Christe. Tu Patris sempitérnus es Fílius. Tu, ad
          liberándum susceptúrus hóminem, non horruísti Vírginis úterum.
        </Typography>
        <Typography className="vernacular">
          Vós sois o Rei da glória, ó Cristo! Vós sois o Filho do Pai Eterno.
          Para salvar o homem, não hesitastes em viver no seio de uma Virgem.
        </Typography>
        <Typography className="latin">
          Tu, devícto mortis acúleo, aperuísti credéntibus regna cælórum.
        </Typography>
        <Typography className="vernacular">
          Vós partistes as cadeias da morte e abristes o reino dos céus aos
          fiéis.
        </Typography>
        <Typography className="latin">
          Tu ad déxteram Dei sedes, in glória Patris. Judex créderis esse
          ventúrus.
        </Typography>
        <Typography className="vernacular">
          Vós estais assentado à dextra de Deus, na glória do Pai. Acreditamos
          que sois o Juiz, que há-de vir.
        </Typography>
      </Language>

      <Typography className="aside">O seguinte verso diz-se de joelhos:</Typography>

      <Language>
        <Typography className="latin">
          Sequens versus dícitur flexis génibus: Te ergo quǽsumus, tuis fámulis
          súbveni, quos pretióso sánguine redemísti.
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, pois, queirais socorrer vossos servos, que resgatastes
          com vosso precioso Sangue:
        </Typography>
        <Typography className="latin">
          Ætérna fac cum sanctis tuis in glória numerári.
        </Typography>
        <Typography className="vernacular">
          Permiti que pertençam ao número dos Santos, que estão na glória.
        </Typography>
        <Typography className="latin">
          Salvum fac pópulum tuum, Dómine, et bénedic hereditáti tuæ
        </Typography>
        <Typography className="vernacular">
          Salvai o vosso povo, ó Senhor, e abençoai a vossa herança.
        </Typography>
        <Typography className="latin">
          Et rege eos, et extólle illos usque in ætérnum.
        </Typography>
        <Typography className="vernacular">
          Guiai os vossos servos e elevai-os até à vida eterna.
        </Typography>
        <Typography className="latin">Per síngulos dies benedícimus te;</Typography>
        <Typography className="vernacular">Todos os dias procuramos louvar-Vos.</Typography>
        <Typography className="latin">
          Et laudámus nomen tuum in sǽculum, et in sǽculum sǽculi.
        </Typography>
        <Typography className="vernacular">
          E louvamos o vosso Nome no mundo e em todos os séculos dos séculos.
        </Typography>
        <Typography className="latin">
          Dignáre, Dómine, die isto sine peccáto nos custodíre.
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos, ó Senhor, neste dia preservar-nos do pecado.
        </Typography>
        <Typography className="latin">Miserére nostri, Dómine, miserére nostri.</Typography>
        <Typography className="vernacular">
          Tende piedade de nós, ó Senhor, tende piedade.
        </Typography>
        <Typography className="latin">
          Fiat misericórdia tua, Dómine, super nos, quemádmodum sperávimus in
          te.
        </Typography>
        <Typography className="vernacular">
          Que a vossa misericórdia desça sobre nós, conforme a esperança que em
          Vós depositamos.
        </Typography>
        <Typography className="latin">
          In te, Dómine, sperávi: non confúndar in ætérnum.
        </Typography>
        <Typography className="vernacular">
          Senhor, eu espero em Vós; nunca ficarei iludido.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
