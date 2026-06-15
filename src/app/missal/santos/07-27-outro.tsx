import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0727Outro() {
  return (
    <PageWrapper>
      <H1 text="B. Rodolfo Água-Viva e Outros, Márts, a 27 de Julho" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Vos pedimos, permiti que a veneranda oblação dos vossos B. B. Mártires Rodolfo, Afonso,
        Pedro, António e Francisco Vos recomende as nossas orações, a fim de que, pelo seu exemplo e
        intercessão, também nos imolemos, como hóstia viva por Vós recebida, em honra do vosso santo
        nome. Por nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
