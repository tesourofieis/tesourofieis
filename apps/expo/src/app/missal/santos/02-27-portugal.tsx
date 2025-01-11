"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page0227Portugal() {
  return (
    <div className="docs">
      <h1>S. Torquato, Bispo e Mártir, a 27 de Fevereiro</h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>
      Dignai-Vos ouvir clementemente, Senhor, as preces do vosso povo, a fim de
      que sejamos auxiliados pelos méritos do B. Torquato, vosso Mártir e
      Pontífice, em cujo martírio nos alegramos. Por nosso Senhor...
    </div>
  );
}
