import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageCruzsaobento() {
  return (
    <PageWrapper>
      <H1 text="Cruz São Bento" />

      <Language>
        <Typography className="latin">C.S.P.B.: Crux Sancti Patris Benedicti.</Typography>
        <Typography className="vernacular">C.S.P.B.: Cruz do Santo Patriarca Bento.</Typography>
        <Typography className="latin">C.S.S.M.L.: Crux Sancta Sit Mihi Lux.</Typography>
        <Typography className="vernacular">C.S.S.M.L.: A Cruz Santa seja a minha Luz.</Typography>
        <Typography className="latin">N.D.S.M.D.: Non Draco Sit Mihi Dux.</Typography>
        <Typography className="vernacular">
          N.D.S.M.D.: Que o Dragão não seja meu Senhor.
        </Typography>
        <Typography className="latin">V.R.S.: Vade Retro Satana!</Typography>
        <Typography className="vernacular">V.R.S.: Retira-te, Satanás!</Typography>
        <Typography className="latin">N.S.M.V. Numquam Suades Mihi Vana!</Typography>
        <Typography className="vernacular">N.S.M.V. Não me aconselhes loucuras!</Typography>
        <Typography className="latin">S.M.Q.L.: Sunt Mala Quæ Libas.</Typography>
        <Typography className="vernacular">S.M.Q.L.: São maldades o que me apresentas.</Typography>
        <Typography className="latin">I.V.B.: Ipse Venena Bibas.</Typography>
        <Typography className="vernacular">I.V.B.: Tu mesmo bebe esses venenos.</Typography>
        <Typography className="latin">Amen.</Typography>
        <Typography className="vernacular">Amen.</Typography>
      </Language>
    </PageWrapper>
  );
}
