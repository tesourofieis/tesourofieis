"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0809Outro2() {
  return (
    <div className="docs">
      <h1>S. Romão, Mártir, a 9 de Agosto</h1>

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
          Præsta, quǽsumus, omnípotens Deus: ut, intercedénte beáto Románo
          Mártyre tuo, et a cunctis adversitátibus liberémur in córpore, et a
          pravis cogitatiónibus mundémur in mente. Per Dóminum nostrum...
        </p>
        <p>
          Fazei, ó Deus omnipotente, Vos rogamos, que pela intercessão do B.
          Romão, vosso Mártir, o nosso corpo seja livre de todas as adversidades
          e a nossa alma purificada dos maus pensamentos. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Munéribus nostris, quǽsumus, Dómine, precibúsque suscéptis: et
          cœléstibus nos munda mysteriis, et cleménter exáudi. Per Dóminum...
        </p>
        <p>
          Havendo Vós, Senhor, aceitado as nossas ofertas e orações, dignai-Vos
          purificar-nos com vossos celestiais mystérios e ouvir-nos
          benignamente. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Quǽsumus, omnípotens Deus: ut, qui cœlestia aliménta percépimus,
          intercedénte beáto Románo Mártyre tuo, per hæc contra ómnia advérsa
          muniámur. Per Dóminum nostrum...
        </p>
        <p>
          Vos suplicamos, ó omnipotente Deus, pela intercessão do B. Romão,
          vosso Mártir, que, havendo nós recebido os alimentos celestiais,
          sejamos, em virtude deles, fortalecidos contra todas as adversidades.
          Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
