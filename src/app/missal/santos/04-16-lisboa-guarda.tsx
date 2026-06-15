import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0416LisboaGuarda() {
  return (
    <PageWrapper>
      <H1 text="S. Engrácia, Virgem e Mártir, a 16 de Abril" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Loquébar
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />Ó Deus omnipotente e sempiterno, que escolheis os fracos do mundo para com
      eles confundirdes os poderosos, a nós, que celebramos esta solenidade em honra da B. Engrácia,
      vossa Virgem e Mártir, concedei propício que junto de Vós sintamos o seu patrocínio. Por nosso
      Senhor...
    </PageWrapper>
  );
}
