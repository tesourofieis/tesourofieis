import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page133() {
  return (
    <PageWrapper>
      <H1 text="Salmo 133" />

      <Language>
        <Typography className="latin">
          Ecce nunc benedícite Dóminum, * omnes servi Dómini:
        </Typography>
        <Typography className="vernacular">
          Agora, pois, bendizei o Senhor, * todos os servos do Senhor:
        </Typography>
        <Typography className="latin">
          Qui statis in domo Dómini, * in átriis domus Dei nostri.
        </Typography>
        <Typography className="vernacular">
          Vós que estais na casa do Senhor, * nos átrios da casa do nosso Deus.
        </Typography>
        <Typography className="latin">
          In nóctibus extóllite manus vestras in sancta, * et benedícite
          Dóminum.
        </Typography>
        <Typography className="vernacular">
          De noite levantai as vossas mãos para o santuário, * e bendizei o
          Senhor.
        </Typography>
        <Typography className="latin">
          Benedícat te Dóminus ex Sion, * qui fecit cælum et terram.
        </Typography>
        <Typography className="vernacular">
          Te abençoe de Sião o Senhor, * que fez o céu e a terra.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
