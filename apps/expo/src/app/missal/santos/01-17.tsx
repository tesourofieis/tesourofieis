"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0117() {
  return (
    <div className="docs">
      <h1>S. António, Abade, a 17 de Janeiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/16abades">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Evangelho</h3>

      <LinkCard
        href="/missal/comum/14confessoresnaopontifices1#evangelho"
        title="Confessores não Pontífices - Missa Os justi"
      />
    </div>
  );
}
