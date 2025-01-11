"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0301Braga() {
  return (
    <div className="docs">
      <h1>
        B. Miguel de Carvalho e Outros, Márts., a 1 de Março, Na Arquidiocese de
        Braga
      </h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/7muitosmartires2">
          Missa Sapiéntiam sanctórum
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>
      Senhor, que os vossos B. B. Miguel e seus Companheiros nos confortem com
      sua preciosa profissão de fé; e que pela sua piedosa intercessão sejamos
      continuamente favorecidos. Por nosso Senhor...
    </div>
  );
}
