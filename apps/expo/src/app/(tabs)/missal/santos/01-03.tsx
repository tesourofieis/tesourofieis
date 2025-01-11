"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0103() {
  return (
    <div className="docs">
      <h1>Oitava de S. João, Apóstolo e Evangelista, a 3 de Janeiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/santos/12-27">
          Missa S. João, Apóstolo e Evangelista
        </Link>
      </aside>
    </div>
  );
}
