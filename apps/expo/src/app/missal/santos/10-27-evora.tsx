"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page1027Evora() {
  return (
    <div className="docs">
      <h1>
        S. S. Vicente, Sabina e Cristeta, Márts, a 27 de Outubro, Na
        Arquidiocese de Évora
      </h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>Ó Deus, que aos três beatíssimos Irmãos vossos Mártires
      Vicente, Sabina e Cristeta, já unidos em amor fraternal, ainda mais os
      unistes pelo martírio na confissão da divina Trindade, concedei-nos por
      sua intercessão que pratiquemos o verdadeiro amor e sempre nos mantenhamos
      na unidade da Fé. Por nosso Senhor...
      <h3>Gradual</h3>A nossa alma livrou-se, como um pássaro do laço dos
      caçadores; O laço quebrou-se e ficámos livres: o nosso auxílio está no
      nome do Senhor: que criou o céu e a terra. Aleluia, aleluia. Eis a
      verdadeira fraternidade que venceu os perigos do mundo. Ela seguiu Cristo
      e possuirá com glória o reino celestial. Aleluia.
    </div>
  );
}
