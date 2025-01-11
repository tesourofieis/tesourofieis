"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0601() {
  return (
    <div className="docs">
      <h1>S. Ângela Merícia, Virgem, a 1 de Junho</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui novum per beátam Angelam sacrárum Virginum collégium in
          Ecclésia tua floréscere voluísti: da nobis, ejus intercessióne,
          angélicis móribus vívere; ut, terrénis ómnibus abdicátis, gáudiis
          pérfrui mereámur ætérnis. Per Dóminum...
        </p>
        <p>
          Ó Deus, que pela B. Ângela quisestes que florescesse na vossa Igreja
          uma nova associação de piedosas virgens, concedei-nos a graça, pela
          sua intercessão, de vivermos angélicamente na terra, a fim de que,
          renunciando a todas as coisas terrenas, mereçamos gozar as alegrias
          eternas. Por nosso Senhor...
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Hóstia, Dómine, quam tibi beátæ Angelæ memóriam recoléntes offérimus,
          et nostræ pravitatis véniam implóret, et grátiæ tuæ nobis dona
          concíliet. Per Dóminum...
        </p>
        <p>
          Que a hóstia, Senhor, que Vos oferecemos em honra da memória da B.
          Ângela, nos obtenha misericórdia por causa dos nossos desvarios e nos
          alcance os dons da vossa graça. Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Cœlésti alimónia refécti, súpplices te, Dómine, deprecámur: ut, beátæ
          Angelæ précibus et exémplo ab omni labe mundáti, et córpore tibi
          placeámus et mente. Per Dóminum nostrum...
        </p>
        <p>
          Havendo sido confortados com este alimento celestial, humildemente Vos
          imploramos, Senhor, que, pelas preces da B. Ângela e seguindo o seu
          exemplo, sejamos purificados de todas as manchas e Vos sejamos
          agradáveis no corpo e na alma. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
