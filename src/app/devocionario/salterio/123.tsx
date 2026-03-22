import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page123() {
  return (
    <PageWrapper>
      <H1 text="Salmo 123" />

      <Language>
        <Typography className="latin">
          Nisi quia Dóminus erat in nobis, dicat nunc Israël: * nisi quia Dóminus erat in nobis,
        </Typography>
        <Typography className="vernacular">
          Se o Senhor não tivesse estado connosco, diga-o agora Israel: * se o Senhor não tivesse
          estado connosco,
        </Typography>
        <Typography className="latin">
          Cum exsúrgerent hómines in nos, * forte vivos deglutíssent nos:
        </Typography>
        <Typography className="vernacular">
          Quando os homens se levantavam contra nós, * de certo nos teriam devorado vivos:
        </Typography>
        <Typography className="latin">
          Cum irascerétur furor eórum in nos, * fórsitan aqua absorbuísset nos.
        </Typography>
        <Typography className="vernacular">
          Quando se inflamou a ira deles contra nós, * sem dúvida a água nos teria afogado.
        </Typography>
        <Typography className="latin">
          Torréntem pertransívit ánima nostra: * fórsitan pertransísset ánima nostra aquam
          intolerábilem.
        </Typography>
        <Typography className="vernacular">
          A nossa alma passou a torrente: * talvez a nossa alma poderia ter passado a água
          intolerável.
        </Typography>
        <Typography className="latin">
          Benedíctus Dóminus * qui non dedit nos in captiónem déntibus eórum.
        </Typography>
        <Typography className="vernacular">
          Bendito o Senhor, * que nos não deu por presa aos seus dentes.
        </Typography>
        <Typography className="latin">
          Ánima nostra sicut passer erépta est * de láqueo venántium:
        </Typography>
        <Typography className="vernacular">
          A nossa alma escapou como o pássaro * do laço dos caçadores:
        </Typography>
        <Typography className="latin">Láqueus contrítus est, * et nos liberáti sumus.</Typography>
        <Typography className="vernacular">O laço foi quebrado, * e nós ficámos livres.</Typography>
        <Typography className="latin">
          Adjutórium nostrum in nómine Dómini, * qui fecit cælum et terram.
        </Typography>
        <Typography className="vernacular">
          Nosso auxílio está no nome do Senhor, * que fez o céu e a terra.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
