import { Link } from "expo-router";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0830() {
  return (
    <PageWrapper>
      <H1 text="Santa Rosa de Lima, Virgem, a 30 de Agosto" />

      <Typography className="comment">
        Cem anos depois da descoberta do Novo Continente, nasceu em Lima, capital do Peru, a virgem
        Rosa, primeira flor de santidade produzida pela América do Sul. Recebeu este nome porque,
        certo dia, o seu rosto apareceu maravilhosamente transfigurado, tendo a beleza de uma rosa
        acrescentou-lhe o nome da Santíssima Virgem, querendo, de ora em diante, ser chamada Rosa de
        Santa Maria. Fecundada pelo orvalho da graça celeste, produziu magníficas flores de
        virgindade e paciência (Or.). Desde a idade de cinco annos, fez o voto de permanecer sempre
        virgem e tomar a Jesus por esposo (Ep.). A fim de evitar ser mais tarde constrangida a
        casar-se, cortou sua bela cabeleira. Tendo recebido o hábito da Ordem Terceira de S.
        Domingos, deu-se à oração e a rudes mortificações. Na idade de trinta e um anos, a 29 de
        Agosto de 1617, seu divino Esposo veio buscá-la (Ev., Comm.). Ornada do esplendor da sua
        beleza, foi triunfante para a côrte do Rei celeste (Grad., All.).
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Bonórum ómnium largítor, omnípotens Deus, qui beátam Rosam, cœléstis grátiæ rore
          prævéntam, virginitátis et patiéntiæ decóre Indis floréscere voluísti: da nobis fámulis
          tuis; ut, in odórem suavitátis ejus curréntes, Christi bonus odor éffici mereámur: Qui
          tecum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, dispensador de todos os bens, que antecipadamente enriquecestes com o
          orvalho celestial da vossa graça a B. Rosa e que a fizestes florescer nas Índias com o
          brilho da virgindade e da paciência, concedei aos vossos servos que, correndo após o
          perfume das suas suaves virtudes, mereçamos tornar-nos o bom odor de Cristo: Que convosco
          vive e reina...
        </Typography>
      </Language>

      <H2 text="Comemoração dos S. S. Mártires Félix e Adauto" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Majestátem tuam, Dómine, súpplices exorámus: ut, sicut nos júgiter Sanctórum tuórum
          commemoratióne lætíficas; ita semper supplicatióne deféndas. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Dirigimos as nossas súplicas à vossa majestade, Senhor, a fim de que, assim como nos dais,
          na festa dos vossos Santos, perpétuo motivo de alegria, assim também, graças às suas
          orações, nos defendais perpetuamente. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hóstias, Dómine, tuæ plebis inténde: et, quas in honóre Sanctórum tuórum devóta mente
          célebrat, profícere sibi séntiat ad salútem. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos lançar os vossos olhares, Senhor, para as hóstias do vosso povo, e, visto que
          ele Vo-las oferece com devoção em honra dos vossos Santos, fazei que sejam úteis à sua
          salvação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Repléti, Dómine, munéribus sacris: quǽsumus: ut, intercedéntibus Sanctis tuis, in
          gratiárum semper actióne maneámus. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Saciados com os sacrossantos dons, Senhor, Vos imploramos, permiti, pela intercessão dos
          vossos Santos, que permaneçamos sempre em acção de graças. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
