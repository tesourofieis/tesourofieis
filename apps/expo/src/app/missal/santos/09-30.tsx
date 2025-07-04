import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0930() {
  return (
    <PageWrapper>
      <H1 text="S. Jerónimo, Presb. C. e Doutor, a 30 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui Ecclésiæ tuæ in exponéndis sacris Scriptúris beátum
          Hierónymum, Confessórem tuum, Doctórem máximum providére dignátus es:
          præsta, quǽsumus; ut, ejus suffragántibus méritis, quod ore simul et
          ópere dócuit, te adjuvánte, exercére valeámus. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que para explicar as Sagradas Escrituras Vos dignastes prover
          a vossa Igreja com um eminente Doutor na pessoa do vosso B. confessor
          Jerónimo, concedei-nos, Vos suplicamos. que pelos sufrágios dos seus
          méritos possamos com o auxílio da vossa graça praticar aquilo que ele
          ensinou, tanto pelas palavras, como pelas acções. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Donis cœléstibus da nobis, quǽsumus, Dómine, líbera tibi mente
          servíre: ut múnera, quæ deférimus, interveniénte beáto Hierónymo
          Confessóre tuo, et medélam nobis operéntur et glóriam. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Pela virtude destes dons, Senhor, concedei-nos a graça de Vos
          servirmos com inteira liberdade de espírito, a fim de que os dons, que
          Vos apresentamos, nos alcancem, por intercessão do vosso B. Confessor
          Jerónimo, a cura dos nossos males e a glória eterna. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Repleti alimónia cœlésti, quǽsumus, Dómine: ut, interveniénte beáto
          Hierónymo Confessóre tuo, misericórdiæ tuæ grátiam cónsequi mereámur.
          Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Saciados com o alimento celestial, permiti, Senhor, Vos rogamos, que
          pela intercessão do vosso B. Confessor Jerónimo mereçamos conseguir a
          graça da vossa misericórdia. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
