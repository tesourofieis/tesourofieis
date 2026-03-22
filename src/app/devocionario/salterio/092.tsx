import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page092() {
  return (
    <PageWrapper>
      <H1 text="Salmo 92" />

      <Language>
        <Typography className="latin">
          Dóminus regnávit, decórem indútus est: * indútus est Dóminus fortitúdinem, et præcínxit
          se.
        </Typography>
        <Typography className="vernacular">
          O Senhor reinou e vestiu-se de magnificência: * vestiu-se o Senhor de fortaleza e
          cingiu-se dela.
        </Typography>
        <Typography className="latin">
          Étenim firmávit orbem terræ, * qui non commovébitur.
        </Typography>
        <Typography className="vernacular">
          Pois firmou a órbita da terra, * que não será abalada.
        </Typography>
        <Typography className="latin">Paráta sedes tua ex tunc: * a sǽculo Tu es.</Typography>
        <Typography className="vernacular">
          De então ficou vosso trono preparado: * Vós sois desde a eternidade.
        </Typography>
        <Typography className="latin">
          Elevavérunt flúmina, Dómine: * elevavérunt flúmina vocem suam.
        </Typography>
        <Typography className="vernacular">
          Os rios levantaram, ó Senhor: * os rios levantaram a sua voz.
        </Typography>
        <Typography className="latin">
          Elevavérunt flúmina fluctus suos, * a vócibus aquárum multárum.
        </Typography>
        <Typography className="vernacular">
          Levantaram os rios o som das suas ondas, * com estrondo das muitas águas.
        </Typography>
        <Typography className="latin">
          Mirábiles elatiónes maris: * mirábilis in altis Dóminus.
        </Typography>
        <Typography className="vernacular">
          Maravilhosas as elevações do mar: * admirável o Senhor nas alturas.
        </Typography>
        <Typography className="latin">
          Testimónia tua credibília facta sunt nimis: * domum tuam decet sanctitúdo, Dómine, in
          longitúdinem diérum.
        </Typography>
        <Typography className="vernacular">
          Vossos testemunhos são digníssimos de fé: * a santidade convém à vossa casa, ó Senhor, na
          longitude dos dias.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
