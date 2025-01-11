"use dom";
import "../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page1205Braga() {
  return (
    <div className="docs">
      <h1>
        S. Geraldo, Bispo e Conf., a 5 de Dezembro, Na Arquidiocese de Braga
      </h1>
      <h3>Intróito</h3>
      <div className="side-by-side">
        <p>℣. Gloria Patri...</p>
        <p>
          Um ínclito Confessor de Deus, lustre muito esplendoroso ante o Senhor,
          pérola e modelo dos Prelados, hoje coroado, com o qual as celestiais
          coortes rejubilam, entra nos céus, onde sem fim reina com Cristo. Ó
          justos, exultai no Senhor: àqueles que têm o coração recto fica bem a
          glória. ℣. Glória ao Pai...
        </p>
      </div>
      <h3>Oração</h3>Ó Senhor, Vos suplicamos, que os preciosos méritos do B.
      Geraldo, vosso Confessor e Pontífice, nos defendam; e que por suas preces
      seja bem dirigida a Igreja. Por nosso Senhor...
      <h3>Epístola</h3>
      <LinkCard
        href="/missal/comum/10martires#epístola"
        title="Mártires - Missa Sancti tui"
      />
      <h3>Gradual</h3>
      <div className="side-by-side">
        <p>
          Veneremos devotadamente, do íntimo do coração e da alma, a veneranda
          festividade de hoje, em que o B. Geraldo, Confessor de Cristo, passou
          alegre deste mundo para os céus. Por isso o B. Geraldo, acabado o
          tempo da sua vida, é alistado nos exércitos celestiais.
        </p>
        <p>
          Aleluia, aleluia. Geraldo foi esse servo do Senhor que, lutando à hora
          da sua morte com o demónio, o venceu. Aleluia.
        </p>
      </div>
      <h3>Evangelho</h3>
      <LinkCard
        href="/missal/comum/14confessoresnaopontifices1#evangelho"
        title="Confessores não Pontífices - Missa Os justi"
      />
      <h3>Ofertório</h3>
      Alegra-te, cidade de Braga, com tão excelso Padroeiro, o qual permitiu
      Deus que fosse sepultado dentro dos teus muros. Por seu intermédio
      obtiveste de Deus milagres inumeráveis.
      <h3>Secreta</h3>
      Seja aceite na vossa presença, ó Senhor, a oblação do vosso fiel povo e
      permiti que lhe seja salutar, por intercessão do B. Geraldo, vosso
      Confessor e Pontífice, em cuja solenidade ela Vos é oferecida. Por nosso
      Senhor...
      <h3>Comúnio</h3>Ó quão glorioso é este Confessor de Deus, com o qual no
      céu exultam os exércitos dos Santos!
      <h3>Postcomúnio</h3>Ó Deus, remunerador das almas fiéis, concedei-nos a
      graça de alcançarmos o perdão por intermédio das preces do B. Geraldo,
      vosso Confessor e Pontífice, cuja veneranda festividade hoje celebramos.
      Por nosso Senhor...
    </div>
  );
}
