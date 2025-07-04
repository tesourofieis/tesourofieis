import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1115() {
  return (
    <PageWrapper>
      <H1 text="S. Alberto Magno, B. C. e Doutor, a 15 de Novembro" />

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
          Deus, qui beátum Albértum Pontíficem tuum atque Doctórem in humána
          sapiéntia divínæ fídei subjiciénda magnum effecísti: da nobis,
          quǽsumus; ita ejus magistérii inhærére vestígiis, ut luce perfécta
          fruámur in cœlis. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que ao B. Alberto, vosso Pontífice e Doutor, tornastes grande
          na arte de sujeitar a sabedoria humana à fé divina, concedei-nos, Vos
          suplicamos, que de tal modo sigamos as lições do seu magistério que
          nos céus gozemos a luz perfeita. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Sacrifíciis præséntibus, Dómine, quǽsumus, inténde placátus: ut quod
          Passiónis Fílii tui Dómini nostri mystério gérimus, beáti Alberti
          intercessióne et exémplo, pio consequámur afféctu. Per eumdem
          Dóminum...
        </Text>
        <Text className="vernacular">
          Pelos presentes sacrifícios, Senhor, Vos suplicamos, olhai aplacado
          para nós, a fim de que com o exemplo e intercessão do B. Alberto
          consigamos alcançar piedosos afectos pelo mystério, que celebramos, da
          paixão do vosso Filho e nosso Senhor. Pelo mesmo nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Per hæc sancta quæ súmpsimus, ab hóstium nos, Dómine, impugnatióne
          defénde: et intercedénte beáto Albérto Confessóre tuo atque Pontífice,
          perpétua pace respiráre concéde; Per Dóminum...
        </Text>
        <Text className="vernacular">
          Por estes sacrossantos sacramentos, que recebemos, Senhor,
          defendei-nos dos ataques dos nossos inimigos, e, intercedendo o B.
          Alberto, vosso Confessor e Pontífice, permiti que gozemos a paz
          perpétua. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
