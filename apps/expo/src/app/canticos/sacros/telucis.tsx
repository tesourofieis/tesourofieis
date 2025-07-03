import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageTelucis() {
  return (
    <PageWrapper>
      <H1 text="Te lucis" />

      <Language>
        <Text className="latin">
          Te lucis ante términum, Rerum Creátor, póscimus, Ut pro tua cleméntia
          Sis præsul et custódia.
        </Text>
        <Text className="vernacular">
          Antes que a luz desapareça, Vos suplicamos, ó Criador de todas as
          cousas, que pela vossa clemência nos protegeis e guardais.
        </Text>
        <Text className="latin">
          Procul recedant somnia et noctium phantasmata; hostemque nostrum
          comprime, ne polluantur corpora.
        </Text>
        <Text className="vernacular">
          Para bem longe de nós os sonhos e os fantasmas da noite. Reprimi o
          nosso inimigo, para que nossos corpos não sejam manchados.
        </Text>
        <Text className="latin">
          Præsta, Pater piissime, Patrique compar Unice, cum Spiritu Paraclito
          regnans per omne sæculum. Amen.
        </Text>
        <Text className="vernacular">
          Concedei-nos esta graça, ó Pai misericordiosíssimo, e Vós, ó Filho
          único, igual ao Pai, que reinais com o Espírito Paráclito em todos os
          séculos. Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
