import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


export default function PageTantumergo() {
  return (
    <PageWrapper>
      <H1 text="Tantum ergo" />

      <Language>
        <Text className="latin">
          Tantum ergo Sacramentum Veneremur cernui: Et antiquum documentum Novo
          cedat ritui: Præstet fides supplementum Sensuum defectui. Genitori,
          Genitoque Laus et iubilatio, Salus, honor, virtus quoque Sit et
          benedictio: Procedenti ab utroque Compar sit laudatio. Amen.
        </Text>
        <Text className="vernacular">
          Adoremos, pois, prostrados tão augusto Sacramento: cedam os ritos
          antigos o lugar ao novo Mystério e que a fé supra a fraqueza dos
          nossos sentidos. Glória, honra, louvor, poder, acção de graças e
          bênçãos sejam dadas ao Pai, e ao Filho: e dêem-se iguais louvores
          Àquele que procede de um e do outro. Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
