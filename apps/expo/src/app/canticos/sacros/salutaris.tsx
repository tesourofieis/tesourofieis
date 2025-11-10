import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageSalutaris() {
  return (
    <PageWrapper>
      <H1 text="Salutaris" />

      <Language>
        <Typography className="latin">
          O salutaris Hostia, Quæ cæli pandis ostium: Bella premunt hostilia, Da
          robur, fer auxilium. Uni trinoque Domino Sit sempiterna gloria, Qui
          vitam sine termino Nobis donet in patria. Amen.
        </Typography>
        <Typography className="vernacular">
          Ó Hóstia salutar, porta do céu, divino Sacramento, o inimigo ameaça os
          nossos dias! Concedei-nos, Senhor, fortaleza e socorro. A Vós, Senhor,
          glória imortal! E que por Vós a alma fiel goze a vida e a felicidade
          na pátria sempiterna. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
