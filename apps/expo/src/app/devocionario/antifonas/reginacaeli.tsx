import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageReginacaeli() {
  return (
    <PageWrapper>
      <Text className="h1">Regína cæli</Text>

      <Language>
        <Text className="latin">
          Regína cæli, lætáre, allelúja; Quia quem meruísti portáre, allelúja,
          Resurréxit, sicut dixit, allelúja: Ora pro nobis Deum, allelúja.
        </Text>
        <Text className="vernacular">
          Rainha do Céu, alegrai-Vos, Aleluia! Porque Aquele que merecestes
          trazer em vosso ventre, Aleluia! Ressuscitou como disse, Aleluia!
          Rogai por nós a Deus, Aleluia!
        </Text>
        <Text className="latin">
          Gaude et laetare, Virgo Maria! Alleluia! Quia surrexit Dominus vere!
          Alleluia!
        </Text>
        <Text className="vernacular">
          Alegrai-Vos e exultai, ó Virgem Maria, Aleluia! Porque o Senhor
          ressuscitou verdadeiramente, Aleluia!
        </Text>
        <Text className="latin">
          <Text className="latin">Orémus.</Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">Oremos.</Text>
        </Text>
        <Text className="latin">
          Deus, qui per resurrectiónem Fílii tui Dómini nostri Jesu Christi
          mundum lætificáre dignátus es: præsta, quǽsumus; ut, per ejus
          Genitrícem Vírginem Mariam, perpétuæ capiámus gáudia vitæ. Per eumdem
          Christum, Dóminum nostrum.
        </Text>
        <Text className="vernacular">
          Ó Deus, que Vos dignastes alegrar o mundo com a Ressurreição do vosso
          Filho, Nosso Senhor Jesus Cristo, concedei-nos, Vos suplicamos, a
          graça de alcançarmos pela protecção da Virgem Maria, Sua Mãe, a glória
          da vida eterna. Pelo mesmo Cristo Nosso Senhor.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
