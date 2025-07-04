import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page31Inimigos() {
  return (
    <PageWrapper>
      <H1 text="31.ª Pelos inimigos" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, pacis caritatísque amátor et custos: da ómnibus inimícis nostris
          pacem caritatémque veram; et cunctórum eis remissiónem tríbue
          peccatórum, nosque ab eórum insídiis poténter éripe. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que amais e conservais a paz, concedei aos nossos inimigos a
          paz e a verdadeira caridade, bem como a remissão dos seus pecados; e a
          nós, Senhor, livrai-nos com vosso poder das suas insídias. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Oblátis, quǽsumus, Dómine, placáre munéribus: et nos ab inimícis
          nostris cleménter éripe, eisque indulgéntiam tríbue delictórum. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Vos suplicamos, Senhor, deixai-Vos aplacar com estes dons, que Vos
          oferecemos; e, pela vossa clemência, livrai-nos das mãos dos nossos
          inimigos, concedendo-lhes ao mesmo tempo o perdão dos pecados. Por
          nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Hæc nos commúnio, Dómine, éruat a delíctis: et ab inimicórum deféndat
          insídiis. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que esta comunhão, Senhor, nos livre de todos os delitos e nos defenda
          das insídias dos nossos inimigos. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
