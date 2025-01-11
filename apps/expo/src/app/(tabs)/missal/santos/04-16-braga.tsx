"use dom";
import { Link } from "expo-router";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0416Braga() {
  return (
    <div className="docs">
      <h1>S. Frutuoso, B., a 16 de Abril</h1>
      <aside>
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </aside>
      <h3>Oração</h3>Ó Deus, que nos fizestes chegar com júbilo até à festa
      deste dia, em que veneramos o B. Frutuoso, vosso Confessor e Pontífice,
      concedei-nos, Vos rogamos, que, assim como o acompanhamos na terra, sendo
      nosso Pastor, assim também pelas suas preces mereçamos alcançar
      indulgência nos céus. Por nosso Senhor...
      <h3>Epístola</h3>
      Lição do Livro da Sabedoria. O justo aplicará o seu coração e vigiará
      desde o romper do dia para se unir ao Senhor, que o criou, e oferecer as
      suas preces ao Altíssimo. Abrirá a sua boca para orar e implorar o perdão
      dos seus pecados, pois, se o soberano Senhor quiser, enchê-lo-á com o
      espírito da inteligência. Então ele espalhará, como chuva, as palavras da
      sua sabedoria e abençoará o Senhor na sua oração. O Senhor inspirará os
      seus conselhos e instruções, e ele penetrará nos mystérios divinos.
      Publicará a doutrina que tive: aprendido, e a sua glória será manter-se na
      lei da aliança com o Senhor. Sua sabedoria receberá louvor de muitos e não
      cairá no esquecimento. Sua memória se não apagará; o seu nome será honrado
      de geração em geração. As nações publicarão a sua sabedoria e a Igreja
      anunciará os seus louvores.
      <h3>Gradual</h3>
      Aleluia, aleluia. O Anjo do Senhor desceu do céu, e, revolvendo a pedra do
      sepulcro, assentou-se sobre ela. Aleluia. Tu és sacerdote para sempre
      segundo a ordem de Melquisedeque. Aleluia.
      <h3>Evangelho</h3>
      <LinkCard
        href="/missal/comum/10martires#evangelho"
        title="Mártires - Missa Sancti tui"
      />
      <h3>Secreta</h3>
      Permiti, ó Deus omnipotente e sempiterno, que os dons oferecidos à vossa
      majestade por intercessão do B. Frutuoso, vosso Confessor e pontífice, nos
      sirvam de perpétuo socorro. Por nosso Senhor...
      <h3>Postcomúnio</h3>Ó Deus omnipotente, Vos suplicamos, dando-Vos graças
      pelos dons já recebidos, fazei que alcancemos dons ainda maiores por
      intercessão do B. Frutuoso, vosso Confessor e Pontífice. Por nosso
      Senhor...
    </div>
  );
}
