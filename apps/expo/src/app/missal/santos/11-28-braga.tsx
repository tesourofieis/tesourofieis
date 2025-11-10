import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1128Braga() {
  return (
    <PageWrapper>
      <H1 text="S. Tiago Intercísio, Mártir, a 28 de Novembro, Na Arquidiocese de Braga e noutros lugares" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        A nós, Senhor, que somos vossos servos, sede propício pelos méritos do
        vosso Mártir Tiago, Vo-lo rogamos, a fim de que pela sua piedosa
        intercessão sejamos protegidos contra todas as adversidades. Por nosso
        Senhor...
      </Typography>
      <H3 text="Secreta" />
      <Typography className="vernacular">
        Vos suplicamos, Senhor, que pela vossa clemência aceiteis de nossas mãos
        a dádiva apresentada; e pela oração do vosso Santo Mártir Tiago
        purificai-nos de todos os pecados. Por nosso Senhor...
      </Typography>
      <H3 text="Postcomúnio" />
      <Typography className="vernacular">
        Depois de libarmos os divinos mystérios, que, em veneração do vosso
        Santo Mártir Tiago oferecemos à vossa majestade, concedei-nos, Senhor,
        Vos suplicamos, a graça de por eles merecermos o perdão de nossos
        pecados e o conforto da celestial graça. Por nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
