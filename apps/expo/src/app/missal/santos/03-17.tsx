import { Typography } from "~/components/typography";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0317() {
  return (
    <PageWrapper>
      <H1 text="S. Patrício, B. e Conf., a 17 de Março" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui ad prædicándam géntibus glóriam tuam beátum Patrícium
          Confessórem atque Pontíficem míttere dignátus es: ejus méritis et
          intercessióne concéde; ut, quæ nobis agénda prǽcipis, te miseránte
          adimplére póssimus. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que Vos dignastes mandar B. Patrício, Confessor e Bispo,
          anunciar a vossa glória aos gentios, concedei-nos pelos seus méritos e
          intercessão que com o socorro da vossa misericórdia possamos cumprir o
          que nos ordenais. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
