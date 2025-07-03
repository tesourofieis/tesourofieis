import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page129() {
  return (
    <PageWrapper>
      <Text className="h1">Salmo 129</Text>

      <Language>
        <Text className="latin">
          De profúndis clamávi ad Te, Dómine: * Dómine, exáudi vocem meam:
        </Text>
        <Text className="vernacular">
          Do profundo clamei a Vós, Senhor: * ó Senhor, escutai a minha voz:
        </Text>
        <Text className="latin">
          Fiant aures tuæ intendéntes, * in vocem deprecatiónis meæ.
        </Text>
        <Text className="vernacular">
          Estejam atentos os vossos ouvidos, * à voz da minha súplica.
        </Text>
        <Text className="latin">
          Si iniquitátes observáveris, Dómine: * Dómine, quis sustinébit?
        </Text>
        <Text className="vernacular">
          Se observardes as nossas iniquidades, Senhor: * ó Senhor, quem
          subsistirá?
        </Text>
        <Text className="latin">
          Quia apud Te propitiátio est: * et propter legem tuam sustínui Te,
          Dómine.
        </Text>
        <Text className="vernacular">
          Pois em Vós está a clemência: * Senhor, e devido à vossa lei subsiste
          em Vós.
        </Text>
        <Text className="latin">
          Sustínuit ánima mea in verbo ejus: * sperávit ánima mea in Dómino.
        </Text>
        <Text className="vernacular">
          Minha alma subsiste na sua palavra: * esperou a minha alma no Senhor.
        </Text>
        <Text className="latin">
          A custódia matutína usque ad noctem: * speret Israël in Dómino.
        </Text>
        <Text className="vernacular">
          Desde a vigília matutina até à noite: * espere Israel no Senhor.
        </Text>
        <Text className="latin">
          Quia apud Dóminum misericórdia: * et copiósa apud eum redémptio.
        </Text>
        <Text className="vernacular">
          Pois no Senhor está a misericórdia: * e há n’Ele abundante redenção.
        </Text>
        <Text className="latin">
          Et ipse rédimet Israël, * ex ómnibus iniquitátibus ejus.
        </Text>
        <Text className="vernacular">
          Ele mesmo redimirá Israel, * de todas suas iniquidades.
        </Text>
      </Language>
    </PageWrapper>
  );
}
