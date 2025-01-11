"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0727Outro() {
  return (
    <div className="docs">
      <h1>B. Rodolfo Água-Viva e Outros, Márts, a 27 de Julho</h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>
      Vos pedimos, permiti que a veneranda oblação dos vossos B. B. Mártires
      Rodolfo, Afonso, Pedro, António e Francisco Vos recomende as nossas
      orações, a fim de que, pelo seu exemplo e intercessão, também nos
      imolemos, como hóstia viva por Vós recebida, em honra do vosso santo nome.
      Por nosso Senhor...
    </div>
  );
}
