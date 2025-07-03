import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageRorate() {
  return (
    <PageWrapper>
      <H1 text="Rorate Caeli" />

      <Language>
        <Text className="latin">
          Roráte caéli désuper, Et núbes plúant jústum, Aperiátur térra, et
          gérminet Salvatórem.
        </Text>
        <Text className="vernacular">
          Derramai, ó céus, o vosso orvalho do alto, e as nuvens chovam o Justo,
          Que a terra seja aberta e traga o Salvador.
        </Text>
        <Text className="latin">
          Caéli enarrant gloriam Dei: Et opera manuum ejus annuntiat
          firmamentum.
        </Text>
        <Text className="vernacular">
          Os céus declaram a Glória de Deus: E o firmamento a obra de Suas mãos.
        </Text>
        <Text className="latin">
          Gloria Patri, et Filio, et Spiritui Sancto, Sicut erat in principio,
          et nunc, et semper, Et in sæcula sæculorum. Amen.
        </Text>
        <Text className="vernacular">
          Glória ao Pai, ao Filho e ao Espírito Santo, Assim como era no
          princípio agora E sempre, pelos séculos dos séculos. Amém.
        </Text>
        <Text className="latin">
          Roráte caéli désuper, Et núbes plúant jústum: Aperiátur térra, et
          gérminet Salvatórem.
        </Text>
        <Text className="vernacular">
          Derramai, ó céus, o vosso orvalho do alto, e as nuvens chovam o Justo,
          Que a terra seja aberta e traga o Salvador.
        </Text>
      </Language>
    </PageWrapper>
  );
}
