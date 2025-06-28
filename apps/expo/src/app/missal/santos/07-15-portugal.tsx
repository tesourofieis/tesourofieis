import { Link } from "expo-router";

import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0715Portugal() {
  return (
    <PageWrapper>
      <Text className="h1">
        B. Inácio de Azevedo e Companheiros, a 15 de Julho
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Omnipotens ætérne Deus, qui nos in beáto Ignátio et Sóciis ejus, ad
          prædicándam Brasilic géntibus Cathólicam fidem missis, quadraginta
          Mártyrum palmas sub una tribuis solemnitáte venerári: concéde
          propitius: ut quorum in cælis glóriam læti suspicimus, eórum invictam
          in fide constántiam æmulémur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente e eterno, que permitistes venerássemos em uma só
          solenidade as quarenta palmas conquistadas pelo B. Inácio e seus
          Companheiros de martírio, concedei-nos propício que a alegre
          contemplação da sua glória no céu nos estimule a imitarmos a
          invencível constância da sua fé. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Oração Comemoração S. Henrique</Text>

      <Language>
        <Text className="latin">
          Deus, qui hodiérna die beátum Henrícum Confessórem tuum e terréni
          cúlmine impérii ad regnum ætérnum transtulísti: te súpplices exorámus;
          ut, sicut illum, grátiæ tuæ ubertáte prævéntum, illécebras sǽculi
          superáre fecísti, ita nos fácias, ejus imitatióne, mundi hujus
          blandiménta vitáre, et ad te puris méntibus perveníre. Per Dóminum
          nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que neste dia fizestes passar o B. Henrique, vosso Confessor,
          de um trono da terra para o reino eterno, Vos suplicamos humildemente
          que, assim como, enchendo-o com a abundância da vossa graça, o
          fizestes triunfar dos atractivos deste mundo, assim também nos façais
          evitar as seduções deste mundo e chegar até Vós com pureza de
          espírito. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Secreta</Text>

      <Language>
        <Text className="latin">
          Súscipe, Dómine, acceptíssimum Unigéniti tui sacrifícium: ac, beáto
          Ignátio et Sóciis ejus intercedéntibus, præsta: ut, quod illos
          roborávit ad pugnam, nos effíciat in tuo servítio atque amóre
          fervéntes. Per eúndem...
        </Text>
        <Text className="vernacular">
          Recebei, Senhor, o agradabilíssimo sacrifício do vosso Filho
          Unigénito; e, pela intercessão do B. Inácio e seus Companheiros, fazei
          que este mystério, que os fortaleceu para o combate, nos torne
          fervorosos no vosso serviço e amor. Pelo mesmo...
        </Text>
      </Language>

      <Text className="h3">Secreta Comemoração S. Henrique</Text>

      <Language>
        <Text className="latin">
          Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne
          Sanctórum: quibus nos et præséntibus éxui malis confídimus et futúris.
          Per Dóminum...
        </Text>
        <Text className="vernacular">
          Vos oferecemos este sacrifício de louvor em memória dos vossos Santos,
          para que por meio dele nos livremos dos males presentes e futuros. Por
          nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Postcomúnio</Text>

      <Language>
        <Text className="latin">
          Fidem in nobis, Dómine, quam de miseréntis grátiæ tuæ múnere
          suscépimus, áugeant hæc sancta mystéria: nosque ad eam contra
          spirituália nequitiæ colluctántes profiténdam, beatórum Ignátii et
          Sociórum ejus exémpla confirment. Per Dóminum nostrum Jesum
          Christum...
        </Text>
        <Text className="vernacular">
          Fazei, Senhor, que estes sacrossantos mystérios aumentem em nós a fé,
          que possuímos como um dom da vossa misericordiosa graça; e que na luta
          contra os espíritos do mal sejamos fiéis à profissão desta fé, segundo
          os exemplos do B. Inácio e seus Companheiros. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Postcomúnio Comemoração S. Henrique</Text>

      <Language>
        <Text className="latin">
          Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut,
          in cujus hæc commemoratióne percépimus, ejus muniámur et précibus. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Fortalecidos com o alimento e com a bebida celestiais, ó nosso Deus,
          Vos suplicamos humildemente que nos protejam as preces daquele em cuja
          memória os recebemos. Por...
        </Text>
      </Language>
    </PageWrapper>
  );
}
