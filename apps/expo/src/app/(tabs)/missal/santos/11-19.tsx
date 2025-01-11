"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page1119() {
  return (
    <div className="docs">
      <h1>Santa Isabel, Viúva, a 19 de Novembro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Tuórum corda fidélium, Deus miserátor, illústra: et, beátæ Elisabeth
          précibus gloriósis; fac nos próspera mundi despícere, et cœlésti
          semper consolatióne gaudére. Per Dóminum...
        </p>
        <p>
          Ó Deus de misericórdia, esclarecei os corações dos vossos fiéis; e,
          pelas gloriosas preces da B. Isabel, concedei-nos a graça de
          desprezarmos as prosperidades deste mundo e de gozarmos perpetuamente
          a consolação celestial. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
