"use dom";
import "../../../global.css";

import React from "react";

export default function PageSinalCruz() {
  return (
    <div className="docs">
      <h2>Sinal da Cruz</h2>
      <div className="side-by-side">
        <p>
          <span className="cross text-red-500">✠</span> In nómine Patris, et
          Fílii, et Spíritus Sancti.
        </p>
        <p>
          <span className="cross text-red-500">✠</span> Em nome do Pai e do
          Filho e do Espírito Santo.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>
    </div>
  );
}
