"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0423() {
  return (
    <div className="docs">
      <h1>S. Jorge, Patrono de Portugal, a 23 de Abril</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui nos beáti Georgii Martyris tui méritis et intercessióne
          lætíficas: concéde propítius; ut, qui tua per eum benefícia póscimus,
          dono tuæ grátiæ consequámur. Per Dóminum...
        </p>
        <p>
          Ó Deus, que nos alegrais com os méritos e intercessão do B. Jorge,
          vosso Mártir, concedei-nos propício que, suplicando-Vos por sua
          intercessão os vossos benefícios, os obtenhamos por efeito da vossa
          graça. Por nosso Senhor...
        </p>
      </div>

      <h3>Epístola</h3>

      <LinkCard
        href="/missal/comum/5martirnaopontifice2#epístola"
        title="Mártir não Pontífice - Missa Lætábitur justus"
      />

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Múnera, Dómine, obláta sanctífica: et, intercedénte beáto Geórgio
          Mártyre tuo, nos per hæc a peccatórum nostrórum máculis emúnda. Per
          Dóminum...
        </p>
        <p>
          Santificai, Senhor, estas oblatas que Vos são oferecidas; e pela
          intercessão do B. Jorge, vosso Mártir, purificai-nos, pela sua
          virtude, das manchas dos nossos pecados. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Súpplices te rogámus, omnípotens Deus: ut, quos tuis réficis
          sacraméntis, intercedénte beáto Geórgio Mártyre tuo, tibi étiam
          plácitis móribus dignánter tríbuas deservíre. Per Dóminum...
        </p>
        <p>
          Ó Deus omnipotente, Vos imploramos, pela intercessão do B. Jorge,
          vosso Mártir, dignai-Vos conceder àqueles a quem sustentais com vossos
          sacramentos a graça de Vos servirem, como convém, com conduta de vida
          que Vos agrade. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
