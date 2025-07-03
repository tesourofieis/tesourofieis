import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page123() {
  return (
    <PageWrapper>
      <Text className="h1">Salmo 123</Text>

      <Language>
        <Text className="latin">
          Nisi quia Dóminus erat in nobis, dicat nunc Israël: * nisi quia
          Dóminus erat in nobis,
        </Text>
        <Text className="vernacular">
          Se o Senhor não tivesse estado connosco, diga-o agora Israel: * se o
          Senhor não tivesse estado connosco,
        </Text>
        <Text className="latin">
          Cum exsúrgerent hómines in nos, * forte vivos deglutíssent nos:
        </Text>
        <Text className="vernacular">
          Quando os homens se levantavam contra nós, * de certo nos teriam
          devorado vivos:
        </Text>
        <Text className="latin">
          Cum irascerétur furor eórum in nos, * fórsitan aqua absorbuísset nos.
        </Text>
        <Text className="vernacular">
          Quando se inflamou a ira deles contra nós, * sem dúvida a água nos
          teria afogado.
        </Text>
        <Text className="latin">
          Torréntem pertransívit ánima nostra: * fórsitan pertransísset ánima
          nostra aquam intolerábilem.
        </Text>
        <Text className="vernacular">
          A nossa alma passou a torrente: * talvez a nossa alma poderia ter
          passado a água intolerável.
        </Text>
        <Text className="latin">
          Benedíctus Dóminus * qui non dedit nos in captiónem déntibus eórum.
        </Text>
        <Text className="vernacular">
          Bendito o Senhor, * que nos não deu por presa aos seus dentes.
        </Text>
        <Text className="latin">
          Ánima nostra sicut passer erépta est * de láqueo venántium:
        </Text>
        <Text className="vernacular">
          A nossa alma escapou como o pássaro * do laço dos caçadores:
        </Text>
        <Text className="latin">
          Láqueus contrítus est, * et nos liberáti sumus.
        </Text>
        <Text className="vernacular">
          O laço foi quebrado, * e nós ficámos livres.
        </Text>
        <Text className="latin">
          Adjutórium nostrum in nómine Dómini, * qui fecit cælum et terram.
        </Text>
        <Text className="vernacular">
          Nosso auxílio está no nome do Senhor, * que fez o céu e a terra.
        </Text>
      </Language>
    </PageWrapper>
  );
}
