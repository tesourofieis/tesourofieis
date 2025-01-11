"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page1007Outro2() {
  return (
    <div className="docs">
      <h1>S. S. Sérgio, Baco e Outros, Mártires, a 7 de Outubro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Sanctórum Martyrum tuórum nos, Dómine, Sérgii, Bacchi, Marcélli et
          Apuléji beáta mérita prosequántur: et tuo semper fáciant amóre
          fervéntes. Per Dóminum...
        </p>
        <p>
          Fazei, Senhor, que os méritos dos vossos Santos Mártires Sérgio, Baco,
          Marcelo e Apúlio nos acompanhem e nos comuniquem incessantemente o
          fervor do vosso amor. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Majestátem tuam nobis, Dómine, quǽsumus, hæc hóstia reddat immolánda
          placátam, tuórum digna postulatióne Sanctórum. Per Dóminum...
        </p>
        <p>
          Que esta hóstia, que vai ser imolada em vosso louvor, Vos rogamos,
          Senhor, possa pelas dignas preces dos vossos Santos aplacar a vossa
          majestade. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Sacraméntis, Dómine, muniámur accéptis: et sanctórum Mártyrum tuórum
          Sérgii, Bacchi, Marcélli et Apuléji intercessióne, contra omnes
          nequítias irruéntes, annis cœléstibus protegámur. Per Dóminum...
        </p>
        <p>
          Que os sacramentos que recebemos, Senhor, nos confortem; e que pela
          intercessão dos vossos Santos Sérgio, Baco, Marcelo e Apúlio sejamos
          fortalecidos com as armas celestiais e defendidos contra todos os
          ataques dos espíritos malignos. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
