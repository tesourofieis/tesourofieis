"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page1212Porto() {
  return (
    <div className="docs">
      <h1>
        Trasladação de S. Pantaleão, a 12 de Dezembro, Na cidade do Porto e
        subúrbios
      </h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>Ó Deus, que quiseste que o corpo do vosso glorioso Mártir
      Pantaleão fosse trasladado até nós e que esta cidade seja defendida com
      seu patrocínio, concedei-nos benigno, Vos suplicamos, que pelas suas
      preces e méritos sejamos trasladados após esta vida à bem-aventurança
      eterna. Por nosso Senhor...
    </div>
  );
}
