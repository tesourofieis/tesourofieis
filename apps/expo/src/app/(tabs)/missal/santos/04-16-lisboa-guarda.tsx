"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0416LisboaGuarda() {
  return (
    <div className="docs">
      <h1>S. Engrácia, Virgem e Mártir, a 16 de Abril</h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Loquébar
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>Ó Deus omnipotente e sempiterno, que escolheis os fracos do
      mundo para com eles confundirdes os poderosos, a nós, que celebramos esta
      solenidade em honra da B. Engrácia, vossa Virgem e Mártir, concedei
      propício que junto de Vós sintamos o seu patrocínio. Por nosso Senhor...
    </div>
  );
}
