import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageGloria() {
  return (
    <PageWrapper>
      <H1 text="Glória" />

      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Glória Patri, et Fílio, et
          Spíritui Sancto.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao Filho e ao
          Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sicut erat in pricípio, et
          nunc, et semper, et in sǽcula sæculórum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim como era no princípio,
          agora e sempre, e por todos os séculos dos séculos.
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
