import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageSantacruz() {
  return (
    <PageWrapper>
      <H1 text="Missa de Santa Cruz" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/09-14">
          Missa da Exaltação da Santa Cruz
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui unigéniti Fílii tui pretióso sanguine vivíficæ Crucis
          vexíllum sanctificáre voluísti: concéde, quǽsumus; eos, qui ejusdem
          sanctæ Crucis gaudent honóre, tua quoque ubíque protectióne gaudére.
          Per eúndem Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que pelo precioso Sangue do vosso Filho Unigénito quisestes
          santificar o estandarte vivificante da Cruz, Vos pedimos, concedei
          àqueles que se regozijam, honrando esta mesma santa Cruz, que gozem
          sempre e em todos os lugares a vossa protecção. Pelo mesmo...
        </Typography>
      </Language>

      <Typography className="aside">
        No Tempo Pascal em vez da Oração Precedente diz-se a seguinte:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui pro nobis Fílium tuum Crucis patíbulum subíre voluísti, ut
          inimíci a nobis expélleres potestátem: concéde nobis, fámulis tuis; ut
          resurrectiónis grátiam consequámur. Per eúndem Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que quisestes que o vosso Filho sofresse o suplício da Cruz
          para nos livrar do poder do inimigo, concedei aos vossos servos que
          alcancem a graça de tomar parte na sua ressurreição. Pelo mesmo nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <Typography className="em">Fl. 2, 8-11</Typography>

      <Language>
        <Typography className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Philippénses.
        </Typography>
        <Typography className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Filipenses.
        </Typography>
        <Typography className="latin">
          Fratres: Christus factus est pro nobis obǿdiens usque ad mortem,
          mortem autem crucis. Propter quod et Deus exaltávit illum, et donávit
          illi nomen, quod est super omne nomen:{" "}
          <Typography className="em">(hic genuflectitur)</Typography> ut in
          nómine Jesu omne genu flectátur cœléstium, terréstrium et infernórum,
          et omnis lingua confiteátur, quia Dóminus Jesus Christus in glória est
          Dei Patris.
        </Typography>
        <Typography className="vernacular">
          Meus irmãos: Cristo, por causa de nós, tornou-se obediente até à
          morte, e morte na cruz. Eis porque Deus o exaltou e lhe deu um nome
          que é superior a todos os outros.{" "}
          <Typography className="em">(Genuflecte-se)</Typography> De sorte que
          ao ser pronunciado o nome de Jesus todos os joelhos se devem dobrar no
          céu, na terra e nos infernos: e todas as línguas devem confessar que o
          senhor Jesus está na glória de Deus Pai.
        </Typography>
      </Language>

      <Typography className="aside">
        Depois da Septuagésima omite-se o Aleluia e o Verso que se segue, e
        diz-se o:
      </Typography>

      <H3 text="Trato" />

      <Language>
        <Typography className="latin">
          Adorámus te, Christe, et benedícimus tibi: quia per Crucem tuam
          redemísti mundum.<Typography className="versicle"> ℣. </Typography>
          Tuam Crucem adorámus, Dómine, tuam gloriósam recólimus passiónem:
          miserére nostri, qui passus es pro nobis.
          <Typography className="versicle"> ℣. </Typography>O Crux benedícta,
          quæ sola fuisti digna portáre Regem cœlórum et Dóminum.
        </Typography>
        <Typography className="vernacular">
          Vos adoramos e bendizemos, ó Cristo, porque salvastes o mundo pela
          vossa santa Cruz.<Typography className="versicle"> ℣. </Typography>
          Adoramos a vossa Cruz, Senhor, e honramos a vossa gloriosa paixão. O
          Vós, que sofrestes por nós, compadecei-Vos de nós.
          <Typography className="versicle"> ℣. </Typography>Ó Cruz bendita, só
          tu foste digna de sustentar o Senhor, que é o Rei dos céus.
        </Typography>
      </Language>

      <Typography className="aside">
        No Tempo Pascal omite-se o Gradual o Trato, e diz-se:
      </Typography>

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 95, 10</Typography> Dícite in
          géntibus, quia Dóminus regnávit a ligno. Allelúja.
          <Typography className="versicle"> ℣. </Typography>Dulce lignum, dulces
          clavos, dúlcia ferens póndera: quæ sola fuísti digna sustinére Regem
          cœlórum et Dóminum. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 95, 10</Typography> Anunciai
          aos povos que Deus reinou pela Cruz. Aleluia.
          <Typography className="versicle"> ℣. </Typography>Ó lenho querido,
          que, preso aos benditos cravos, suportaste o doce fardo! Só tu foste
          digno de sustentar o Senhor, que é o Rei dos céus. Aleluia.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <Typography className="em">Mt. 20, 17-19</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti
          Evangélii secúndum Matthǽum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo
          Evangelho segundo S. Mateus.
        </Typography>
        <Typography className="latin">
          In illo témpore: Assúmpsit Jesus duódecim discípulos secréto, et ait
          illis: Ecce, ascéndimus Jerosólymam, et Fílius hóminis tradétur
          princípibus sacerdótum et scribis, et condemnábunt eum morte, et
          tradent eum Géntibus ad illudéndum, et flagellándum, et crucifigéndum,
          et tértia die resúrget.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, subindo Jesus para Jerusalém, chamou de parte os seus
          doze discípulos e disse-lhes: «Eis que subimos; e aí o Filho do homem
          será entregue aos príncipes dos sacerdotes e aos escribas, que O
          condenarão à morte e O entregarão aos pagãos para zombarem d’Ele, e
          depois será flagelado e crucificado; porém ao terceiro dia
          ressuscitará».
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hæc oblátio, Dómine, quǽsumus, ab ómnibus nos purget offénsis: quæ in
          ara Crucis étiam totíus mundi tulit offénsam. Per eúndem Dóminum
          nostrum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, que esta oblação, que no altar da Cruz apagou
          os pecados do universo, nos purifique dos nossos pecados. Pelo
          mesmo...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
