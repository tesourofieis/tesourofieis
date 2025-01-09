"use dom";
import "../../../../global.css";

import React from "react";

export default function PageCoroacaopapa() {
  return (
    <div className="docs">
      <h1>No dia da Coroação do Sumo Pontífice e Aniversário da Coroação</h1>

      <aside>
        Como na{" "}
        <a className="link" href="/missal/santos/02-22">
          Missa da Cadeira de S. Pedro em Roma
        </a>{" "}
        , excepto: Oração, Secreta e Postcomúnio como na [Missa Si díligis
        me](/missal/comum/sumospontifices). No Tempo Pascal, em vez do Gradual e
        do Trato, diz-se:
      </aside>

      <div className="side-by-side">
        <p>
          Allelúja, allelúja. ℣. <em>Ps. 106, 8</em> Confitébitur Dómino
          misericórdiæ ejus, et mirabília ejus fíliis hóminum. Allelúja. ℣.{" "}
          <em>Matth. 16, 18</em> Tu es Petrus, et super hanc petram ædificábo
          Ecclésiam meam. Allelúja.
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>Sl. 106, 8</em> Seja o Senhor glorificado por
          causa da misericórdia e das maravilhas que praticou em favor dos
          homens. Aleluia. ℣. <em>Mt. 16, 18</em> Tu és Pedro, e sobre esta
          pedra edificarei a minha Igreja.
        </p>
      </div>
    </div>
  );
}
