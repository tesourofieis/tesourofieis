import type { MissalPage } from "../../schema";

/**
 * S. Gonçalo de Amarante (Portugal) - the hardest-case page: proper
 * office interleaved with a commemoration (Ss. Mário e sociis), seasonal
 * Trato replacing the Alleluia, and cross-references into S. Paulo
 * Primeiro Eremita's Epistle/Gospel.
 */
export const goncalo0119Portugal: MissalPage = {
  title: "S. Gonçalo de Amarante, Confesso, a 19 de Janeiro",
  sections: [
    {
      kind: "rubric",
      text: "Como na Missa Justus ut palma, exceto:",
    },
    { kind: "heading", text: "Oração" },
    {
      kind: "text",
      body: {
        la: "Deus, qui beáti Gundisálvi Confessóris tui mentem sancti nóminis tui amóre mirabíliter inflammásti: concéde, quæsumus; ut illius vestígiis inhæréntes, semper te cogitémus, quæque tibi grata sunt, inflammáto stúdio faciámus. Per Dóminum...",
        pt: "Ó Deus, que maravilhosamente abrasastes no amor ao vosso nome a alma do B. Gonçalo, vosso Confessor, dignai-Vos conceder-nos que, seguindo os seus vestígios, pensemos sempre em Vós e com fervorosa solicitude façamos o que Vos seja agradável. Por nosso Senhor...",
      },
    },
    { kind: "heading", text: "Oração Comemoração S. S. Mário e Outros Mártires" },
    {
      kind: "text",
      body: {
        la: "Exáudi, Dómine, pópulum tuum cum Sanctórum tuórum patrocínio supplicántem: ut et temporális vitæ nos tríbuas pace gaudére; et ætérnæ reperíre subsídium. Per Dóminum...",
        pt: "Ouvi, Senhor, as súplicas que o vosso povo Vos dirige sob o patrocínio dos vossos Santos; e dignai-Vos permitir que gozemos a vossa paz na vida presente e alcancemos o vosso auxílio na vida eterna...",
      },
    },
    { kind: "heading", text: "Epístola" },
    {
      kind: "ref",
      title: "Epístola S. Paulo, 1.º Eremita",
      href: "/missal/santos/01-15-1#epístola",
    },
    { kind: "heading", text: "Gradual" },
    { kind: "source", text: "Sl. 20, 4" },
    {
      kind: "text",
      body: {
        la: "Dómine, prævenísti eum in benedictiónibus dulcédinis: posuísti in cápite ejus corónam de lápide pretióso. ℣. ibid., 5 — Vitam pétiit a te: et tribuísti ei longitúdinem diérum in sæculum sæculi. Allelúja, allelúja. Lætábitur justus in Dómino, et sperábit in eo: et laudabúntur omnes recti corde. Allelúja.",
        pt: "Concedestes-lhe, Senhor, bênçãos escolhidas, as mais suaves, e impusestes na sua cabeça uma coroa de pedras preciosas. ℣. ibid., 5 — Concedestes-lhe a vida que Vos suplicou e prolongastes-lhe a duração dos seus dias pelos séculos dos séculos. Aleluia, aleluia. O justo alegrar-se-á no Senhor e n’Ele porá suas esperanças; e todos aqueles cujo coração é recto serão glorificados. Aleluia.",
      },
    },
    {
      kind: "rubric",
      text: "Após a Septuagésima omite-se o Aleluia e o Verso e diz-se:",
    },
    { kind: "heading", text: "Trato" },
    { kind: "source", text: "Sl. 111, 1-3" },
    {
      kind: "text",
      body: {
        la: "Beátus vir, qui timet Dóminum: in mandátis ejus cupit nimis. ℣. Potens in terra erit semen ejus: generátio rectórum benedicétur. ℣. Glória et divitiæ in domo ejus: et justítia ejus manet in sǽculum sǽculi.",
        pt: "Bem-aventurado o varão que teme o Senhor e que põe todo seu zelo em obedecer-Lhe. ℣. Sua descendência será poderosa na terra; pois a geração dos justos será abençoada. ℣. Na sua casa haverá glória e riqueza: e a justiça subsistirá em todos os séculos dos séculos.",
      },
    },
    { kind: "heading", text: "Evangelho" },
    {
      kind: "ref",
      title: "S. Paulo, 1.º Eremita, Conf.",
      href: "/missal/santos/01-15-1#evangelho",
    },
    { kind: "heading", text: "Ofertório" },
    { kind: "source", text: "Sl. 91, 13" },
    {
      kind: "text",
      body: {
        la: "Justus ut palma florébit, sicut cedrus, quæ in Líbano est, multiplicábitur.",
        pt: "O justo florescerá, como a palmeira, e multiplicar-se-á, como o cedro do Líbano.",
      },
    },
    { kind: "heading", text: "Secreta Comemoração S. S. Mário e Outros Mártires" },
    {
      kind: "text",
      body: {
        la: "Preces, Dómine, tuórum réspice oblationésque fidélium: ut et tibi gratæ sint pro tuórum festivitáte Sanctórum, et nobis cónferant tuæ propitiatiónis auxílium. Per Dóminum...",
        pt: "Atendei, Senhor, ás preces e ás oblatas dos vossos fiéis, a fim de que Vos sejam agradáveis nesta festa dos vossos Santos e nos alcancem o auxílio da vossa bondade. Por nosso Senhor...",
      },
    },
    { kind: "heading", text: "Comúnio" },
    { kind: "source", text: "Mt. 19, 91, 13" },
    {
      kind: "text",
      body: {
        la: "Amen dico vobis, quod vos, qui reliquístis ómnia, et secúti estis me, céntuplum accipiétis, et vitam ætérnam possidébitis.",
        pt: "Em verdade vos digo: vós, que abandonastes tudo e me seguistes, recebereis o cêntuplo e possuireis a vida eterna.",
      },
    },
    { kind: "heading", text: "Postcomúnio Comemoração S. S. Mário e Outros Mártires" },
    {
      kind: "text",
      body: {
        la: "Sanctórum tuórum, Dómine, intercessióne placátus: præsta, quǽsumus; ut, quæ temporáli celebrámus actióne, perpétua salvatióne capiámus. Per Dóminum...",
        pt: "Deixai-Vos aplacar, Senhor, pela intercessão dos vossos Santos; e permiti, Vos rogamos, que estes sacrifícios, que aogra celebrámos, nos sirvam de auxílio para a salvação eterna. Por nosso Senhor...",
      },
    },
  ],
};
