import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0909() {
  return (
    <PageWrapper>
      <H1 text="S. Gorgónio, Mártir, a 9 de Setembro" />

      <Typography className="comment">
        Gorgonio nasceu na Nicomedia. Oficial da casa do imperador Diocleciano,
        converteu à fé cristã, com o auxilio de Dorotheu, seu colega, todos os
        outros servos do palácio imperial. Como castigo dessa audácia, diz o
        Martirológio Romano, foram pendurados e despedaçados por todo o corpo
        com açoites; em seguida, derramaram-lhes vinagre e sal sobre as
        entranhas descobertas; depois de queimados sobre uma grelha, foram,
        finalmente, estrangulados. Morreram ao mesmo tempo que S. Theodoro em
        Nicomedia, em 303. Mais tarde inumaram o corpo de S. Gorgonio em Roma,
        na via Latina, de onde foi transferido para a basílica de S. Pedro.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Sanctus tuus, Dómine, Gorgónius sua nos intercessióne lætíficet: et
          pia fáciat sollemnitáte gaudére. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Alegre-nos, Senhor, o vosso Santo Gorgónio com sua intercessão; e nos
          faça sentir o gozo desta pia solenidade. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Grata tibi sit, Dómine, nostræ servitútis oblátio: pro qua sanctus
          Gorgónius Martyr intervéntor exsístat. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que Vos seja agradável, Senhor, a oferta da nossa servidão, a qual
          Vo-la apresentamos pela intervenção do Santo Mártir Gorgónio. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Famíliam tuam, Deus, suávitas ætérna contíngat et végetet: quæ in
          Mártyre tuo Gorgónio Christi, Fílii tui, bono júgiter odóre pascátur:
          Qui tecum...
        </Typography>
        <Typography className="vernacular">
          Que a vossa família, ó Deus, seja alimentada e fortalecida com as
          delícias eternas; e que pelo vosso S. Mártir Gorgónio ela se alimente
          incessantemente com o bom odor de vosso Filho Jesus Cristo: Que
          convosco...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
