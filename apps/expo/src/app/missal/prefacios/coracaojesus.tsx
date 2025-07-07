import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageCoracaojesus() {
  return (
    <PageWrapper>
      <H1 text="Prefácio do SS. Coração de Jesus" />

      <Text className="aside">
        Diz-se na Missa da festa do Sagrado Coração de Jesus e seu Oitavário e
        nas Missas votivas do Sagrado Coração de Jesus.
      </Text>

      <Language>
        <Text className="latin">
          Vere dignum et justum est, æquum et salutáre, nos tibi semper et
          ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus:
          Qui Unigénitum tuum, in Cruce pendéntem, láncea mílitis transfígi
          voluísti: ut apértum Cor, divínæ largitátis sacrárium, torréntes nobis
          fúnderet miseratiónis et grátiæ: et, quod amóre nostri flagráre
          numquam déstitit, piis esset réquies et pœniténtibus pater et salútis
          refúgium. Et ídeo cum Angelis et Archángelis, cum Thronis et
          Dominatiónibus cumque omni milítia cœléstis exércitus hymnum glóriæ
          tuæ cánimus, sine fine dicéntes:
        </Text>
        <Text className="vernacular">
          É verdadeiramente digno e justo, racional e salutar que sempre e em
          todos os lugares Vos demos graças, Senhor santo, Pai omnipotente,
          eterno Deus, que quisestes que o vosso Filho Unigénito, suspenso na
          Cruz, fosse trespassado pela lança do soldado, a fim de que, aberto o
          Coração - sacrário da liberdade divina -, lançasse sobre nós torrentes
          de misericórdia e de graça; e, ardendo incessantemente de amor por
          nós, sirva de descanso aos piedosos e de asilo de salvação aos
          penitentes. E por isso, com os Anjos e Arcanjos, com os Tronos e
          Dominações e com toda a milícia celestial, cantamos o hino da vossa
          glória, dizendo sem cessar:
        </Text>
      </Language>
    </PageWrapper>
  );
}
