"use dom";
import "../../global.css";

import React from "react";
import Salmo94 from "./../devocionario/salterio/094";

export default function PageOficiodefuntos() {
  return (
    <div className="docs">
      <h1>Ofício dos Defuntos</h1>

      <aside>
        Rezar{" "}
        <a className="link" href="/devocionario/oracoes/painosso">
          Pai-nosso
        </a>{" "}
        ;
        <a className="link" href="/devocionario/oracoes/avemaria">
          Ave-Maria
        </a>{" "}
        ; [Creio em Deus](/devocionario/oracoes/simboloapostolos).
      </aside>

      <h2>Invitatório</h2>

      <div className="side-by-side">
        <p>Regem, cui ómnia vivunt, Veníte adorémus.</p>
        <p>Vinde, adoremos o Rei para quem todas as criatura vivem.</p>
        <p>Regem, cui ómnia vivunt, Veníte adorémus.</p>
        <p>Vinde, adoremos o Rei para quem todas as criatura vivem.</p>
      </div>

      <h2>Salmo 94</h2>

      <Salmo94 />

      <div className="side-by-side">
        <p>Veníte, exsultémus Dómino: * jubilémus Deo salutári nostro:</p>
        <p>
          Vinde, exultemos no Senhor: * cantemos alegres a de Deus nosso
          salvador:
        </p>
        <p>
          Præoccupémus fáciem ejus in confessióne: * et in psalmis jubilémus ei.
        </p>
        <p>
          Apresentemo-nos diante d’Ele em acção de graças: * e celebremo-l’O com
          salmos.
        </p>
      </div>

      <div className="side-by-side">
        <p>Regem, cui ómnia vivunt, Veníte adorémus.</p>
        <p>Vinde, adoremos o Rei para quem todas as criatura vivem.</p>
      </div>
    </div>
  );
}
