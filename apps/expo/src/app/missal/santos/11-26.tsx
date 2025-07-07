import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1126() {
  return (
    <PageWrapper>
      <H1 text="S. Silvestre, Abade, a 26 de Novembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/16abades">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Clementíssime Deus, qui sanctum Silvéstrum Abbátem, sǽculi hujus
          vanitátem in apérto túmulo pie meditántem, ad erémum vocáre et
          præcláris vitæ méritis decoráre dignátus es: te súpplices exorámus;
          ut, ejus exémplo terréna despiciéntes, tui consórtio perfruámur
          ætérno. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó clementíssimo Deus, que Vos dignastes chamar à solidão o Santo Abade
          Silvestre quando meditava piedosamente em um túmulo aberto sobre a
          vaidade deste mundo, assim como o ornastes com os méritos de uma vida
          preclara, humildemente Vos suplicamos que, imitando o seu exemplo,
          desprezemos os bens terrenos, a fim de gozarmos eternamente a vossa
          companhia. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Quǽsumus, Dómine: ut, dum hæc múnera divínæ majestáti tuæ reverénter
          offérimus; pia mentis præparatióne et cordis puritáte, beáti Silvéstri
          Abbátis imitatóres effécti, Corpus et Sánguinem Fílii tui sancte
          percípere mereámur: Qui tecum vivit et regnat...
        </Text>
        <Text className="vernacular">
          Senhor, Vos suplicamos, permiti que, oferecendo reverentemente à vossa
          divina majestade estes dons, nos tornemos imitadores do B. Abade
          Silvestre pela piedosa disposição da alma e pela pureza de coração, a
          fim de que mereçamos receber santamente o Corpo e o Sangue de vosso
          Filho. O qual convosco vive e reina...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Divína dape reféctis tríbue, quǽsumus, Dómine: sancti Silvéstri
          Abbátis vestígiis ita inhærére; ut copiósam mercédem in regno glóriæ
          tuæ cum Sanctis habeámus. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Havendo comparticipado do divino banquete, concedei-nos, Senhor, Vos
          suplicamos, que sigamos de tal sorte os passos do Santo Abade
          Silvestre que tenhamos com vossos Santos copiosa recompensa no reino
          da vossa glória. Por nosso Senhor...
        </Text>
      </Language>

      <H2 text="Comemoração de S. Pedro Alexandrino" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/11-26-outro">
          missa seguinte
        </Link>{" "}
        , excepto:
      </Text>
    </PageWrapper>
  );
}
