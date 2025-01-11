"use dom";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0807() {
  return (
    <div className="docs">
      <h1>S. Caetano, Conf., a 7 de Agosto</h1>

      <aside>
        Como na{" "}
        <a className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </a>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beáto Cajetáno Confessóri tuo apostólicam vivéndi formam
          imitári tribuísti: da nobis, ejus intercessióne et exémplo, in te
          semper confidére et sola cœléstia desideráre. Per Dóminum nostrum...
        </p>
        <p>
          Ó Deus, que concedestes ao B. Caetano, vosso Confessor, a graça de
          imitar o modo de vida dos Apóstolos, permiti-nos, pela sua intercessão
          e exemplo, que sempre depositemos em Vós a nossa confiança e somente
          aspiremos aos bens celestiais. Por nosso Senhor...
        </p>
      </div>

      <h3>Oração Comemoração S. Donato</h3>

      <div className="side-by-side">
        <p>
          Deus, tuórum glória sacerdótum: præsta, quǽsumus, ut sancti Martyris
          tui et Epíscopi Donáti, cujus festa gérimus, sentiámus auxílium. Per
          Dóminum...
        </p>
        <p>
          Ó Deus, que sois a glória dos vossos sacerdotes, permiti, Vos
          suplicamos, que experimentemos o auxílio do vosso Santo Mártir e Bispo
          Donato, cuja festa celebramos. Por nosso Senhor...
        </p>
      </div>

      <h3>Evangelho</h3>

      <LinkCard
        href="/missal/pentecostes/pent14-0#evangelho"
        title="Décimo Quarto Domingo depois de Pentecostes"
      />

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis
          oblátio, et pro tuórum tibi grata sit honóre Sanctórum, et nos córpore
          páriter et mente puríficet. Per Dóminum...
        </p>
        <p>
          Ó Deus omnipotente, Vos suplicamos, fazei que esta oblata da nossa
          humildade em honra dos vossos Santos Vos seja agradável e nos
          purifique ao mesmo tempo o corpo e a alma. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta Comemoração S. Donato</h3>

      <div className="side-by-side">
        <p>
          Præsta, quǽsumus, Dómine: ut sancti Martyris tu iet Episcopi Donati
          intercessióne, quem ad laudem nóminis tui dicátis munéribus honorámus,
          piæ nobis fructus devotiónis accréscat. Per Dóminum nostrum...
        </p>
        <p>
          Senhor, Vos suplicamos, fazei que pela intercessão do vosso Santo
          Mártir e Bispo Donato, a quem honramos oferecendo estes dons em louvor
          do vosso nome, sintamos aumentar em nós os frutos de uma devoção
          piedosa. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus,
          intercedénte beáto Cajetáno Confessóre tuo, per hæc contra ómnia
          advérsa muniámur. Per Dóminum...
        </p>
        <p>
          Havendo recebido o alimento celestial, ó Deus omnipotente, Vos
          suplicamos, fazei que pela intercessão do B. Caetano, vosso Confessor,
          sejamos fortalecidos contra todas as adversidades. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio Comemoração S. Donato</h3>

      <div className="side-by-side">
        <p>
          Omnípotens et miséricors Deus, qui nos sacramentórum tuórum et
          partícipes éfficis et minístros: præsta, quǽsumus; ut, intercedénte
          beáto Donáto Mártyre tuo atque Pontífice, ejúsdem proficiámus et fídei
          consórtio et digno servítio. Per Dóminum...
        </p>
        <p>
          Omnipotente e misericordioso Deus, que nos tornastes participantes e
          ministros dos vossos sacramentos, concedei-nos, Vos imploramos, que
          pela intercessão do B. Donato, vosso Mártir e Pontífice, não só
          gozemos a comparticipação da sua fé, mas como ele Vos sirvamos
          dignamente. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
