"use dom";
import { Link } from "expo-router";
import "../../../global.css";

import React from "react";

export default function Page0206() {
  return (
    <div className="docs">
      <h1>S. Tito, B. e Conf., a 6 de Fevereiro</h1>

      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beátum Titum Confessórem tuum atque Pontíficem apostólicis
          virtútibus decorásti: ejus méritis et intercessióne concéde; ut, juste
          et pie vivéntes in hoc sǽculo, ad cœléstem pátriam perveníre mereámur.
          Per Dóminum...
        </p>
        <p>
          Ó Deus, que ornastes o B. Tito, vosso Confessor e Pontífice, com as
          virtudes apostólicas, concedei-nos, pelos seus méritos e intercessão,
          que vivendo neste mundo justa e piamente, mereçamos alcançar a pátria
          celestial. Por nosso Senhor...
        </p>
      </div>

      <h3>Evangelho</h3>

      <em>Lc. 10, 1-9</em>

      <div className="side-by-side">
        <p>
          <span className="cross text-red-500">✠</span> Sequéntia sancti
          Evangélii secúndum Lucam.
        </p>
        <p>
          <span className="cross text-red-500">✠</span> Continuação do santo
          Evangelho segundo S. Lucas.
        </p>
        <p>
          In illo témpore: Designávit Dóminus et álios septuagínta duos: et
          misit illos binos ante fáciem suam in omnem civitátem et locum, quo
          erat ipse ventúrus. Et dicebat illis: Messis quidem multa, operárii
          autem pauci. Rogáte ergo Dóminum messis, ut mittat operários in messem
          suam. Ite: ecce, ego mitto vos sicut agnos inter lupos. Nolíte portáre
          sǽculum neque peram neque calceaménta; et néminem per viam
          salutavéritis. In quamcúmque domum intravéritis, primum dícite: Pax
          huic dómui: et si ibi fúerit fílius pacis, requiéscet super illum pax
          vestra: sin autem, ad vos revertátur. In eádem autem domo manéte,
          edéntes et bibéntes quæ apud illos sunt: dignus est enim operárius
          mercéde sua. Nolíte transíre de domo in domum. Et in quamcúmque
          civitátem intravéritis, et suscéperint vos, manducáte quæ apponúntur
          vobis: et curáte infírmos, qui in illa sunt, et dícite illis:
          Appropinquávit in vos regnum Dei.
        </p>
        <p>
          Naquele tempo, escolheu o Senhor ainda setenta e dois discípulos e
          mandou-os, dois a dois, adiante d’Ele, a todas as cidades e lugares
          onde devia ir, dizendo-lhes: «A messe é abundante, mas os operários
          são poucos; pedi, pois ao Senhor da messe que mande mais operários
          para a messe. Ide; eis que vos envio como cordeiros para o meio dos
          lobos; não leveis bolsa, nem saco, nem saudeis ninguém pelo caminho.
          Em qualquer casa em que entrardes, dizei em primeiro lugar: «A paz
          esteja nesta casa»! Se aí houver um filho da paz, a vossa paz
          repousará nele; e, se não um houver, voltará para vós. Permanecei na
          mesma casa e comei e bebei do que houver nessa casa, pois o operário
          merece salário. Não transiteis de casa para casa. Em qualquer casa em
          que entrardes e vos receberem comei do que vos derem, curai os
          enfermos que aí houver, e dizei-lhes: «Eis que se aproxima o reino de
          Deus».
        </p>
      </div>
    </div>
  );
}
