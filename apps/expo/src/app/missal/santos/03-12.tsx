import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0312() {
  return (
    <PageWrapper>
      <H1 text="S. Gregório, a 12 de Março" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui ánimæ fámuli tui Gregórii ætérnæ beatitúdinis prǽmia
          contulísti: concéde propítius; ut, qui peccatórum nostrórum póndere
          prémimur, ejus apud te précibus sublevémur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que concedestes à alma do vosso servo Gregório a recompensa da
          bem-aventurança eterna, permiti benigno que pelos seus rogos junto de
          Vós sejamos aliviados do peso dos nossos pecados, que tanto nos
          oprimem. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Annue nobis, quǽsumus, Dómine: ut intercessióne beáti Gregórii hæc
          nobis prosit oblátio, quam immolándo totíus mundi tribuísti relaxári
          delícta. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, concedei-nos, Vos imploramos, que por intercessão do B.
          Gregório nos seja Proveitosa esta oblação, em virtude de cuja imolação
          nos alcançastes o perdão dos pecados do mundo inteiro. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Deus, qui beátum Gregórium Pontíficem Sanctórum tuórum méritis
          coæquásti: concéde propítius; ut, qui commemoratiónis ejus festa
          percólimus, vitæ quoque imitémur exémpla. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que igualastes o B. Gregório aos merecimentos dos vossos
          Santos, concedei-nos benigno que, celebrando solenemente a sua festa,
          possamos também imitar os exemplos da sua vida. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
