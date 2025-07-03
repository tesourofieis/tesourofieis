import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page150() {
  return (
    <PageWrapper>
      <Text className="h1">Salmo 150</Text>

      <Language>
        <Text className="latin">
          Laudáte Dóminum in sanctis ejus: * laudáte eum in firmaménto virtútis
          ejus.
        </Text>
        <Text className="vernacular">
          Louvai o Senhor no seu santuário: * louvai-O no seu augusto
          firmamento.
        </Text>
        <Text className="latin">
          Laudáte eum in virtútibus ejus: * laudáte eum secúndum multitúdinem
          magnitúdinis ejus.
        </Text>
        <Text className="vernacular">
          Louvai-O nas suas virtudes: * louvai-O segundo a multitude da sua
          grandeza.
        </Text>
        <Text className="latin">
          Laudáte eum in sono tubæ: * laudáte eum in psaltério, et cíthara.
        </Text>
        <Text className="vernacular">
          Louvai-O ao som da trombeta: * louvai-O com o saltério e a cítara.
        </Text>
        <Text className="latin">
          Laudáte eum in týmpano, et choro: * laudáte eum in chordis, et órgano.
        </Text>
        <Text className="vernacular">
          Louvai-O com timbales e em coro: * louvai-O com cordas e órgão.
        </Text>
        <Text className="latin">
          Laudáte eum in cýmbalis benesonántibus: laudáte eum in cýmbalis
          jubilatiónis: * omnis spíritus laudet Dóminum.
        </Text>
        <Text className="vernacular">
          Louvai-O com címbalos melodiosos: louvai-O com címbalos de júbilo: *
          todo o espírito louve o Senhor.
        </Text>
      </Language>
    </PageWrapper>
  );
}
