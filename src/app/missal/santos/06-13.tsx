import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0613() {
  return (
    <PageWrapper>
      <H1 text="Santo António de Lisboa, a 13 de Junho" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Ecclésiam tuam, Deus, beáti Antónii Confessóris tui atque Doctóris solémnitas votiva
          lætíficet: ut spirituálibus semper muniátur auxíliis et gáudiis pérfrui mereátur ætérnis.
          Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que a festa anual do B. António, vosso Confessor e Doutor, alegre a vossa Igreja, Senhor,
          a fim de que, fortalecida sempre com os auxílios espirituais, mereça desfrutar os gozos
          eternos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Præsens oblátio fiat, Dómine, pópulo tuo salutáris: pro quo dignátus es Patri tuo te
          vivéntem hóstiam immoláre: Qui cum eódem Deo Patre et Spíritu Sancto vivis et regnas...
        </Typography>
        <Typography className="vernacular">
          Fazei, Senhor, que a presente oblação seja salutar ao vosso povo, pelo qual Vos dignastes
          imolar-Vos ao vosso Pai, como hóstia viva. Ó Vós, que, sendo Deus...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Divínis, Dómine, munéribus satiáti: quǽsumus; ut, beáti Antónii Confessóris tui atque
          Doctóris méritis et intercessióne, salutáris sacrifícii sentiámus efféctum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Saciados com os divinos dons, Vos suplicamos, Senhor, que pela intercessão e méritos do B.
          António, vosso Confessor e Doutor, sintamos o efeito deste salutar sacrifício. Por nosso
          Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
