import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1Sufragiosantos() {
  return (
    <PageWrapper>
      <H1 text="1.ª Para implorar os Sufrágios dos Santos" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Concéde, quǽsumus, omnípotens Deus: ut intercéssio sanctæ Dei Genetrícis Maríæ,
          sanctorúmque ómnium Apostolórum, Mártyrum, Confessórum, atque Vírginum, et ómnium
          electórum tuórum, nos ubíque lætíficet; ut, dum eórum mérita recólimus, patrocínia
          sentiámus. Per eúndem Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, Vos suplicamos, ó Deus omnipotente, que a intercessão de Maria, santa Mãe de
          Deus, de todos os Santos Apóstolos, Mártires, Confessores e Virgens e de todos vossos
          escolhidos nos alegre sempre e em toda a parte, a fim de que, sempre que recordemos os
          seus merecimentos, gozemos a sua protecção. Pelo mesmo nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Oblátis, Dómine, placáre munéribus: et, intercedénte beáta María semper Vírgine cum
          ómnibus Sanctis tuis, a cunctis nos defénde perículis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Aplacai-Vos, Senhor, com os dons que Vos oferecemos; e, por intercessão da B. Maria,
          sempre Virgem, e de todos os Santos, defendei-nos de todos os perigos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Súmpsimus, Dómine, beátæ Maríæ semper Vírginis et ómnium Sanctórum tuórum memóriam
          recoléntes, sacraménta cœléstia: præsta, quǽsumus; ut, quod temporáliter gérimus, ætérnis
          gáudiis consequámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebemos, Senhor, os dons celestiais em memória da B. Maria, sempre Virgem, e de todos
          vossos Santos; e, Vos suplicamos, concedei-nos que esta união, começada na terra, possa
          ser coroada com as alegrias eternas. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
