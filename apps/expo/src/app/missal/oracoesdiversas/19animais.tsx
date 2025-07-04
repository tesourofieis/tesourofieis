import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page19Animais() {
  return (
    <PageWrapper>
      <H1 text="19.ª Nas doenças dos animais" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui labóribus hóminum étiam de mutis animálibus solácia
          subrogásti: súpplices te rogámus; ut, sine quibus non álitur humána
          condício, nostris fácias úsibus non períre. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que Vos dignastes aliviar os trabalhos dos homens,
          concedendo-lhes o auxílio dos animais irracionais, humildemente Vos
          pedimos, conservai para as nossas necessidades, preservando-os da
          morte, aqueles de que a condição humana tem necessidade. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Sacrifíciis, Dómine, placátus oblátis: opem tuam nostris tempóribus
          cleménter impénde. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que os sacrifícios que Vos oferecemos, ó Senhor, aplaquem a vossa ira,
          e que a vossa clemência se faça sentir nestes infelizes tempos. Por
          nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Benedictiónem tuam, Dómine, pópulus fidélis accípiat, qua córpore
          salvétur et mente: et cóngruam tibi exhíbeat servitútem, et
          propitiatiónis tuæ benefícia semper invéniat. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que o vosso povo fiel, Senhor, receba a vossa bênção, conferindo-lhe a
          saúde ao corpo e à alma, para que continue a servir-Vos
          convenientemente e por isso mesmo alcance os benefícios da vossa
          misericórdia. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
