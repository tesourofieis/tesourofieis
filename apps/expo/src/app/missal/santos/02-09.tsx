import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0209() {
  return (
    <PageWrapper>
      <H1 text="S. Cirilo de Alexandria, B. Conf. e Dr., a 9 de Fevereiro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátum Cyríllum Confessórem tuum atque Pontíficem divínæ
          maternitátis beatíssimæ Vírginis Maríæ assertórem invíctum effecísti:
          concéde, ipso intercedénte; ut, qui vere eam Genetrícem Dei crédimus,
          matérna ejúsdem protectióne salvémur. Per eúndem Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que tornastes o B. Cirilo, vosso Confessor e Pontífice,
          defensor invencível da divina maternidade da S. S. Virgem Maria, a
          nós, que acreditamos que ela é verdadeiramente Mãe de Deus, concedei
          por sua intercessão que sejamos salvos pela sua maternal protecção.
          Pelo...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Múnera nostra, omnípotens Deus, benígnus réspice: et, intercedénte
          beáto Cyríllo, præsta; ut unigénitum tuum Jesum Christum, Dóminum
          nostrum in tua tecum glória coætérnum, in córdibus nostris digne
          suscípere mereámur: Qui tecum...
        </Text>
        <Text className="vernacular">
          Deus omnipotente, olhai benigno para os nossos dons; e por intercessão
          do B. Cirilo, concedei-nos que possamos receber dignamente nos nossos
          corações a N. S. Jesus Cristo, vosso Filho Unigénito, que é coeterno
          convosco na glória. Ele, que, sendo Deus...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Divínis, Dómine, refécti mystériis, te súpplices deprecámur: ut,
          exémplis et méritis beáti Cyrílli Pontíficis adjúti, sanctíssimæ
          Genetríci Unigéniti tui digne famulári valeámus: Qui tecum vivit...
        </Text>
        <Text className="vernacular">
          Fortalecidos, Senhor, com os divinos mystérios, Vos imploramos
          instantemente que, auxiliados com os exemplos e méritos do B.
          Pontífice Cirilo, possamos servir dignamente a S. S. Mãe do vosso
          Filho Unigénito. Ele, que...
        </Text>
      </Language>
    </PageWrapper>
  );
}
