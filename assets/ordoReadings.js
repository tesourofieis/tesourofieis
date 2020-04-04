$(window).on("load", function() {
  // Making :contains case insensitive
  $.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function(elem) {
      return (
        $(elem)
          .text()
          .toUpperCase()
          .indexOf(arg.toUpperCase()) >= 0
      );
    };
  });

  const $main = $("main");

  function init() {
    moment.locale("pt");
    loadProper(getDate());
  }

  init();

  function getDate() {
    let tmpDate = document.location.hash.replace("#", "");
    tmpDate = moment(tmpDate, "YYYY-MM-DD");
    if (!tmpDate.isValid()) {
      tmpDate = moment();
    }
    return tmpDate.format("YYYY-MM-DD");
  }

  function loadProper(date) {
    $.getJSON(config.dateEndpoint + date, function(data) {
      $main.empty();

      $.each(data, function(index, item) {
        let sections = item.sections;
        for (index = 0; index < sections.length; index++) {
          if (sections[index].id === "Introitus") {
            $(
              renderTemplate($("#introitus").text(), {
                title: sections[index].label + " de " + item["info"].title,
                introitusVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                introitusLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
              })
            ).appendTo("#introitusText");
          }
          if (
            sections[index].id === "Oratio" ||
            sections[index].id === "Commemoratio Oratio"
          ) {
            $(
              renderTemplate($("#oratio").text(), {
                title: sections[index].label + " de " + item["info"].title,
                oratioVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                oratioLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>")
              })
            ).appendTo("#oratioText");
          }
          if (sections[index].id === "Lectio") {
            $(
              renderTemplate($("#lectio").text(), {
                title: sections[index].label + " de " + item["info"].title,
                lectioVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                lectioLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>")
              })
            ).appendTo("#lectioText");
          }
          if (sections[index].id === "Graduale") {
            $(
              renderTemplate($("#graduale").text(), {
                title: sections[index].label + " de " + item["info"].title,
                gradualeVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                gradualeLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>")
              })
            ).appendTo("#gradualeText");
          }
          if (sections[index].id === "Evangelium") {
            $(
              renderTemplate($("#evangelium").text(), {
                title: sections[index].label + " de " + item["info"].title,
                evangeliumVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                evangeliumLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>")
              })
            ).appendTo("#evangeliumText");
          }
          if (sections[index].id === "Offertorium") {
            $(
              renderTemplate($("#offertorium").text(), {
                title: sections[index].label + " de " + item["info"].title,
                offertoriumVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                offertoriumLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>")
              })
            ).appendTo("#offertoriumText");
          }
          if (
            sections[index].id === "Secreta" ||
            sections[index].id === "Commemoratio Secreta"
          ) {
            $(
              renderTemplate($("#secreta").text(), {
                title: sections[index].label + " de " + item["info"].title,
                secretaVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                secretaLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>")
              })
            ).appendTo("#secretaText");
          }
          if (sections[index].id === "Prefatio") {
            $(
              renderTemplate($("#prefatio").text(), {
                title: sections[index].label + " de " + item["info"].title,
                prefatioVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                prefatioLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>")
              })
            ).appendTo("#prefatioText");
          }
          if (sections[index].id === "Communio") {
            $(
              renderTemplate($("#communio").text(), {
                title: sections[index].label + " de " + item["info"].title,
                communioVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                communioLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>")
              })
            ).appendTo("#communioText");
          }
          if (
            sections[index].id === "Postcommunio" ||
            sections[index].id === "Commemoratio Postcommunio"
          ) {
            $(
              renderTemplate($("#postcommunio").text(), {
                title: sections[index].label + " de " + item["info"].title,
                postcommunioVernacular: sections[index].body[0][0].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>"),
                postcommunioLatin: sections[index].body[0][1].replace(/\*([^\*]+)\*/g, "<br><em>$1</em><br>")
              })
            ).appendTo("#postcommunioText");
          }
        }
      });
    });
  }
});
