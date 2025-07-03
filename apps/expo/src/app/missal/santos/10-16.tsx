import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1016() {
  return (
    <PageWrapper>
      <H1 text="Santa Hedviges, Viúva, a 16 de Outubro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátam Hedwígem a sǽculi pompa ad húmilem tuæ Crucis
          sequélam toto corde transíre docuísti: concéde; ut ejus méritis et
          exémplo discámus peritúras mundi calcáre delícias, et in ampléxu tuæ
          Crucis ómnia nobis adversántia superáre: Qui vivis...
        </Text>
        <Text className="vernacular">
          Ó Deus, que inspirastes a B. Hedviges a deixar as pompas do mundo para
          abraçar com fervor a humildade da vossa Cruz, concedei-nos pelos seus
          méritos e exemplos que aprendamos a esmagar as delícias caducas deste
          mundo e, abraçando a vossa Cruz, a vencer todas as adversidades. Ó
          Vós, que viveis e reinais...
        </Text>
      </Language>
    </PageWrapper>
  );
}
