"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page1006() {
  return (
    <div className="docs">
      <h1>S. Bruno, Conf., a 6 de Outubro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Sancti Brunónis Confessóris tui, quǽsumus, Dómine, intercessiónibus
          adjuvémur: ut, qui majestátem tuam gráviter delinquéndo offéndimus,
          ejus méritis et précibus, nostrórum delictórum véniam consequámur. Per
          Dóminum...
        </p>
        <p>
          Que a intercessão do vosso Santo Confessor Bruno nos auxilie, Senhor,
          Vos rogamos, a fim de que, havendo ofendido gravemente a vossa
          majestade, obtenhamos o perdão dos nossos pecados pelos méritos e
          preces do mesmo santo. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Quǽsumus, omnípotens Deus: ut, qui cœlestia aliménta percépimus,
          intercedénte beáto Brunóne Confessóre tuo, per hæc contra ómnia
          advérsa muniámur. Per Dóminum...
        </p>
        <p>
          Ó Deus omnipotente, Vos imploramos, havendo nós recebido o alimento
          celestial, fazei que, por intercessão do B. Confessor Bruno, sejamos
          fortificados contra todas as adversidades. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
