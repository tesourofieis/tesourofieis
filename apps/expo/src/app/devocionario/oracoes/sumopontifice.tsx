import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageSumopontifice() {
  return (
    <PageWrapper>
      <Text className="h1">Pro Summo Pontifice</Text>

      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Orémus pro Pontífice nostro N.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Oremos pelo nosso Pontífice N.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Dóminus consérvet eum, et
          vivíficet eum, et beátum fáciat eum in terra, et non tradat eum in
          ánimam inimicórum ejus.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Que o Senhor o conserve e
          vivifique, que o faça santo na terra e o não entregue à vontade dos
          seus inimigos.
        </Text>
        <Text className="latin">Pater Noster... Ave Maria...</Text>
        <Text className="vernacular">Pai Nosso... Ave Maria...</Text>
        <Text className="latin">
          <Text className="latin">
            <Text className="versicle"> ℣. </Text>{" "}
          </Text>
          Deus, ómnium fidélium pastor et rector, fámulum tuum N., quem pastórem
          Ecclésiæ tuæ præésse voluísti, propítius réspice: da ei, quǽsumus,
          verbo et exémplo, quibus præest, profícere: ut ad vitam, una cum grege
          sibi crédito, pervéniat sempitérnam. Per Christum, Dóminum nostrum.
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">
            <Text className="versicle"> ℣. </Text>{" "}
          </Text>
          Ó Deus, pastor e guia de todos os fieis, olhai misericordiosamente
          sobre vosso Servo N. que escolheestes para pastor da vossa Igreja;
          concedei-lhe que, com sua palavra e exemplo, encaminhe o rebanho que
          lhe confiastes, e juntamente com ele, possa alcançar a vida eterna.
          Por Cristo Senhor nosso.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text>Amen.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text>Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
