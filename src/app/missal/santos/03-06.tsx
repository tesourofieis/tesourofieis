import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0306() {
  return (
    <PageWrapper>
      <H1 text="S. S. Perpétua e Felicidade, Mártires, a 6 de Março" />

      <Typography className="aside">
        Como na{" "}
        <Link href="/missal/comum/19muitasvirgensmartires">
          Missa Me exspectavérunt,
        </Link>
        excepto:
      </Typography>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Mýsticis, Dómine, repléti sumus votis et gáudiis: præsta, quǽsumus; ut
          intercessiónibus sanctárum Mártyrum tuárum Perpétuæ et Felicitátis,
          quæ temporáliter ágimus, spirituáliter consequámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Saciados com as alegrias místicas, que são objecto dos nossos desejos,
          concedei-nos, Vos suplicamos, Senhor, que por intercessão das vossas
          Santas Mártires Perpétua e Felicidade alcancemos os eternos efeitos do
          que praticámos neste mundo. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
