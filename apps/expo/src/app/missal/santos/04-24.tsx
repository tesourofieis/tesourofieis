"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page0424() {
  return (
    <div className="docs">
      <h1>S. Fiel de Sigmaringen, Mártir, a 24 de Abril</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beátum Fidelem, seráphico spíritus ardore succénsum, in veræ
          fídei propagatióne martýrii palma et gloriósis miráculis decoráre
          dignátus es: ejus, quǽsumus, méritis et intercessióne, ita nos per
          grátiam tuam in fide et caritáte confírma; ut in serívtio tuo fidéles
          usque ad mortem inveníri mereámur. Per Dóminum...
        </p>
        <p>
          Ó Deus, que na propagação da fé Vos dignastes ilustrar com a palma do
          martírio e com gloriosos milagres o B. Fiel, cujo coração ardia de
          amor seráfico, Vos suplicamos, pela vossa graça e pelos seus méritos e
          intercessão, que arraigueis na nossa alma de tal modo a fé e a
          caridade que mereçamos ser fiéis no vosso serviço até à morte. Por
          nosso Senhor...
        </p>
      </div>
    </div>
  );
}
