import { Link } from "expo-router";
import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import Salmo94 from "./../devocionario/salterio/094";
import { H1, H2 } from "~/components/Headings";


export default function PageOficiodefuntos() {
  return (
    <PageWrapper>
      <H1 text="Ofício dos Defuntos" />

      <Text className="aside">
        Rezar{" "}
        <Link className="link" href="/devocionario/oracoes/painosso">
          Pai-nosso
        </Link>{" "}
        ;
        <Link className="link" href="/devocionario/oracoes/avemaria">
          Ave-Maria
        </Link>{" "}
        ;
        <Link className="link" href="/devocionario/oracoes/simboloapostolos">
          Creio em Deus.
        </Link>
      </Text>

      <H2 text="Invitatório" />

      <Language>
        <Text className="latin">Regem, cui ómnia vivunt, Veníte adorémus.</Text>
        <Text className="vernacular">
          Vinde, adoremos o Rei para quem todas as criatura vivem.
        </Text>
        <Text className="latin">Regem, cui ómnia vivunt, Veníte adorémus.</Text>
        <Text className="vernacular">
          Vinde, adoremos o Rei para quem todas as criatura vivem.
        </Text>
      </Language>

      <H2 text="Salmo 94" />

      <Salmo94 />

      <Language>
        <Text className="latin">
          Veníte, exsultémus Dómino: * jubilémus Deo salutári nostro:
        </Text>
        <Text className="vernacular">
          Vinde, exultemos no Senhor: * cantemos alegres a de Deus nosso
          salvador:
        </Text>
        <Text className="latin">
          Præoccupémus fáciem ejus in confessióne: * et in psalmis jubilémus ei.
        </Text>
        <Text className="vernacular">
          Apresentemo-nos diante d’Ele em acção de graças: * e celebremo-l’O com
          salmos.
        </Text>
      </Language>

      <Language>
        <Text className="latin">Regem, cui ómnia vivunt, Veníte adorémus.</Text>
        <Text className="vernacular">
          Vinde, adoremos o Rei para quem todas as criatura vivem.
        </Text>
      </Language>
    </PageWrapper>
  );
}
