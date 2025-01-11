"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0610() {
  return (
    <div className="docs">
      <h1>S. Margarida, Rainha, Viúva, a 10 de Junho</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/24nemvirgensnemmartires">
          Missa Cognóvi, Dómine
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beátam Margarítam regínam exímia in páuperes caritáte
          inirábilem effecísti: da; ut, ejus intercessióne et exémplo, tua in
          córdibus nostris cáritas júgiter augeátur. Per Dóminum nostrum...
        </p>
        <p>
          Ó Deus, que tornastes admirável a B. Margarida, rainha, concedendo-lhe
          uma caridade extraordinária para com os pobres, permiti que, pelo seu
          exemplo e intercessão, a vossa caridade cresça continuamente nos
          nossos corações. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
