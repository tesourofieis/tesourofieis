import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0520() {
  return (
    <PageWrapper>
      <H1 text="S. Bernardino de Sena, Conf., a 20 de Maio" />

      <Text className="comment">
        Comemoração S. Bernardino de Sena, Confessor. Nesta época do ano em que
        Jesus, pelo seu triunfo, realizou o nome de Salvador, o Ciclo faz
        celebrar a festa de São Bernardino, abrasado «de ardente amor por este
        divino nome» (Oração). Descendente de nobre familia de Sena, Bernardino
        renunciou a todos os seus bens, guardando intacta a castidade, apesar
        dos perigos provenientes da rara beleza de seus traços. A Igreja
        aplica-lhe estas palavras dos nossos Santos Livros: «podia violar o
        Mandamento de Deus e não o violou» (Epístola). «Não colocando sua
        esperança no dinheiro, nem nos tesouros» (idem), deixou tudo, a fim de
        seguir o Cristo (Evangelho) e entrou para a Ordem de S. Francisco, sendo
        uma das suas glórias. Percorrendo as cidades e aldeias, a todos pregava
        o nome de Jesus (Oração), operando inúmeros milagres. S. Pedro Celestino
        lhe apareceu, avisando-o da sua próxima morte, ocorrida na vigília da
        Ascensão, do ano 1444. Peçamos a Deus, pela intercessão e méritos de S.
        Bernardino, que nos conceda grande amor pelo santo Nome de Jesus e
        acenda em nossos corações a chama da sua divina Caridade (Oração).
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Dómine Jesu, qui beáto Bernardíno Confessóri tuo exímium sancti
          nóminis tui amórem tribuísti: ejus, quǽsumus, méritis et
          intercessióne, spíritum nobis tuæ dilectiónis benígnus infúnde: Qui
          vivis...
        </Text>
        <Text className="vernacular">
          Senhor Jesus Cristo, que concedestes ao B. Bernardino, vosso
          Confessor, um ardente amor ao vosso Santo nome, dignai-Vos infundir em
          nossas almas pelos seus méritos e intercessão o espírito da vossa
          caridade. Ó Vós, que viveis e...
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/16abades#evangelho"
        title="Abades - Missa Os justi"
      />
    </PageWrapper>
  );
}
