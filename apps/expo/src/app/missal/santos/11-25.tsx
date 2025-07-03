import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1125() {
  return (
    <PageWrapper>
      <H1 text="Santa Catarina, Virgem e Mártir, a 25 de Novembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/17virgensmartires1">
          Missa Loquébar
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui dedísti legem Móysi in summitáte montis Sínai, et in eódem
          loco per sanctos Angelos tuos corpus beátæ Catharínæ Vírginis et
          Mártyris tuæ mirabíliter collocásti: præsta, quǽsumus; ut, ejus
          méritis et intercessióne, ad montem, qui Christus est, perveníre
          valeámus: Qui tecum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que destes a Lei a Moisés no cimo do monte Sinai e que nesse
          lugar colocastes miraculosamente pelos vossos Santos Anjos o corpo da
          B. Catarina, vossa Virgem e Mártir, concedei-nos, Vos rogamos, que
          pelos seus méritos e intercessão possamos chegar à montanha, que é
          Cristo: O qual convosco vive e reina...
        </Text>
      </Language>
    </PageWrapper>
  );
}
