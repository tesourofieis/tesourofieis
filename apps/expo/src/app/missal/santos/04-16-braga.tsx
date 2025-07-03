import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0416Braga() {
  return (
    <PageWrapper>
      <H1 text="S. Frutuoso, B., a 16 de Abril" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="text-base">
        Ó Deus, que nos fizestes chegar com júbilo até à festa deste dia, em que
        veneramos o B. Frutuoso, vosso Confessor e Pontífice, concedei-nos, Vos
        rogamos, que, assim como o acompanhamos na terra, sendo nosso Pastor,
        assim também pelas suas preces mereçamos alcançar indulgência nos céus.
        Por nosso Senhor...
      </Text>
      <H3 text="Epístola" />
      <Text className="text-base">
        Lição do Livro da Sabedoria. O justo aplicará o seu coração e vigiará
        desde o romper do dia para se unir ao Senhor, que o criou, e oferecer as
        suas preces ao Altíssimo. Abrirá a sua boca para orar e implorar o
        perdão dos seus pecados, pois, se o soberano Senhor quiser, enchê-lo-á
        com o espírito da inteligência. Então ele espalhará, como chuva, as
        palavras da sua sabedoria e abençoará o Senhor na sua oração. O Senhor
        inspirará os seus conselhos e instruções, e ele penetrará nos mystérios
        divinos. Publicará a doutrina que tive: aprendido, e a sua glória será
        manter-se na lei da aliança com o Senhor. Sua sabedoria receberá louvor
        de muitos e não cairá no esquecimento. Sua memória se não apagará; o seu
        nome será honrado de geração em geração. As nações publicarão a sua
        sabedoria e a Igreja anunciará os seus louvores.
      </Text>
      <H3 text="Gradual" />
      <Text className="text-base">
        Aleluia, aleluia. O Anjo do Senhor desceu do céu, e, revolvendo a pedra
        do sepulcro, assentou-se sobre ela. Aleluia. Tu és sacerdote para sempre
        segundo a ordem de Melquisedeque. Aleluia.
      </Text>
      <H3 text="Evangelho" />
      <LinkCard
        href="/missal/comum/10martires#evangelho"
        title="Mártires - Missa Sancti tui"
      />
      <H3 text="Secreta" />
      <Text className="text-base">
        Permiti, ó Deus omnipotente e sempiterno, que os dons oferecidos à vossa
        majestade por intercessão do B. Frutuoso, vosso Confessor e pontífice,
        nos sirvam de perpétuo socorro. Por nosso Senhor...
      </Text>
      <H3 text="Postcomúnio" />
      <Text className="text-base">
        Ó Deus omnipotente, Vos suplicamos, dando-Vos graças pelos dons já
        recebidos, fazei que alcancemos dons ainda maiores por intercessão do B.
        Frutuoso, vosso Confessor e Pontífice. Por nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
