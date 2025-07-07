import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page069() {
  return (
    <PageWrapper>
      <H1 text="Salmo 69" />

      <Language>
        <Text className="latin">
          Deus, in adjutórium meum inténde: * Dómine, ad adjuvándum me festína.
        </Text>
        <Text className="vernacular">
          Ó Deus, vinde em meu auxílio: * ó Senhor, apressai-Vos em socorrer-me.
        </Text>
        <Text className="latin">
          Confundántur et revereántur, * qui quǽrunt ánimam meam.
        </Text>
        <Text className="vernacular">
          Sejam confundidos e envergonhados, * os que a vida me procuram tirar.
        </Text>
        <Text className="latin">
          Avertántur retrórsum, et erubéscant, * qui volunt mihi mala.
        </Text>
        <Text className="vernacular">
          Deixai que recuem e sejam envergonhados, * os que mal me desejam.
        </Text>
        <Text className="latin">
          Avertántur statim erubescéntes, * qui dicunt mihi: euge, euge.
        </Text>
        <Text className="vernacular">
          Deixai que sejam imediatamente envergonhados, * os que me dizem: bem,
          bem.
        </Text>
        <Text className="latin">
          Exsúltent et læténtur in Te omnes qui quǽrunt Te, * et dicant semper:
          magnificétur Dóminus: qui díligunt salutáre tuum.
        </Text>
        <Text className="vernacular">
          Regozijem-se e alegrem-se em Vós todos os que Vos buscam, * e digam
          sempre os que amam a vossa salvação: glorificado seja o Senhor.
        </Text>
        <Text className="latin">
          Ego vero egénus, et pauper sum: * Deus, ádjuva me.
        </Text>
        <Text className="vernacular">
          Eu, contudo, sou necessitado e pobre: * ó Deus, ajudai-me.
        </Text>
        <Text className="latin">
          Adjútor meus, et liberátor meus es Tu: * Dómine, ne moréris.
        </Text>
        <Text className="vernacular">
          Vós sois o meu auxiliador e o meu libertador: * ó Senhor, Vos não
          demoreis.
        </Text>
      </Language>
    </PageWrapper>
  );
}
