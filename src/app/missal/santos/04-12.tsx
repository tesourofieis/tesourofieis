import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0412() {
  return (
    <PageWrapper>
      <H1 text="S. Vítor, Mártir, a 12 de Abril, Na Arquidiocese de Braga e noutros lugares" />
      <H3 text="Oração" />
      <Typography className="vernacular">
        Ó Deus, que pela pompa do martírio triunfal fizestes entrar glorioso na pátria celestial o
        B. Vítor, concedei-nos propício que, pugnando nós à sua imitação contra os nossos vícios,
        consigamos alcançar aquelas vitórias que Vítor nos ensinou. Por nosso Senhor...
      </Typography>
      <H3 text="Secreta" />
      <Typography className="vernacular">
        Santificai, Senhor, os dons que Vos apresentamos, e pela intercessão do B. Vítor, vosso
        Mártir, permiti que em virtude deles olheis aplacado para nós. Por nosso Senhor...
      </Typography>
      <H3 text="Postcomúnio" />
      <Typography className="vernacular">
        Que o sacramento, que acabámos de receber, nos santifique, Senhor; e pela intercessão dos
        vossos Santos fazei que sejamos participantes do remédio celestial. Por nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
