import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1004() {
  return (
    <PageWrapper>
      <H1 text="S. Francisco, a 4 de Outubro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/07-17">
          Missa Imp. dos Estigmas em S. Francisco
        </Link>{" "}
        , a 17 de Setembro, excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui Ecclésiam tuam, beáti Francisci méritis fœtu novæ prolis
          amplíficas: tríbue nobis; ex ejus imitatióne, terréna despícere et
          cœléstium donórum semper participatióne gaudére. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que pelos méritos do B. Francisco enriquecestes a vossa
          Igreja, dando-lhe uma nova família, concedei-nos a graça de imitá-lo,
          desprezando os bens terrenos, e de sempre nos alegrarmos com a
          participação dos dons celestiais. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="aside">
        Como na
        <Link href="/missal/santos/01-15#evangelho">
          Missa S. Paulo, 1.º Eremita, Conf.
        </Link>
      </Text>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Ecclésiam tuam, quǽsumus, Dómine, grátia cœléstis amplíficet: quam
          beáti Francísci Confessóris tui illumináre voluísti gloriósis méritis
          et exémplis. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Dignai-Vos, Senhor, Vos suplicamos, com a graça celestial dilatar a
          vossa Igreja, a qual quisestes ilustrar com os gloriosos méritos e
          exemplos do B. Francisco, vosso Confessor. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
