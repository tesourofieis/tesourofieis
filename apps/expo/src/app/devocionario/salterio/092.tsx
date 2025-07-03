import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function Page092() {
  return (
    <PageWrapper>
      <H1 text="Salmo 92" />

      <Language>
        <Text className="latin">
          Dóminus regnávit, decórem indútus est: * indútus est Dóminus
          fortitúdinem, et præcínxit se.
        </Text>
        <Text className="vernacular">
          O Senhor reinou e vestiu-se de magnificência: * vestiu-se o Senhor de
          fortaleza e cingiu-se dela.
        </Text>
        <Text className="latin">
          Étenim firmávit orbem terræ, * qui non commovébitur.
        </Text>
        <Text className="vernacular">
          Pois firmou a órbita da terra, * que não será abalada.
        </Text>
        <Text className="latin">
          Paráta sedes tua ex tunc: * a sǽculo Tu es.
        </Text>
        <Text className="vernacular">
          De então ficou vosso trono preparado: * Vós sois desde a eternidade.
        </Text>
        <Text className="latin">
          Elevavérunt flúmina, Dómine: * elevavérunt flúmina vocem suam.
        </Text>
        <Text className="vernacular">
          Os rios levantaram, ó Senhor: * os rios levantaram a sua voz.
        </Text>
        <Text className="latin">
          Elevavérunt flúmina fluctus suos, * a vócibus aquárum multárum.
        </Text>
        <Text className="vernacular">
          Levantaram os rios o som das suas ondas, * com estrondo das muitas
          águas.
        </Text>
        <Text className="latin">
          Mirábiles elatiónes maris: * mirábilis in altis Dóminus.
        </Text>
        <Text className="vernacular">
          Maravilhosas as elevações do mar: * admirável o Senhor nas alturas.
        </Text>
        <Text className="latin">
          Testimónia tua credibília facta sunt nimis: * domum tuam decet
          sanctitúdo, Dómine, in longitúdinem diérum.
        </Text>
        <Text className="vernacular">
          Vossos testemunhos são digníssimos de fé: * a santidade convém à vossa
          casa, ó Senhor, na longitude dos dias.
        </Text>
      </Language>
    </PageWrapper>
  );
}
