"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page0214() {
  return (
    <div className="docs">
      <h1>S. Valentim, Presbítero e Mártir, a 14 de Fevereiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/4martirnaopontifice1">
          Missa In virtúte tua
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Præsta, quǽsumus, omnípotens Deus: ut, qui beáti Valentíni Mártyris
          tui natalítia cólimus, a cunctis malis imminéntibus, ejus
          intercessióne, liberémur. Per Dóminum nostrum...
        </p>
        <p>
          Concedei-nos, Vos suplicamos, ó Deus omnipotente, que, celebrando o
          natal do B. Valentim, vosso Mártir, sejamos livres por sua intercessão
          de todos os males que nos ameaçam. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Súscipe, quǽsumus, Dómine, múnera dignánter obláta: et, beáti
          Valentini Mártyris tui suffragántibus méritis, ad nostræ salútis
          auxílium proveníre concéde. Per Dóminum...
        </p>
        <p>
          Recebei, Vos suplicamos, Senhor, os dons que devidamente Vos
          oferecemos; e pelos méritos e sufrágios do B. Valentim, vosso Mártir,
          concedei-nos que nos sirvam de auxílio para a salvação. Por nosso
          Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Sit nobis, Dómine, reparátio mentis et córporis cœléste mystérium: ut,
          cujus exséquimur actiónem, intercedénte beáto Valentíno Mártyre tuo,
          sentiámus efféctum. Per Dóminum...
        </p>
        <p>
          Que estes celestiais mystérios, Senhor, restaurem a nossa alma e o
          nosso corpo, a fim de que, por intercessão do B. Valentim, vosso
          Mártir, sintamos os efeitos do sacrifício que celebrámos. Por nosso
          Senhor...
        </p>
      </div>
    </div>
  );
}
