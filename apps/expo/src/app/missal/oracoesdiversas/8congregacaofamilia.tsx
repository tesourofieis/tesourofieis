import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page8Congregacaofamilia() {
  return (
    <PageWrapper>
      <H1 text="8.ª Por uma Congregação e Família" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Defénde, quǽsumus, Dómine, beáta María semper Vírgine intercedénte,
          istam ab omni adversitáte famíliam: et toto corde tibi prostrátam, ab
          hóstium propítius tuére cleménter insídiis. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Pela intercessão da B. sempre Virgem Maria, defendei, Senhor, Vos
          suplicamos, esta família de todas as adversidades; e, visto que ela
          está prostrada de todo o coração diante de Vós, sede-lhe propício e,
          clementemente, protegei-a das insídias dos seus inimigos. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Súscipe, quǽsumus, omnípotens Deus, oblatiónem nostræ devotiónis: et,
          per virtútem hujus sacraménti, fámulos tuos a cunctis adversitátibus
          prótege. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente, Vos pedimos, aceitai esta oferta da nossa devoção;
          e pela virtude deste sacramento protegei os vossos servos de todas as
          adversidades. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Sumptis redemptiónis nostræ munéribus: præsta, quǽsumus, miséricors
          Deus; eórum nobis celebratióne, tuæ protectiónis contra omnes
          adversitátes subsídium. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Permiti, ó Deus de misericórdia, Vos rogamos, que, havendo nós
          recebido os dons da nossa redenção, sintamos o socorro da vossa
          protecção contra todas as adversidades. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
