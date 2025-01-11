"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page23Muitasmartiresnaovirgens() {
  return (
    <div className="docs">
      <h1>Muitas Mártires não Virgens</h1>

      <aside>
        Como a{" "}
        <Link className="link" href="/missal/comum/22martiresnaovirgens">
          Missa Me exspectavérunt
        </Link>{" "}
        , excepto o seguinte:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Da nobis, quǽsumus, Dómine, Deus noster, sanctárum Mártyrum tuárum{" "}
          <span className="text-red-500">N.</span> et{" "}
          <span className="text-red-500">N.</span> palmas incessábili devotióne
          venerári: ut, quas digna mente non póssumus celebráre, humílibus
          saltem frequentémus obséquiis. Per Dóminum nostrum...
        </p>
        <p>
          Ó Senhor, nosso Deus, dignai-Vos conceder-nos a graça de
          incessantemente venerarmos com devoção a vitória das vossas santas
          Mártires <span className="text-red-500">N.</span> e{" "}
          <span className="text-red-500">N.</span>, a fim de que, já que não
          podemos celebrar dignamente os seus méritos, possamos, ao menos,
          oferecer-lhes as nossas humildes homenagens. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Inténde, quǽsumus, Dómine, múnera altáribus tuis pro sanctárum
          Mártyrum tuárum <span className="text-red-500">N.</span> et{" "}
          <span className="text-red-500">N.</span> festivitáte propósita: ut,
          sicut per hæc beáta mystéria illis glóriam contulísti; ita nobis
          indulgéntiam largiáris. Per Dóminum...
        </p>
        <p>
          Senhor, dignai-Vos volver os olhares para estas ofertas, que
          depositamos nos vossos altares para comemorar a festa das vossas
          santas Mártires <span className="text-red-500">N.</span> e
          <span className="text-red-500">N.</span>, a fim de que, assim como
          lhes concedestes a glória, assim também nos concedais o perdão dos
          nossos pecados. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Præsta nobis, quǽsumus, Dómine, intercedéntibus sanctis Martýribus
          tuis <span className="text-red-500">N.</span> et{" "}
          <span className="text-red-500">N.</span>: ut, quod ore contíngimus,
          pura mente capiámus. Per Dóminum...
        </p>
        <p>
          Concedei-nos, Senhor, Vos suplicamos, que, por intercessão das vossas
          santas Mártires <span className="text-red-500">N.</span> e{" "}
          <span className="text-red-500">N.</span>, guardemos com o coração puro
          o que a nossa boca acaba de receber. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
