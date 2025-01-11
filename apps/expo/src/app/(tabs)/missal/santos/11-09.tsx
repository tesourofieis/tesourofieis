"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page1109() {
  return (
    <div className="docs">
      <h1>Dedicação da Basílica do Salvador, a 9 de Novembro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/25dedicacaoigreja">
          Missa Terríbilis est
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side not-content">
        <p>
          Deus, qui nos beáti Theodóri Mártyris tui confessióne gloriósa
          circúmdas et prótegis: præsta nobis ex ejus imitatióne profícere et
          oratióne fulcíri. Per Dóminum nostrum...
        </p>
        <p>
          Ó Deus, que nos guardais e protegeis pela gloriosa confissão do B.
          Teodoro, vosso Mártir, concedei-nos a graça de aproveitarmos com seus
          exemplos e de sermos auxiliados com suas orações. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side not-content">
        <p>
          Suscipe, Dómine, fidélium preces cum oblatiónibus hostiárum: et,
          intercedénte beáto Theodóro Mártyre tuo, per hæc piæ devotiónis
          offícia ad cœléstem glóriam transeámus. Per Dóminum nostrum...
        </p>
        <p>
          Recebei, Senhor, as preces dos fiéis juntamente com a oblata destas
          hóstias, a fim de que, pela intercessão do B. Teodoro, vosso Mártir,
          obtenhamos, em virtude destes mystérios de pia devoção, a graça de
          sermos conduzidos até à glória celestial. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side not-content">
        <p>
          Præsta nobis, quǽsumus, Dómine: intercedénte beáto Theodóro Mártyre
          tuo; ut, quod ore contíngimus, pura mente capiámus. Per Dóminum
          nostrum...
        </p>
        <p>
          Permiti, Senhor, pela intercessão do B. Teodoro, vosso Mártir, que
          conservemos com o coração puro o sacramento que a nossa boca recebeu.
          Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
