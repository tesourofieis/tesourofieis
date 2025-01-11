"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0523() {
  return (
    <div className="docs">
      <h1>S. Basileu, B. e Mártir, a 23 de Maio, Na Diocese do Porto</h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>
      Dignai-Vos acolher em vossa clemência, Senhor, Vos suplicamos, as preces
      do vosso povo, a fim de que sejamos auxiliados pelos méritos do B.
      Basileu, vosso Mártir e Pontífice, que nos conforta com a recordação dos
      seus sofrimentos. Por nosso Senhor...
      <h3>Secreta</h3>
      Recebei, Senhor, os dons que devidamente Vos oferecemos; e, tendo Vós em
      atenção os méritos do B. Basileu, vosso Mártir e Pontífice, permiti que
      nos sirvam de auxílio para alcançarmos a salvação. Por nosso Senhor...
      <h3>Postcomúnio</h3>
      Havendo Vós, Senhor, saciado a vossa família com os sacrossantos dons,
      confortai-nos constantemente, Vos suplicamos, com a intercessão daquele
      cuja solenidade celebramos. Por nosso Senhor...
    </div>
  );
}
