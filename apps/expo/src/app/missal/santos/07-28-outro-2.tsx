import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0728Outro2() {
  return (
    <PageWrapper>
      <H1 text="S. Inocêncio, Papa e Conf., a 28 de Julho" />

      <Typography className="comment">
        Inocêncio I nasceu em Albano e viveu no tempo de Santo Agostinho e de S.
        Jerónimo. Este último escreveu a seu respeito: «Guardai a fé de Santo
        Inocêncio que ocupa a cátedra apostólica, sucessor e filho espiritual de
        Anastácio, de feliz memória; não recebais outra doutrina por mais sábia
        e sedutora que pareça». Morreu no ano 417.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
