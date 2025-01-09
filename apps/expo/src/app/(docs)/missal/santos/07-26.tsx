"use dom";
import "../../../../global.css";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0726() {
  return (
    <div className="docs">
      <h1>Santa Ana, Mãe da Bem-Aventurada Virgem Maria, a 26 de Julho</h1>

      <aside>
        A Igreja celebra com os Anjos, em santa alegria (Intr.) a mãe da
        bem-aventurada Virgem Maria. Como indica o seu nome Ana, a graça foi
        nela difundida, e Deus abençoou-a para sempre (Com.). «Por sua graça,
        fez-lhe merecer tornar-se a mãe da Mãe de Deus» (Or.). Cheia das
        virtudes com que o Espírito Santo descreve a mulher forte, a esposa de
        São Joaquim excedeu a todas as outras pelas suas riquezas: (Ep.) Maria,
        sua filha e Jesus, de quem é a avó. Tendo, por santidade, deixado tudo
        por Deus, comprou assim essa pérola e esse tesouro (Ev.). A devoção para
        com Santa Ana tem por fundamento o elo que a une à Maria e ao Verbo
        encarnado. Seu culto muito antigo, remonta ao VI século no Oriente e ao
        VIII no Ocidente; foi autorizado por Urbano IV em 1378. Gregório XIII
        fixou, em 1584, sua festa a 26 de Julho e Leão XIII estendeu-a a toda a
        Igreja, em 1879.
      </aside>

      <h3>Intróito</h3>

      <div className="side-by-side">
        <p>
          Gaudeámus omnes in Dómino, diem festum celebrántes sub honóre beátæ
          Annæ: de cujus sollemnitáte gaudent Angeli et colláudant Fílium Dei.{" "}
          <em>Ps. 44, 2</em> Eructávit cor meum verbum bonum: dico ego ópera mea
          Regi. ℣. Gloria Patri...
        </p>
        <p>
          Alegremo-nos todos no Senhor, celebrando neste dia a festa em honra da
          B. Ana; pois os Anjos rejubilam com esta festividade e em harmonia
          louvam o Filho de Deus. <em>Sl. 44, 2</em> Meu coração exalou uma
          palavra excelente: Consagro ao Rei as minhas obras. ℣. Glória ao
          Pai...
        </p>
      </div>

      <h3>Oração</h3>

      <div className="side-by-side">
        <p>
          Deus, qui beátæ Annæ grátiam conférre dignatus es, ut Genetrícis
          unigéniti Fílii tui mater effici mererétur: concéde propítius; ut,
          cujus sollémnia celebrámus, ejus apud te patrocíniis adjuvémur. Per
          eúndem Dóminum...
        </p>
        <p>
          Ó Deus, que Vos dignastes conferir à B. Ana a graça de ser escolhida
          para dar ao mundo a Mãe do vosso Filho Unigénito, concedei-nos
          propício que sejamos auxiliados junto de Vós pelo patrocínio daquela
          cuja festa celebramos. Pelo mesmo nosso Senhor...
        </p>
      </div>

      <h3>Epístola</h3>

      <LinkCard
        href="/missal/comum/24nemvirgensnemmartires#epístola"
        title="Nem Virgens nem Mártires - Missa Cognóvi, Dómine"
      />

      <h3>Gradual</h3>

      <LinkCard
        href="/missal/santos/07-22#gradual"
        title="Santa Maria Madalena"
      />

      <h3>Evangelho</h3>

      <LinkCard
        href="/missal/comum/22martiresnaovirgens#evangelho"
        title="Mártires não Virgens - Missa Me exspectavérunt"
      />

      <h3>Ofertório</h3>

      <em>Sl. 44, 10</em>

      <div className="side-by-side">
        <p>
          Fíliæ regum in honóre tuo, ástitit regína a dextris tuis in vestítu
          deauráto, circúmdata varietáte.
        </p>
        <p>
          As filhas dos reis formam a vossa corte de glória: a própria rainha
          está colocada à vossa direita, envergando um vestido de ouro, recamado
          da mais rica variedade.
        </p>
      </div>

      <h3>Secreta</h3>

      <div className="side-by-side">
        <p>
          Sacrifíciis præséntibus, quǽsumus, Dómine, placatus inténde: ut per
          intercessiónem beátæ Annæ, quæ Genetrícis Fílii tui, Dómini nostri
          Jesu Christi, mater éxstitit, et devotióni nostræ profíciant et
          salúti. Per eúndem Dóminum...
        </p>
        <p>
          Olhai propício, Senhor, Vos suplicamos, para estes sacrifícios, a fim
          de que, pela intercessão da B. Ana, que foi Mãe daquela que deu ao
          mundo vosso Filho, nosso Senhor Jesus Cristo, sejam proveitosos à
          nossa piedade e salvação. Pelo mesmo nosso Senhor...
        </p>
      </div>

      <h3>Comúnio</h3>

      <em>Sl. 44, 3</em>

      <div className="side-by-side">
        <p>
          Diffúsa est grátia in lábiis tuis: proptérea benedíxit te Deus in
          ætérnum, et in sǽculum sǽculi.
        </p>
        <p>
          A graça espalhou-se nos vossos lábios: eis porque Deus vos abençoou
          para a eternidade e para todos os séculos.
        </p>
      </div>

      <h3>Postcomúnio</h3>

      <div className="side-by-side">
        <p>
          Cœléstibus sacraméntis vegetáti, quǽsumus, Dómine, Deus noster: ut,
          intercessióne beátæ Annæ, quam Genetrícis Fílii tui matrem esse
          voluísti, ad ætérnam salútem perveníre mereámur. Per eúndem Dóminum...
        </p>
        <p>
          Alentados com os celestiais sacramentos, Vos suplicamos, ó Senhor,
          nosso Deus, permiti pela intercessão da B. Ana, que foi Mãe daquela
          que deu ao mundo vosso Filho, que possamos alcançar a salvação eterna.
          Por nosso Senhor...
        </p>
      </div>
    </div>
  );
}
