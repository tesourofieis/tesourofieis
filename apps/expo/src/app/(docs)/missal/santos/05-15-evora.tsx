"use dom";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0515Evora() {
  return (
    <div className="docs">
      <h1>S. Mâncio, B. e Mártir, a 15 de Maio, Na Arquidiocese de Évora</h1>

      <aside>
        Como na{" "}
        <a className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </a>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Omnípotens sempitérne Deus, qui Máncio, discípulo Unigéniti tui,
          Mártyr insígne tormentórum tolerántiam tribuísti: quǽsumus; ut sicut
          ejus passiónem venerámur: ita glóriæ ipsíus mereámur esse partícipes.
          Per eúmdem Dóminum...
        </p>
        <p>
          Ó omnipotente e eterno Deus, que ao insigne Mártir Mâncio, discípulo
          do vosso Unigénito Filho, concedestes a força para suportar os
          tormentos, Vos pedimos que, assim como veneramos o seu suplício, assim
          mereçamos ser participantes da sua glória. Pelo mesmo nosso Senhor...
        </p>
      </div>

      <h3>Evangelho</h3>

      <LinkCard title="Missa S. Tito" href="/missal/santos/02-06#evangelho" />
    </div>
  );
}
