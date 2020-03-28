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
    $.getJSON(config.dateEndpoint + date + ".json", function(data) {
      $main.empty();
      window.scrollTo(0, 0);

      $.each(data, function(index, item) {
        let title = item["info"].title;
        let sections = item.sections;
        let sectionsVernacular = item.proper_vernacular;
        let sectionsLatin = item.proper_latin;

        if (title == null) {
          title = moment(item["info"].date, "YYYY-MM-DD").format("DD MMMM");
        }
        $(
          renderTemplate(templateContentIntro, {
            title: title
          })
        ).appendTo($main);

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
                introitusVernacular: sections[i].body[0][0],
                introitusLatin: sections[i].body[0][1]
              })
            ).appendTo("#introitusText");
          }
          if (
            sections[i].id === "Oratio" ||
            sections[i].id === "Commemoratio Oratio"
          ) {
            $(
              renderTemplate($("#oratio").text(), {
                oratioVernacular: sections[i].body[0][0],
                oratioLatin: sections[i].body[0][1]
              })
            ).appendTo("#oratioText");
          }
          if (sections[i].id === "Lectio") {
            $(
              renderTemplate($("#lectio").text(), {
                lectioVernacular: sections[i].body[0][0],
                lectioLatin: sections[i].body[0][1]
              })
            ).appendTo("#lectioText");
          }
          if (sections[i].id === "Graduale") {
            $(
              renderTemplate($("#graduale").text(), {
                gradualeVernacular: sections.body[0][0],
                gradualeLatin: sections.body[0][1]
              })
            ).appendTo("#gradualeText");
          }
          if (sections[i].id === "Evangelium") {
            $(
              renderTemplate($("#evangelium").text(), {
                evangeliumVernacular: sections.body[0][0],
                evangeliumLatin: sections.body[0][1]
              })
            ).appendTo("#evangeliumText");
          }
          if (sections[i].id === "Offertorium") {
            $(
              renderTemplate($("#offertorium").text(), {
                offertoriumVernacular: sections.body[0][0],
                offertoriumLatin: sections.body[0][1]
              })
            ).appendTo("#offertoriumText");
          }
          if (
            sections[i].id === "Secreta" ||
            sections[i].id === "Commemoratio Secreta"
          ) {
            $(
              renderTemplate($("#secreta").text(), {
                secretaVernacular: sections.body[0][0],
                secretaLatin: sections.body[0][1]
              })
            ).appendTo("#secretaText");
          }
          if (sections[i].id === "Prefatio") {
            $(
              renderTemplate($("#prefatio").text(), {
                prefatioVernacular: sections.body[0][0],
                prefatioLatin: sections.body[0][1]
              })
            ).appendTo("#prefatioText");
          }
          if (sections[i].id === "Communio") {
            $(
              renderTemplate($("#communio").text(), {
                communioVernacular: sections.body[0][0],
                communioLatin: sections.body[0][1]
              })
            ).appendTo("#communioText");
          }
          if (
            sections[i].id === "Postcommunio" ||
            sections[i].id === "Commemoratio Postcommunio"
          ) {
            $(
              renderTemplate($("#postcommunio").text(), {
                postcommunioVernacular: sections.body[0][0],
                postcommunioLatin: sections.body[0][1]
              })
            ).appendTo("#postcommunioText");
          }
        }
      });
    });
  }
});
