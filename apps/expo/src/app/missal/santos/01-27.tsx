import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0127() {
  return (
    <PageWrapper>
      <H1 text="S. João Crisóstomo, B. C. e Doutor, a 27 de Janeiro" />

      <Text className="comment">
        S. João Crisóstomo, nascido em Antioquia pelo ano de 347, era homem de
        grande génio, e sua poderosa eloquência valeu-lhe o sobrenome de
        Crisóstomo, boca de oiro. O povo de Constantinopla, ávido de ouvi-lo,
        reunia-se em grande número na sua Catedral. Apoderara-se de grande amor
        por S. Paulo, do qual dizia: « O coração de Paulo é o Coração de
        Cristo». Também ele amou apaixonadamente a Cristo e, à semelhança do
        Apóstolo, tudo suportou para não deixar lesar os direitos divinos. Com
        S. Atanásio, S. Gregório de Nazianzo e S. Basílio formam os quatro
        grandes Doutores da Igreja Oriental (Intr.). Arcebispo da cidade
        imperial, deu sempre àqueles dos quais se tornará o pai, o pão da
        palavra e da graça (Com.). A sua coragem em extirpar os vícios,
        «repreendendo em tempo e contratempo» (Ep.), a fim de ser constantemente
        o sal da sabedoria que garante as almas contra a corrupção (Ev.),
        valeu-lhe o exílio e toda a sorte de maus tratos (Al.). Morreu à comana
        da Transladação das suas relíquias sob Teodósio II em 438. Ouçamos com
        amor a palavra divina e coloquemo-lo no nosso coração, a fim de que a
        nossa vida seja o reflexo da vida de Deus.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Ecclésiam tuam, quǽsumus, Dómine, grátia cœléstis amplíficet: quam
          beáti Joánnis Chrysóstomi Confessóris tui atque Pontíficis illustráre
          voluísti gloriósis méritis et doctrínis. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Vos suplicamos, Senhor, que a graça celestial aumente a vossa Igreja,
          a qual quisestes ilustrar com os gloriosos méritos e ensinos do B.
          João Crisóstomo, vosso Confessor e Pontífice. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Ecl. 44, 16</Text>

      <Language>
        <Text className="latin">
          Ecce sacérdos magnus, qui in diébus suis plácuit Deo.
          <Text className="versicle"> ℣. </Text>
          <Text className="latin">ibid., 20</Text> Non est inventus símilis
          illi, qui conserváret legem Excélsi.
        </Text>
        <Text className="vernacular">
          Eis o grande sacerdote que nos dias da sua vida agradou a Deus.
          <Text className="versicle"> ℣. </Text>
          <Text className="vernacular">ibid., 20</Text> Ninguém o igualou na
          observância das leis do Altíssimo.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Jac. 1, 12</Text> Beátus vir, qui suffert
          tentatiónem: quóniam, cum probátus fúerit, accípiet corónam vitæ.
          Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Tg. 1, 12</Text> Bem-aventurado o varão
          que sofre com paciência a tentação, porque, quando acabar a provação,
          alcançará a coroa da vida. Aleluia.
        </Text>
      </Language>
    </PageWrapper>
  );
}
