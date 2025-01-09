"use dom";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0429() {
  return (
    <div className="docs">
      <h1>S. Pedro de Verona, Mártir, a 29 de Abril</h1>

      <aside>
        Como na [Missa Protexísti me](/missal/comum/9martir), excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Præsta, quǽsumus, omnípotens Deus: ut beáti Petri Martyris tui fidem
          cóngrua devotióne sectémur; qui, pro ejúsdem fídei dilatatióne,
          martýrii palmam méruit obtinére. Per Dóminum...
        </p>
        <p>
          Vos suplicamos, ó Deus, omnipotente, permiti que imitemos com
          conveniente devoção a fé do B. Pedro, vosso Mártir, que pela
          manifestação desta mesma fé mereceu alcançar a palma do martírio. Por
          nosso Senhor...
        </p>
      </div>

      <h3>Epístola</h3>

      <LinkCard
        href="/missal/comum/5martirnaopontifice2#epístola"
        title="Mártir não Pontífice - Missa Lætábitur justus"
      />

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Preces, quas tibi, Dómine, offérimus, intercedénte beáto Petro Mártyre
          tuo, cleménter inténde: et propugnatóres fídei sub tua protectióne
          custódi. Per Dóminum...
        </p>
        <p>
          Dignai-Vos, Senhor, pela intercessão do B. Pedro, vosso Mártir, ouvir
          clementemente as preces que Vos dirigimos, e acolhei sob a vossa
          protecção os defensores da fé. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Fidéles tuos, Dómine, custódiant sacraménta, quæ súmpsimus: et,
          intercedénte beáto Petro Mártyre tuo, contra omnes advérsos tueántur
          incúrsus. Per Dóminum...
        </p>
        <p>
          Que os vossos fiéis, Senhor, sejam amparados com os sacramentos que
          recebemos, e que pela intercessão do B. Pedro, vosso Mártir, sejam
          protegidos contra todos os ataques do inimigo. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
