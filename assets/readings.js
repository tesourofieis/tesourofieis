$(window).on("load", function () {
  /**
   *
   * Globals
   *
   **/

  // Making :contains case insensitive
  $.expr[":"].contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
      return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
  });

  const templateContentIntro = $("#template-content-intro").text();
  const templateContentColumns = $("#template-content-columns").text();
  const templateContentPrint = $("#template-content-print").text();

  const $window = $(window);
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
    let tmpDate = document.location.hash;
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
    $.getJSON(config.dateEndpoint + date + ".json", function (data) {
      $main.empty();
      window.scrollTo(0, 0);

      $.each(data, function (index, item) {
        let title = item["info"].title;
        let description = item["info"].description;
        let sectionsVernacular = item.proper_vernacular;
        let sectionsLatin = item.proper_latin;
        let additional_info = [item["info"].date, mapRank(item["info"].rank)];
        if (item["info"].tempora != null) {
          additional_info.push(item["info"].tempora);
        }
        if (item["info"].additional_info != null) {
          $.merge(additional_info, item["info"].additional_info);
        }

        if (title == null) {
          title = moment(item["info"].date, "YYYY-MM-DD").format("DD MMMM");
        }
        $(
          renderTemplate(templateContentIntro, {
            title: title,
            additional_info: additional_info.join(
              '</em> | <em class="rubric">',
            ),
            description: description.split("\n").join("<br />"),
          }),
        ).appendTo($main);

        $.each([sectionsVernacular, sectionsLatin], function (i, sections) {
          // replacing all surrounding asterisks with surrounding <em>s in body
          $.each(sections, function (x, y) {
            sections[x].body = y.body.replace(/\*([^\*]+)\*/g, "<em>$1</em>");
          });
        });
        for (let i = 0; i < sectionsVernacular.length; i++) {
          let sectionVernacular = sectionsVernacular[i];
          let sectionLatin = sectionsLatin[i];
          if (sectionLatin == null) {
            sectionLatin = { label: "", body: "" };
            console.error("Latin sections missing in " + date);
          }
          $(
            renderTemplate(templateContentColumns, {
              labelVernacular: sectionVernacular.label,
              sectionVernacular: sectionVernacular.body
                .split("\n")
                .join("<br />"),
              labelLatin: sectionLatin.label,
              sectionLatin: sectionLatin.body.split("\n").join("<br />"),
            }),
          ).appendTo($main);
        }
      });
    });
  }

  function mapRank(rank) {
    return { 1: "1 classe", 2: "2 classe", 3: "3 classe", 4: "4 classe" }[rank];
  }

  /**
   *
   * Bindings
   *
   **/

  $window.on("resize", function () {
    adaptSectionColumns();
  });

  $window.on("hashchange", function () {
    loadProper(getDate());
  });

  /**
   * Switch between lang versions on small screens, where the switch is visible
   **/
  $("input[type=radio][name=lang-switch]").change(function () {
    toggleLangSections(this);
  });

  $("#print").on("click", function () {
    let newWindow = window.open("", "", "width=650, height=750");
    let newContent = renderTemplate(templateContentPrint, {
      main: $main.html(),
    });
    newWindow.document.write(newContent);
    newWindow.document.close();
    newWindow.focus();
    return true;
  });
});
