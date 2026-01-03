import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageAdorote() {
  return (
    <PageWrapper>
      <H1 text="Adóro te devóte" />

      <Language>
        <Typography className="latin">
          Adóro te devóte, latens Déitas,{"\n"}
          Quae sub his figúris vere látitas:{"\n"}
          Tibi se cor meum totum súbiicit,{"\n"}
          Quia te contémplans totum déficit.
        </Typography>
        <Typography className="vernacular">
          Eu Vos adoro com toda minha devoção, ó divindade oculta,{"\n"}
          que estais realmente presente, sob o véu dessas figuras!{"\n"}
          Meu coração submete-se inteiramente a Vós;{"\n"}
          pois, desde que Vos contemplo, sinto-me completamente desfalecer.
        </Typography>
        <Typography className="latin">
          Visus, tactus, gustus in te fállitur, Sed audítu solo tuto créditur.
          Credo, quidquid dixit Dei Fílius: Nil hoc verbo Veritátis vérius.
        </Typography>
        <Typography className="vernacular">
          A vista, o tacto e o paladar não podem perceber-Vos; mas pelo ouvido,
          podemos crer com segurança. E eu creio tudo quanto diz o Filho de
          Deus, pois nada há mais verdadeiro do que esta palavra de verdade.
        </Typography>
        <Typography className="latin">
          In cruce latébat sola Déitas, At hic latet simul et humánitas; Ambo
          tamen credens atque cónfitens, Peto quod petívit latro paénitens.
        </Typography>
        <Typography className="vernacular">
          Na Cruz somente a divindade estava oculta; mas aqui até a própria
          humanidade está oculta; contudo, eu, crendo e confessando as duas,
          dirijo-Vos a mesma súplica que o ladrão arrependido.
        </Typography>
        <Typography className="latin">
          Plagas, sicut Thomas, non intúeor; Deum tamen meum te confíteor. Fac
          me tibi semper magis crédere, In te spem habére, te dilígere.
        </Typography>
        <Typography className="vernacular">
          Eu não vejo, como Tomé, as vossas Chagas; porém, confesso que sois o
          meu Deus. Aumentai cada vez mais a minha fé, a minha esperança e o meu
          amor para convosco.
        </Typography>
        <Typography className="latin">
          O memoriále mortis Dómini! Panis vivus, vitam práestans hómini!
          Praesta meae menti de te vívere. Et te illi semper dulce sápere.
        </Typography>
        <Typography className="vernacular">
          Ó Pão, que nos recordais a morte do Senhor, Pão vivo, que dais a vida
          ao homem, permiti que minha alma não viva senão de Vós e que em Vós
          encontre sempre as suas suaves delícias.
        </Typography>
        <Typography className="latin">
          Pie pellicáne, Jesu Dómine, Me immúndum munda tuo sánguine. Cuius una
          stilla salvum fácere Totum mundum quit ab omni scélere.
        </Typography>
        <Typography className="vernacular">
          Ó divino pelicano, Senhor Jesus, lavai as minhas manchas com vosso
          Sangue, do qual basta uma só gota para apagar todos os pecados do
          mundo!
        </Typography>
        <Typography className="latin">
          Jesu, quem velátum nunc aspício, Oro fiat illud quod tam sítio; Ut te
          reveláta cernens fácie, Visu sim beátus tuae glóriae. Amen.
        </Typography>
        <Typography className="vernacular">
          Ó Jesus, a quem não vejo agora senão através desses véus, concedei-me
          o que Vos suplico ardentemente: que, contemplando-Vos face a face, a
          visão da vossa glória me encha de felicidade. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
