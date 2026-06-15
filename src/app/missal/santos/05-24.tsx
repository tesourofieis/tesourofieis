import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0524() {
  return (
    <PageWrapper>
      <H1 text="B. Virgem Maria, Auxílio dos Cristãos, a 24 de Maio" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/26festasmaria1">
          Missa Comum das Festas da B. V. M.,
        </Link>
        excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Omnípotens et miséricors Deus, qui ad defensiónem pópuli christiáni in beatíssima Vírgine
          María perpétuum auxílium mirabíliter constituísti: concéde propítius; ut, tali præsídio
          muníti certántes in vita, victóriam de hoste malígno cónsequi valeámus in morte. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Omnipotente e misericordioso Deus, que para defesa do povo cristão maravilhosamente
          instituístes a B. Virgem Maria como sua auxiliadora perpétua, concedei-nos propício que,
          depois de havermos sido munidos nos combates da vida com uma tão poderosa protecção,
          mereçamos também alcançar à hora da morte a vitória contra o inimigo maligno. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Pro religiónis christánæ triúmpho hóstias placatiónis tibi, Dómine, immolámus: quæ ut
          nobis profíciant, opem auxiliátrix Virgo præstet; per quam talis perfécta est victória.
          Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos oferecemos vítimas de propiciação pelo triunfo da religião cristã, e que elas, Senhor,
          pela intercessão da Virgem Auxiliadora, pela qual foi assegurada a vitória perfeita,
          revertam em nosso proveito. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Adésto, Dómine, pópulis, qui participatióne Córporis et Sánguinis tui reficiúntur: ut,
          sanctíssima tua Genitríce auxiliánte, ab omni malo et perículo liberéntur, et in omni
          ópere bono custodiántur: Qui vivis et regnas...
        </Typography>
        <Typography className="vernacular">
          Acolhei benigno, Senhor, os povos que se alimentam com vosso Corpo e Sangue, a fim de que
          com o auxílio da vossa Santíssima Mãe sejam livres de todo o mal e de todo o perigo, e
          perseverem na prática de todas as boas obras. Ó Vós, que viveis e reinais...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
