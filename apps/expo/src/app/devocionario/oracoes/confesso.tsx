import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageConfesso() {
  return (
    <PageWrapper>
      <H1 text="Confesso" />

      <Language>
        <Typography className="latin">
          Confíteor Deo omnipoténti, beátæ Maríæ semper Vírgini, beáto Michǽli
          Archángelo, beáto Joánni Baptístæ, sanctis Apóstolis Petro et Paulo,
          et ómnibus Sanctis: quia peccávi nimis cogitatióne, verbo et ópere:{" "}
          <Typography className="latin">Percutit sibi pectus ter, dicens:</Typography>
        </Typography>
        <Typography className="vernacular">
          Eu me confesso a Deus, todo poderoso, à bem-aventurada sempre Virgem
          Maria, ao bem-aventurado S. Miguel Arcanjo, ao bem-aventurado S. João
          Baptista, aos Santos Apóstolos S. Pedro e S. Paulo, e a todos os
          santos: que pequei muitas vezes por pensamentos, palavras e obras:{" "}
          <Typography className="vernacular">
            Feche a mão direita e bata no peito por três vezes.
          </Typography>
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Mea culpa, mea culpa, mea máxima culpa.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">
            Por minha culpa, por minha culpa, por minha tão grande culpa.
          </Typography>
        </Typography>
        <Typography className="latin">
          Ideo precor beátam Maríam semper Vírginem, beátum Michǽlem
          Archángelum, beátum Joánnem Baptístam, sanctos Apóstolos Petrum et
          Paulum, et omnes Sanctos, orare pro me ad Dóminum, Deum nostrum.
        </Typography>
        <Typography className="vernacular">
          Portanto rogo à bem-aventurada sempre Virgem Maria, ao bem-aventurado
          S. Miguel Arcanjo, ao bem-aventurado S. João Baptista, aos Santos
          Apóstolos S. Pedro e S. Paulo, e a todos os Santos, que rogueis a
          Deus, nosso Senhor, por mim.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
