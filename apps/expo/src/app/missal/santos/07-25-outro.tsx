import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

import Missa from "../comum/4martirnaopontifice1";

export default function Page0725Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Cristovão, Mártir, a 25 de Julho" />

      <Typography className="comment">
        São Cristovão era Cananeu de origem. Seu nome (que carrega o Cristo)
        exprime o seu amor a Jesus. Alma generosa, caminhou como gigante no
        caminho da virtude. A piedade de nossos pais, inspirando-se na bela
        alegoria, colocava nos átrios das catedrais a estátua gigantesca de São
        Cristovão. Foi martirizado cerca do ano 250, e é um dos «14 santos
        auxiliares».
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
