import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0208() {
  return (
    <PageWrapper>
      <H1 text="S. João da Mata, Conf., a 8 de Fevereiro" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui per sanctum Joánnem órdinem sanctíssimæ Trinitatis, ad
          rediméndum de potestáte Saracenórum captívos, cœlitus institúere
          dignátus es: præsta, quǽsumus; ut, ejus suffragántibus méritis, a
          captivitáte córporis et ánimæ, te adjuvánte, liberémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que por S. João Vos dignastes estabelecer miraculosamente a
          Ordem da Santíssima Trindade para remir os cativos detidos pelos
          Sarracenos fazei, Vos suplicamos, que, pelo sufrágio dos seus méritos,
          sejamos livres do cativeiro corporal e espiritual. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
