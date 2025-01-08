"use dom";

import "../../../global.css";

import React from "react";
import PaiNosso from "./oracoes/painosso";
import AveMaria from "./oracoes/avemaria";
import Gloria from "./oracoes/gloria";
import LadainhaLoreto from "./ladainhas/loreto";

export default function PageRosario() {
  return (
    <div className="docs">
      <h1 className="h1 text-4xl">Rosário</h1>
      <h1>Sinal da Cruz</h1>
      <div className="side-by-side">
        <p>
          <span className="cross text-red-500">✠</span> In nómine Patris, et
          Fílii, et Spíritus Sancti.
        </p>
        <p>
          <span className="cross text-red-500">✠</span> Em nome do Pai e do
          Filho e do Espírito Santo.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>
      <h1>No Crucifixo</h1>
      <h2>Símbolo dos Apóstolos</h2>
      <div className="side-by-side not-content">
        <p>
          Credo in Deum, Patrem omnipoténtem, Creatórem cæli et terræ. Et in
          Jesum Christum, Fílium eius únicum, Dóminùm nostrum: qui concéptus est
          de Spíritu Sancto, natus ex María Vírgine, passus sub Pontio Piláto,
          crucifíxus, mórtuus, et sepúltus: descéndit ad ínferos; tértia die
          resurréxit a mórtuis; ascéndit ad cælos; sedet ad déxteram Dei Patris
          omnipoténtis: inde ventúrus est judicáre vivos et mórtuos. Credo in
          Spíritum Sanctum, sanctam Ecclésiam cathólicam, Sanctórum communionem,
          remissiónem peccatórum carnis resurrectiónem, vitam ætérnam.
        </p>
        <p>
          Creio em Deus, Pai todo-poderoso, Criador do Céu e da Terra; e em
          Jesus Cristo, seu único Filho, Nosso Senhor, que foi concebido pelo
          poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio
          Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos
          mortos; ressuscitou ao terceiro dia; subiu aos Céus, onde está sentado
          à direita de Deus Pai todo-poderoso, de onde há-de vir a julgar os
          vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica;
          na comunhão dos Santos; na remissão dos pecados; na ressurreição da
          carne; na vida eterna.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>
      <h2>Oferecimento do Santo Rosário</h2>
      Santíssima Virgem, Mãe de Deus, eu Vos ofereço este rosário em desagravo
      do Santíssimo Coração de Nosso Senhor Jesus Cristo, Vosso Filho, e em
      desagravo do Vosso Coração Imaculado; e pelas intenções que Vos apresento:
      Referir as intenções.
      <h2>Intenções do Santo Padre</h2>
      <div className="side-by-side not-content">
        <ul className="list-styled row">
          <li className="text-justify">Exaltatio S. Matris Ecclesiæ.</li>
          <li className="text-justify">Propagatio fidei.</li>
          <li className="text-justify">Extirpatio hæresum.</li>
          <li className="text-justify">Conversio peccatorum.</li>
          <li className="text-justify">Pax inter principes christianos.</li>
        </ul>
        <ul className="list-styled row">
          <li className="text-justify">Exaltação da Santa Igreja.</li>
          <li className="text-justify">Propagação da fé.</li>
          <li className="text-justify">Extirpação das heresias.</li>
          <li className="text-justify">Conversão dos pecadores.</li>
          <li className="text-justify">
            Paz entre os Reis e Príncipes católicos.
          </li>
        </ul>
      </div>
      <h1>Nas contas maiores</h1>
      <h2>Pai Nosso</h2>
      <PaiNosso />
      <h1>Nas contas menores</h1>
      <h2>Ave Maria</h2>
      <AveMaria />
      <h1>No fim das dezenas</h1>
      <h2>Glória</h2>
      <Gloria />
      <h2>Nossa Senhora a Santa Catarina Labouré</h2>
      <div className="side-by-side not-content">
        <p>℣. O Maria sine labe concepta.</p>
        <p>℣. Ó Maria concebida sem pecado.</p>
        <p>
          <span className="text-red-500">℟.</span> Ora pro nobis, qui confugimus
          ad te.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Rogai por nós que recorremos
          a vós.
        </p>
      </div>
      <h2>Nossa Senhora aos Santos Pastorinhos</h2>
      <div className="side-by-side not-content">
        <p>
          ℣. Oh mi Jesu, dimitte nobis débita nostra, líbera nos ab igne
          inférni,
        </p>
        <p>℣. Ó meu Jesus, perdoai-nos e livrai-nos do fogo do inferno,</p>
        <p>
          <span className="text-red-500">℟.</span> Conduc in cælum omnes animas,
          præsértim illas quæ máxime indigent misericórdia tua.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Levai as alminhas todas para
          o Céu e socorrei principalmente as que mais precisarem.
        </p>
      </div>
      <h1>Meditações do Rosário</h1>
      <h2>Mistérios Gozosos</h2>
      <aside>Segunda-feira e Quinta-feira</aside>
      <strong>Primeiro mistério:</strong> Meditemos na Anunciação do Arcanjo São
      Gabriel à Santíssima Virgem, e roguemos a virtude da humildade.
      <strong>Segundo mistério:</strong> Meditemos na Visitação da Santíssima
      Virgem a Sua Prima, Santa Isabel, e roguemos a caridade para com o
      próximo.
      <strong>Terceiro mistério:</strong> Meditemos no Nascimento do Menino
      Jesus, e roguemos o desprendimento dos bens do mundo.
      <strong>Quarto mistério:</strong> Meditemos na Apresentação do Menino
      Jesus no Templo e na Purificação de Nossa Senhora, e roguemos a obediência
      e a pureza do espírito e do coração.
      <strong>Quinto mistério:</strong> Meditemos na Perda e no Encontro do
      Menino Jesus no Templo, e roguemos o conhecimento das coisas divinas e a
      prontidão no serviço de Deus.
      <h2>Mistérios Dolorosos</h2>
      <aside>Terça-feira e Sexta-feira</aside>
      <strong>Primeiro mistério:</strong> Meditemos na Agonia de N. S. Jesus
      Cristo, e roguemos a contrição dos nossos pecados.
      <strong>Segundo mistério:</strong> Meditemos na flagelação de N. S. Jesus
      Cristo, e roguemos a mortificação dos sentidos.
      <strong>Terceiro mistério:</strong> Meditemos na Coroação de Espinhos de
      N. S. Jesus Cristo, e roguemos a mortificação do espírito e do coração.
      <strong>Quarto mistério:</strong> Meditemos em N. S. Jesus Cristo levando
      a Cruz para o Calvário, e roguemos a paciência e a resignação.
      <strong>Quinto mistério:</strong> Meditemos na Crucifixão e Morte de N. S.
      Jesus Cristo, e roguemos o amor a Deus e a salvação das almas.
      <h2>Mistérios Gloriosos</h2>
      <aside>Quarta-feira, Sábado e Domingo</aside>
      <strong>Primeiro mistério:</strong> Meditemos na Ressurreição de N. S.
      Jesus Cristo, e roguemos para recebermos o dom da fé e para a conversão
      dos pecadores.
      <strong>Segundo mistério:</strong> Meditemos na Ascensão de N. S. Jesus
      Cristo, e roguemos a esperança e o desejo do céu.
      <strong>Terceiro mistério:</strong>Meditemos na descida do Divino Espírito
      Santo, e roguemos o amor a Deus e o zelo da salvação das almas.
      <strong>Quarto mistério:</strong> Meditemos na Assunção da Santíssima
      Virgem, e roguemos a graça de uma boa morte e a devoção a Nossa Senhora.
      <strong>Quinto mistério:</strong> Meditemos na Coroação da Santíssima
      Virgem, e roguemos a perseverança final e a confiança em Nossa Senhora.
      <h1>Orações no fim do Rosário</h1>
      <h2>Salve Rainha</h2>
      <div className="side-by-side not-content">
        <p>
          Salve, Regina, Mater misericórdiæ, vita, dulcédo et spes nostra,
          salve. Ad te clamámus, éxsules fílii Hevæ. Ad te suspirámus geméntes
          et flentes in hac lacrimárum valle. Éia ergo, advocáta nostra, illos
          tuos misericórdes óculos ad nos convérte. Et Jesum benedíctum fructum
          ventris tui, nobis, post hoc exsílium, osténde. O clemens, o pia, o
          dulcis Virgo Maria!
        </p>
        <p>
          Salvé, Rainha, mãe de misericórdia, vida, doçura, esperança nossa,
          salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos,
          gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa,
          esses Vossos olhos misericordiosos a nós volvei. E, depois deste
          desterro, nos mostrai Jesus, bendito fruto do Vosso ventre. Ó
          clemente, ó piedosa, ó doce Virgem Maria.
        </p>
        <p>℣. Ora pro nobis, Regina Sacratíssimi Rosárii.</p>
        <p>℣. Rogai por nós, Rainha do Santíssimo Rosário.</p>
        <p>
          <span className="text-red-500">℟.</span> Ut digni efficiámur
          promissiónibus Christi.
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
          Deus, cujus Unigénitus per vitam, mortem et resurrectiónem suam nobis
          salútis ætérnæ prǽmia comparávit, concede, quǽsumus: ut hæc mystéria
          sacratissimo beátæ Maríæ Vírginis Rosário recoléntes, et imitémur quod
          continent, et quod promittunt assequámur. Per eundem Christum Dóminum
          nostrum.
        </p>
        <p>
          Ó Deus, cujo Filho Unigénito por sua vida, morte e ressurreição nos
          alcançou os prémios da vida eterna, concedei-nos, Vos suplicamos, que,
          venerando nós estes mistérios do Santíssimo Rosário da Virgem Maria,
          imitemos o que eles contêm, e alcancemos o que eles prometem. Pelo
          mesmo Cristo, nosso Senhor.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>
      <h2>Ladainha da Santíssima Virgem</h2>
      <LadainhaLoreto />
      <h2>Sinal da Cruz</h2>
      <div className="side-by-side not-content">
        <p>
          <span className="cross text-red-500">✠</span> In nómine Patris, et
          Fílii, et Spíritus Sancti.
        </p>
        <p>
          <span className="cross text-red-500">✠</span> Em nome do Pai e do
          Filho e do Espírito Santo.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
        <p>
          <span className="text-red-500">℟.</span> Amen.
        </p>
      </div>
    </div>
  );
}
