"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";

export default function Page0127() {
  return (
    <div className="docs">
      <h1>S. João Crisóstomo, B. C. e Doutor, a 27 de Janeiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Ecclésiam tuam, quǽsumus, Dómine, grátia cœléstis amplíficet: quam
          beáti Joánnis Chrysóstomi Confessóris tui atque Pontíficis illustráre
          voluísti gloriósis méritis et doctrínis. Per Dóminum nostrum...
        </p>
        <p>
          Vos suplicamos, Senhor, que a graça celestial aumente a vossa Igreja,
          a qual quisestes ilustrar com os gloriosos méritos e ensinos do B.
          João Crisóstomo, vosso Confessor e Pontífice. Por nosso Senhor...
        </p>
      </div>

      <h3>Gradual</h3>

      <em>Ecl. 44, 16</em>

      <div className="side-by-side">
        <p>
          Ecce sacérdos magnus, qui in diébus suis plácuit Deo. ℣.{" "}
          <em>ibid., 20</em> Non est inventus símilis illi, qui conserváret
          legem Excélsi.
        </p>
        <p>
          Eis o grande sacerdote que nos dias da sua vida agradou a Deus. ℣.{" "}
          <em>ibid., 20</em> Ninguém o igualou na observância das leis do
          Altíssimo.
        </p>
        <p>
          Allelúja, allelúja. ℣. <em>Jac. 1, 12</em> Beátus vir, qui suffert
          tentatiónem: quóniam, cum probátus fúerit, accípiet corónam vitæ.
          Allelúja.
        </p>
        <p>
          Aleluia, aleluia. ℣. <em>Tg. 1, 12</em> Bem-aventurado o varão que
          sofre com paciência a tentação, porque, quando acabar a provação,
          alcançará a coroa da vida. Aleluia.
        </p>
      </div>
    </div>
  );
}
