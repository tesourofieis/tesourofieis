import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/sumospontifices";

export default function Page0802Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Estêvão I, Papa e Mártir, a 2 de Agosto" />

      <Typography className="comment">
        Romano de origem, Santo Estevão I governou a Igreja no tempo dos imperadores Valeriano e
        Galiano. Apesar das violentíssimas perseguições, celebrava regularmente os Santos Mistérios
        nas criptas dos Mártires, onde reunia Concílios. Proibiu rebaptizar-se os cristãos já
        baptizados pelos hereges. Em 257, enquanto celebrava a Santa Missa, os perseguidores
        sobrevieram e o decapitaram na sua sede.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
