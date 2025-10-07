import { Link } from "expo-router";
import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0901() {
  return (
    <PageWrapper>
      <H1 text="S. Egídio (ou Gil), Abade, a 1 de Setembro" />

      <Text className="comment">
        S. Gil ou Egídio, nasceu em Atenas; distribuiu aos pobres todo o seu
        património e seguiu a Jesus (Ev.). Tendo-o varios milagres tornado
        célebre, refugiou-se na Provença, para afastar de si as honras. Viveu na
        oração e no recolhimento (Intr.) no meio de vasta floresta, só se
        alimentando de raízes e do leite de uma corça domesticada. Certo dia,
        perseguido pela matilha real de Theodorico, o animalzinho refugiou-se na
        gruta do santo que, desejando protegê-lo, teve a mão traspassada por uma
        flecha. Tendo chegado, o rei pediu vivamente a São Gil que consentisse
        na construção dum mosteiro naquele lugar. O Santo eremita tomou-lhe a
        direcção e, como Moisés entre o povo de Deus (Ep.), tornou-se o chefe e
        o legislador de uma numerosa família monástica, colocada debaixo de seu
        governo e seguindo-lhe a doutrina e os conselhos (Comm.). A Abadia de S.
        Gil, maravilha de arquitectura, foi um dos lugares de peregrinações mais
        frequentados da Idade Média e deu origem a uma cidade. Os condes de
        Tolosa se honravam de ter o nome de S. Gil. Os antigos Missais o colocam
        entre os quatorze Santos auxiliares. Seu culto espalhou-se na França,
        Espanha, Itália, Bélgica, Alemanha e Inglaterra, havendo 146 igrejas
        construídas em sua honra. S. Gil morreu cerca do ano de 721.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/16abades">
          Missa Os justi.
        </Link>{" "}
        A Comemoração dos S. S. Doze Irmãos como na
        <Link href="/missal/santos/08-01">
          Missa Comemoração dos S. S. Macabeus, Mártires.
        </Link>
      </Text>
    </PageWrapper>
  );
}
