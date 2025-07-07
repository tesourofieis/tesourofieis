import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page060() {
  return (
    <PageWrapper>
      <H1 text="Salmo 60" />

      <Language>
        <Text className="latin">
          Exáudi, Deus, deprecatiónem meam: * inténde oratióni meæ.
        </Text>
        <Text className="vernacular">
          Ouvi, ó Deus, a minha súplica: * atendei à minha oração.
        </Text>
        <Text className="latin">
          A fínibus terræ ad Te clamávi: * dum anxiarétur cor meum, in petra
          exaltásti me.
        </Text>
        <Text className="vernacular">
          Dos confins da terra clamei a Vós: * quando o meu coração estava
          angustiado, numa rocha me erguestes.
        </Text>
        <Text className="latin">
          Deduxísti me, quia factus es spes mea: * turris fortitúdinis a fácie
          inimíci.
        </Text>
        <Text className="vernacular">
          Guiastes-me, pois Vos fizestes a minha esperança: * uma torre sólida
          contra o inimigo.
        </Text>
        <Text className="latin">
          Inhabitábo in tabernáculo tuo in sǽcula: * prótegar in velaménto
          alárum tuárum.
        </Text>
        <Text className="vernacular">
          Habitarei para sempre no vosso tabernáculo: * abrigar-me-ei à sombra
          de vossas asas.
        </Text>
        <Text className="latin">
          Quóniam Tu, Deus meus, exaudísti oratiónem meam: * dedísti hereditátem
          timéntibus nomen tuum.
        </Text>
        <Text className="vernacular">
          Porque Vós, Deus meu, ouvistes a minha oração: * destes uma herança
          aos que temem o vosso nome.
        </Text>
        <Text className="latin">
          Dies super dies regis adícies: * annos ejus usque in diem generatiónis
          et generatiónis.
        </Text>
        <Text className="vernacular">
          Acrescentareis dias aos dias do Rei: * os seus anos durarão de geração
          em geração.
        </Text>
        <Text className="latin">
          Pérmanet in ætérnum in conspéctu Dei: * misericórdiam et veritátem
          ejus quis requíret?
        </Text>
        <Text className="vernacular">
          Ele permanece eternamente na presença de Deus: * quem buscará a sua
          misericórdia e verdade?
        </Text>
        <Text className="latin">
          Sic psalmum dicam nómini tuo in sǽculum sǽculi: * ut reddam vota mea
          de die in diem.
        </Text>
        <Text className="vernacular">
          Assim cantarei um salmo ao vosso nome pelos séculos dos séculos: *
          para cumprir sem cessar os meus votos.
        </Text>
      </Language>
    </PageWrapper>
  );
}
