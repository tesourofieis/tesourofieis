import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0214() {
  return (
    <PageWrapper>
      <H1 text="S. Valentim, Presbítero e Mártir, a 14 de Fevereiro" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/4martirnaopontifice1">
          Missa In virtúte tua
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut, qui beáti Valentíni Mártyris tui natalítia cólimus,
          a cunctis malis imminéntibus, ejus intercessióne, liberémur. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Concedei-nos, Vos suplicamos, ó Deus omnipotente, que, celebrando o natal do B. Valentim,
          vosso Mártir, sejamos livres por sua intercessão de todos os males que nos ameaçam. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Súscipe, quǽsumus, Dómine, múnera dignánter obláta: et, beáti Valentini Mártyris tui
          suffragántibus méritis, ad nostræ salútis auxílium proveníre concéde. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei, Vos suplicamos, Senhor, os dons que devidamente Vos oferecemos; e pelos méritos e
          sufrágios do B. Valentim, vosso Mártir, concedei-nos que nos sirvam de auxílio para a
          salvação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Sit nobis, Dómine, reparátio mentis et córporis cœléste mystérium: ut, cujus exséquimur
          actiónem, intercedénte beáto Valentíno Mártyre tuo, sentiámus efféctum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que estes celestiais mystérios, Senhor, restaurem a nossa alma e o nosso corpo, a fim de
          que, por intercessão do B. Valentim, vosso Mártir, sintamos os efeitos do sacrifício que
          celebrámos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
