import { Link } from "expo-router";
import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0116() {
  return (
    <PageWrapper>
      <H1 text="S. Marcelo, Papa e Mártir, a 16 de Janeiro" />
      <Text className="comment">
        Chefe supremo da Igreja (Intr., Grad.) por ocasião das últimas
        perseguições dos imperadores de Roma, S. Marcelo deu testemunho à
        divindade de Cristo «perdendo a vida por seu amor» (Ev.). A santa viúva
        Lucina tendo-lhe oferecido a sua morada, transformou-a na igreja que
        traz o título de S. Marcelo. Maxêncio, retirando as feras das cocheiras
        públicas, condenou o Santo Papa a guardá-las. Seus sofrimentos,
        mitigados pelas consolações divinas, permitiram-lhe compartilhar ainda
        mais intimamente das penas dos cristãos, de quem era o pastor (Ep.).
        Exausto pelos maus tratos, vencido pela dor, morreu no ano de 309. Essa
        resistência heróica, contra a qual se quebra a violência de César, prova
        que Jesus é Deus, pois, «é a sua mão que socorre o seu servo e o seu
        braço é que o fortalece, para não ser vencido pelo inimigo» (Grad.). Em
        breve o reino divino do Salvador será reconhecido e, desde o imperador
        Constantino, a Igreja de Roma «a Rainha das Igrejas» como a chamava S.
        Marcelo, será rainha do mundo, não só na ordem espiritual mas também na
        ordem temporal. Imitemos a coragem do Santo Pontífice Marcelo na defesa
        dos direitos divinos de Cristo, a fim de que eles se possam novamente
        manifestar pelo triunfo da Igreja.
      </Text>

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Preces pópuli tui, quǽsumus, Dómine, cleménter exáudi: ut beáti
          Marcélli Mártyris tui atque Pontíficis méritis adjuvémur, cujus
          passióne lætámur. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Senhor, dignai-Vos ouvir clementemente as preces do vosso povo, a fim
          de que sejamos auxiliados pelos méritos do B. Marcelo, vosso Pontífice
          e Mártir, cujo martírio festejamos. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
