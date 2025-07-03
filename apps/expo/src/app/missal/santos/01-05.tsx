import { Link } from "expo-router";
import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page0105() {
  return (
    <PageWrapper>
      <H1 text="Vigília Epifania" />

      <Text className="aside">
        Como na
        <Link href="/missal/natal/nat1-0">
          Missa Domingo dentro do Oitavário do Natal,
        </Link>
        com o Evangelho:
      </Text>

      <H3 text="Evangelho" />

      <Text className="em">Mt. 2, 19-23</Text>

      <Language>
        <Text className="latin">
          <Text className="cross"> ✠ </Text> Sequéntia sancti Evangélii secúndum
          Matthǽum.
        </Text>
        <Text className="vernacular">
          <Text className="cross"> ✠ </Text> Continuação do santo Evangelho
          segundo S. Mateus.
        </Text>
        <Text className="latin">
          In illo témpore: Defúncto Heróde, ecce, Angelus Dómini appáruit in
          somnis Joseph in Ægýpto, dicens: Surge, et áccipe Púerum et Matrem
          ejus, et vade in terram Israël: defúncti sunt enim, qui quærébant
          ánimam Pueri. Qui consúrgens, accépit Púerum et Matrem ejus, et venit
          in terram Israël. Audiens autem, quod Archeláus regnáret in Judæa pro
          Heróde patre suo, tímuit illo ire: et, admonítus in somnis, secéssit
          in partes Galilææ. Et véniens habitávit in civitáte, quæ vocátur
          Názareth: ut adimplére tur quod dictum est per Prophétas: Quóniam
          Nazaræus vocábitur.
        </Text>
        <Text className="vernacular">
          Naquele tempo, quando Herodes morreu, eis que um Anjo do Senhor
          apareceu em sonhos a José, que estava no Egipto, dizendo-lhe:
          "Levanta-te, toma o Menino e sua Mãe e volta para a terra de Israel,
          pois já são mortos os que queriam matar o Menino". Logo José,
          levantando-se, tomou o Menino e sua Mãe e veio para a terra de Israel;
          mas, sabendo que Arquelau reinava na Judeia, em lugar de Herodes, seu
          pai, receou voltar para lá. Então, advertido em sonhos, retirou-se
          para a Galileia, indo habitar em uma cidade chamada Nazaré, a fim de
          que se cumprisse o que fora dito pelos Profetas: "Será chamado
          Nazareno".
        </Text>
      </Language>
    </PageWrapper>
  );
}
