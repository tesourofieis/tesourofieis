import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0228CoimbraLamegoLeiria() {
  return (
    <PageWrapper>
      <H1 text="Trasladação de S. Agostinho, Bispo, Confessor e Doutor, a 27 de Fevereiro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/08-28">
          Missa na festa
        </Link>{" "}
        , excepto:
      </Text>

      <H2 text="Oração" />

      <Language>
        <Text className="latin">
          Magníficet te, Dómine, sancti Confessóris tui atque Pontíficis
          Augustíni veneránda Tranlátio: qua illi honórem, et nobis opem,
          ineffábili providéntia contulísti. Per Dominum...
        </Text>
        <Text className="vernacular">
          Senhor, que a veneranda Trasladação de Santo Agostinho, Vosso
          Confessor e Pontífice, nos engrandeça, a qual, por Vossa inefável
          providência, deu a ele glória e a nós socorro. Por nosso Senhor...
        </Text>
      </Language>

      <H2 text="Secreta" />

      <Language>
        <Text className="latin">
          Omnípotens sempitérne Deus, múnera tuæ majestáti obláta, per
          intercessiónem beáti Augustíni Confessóris tui atque Pontíficis, ad
          perpétuam nobis fac proveníre salútem. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Deus omnipotente e sempiterno, fazei que as dádivas oferecidas à Vossa
          majestade por intercessão do B. Agostinho, Vosso Confessor e
          Pontífice, nos façam chegar à salvação eterna. Por nosso Senhor...
        </Text>
      </Language>

      <H2 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Sacraménta salútis nostræ suscipiéntes, concéde, quǽsumus, omnípotens
          Deus: ut beáti Augustíni Confessóris tui atque Pontíficis nos ubíque
          orátio ádjuvet; in cujus Translatióne hæc tuæ obtúlimus majestáti. Per
          Dóminum nostram...
        </Text>
        <Text className="vernacular">
          Depois de havermos recebido os sacramentos da nossa salvação,
          concedei-nos, omnipotente Deus, Vos imploramos, que em toda a parte
          nos socorra a oração do B. Agostinho, Vosso Confessor e Pontífice, em
          cuja Trasladação oferecemos estes dons à Vossa majestade. Por nosso
          Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
