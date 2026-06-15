import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0727() {
  return (
    <PageWrapper>
      <H1 text="S. Pantaleão, Mártir, a 27 de Julho" />
      <Typography className="comment">
        Em Nicomédia, traz o Martirológio romano, o martírio de São Pantaleão, médico, o qual preso
        pela fé, por ordem do imperador Maximiano, foi atormentado no cavalete e queimado com tochas
        ardentes. Nos seus tormentos, Nosso Senhor o consolou, aparecendo-lhe; a espada pôs termo
        aos seus gloriosos combates. Sofreu martírio sob Diocleciano cerca do ano 303. São Pantaleão
        é colocado pelos Gregos no número dos grandes Mártires. Os médicos o honram, depois de S.
        Lucas, como principal padroeiro. É um dos «14 santos auxiliares».
      </Typography>
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="aside">Na Diocese do Porto</Typography>Ó Deus, que permitistes que o B.
      Pantaleão, vosso Mártir, sofresse vários tormentos e orasse pelos seus perseguidores,
      concedei-nos propício que, implorando o seu auxílio, sintamos o efeito da vossa misericórdia.
      Por nosso Senhor...
    </PageWrapper>
  );
}
