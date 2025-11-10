import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1027Evora() {
  return (
    <PageWrapper>
      <H1 text="S. S. Vicente, Sabina e Cristeta, Márts, a 27 de Outubro, Na Arquidiocese de Évora" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Ó Deus, que aos três beatíssimos Irmãos vossos Mártires Vicente, Sabina
        e Cristeta, já unidos em amor fraternal, ainda mais os unistes pelo
        martírio na confissão da divina Trindade, concedei-nos por sua
        intercessão que pratiquemos o verdadeiro amor e sempre nos mantenhamos
        na unidade da Fé. Por nosso Senhor...
      </Typography>
      <H3 text="Gradual" />
      <Typography className="vernacular">
        A nossa alma livrou-se, como um pássaro do laço dos caçadores; O laço
        quebrou-se e ficámos livres: o nosso auxílio está no nome do Senhor: que
        criou o céu e a terra. Aleluia, aleluia. Eis a verdadeira fraternidade
        que venceu os perigos do mundo. Ela seguiu Cristo e possuirá com glória
        o reino celestial. Aleluia.
      </Typography>
    </PageWrapper>
  );
}
