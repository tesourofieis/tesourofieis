import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0119Portugal() {
  return (
    <PageWrapper>
      <H1 text="S. Gonçalo de Amarante, Confesso, a 19 de Janeiro" />

      <Typography className="aside">
        Como na{" "}
        <Link href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beáti Gundisálvi Confessóris tui mentem sancti nóminis tui
          amóre mirabíliter inflammásti: concéde, quæsumus; ut illius vestígiis
          inhæréntes, semper te cogitémus, quæque tibi grata sunt, inflammáto
          stúdio faciámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que maravilhosamente abrasastes no amor ao vosso nome a alma
          do B. Gonçalo, vosso Confessor, dignai-Vos conceder-nos que, seguindo
          os seus vestígios, pensemos sempre em Vós e com fervorosa solicitude
          façamos o que Vos seja agradável. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Oração Comemoração S. S. Mário e Outros Mártires" />

      <Language>
        <Typography className="latin">
          Exáudi, Dómine, pópulum tuum cum Sanctórum tuórum patrocínio
          supplicántem: ut et temporális vitæ nos tríbuas pace gaudére; et
          ætérnæ reperíre subsídium. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ouvi, Senhor, as súplicas que o vosso povo Vos dirige sob o patrocínio
          dos vossos Santos; e dignai-Vos permitir que gozemos a vossa paz na
          vida presente e alcancemos o vosso auxílio na vida eterna...
        </Typography>
      </Language>

      <H3 text="Oração Comemoração S. Canuto" />

      <Language>
        <Typography className="latin">
          Deus, qui ad illustrándam Ecclésiam tuam beátum Canútum regem martýrii
          palma et gloriósis miráculis decoráre dignátus es: concéde propítius;
          ut, sicut ipse Domínicæ passiónis imitátor fuit, ita nos, per ejus
          vestígia gradiéntes, ad gáudia sempitérna perveníre mereámur. Per
          eúndem Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que para glória da vossa Igreja Vos dignastes honrar o B. Rei
          Canuto com a palma do martírio e o dom de insignes milagres,
          concedei-nos propício que, assim como ele imitou a Paixão do Senhor,
          assim também nós, segundo os seus vestígios, mereçamos alcançar os
          sempiternos gozos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/santos/01-15-1#epístola"
        title="Epístola S. Paulo, 1.º Eremita"
      />

      <H3 text="Gradual" />

      <Typography className="em">Sl. 20, 4</Typography>

      <Language>
        <Typography className="latin">
          Dómine, prævenísti eum in benedictiónibus dulcédinis: posuísti in
          cápite ejus corónam de lápide pretióso.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="latin">ibid., 5</Typography> Vitam pétiit a te:
          et tribuísti ei longitúdinem diérum in sæculum sæculi.
        </Typography>
        <Typography className="vernacular">
          Concedestes-lhe, Senhor, bênçãos escolhidas, as mais suaves, e
          impusestes na sua cabeça uma coroa de pedras preciosas.
          <Typography className="versicle"> ℣. </Typography>
          <Typography className="vernacular">ibid., 5</Typography>{" "}
          Concedestes-lhe a vida que Vos suplicou e prolongastes-lhe a duração
          dos seus dias pelos séculos dos séculos.
        </Typography>
        <Typography className="latin">
          Allelúja, allelúja. Lætábitur justus in Dómino, et sperábit in eo: et
          laudabúntur omnes recti corde. Allelúja.
        </Typography>
        <Typography className="vernacular">
          Aleluia, aleluia. O justo alegrar-se-á no Senhor e n’Ele porá suas
          esperanças; e todos aqueles cujo coração é recto serão glorificados.
          Aleluia.
        </Typography>
      </Language>

      <Typography className="aside">
        Após a Septuagésima omite-se o Aleluia e o Verso e diz-se:
      </Typography>

      <H3 text="Trato" />

      <Typography className="em">Sl. 111, 1-3</Typography>

      <Language>
        <Typography className="latin">
          Beátus vir, qui timet Dóminum: in mandátis ejus cupit nimis.
          <Typography className="versicle"> ℣. </Typography>
          Potens in terra erit semen ejus: generátio rectórum benedicétur.
          <Typography className="versicle"> ℣. </Typography>Glória et divitiæ in
          domo ejus: et justítia ejus manet in sǽculum sǽculi.
        </Typography>
        <Typography className="vernacular">
          Bem-aventurado o varão que teme o Senhor e que põe todo seu zelo em
          obedecer-Lhe.<Typography className="versicle"> ℣. </Typography>Sua
          descendência será poderosa na terra; pois a geração dos justos será
          abençoada.
          <Typography className="versicle"> ℣. </Typography>Na sua casa haverá
          glória e riqueza: e a justiça subsistirá em todos os séculos dos
          séculos.
        </Typography>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/santos/01-15-1#evangelho"
        title="S. Paulo, 1.º Eremita, Conf."
      />

      <H3 text="Ofertório" />

      <Typography className="em">Sl. 91, 13</Typography>

      <Language>
        <Typography className="latin">
          Justus ut palma florébit, sicut cedrus, quæ in Líbano est,
          multiplicábitur.
        </Typography>
        <Typography className="vernacular">
          O justo florescerá, como a palmeira, e multiplicar-se-á, como o cedro
          do Líbano.
        </Typography>
      </Language>

      <H3 text="Secreta Comemoração S. S. Mário e Outros Mártires" />

      <Language>
        <Typography className="latin">
          Preces, Dómine, tuórum réspice oblationésque fidélium: ut et tibi
          gratæ sint pro tuórum festivitáte Sanctórum, et nobis cónferant tuæ
          propitiatiónis auxílium. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Atendei, Senhor, ás preces e ás oblatas dos vossos fiéis, a fim de que
          Vos sejam agradáveis nesta festa dos vossos Santos e nos alcancem o
          auxílio da vossa bondade. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Typography className="em">S. Canuto</Typography>

      <Language>
        <Typography className="latin">
          Accépta sit in conspéctu tuo, Dómine, nostra devótio: et ejus nobis
          fiat supplicatióne salutáris, pro cujus sollemnitáte defértur. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei benigno, Senhor, esta oferta da nossa piedade, e que ela nos
          alcance a salvação, por intercessão das preces daquele em cuja festa
          Vo-la apresentamos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Comúnio" />

      <Typography className="em">Mt. 19, 91, 13</Typography>

      <Language>
        <Typography className="latin">
          Amen dico vobis, quod vos, qui reliquístis ómnia, et secúti estis me,
          céntuplum accipiétis, et vitam ætérnam possidébitis.
        </Typography>
        <Typography className="vernacular">
          Em verdade vos digo: vós, que abandonastes tudo e me seguistes,
          recebereis o cêntuplo e possuireis a vida eterna.
        </Typography>
      </Language>

      <H3 text="Postcomúnio Comemoração S. S. Mário e Outros Mártires" />

      <Language>
        <Typography className="latin">
          Sanctórum tuórum, Dómine, intercessióne placátus: præsta, quǽsumus;
          ut, quæ temporáli celebrámus actióne, perpétua salvatióne capiámus.
          Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Deixai-Vos aplacar, Senhor, pela intercessão dos vossos Santos; e
          permiti, Vos rogamos, que estes sacrifícios, que aogra celebrámos, nos
          sirvam de auxílio para a salvação eterna. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio Comemoração S. Canuto" />

      <Language>
        <Typography className="latin">
          Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus noster:
          ut, cujus exséquimur cultum, intercedénte beáto Canúto Mártyre tuo,
          sentiámus efféctum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Permiti, ó Senhor, nosso Deus, que, assim como nos alegrámos,
          comemorando nesta vida pelo nosso ministério a memória dos vossos
          Santos, assim também tenhamos na eternidade a felicidade de os
          contemplar. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
