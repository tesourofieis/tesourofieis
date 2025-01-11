"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page1202() {
  return (
    <div className="docs">
      <h1>Santa Bibiana, Virgem e Mártir, a 2 de Dezembro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/18virgensmartires2">
          Missa Me exspectavérunt
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, ómnium largítor bonórum, qui in fámula tua Bibiána cum
          virginitátis flore martýrii palmam conjunxísti: mentes nostras ejus
          intercessióne tibi caritáte conjúnge; ut, amótis perículis, prǽmia
          consequámur ætérna. Per Dóminum...
        </p>
        <p>
          Ó Deus, dispensador de todos os bens, que unistes a flor da virgindade
          à palma do martírio na pessoa de vossa serva Bibiana, dignai-Vos por
          sua intercessão unir pela caridade as nossas almas convosco, a fim de
          que, afastados todos os perigos, alcancemos os prémios eternos. Por
          nosso Senhor...
        </p>
      </div>
    </div>
  );
}
