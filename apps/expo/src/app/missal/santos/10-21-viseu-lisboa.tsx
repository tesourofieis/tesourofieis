import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page1021ViseuLisboa() {
  return (
    <PageWrapper>
      <H1 text="S. Úrsula e Outras, Virgens e Mártires, a 21 de Outubro" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Da nobis, quǽsumus, Dómine, Deus noster, sanctárum Vírginum et
          Mártyrum tuárum Ursulæ et Sociárum ejus palmas incessábili devotióne
          venerári: ut, quas digna mente non póssumus celebráre, humílibus
          saltem frequentémus obséquiis. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Senhor, nosso Deus, dignai-Vos conceder-nos a graça de incessantemente
          venerarmos com devoção a vitória das vossas Santas Virgens e Mártires
          Úrsula e Companheiras, a fim de que, já que não podemos celebrar
          dignamente os seus méritos, ao menos possamos oferecer-lhes as nossas
          humildes homenagens. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Inténde, quǽsumus, Dómine, múnera altáribus tuis pro sanctárum
          Virginum et Mártyrum tuárum Ursulæ et Sociárum ejus festivitáte
          propósita: ut, sicut per hæc beáta mystéria illis glóriam contulísti;
          ita nobis indulgéntiam largiáris. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, dignai-Vos volver os vossos olhares para estas ofertas, que
          depositamos nos vossos altares para celebrar a festa das vossas Santas
          Virgens e Mártires Úrsula e Companheiras, a fim de que, assim como
          lhes concedestes a glória, assim nos concedais o perdão dos nossos
          pecados. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Præsta nobis, quǽsumus, Dómine: intercedéntibus sanctis Virgínibus et
          Martýribus tuis Ursula et Sociábus ejus: ut, quod ore contíngimus,
          pura mente capiámus. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Concedei-nos, Senhor, Vos suplicamos, que por intercessão das vossas
          Santas Virgens e Mártires Úrsula e Companheiras guardemos com o
          coração puro o que a nossa boca acaba de receber. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
