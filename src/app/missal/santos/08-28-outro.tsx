import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0828Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Hermes, Mártir, a 28 de Agosto" />

      <Typography className="comment">
        Em Roma, diz o Martirológio Romano: triunfo de S. Hermes, personagem muito considerável que,
        depois de haver estado por algum tempo na prisão, foi decapitado com varios outros santos
        sob o juiz Aureliano, como relatam as actas do Papa Santo Alexandre († cerca do ano 133).
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátum Hermétem Mártyrem tuum virtúte constántiæ in passióne roborásti: ex ejus
          nobis imitatióne tríbue; pro amóre tuo próspera mundi despícere, et nulla ejus advérsa
          formidáre. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que fortalecestes o B. Hermes, vosso Mártir, com a virtude da constância no seu
          suplício, concedei-nos, pelo vosso amor, que, seguindo seu exemplo, desprezemos as
          prosperidades deste mundo e nunca temamos as adversidades. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Sacrifícium tibi, Dómine, laudis offérimus in tuórum commemoratióne Sanctórum: da,
          quǽsumus; ut, quod illis cóntulit glóriam, nobis prosit ad salútem. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos oferecemos, Senhor, em memória dos vossos Santos, este sacrifício de louvor; e, Vos
          imploramos, fazei que aquilo que lhe alcançou a glória sirva de proveito à nossa salvação.
          Por n...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Repleti, Dómine, benedictióne cœlésti, quǽsumus cleméntiam tuam: ut, intercedénte beáto
          Herméte Mártyre tuo, quæ humíliter gérimus, salúbriter sentiámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Saciados, Senhor, com a celestial bênção, invocamos a vossa clemência, a fim de que pela
          intercessão do B. Hermes, vosso Mártir, alcancemos os salutares efeitos do sacrifício, que
          humildemente celebramos. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
