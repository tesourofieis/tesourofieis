import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page1025EvoraBeja() {
  return (
    <PageWrapper>
      <H1 text="S. S. Crispim e Crispiniano, Márts., a 25 de Outubro, Na Arquidiocese de Évora e Diocese de Beja" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="text-pretty">
        Senhor, ao vosso povo, a fim de que, em atenção aos preclaros méritos
        dos vossos B. B. Mártires Crispim e Crispiniano, ao implorar a vossa
        misericórdia, seja sempre auxiliado com sua protecção. Por nosso
        Senhor...
      </Text>
      <H3 text="Gradual" />
      <Text className="text-pretty">
        Deus é glorioso em seus Santos: e admirável na sua majestade, praticando
        prodígios. Senhor, a vossa dextra engrandeceu-se pela sua força: a vossa
        dextra esmagou os inimigos. Aleluia, aleluia. Esta é a verdadeira
        fraternidade que Venceu os crimes do mundo. Ela seguiu Cristo, pelo que
        gozará com glória o reino celestial. Aleluia.
      </Text>
      <H3 text="Secreta" />
      <Text className="text-pretty">
        Recebei propício, Senhor, as dádivas que oferecemos, e permiti que a
        oração dos vossos B. B. Mártires Crispim e Crispiniano as torne
        agradáveis à vossa Majestade. Por nosso Senhor...
      </Text>
      <H3 text="Postcomúnio" />
      <Text className="text-pretty">
        Que os sacramentos recebidos, Senhor, nos purifiquem, e pela intercessão
        dos B. B. Mártires Crispim e Crispiniano nos livrem de todos os males.
        Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
