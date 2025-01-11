"use dom";
import "../../../../global.css";

import React from "react";
import Missa from "../santos/09-15";

export default function PageQuad55Outro() {
  return (
    <div className="docs">
      <h1>Sete Dores da B. Virgem Maria</h1>

      <aside>
        No Ciclo do Natal, celebramos a missão da Santíssima Virgem no mistério
        da Encarnação, glorificando ao mesmo tempo a divindade de Jesus e a
        maternidade divina de Maria. O Ciclo da Páscoa diz-nos, como a Mão do
        Salvador cooperou no Mistério da Redenção. Neste Tempo da Paixão, ele
        mostra-nos ao pé da Cruz, onde morre o Cristo (Intr., Seq., Ev.).
      </aside>

      <Missa />
    </div>
  );
}
