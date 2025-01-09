"use dom";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0919() {
  return (
    <div className="docs">
      <h1>S. Januário e Outros, Mártires, a 19 de Setembro</h1>

      <aside>
        Como na{" "}
        <a className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </a>{" "}
        , excepto:
      </aside>

      <h3>Evangelho</h3>

      <LinkCard
        href="/missal/comum/8muitosmartires3#evangelho2"
        title="Muitos Mártires - Missa Salus autem"
      />
    </div>
  );
}
