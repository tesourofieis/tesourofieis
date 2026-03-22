import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0102() {
  return (
    <PageWrapper>
      <H1 text="Oitava de S. Estevão, Mártir, a 2 de Janeiro" />

      <Typography className="aside">
        Como na{" "}
        <Link href="/missal/santos/12-26">
          Missa S. Estêvão, Primeiro Mártir, a 26 de Dezembro,
        </Link>
        excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens sempitérne Deus, qui primítias Mártyrum in beáti Levítæ Stéphani sánguine
          dedicásti: tríbue, quǽsumus; ut pro nobis intercéssor exsístat, qui pro suis étiam
          persecutóribus exorávit Dóminum nostrum Jesum Christum Filium tuum. Qui tecum vivit...
        </Typography>
        <Typography className="vernacular">
          Deus omnipotente e eterno, que consagrastes as primícias dos Mártires com o sangue do B.
          Levita Estevão, dignai-Vos permitir que seja perante Vós nosso intercessor aquele que a
          Nosso Senhor Jesus Cristo rogou pelos seus perseguidores. Ele que, sendo Deus...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
