"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function PageAngelus() {
  return (
    <div className="docs">
      <h1>Angelus</h1>

      <aside>
        Desde a Santíssima Trindade até à Páscoa. No tempo Pascal substitui-se o
        Angelus pela{" "}
        <Link className="link" href="/devocionario/antifonas/reginacaeli">
          Regina Caeli
        </Link>{" "}
        .
      </aside>

      <div className="side-by-side">
        <p>Angelus Dómini nuntiávit Maríæ.</p>
        <p>O Anjo do Senhor anunciou a Maria.</p>
        <p>
          <span className="text-red-500">℟.</span> Et concépit de Spíritu
          Sancto.
        </p>
        <p>
          <span className="text-red-500">℟.</span> E Ela concebeu do Espírito
          Santo.
        </p>
        <p>
          ℣. Ave, María, grátia plena, Dóminus tecum; benedícta tu in
          muliéribus, et benedíctus fructus ventris tui, Jesus.
        </p>
        <p>
          ℣. Ave, Maria, Cheia de graça, o Senhor é convosco; bendita sois Vós
          entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Sancta María, Mater Dei, ora
          pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Santa Maria, Mãe de Deus,
          rogai por nós, pecadores, agora e na hora da nossa morte. Amen.
        </p>
        <p>℣. Ecce ancílla Dómini.</p>
        <p>℣. Eis a escrava do Senhor.</p>
        <p>
          <span className="text-red-500">℟.</span> Fiat mihi secúndum verbum
          tuum.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Faça-se em mim segundo a
          vossa Palavra.
        </p>
        <p>
          ℣. Ave, María, grátia plena, Dóminus tecum; benedícta tu in
          muliéribus, et benedíctus fructus ventris tui, Jesus.
        </p>
        <p>
          ℣. Ave, Maria, Cheia de graça, o Senhor é convosco; bendita sois Vós
          entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Sancta María, Mater Dei, ora
          pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Santa Maria, Mãe de Deus,
          rogai por nós, pecadores, agora e na hora da nossa morte. Amen.
        </p>
        <p>℣. Et Verbum caro factum est.</p>
        <p>℣. E o Verbo divino encarnou.</p>
        <p>
          <span className="text-red-500">℟.</span> Et habitávit in nobis.
        </p>
        <p>
          <span className="text-red-500">℟.</span> E habitou no meio de nós.
        </p>
        <p>
          ℣. Ave, María, grátia plena, Dóminus tecum; benedícta tu in
          muliéribus, et benedíctus fructus ventris tui, Jesus.
        </p>
        <p>
          ℣. Ave, Maria, Cheia de graça, o Senhor é convosco; bendita sois Vós
          entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Sancta María, Mater Dei, ora
          pro nobis peccatóribus, nunc, et in hora mortis nostræ. Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Santa Maria, Mãe de Deus,
          rogai por nós, pecadores, agora e na hora da nossa morte. Amen.
        </p>
        <p>℣. Ora pro nobis, sancta Dei Génetríx.</p>
        <p>℣. Rogai por nós Santa Mãe de Deus.</p>
        <p>
          <span className="text-red-500">℟.</span> Ut digni efficiámur
          promissionibus Christi.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Para que sejamos dignos das
          promessas de Cristo.
        </p>
        <p>
          <span className="text-red-500 text-center">Orémus.</span>
        </p>
        <p>
          <span className="text-red-500 text-center">Oremos.</span>
        </p>
        <p>
          Grátiam tuam, quǽsumus, Dómine, méntibus nostris infúnde: ut qui,
          Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus, per
          passiónem ejus et crucem ad resurrectiónis glóriam perducámur. Per
          eumdem Christum, Dóminum nostrum.{" "}
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          Infundi, Senhor, Vos suplicamos, a vossa graça em nossas almas, para
          que nós, que pela anunciação do Anjo conhecemos a Incarnação do vosso
          Filho, sejamos conduzidos à glória da ressurreição pela sua Paixão e
          Cruz. Pelo mesmo Jesus Cristo Senhor Nosso.{" "}
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>
    </div>
  );
}
