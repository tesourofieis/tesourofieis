"use dom";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1106Portugal() {
  return (
    <div className="docs">
      <h1>S. Nuno de Santa Maria, a 6 de Novembro</h1>

      <aside>
        Como na{" "}
        <a className="link" href="/missal/comum/14confessoresnaopontifices">
          Missa Os justi
        </a>{" "}
        , excepto:
      </aside>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beáto Nónio bonum certámen certáre dedísti, eúmque sui ac
          mundi contemptórem exímium effecísti: concéde nobis fámulis tuis; ut,
          devíctis mundi cupiditátibus, in cælésti pátri perpétuo gaudeámus. Per
          Dóminum...
        </p>
        <p>
          Ó Deus, que permitistes ao B. Nuno «combater o bom combate» e o
          tornastes num exímio dominador de si e do mundo, a nós, que somos
          vossos servos, concedei-nos que, depois de havermos vencido as cobiças
          do mundo, nos alegremos perpetuamente na pátria celestial. Por nosso
          Senhor...
        </p>
      </div>

      <h3>Epístola</h3>

      <LinkCard
        href="/missal/comum/16abades#epístola"
        title="Abades - Missa Os justi"
      />

      <h3>Evangelho</h3>

      <LinkCard
        href="/missal/comum/16abades#evangelho"
        title="Abades - Missa Os justi"
      />

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Tuórum mílitum, Rex omnípotens, virtútem corróborat; ut, quos in hujus
          mortalitátis stádio, beáti Nónii Confessóris tui vita præclára
          lætíficat: consummáto cursu certámis, per hæc quæ offérimus,
          immortalitátis bravíum comprehéndant. Per Dóminum...
        </p>
        <p>
          Ó Rei omnipotente, corroborai o valor dos vossos soldados, para que
          aqueles que nesta arena mortal se alegram com a preclara vida do B.
          Nuno, vosso Confessor, terminado o tempo do combate, alcancem,
          mediante esta hóstia, que Vos oferecemos, o prémio da imortalidade.
          Por nosso Senhor...
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Súpplices te rogámus, omnípotens Deus: ut, quos tuis réficis
          sacraméntis; intercedénte Beáto Nónio Confessóre tuo, tríbuas ab
          hóstium insídiis júgiter liberári, et contra ómnia advérsa contínua
          protectióne muníri. Per Dóminum...
        </p>
        <p>
          Ó omnipotente Deus, humildemente Vos rogamos que àqueles que foram
          alimentados com vossos sacramentos Vos digneis conceder, por
          intercessão do B. Nuno, vosso Confessor, sejam sempre livres das
          insídias dos seus inimigos e pela contínua protecção do mesmo sejam
          fortalecidos contra todas as adversidades. Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
