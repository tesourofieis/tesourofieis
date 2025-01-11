"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0527() {
  return (
    <div className="docs">
      <h1>S. Beda, Conf. e Doutor, a 27 de Maio</h1>

      <aside>
        Beda, nascido em Jarrow, no Nortúmbria, desde a mais tenra idade foi
        confiado a S. Bento Biscopo, abade do Mosteiro benedictino de Wearmouth,
        tornando-se também filho do grande Patriarca dos monges do Ocidente.
      </aside>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui Ecclésiam tuam beáti Bedæ Confessóris tui atque Doctóris
          eruditióne claríficas: concéde propítius fámulis tuis; ejus semper
          ilustrári sapiéntia et méritis adjuvári. Per Dóminum...
        </p>
        <p>
          Ó Deus, que ilustrais a vossa Igreja com a erudição do B. Beda, vosso
          Confessor e Doutor, concedei propício aos vossos servos que sejam
          sempre ilustrados pela sua doutrina e socorridos pelos seus méritos.
          Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
