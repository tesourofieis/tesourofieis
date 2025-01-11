"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0114Outro() {
  return (
    <div className="docs">
      <h1>S. Félix, Presb. e Márt., a 14 de Janeiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/5martirnaopontifice2">
          Missa Lætábitur justus
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Concéde, quǽsumus, quaténus, quorum sollémnia ágimus, étiam actus
          imitémur. Per Dóminum...
        </p>
        <p>
          Concedei-nos, ó omnipotente Deus, que os exemplos dos vossos Santos
          nos incitem a uma vida melhor, de que modo que imitemos também as
          acções daquele cuja solenidade celebramos. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Hóstias tibi, Dómine, beáti Félicis Mártyris tui dicátas méritis,
          benígnus assúme: et ad perpétuum nobis tríbue proveníre subsídium. Per
          Dóminum...
        </p>
        <p>
          Aceitai benignamente, Senhor, as hóstias que Vos oferecemos em honra
          dos méritos do B. Félix, vosso Mártir, e permiti que nos alcancem o
          vosso perpétuo auxílio. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Quǽsumus, Dómine, salutáribus repléti mystériis: ut, beáti Félicis
          Mártyris tui, cujus sollémnia celebrámus, oratiónibus adjuvémur. Per
          Dóminum...
        </p>
        <p>
          Havendo sido saciados com os salutares dons, dignai-Vos conceder-nos,
          Senhor, que sejamos auxiliados pelas orações do vosso B. Mártir Félix,
          cuja solenidade celebrámos. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
