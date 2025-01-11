"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0504Portugal() {
  return (
    <div className="docs">
      <h1>Trasl. das Relíquias de S. Vicente, a 4 de Maio, Nalguns lugares</h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>
      Que a fé da ressurreição, Senhor, cresça em nós em virtude das maravilhas
      que operais pelas Relíquias do vosso Santo Mártir Vicente; e fazei que
      alcancemos a glória imortal, de que estas cinzas, que veneramos, nos
      servem de penhor. Por nosso Senhor...
    </div>
  );
}
