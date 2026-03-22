import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0801() {
  return (
    <PageWrapper>
      <H1 text="Comemoração dos S. S. Macabeus, Mártires, a 1 de Agosto" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Fratérna nos, Dómine, Mártyrum tuórum coróna lætíficet: quæ et fídei nostræ prǽbeat
          increménta virtútum; et multíplici nos suffrágio consolétur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Fazei, Senhor, que a vitória destes irmãos Mártires nos alegre, proporcionando à nossa fé
          aumento de vigor; e que nos sirva de consolação pela sua múltipla intercessão. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Mystéria tua, Dómine, pro sanctórum Martyrum tuórum honóre, devóta mente tractémus: quibus
          et præsídium nobis crescat et gáudium. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que nós possamos, Senhor, celebrar com devoção os vossos sagrados mystérios em honra dos
          vossos Mártires, a fim de que sintamos aumentar o vosso auxílio e a nossa alegria. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut, quorum memóriam sacraménti participatióne
          recólimus, fidem quoque proficiéndo sectémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, ó Deus omnipotente, que imitemos em nossos progressos na fé aquele cuja
          memória honrámos, participando deste sacramento. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
