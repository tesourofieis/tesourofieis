import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PagePainosso() {
  return (
    <PageWrapper>
      <H1 text="Pai Nosso" />

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Pater noster, qui es in cælis:
          sanctificétur nomen tuum: advéniat regnum tuum: fiat volúntas tua, sicut in cælo, et in
          terra.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Pai Nosso, que estais nos céus,
          santificado seja o Vosso Nome, venha a nós o Vosso Reino; seja feita a Vossa vontade assim
          na terra como no Céu.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Panem nostrum quotidiánum da nobis
          hódie: et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris. Et ne
          nos indúcas in tentatiónem. Sed líbera nos a malo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> O pão nosso de cada dia nos dai hoje;
          perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores; e não nos
          deixeis cair em tentação; mas livrai-nos do mal.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
