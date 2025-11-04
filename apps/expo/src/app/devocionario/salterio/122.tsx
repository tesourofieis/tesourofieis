import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page122() {
  return (
    <PageWrapper>
      <H1 text="Salmo 122" />

      <Language>
        <Typography className="latin">
          Ad Te levávi óculos meos, * qui hábitas in cælis.
        </Typography>
        <Typography className="vernacular">
          Levantei os meus olhos para Vós, * que habitais nos céus.
        </Typography>
        <Typography className="latin">
          Ecce, sicut óculi servórum * in mánibus dominórum suórum,
        </Typography>
        <Typography className="vernacular">
          Eis que, assim como os olhos dos servos * estão nas mãos dos seus
          senhores,
        </Typography>
        <Typography className="latin">
          Sicut óculi ancíllæ in mánibus dóminæ suæ: * ita óculi nostri ad
          Dóminum, Deum nostrum, donec misereátur nostri.
        </Typography>
        <Typography className="vernacular">
          Como os olhos da serva nas mãos de sua senhora: * assim os nossos
          olhos estão no Senhor nosso Deus, até que tenha misericórdia de nós.
        </Typography>
        <Typography className="latin">
          Miserére nostri, Dómine, miserére nostri: * quia multum repléti sumus
          despectióne:
        </Typography>
        <Typography className="vernacular">
          Tende misericórdia de nós, ó Senhor, tende misericórdia de nós: * pois
          estamos cheios de desprezo.
        </Typography>
        <Typography className="latin">
          Quia multum repléta est ánima nostra: * oppróbrium abundántibus, et
          despéctio supérbis.
        </Typography>
        <Typography className="vernacular">
          Pois a nossa alma está cheiíssima: * de ser o objecto de escárnio para
          os ricos e de desprezo para os soberbos.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
