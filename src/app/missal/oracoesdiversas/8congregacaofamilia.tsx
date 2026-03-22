import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page8Congregacaofamilia() {
  return (
    <PageWrapper>
      <H1 text="8.ª Por uma Congregação e Família" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Defénde, quǽsumus, Dómine, beáta María semper Vírgine intercedénte, istam ab omni
          adversitáte famíliam: et toto corde tibi prostrátam, ab hóstium propítius tuére cleménter
          insídiis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Pela intercessão da B. sempre Virgem Maria, defendei, Senhor, Vos suplicamos, esta família
          de todas as adversidades; e, visto que ela está prostrada de todo o coração diante de Vós,
          sede-lhe propício e, clementemente, protegei-a das insídias dos seus inimigos. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Súscipe, quǽsumus, omnípotens Deus, oblatiónem nostræ devotiónis: et, per virtútem hujus
          sacraménti, fámulos tuos a cunctis adversitátibus prótege. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos pedimos, aceitai esta oferta da nossa devoção; e pela virtude
          deste sacramento protegei os vossos servos de todas as adversidades. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Sumptis redemptiónis nostræ munéribus: præsta, quǽsumus, miséricors Deus; eórum nobis
          celebratióne, tuæ protectiónis contra omnes adversitátes subsídium. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Permiti, ó Deus de misericórdia, Vos rogamos, que, havendo nós recebido os dons da nossa
          redenção, sintamos o socorro da vossa protecção contra todas as adversidades. Por nosso
          Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
