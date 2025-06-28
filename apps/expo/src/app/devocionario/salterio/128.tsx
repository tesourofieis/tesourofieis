import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page128() {
  return (
    <PageWrapper>
      <Text className="h1">Salmo 128</Text>

      <Language>
        <Text className="latin">
          Sæpe expugnavérunt me a juventúte mea, * dicat nunc Israël.
        </Text>
        <Text className="vernacular">
          Amiúde me combateram desde a minha mocidade, * diga-o agora Israel.
        </Text>
        <Text className="latin">
          Sæpe expugnavérunt me a juventúte mea: * étenim non potuérunt mihi.
        </Text>
        <Text className="vernacular">
          Muitas vezes me combateram desde a minha mocidade: * todavia, não
          prevaleceram contra mim.
        </Text>
        <Text className="latin">
          Supra dorsum meum fabricavérunt peccatóres: * prolongavérunt
          iniquitátem suam.
        </Text>
        <Text className="vernacular">
          Sobre o meu dorso fabricaram os pecadores: * prolongaram a sua
          iniquidade.
        </Text>
        <Text className="latin">
          Dóminus justus concídit cervíces peccatórum: * confundántur et
          convertántur retrórsum omnes, qui odérunt Sion.
        </Text>
        <Text className="vernacular">
          O Senhor que é justo cortou os pescoços dos pecadores: * fiquem
          confundidos e retrocedam todos os que odeiam Sião.
        </Text>
        <Text className="latin">
          Fiant sicut fænum tectórum: * quod priúsquam evellátur, exáruit:
        </Text>
        <Text className="vernacular">
          Sejam como a erva dos telhados: * a qual seca antes de ser arrancada:
        </Text>
        <Text className="latin">
          De quo non implévit manum suam qui metit, * et sinum suum qui
          manípulos cólligit.
        </Text>
        <Text className="vernacular">
          Da qual o ceifeiro não encheu a mão, * nem seus braços o que apanha
          seus feixes.
        </Text>
        <Text className="latin">
          Et non dixérunt qui præteríbant: benedíctio Dómini super vos: *
          benedíximus vobis in nómine Dómini.
        </Text>
        <Text className="vernacular">
          Não disseram os que passavam: a bênção do Senhor seja sobre vós: * nós
          vos abençoamos no nome do Senhor.
        </Text>
      </Language>
    </PageWrapper>
  );
}
