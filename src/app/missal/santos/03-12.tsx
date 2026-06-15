import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0312() {
  return (
    <PageWrapper>
      <H1 text="S. Gregório, a 12 de Março" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui ánimæ fámuli tui Gregórii ætérnæ beatitúdinis prǽmia contulísti: concéde
          propítius; ut, qui peccatórum nostrórum póndere prémimur, ejus apud te précibus
          sublevémur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que concedestes à alma do vosso servo Gregório a recompensa da bem-aventurança
          eterna, permiti benigno que pelos seus rogos junto de Vós sejamos aliviados do peso dos
          nossos pecados, que tanto nos oprimem. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Annue nobis, quǽsumus, Dómine: ut intercessióne beáti Gregórii hæc nobis prosit oblátio,
          quam immolándo totíus mundi tribuísti relaxári delícta. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, concedei-nos, Vos imploramos, que por intercessão do B. Gregório nos seja
          Proveitosa esta oblação, em virtude de cuja imolação nos alcançastes o perdão dos pecados
          do mundo inteiro. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Deus, qui beátum Gregórium Pontíficem Sanctórum tuórum méritis coæquásti: concéde
          propítius; ut, qui commemoratiónis ejus festa percólimus, vitæ quoque imitémur exémpla.
          Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que igualastes o B. Gregório aos merecimentos dos vossos Santos, concedei-nos
          benigno que, celebrando solenemente a sua festa, possamos também imitar os exemplos da sua
          vida. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
