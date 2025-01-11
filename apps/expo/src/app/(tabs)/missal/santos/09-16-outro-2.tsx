"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0916Outro2() {
  return (
    <div className="docs">
      <h1>Santa Eufémia e Outros, Mártires, a 16 de Setembro</h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>
      Concedei aos vossos servos, Senhor, um jubiloso socorro, a fim de que,
      celebrando devotamente neste dia, em cada ano, a paixão dos vossos S. S.
      Mártires Eufémia, Lúcia e Geminiano, imitemos também a constância da sua
      fé. Por nosso Senhor...
      <h3>Evangelho</h3>
      <LinkCard
        title="Evangelho Muitos Mártires "
        href="/missal/santos/7muitosmartires2#evangelho"
      />
      <h3>Secreta</h3>
      Atendei propício aos votos do vosso povo, Senhor, Vos rogamos, e permiti
      que gozemos a protecção dos sufrágios daqueles de quem pela vossa graça
      celebramos esta solenidade. Por nosso Senhor...
      <h3>Postcomúnio</h3>
      Ouvi as nossas preces, Senhor, e permiti que sejamos protegidos
      incessantemente com os auxílios daqueles cuja solenidade celebramos. Por
      nosso Senhor...
    </div>
  );
}
