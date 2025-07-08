import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page1205Braga() {
  return (
    <PageWrapper>
      <H1 text="S. Geraldo, Bispo e Conf., a 5 de Dezembro, Na Arquidiocese de Braga" />
      <H3 text="Intróito" />
      <Language>
        <Text className="latin">
          <Text className="versicle"> ℣. </Text> Gloria Patri...
        </Text>
        <Text className="vernacular">
          Um ínclito Confessor de Deus, lustre muito esplendoroso ante o Senhor,
          pérola e modelo dos Prelados, hoje coroado, com o qual as celestiais
          coortes rejubilam, entra nos céus, onde sem fim reina com Cristo. Ó
          justos, exultai no Senhor: àqueles que têm o coração recto fica bem a
          glória.<Text className="versicle"> ℣. </Text>
          Glória ao Pai...
        </Text>
      </Language>
      <H3 text="Oração" />
      <Text className="text-pretty">
        Ó Senhor, Vos suplicamos, que os preciosos méritos do B. Geraldo, vosso
        Confessor e Pontífice, nos defendam; e que por suas preces seja bem
        dirigida a Igreja. Por nosso Senhor...
      </Text>
      <H3 text="Epístola" />
      <LinkCard
        href="/missal/comum/10martires#epístola"
        title="Mártires - Missa Sancti tui"
      />
      <H3 text="Gradual" />
      <Language>
        <Text className="latin">
          Veneremos devotadamente, do íntimo do coração e da alma, a veneranda
          festividade de hoje, em que o B. Geraldo, Confessor de Cristo, passou
          alegre deste mundo para os céus. Por isso o B. Geraldo, acabado o
          tempo da sua vida, é alistado nos exércitos celestiais.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia. Geraldo foi esse servo do Senhor que, lutando à hora
          da sua morte com o demónio, o venceu. Aleluia.
        </Text>
      </Language>
      <H3 text="Evangelho" />
      <LinkCard
        href="/missal/comum/14confessoresnaopontifices1#evangelho"
        title="Confessores não Pontífices - Missa Os justi"
      />
      <H3 text="Ofertório" />
      <Text className="text-pretty">
        Alegra-te, cidade de Braga, com tão excelso Padroeiro, o qual permitiu
        Deus que fosse sepultado dentro dos teus muros. Por seu intermédio
        obtiveste de Deus milagres inumeráveis.
      </Text>
      <H3 text="Secreta" />
      <Text className="text-pretty">
        Seja aceite na vossa presença, ó Senhor, a oblação do vosso fiel povo e
        permiti que lhe seja salutar, por intercessão do B. Geraldo, vosso
        Confessor e Pontífice, em cuja solenidade ela Vos é oferecida. Por nosso
        Senhor...
      </Text>
      <H3 text="Comúnio" />
      <Text className="text-pretty">
        Ó quão glorioso é este Confessor de Deus, com o qual no céu exultam os
        exércitos dos Santos!
      </Text>
      <H3 text="Postcomúnio" />
      <Text className="text-pretty">
        Ó Deus, remunerador das almas fiéis, concedei-nos a graça de alcançarmos
        o perdão por intermédio das preces do B. Geraldo, vosso Confessor e
        Pontífice, cuja veneranda festividade hoje celebramos. Por nosso
        Senhor...
      </Text>
    </PageWrapper>
  );
}
