import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0920() {
  return (
    <PageWrapper>
      <H1 text="Vigilia de S. Mateus, Apóstolo e Evangelista, a 20 de Setembro" />

      <Text className="comment">
        Desejando honrar a alta dignidade dos Apóstolos (Secr.), a Igreja nos
        prepara à sua festa por uma vigília. Faz hoje memória de S. Mateus, por
        Orações especiais e pela leitura, na Missa, do Evangelho onde São Lucas
        descreve a vocação do Apóstolo. Galileu pelo nascimento, Mateus, antes
        de convertido, chamara-se Levi, e era publicano, profissão que consistia
        em receber impostos para os Romanos, sendo para os Judeus muito odiosa
        visto lembrar-lhes a sua dependência. Ordinariamente duro e avaro, o
        publicano era considerado pelos Fariseus como o tipo do pecador. A
        Igreja faz sobressair o papel de Jesus, como médico das almas por Ele
        chamadas à penitência (Ev.).
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link href="/missal/comum/1vigiliaapostolos">
          Missa da Vigília dos Apóstolos - Missa Ego autem,
        </Link>
        excepto:
      </Text>

      <H3 text="Evangelho" />

      <Text className="em">Lc. 5, 27-32</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Lucam.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Lucas.
        </Text>
        <Text className="latin">
          In illo témpore: Vidit Jesus publicánum nómine Levi, sedéntemad
          telónium, et ait illi: Séquere me. Et relíctis ómnibus, surgens
          secútus est eum. Et fecit ei convívium magnum Levi in domo sua: et
          erat turba multa publicanórum, et aliórum, qui cum illis erant
          discumbéntes. Et murmurábant Pharisæ et Scribæ eórum, dicéntes ad
          discípulos ejus: Quare cum publicánis et peccatóribus manducátis et
          bíbitis? Et respóndens Jesus, dixit ad illos: Non egent qui sani sunt
          médico, sed qui male habent. Non veni vocáre justus sed peccatóres ad
          pæniténtiam.
        </Text>
        <Text className="vernacular">
          Naquele tempo, Jesus viu um publicano, chamado Levi, assentado ao
          telónio, e disse-lhe: «Segue-me!». Ele, deixando tudo, levantou-se e
          seguiu-O. Ora Levi ofereceu-Lhe um grande banquete em sua casa, onde
          concorreram também muitos publicanos e outros que estavam assentados à
          mesa com eles. Porém, os fariseus e os escribas murmuravam, dizendo
          aos discípulos de Jesus: «Porque comeis e bebeis com os publicanos e
          com os pecadores?». Jesus, respondendo, disse-lhes: «Não são os que
          estão sãos que precisam de médico, mas os que têm doença. Não vim
          chamar à penitência os justos, mas os pecadores».
        </Text>
      </Language>
    </PageWrapper>
  );
}
