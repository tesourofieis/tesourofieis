import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0507() {
  return (
    <PageWrapper>
      <H1 text="S. Estanislau, B. e Mártir, a 7 de Maio" />

      <Typography className="comment">
        Nascido na Polónia, Estanislau foi nomeado bispo de Cracóvia em 1072. Boleslau II, cuja
        tirania e desregramento de costumes censurava, votou-lhe grande ódio. Um dia, ao celebrar
        Estanislau a Santa Missa, o príncipe agarrou-o pela garganta, sufocando-o. Era o ano de
        1079. Este Santo é o padroeiro da Polónia.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, pro cujus honóre gloriósus Póntifex Stanisláus gládiis impiórum occúbuit: præsta,
          quǽsumus; ut omnes, qui ejus implórant auxílium, petitiónis suæ salutárem consequántur
          efféctum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, em cuja honra o glorioso Pontífice Estanislau sucumbiu sob o gládio dos ímpios,
          permiti, Vos suplicamos, que todos aqueles que implorarem o seu socorro obtenham efeito
          salutar em seus pedidos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Múnera tibi, Dómine, dicáta sanctífica: et, intercedénte beáto Stanisláo Mártyre tuo atque
          Pontífice, per eadem nos placátus inténde. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Santificai, Senhor, estes dons que Vos são oferecido; e por intercessão do B. Estanislau,
          vosso Mártir e Pontífice, olhai aplacado para nós. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Hæc nos commúnio, Dómine, purget a crímine: et, intercedénte beáto Stanisláo Mártyre tuo
          atque Pontifice, cœléstis remédii fáciat esse consórtes. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Que esta comunhão, Senhor, nos purifique de todos nossos crimes, e que por intercessão do
          B. Estanislau, vosso Mártir e Pontífice, nos torne participantes dos remédios celestiais.
          Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
