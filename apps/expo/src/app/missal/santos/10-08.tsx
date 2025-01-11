"use dom";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1008() {
  return (
    <div className="docs">
      <h1>Santa Brígida, Viúva, a 8 de Outubro</h1>

      <aside>
        Como na{" "}
        <a className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </a>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Dómine, Deus noster, qui beátæ Birgíttæ per Fílium tuum unigénitum
          secreta cœléstia revelásti: ipsíus pia intercessióne da nobis, fámulis
          tuis; in revelatióne sempitérna glóriæ tuæ gaudére lætántes. Per
          eúndem Dóminum nostrum...
        </p>
        <p>
          Senhor, nosso Deus, que pelo vosso Unigénito Filho revelastes os
          segredos celestiais à B. Brígida, concedei-nos, já que somos vossos
          servos, que nos alegremos na felicidade da contemplação da vossa
          eterna glória. Por nosso Senhor...
        </p>
      </div>

      <h3>Epístola</h3>

      <LinkCard
        href="/missal/santos/05-04#epístola"
        title="Santa Mónica, Viúva"
      />
    </div>
  );
}
