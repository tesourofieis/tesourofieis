import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0916Outro2() {
  return (
    <PageWrapper>
      <H1 text="Santa Eufémia e Outros, Mártires, a 16 de Setembro" />

      <Typography className="comment">
        Na Chalcedonia, diz o Martirológio Romano, nascimento para o céu, de Santa Euphemia, virgem
        e Martyr, que, sob o imperador Diocleciano, em 307, foi condenada a ser entregue aos
        animais. Em Roma, os santos Mártires Lucia, nobre matrona, e Geminiano, decapitados por
        ordem do imperador Diocleciano cerca do ano de 300..
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Concedei aos vossos servos, Senhor, um jubiloso socorro, a fim de que, celebrando
        devotamente neste dia, em cada ano, a paixão dos vossos S. S. Mártires Eufémia, Lúcia e
        Geminiano, imitemos também a constância da sua fé. Por nosso Senhor...
      </Typography>
      <H3 text="Evangelho" />
      <LinkCard
        title="Evangelho Muitos Mártires "
        href="/missal/santos/7muitosmartires2#evangelho"
      />
      <H3 text="Secreta" />
      <Typography className="vernacular">
        Atendei propício aos votos do vosso povo, Senhor, Vos rogamos, e permiti que gozemos a
        protecção dos sufrágios daqueles de quem pela vossa graça celebramos esta solenidade. Por
        nosso Senhor...
      </Typography>
      <H3 text="Postcomúnio" />
      <Typography className="vernacular">
        Ouvi as nossas preces, Senhor, e permiti que sejamos protegidos incessantemente com os
        auxílios daqueles cuja solenidade celebramos. Por nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
