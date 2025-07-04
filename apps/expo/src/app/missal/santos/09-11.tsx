import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0911() {
  return (
    <PageWrapper>
      <H1 text="S. S. Proto e Jacinto, Mártires, a 11 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Beatórum Mártyrum tuórum Proti et Hyacínthi nos, Dómine, fóveat
          pretiósa conféssio: et pia júgiter intercéssio tueátur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que a preciosa confissão da fé dos vossos B. B. Mártires Proto e
          Jacinto nos anime, e que eles nos protejam incessantemente com os
          méritos da sua piedosa intercessão. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Pro sanctórum Martyrum tuórum Proti et Hyacínthi commemoratióne,
          múnera tibi, Dómine, quæ debémus, exsólvimus: præsta, quǽsumus; ut
          remédium nobis perpétuæ salútis operéntur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Vos oferecemos, Senhor, em memória dos vossos Santos Mártires Proto e
          Jacinto, estas oblatas, que Vos são devidas, e permiti, Vos rogamos,
          que nos curem e proporcionem o remédio da salvação. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Ut percépta nos, Dómine, tua sancta puríficent: beatórum Mártyrum
          tuórum Proti et Hyacínthi, quǽsumus, ímploret orátio. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Vos pedimos, Senhor, fazei que os mystérios agora recebidos nos
          alcancem, pelas preces dos vossos B. B. Mártires Proto e Jacinto, a
          graça de sermos purificados. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
