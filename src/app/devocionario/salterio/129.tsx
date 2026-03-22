import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page129() {
  return (
    <PageWrapper>
      <H1 text="Salmo 129" />

      <Language>
        <Typography className="latin">
          De profúndis clamávi ad Te, Dómine: * Dómine, exáudi vocem meam:
        </Typography>
        <Typography className="vernacular">
          Do profundo clamei a Vós, Senhor: * ó Senhor, escutai a minha voz:
        </Typography>
        <Typography className="latin">
          Fiant aures tuæ intendéntes, * in vocem deprecatiónis meæ.
        </Typography>
        <Typography className="vernacular">
          Estejam atentos os vossos ouvidos, * à voz da minha súplica.
        </Typography>
        <Typography className="latin">
          Si iniquitátes observáveris, Dómine: * Dómine, quis sustinébit?
        </Typography>
        <Typography className="vernacular">
          Se observardes as nossas iniquidades, Senhor: * ó Senhor, quem subsistirá?
        </Typography>
        <Typography className="latin">
          Quia apud Te propitiátio est: * et propter legem tuam sustínui Te, Dómine.
        </Typography>
        <Typography className="vernacular">
          Pois em Vós está a clemência: * Senhor, e devido à vossa lei subsiste em Vós.
        </Typography>
        <Typography className="latin">
          Sustínuit ánima mea in verbo ejus: * sperávit ánima mea in Dómino.
        </Typography>
        <Typography className="vernacular">
          Minha alma subsiste na sua palavra: * esperou a minha alma no Senhor.
        </Typography>
        <Typography className="latin">
          A custódia matutína usque ad noctem: * speret Israël in Dómino.
        </Typography>
        <Typography className="vernacular">
          Desde a vigília matutina até à noite: * espere Israel no Senhor.
        </Typography>
        <Typography className="latin">
          Quia apud Dóminum misericórdia: * et copiósa apud eum redémptio.
        </Typography>
        <Typography className="vernacular">
          Pois no Senhor está a misericórdia: * e há n’Ele abundante redenção.
        </Typography>
        <Typography className="latin">
          Et ipse rédimet Israël, * ex ómnibus iniquitátibus ejus.
        </Typography>
        <Typography className="vernacular">
          Ele mesmo redimirá Israel, * de todas suas iniquidades.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
