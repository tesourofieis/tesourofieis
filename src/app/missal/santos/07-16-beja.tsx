import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0716Beja() {
  return (
    <PageWrapper>
      <H1 text="S. Sisenando, Mártir, a 16 de Julho, Na Diocese de Beja" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/4martirnaopontifice1">
          Missa In virtúte tua
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />Ó omnipotente Deus, que ao B. Levita Sisenando destes coragem para abraçar
      e vencer o próprio martírio, concedei-nos, Vos pedimos, que virilmente abracemos o estreito
      caminho da salvação. Por nosso Senhor...
    </PageWrapper>
  );
}
