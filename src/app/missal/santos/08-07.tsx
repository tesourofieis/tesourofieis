import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0807() {
  return (
    <PageWrapper>
      <H1 text="S. Caetano, Conf., a 7 de Agosto" />

      <Typography className="comment">
        S. Caetano fundou a primeira Congregação de Clérigos regulares na qual se imita a vida dos
        Apóstolos (Or.). A confiança em Deus, de que fala o Evangelho, era sua grande lei, por isso
        eles se abstinham de pedir esmolas, esperando recebê-las espontaneamente dos fiéis. O zelo
        desempenhado pelo Santo em prol da salvação do proximo o fez denominar o Caçador de almas.
        Diziam ser ele Anjo no altar e Apóstolo no púlpito. Morreu em Nápoles, a 7 de Agosto de
        1547.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beáto Cajetáno Confessóri tuo apostólicam vivéndi formam imitári tribuísti: da
          nobis, ejus intercessióne et exémplo, in te semper confidére et sola cœléstia desideráre.
          Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que concedestes ao B. Caetano, vosso Confessor, a graça de imitar o modo de vida
          dos Apóstolos, permiti-nos, pela sua intercessão e exemplo, que sempre depositemos em Vós
          a nossa confiança e somente aspiremos aos bens celestiais. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Oração Comemoração S. Donato" />

      <Language>
        <Typography className="latin">
          Deus, tuórum glória sacerdótum: præsta, quǽsumus, ut sancti Martyris tui et Epíscopi
          Donáti, cujus festa gérimus, sentiámus auxílium. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que sois a glória dos vossos sacerdotes, permiti, Vos suplicamos, que
          experimentemos o auxílio do vosso Santo Mártir e Bispo Donato, cuja festa celebramos. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/pentecostes/pent14-0#evangelho"
        title="Décimo Quarto Domingo depois de Pentecostes"
      />

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis oblátio, et pro tuórum tibi
          grata sit honóre Sanctórum, et nos córpore páriter et mente puríficet. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, Vos suplicamos, fazei que esta oblata da nossa humildade em honra dos
          vossos Santos Vos seja agradável e nos purifique ao mesmo tempo o corpo e a alma. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta Comemoração S. Donato" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, Dómine: ut sancti Martyris tu iet Episcopi Donati intercessióne, quem ad
          laudem nóminis tui dicátis munéribus honorámus, piæ nobis fructus devotiónis accréscat.
          Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, fazei que pela intercessão do vosso Santo Mártir e Bispo Donato, a
          quem honramos oferecendo estes dons em louvor do vosso nome, sintamos aumentar em nós os
          frutos de uma devoção piedosa. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedénte beáto
          Cajetáno Confessóre tuo, per hæc contra ómnia advérsa muniámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Havendo recebido o alimento celestial, ó Deus omnipotente, Vos suplicamos, fazei que pela
          intercessão do B. Caetano, vosso Confessor, sejamos fortalecidos contra todas as
          adversidades. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio Comemoração S. Donato" />

      <Language>
        <Typography className="latin">
          Omnípotens et miséricors Deus, qui nos sacramentórum tuórum et partícipes éfficis et
          minístros: præsta, quǽsumus; ut, intercedénte beáto Donáto Mártyre tuo atque Pontífice,
          ejúsdem proficiámus et fídei consórtio et digno servítio. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Omnipotente e misericordioso Deus, que nos tornastes participantes e ministros dos vossos
          sacramentos, concedei-nos, Vos imploramos, que pela intercessão do B. Donato, vosso Mártir
          e Pontífice, não só gozemos a comparticipação da sua fé, mas como ele Vos sirvamos
          dignamente. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
