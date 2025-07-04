import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0619() {
  return (
    <PageWrapper>
      <H1 text="S. Juliana de Falconéri, Virgem, a 19 de Junho" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátam Juliánam Vírginem tuam extrémo morbo laborántem,
          pretióso Fílii tui Córpore mirabíliter recreáre dignátus es: concéde,
          quǽsumus; ut, ejus intercedéntibus méritis, nos quoque eódem in mortis
          agóne refécti ac roboráti, ad cœléstem pátriam perducámur. Per eúndem
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que com o preciosíssimo Corpo de vosso Filho Vos dignastes
          sustentar miraculosamente a B. Juliana, vossa Virgem, quando ela
          sofreu a última doença, concedei-nos, pelos seus méritos e
          intercessão, Vos suplicamos, que também na nossa agonia mortal sejamos
          alimentados e fortificados com este mesmo Corpo e conduzidos à pátria
          celestial. Pelo mesmo nosso Senhor...
        </Text>
      </Language>

      <H3 text="Oração Comemoração S. S. Gervásio e Protásio" />

      <Language>
        <Text className="latin">
          Deus, qui nos ánnua sanctórum Martyrum tuórum Gervásii et Protásii
          sollemnitáte lætíficas: concéde propítius; ut, quorum gaudémus
          méritis, accendámur exémplis. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que nos alegrais com a solenidade anual dos vossos Santos
          Mártires Gervásio e Protásio, concedei-nos propício que sejamos
          inflamados pelos exemplos daqueles cujos méritos nos enchem de alegria
          celestial. Pelo nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta Comemoração S. S. Gervásio e Protásio" />

      <Language>
        <Text className="latin">
          Oblátis, quǽsumus, Dómine, placáre munéribus: et, intercedéntibus
          sanctis Martýribus tuis, a cunctis nos defénde perículis. Per Dóminum
          nostrum...
        </Text>
        <Text className="vernacular">
          Deixai-Vos aplacar com os dons que Vos oferecemos, Senhor, e por
          intercessão dos vossos Santos Mártires defendei-nos de todos os
          perigos. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio Comemoração S. S. Gervásio e Protásio" />

      <Language>
        <Text className="latin">
          Hæc nos commúnio, Dómine, purget a crímine: et, intercedéntibus
          sanctis Martýribus tuis Gervásio et Protásio, cœléstis remédii fáciat
          esse consórtes. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Que esta comunhão nos purifique dos nossos crimes, Senhor, e que por
          intercessão dos vossos Santos Mártires Gervásio e Protásio nos faça
          participantes do remédio celestial. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
