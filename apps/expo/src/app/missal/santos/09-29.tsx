import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0929() {
  return (
    <PageWrapper>
      <H1 text="Dedicação de S. Miguel Arcanjo, a 29 de Setembro" />

      <Text className="comment">
        O dia 29 de Setembro era outrora consagrado a todos os Anjos (Intr.,
        Or., Grad., Comm.) e o Papa Bonifácio II, cerca do anno 530 escolheu
        essa data para consagrar a S. Miguel uma igreja no grande circo, em
        Roma. A Missa composta para a circunstância é a do XVIII Domingo depois
        de Pentecostes, e refere-se a uma consagração de igreja. A de hoje
        pertence a uma época mais recente. O nome de Miguel significa em
        hebraico: Quem é como Deus, e lembra o combate travado no céu entre o
        Arcanjo de Deus que mereceu ser colocado á frente da milicia celeste e o
        demónio. Caídos em poder de Satanás pelo pecado, a S. Miguel compete
        continuar a luta para libertar-nos (All. e Oração depois da Missa) e
        dele dependem os nossos anjos da guarda. S. Miguel venceu o orgulho de
        Satanás e nos obtém a humildade; ele também preside ao culto de adoração
        prestado ao Altissimo, pois oferece a Deus as orações dos Santos,
        simbolizadas pelo incenso cuja fumaça sobe aos céus (Off., Benção do
        incenso). Quando o cristão deixa este mundo, pede-se que o
        porta-estandarte, S. Miguel o introduza no céu e, por isso, é muitas
        vezes representado com a balança da justiça divina onde são pesadas as
        almas. Seu nome é citado no Confiteor, em seguida ao de Maria, a Rainha
        dos Anjos. Anjo protector da Sinagoga, S. Miguel também o é da Igreja,
        que lhe sucedeu, e a liturgia atribui-lhe a revelação do futuro feito a
        S João no Apocalypse (Ep.).
      </Text>

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
