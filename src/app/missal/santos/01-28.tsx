import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0128() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro Nolasco, Conf., a 28 de Janeiro" />

      <Typography className="comment">
        Jesus manifestou a sua divindade curando as almas e os corpos. S. Pedro Nolasco, movido pelo
        exemplo da caridade divina e por inspiração celeste (Or.) da qual S. Raimundo de Penhafort
        foi o instrumento, empregou toda a sua fortuna (Ev.) em libertar os cristãos do cativeiro
        dos infiéis onde se consumiam os seus corpos e onde as suas almas corriam grandes perigos. A
        Ordem de Nossa Senhora das Mercês, fundada para esse fim, mostra como a realeza de Jesus se
        extende no mundo natural e no mundo sobrenatural. Por voto especial, os Religiosos prometiam
        eles próprios prisioneiros pagãos, se necessário fosse, para libertar os seus irmãos no
        Cristo (Ep.). Morreu em 1256 e foi enterrado com a sua couraça e espada.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui in tuæ caritátis exémplum ad fidélium redemptiónem sanctum Petrum Ecclésiam tuam
          nova prole fœcundáre divínitus docuísti: ipsíus nobis intercessióne concéde; a peccáti
          servitúte solútis, in cœlésti pátria perpétua libertáte gaudére: Qui vivis et regnas...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que em prova da vossa caridade quisestes inspirar sobrenaturalmente S. Pedro a
          fundar na vossa Igreja uma nova família, destinada à redenção dos fiéis cativos,
          concedei-nos por sua intercessão que, livres nós do cativeiro do pecado, gozemos perpétua
          liberdade na pátria celestial. Ó Vós, que, sendo Deus, viveis...
        </Typography>
      </Language>

      <H3 text="Oração Comemoração Santa Inês" />

      <Language>
        <Typography className="latin">
          Deus, qui nos ánnua beátæ Agnetis Vírginis et Martyris tuæ sollemnitáte lætíficas: da,
          quǽsumus; ut, quam venerámur officio, étiam piæ conversatiónis sequámur exémplo. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que nos alegrais com a solenidade anual da B. Inês, vossa Virgem e Mártir,
          concedei-nos a graça, Vos suplicamos, de imitar os exemplos daquela cuja festa celebramos.
          Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et
          præséntibus éxui malis confídimus et futúris. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos oferecemos este sacrifício de louvor em memória dos vossos Santos, para que por meio
          deles nos livremos dos males presentes e futuros. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta Comemoração Santa Inês" />

      <Language>
        <Typography className="latin">
          Super has, quǽsumus, Dómine, hóstias benedíctio copiósa descéndat: quæ et sanctificatiónem
          nobis cleménter operétur, et de Mártyrum nos sollemnitáte lætíficet. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que estas hóstias, Senhor, que Vos oferecemos façam descer sobre nós uma bênção abundante,
          a qual produza em nós por vossa clemência nossa santificação e nos alegre com a solenidade
          dos vossos Mártires. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc
          commemoratióne percépimus, ejus muniámur et précibus Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Fortalecidos com o alimento e com a bebida celestiais, Vos suplicamos humildemente, ó
          nosso Deus, que nos protejam as preces daquele em cuja memória os recebermos. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio Comemoração Santa Inês" />

      <Language>
        <Typography className="latin">
          Súmpsimus, Dómine, celebritátis ánnuæ votiva sacraménta: præsta, quǽsumus; ut et
          temporális vitæ nobis remédia prǽbeant et ætérnæ. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, havendo recebido os sacramentos que Vos são oferecidos nesta festa anual,
          concedei-nos, Vos suplicamos, que eles nos alcancem os remédios para a vida presente e
          para a eterna. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
