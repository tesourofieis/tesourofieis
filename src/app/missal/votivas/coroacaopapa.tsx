import { Link } from "expo-router";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageCoroacaopapa() {
  return (
    <PageWrapper>
      <H1 text="No dia da Coroação do Sumo Pontífice e Aniversário da Coroação" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/02-22">
          Missa da Cadeira de S. Pedro em Roma
        </Link>{" "}
        , excepto: Oração, Secreta e Postcomúnio como na
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me.
        </Link>{" "}
        No Tempo Pascal, em vez do Gradual e do Trato, diz-se:
      </Typography>

      <Language>
        <Typography className="latin">
          Allelúja, allelúja.<Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">Ps. 106, 8</Typography> Confitébitur Dómino misericórdiæ
          ejus, et mirabília ejus fíliis hóminum. Allelúja.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Matth. 16, 18</Typography> Tu es Petrus, et super hanc petram
          ædificábo Ecclésiam meam. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia.<Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">Sl. 106, 8</Typography> Seja o Senhor glorificado por
          causa da misericórdia e das maravilhas que praticou em favor dos homens. Aleluia.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="em">Mt. 16, 18</Typography> Tu és Pedro, e sobre esta pedra
          edificarei a minha Igreja.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
