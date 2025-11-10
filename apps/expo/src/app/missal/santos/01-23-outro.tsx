import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "./../comum/18virgensmartires2";

export default function Page0123Outro() {
  return (
    <PageWrapper>
      <H1 text="Santa Emerenciana, Virgem e Márt., a 23 de Janeiro" />

      <Typography className="comment">
        Irmã de leite de Santa Inês, a virgem Emerenciana, ainda catecúmena,
        chorava sobre o túmulo da amiga que acabava de ser martirizada. Alguns
        pagãos insultaram aquela dor. Emerenciana, repleta da virtude divina, da
        qual Jesus é a fonte (Or.), repreendeu aos adoradores dos ídolos pela
        sua crueldade para com Inês. Esses, irritados, apedrejaram-na ali mesmo,
        sobre o túmulo da amiga, de onde, baptizada no próprio sangue, foi
        unir-se eternamente ao Esposo e à sua irmã (pelo ano de 304).
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
