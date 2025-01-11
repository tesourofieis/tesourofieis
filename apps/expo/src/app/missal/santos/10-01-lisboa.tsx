"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1001Lisboa() {
  return (
    <div className="docs">
      <h1>
        S. Veríssimo e Outros, Mártires, a 1 de Outubro, No Patriarcado de
        Lisboa
      </h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>Ó Deus, que permitistes assistíssemos a esta festa dos
      vossos Santos Mártires Veríssimo, Máximo e Júlia, concedei-nos, Vos
      suplicamos, que, celebrando o seu nascimento no céu, nos enchamos de zelo
      com seus exemplos. Por nosso Senhor...
      <h3>Gradual</h3>
      Deus é glorioso em seus Santos, e admirável na sua majestade, praticando
      prodígios. Senhor, a vossa dextra engrandeceu-se pela sua força: a vossa
      dextra esmagou os inimigos. Aleluia, aleluia. Esta é a verdadeira
      fraternidade» que venceu os crimes do mundo. Ela seguiu Cristo: Pelo que
      goza a glória do reino celestial. Aleluia.
      <h3>Secreta e Postcomúnio</h3>
      <LinkCard
        href="/missal/comum/7muitosmartires2#secreta"
        title="Muitos Mártires - Missa Sapiéntiam sanctórum"
      />
    </div>
  );
}
