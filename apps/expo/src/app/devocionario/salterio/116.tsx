import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page116() {
  return (
    <PageWrapper>
      <H1 text="Salmo 116" />

      <Language>
        <Typography className="latin">
          Laudáte Dóminum, omnes gentes: * laudáte eum, omnes pópuli:
        </Typography>
        <Typography className="vernacular">
          Ó gentes, louvai todas o Senhor: * louvai-O todos, ó povos:
        </Typography>
        <Typography className="latin">
          Quóniam confirmáta est super nos misericórdia ejus: * et véritas
          Dómini manet in ætérnum.
        </Typography>
        <Typography className="vernacular">
          Porque sobre nós foi confirmada a sua misericórdia: * e a verdade do
          Senhor permanece eternamente.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
