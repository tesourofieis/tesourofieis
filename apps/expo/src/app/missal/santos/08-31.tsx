"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page0831() {
  return (
    <div className="docs">
      <h1>S. Raimundo Nonato, Conf., a 31 de Agosto</h1>

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
          Deus, qui in liberándis fidélibus tuis ab impiórum captivitáte beátum
          Raymúndum Confessórem tuum mirábilem effecísti: ejus nobis
          intercessióne concéde; ut, a peccatórum vínculis absolúti, quæ tibi
          sunt plácita, líberis méntibus exsequámur. Per Dóminum...
        </p>
        <p>
          Ó Deus, que ao B. Raimundo, vosso Confessor, tornastes admirável na
          dedicação com que libertava os vossos fiéis do cativeiro dos ímpios,
          concedei-nos pela sua intercessão que, livres dos vínculos dos
          pecados, cumpramos com liberdade de espírito o que Vos é agradável.
          Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
