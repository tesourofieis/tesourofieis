"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0215() {
  return (
    <div className="docs">
      <h1>S. S. Faustino e Jovita, Mártires, a 15 de Fevereiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Secreta e Postcomúnio</h3>

      <LinkCard
        href="/missal/comum/6muitosmartires1#secreta"
        title="Muitos Mártires - Missa Intret in"
      />
    </div>
  );
}
