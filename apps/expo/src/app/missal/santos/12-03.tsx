import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page1203() {
  return (
    <PageWrapper>
      <H1 text="S. Francisco Xavier, Confessor, a 3 de Dezembro" />

      <Text className="comment">
        S. Francisco Xavier (1506-1552) tocado, depois de longa resistência,
        pela palavra constantemente repetida por Santo Inácio: «Que aproveitará
        ao homem ganhar o universo se vier a perder a sua alma», tornou-se um de
        seus mais zelosos cooperadores na Companhia de Jesus, apenas nascente.
        «Ide por todo o mundo», acrescenta a Epístola. Este foi o programa de
        toda a vida de S. Francisco Xavier, «cuja pregação e milagres fizeram
        entrar na Igreja os povos das Índias» (Or.). Ali evangelizou, e também
        no Japão, mais de 50 reinos e converteu incalculável número de pagãos.
        Imitemos o Padroeiro da Propagação da Fé e auxiliemos essa obra com as
        nossas orações e esmolas.
      </Text>

      <H3 text="Intróito" />

      <Text className="em">Sl. 118, 46-47</Text>

      <Language>
        <Text className="latin">
          Loquébar de testimóniis tuis in conspéctu regum, et non confundébar:
          et meditábar in mandátis tuis, quæ diléxi nimis.{" "}
          <Text className="latin">Ps. 110, 1-2</Text> Laudáte Dóminum, omnes
          gentes, laudáte eum, omnes pópuli: quóniam confirmáta est super nos
          misericórdia ejus, et véritas Dómini manet in ætérnum.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Falava dos vossos testemunhos sem vergonha na presença dos reis: e
          meditava nos vossos mandamentos, que amava profundamente.{" "}
          <Text className="vernacular">Sl. 110, 1-2</Text> Louvai o Senhor, ó
          vós, todas as nações; louvai-O, ó vós, todos os povos; pois a sua
          misericórdia para connosco manifestou-se claramente e a verdade do
          Senhor permanece eternamente.
          <Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui Indiárum gentes beáti Francísci prædicatióne et miráculis
          Ecclésiæ tuæ aggregáre voluísti: concéde propítius; ut, cujus gloriósa
          mérita venerámur, virtútum quoque imitémur exémpla. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que pela pregação e milagres do B. Francisco quisestes chamar
          à vossa Igreja os povos das Índias, concedei-nos propício que,
          venerando os seus gloriosos méritos, imitemos, também, os exemplos das
          suas virtudes. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/santos/11-30#epístola"
        title="S. André, Apóstolo"
      />

      <H3 text="Gradual" />

      <Text className="em">Sl. 91, 13 & 14</Text>

      <Language>
        <Text className="latin">
          Justus ut palma florébit: sicut cedrus Líbani multiplicábitur in domo
          Dómini.<Text className="versicle"> ℣. </Text>
          <Text className="latin">ibid., 3</Text> Ad annuntiándum mane
          misericórdiam tuam, et veritátem tuam per noctem.
        </Text>
        <Text className="vernacular">
          O justo florescerá, como a palmeira, e crescerá, como o cedro do
          Líbano, na casa do Senhor.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">ibid., 3</Text> Para publicar de manhã a
          vossa misericórdia; e de noite a vossa verdade.
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
          que sabe sofrer a tentação, porque, quando acabar a tentação, receberá
          a coroa da vida. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <Text className="em">Mc. 16, 15-18</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Marcum.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Marcos.
        </Text>
        <Text className="latin">
          In illo témpore: Dixit Jesus discípulis suis: Eúntes in mundum
          univérsum, prædicáte Evangélium omni creatúra. Qui credíderit, et
          baptizátus fúerit, salvus erit: qui vero non credíderit,
          condemnábitur. Signa autem eos, qui credíderint, hæc sequántur: In
          nómine meo dæmónia ejícient: linguis loquántur novis: serpéntes
          tollent: et si mortíferum quid bíberint, non eis nocébit: super ægros
          manus impónent, et bene habébunt.
        </Text>
        <Text className="vernacular">
          Naquele tempo, disse Jesus aos seus discípulos: «Ide pelo mundo
          inteiro e pregai o Evangelho a todas as criaturas. Quem acreditar e
          for baptizado será salvo; quem não acreditar será condenado. Eis os
          milagres que acompanharão aqueles que acreditarem: Em meu nome
          expulsarão os demónios; falarão novas línguas; tirarão com suas
          serpentes; se beberem alguma coisa mortífera, lhes não fará dano; e
          imporão as mãos sobre os enfermos, que serão curados».
        </Text>
      </Language>

      <H3 text="Ofertório" />

      <Text className="em">Sl. 88, 25</Text>

      <Language>
        <Text className="latin">
          Véritas mea et misericórdia mea cum ipso: et in nómine meo exaltábitur
          cornu ejus.
        </Text>
        <Text className="vernacular">
          A minha verdade e a minha misericórdia estarão com ele, e, por virtude
          do meu nome, será exaltado o seu poder.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis
          oblátio, et pro tuórum tibi grata sit honóre Sanctórum, et nos córpore
          páriter et mente puríficet. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Concedei-nos, ó Deus omnipotente, que esta oferta da nossa humildade,
          servindo para honrar os vossos Santos, Vos seja agradável; e que ao
          mesmo tempo nos purifique o corpo e a alma. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Mt. 24,46-47</Text>

      <Language>
        <Text className="latin">
          Beátus servus, quem, cum vénerit dóminus, invénerit vigilántem: amen,
          dico vobis, super ómnia bona sua constítuet eum.
        </Text>
        <Text className="vernacular">
          Bem-aventurado o servo que o Senhor, quando vier, achar vigilante. Em
          verdade vos digo que lhe dará a administração de todos seus bens.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus,
          intercedénte beáto Francísco Confessóre tuo, per hæc contra ómnia
          advérsa muniámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Havendo nós, ó Deus omnipotente, recebido o alimento celestial,
          permiti, Vos suplicamos, que, pela intercessão do B. Francisco, vosso
          Confessor, sejamos fortalecidos contra todas as adversidades. Por
          nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
