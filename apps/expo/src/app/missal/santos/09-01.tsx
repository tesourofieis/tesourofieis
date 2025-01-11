"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page0901() {
  return (
    <div className="docs">
      <h1>S. Egídio (ou Gil), Abade, a 1 de Setembro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/16abades">
          Missa Os justi
        </Link>{" "}
        . A Comemoração dos S. S. Doze Irmãos como na [Missa Comemoração dos S.
        S. Macabeus, Mártires](/missal/santos/08-01).
      </aside>
    </div>
  );
}
