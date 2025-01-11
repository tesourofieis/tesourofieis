"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page1005() {
  return (
    <div className="docs">
      <h1>S. Plácido e Comps. Mártires, a 5 de Outubro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/8muitosmartires3">
          Missa Salus autem
        </Link>{" "}
        , excepto
        <Link className="link" href="/missal/comum/7muitosmartires2#oração">
          Oração
        </Link>{" "}
        ,
        <Link className="link" href="/missal/comum/7muitosmartires2#secreta">
          Secreta
        </Link>{" "}
        e
        <Link
          className="link"
          href="/missal/comum/7muitosmartires2#postcomúnio"
        >
          Postcomúnio
        </Link>{" "}
        da [Missa Sapiéntiam sanctórum](/missal/comum/7muitosmartires2).
      </aside>
    </div>
  );
}
