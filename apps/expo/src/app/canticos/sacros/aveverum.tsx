import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageAveverum() {
  return (
    <PageWrapper>
      <H1 text="Ave verum" />

      <Language>
        <Typography className="latin">
          Ave verum corpus, natum de Maria Virgine, vere passum, immolatum in
          cruce pro homine cuius latus perforatum fluxit aqua et sanguine: esto
          nobis praegustatum in mortis examine. O Jesu dulcis, O Jesu pie, O
          Jesu, fili Mariae. Miserere mei. Amen.
        </Typography>
        <Typography className="vernacular">
          Salve, verdadeiro Corpo nascido da Virgem Maria, verdadeiramente
          atormentado, imolado na cruz pelos homens, de cujo lado perfurado
          fluíram água e sangue; sê para nós uma antecipação na provação da
          morte. Ó Jesus doce, ó Jesus piedoso, ó Jesus, filho de Maria!
        </Typography>
      </Language>
    </PageWrapper>
  );
}
