$(window).on("load", function() {
  /**
   *
   * Globals
   *
   **/

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

  const templateContentIntro = $("#template-content-intro").text();

  const $main = $("main");

  function init() {
    moment.locale("pt");
    loadProper(getDate());
    adaptSectionColumns();
  }

  init();

  /**
   *
   * Functions
   *
   **/

  /**
   * Obtain date from url hash or use today date if not provided or invalid.
   **/
  function getDate() {
    let tmpDate = document.location.hash.replace("#", "");
    tmpDate = moment(tmpDate, "YYYY-MM-DD");
    if (!tmpDate.isValid()) {
      tmpDate = moment();
    }
    return tmpDate.format("YYYY-MM-DD");
  }

  /**
   * Obtain a proper for the given `date` through AJAX call and populate
   * the main element with Bootstrap grid.
   * Once populated, mark corresponding element in the sidebar as active and select given date in the datepicker.
   **/
  function loadProper(date) {
    $.getJSON(config.dateEndpoint + date, function(data) {
      $main.empty();
      window.scrollTo(0, 0);

      $.each(data, function(index, item) {
        // let title = item["info"].title;
        let sections = item.sections;
        let sectionsVernacular = item.proper_vernacular;
        let sectionsLatin = item.proper_latin;

        $.each([sectionsVernacular, sectionsLatin], function(i, sections) {
          // replacing all surrounding asterisks with surrounding <em>s in body
          $.each(sections, function(x, y) {
            sections[x].body = y.body.replace(/\*([^\*]+)\*/g, "<em>$1</em>");
          });
        });
        for (let i = 0; i < sections.length; i++) {
          if (sections[i].id === "Introitus") {
            $(
              renderTemplate($("#introitus").text(), {
                title: sections[i].label + " de " + item["info"].title,
                introitusVernacular: sections[i].body[0][0],
                introitusLatin: sections[i].body[0][1],
              })
            ).appendTo("#introitusText");
          }
          if (
            sections[i].id === "Oratio" ||
            sections[i].id === "Commemoratio Oratio"
          ) {
            $(
              renderTemplate($("#oratio").text(), {
                title: sections[i].label + " de " + item["info"].title,
                oratioVernacular: sections[i].body[0][0],
                oratioLatin: sections[i].body[0][1]
              })
            ).appendTo("#oratioText");
          }
          if (sections[i].id === "Lectio") {
            $(
              renderTemplate($("#lectio").text(), {
                title: sections[i].label + " de " + item["info"].title,
                lectioVernacular: sections[i].body[0][0],
                lectioLatin: sections[i].body[0][1]
              })
            ).appendTo("#lectioText");
          }
          if (sections[i].id === "Graduale") {
            $(
              renderTemplate($("#graduale").text(), {
                title: sections[i].label + " de " + item["info"].title,
                gradualeVernacular: sections[i].body[0][0],
                gradualeLatin: sections[i].body[0][1]
              })
            ).appendTo("#gradualeText");
          }
          if (sections[i].id === "Evangelium") {
            $(
              renderTemplate($("#evangelium").text(), {
                title: sections[i].label + " de " + item["info"].title,
                evangeliumVernacular: sections[i].body[0][0],
                evangeliumLatin: sections[i].body[0][1]
              })
            ).appendTo("#evangeliumText");
          }
          if (sections[i].id === "Offertorium") {
            $(
              renderTemplate($("#offertorium").text(), {
                title: sections[i].label + " de " + item["info"].title,
                offertoriumVernacular: sections[i].body[0][0],
                offertoriumLatin: sections[i].body[0][1]
              })
            ).appendTo("#offertoriumText");
          }
          if (
            sections[i].id === "Secreta" ||
            sections[i].id === "Commemoratio Secreta"
          ) {
            $(
              renderTemplate($("#secreta").text(), {
                title: sections[i].label + " de " + item["info"].title,
                secretaVernacular: sections[i].body[0][0],
                secretaLatin: sections[i].body[0][1]
              })
            ).appendTo("#secretaText");
          }
          if (sections[i].id === "Prefatio") {
            $(
              renderTemplate($("#prefatio").text(), {
                title: sections[i].label + " de " + item["info"].title,
                prefatioVernacular: sections[i].body[0][0],
                prefatioLatin: sections[i].body[0][1]
              })
            ).appendTo("#prefatioText");
          }
          if (sections[i].id === "Communio") {
            $(
              renderTemplate($("#communio").text(), {
                title: sections[i].label + " de " + item["info"].title,
                communioVernacular: sections[i].body[0][0],
                communioLatin: sections[i].body[0][1]
              })
            ).appendTo("#communioText");
          }
          if (
            sections[i].id === "Postcommunio" ||
            sections[i].id === "Commemoratio Postcommunio"
          ) {
            $(
              renderTemplate($("#postcommunio").text(), {
                title: sections[i].label + " de " + item["info"].title,
                postcommunioVernacular: sections[i].body[0][0],
                postcommunioLatin: sections[i].body[0][1]
              })
            ).appendTo("#postcommunioText");
          }
        }
      });
    });
  }
});
