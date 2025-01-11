"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0215Portugal() {
  return (
    <div className="docs">
      <h1>Trasladação de S. António de Lisboa, a 15 de Fevereiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/santos/06-13">
          Missa de Santo António de Lisboa
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Sancti Confessórisóris tui Antónii tribue nos, Dómine, intercessióne
          adjuvári: ut cujus Translatiónem ánnua celebitáte recólimus; ejus apud
          te précibus et méritis, post hujus vitæ exsílium, ad consórtium
          transférri merámur Beatórum. Per Dóminum...
        </p>
        <p>
          Concedei-nos, Senhor, que sejamos auxiliados pela intercessão do vosso
          Santo Confessor António, a fim de que, celebrando anualmente a sua
          Trasladação, por suas preces e méritos junto de Vós, mereçamos ser
          levados, após o exílio desta vida, ao consórcio dos bem-aventurados.
          Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
