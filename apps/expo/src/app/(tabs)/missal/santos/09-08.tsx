"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0908() {
  return (
    <div className="docs">
      <h1>Natividade da B. Virgem Maria, a 8 de Setembro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/santos/07-02">
          Missa da Visitação da B. Virgem Maria
        </Link>{" "}
        , excepto: Na Oração e Secreta substituir a palavra Visitação por
        Natividade.
      </aside>

      <h3>Epístola</h3>

      <LinkCard
        href="/missal/santos/12-08#epístola"
        title="Imaculada Conceição da B. Virgem Maria"
      />

      <h3>Evangelho</h3>

      <LinkCard href="/missal/santos/08-16#evangelho" title="S. Joaquim" />
    </div>
  );
}
