import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageSalveregina() {
  return (
    <PageWrapper>
      <H1 text="Salve, Regina" />

      <Language>
        <Text className="latin">
          Salve, Regína, mater misericórdiæ; vita, dulcédo et spes nóstra,
          salve. Ad te clamámus éxsules fílii Hevæ. Ad te suspirámus geméntes et
          flentes In hac lacrimárum valle. Eia ergo, advocáta nostra, illos tuos
          misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum
          ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o
          dulcis Virgo María.
        </Text>
        <Text className="vernacular">
          Salvé, Rainha, mãe de misericórdia, vida, doçura, esperança nossa,
          salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos,
          gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa,
          esses vossos olhos misericordiosos a nós volvei. E, depois deste
          desterro, nos mostrai Jesus, bendito fruto do vosso ventre. Ó
          clemente, ó piedosa, ó doce Virgem Maria.
        </Text>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text>Ora pro nobis Sancta Dei
          Génitrix.
        </Text>
        <Text className="vernacular">
          <Text className="versicle"> ℣. </Text>Rogai por nós, Santa Mãe de
          Deus.
        </Text>
        <Text className="latin">
          <Text className="response"> ℟. </Text> Ut digni efficiámur
          promissiónibus Christi.
        </Text>
        <Text className="vernacular">
          <Text className="response"> ℟. </Text> Para que sejamos dignos das
          promessas de Cristo.
        </Text>
        <Text className="latin">
          <Text className="latin">Orémus.</Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">Oremos.</Text>
        </Text>
        <Text className="latin">
          Omnípotens sempitérne Deus, qui gloriósæ Vírginis Matris Maríæ corpus
          et ánimam, ut dignum Fílii tui habitáculum éffici mererétur, Spíritu
          Sancto cooperánte præparásti: da, ut cujus commemoratióne lætámur;
          ejus pia intercessióne, ab instántibus malis, et a morte perpétua
          liberémur. Per eúmdem Christum Dóminum nostrum.
        </Text>
        <Text className="vernacular">
          Deus eterno e todo-poderoso, que, pela cooperação do Espírito Santo,
          preparastes a alma e o corpo de Maria, gloriosa Virgem e Mãe, para ser
          um merecedor e digno habitáculo de vosso Filho; concedei que sejamos
          livres dos males presentes e da morte perpétua, pela pia intercessão
          daquela que comemoramos alegremente. Pelo mesmo Cristo, nosso Senhor.
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
