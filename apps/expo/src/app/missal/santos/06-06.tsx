import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0606() {
  return (
    <PageWrapper>
      <Text className="h1">S. Norberto, B e Conf., a 6 de Junho</Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Deus, qui beátum Norbértum Confessórem tuum atque Pontíficem verbi tui
          præcónem exímium effecísti, et per eum Ecclésiam tuam nova prole
          fœcundásti: præsta, quǽsumus; ut, ejúsdem suffragántibus méritis, quod
          ore simul et ópere dócuit, te adjuvánte, exercére valeámus. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que dispusestes que o B. Norberto, vosso Confessor e
          Pontífice, fosse exímio pregador da vossa palavra, e que por ele
          destes à vossa Igreja uma nova família, concedei-nos, Vos imploramos,
          que, auxiliados com seus méritos, possamos com vossa assistência pôr
          em prática tudo quanto ensinou com suas palavras e acções. Por nosso
          Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
