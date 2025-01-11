"use dom";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1110() {
  return (
    <div className="docs">
      <h1>S. André Avelino, Conf., a 10 de Novembro</h1>

      <aside>
        Como na{" "}
        <a className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </a>{" "}
        , excepto:
      </aside>

      <LinkCard
        href="/missal/comum/14confessoresnaopontifices1"
        title="Confessores não Pontífices - Missa Os justi"
      />

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui in corde beáti Andréæ Confessóris tui, per árduum cotídie in
          virtútibus proficiéndi votum, admirábiles ad te ascensiónes
          disposuísti: concéde nobis, ipsíus méritis et intercessióne, ita
          ejúsdem grátiæ partícipes fieri; ut, perfectióra semper exsequéntes,
          ad glóriæ tuæ fastígium felíciter perducámur. Per Dóminum...
        </p>
        <p>
          Ó Deus, que, inspirando ao B. André, vosso Confessor, o voto heróico
          de progredir quotidianamente na virtude, dispusestes a sua alma em
          admiráveis ascensões na perfeição, concedei-nos pelos seus méritos e
          intercessão que compartilhemos desta graça, de sorte que, aspirando
          sempre ao que é mais perfeito, cheguemos com alegria ao cume da vossa
          glória. Por nosso Senhor...
        </p>
      </div>

      <h2>Comemoração dos S. S. Mártires Trifão, Respício e Ninfa</h2>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Fac nos, quǽsumus, Dómine, sanctórum Mártyrum tuórum Tryphónis,
          Respícii et Nymphæ semper festa sectári: quorum suffrágiis,
          protectiónis tuæ dona sentiámus. Per Dóminum...
        </p>
        <p>
          Permiti, Senhor, Vos suplicamos, que celebremos sempre a solenidade
          dos vossos Santos Mártires Trifão, Respício e Ninfa, a fim de que,
          mercê dos seus auxílios, alcancemos os benefícios da vossa protecção.
          Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Múnera tibi, Dómine, nostræ devotiónis offérimus: quæ et pro tuórum
          tibi grata sint honóre justórum, et nobis salutária, te miseránte,
          reddántur. Per Dóminum nostrum...
        </p>
        <p>
          Vos oferecemos, Senhor, estes dons da nossa devoção; e, em atenção aos
          merecimentos dos vossos justos, dignai-Vos aceitá-los; e pela vossa
          misericórdia fazei que nos sejam salutares. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Præsta nobis, quǽsumus, Dómine: intercedéntibus sanctis Martýribus
          tuis Tryphóne, Respício et Nympha; ut, quod ore contíngimus, pura
          mente capiámus. Per Dóminum...
        </p>
        <p>
          Senhor, por intercessão dos vossos Santos Mártires Trifão, Respício e
          Ninfa dignai-Vos conceder-nos a graça de guardarmos com o coração
          sempre puro o que a nossa boca agora recebeu. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
