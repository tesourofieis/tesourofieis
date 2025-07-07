import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageConcedemihi() {
  return (
    <PageWrapper>
      <H1 text="Concede Mihi" />

      <Language>
        <Text className="latin">
          Concede mihi, benignissime Jesu, grátiam tuam, ut mecum sit et mecum
          laboret, mecum que in finem usque persevéret.
        </Text>
        <Text className="vernacular">
          Infinitamente bom Jesus, eu Vos peço que me concedeis a vossa graça;
          fazei que ela permaneça em mim, trabalhe comigo e se mantenha comigo
          até ao fim.
        </Text>
        <Text className="latin">
          Da mihi hoc semper desiderare et velle, quod tibi magis acceptum est
          et carius placet.
        </Text>
        <Text className="vernacular">
          Concedei-me sempre a vontade e o desejo daquilo que for mais agradável
          e mais aceitável para Vós.
        </Text>
        <Text className="latin">
          Tua voluntas mea sit, et mea voluntas tuam semper sequatur et optime
          ei concordet.
        </Text>
        <Text className="vernacular">
          Que a vossa vontade seja a minha, e que minha vontade esteja sempre em
          conformidade com vossa.
        </Text>
        <Text className="latin">
          Sit mihi unum velle et nolle tecum, nec aliud posse velle aut nolle,
          nisi quod Tu vis et nolis. Amen.
        </Text>
        <Text className="vernacular">
          Fazei que tudo aquilo que eu queira ou não queira seja aquilo que Vós
          quereis ou não quereis. Amen.
        </Text>
      </Language>
    </PageWrapper>
  );
}
