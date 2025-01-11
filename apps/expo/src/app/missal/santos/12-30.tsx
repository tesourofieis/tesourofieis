"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page1230() {
  return (
    <div className="docs">
      <h1>Sexto dia da Oitava do Natal, a 30 de Dezembro</h1>

      <aside>
        Intróito, Oração, Gradual, Ofertório, Comúnio e Postcomúnio como na
        <Link className="link" href="/missal/santos/12-25-2">
          Terceira Missa do Natal
        </Link>{" "}
        . Epístola e Evangelho como na{" "}
        <Link className="link" href="/missal/santos/12-25-1">
          Segunda Missa do Natal
        </Link>{" "}
        .
      </aside>
    </div>
  );
}
