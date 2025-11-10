import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page120() {
  return (
    <PageWrapper>
      <H1 text="Salmo 120" />

      <Language>
        <Typography className="latin">
          Levávi óculos meos in montes, * unde véniet auxílium mihi.
        </Typography>
        <Typography className="vernacular">
          Levantei os meus olhos para os montes, * donde me virá o auxílio.
        </Typography>
        <Typography className="latin">
          Auxílium meum a Dómino, * qui fecit cælum et terram.
        </Typography>
        <Typography className="vernacular">
          Meu auxílio vem do Senhor, * que fez o céu e a terra.
        </Typography>
        <Typography className="latin">
          Non det in commotiónem pedem tuum: * neque dormítet qui custódit te.
        </Typography>
        <Typography className="vernacular">
          Não permita Ele que vacile o teu pé: * nem adormeça Aquele que te
          guarda.
        </Typography>
        <Typography className="latin">
          Ecce, non dormitábit neque dórmiet, * qui custódit Israël.
        </Typography>
        <Typography className="vernacular">
          Eis que não adormecerá, nem dormirá, * O que guarda Israel.
        </Typography>
        <Typography className="latin">
          Dóminus custódit te, Dóminus protéctio tua, * super manum déxteram
          tuam.
        </Typography>
        <Typography className="vernacular">
          O Senhor te guarda, o Senhor é a tua protecção, * Ele está à tua
          direita.
        </Typography>
        <Typography className="latin">
          Per diem sol non uret te: * neque luna per noctem.
        </Typography>
        <Typography className="vernacular">
          Durante o dia o sol te não queimará: * nem de noite a lua.
        </Typography>
        <Typography className="latin">
          Dóminus custódit te ab omni malo: * custódiat ánimam tuam Dóminus.
        </Typography>
        <Typography className="vernacular">
          O Senhor te guarde de todo o mal: * o Senhor guarde a tua alma.
        </Typography>
        <Typography className="latin">
          Dóminus custódiat intróitum tuum, et éxitum tuum: * ex hoc nunc, et
          usque in sǽculum.
        </Typography>
        <Typography className="vernacular">
          O Senhor guarde a tua entrada e a tua saída: * desde agora e para
          sempre.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
