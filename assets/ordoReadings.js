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
        for (let i = 0; i < sectionsVernacular.length; i++) {
          if (sectionsVernacular[i].id === "Introitus") {
            let introitusVernacular = sectionsVernacular[i];
            let introitusLatin = sectionsLatin[i];
            $(
              renderTemplate($("#introitus").text(), {
                introitusLabelVernacular: introitusVernacular.label,
                introitusVernacular: introitusVernacular.body,
                introitusLabelLatin: introitusLatin.label,
                introitusLatin: introitusLatin.body
              })
            ).appendTo("#introitusText");
          }
          if (
            sectionsVernacular[i].id === "Oratio" ||
            sectionsVernacular[i].id === "Commemoratio Oratio"
          ) {
            let oratioVernacular = sectionsVernacular[i];
            let oratioLatin = sectionsLatin[i];
            $(
              renderTemplate($("#oratio").text(), {
                oratioLabelVernacular: oratioVernacular.label,
                oratioVernacular: oratioVernacular.body,
                oratioLabelLatin: oratioLatin.label,
                oratioLatin: oratioLatin.body
              })
            ).appendTo("#oratioText");
          }
          if (sectionsVernacular[i].id === "Lectio") {
            let lectioVernacular = sectionsVernacular[i];
            let lectioLatin = sectionsLatin[i];
            $(
              renderTemplate($("#lectio").text(), {
                lectioLabelVernacular: lectioVernacular.label,
                lectioVernacular: lectioVernacular.body,
                lectioLabelLatin: lectioLatin.label,
                lectioLatin: lectioLatin.body
              })
            ).appendTo("#lectioText");
          }
          if (sectionsVernacular[i].id === "Graduale") {
            let gradualeVernacular = sectionsVernacular[i];
            let gradualeLatin = sectionsLatin[i];
            $(
              renderTemplate($("#graduale").text(), {
                gradualeLabelVernacular: gradualeVernacular.label,
                gradualeVernacular: gradualeVernacular.body,
                gradualeLabelLatin: gradualeLatin.label,
                gradualeLatin: gradualeLatin.body
              })
            ).appendTo("#gradualeText");
          }
          if (sectionsVernacular[i].id === "Evangelium") {
            let evangeliumVernacular = sectionsVernacular[i];
            let evangeliumLatin = sectionsLatin[i];
            $(
              renderTemplate($("#evangelium").text(), {
                evangeliumLabelVernacular: evangeliumVernacular.label,
                evangeliumVernacular: evangeliumVernacular.body,
                evangeliumLabelLatin: evangeliumLatin.label,
                evangeliumLatin: evangeliumLatin.body
              })
            ).appendTo("#evangeliumText");
          }
          if (sectionsVernacular[i].id === "Offertorium") {
            let offertoriumVernacular = sectionsVernacular[i];
            let offertoriumLatin = sectionsLatin[i];
            $(
              renderTemplate($("#offertorium").text(), {
                offertoriumLabelVernacular: offertoriumVernacular.label,
                offertoriumVernacular: offertoriumVernacular.body,
                offertoriumLabelLatin: offertoriumLatin.label,
                offertoriumLatin: offertoriumLatin.body
              })
            ).appendTo("#offertoriumText");
          }
          if (
            sectionsVernacular[i].id === "Secreta" ||
            sectionsVernacular[i].id === "Commemoratio Secreta"
          ) {
            let secretaVernacular = sectionsVernacular[i];
            let secretaLatin = sectionsLatin[i];
            $(
              renderTemplate($("#secreta").text(), {
                secretaLabelVernacular: secretaVernacular.label,
                secretaVernacular: secretaVernacular.body,
                secretaLabelLatin: secretaLatin.label,
                secretaLatin: secretaLatin.body
              })
            ).appendTo("#secretaText");
          }
          if (sectionsVernacular[i].id === "Prefatio") {
            let prefatioVernacular = sectionsVernacular[i];
            let prefatioLatin = sectionsLatin[i];
            $(
              renderTemplate($("#prefatio").text(), {
                prefatioLabelVernacular: prefatioVernacular.label,
                prefatioVernacular: prefatioVernacular.body,
                prefatioLabelLatin: prefatioLatin.label,
                prefatioLatin: prefatioLatin.body
              })
            ).appendTo("#prefatioText");
          }
          if (sectionsVernacular[i].id === "Communio") {
            let communioVernacular = sectionsVernacular[i];
            let communioLatin = sectionsLatin[i];
            $(
              renderTemplate($("#communio").text(), {
                communioLabelVernacular: communioVernacular.label,
                communioVernacular: communioVernacular.body,
                communioLabelLatin: communioLatin.label,
                communioLatin: communioLatin.body
              })
            ).appendTo("#communioText");
          }
          if (
            sectionsVernacular[i].id === "Postcommunio" ||
            sectionsVernacular[i].id === "Commemoratio Postcommunio"
          ) {
            let postcommunioVernacular = sectionsVernacular[i];
            let postcommunioLatin = sectionsLatin[i];
            $(
              renderTemplate($("#postcommunio").text(), {
                postcommunioLabelVernacular: postcommunioVernacular.label,
                postcommunioVernacular: postcommunioVernacular.body,
                postcommunioLabelLatin: postcommunioLatin.label,
                postcommunioLatin: postcommunioLatin.body
              })
            ).appendTo("#postcommunioText");
          }
        }
      });
    });
  }
});
