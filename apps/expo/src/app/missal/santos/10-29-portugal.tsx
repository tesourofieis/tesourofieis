import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1029Portugal() {
  return (
    <PageWrapper>
      <H1 text="Trasl. de Santa Isabel, Rainha, a 29 de Outubro" />

      <Typography className="aside">
        Como na{" "}
        <Link href="/missal/santos/07-04">
          Missa da Santa Isabel, Rainha de Portugal,
        </Link>
        excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui largitor ómnium bonórum, qui hunc diem beátæ Elisabeth
          veneránda Translatióne illustrásti: quæsumus; ut ejus précibus et
          intercessióne, nos de terrénis ad consórtia tránsferas Beatórum. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, dispensador de todos os dons, que Vos dignastes ilustrar este
          dia com a veneranda Trasladação da B. Isabel, fazei, Vos suplicamos,
          que pelas suas preces e intercessão transitemos das coisas terrenas
          para a companhia dos bem-aventurados. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
