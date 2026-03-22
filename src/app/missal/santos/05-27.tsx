import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0527() {
  return (
    <PageWrapper>
      <H1 text="S. Beda, Conf. e Doutor, a 27 de Maio" />

      <Typography className="comment">
        Beda, nascido em Jarrow, no Nortúmbria, desde a mais tenra idade foi confiado a S. Bento
        Biscopo, abade do Mosteiro benedictino de Wearmouth, tornando-se também filho do grande
        Patriarca dos monges do Ocidente.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui Ecclésiam tuam beáti Bedæ Confessóris tui atque Doctóris eruditióne claríficas:
          concéde propítius fámulis tuis; ejus semper ilustrári sapiéntia et méritis adjuvári. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que ilustrais a vossa Igreja com a erudição do B. Beda, vosso Confessor e Doutor,
          concedei propício aos vossos servos que sejam sempre ilustrados pela sua doutrina e
          socorridos pelos seus méritos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
