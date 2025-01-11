"use dom";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page19Muitasvirgensmartires() {
  return (
    <div className="docs">
      <h1>Muitas Virgens Mártires</h1>

      <aside>
        Como na{" "}
        <a className="link" href="/missal/comum/18virgensmartires2">
          Missa Me exspectavérunt
        </a>{" "}
        , excepto o seguinte:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Da nobis, quǽsumus, Dómine, Deus noster, sanctárum Vírginum et
          Mártyrum tuárum <span className="text-red-500">N.</span> et{" "}
          <span className="text-red-500">N.</span> palmas incessábili devotióne
          venerári: ut, quas digna mente non póssumus celebráre, humílibus
          saltem frequentémus obséquiis. Per Dóminum nostrum...
        </p>
        <p>
          Ó Senhor, nosso Deus, dignai-Vos conceder-nos a graça de
          incessantemente venerarmos com devoção a vitória das vossas santas
          Virgens e Mártires <span className="text-red-500">N.</span>e{" "}
          <span className="text-red-500">N.</span>, a fim de que, já que não
          podemos celebrar dignamente os seus méritos, ao menos possamos
          oferecer-lhes as nossas humildes homenagens. Por nosso Senhor...
        </p>
      </div>

      <h3>Epístola</h3>

      <LinkCard
        title="Epístola Virgens Mártires"
        href="/missal/comum/21virgemnaomartir2#epístola"
      />

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Inténde, quǽsumus, Dómine, múnera altáribus tuis pro sanctárum
          Vírginum et Mártyrum tuárum <span className="text-red-500">N.</span>{" "}
          et <span className="text-red-500">N.</span> festivitáte propósita: ut,
          sicut per hæc beáta mystéria illis glóriam contulísti; ita nobis
          indulgéntiam largiáris. Per Dóminum...
        </p>
        <p>
          Senhor, dignai-Vos volver os vossos olhares para estas ofertas que
          depositamos nos vossos altares para celebrar a festa das vossas santas
          Virgens e Mártires <span className="text-red-500">N.</span> e{" "}
          <span className="text-red-500">N.</span>, a fim de que, assim como
          lhes concedestes a glória, assim também nos concedais o perdão dos
          nossos pecados. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Præsta nobis, quǽsumus, Dómine, intercedéntibus sanctis Virgínibus et
          Martýribus tuis <span className="text-red-500">N.</span> et{" "}
          <span className="text-red-500">N.</span>: ut, quod ore contíngimus,
          pura mente capiámus. Per Dóminum...
        </p>
        <p>
          Concedei-nos, Senhor, Vos suplicamos, que, por intercessão das vossas
          santas Virgens e Mártires <span className="text-red-500">N.</span> e{" "}
          <span className="text-red-500">N.</span>, guardemos com o coração puro
          o que nossa boca acaba de receber. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
