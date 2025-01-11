"use dom";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1121() {
  return (
    <div className="docs">
      <h1>Apresentação da B. Virgem Maria, a 21 de Novembro</h1>

      <aside>
        Como na [Missa Salve, sancta Parens da Virgem
        Maria](/missal/comum/29missamaria3), excepto:
      </aside>

      <LinkCard
        href="/missal/comum/26festasmaria1"
        title="Festas da B. Virgem Maria - Missa Salve, sancta Parens"
      />

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beátam Maríam semper Vírginem, Spíritus Sancti habitáculum,
          hodiérna die in templo præsentári voluísti: præsta, quǽsumus; ut, ejus
          intercessióne, in templo glóriæ tuæ præsentári mereámur. Per
          Dóminum...
        </p>
        <p>
          Ó Deus, que quisestes que a B. Virgem Maria, em quem habitava o
          Espírito Santo, fosse neste dia apresentada no templo, permiti pela
          sua intercessão que mereçamos ser apresentados no templo da vossa
          glória. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
