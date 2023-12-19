$window.on("load", function () {
  // if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/service-worker.js');
  // }

  /**
   *
   * Globals
   *
   **/

  // Localized strings

  let ploader = new ProperContentLoader(config.dateEndpoint, config.lang);

  function init() {
    moment.locale(config.lang);
    ploader.load(getResourceId(), false);
  }

  init();

  /**
   *
   * Functions
   *
   **/

  function getResourceId() {
    if (selectedResource === undefined) {
      let url = window.location.href;
      selectedResource = url.split("/").reverse()[0];
    }
    let tmpDate = moment(selectedResource, "YYYY-MM-DD");
    if (!tmpDate.isValid()) {
      tmpDate = moment();
    }
    return tmpDate.format("YYYY-MM-DD");
  }

  /**
   *
   * Bindings
   *
   **/

  $window.on("resize", function () {
    adaptSectionColumns();
  });

  window.onpopstate = function (event) {
    setResourceId(event.target.location.href.split("/").reverse()[0]);
    ploader.load(getResourceId(), true);
  };

  /**
   * Switch between lang versions on small screens, where the switch is visible
   **/
  $("input[type=radio][name=lang-switch]").change(function () {
    toggleLangSections(this.id);
  });

  $("#print").on("click", function () {
    printContent($templateContentPrint, $loadedContent.html());
  });

  // Swipe left or right changes the day
  $(document).ready(function () {
    var content = $("#content");
    var initialX = null;

    content.on("touchstart", function (event) {
      initialX = event.originalEvent.touches[0].clientX;
    });

    content.on("touchend", function (event) {
      if (initialX === null) {
        return; // No touchstart recorded
      }

      var finalX = event.originalEvent.changedTouches[0].clientX;
      var deltaX = finalX - initialX;

      // Adjust this threshold based on your requirements
      var swipeThreshold = 50;

      // Calculate the absolute values for deltaX and deltaY
      var absDeltaX = Math.abs(deltaX);

      // Check if the swipe is primarily horizontal
      if (absDeltaX > swipeThreshold) {
        if (deltaX > 0) {
          // Swipe right (add one day)
          var add = moment(getResourceId(), "YYYY-MM-DD")
            .add(1, "day")
            .format("YYYY-MM-DD");
          setResourceId(add);
          ploader.load(add, true);
        } else if (deltaX < 0) {
          // Swipe left (subtract one day)
          var sub = moment(getResourceId(), "YYYY-MM-DD")
            .subtract(1, "day")
            .format("YYYY-MM-DD");
          setResourceId(sub);
          ploader.load(sub, true);
        }
      }

      // Reset initialX for the next touchstart
      initialX = null;
    });
  });
});
