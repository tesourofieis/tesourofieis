"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page1013() {
  return (
    <div className="docs">
      <h1>S. Eduardo, Conf., a 13 de Outubro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beátum regem Eduárdum Confessórem tuum æternitátis glória
          coronásti: fac nos, quǽsumus; ita eum venerári in terris, ut cum eo
          regnáre póssimus in cœlis. Per Dóminum...
        </p>
        <p>
          Ó Deus, que coroastes com a glória eterna o B. Rei Eduardo, vosso
          Confessor, fazei, Vos suplicamos, que o veneremos de tal modo na terra
          que com ele possamos reinar no céu. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
