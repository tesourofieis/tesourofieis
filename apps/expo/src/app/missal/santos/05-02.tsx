import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page0502() {
  return (
    <PageWrapper>
      <H1 text="S. Atanásio, a 2 de Maio" />

      <Text className="comment">
        A Igreja, coberta ainda pelo sangue de seus martyres, teve de sustentar,
        no século V, os terríveis assaltos da heresia. Ario ousa despojar o
        divino Ressuscitado de sua glória de Filho de Deus, para torná-l'O
        simples criatura mais elevada que as outras, em graça. Deus suscita
        Santo Atanásio «enriquecendo-o do Espírito de sabedora», e «ungindo-o
        Bispo de Alexandria, com seu óleo santo», pois o atleta de Cristo,
        pregou a verdade do Mestre, com inumerosos sacrifícios. Atanásio em 325
        foi o arauto da ilustre assembleia dos 318 bispos que condenaram Ario,
        no Concílio de Niceia, proclamando a Jesus, Filho consubstancial do Pai.
        É representado, muitas vezes, tendo um symbolo da Santíssima Trindade
        como atributo. Morreu em 373 e foi nomeado Doutor da Igreja. Afirmemos,
        com Santo Atanásio, a Divindade de Jesus ressuscitado.
      </Text>

      <H3 text="Intróito" />

      <Text className="em">Ecl. 15, 5</Text>

      <Language>
        <Text className="latin">
          In médio Ecclésiæ apéruit os ejus: et implévit eum Dóminus spíritu
          sapiéntiæ et intelléctus: stolam glóriæ índuit eum, allelúja,
          allelúja. <Text className="latin">Ps. 91, 2</Text> Bonum est confitéri
          Dómino: et psállere nómini tuo, Altíssime.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Abriu-lhe o Senhor a boca no meio da Igreja e encheu-o com o espírito
          da sabedoria e da inteligência: cobriu-o com o manto da glória,
          aleluia, aleluia. <Text className="vernacular">Sl. 91, 2</Text> É bom
          louvar o Senhor e cantar o vosso nome, ó Altíssimo.
          <Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração, Secreta e Postcomúnio" />

      <LinkCard
        href="/missal/comum/12confessorespontifices2"
        title="Confessores Pontífices - Missa Sacerdótes tui"
      />

      <H3 text="Epístola" />

      <Text className="em">2 Cor. 4, 5-14</Text>

      <Language>
        <Text className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Corínthios.
        </Text>
        <Text className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Coríntios.
        </Text>
        <Text className="latin">
          Fratres: Non nosmetípsos prædicámus, sed Jesum Christum, Dóminum
          nostrum: nos autem servos vestros per Jesum: quóniam Deus, qui dixit
          de ténebris lucem splendéscere, ipse illúxit in córdibus nostris ad
          illuminatiónem sciéntiæ claritátis Dei, in fácie Christi Jesu. Habémus
          autem thesáurum istum in vasis fictílibus: ut sublímitas sit virtútis
          Dei, et non ex nobis. In ómnibus tribulatiónem pátimur, sed non
          angustiámur: aperiántur, sed non destitúimur: persecutiónem pátimur,
          sed non derelínquimur: dejícimur, sed non perímus: semper
          mortificatiónem Jesu in córpore nostro circumferéntes, ut et vita Jesu
          manifestétur in corpóribus nostris. Semper enim nos, qui vívimus, in
          mortem trádimur propter Jesum: ut et vita Jesu manifestétur in carne
          nostra mortáli. Ergo mors in nobis operátur, vita autem in vobis.
          Habéntes autem eúndem spíritum fidei, sicut scriptum est: Crédidi,
          propter quod locútus sum: et nos crédimus, propter quod et lóquimur:
          sciéntes, quóniam, qui suscitávit Jesum, et nos cum Jesu suscitábit et
          constítuet vobíscum.
        </Text>
        <Text className="vernacular">
          Meus irmãos: Não nos pregamos a nós próprios, mas a Jesus Cristo,
          nosso Senhor. Consideramo-nos como vossos servos por Jesus, pois o
          mesmo Deus, que fez sair a luz das trevas, fez também brilhar a sua
          luz nos nossos corações, a fim de que pudéssemos iluminar os outros
          com o conhecimento da glória de Deus, que resplandece na face de Jesus
          Cristo. Porém, possuímos este tesouro em vasos de barro, para que a
          sublimidade deste trabalho seja atribuída a Deus e não a nós. Sofremos
          tribulações em todas as coisas, mas não desanimamos; encontramo-nos em
          grandes apuros, mas não sucumbimos; somos perseguidos, mas não
          desesperamos; somos esmagados, mas não perecemos. Trazemos sempre no
          nosso corpo a morte de Jesus, a fim de que a vida de Jesus se
          manifeste também na nossa carne mortal; porque nós, que vivemos, somos
          incessantemente entregues à morte por causa de Jesus, a fim de que a
          vida de Jesus seja manifestada em nós. Desta maneira a morte opera em
          nós, e a vida em vós. Mas, visto que temos um mesmo espírito de fé,
          conforme o que está escrito: «acreditei e por isso falei», nós também
          acreditamos, por isso mesmo é que falamos, convencidos de que Aquele
          que ressuscitou Jesus nos ressuscitará também com Jesus e nos colocará
          convosco.
        </Text>
      </Language>

      <Language>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
          <Text className="latin">Ps. 109, 4</Text> Tu es sacérdos in ætérnum,
          secúndum órdinem Melchísedech. Allelúja.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Jac. 1, 12</Text> Beátus vir, qui suffert
          tentatiónem: quóniam, cum probátus fúerit, accípiet corónam vitæ.
          Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
          <Text className="vernacular">Sl. 109, 4</Text> Tu és sacerdote para
          sempre, segundo a ordem de Melquisedeque! Aleluia.
          <Text className="versicle"> ℣. </Text>
          <Text className="em">Tg. 1, 12</Text> Bem-aventurado o varão que sofre
          tentação; pois, quando acabar a tentação, receberá a coroa da vida.
          Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/santos/03-18#evangelho"
        title="S. Cirilo de Jerusalém, B. Conf. e Doutor"
      />

      <H3 text="Ofertório" />

      <Text className="em">Sl. 88, 21-22</Text>

      <Language>
        <Text className="latin">
          Invéni David servum meum, óleo sancto meo unxi eum: manus enim mea
          auxiliábitur ei, et bráchium meum confortábit eum, allelúja.
        </Text>
        <Text className="vernacular">
          Encontrei o meu servo David e ungi-o com meu óleo sagrado: e a minha
          mão o auxiliará e o meu braço o fortalecerá, aleluia.
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Mt. 10, 27</Text>

      <Language>
        <Text className="latin">
          Quod dico vobis in ténebris, dícite in lúmine, dicit Dóminus: et quod
          in aure audítis, prædicáte super tecta, allelúja.
        </Text>
        <Text className="vernacular">
          Aquilo que vos digo ao ouvido pregai-o sobre os tectos, aleluia.
        </Text>
      </Language>
    </PageWrapper>
  );
}
