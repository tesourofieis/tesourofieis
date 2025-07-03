import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page30Amigos() {
  return (
    <PageWrapper>
      <H1 text="30.ª Pelos amigos dedicados" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui cantátis dona per grátiam Sancti Spíritus tuórum fidélium
          córdibus infudísti: da fámulis et famulábus tuis, pro quibus tuam
          deprecámur cleméntiam, salútem mentis et córporis; ut te tota virtúte
          díligant et, quæ tibi plácita sunt, tota dilectióne perfíciant. Per
          Dóminum... in unitáte ejúsdem Spíritus Sancti.
        </Text>
        <Text className="vernacular">
          Ó Deus, que pela graça do Espírito Santo infundistes nos corações dos
          vossos fiéis os dons da caridade, dignai-Vos conceder a salvação da
          alma e do corpo aos vossos servos e servas, para quem invocamos a
          vossa clemência, a fim de que eles Vos amem com todas as potências de
          sua alma e pratiquem com todo o amor o que Vos é agradável. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Miserére, quǽsumus, Dómine, fámulis et famulábus tuis, pro quibus hoc
          sacrifícium laudis tuæ offérimus majestáti: ut, per hæc sancta,
          supérnæ benedictiónis grátiam obtíneant, et glóriam ætérnæ
          beatitúdinis acquírant. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos pedimos, tende misericórdia dos vossos servos e servas,
          por quem oferecemos este sacrifício de louvor em honra da vossa
          majestade, a fim de que por estes mystérios sacratíssimos alcancem a
          graça de uma especial bênção e adquiram a glória da bem-aventurança
          eterna. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Divína libántes mystéria, quǽsumus, Dómine: ut hæc salutária
          sacraménta illis profíciant ad prosperitátem et pacem; pro quorum
          quarúmque dilectióne hæc tuæ obtúlimus majestáti. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Havendo nós comparticipado dos divinos mystérios, Vos pedimos, Senhor,
          que Vos digneis aplicar a virtude destes mystérios de salvação em
          favor da prosperidade e da paz daqueles e daquelas por amor dos quais
          já os oferecemos à vossa majestade. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
