import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0518() {
  return (
    <PageWrapper>
      <H1 text="S. Venâncio, Mártir, a 18 de Maio" />

      <Text className="comment">
        A Igreja nesta parte do Ciclo de Páscoa, preocupada em glorificar a Deus
        pela vitória de seu Filho, «consagra o dia de hoje ao triunfo do
        bem-aventurado Mártir Venâncio»(Oração). «Permanecendo em Jesus e Jesus
        nele, produziu abundantes frutos»(Evangelho), e foi perseguido, a fim de
        produzir ainda mais(Idem). Nascido em Camerino, na Umbria, foi
        conduzido, aos 15 anos à presença de Antíoco, governador da cidade, no
        império de Décio. Fizeram-no sofrer cruelmente, porém, os Anjos vieram
        assisti-lo. «Sua constância perante os carrascos os comoveu(Epístola)
        muitos se converteram. Foi decapitado cerca do ano 250. Seu corpo
        descansa em Camerino, na Igreja que lhe foi consagrada. «Honremos os
        méritos de São Venâncio e imitemos a constância de sua fé»(Oração).
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui hunc diem beáfi Venántii Martyris tui triúmpho consecrásti:
          exáudi preces pópuli tui et præsta: ut, qui ejus mérita venerámur,
          fídei constántiam imitémur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que consagrastes este dia com o triunfo do B. Venâncio, vosso
          Mártir, ouvi as preces do vosso povo, e permiti que, honrando os seus
          méritos, imitemos também a constância da sua fé. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Hanc oblatiónem, omnípotens Deus, beáti Venántii mérita tibi reddant
          accéptam: ut, ipsíus subsidiis adjuti, glóriæ ejus consortes
          efficiámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que esta oferta, ó Deus omnipotente, Vos seja agradável pelos méritos
          do B. Venâncio, a fim de que, assistidos com seu auxílio, nos tornemos
          participantes da sua glória. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Súmpsimus, Dómine, ætérnæ vitæ sacraménta, te humiliter deprecántes:
          ut, beáto Venántio Mártyre tuo pro nobis deprecánte, véniam nobis
          concílient et grátiam. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, havendo recebido os sacramentos da vida eterna, humildemente
          Vos suplicamos que as preces do B. Venâncio, vosso Mártir, nos
          alcancem o perdão e a graça. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
