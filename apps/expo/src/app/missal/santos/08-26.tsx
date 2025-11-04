import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/sumospontifices";

export default function Page0826() {
  return (
    <PageWrapper>
      <H1 text="S. Zeferino, Papa e Mártir, a 26 de Agosto" />

      <Typography className="comment">
        São Zepherino sucedeu no trono pontifical a S. Victor, sendo, como ele,
        martirizado (Ev.). Aboliu, na celebração do Santo Sacrifício, o uso dos
        cálices de madeira, substituindo-os pelos de vidro. Estabeleceu que
        todos os fieis comungariam no santo dia da Pascoá. Defendeu o dogma da
        unidade de Deus e da Trindade das pessoas, contra os Sabellianos. A
        essas lutas internas uniram-se as perseguições; Deus, porém, sempre o
        sustentou no meio das provações, a fim de poder o Santo, por sua vez,
        sustentar o rebanho de Cristo (Ep.). Morreu em 218, após um pontificado
        de dezessete annos.
      </Typography>

      <Missa />
    </PageWrapper>
  );
}
