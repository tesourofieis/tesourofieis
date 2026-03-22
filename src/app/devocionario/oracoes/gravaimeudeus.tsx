import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageGravaimeudeus() {
  return (
    <PageWrapper>
      <H1 text="Gravai, ó meu Deus" />
      <Typography className="vernacular">
        Gravai, ó meu Deus, a vossa lei no fundo do meu coração, fazei-me conhecer os vossos santos
        mandamentos, e dai-me a graça de os amar e a força de os praticar.
      </Typography>
    </PageWrapper>
  );
}
