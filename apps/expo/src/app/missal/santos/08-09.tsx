import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0809() {
  return (
    <PageWrapper>
      <H1 text="S. João Maria Vianney, a 8 de Agosto" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Omnípotens et miséricors Deus, qui sanctum Joánnem Maríam pastoráli
          stúdio et jugi oratiónis ac pœniténtiæ ardóre mirábilem effecísti: da,
          quǽsumus; ut, ejus exémplo et intercessióne, ánimas fratrum lucrári
          Christo, et cum eis ætérnam glóriam cónsequi valeámus. Per eúndem
          Dóminum...
        </Text>
        <Text className="vernacular">
          Omnipotente e misericordioso Deus, que, pelo seu zelo pastoral e pelo
          seu ardor na oração e na penitência, tornastes admirável o B. João
          Maria, concedei-nos, Vos suplicamos, que, seguindo o seu exemplo e
          pela sua intercessão, possamos conquistar para Cristo as almas dos
          nossos irmãos e com eles alcançar a glória eterna. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
