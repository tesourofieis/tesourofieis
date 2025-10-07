import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0928() {
  return (
    <PageWrapper>
      <H1 text="S. Venceslau, Mártir, a 28 de Setembro" />

      <Text className="comment">
        Wenceslau, duque da Bohemia, praticou sempre no trono, as mais belas
        virtudes cristãs. Cheio de caridade, socorria com as suas esmolas os
        órfãos, as viúvas e os pobres, libertava os cativos e visitava os
        prisioneiros. Durante toda a sua vida conservou intacto o tesouro da
        virgindade. Tinha para com os sacerdotes grande veneração, e, com as
        proprias mãos, semeava o trigo e espremia as uvas destinadas a servir no
        Santo Sacrifício da Missa. Entretanto, á instigação de sua mãe, o impio
        Boleslau, realizando o que anunciara Jesus que o homem terá por
        inimigos, os da sua propria casa (Ev.) resolveu desfazer-se do rei, seu
        irmão. Depois de havê-lo recebido á sua mesa, foi com uns cúmplices
        matá-lo na igreja onde orava esperando a morte que sabia estarem-lhe
        preparando. S. Wenceslau morreu em 938. A Hungria, a Polónia e a Bohemia
        o escolheram por padroeiro.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/4martirnaopontifice1">
          Missa In virtúte tua
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beátum Wencesláum per martýrii palmam a terréno principátu
          ad cœléstem glóriam transtulísti: ejus précibus nos ab omni
          adversitáte custódi; et ejúsdem tríbue gaudére consórtio. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que pela palma do martírio trasladastes o B. Venceslau do
          principado terreno para a glória celestial, defendei-nos, pelas suas
          preces, de todas as adversidades e proporcionai-nos a alegria de
          compartilhar do seu glorioso destino. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
