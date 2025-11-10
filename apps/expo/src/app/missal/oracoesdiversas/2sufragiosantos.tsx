import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page2Sufragiosantos() {
  return (
    <PageWrapper>
      <H1 text="2.ª Para implorar os Sufrágios dos Santos" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          A cunctis nos, quǽsumus, Dómine, mentis et córporis defénde perículis:
          et, intercedénte beáta et gloriósa semper Vírgine Dei Genetríce María,
          cum beáto Joseph, beátis Apóstolis tuis Petro et Paulo, atque beáto{" "}
          <Typography className="latin">N.</Typography> et ómnibus Sanctis,
          salutem nobis tríbue benígnus et pacem; ut, destrúctis adversitátibus
          et erróribus univérsis, Ecclésia tua secúra tibi sérviat libertáte.
          Per eúndem Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, defendei-nos de todos os perigos da alma e do
          corpo; e, por intercessão da B. e gloriosa Maria, Mãe de Deus e sempre
          Virgem, do B. José, dos vossos B. B. Apóstolos Pedro e Paulo, do B.{" "}
          <Typography className="vernacular">N.</Typography> (nome do Patrono da
          Igreja) e de todos os Santos, concedei-nos benigno a salvação e a paz,
          a fim de que, destruídas todas as adversidades e erros, a vossa Igreja
          possa servir-Vos com segurança e liberdade. Pelo mesmo nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Exáudi nos, Deus, salutáris noster: ut, per hujus sacraménti virtútem,
          a cunctis nos mentis et córporis hóstibus tueáris; grátiam tríbuens in
          præsénti, et glóriam in futúro. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ouvi-nos, ó Deus, nosso Salvador, a fim de que, pela virtude deste
          Sacramento, nos defendais de todos os inimigos da alma e do corpo, e
          nos concedais a graça durante esta vida e a glória na eternidade. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Mundet et múniat nos, quǽsumus, Dómine, divíni sacraménti munus
          oblátum: et, intercedénte beáta Vírgine Dei Genetríce María, cum beáto
          Joseph, beátis Apóstolis tuis Petro et Paulo, atque beáto{" "}
          <Typography className="latin">N.</Typography> et ómnibus Sanctis; a
          cunctis nos reddat et perversitátibus expiátos, et adversitátibus
          expedítos. Per eúndem Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, Senhor, que o dom deste divino sacrifício, que Vos é
          oferecido, nos purifique e fortaleça; e, por intercessão da B. Virgem
          Maria, Mãe de Deus, do B. José, dos B. B. Apóstolos Pedro e Paulo, do
          B. <Typography className="vernacular">N.</Typography> (nome do Patrono
          da Igreja) e de todos os Santos, nos sirva de expiação dos nossos
          pecados e nos livre de todas as adversidades. Pelo mesmo nosso
          Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
