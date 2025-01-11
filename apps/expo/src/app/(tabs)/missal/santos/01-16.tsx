"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0116() {
  return (
    <div className="docs">
      <h1>S. Marcelo, Papa e Mártir, a 16 de Janeiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Preces pópuli tui, quǽsumus, Dómine, cleménter exáudi: ut beáti
          Marcélli Mártyris tui atque Pontíficis méritis adjuvémur, cujus
          passióne lætámur. Per Dóminum nostrum...
        </p>
        <p>
          Senhor, dignai-Vos ouvir clementemente as preces do vosso povo, a fim
          de que sejamos auxiliados pelos méritos do B. Marcelo, vosso Pontífice
          e Mártir, cujo martírio festejamos. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
