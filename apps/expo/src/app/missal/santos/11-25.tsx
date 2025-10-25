import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1125() {
  return (
    <PageWrapper>
      <H1 text="Santa Catarina, Virgem e Mártir, a 25 de Novembro" />

      <Text className="comment">
        A ilustre Virgem Catarina, diz o breviário romano, nasceu em Alexandria.
        Tendo juntado, desde a juventude, o estudo das artes liberais ao ardor
        da fé, elevou-se, em pouco tempo, à grande perfeição de doutrina e
        santidade, de modo que, aos dezoito annos de idade, excedia os mais
        eruditos sábios. Tendo repreendido o imperador Maximiano, porque
        atormentava os cristãos, este, cheio de admiração pela ciência de
        Catarina, reuniu, de toda a parte, os homens mais doutos, a fim de
        fazê-la passar, com plena convicção, da fé em Jesus ao culto dos ídolos.
        Aconteceu o contrário, pois, diversos deles se converteram ao
        cristianismo, pela força de seus raciocínios. Maximiano mandou açoitar
        Catarina com varas e chicotes guarnecidos de chumbo, e, em seguida,
        atá-la a rodas cercadas de gládios agudos. Mas rompeu-se a máquina e o
        tirano ordenou fosse decapitada a virgem. Morreu cerca do ano de 305.
        Acha-se numerada entre os 14 Santos auxiliares. O monte Sinai, para onde
        o corpo de Santa Catarina foi transportado pelos Anjos, é o mesmo lugar
        em que Deus deu a sua Lei a Moisés.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/17virgensmartires1">
          Missa Loquébar
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui dedísti legem Móysi in summitáte montis Sínai, et in eódem
          loco per sanctos Angelos tuos corpus beátæ Catharínæ Vírginis et
          Mártyris tuæ mirabíliter collocásti: præsta, quǽsumus; ut, ejus
          méritis et intercessióne, ad montem, qui Christus est, perveníre
          valeámus: Qui tecum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que destes a Lei a Moisés no cimo do monte Sinai e que nesse
          lugar colocastes miraculosamente pelos vossos Santos Anjos o corpo da
          B. Catarina, vossa Virgem e Mártir, concedei-nos, Vos rogamos, que
          pelos seus méritos e intercessão possamos chegar à montanha, que é
          Cristo: O qual convosco vive e reina...
        </Text>
      </Language>
    </PageWrapper>
  );
}
