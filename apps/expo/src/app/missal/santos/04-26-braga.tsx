import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0426Braga() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro de Rates, a 26 de Abril" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="text-base">
        Ó Deus, que consagrastes este dia com o martírio do B. Pedro, vosso
        Mártir e Pontífice, concedei à vossa Igreja Bracarense a graça de seguir
        em todas as coisas os gloriosos vestígios daquele por cujo ministério
        ela recebeu as primícias da fé. Por nosso Senhor...
      </Text>
      <H3 text="Evangelho" />
      <Text className="text-base">
        Continuação do santo Evangelho segundo S. João. Naquele tempo, disse
        Jesus aos fariseus: «Eu sou o bom Pastor. O bom Pastor dá a vida pelas
        ovelhas. Porém, o mercenário, que não é pastor e a quem as ovelhas não
        pertencem, vê vir o lobo, abandona as ovelhas e foge. E, então, o lobo
        arrebata as ovelhas e dispersa-as. O mercenário procede assim porque é
        mercenário e porque não tem cuidado com as ovelhas. Eu sou o bom Pastor:
        eu conheço as minhas ovelhas, e as minhas ovelhas conhecem-me; assim
        como meu Pai me conhece e eu conheço meu Pai. Eu dou a minha vida pelas
        minhas ovelhas. Tenho ainda outras ovelhas que não pertencem a este
        aprisco; mas é preciso que eu as atraia e ouçam a minha voz, para que
        não haja senão um só aprisco e um só Pastor».
      </Text>
      <H3 text="Secreta" />
      <Text className="text-base">
        Santificai, Senhor, os dons que Vos oferecemos, e pela intercessão do B.
        Pedro, vosso Mártir e Pontífice, e em virtude desses dons, purificai-nos
        de todas as manchas dos nossos pecados. Por nosso Senhor...
      </Text>
      <H3 text="Postcomúnio" />
      <Text className="text-base">
        Que esta solenidade, que celebramos com estes celestiais mystérios em
        honra do B. Pedro, vosso Mártir e Pontífice, ó Deus omnipotente, nos
        alcance o perdão da vossa misericórdia. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
