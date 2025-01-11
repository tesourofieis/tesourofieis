"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0516() {
  return (
    <div className="docs">
      <h1>S. Ubaldo, B. e Conf., a 16 de Maio</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Auxílium Confessóris tui atque Pontíficis, contra omnes diáboli
          nequítias déxteram super nos tuæ propitiatiónis exténde. Per Dóminum
          nostrum...
        </p>
        <p>
          Deixai-Vos aplacar, Senhor, Vos suplicamos, e concedei-nos o vosso
          auxílio; e pela intercessão do B. Ubaldo, vosso Confessor e Pontífice,
          estendei sobre nós a vossa mão misericordiosa, a fim de que nos
          defenda de todas as perfídias do demónio. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
