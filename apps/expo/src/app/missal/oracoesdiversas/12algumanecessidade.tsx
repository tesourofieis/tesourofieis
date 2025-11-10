import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page12Algumanecessidade() {
  return (
    <PageWrapper>
      <H1 text="12.ª Por alguma necessidade" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, refúgium nostrum et virtus: adésto piis Ecclésiæ tuæ précibus,
          auctor ipse pietátis, et præsta; ut, quod fidéliter pétimus,
          efficáciter consequámur. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, nosso refúgio e fortaleza e autor da piedade, atendei às
          preces devotas da vossa Igreja, para que obtenhamos eficazmente o que
          Vos suplicamos confiadamente. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Da, miséricors Deus: ut hæc salutáris oblátio et a própriis nos
          reátibus indesinénter expédiat, et ab ómnibus tueátur advérsis. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, ó Deus misericordioso, que esta salutar oblação nos
          livre urgentemente das nossas próprias faltas e nos defenda de todas
          as adversidades. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Súmpsimus, Dómine, sacri dona mystérii, humíliter deprecántes: ut, quæ
          in tui commemoratiónem nos fácere præcepísti, in nostræ profíciant
          infirmitátis auxílium: Qui vivis...
        </Typography>
        <Typography className="vernacular">
          Senhor, recebemos os dons dos vossos sagrados mystérios; e,
          humildemente Vos suplicamos, permiti que seja proveitoso para a nossa
          fraqueza aquilo que ordenastes fizéssemos em vossa memória. Por nosso
          Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
