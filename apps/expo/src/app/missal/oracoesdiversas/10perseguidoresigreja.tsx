import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page10Perseguidoresigreja() {
  return (
    <PageWrapper>
      <H1 text="10.ª Contra os perseguidores da Igreja" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Ecclésiæ tuæ, quǽsumus, Dómine, preces placátus admítte: ut,
          destrúctis adversitátibus et erróribus univérsis, secúra tibi sérviat
          libertáte. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos suplicamos, dignai-Vos acolher benigno as preces da vossa
          Igreja, para que, destruídas todas as adversidades e todos os
          obstáculos, ela Vos sirva com liberdade e segurança. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Prótege nos, Dómine, tuis mystériis serviéntes: ut, divinis rebus
          inhæréntes, et córpore tibi famulémur et mente. Per Dóminum...
        </Text>
        <Text className="vernacular">
          A nós, que celebramos os vossos mystérios, protegei-nos, Senhor, a fim
          de que, unindo-nos aos mystérios divinos, Vos sirvamos com o corpo e
          com a alma. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Quǽsumus, Dómine, Deus noster: ut, quos divína tríbuis participatióne
          gaudére, humánis non sinas subjacére perículis. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Senhor, nosso Deus, Vos pedimos, não consintais que aqueles a quem
          concedestes a graça de participar do divino banquete sejam expostos
          aos perigos que ameaçam os homens. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
