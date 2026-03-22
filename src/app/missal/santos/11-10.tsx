import { Link } from "expo-router";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1110() {
  return (
    <PageWrapper>
      <H1 text="S. André Avelino, Conf., a 10 de Novembro" />

      <Typography className="comment">
        André Avelino nasceu no reino de Nápoles, em Castro-Nuovo. Sendo notável a sua beleza, teve
        que repelir, até mesmo pela força, as ciladas armadas à sua virtude. «Podia fazer o mal, diz
        a Epistola e não o fez». Elevado à dignidade sacerdotal, depois de haver estudado o direito,
        só demandou no foro eclesiástico. Tendo-lhe, porém, uma vez escapado ligeira mentira no
        discurso e lendo, logo depois, a passagem da Sagrada Escritura: A boca que profere a mentira
        dá a morte à alma ficou tão impressionado que renunciou para sempre à carreira de advogado.
        Entrou para a Congregação dos Theatinos ou Clérigos regulares de S. Paulo, em Nápoles, onde,
        por seu grande amor à Cruz, obteve o nome de André. Nomeado superior do Instituto (Comm.),
        dava, todo o tempo que lhe permitia o seu cargo, à oração e aos cuidados das almas. Morreu
        em Nápoles, em 1608, em idade avançada, ao pé do altar onde ia subir para celebrar.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Typography>

      <LinkCard
        href="/missal/comum/14confessoresnaopontifices1"
        title="Confessores não Pontífices - Missa Os justi"
      />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui in corde beáti Andréæ Confessóris tui, per árduum cotídie in virtútibus
          proficiéndi votum, admirábiles ad te ascensiónes disposuísti: concéde nobis, ipsíus
          méritis et intercessióne, ita ejúsdem grátiæ partícipes fieri; ut, perfectióra semper
          exsequéntes, ad glóriæ tuæ fastígium felíciter perducámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que, inspirando ao B. André, vosso Confessor, o voto heróico de progredir
          quotidianamente na virtude, dispusestes a sua alma em admiráveis ascensões na perfeição,
          concedei-nos pelos seus méritos e intercessão que compartilhemos desta graça, de sorte
          que, aspirando sempre ao que é mais perfeito, cheguemos com alegria ao cume da vossa
          glória. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Comemoração dos S. S. Mártires Trifão, Respício e Ninfa" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Fac nos, quǽsumus, Dómine, sanctórum Mártyrum tuórum Tryphónis, Respícii et Nymphæ semper
          festa sectári: quorum suffrágiis, protectiónis tuæ dona sentiámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Permiti, Senhor, Vos suplicamos, que celebremos sempre a solenidade dos vossos Santos
          Mártires Trifão, Respício e Ninfa, a fim de que, mercê dos seus auxílios, alcancemos os
          benefícios da vossa protecção. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro tuórum tibi grata sint honóre
          justórum, et nobis salutária, te miseránte, reddántur. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Vos oferecemos, Senhor, estes dons da nossa devoção; e, em atenção aos merecimentos dos
          vossos justos, dignai-Vos aceitá-los; e pela vossa misericórdia fazei que nos sejam
          salutares. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Præsta nobis, quǽsumus, Dómine: intercedéntibus sanctis Martýribus tuis Tryphóne, Respício
          et Nympha; ut, quod ore contíngimus, pura mente capiámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, por intercessão dos vossos Santos Mártires Trifão, Respício e Ninfa dignai-Vos
          conceder-nos a graça de guardarmos com o coração sempre puro o que a nossa boca agora
          recebeu. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
