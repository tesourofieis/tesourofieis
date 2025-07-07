import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0929() {
  return (
    <PageWrapper>
      <H1 text="Dedicação de S. Miguel Arcanjo, a 29 de Setembro" />

      <Text className="aside">
        Como na{" "}
        <Link href="/missal/santos/05-08">
          Missa da Festa da Aparição de Arcanjo Miguel,
        </Link>
        excepto:
      </Text>

      <H3 text="Gradual" />

      <Text className="em">Sl. 102, 20 & 1</Text>

      <Language>
        <Text className="latin">
          Benedícite Dóminum, omnes Angeli ejus: poténtes virtúte, qui fácitis
          verbum ejus.<Text className="versicle"> ℣. </Text>Benedic, ánima mea,
          Dóminum, et ómnia interióra mea, nomen sanctum ejus.
        </Text>
        <Text className="vernacular">
          Bendizei o Senhor, ó Anjos do Senhor, que sois poderosos e cheios de
          força, e cumpris as ordens do Senhor.
          <Text className="versicle"> ℣. </Text>Bendizei o Senhor, ó minha alma;
          que toda minha alma bendiga o nome do Senhor.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Sancte
          Míchaël Archángele, defénde nos in prǿlio: ut non pereámus in treméndo
          judício. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>S. Miguel
          Arcanjo, defendei-nos neste combate, para que não pereçamos no dia do
          tremendo juízo. Aleluia.
        </Text>
      </Language>
    </PageWrapper>
  );
}
